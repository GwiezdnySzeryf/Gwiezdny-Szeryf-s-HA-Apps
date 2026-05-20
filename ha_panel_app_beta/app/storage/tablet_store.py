from __future__ import annotations

import hashlib
import secrets
import uuid
from datetime import UTC, datetime, timedelta
from pathlib import Path

from models.tablet import PairingCode, TabletPublic, TabletRecord, TabletTelemetry
from storage.json_store import JsonStore


def _now() -> datetime:
    return datetime.now(UTC)


def _hash_token(token: str) -> str:
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


class TabletStore:
    def __init__(self, data_dir: Path, stale_seconds: int) -> None:
        self.tablet_store = JsonStore(data_dir / "tablets.json")
        self.pairing_store = JsonStore(data_dir / "pairing_codes.json")
        self.stale_seconds = stale_seconds

    def list_tablets(self) -> list[TabletRecord]:
        data = self.tablet_store.read([])
        return [TabletRecord.model_validate(item) for item in data]

    def save_tablets(self, tablets: list[TabletRecord]) -> None:
        self.tablet_store.write([tablet.model_dump() for tablet in tablets])

    def public_tablets(self) -> list[TabletPublic]:
        return [self.to_public(tablet) for tablet in self.list_tablets()]

    def to_public(self, tablet: TabletRecord) -> TabletPublic:
        online = False
        if tablet.last_seen is not None:
            online = (_now() - tablet.last_seen).total_seconds() <= self.stale_seconds
        return TabletPublic(
            tablet_id=tablet.tablet_id,
            name=tablet.name,
            created_at=tablet.created_at,
            last_seen=tablet.last_seen,
            revoked=tablet.revoked,
            online=online and not tablet.revoked,
            telemetry=tablet.telemetry,
        )

    def create_pairing_code(self, ttl_seconds: int) -> PairingCode:
        self._prune_pairing_codes()
        code = f"{secrets.randbelow(1_000_000):06d}"
        pairing = PairingCode(code=code, created_at=_now(), expires_at=_now() + timedelta(seconds=ttl_seconds))
        codes = self._read_pairing_codes()
        codes.append(pairing)
        self._save_pairing_codes(codes)
        return pairing

    def consume_pairing_code(self, code: str, name: str, model: str | None, app_version: str | None) -> tuple[TabletRecord, str]:
        self._prune_pairing_codes()
        codes = self._read_pairing_codes()
        matching = next((item for item in codes if item.code == code), None)
        if matching is None:
            raise ValueError("Invalid or expired pairing code")

        remaining = [item for item in codes if item.code != code]
        self._save_pairing_codes(remaining)

        token = secrets.token_urlsafe(48)
        telemetry = TabletTelemetry(model=model, app_version=app_version, last_seen=_now())
        tablet = TabletRecord(
            tablet_id=str(uuid.uuid4()),
            name=name.strip() or "Wallpanel Tablet",
            token_hash=_hash_token(token),
            created_at=_now(),
            last_seen=_now(),
            telemetry=telemetry,
        )
        tablets = self.list_tablets()
        tablets.append(tablet)
        self.save_tablets(tablets)
        return tablet, token

    def authenticate(self, token: str | None) -> TabletRecord | None:
        if not token:
            return None
        token_hash = _hash_token(token)
        for tablet in self.list_tablets():
            if not tablet.revoked and tablet.token_hash == token_hash:
                return tablet
        return None

    def update_telemetry(self, tablet_id: str, telemetry: TabletTelemetry) -> TabletRecord:
        tablets = self.list_tablets()
        for index, tablet in enumerate(tablets):
            if tablet.tablet_id == tablet_id:
                merged = tablet.telemetry.model_copy(update=telemetry.model_dump(exclude_unset=True))
                now = _now()
                merged.last_seen = now
                tablet.telemetry = merged
                tablet.last_seen = now
                tablets[index] = tablet
                self.save_tablets(tablets)
                return tablet
        raise ValueError("Tablet not found")

    def revoke(self, tablet_id: str) -> None:
        tablets = self.list_tablets()
        for index, tablet in enumerate(tablets):
            if tablet.tablet_id == tablet_id:
                tablet.revoked = True
                tablets[index] = tablet
                self.save_tablets(tablets)
                return
        raise ValueError("Tablet not found")

    def _read_pairing_codes(self) -> list[PairingCode]:
        return [PairingCode.model_validate(item) for item in self.pairing_store.read([])]

    def _save_pairing_codes(self, codes: list[PairingCode]) -> None:
        self.pairing_store.write([code.model_dump() for code in codes])

    def _prune_pairing_codes(self) -> None:
        now = _now()
        active = [code for code in self._read_pairing_codes() if code.expires_at > now]
        self._save_pairing_codes(active)
