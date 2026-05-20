from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, Field


class PairingCode(BaseModel):
    code: str
    expires_at: datetime
    created_at: datetime


class TabletTelemetry(BaseModel):
    battery_level: int | None = Field(default=None, ge=0, le=100)
    charging: bool | None = None
    ip_address: str | None = None
    wifi_ssid: str | None = None
    screen_on: bool | None = None
    current_screen: str | None = None
    app_version: str | None = None
    android_version: str | None = None
    model: str | None = None
    screen_width_px: int | None = Field(default=None, ge=1)
    screen_height_px: int | None = Field(default=None, ge=1)
    screen_density: float | None = Field(default=None, ge=0)
    orientation: str | None = None
    aspect_ratio: str | None = None
    last_seen: datetime | None = None


class TabletRecord(BaseModel):
    tablet_id: str
    name: str
    token_hash: str
    created_at: datetime
    last_seen: datetime | None = None
    revoked: bool = False
    telemetry: TabletTelemetry = Field(default_factory=TabletTelemetry)


class PairRequest(BaseModel):
    code: str
    name: str = "Wallpanel Tablet"
    model: str | None = None
    app_version: str | None = None


class PairResponse(BaseModel):
    tablet_id: str
    token: str


class TabletPublic(BaseModel):
    tablet_id: str
    name: str
    created_at: datetime
    last_seen: datetime | None
    revoked: bool
    online: bool
    telemetry: TabletTelemetry
