from __future__ import annotations

from typing import Any

from pydantic import BaseModel, Field


class DashboardAction(BaseModel):
    type: str
    target: Any = None
    domain: str | None = None
    service: str | None = None
    payload: dict[str, Any] = Field(default_factory=dict)
