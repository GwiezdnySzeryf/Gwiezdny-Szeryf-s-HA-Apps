# HA Panel App Beta

HA Panel App Beta to backend konfiguracyjny i kontrolny dla natywnej aplikacji Android wallpanelu Home Assistant.

## Funkcje MVP

- Panel Ingress w ciemnym stylu zgodnym z pozostalymi aplikacjami repozytorium.
- Parowanie tabletow przez jednorazowy kod.
- Token urzadzenia dla Android APK zamiast zapisywania loginu i hasla Home Assistanta.
- Storage konfiguracji i tabletow w standardowym katalogu `/data` add-onu.
- Podglad tabletow: online/offline, bateria, ladowanie, IP, Wi-Fi, ekran, widok, rozdzielczosc, aspect ratio i ostatni kontakt.
- QR parowania tabletu generowany lokalnie przez add-on.
- API HTTP dla konfiguracji dashboardu i akcji.
- WebSocket dla aktualizacji live.

## Endpointy

```text
GET  /health
GET  /api/tablets
POST /api/tablets/pairing-code
GET  /api/tablets/pairing-code/{code}/qr
POST /api/tablets/pair
POST /api/tablets/telemetry
POST /api/tablets/{tablet_id}/revoke
GET  /api/dashboard/config
GET  /api/dashboard/admin/config
POST /api/dashboard/config
POST /api/dashboard/config/reset-demo
GET  /api/dashboard/state
POST /api/dashboard/action
WS   /api/dashboard/ws
```

## Status

To jest wersja beta/szkielet developerski. Nie wykonuje jeszcze realnych akcji Home Assistanta przez HA API; akcje sa przyjmowane i rozglaszane przez WebSocket.
