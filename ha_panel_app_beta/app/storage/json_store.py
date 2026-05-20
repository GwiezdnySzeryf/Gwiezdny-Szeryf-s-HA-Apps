from __future__ import annotations

import json
from pathlib import Path
from typing import Any


class JsonStore:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)

    def read(self, default: Any) -> Any:
        if not self.path.exists():
            self.write(default)
            return default
        with self.path.open("r", encoding="utf-8") as file:
            return json.load(file)

    def write(self, data: Any) -> None:
        tmp = self.path.with_suffix(self.path.suffix + ".tmp")
        with tmp.open("w", encoding="utf-8") as file:
            json.dump(data, file, ensure_ascii=False, indent=2, default=str)
            file.write("\n")
        tmp.replace(self.path)
