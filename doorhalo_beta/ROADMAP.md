# DoorHAlo Roadmap

## Phase 1 - Static UI Mockup

- Create one-folder project workspace.
- Add project description and roadmap.
- Add static HTML/CSS/JS mockup.
- Use provided DoorHAlo SVG logo.
- Include responsive desktop and mobile layouts.
- Include screens for Dashboard, Live, Incoming Call, History, and Settings.
- Include UI controls for push-to-talk and full-duplex mode selection.

Status: completed.

## Phase 2 - Home Assistant Add-on Skeleton

- Create `config.yaml` with ingress enabled.
- Create `Dockerfile`.
- Create service scripts under `rootfs/etc/services.d/doorhalo/`.
- Add `/health` endpoint for watchdog.
- Serve the frontend through the backend.
- Keep port internal by default and rely on ingress.

Status: completed.

## Phase 3 - Home Assistant API Integration

- Read Home Assistant URL and supervisor token from add-on environment.
- Fetch entity states through HA REST API.
- Subscribe to entity updates through HA WebSocket API.
- Add backend endpoints for listing cameras, binary sensors, buttons, locks, switches, covers, lights, and helpers.
- Add service-call endpoint with domain-aware validation.

## Phase 4 - Configuration UI

- Add entity selectors for camera, doorbell, motion, gate action, door action, light action, and mute helper.
- Store config in `/data/doorhalo.json` or SQLite.
- Validate configured entities against live HA state.
- Show configuration health in the settings screen.

## Phase 5 - Live Video

- Use existing HA camera entity as the source of truth.
- Prefer already configured go2rtc/WebRTC paths for low-latency playback.
- Build one shared video component used by Dashboard, Live, and Incoming Call modes.
- Avoid running multiple concurrent live streams for the same camera.
- Add fallback placeholder states for offline/unavailable camera.
- Add snapshot action through Home Assistant where available.

## Phase 6 - Doorbell And Incoming Call Flow

- Watch configured doorbell entity for ring events.
- Show incoming call state in the UI.
- Add answer, decline, open gate, open door, mute, and snapshot actions.
- Add event history entries for ring, answer, decline, unlock, and missed call.

## Phase 7 - Reolink Adapter

- Document supported Reolink models and required HA/go2rtc setup.
- Use HA entities first.
- Add Reolink-specific talk support only where HA/go2rtc does not provide enough control.
- Handle device unavailable, stream unavailable, and microphone permission errors clearly.

## Phase 8 - Dahua VTO Adapter

- Document Dahua VTO setup expectations.
- Use HA camera and action entities first.
- Investigate SIP/WebRTC bridge requirements for call and two-way audio.
- Keep Dahua-specific logic isolated in an adapter.

## Phase 9 - Two-Way Talk Modes

- Add push-to-talk mode.
- Add full-duplex mode.
- Make push-to-talk the default.
- Add microphone permission state in UI.
- Add echo/feedback warnings for full duplex.
- Persist selected mode per device.

## Phase 10 - Remote Access Hardening

- Confirm behavior through Home Assistant ingress over Nabu Casa, VPN, and reverse proxy.
- Avoid requiring a separate public DoorHAlo port.
- Add clear diagnostics when camera audio or microphone fails remotely.
- Add optional confirmation for gate/door opening when outside local network, if HA exposes enough context.

## Phase 11 - Event History And Storage

- Store event history in SQLite under `/data`.
- Store snapshots only if explicitly enabled.
- Add retention settings.
- Add filters by event type.

## Phase 12 - Polish And Release

- Add translations.
- Add add-on icon and logo assets.
- Add documentation for installation and configuration.
- Add changelog.
- Test mobile Safari, mobile Chrome, desktop Chrome, desktop Firefox, and Home Assistant companion app webview.
