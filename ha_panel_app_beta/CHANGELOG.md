# Changelog

## 0.1.2

- Dodano domyslna sekcje `layout` w konfiguracji dashboardu: `columns`, `minColumns`, `maxColumns`, `rowHeight` i `compactTiles`.
- Konfiguracja zwracana przez add-on moze teraz sterowac liczba kolumn i wysokoscia wierszy w natywnej aplikacji Android.

## 0.1.1

- Zmieniono port HA Panel App Beta z `8097` na `8197`, zeby uniknac konfliktu z innymi dodatkami.
- Ujednolicono port w `config.yaml`, watchdogu, mapowaniu portow i skrypcie startowym.
- Uruchamianie Uvicorn wskazuje teraz jawnie katalog `/app`, zeby s6 poprawnie znajdowal modul `main`.

## 0.1.0

- Pierwsza wersja beta HA Panel App.
- Dodano panel Ingress, API dashboardu, parowanie tabletow, telemetrie i WebSocket.
- Dodano widok stanu tabletu: bateria, ladowanie, IP, Wi-Fi, ekran, widok, rozdzielczosc i aspect ratio.
- Dodano endpoint SVG QR dla kodu parowania tabletu.
