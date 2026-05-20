from __future__ import annotations

import logging
import os
import sys
from dataclasses import dataclass
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from api.dashboard import router as dashboard_router
from api.health import router as health_router
from api.tablets import router as tablets_router
from api.websocket import WebSocketManager, router as websocket_router
from storage.config_store import DashboardConfigStore
from storage.tablet_store import TabletStore


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    stream=sys.stdout,
    force=True,
)
logger = logging.getLogger("ha_panel_app")

BASE_DIR = Path(__file__).parent
TEMPLATES_DIR = BASE_DIR / "templates"
STATIC_DIR = BASE_DIR / "static"


@dataclass(frozen=True)
class Settings:
    data_dir: Path
    port: int
    public_base_url: str
    pairing_code_ttl_seconds: int
    telemetry_stale_seconds: int
    allow_demo_config_reset: bool
    supervisor_token: str


def load_settings() -> Settings:
    return Settings(
        data_dir=Path(os.environ.get("HA_PANEL_DATA_DIR", "/tmp/ha-panel-app")),
        port=int(os.environ.get("HA_PANEL_PORT", "8098")),
        public_base_url=os.environ.get("HA_PANEL_PUBLIC_BASE_URL", ""),
        pairing_code_ttl_seconds=int(os.environ.get("HA_PANEL_PAIRING_TTL", "600")),
        telemetry_stale_seconds=int(os.environ.get("HA_PANEL_TELEMETRY_STALE_SECONDS", "120")),
        allow_demo_config_reset=os.environ.get("HA_PANEL_ALLOW_DEMO_RESET", "true").lower() == "true",
        supervisor_token=os.environ.get("HA_PANEL_SUPERVISOR_TOKEN", ""),
    )


def create_app() -> FastAPI:
    settings = load_settings()
    settings.data_dir.mkdir(parents=True, exist_ok=True)

    app = FastAPI(title="HA Panel App", version="0.1.0")
    app.state.settings = settings
    app.state.config_store = DashboardConfigStore(settings.data_dir)
    app.state.tablet_store = TabletStore(settings.data_dir, settings.telemetry_stale_seconds)
    app.state.ws_manager = WebSocketManager()

    app.include_router(health_router)
    app.include_router(dashboard_router)
    app.include_router(tablets_router)
    app.include_router(websocket_router)

    if STATIC_DIR.is_dir():
        app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

    @app.get("/", response_class=HTMLResponse)
    async def index(request: Request) -> HTMLResponse:
        base_path = request.headers.get("X-Ingress-Path", "")
        html = (TEMPLATES_DIR / "index.html").read_text(encoding="utf-8")
        html = html.replace("{{ base_path }}", base_path)
        return HTMLResponse(html)

    logger.info("HA Panel App configured")
    logger.info("  Data dir          : %s", settings.data_dir)
    logger.info("  Port              : %d", settings.port)
    logger.info("  Pairing code TTL  : %d seconds", settings.pairing_code_ttl_seconds)
    logger.info("  Telemetry stale   : %d seconds", settings.telemetry_stale_seconds)
    return app


app = create_app()
