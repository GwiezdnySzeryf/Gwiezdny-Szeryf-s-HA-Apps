from __future__ import annotations

import io
import json

from fastapi import APIRouter, Header, HTTPException, Request
from fastapi.responses import Response
import qrcode
import qrcode.image.svg

from models.tablet import PairRequest, PairResponse, TabletTelemetry


router = APIRouter(prefix="/api/tablets", tags=["tablets"])


@router.get("")
async def list_tablets(request: Request):
    return [tablet.model_dump() for tablet in request.app.state.tablet_store.public_tablets()]


@router.post("/pairing-code")
async def create_pairing_code(request: Request):
    pairing = request.app.state.tablet_store.create_pairing_code(request.app.state.settings.pairing_code_ttl_seconds)
    payload = pairing.model_dump()
    payload["qr_url"] = f"/api/tablets/pairing-code/{pairing.code}/qr"
    return payload


@router.get("/pairing-code/{code}/qr")
async def pairing_code_qr(code: str, request: Request):
    payload = {
        "type": "ha_panel_pairing",
        "code": code,
        "base_url": request.app.state.settings.public_base_url,
    }
    image = qrcode.make(json.dumps(payload), image_factory=qrcode.image.svg.SvgPathImage)
    buffer = io.BytesIO()
    image.save(buffer)
    return Response(content=buffer.getvalue(), media_type="image/svg+xml")


@router.post("/pair")
async def pair_tablet(request: Request, pair_request: PairRequest) -> PairResponse:
    try:
        tablet, token = request.app.state.tablet_store.consume_pairing_code(
            code=pair_request.code,
            name=pair_request.name,
            model=pair_request.model,
            app_version=pair_request.app_version,
        )
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error

    await request.app.state.ws_manager.broadcast({"type": "tablet_paired", "tablet": request.app.state.tablet_store.to_public(tablet).model_dump()})
    return PairResponse(tablet_id=tablet.tablet_id, token=token)


@router.post("/telemetry")
async def update_tablet_telemetry(request: Request, telemetry: TabletTelemetry, authorization: str | None = Header(default=None)):
    tablet = _authenticate(request, authorization)
    updated = request.app.state.tablet_store.update_telemetry(tablet.tablet_id, telemetry)
    public = request.app.state.tablet_store.to_public(updated)
    await request.app.state.ws_manager.broadcast({"type": "tablet_telemetry", "tablet": public.model_dump()})
    return public.model_dump()


@router.post("/{tablet_id}/revoke")
async def revoke_tablet(request: Request, tablet_id: str):
    try:
        request.app.state.tablet_store.revoke(tablet_id)
    except ValueError as error:
        raise HTTPException(status_code=404, detail=str(error)) from error
    await request.app.state.ws_manager.broadcast({"type": "tablet_revoked", "tablet_id": tablet_id})
    return {"status": "revoked", "tablet_id": tablet_id}


def _authenticate(request: Request, authorization: str | None):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing bearer token")
    tablet = request.app.state.tablet_store.authenticate(authorization.split(" ", 1)[1])
    if tablet is None:
        raise HTTPException(status_code=401, detail="Invalid tablet token")
    return tablet
