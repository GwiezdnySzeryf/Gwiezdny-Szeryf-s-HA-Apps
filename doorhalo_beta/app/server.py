import asyncio
import contextlib
import json
import os
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import aiohttp
from fastapi import FastAPI, HTTPException, Response, WebSocket, WebSocketDisconnect
from fastapi.responses import StreamingResponse
from fastapi.staticfiles import StaticFiles


app = FastAPI(title="Doorhalo Ingress Server")

OPTIONS_PATH = Path("/data/options.json")
USER_CONFIG_PATH = Path("/data/doorhalo.json")
HISTORY_PATH = Path("/data/doorhalo_history.json")
HA_REST_URL = os.environ.get("DOORHALO_HA_REST_URL", "http://supervisor/core/api")
HA_WS_URL = os.environ.get("DOORHALO_HA_WS_URL", "ws://supervisor/core/websocket")
MAX_HISTORY_EVENTS = 200

DEFAULT_OPTIONS = {
    "camera_entity": "camera.front_door",
    "camera_rtsp_url": "",
    "doorbell_entity": "binary_sensor.front_door_ding",
    "gate_action": "button.open_gate",
    "gate_state": "binary_sensor.gate_open",
    "wicket_action": "lock.front_door",
    "wicket_state": "binary_sensor.wicket_open",
    "light_action": "",
    "mute_state": "input_boolean.doorhalo_muted",
    "history_enabled": True,
}

STATE_OPTIONS = {
    "camera": "camera_entity",
    "doorbell": "doorbell_entity",
    "gate": "gate_state",
    "wicket": "wicket_state",
    "mute": "mute_state",
}

ACTION_OPTIONS = {
    "gate": "gate_action",
    "wicket": "wicket_action",
    "light": "light_action",
}

ACTION_SERVICES = {
    "automation": "trigger",
    "button": "press",
    "cover": "open_cover",
    "input_button": "press",
    "lock": "unlock",
    "scene": "turn_on",
    "script": "turn_on",
    "switch": "turn_on",
}

ENTITY_DOMAINS = {
    "binary_sensor",
    "button",
    "camera",
    "cover",
    "input_boolean",
    "input_button",
    "light",
    "lock",
    "scene",
    "script",
    "switch",
}


def load_options() -> dict[str, Any]:
    options = DEFAULT_OPTIONS.copy()
    for path in (OPTIONS_PATH, USER_CONFIG_PATH):
        if not path.exists():
            continue
        try:
            options.update(json.loads(path.read_text(encoding="utf-8")))
        except (OSError, json.JSONDecodeError):
            pass
    return options


def save_user_config(config: dict[str, Any]) -> dict[str, Any]:
    current_config = {}
    if USER_CONFIG_PATH.exists():
        try:
            current_config = json.loads(USER_CONFIG_PATH.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            current_config = {}

    allowed_keys = set(DEFAULT_OPTIONS) | {"light_action", "camera_rtsp_url"}
    clean_config = {key: value for key, value in config.items() if key in allowed_keys}
    current_config.update(clean_config)
    USER_CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
    USER_CONFIG_PATH.write_text(json.dumps(current_config, indent=2), encoding="utf-8")
    return load_options()


def load_history(limit: int = 50) -> list[dict[str, Any]]:
    if not HISTORY_PATH.exists():
        return []
    try:
        events = json.loads(HISTORY_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return []
    if not isinstance(events, list):
        return []
    return events[-limit:][::-1]


def append_history(event_type: str, title: str, entity_id: str | None = None, detail: str | None = None) -> None:
    if not load_options().get("history_enabled", True):
        return

    try:
        events = load_history(MAX_HISTORY_EVENTS)[::-1]
        events.append(
            {
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "type": event_type,
                "title": title,
                "entity_id": entity_id,
                "detail": detail,
            }
        )
        HISTORY_PATH.parent.mkdir(parents=True, exist_ok=True)
        HISTORY_PATH.write_text(json.dumps(events[-MAX_HISTORY_EVENTS:], indent=2), encoding="utf-8")
    except OSError:
        pass


def supervisor_token() -> str | None:
    return os.environ.get("SUPERVISOR_TOKEN")


def auth_headers() -> dict[str, str]:
    token = supervisor_token()
    if not token:
        raise HTTPException(status_code=503, detail="Home Assistant token is not available in this environment")
    return {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}


async def ha_request(method: str, path: str, payload: dict[str, Any] | None = None) -> Any:
    timeout = aiohttp.ClientTimeout(total=10)
    async with aiohttp.ClientSession(timeout=timeout, headers=auth_headers()) as session:
        async with session.request(method, f"{HA_REST_URL}{path}", json=payload) as response:
            if response.status >= 400:
                text = await response.text()
                raise HTTPException(status_code=response.status, detail=text or response.reason)
            if response.status == 204:
                return None
            return await response.json()


async def ha_binary_request(path: str) -> tuple[bytes, str]:
    timeout = aiohttp.ClientTimeout(total=15)
    async with aiohttp.ClientSession(timeout=timeout, headers=auth_headers()) as session:
        async with session.get(f"{HA_REST_URL}{path}") as response:
            if response.status >= 400:
                text = await response.text()
                raise HTTPException(status_code=response.status, detail=text or response.reason)
            return await response.read(), response.headers.get("Content-Type", "application/octet-stream")


async def ha_stream_request(path: str) -> StreamingResponse:
    timeout = aiohttp.ClientTimeout(total=None, sock_read=None)
    session = aiohttp.ClientSession(timeout=timeout, headers=auth_headers())
    response = await session.get(f"{HA_REST_URL}{path}")
    if response.status >= 400:
        text = await response.text()
        await session.close()
        raise HTTPException(status_code=response.status, detail=text or response.reason)

    async def stream_body():
        try:
            async for chunk in response.content.iter_chunked(65536):
                yield chunk
        finally:
            response.close()
            await session.close()

    return StreamingResponse(stream_body(), media_type=response.headers.get("Content-Type", "application/octet-stream"))


def compact_state(state: dict[str, Any] | None) -> dict[str, Any] | None:
    if not state:
        return None

    attributes = state.get("attributes") or {}
    return {
        "entity_id": state.get("entity_id"),
        "state": state.get("state"),
        "friendly_name": attributes.get("friendly_name"),
        "attributes": {
            key: value
            for key, value in attributes.items()
            if key in {"device_class", "icon", "entity_picture", "supported_features"}
            or key == "access_token"
        },
        "available": state.get("state") not in {"unavailable", None},
    }


async def get_entity_state(entity_id: str | None) -> dict[str, Any] | None:
    if not entity_id:
        return None
    try:
        return compact_state(await ha_request("GET", f"/states/{entity_id}"))
    except HTTPException as error:
        if error.status_code == 404:
            return {"entity_id": entity_id, "state": "not_found", "available": False}
        raise


async def build_status() -> dict[str, Any]:
    options = load_options()
    entities = {}
    for name, option_key in STATE_OPTIONS.items():
        entities[name] = await get_entity_state(options.get(option_key))

    actions = {}
    for name, option_key in ACTION_OPTIONS.items():
        entity = await get_entity_state(options.get(option_key))
        actions[name] = {"entity": entity, "exists": bool(entity and entity.get("state") != "not_found")}

    mute_entity = await get_entity_state(options.get("mute_state"))
    actions["mute"] = {"entity": mute_entity, "exists": bool(mute_entity and mute_entity.get("state") != "not_found")}

    missing_entities = [name for name, entity in entities.items() if entity and entity.get("state") == "not_found"]
    missing_actions = [name for name, action in actions.items() if action.get("entity") and not action.get("exists")]

    return {
        "status": "ok",
        "home_assistant": {"connected": supervisor_token() is not None},
        "options": options,
        "entities": entities,
        "actions": actions,
        "history": load_history(6),
        "config_health": {
            "ok": not missing_entities and not missing_actions,
            "missing_entities": missing_entities,
            "missing_actions": missing_actions,
        },
    }


def entity_domain(entity_id: str) -> str:
    if "." not in entity_id:
        raise HTTPException(status_code=400, detail=f"Invalid entity_id: {entity_id}")
    return entity_id.split(".", 1)[0]


def service_for_action(entity_id: str, preferred: str | None = None) -> tuple[str, str]:
    domain = entity_domain(entity_id)
    if preferred == "mute" and domain == "input_boolean":
        return domain, "toggle"
    if domain == "light":
        return domain, "toggle" if preferred == "light" else "turn_on"
    service = ACTION_SERVICES.get(domain)
    if not service:
        raise HTTPException(status_code=400, detail=f"Unsupported action domain: {domain}")
    return domain, service


async def call_service(entity_id: str, preferred: str | None = None) -> dict[str, Any]:
    state = await get_entity_state(entity_id)
    if not state or state.get("state") == "not_found":
        raise HTTPException(status_code=404, detail=f"Configured action entity does not exist: {entity_id}")

    domain, service = service_for_action(entity_id, preferred)
    await ha_request("POST", f"/services/{domain}/{service}", {"entity_id": entity_id})
    return {"ok": True, "entity_id": entity_id, "domain": domain, "service": service}


@app.get("/health")
async def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/options")
async def get_options() -> dict[str, Any]:
    return load_options()


@app.post("/api/options")
async def update_options(config: dict[str, Any]) -> dict[str, Any]:
    return {"options": save_user_config(config), "status": await build_status()}


@app.get("/api/status")
async def get_status() -> dict[str, Any]:
    return await build_status()


@app.get("/api/entities")
async def list_entities(domain: str | None = None) -> list[dict[str, Any]]:
    states = await ha_request("GET", "/states")
    selected_domains = {domain} if domain else ENTITY_DOMAINS
    return [
        compact_state(state)
        for state in states
        if entity_domain(state.get("entity_id", "")) in selected_domains
    ]


@app.get("/api/camera/{entity_id}/snapshot")
async def camera_snapshot(entity_id: str) -> Response:
    if entity_domain(entity_id) != "camera":
        raise HTTPException(status_code=400, detail="Only camera entities are supported")
    content, content_type = await ha_binary_request(f"/camera_proxy/{entity_id}")
    return Response(content=content, media_type=content_type, headers={"Cache-Control": "no-store"})


@app.get("/api/camera/{entity_id}/stream")
async def camera_stream(entity_id: str) -> StreamingResponse:
    if entity_domain(entity_id) != "camera":
        raise HTTPException(status_code=400, detail="Only camera entities are supported")
    return await ha_stream_request(f"/camera_proxy_stream/{entity_id}")


@app.get("/api/history")
async def get_history(limit: int = 50) -> list[dict[str, Any]]:
    return load_history(max(1, min(limit, MAX_HISTORY_EVENTS)))


@app.post("/api/actions/{target}")
async def run_action(target: str) -> dict[str, Any]:
    options = load_options()
    if target == "mute":
        entity_id = options.get("mute_state")
    else:
        entity_id = options.get(ACTION_OPTIONS.get(target, ""))

    if not entity_id:
        raise HTTPException(status_code=404, detail=f"No entity configured for action: {target}")

    result = await call_service(entity_id, preferred=target)
    append_history("action", f"Action: {target}", entity_id, f"Called {result['domain']}.{result['service']}")
    result["status"] = await build_status()
    return result


@app.websocket("/api/ws")
async def websocket_state_updates(websocket: WebSocket) -> None:
    await websocket.accept()
    options = load_options()
    tracked_entities = {
        options.get(option_key)
        for option_key in set(STATE_OPTIONS.values()) | set(ACTION_OPTIONS.values())
        if options.get(option_key)
    }

    await websocket.send_json({"type": "snapshot", "data": await build_status()})
    token = supervisor_token()
    if not token:
        await websocket.send_json({"type": "error", "message": "Home Assistant token is not available"})
        await websocket.close()
        return

    ha_ws = None
    client_watch_task = None

    async def watch_client_disconnect() -> None:
        try:
            while True:
                await websocket.receive_text()
        except (WebSocketDisconnect, RuntimeError):
            return

    try:
        timeout = aiohttp.ClientTimeout(total=None, sock_read=None)
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.ws_connect(HA_WS_URL) as ha_ws:
                client_watch_task = asyncio.create_task(watch_client_disconnect())
                await ha_ws.receive_json()
                await ha_ws.send_json({"type": "auth", "access_token": token})
                auth_response = await ha_ws.receive_json()
                if auth_response.get("type") != "auth_ok":
                    await websocket.send_json({"type": "error", "message": "Home Assistant WebSocket auth failed"})
                    await websocket.close()
                    return

                await ha_ws.send_json({"id": 1, "type": "subscribe_events", "event_type": "state_changed"})
                await ha_ws.receive_json()

                while True:
                    if client_watch_task.done():
                        break
                    try:
                        message = await ha_ws.receive(timeout=5)
                    except asyncio.TimeoutError:
                        continue
                    if message.type != aiohttp.WSMsgType.TEXT:
                        if message.type in {aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.ERROR}:
                            break
                        continue
                    data = json.loads(message.data)
                    event = data.get("event", {})
                    state = event.get("data", {}).get("new_state")
                    if state and state.get("entity_id") in tracked_entities:
                        if state.get("entity_id") == options.get("doorbell_entity") and state.get("state") == "on":
                            append_history("doorbell", "Doorbell", state.get("entity_id"), "State changed to on")
                        await websocket.send_json({"type": "state_changed", "entity": compact_state(state)})
    except (WebSocketDisconnect, asyncio.CancelledError):
        return
    except Exception as error:
        try:
            await websocket.send_json({"type": "error", "message": str(error)})
            await websocket.close()
        except RuntimeError:
            pass
    finally:
        if client_watch_task and not client_watch_task.done():
            client_watch_task.cancel()
        if client_watch_task:
            with contextlib.suppress(asyncio.CancelledError, RuntimeError):
                await client_watch_task
        if ha_ws and not ha_ws.closed:
            await ha_ws.close()


app.mount("/", StaticFiles(directory="/app/static", html=True), name="static")
