# DoorHAlo

DoorHAlo is a Home Assistant ingress application for doorbell cameras, intercom calls, and two-way talk. It is not meant to replace Frigate. Its focus is the doorbell/intercom experience: seeing who is at the door, answering or rejecting the call, talking to the visitor, and triggering Home Assistant actions such as opening a gate or door.

## Goals

- Provide a clean Home Assistant-style interface for doorbell and intercom workflows.
- Work inside Home Assistant through ingress.
- Support local network use and remote access through the same Home Assistant access path.
- Use existing Home Assistant `camera` entities for video.
- Use existing Home Assistant entities for gate, door, light, mute, and related actions.
- Support Reolink intercoms and Dahua VTO as primary target devices.
- Allow the user to choose between push-to-talk and full-duplex talk in the UI.
- Keep the application focused on doorbell/intercom control rather than general video surveillance.

## Non-Goals

- Replacing Frigate.
- Becoming a full NVR.
- Managing long-term recordings as a primary feature.
- Requiring users to edit Home Assistant YAML for normal configuration.
- Exposing a separate DoorHAlo port to the public internet as the default remote access method.

## Recommended Architecture

DoorHAlo should be built as a Home Assistant app, formerly known as an add-on, with ingress enabled. This follows the current Home Assistant developer terminology: apps are containerized extensions configured through the Supervisor panel.

```txt
Home Assistant
  Sidebar / Ingress
    DoorHAlo frontend
      DoorHAlo backend
        Home Assistant REST API
        Home Assistant WebSocket API
        go2rtc / WebRTC stream paths
        Device adapters: Reolink, Dahua VTO
```

## Access Model

DoorHAlo should be opened from Home Assistant, not as a separate public web service.

- Local access: Home Assistant sidebar via ingress.
- Remote access: the same Home Assistant URL, for example Nabu Casa, VPN, or a secured reverse proxy.
- Authentication: Home Assistant authentication and ingress context.
- Default security posture: no public standalone DoorHAlo endpoint.

This keeps remote access consistent with the rest of Home Assistant and avoids creating another externally exposed control surface for gate or door actions.

## Device Support Strategy

### Video

Video starts from existing Home Assistant `camera` entities. Since go2rtc/WebRTC is already configured, the MVP should assume that low-latency camera playback is available through the existing HA/go2rtc setup.

### Reolink

DoorHAlo should support Reolink in phases:

- Use existing HA `camera` entity for live preview.
- Use existing HA entities for doorbell press, motion, and actions where available.
- Add an adapter only for features that HA does not expose cleanly, especially two-way talk.
- Prefer WebRTC/go2rtc paths for video instead of vendor-specific video playback.

### Dahua VTO

Dahua VTO support should also be adapter-based:

- Use existing HA `camera` entity for live preview.
- Use HA entities/events where available for ring state and door actions.
- Add Dahua-specific handling for SIP/intercom behavior when needed.
- Keep SIP/talk logic isolated from the rest of the app.

## Two-Way Talk Modes

DoorHAlo should expose a simple setting:

- Push-to-talk: microphone streams only while the talk button is pressed.
- Full duplex: microphone and speaker remain active during the call.

Push-to-talk should be the safer default because it is easier to reason about, less likely to cause echo, and friendlier on mobile browsers. Full duplex should be available when the device path supports it reliably.

## Home Assistant Entity Model

The app should be configured through UI selectors rather than YAML. A typical configuration can map to:

```txt
Camera entity: camera.front_door
Doorbell entity: binary_sensor.front_door_ding
Motion entity: binary_sensor.front_door_motion
Gate action entity: button.open_gate
Gate state entity: binary_sensor.gate_open
Wicket action entity: lock.front_door
Wicket state entity: binary_sensor.wicket_open
Porch light entity: light.front_porch
Mute state/helper: input_boolean.doorhalo_muted
Talk mode helper: select.doorhalo_talk_mode or internal DoorHAlo setting
```

Recommended optional entities for a complete setup:

```txt
Device online state: binary_sensor.front_door_online
Talk availability: binary_sensor.front_door_talk_available
Microphone permission/status: internal browser state, exposed in UI
Remote access mode: internal app diagnostic based on ingress/origin
Open confirmation helper: input_boolean.doorhalo_confirm_remote_open or internal setting
Snapshot action/storage: camera.snapshot target or internal snapshot endpoint
```

DoorHAlo should call Home Assistant services based on the entity domain:

```txt
button.* -> button.press
switch.* -> switch.turn_on
lock.* -> lock.unlock
cover.* -> cover.open_cover
light.* -> light.turn_on
input_boolean.* -> input_boolean.turn_on / input_boolean.turn_off
```

Each configured entity should have an enabled/disabled flag. This lets the user decide which parts of the app are active without deleting configuration.

```txt
camera.enabled -> show video surfaces and start shared video component
doorbell.enabled -> listen for incoming call/ring events
gate.enabled -> show gate action buttons
gate_state.enabled -> show real gate state on buttons and cards
wicket.enabled -> show wicket unlock/open action buttons
wicket_state.enabled -> show real wicket state on buttons and cards
light.enabled -> show porch light action buttons
mute_state.enabled -> show whether the doorbell is muted
history.enabled -> store and display DoorHAlo event history
```

Disabled features should hide or dim their related UI controls and should not call Home Assistant services.

## Suggested Add-on Layout

The future implementation can follow the style of the referenced `photo_frame_drop_beta` add-on:

```txt
doorhalo/
  config.yaml
  build.yaml
  Dockerfile
  requirements.txt or package.json
  rootfs/
    etc/services.d/doorhalo/run
    etc/services.d/doorhalo/finish
  app/
    backend/
    frontend/
    static/
  translations/
  DOCS.md
  CHANGELOG.md
  icon.png
  logo.png
```

For the first real add-on version, a Python/FastAPI backend is a practical fit because the reference add-on is Python-based and Home Assistant users often understand that structure. If the final frontend becomes a larger app, React + TypeScript + Vite can be compiled into static files served by the backend.

## UI Direction

DoorHAlo should feel native next to Home Assistant while using Material Design 3 ideas.

### Visual Style

- Rounded cards and large touch targets.
- MD3 tonal surfaces instead of heavy shadows.
- Primary blue aligned with the DoorHAlo logo and Home Assistant accent.
- Clear red for destructive or call-ending actions.
- Green/teal tones for online, answered, and available states.
- Video-first layout.

### Typography

- Headings: Plus Jakarta Sans or a similar rounded modern typeface.
- Body/UI text: Inter or the browser/system fallback.

### Main Screens

- Dashboard: combined overview and live camera tile with status, light control, talk controls, and recent events.
- Incoming Call: focused full-screen state for answering or rejecting a visitor.
- History: list of ring, motion, unlock, snapshot, and talk events.
- Settings: entity mapping, device adapter, talk mode, remote access status.

### Shared Video Component

DoorHAlo should use one shared video component across Dashboard, Live, and Incoming Call instead of creating separate independent stream implementations for each screen.

- Dashboard should render the component as the main live surface, ideally starting lightweight and enabling full controls only when needed.
- Incoming Call should render the same component in focused call mode with the fastest possible startup and minimal non-essential controls.
- Only the active screen should own the live stream session. The app should avoid running three concurrent WebRTC streams for the same camera.
- The component should receive a mode prop/state such as `preview`, `live`, or `call`, and expose the same media lifecycle events to the rest of the app.
- In the future frontend, this should become a reusable component rather than duplicated video markup.

## Event Model

A minimal event entry can look like this:

```ts
type DoorHaloEvent = {
  id: string
  type: "ring" | "motion" | "answered" | "declined" | "unlocked" | "snapshot" | "talk_started" | "talk_ended"
  entityId?: string
  title: string
  subtitle?: string
  createdAt: string
  snapshotUrl?: string
}
```

SQLite in the add-on `/data` directory is enough for MVP event history.

## Mockup

The current mockup is stored in:

```txt
mockup/index.html
```

It is a static, framework-free prototype. It is intended to validate layout, navigation, visual hierarchy, and control grouping before building the actual Home Assistant add-on.
