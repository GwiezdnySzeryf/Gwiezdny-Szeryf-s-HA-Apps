from __future__ import annotations

from fastapi import APIRouter, Depends, Header, HTTPException, Request

from models.actions import DashboardAction
from models.dashboard import DashboardConfig


router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


def get_tablet_from_token(request: Request, authorization: str | None = Header(default=None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing bearer token")
    token = authorization.split(" ", 1)[1]
    tablet = request.app.state.tablet_store.authenticate(token)
    if tablet is None:
        raise HTTPException(status_code=401, detail="Invalid tablet token")
    return tablet


@router.get("/config")
async def get_dashboard_config(request: Request, _tablet=Depends(get_tablet_from_token)) -> DashboardConfig:
    return request.app.state.config_store.get()


@router.get("/admin/config")
async def get_dashboard_config_for_admin(request: Request) -> DashboardConfig:
    return request.app.state.config_store.get()


@router.post("/config")
async def set_dashboard_config(request: Request, config: DashboardConfig) -> DashboardConfig:
    saved = request.app.state.config_store.set(config)
    await request.app.state.ws_manager.broadcast({"type": "config_updated", "config": saved.model_dump()})
    return saved


@router.post("/config/reset-demo")
async def reset_demo_config(request: Request) -> DashboardConfig:
    if not request.app.state.settings.allow_demo_config_reset:
        raise HTTPException(status_code=403, detail="Demo reset disabled")
    saved = request.app.state.config_store.reset_demo()
    await request.app.state.ws_manager.broadcast({"type": "config_updated", "config": saved.model_dump()})
    return saved


@router.get("/state")
async def get_dashboard_state(request: Request, _tablet=Depends(get_tablet_from_token)):
    return {"tablets": [tablet.model_dump() for tablet in request.app.state.tablet_store.public_tablets()]}


@router.post("/action")
async def execute_dashboard_action(request: Request, action: DashboardAction, tablet=Depends(get_tablet_from_token)):
    # MVP: record and broadcast. Service execution against HA Core will be added in the next step.
    message = {"type": "action_received", "tablet_id": tablet.tablet_id, "action": action.model_dump()}
    await request.app.state.ws_manager.broadcast(message)
    return {"status": "accepted", "action": action.model_dump()}
