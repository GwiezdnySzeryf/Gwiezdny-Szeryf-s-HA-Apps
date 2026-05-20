from __future__ import annotations

from typing import Any

from pydantic import BaseModel, Field


class DashboardConfig(BaseModel):
    version: int = 1
    appearance: dict[str, Any] = Field(default_factory=dict)
    theme: dict[str, Any] = Field(default_factory=dict)
    tileAppearance: dict[str, Any] = Field(default_factory=dict)
    topBar: dict[str, Any] = Field(default_factory=dict)
    tiles: list[dict[str, Any]] = Field(default_factory=list)


def default_dashboard_config() -> DashboardConfig:
    return DashboardConfig(
        appearance={
            "themeMode": "system",
            "materialYou": True,
            "tileStyle": "rounded",
            "cornerRadius": 28,
            "tileSpacing": 16,
            "tilePadding": 24,
            "iconScale": 1.0,
            "fontScale": 1.0,
        },
        theme={
            "backgroundColor": "#050608",
            "cardColor": "#1f2028",
            "accentColor": "#f59a00",
            "dangerColor": "#ff4a1f",
            "textColor": "#ffffff",
            "subtitleColor": "#cfcfd6",
        },
        tileAppearance={
            "style": "rounded",
            "cornerRadius": 28,
            "backgroundColor": "#1f2028",
            "activeBackgroundColor": "#2a2b35",
            "borderColor": "#00000000",
            "borderWidth": 0,
            "shadowEnabled": False,
            "iconColor": "#f59a00",
            "textColor": "#ffffff",
            "subtitleColor": "#cfcfd6",
        },
        topBar={
            "showClock": True,
            "showDate": True,
            "showPeopleStatus": True,
            "showAlarmControls": True,
            "people": [],
            "globalActions": [],
        },
        tiles=[
            {
                "id": "lighting",
                "title": "Oswietlenie",
                "icon": "mdi:ceiling-light",
                "type": "navigation",
                "size": "large",
                "visible": True,
                "enabled": True,
                "position": {"x": 0, "y": 0, "w": 2, "h": 1},
                "action": {"type": "navigate", "target": "lighting"},
            },
            {
                "id": "settings",
                "title": "Konfiguracja",
                "icon": "mdi:cog",
                "type": "navigation",
                "size": "small",
                "visible": True,
                "enabled": True,
                "position": {"x": 4, "y": 2, "w": 1, "h": 1},
                "action": {"type": "navigate", "target": "settings"},
            },
        ],
    )
