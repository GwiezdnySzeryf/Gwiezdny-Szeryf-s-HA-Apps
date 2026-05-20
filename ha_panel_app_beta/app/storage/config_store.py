from __future__ import annotations

from pathlib import Path

from models.dashboard import DashboardConfig, default_dashboard_config
from storage.json_store import JsonStore


class DashboardConfigStore:
    def __init__(self, data_dir: Path) -> None:
        self.store = JsonStore(data_dir / "dashboard_config.json")

    def get(self) -> DashboardConfig:
        return DashboardConfig.model_validate(self.store.read(default_dashboard_config().model_dump()))

    def set(self, config: DashboardConfig) -> DashboardConfig:
        self.store.write(config.model_dump())
        return config

    def reset_demo(self) -> DashboardConfig:
        config = default_dashboard_config()
        self.store.write(config.model_dump())
        return config
