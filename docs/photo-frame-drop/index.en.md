# 🖼️ Photo Frame Drop

![HA App](https://img.shields.io/badge/Home%20Assistant-App-blue?logo=home-assistant)
![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)

**Photo Frame Drop** is a Home Assistant add-on that provides a password-protected web interface for instantly uploading photos from your phone or computer directly to HA's storage — ready to connect to a digital picture frame.

!!! tip "Beta version"
    Want to test new features before the official release? Check out [Photo Frame Drop Beta](../beta.md).

---

## Key features

| Feature | Description |
|---|---|
| 📤 Drag & Drop | Drop photos directly into the browser window |
| 🔒 Password protection | SHA-256 session tokens, brute-force rate limiting |
| 🖼️ Gallery | Lightbox viewer, Pillow-cached thumbnails, photo deletion |
| 🏠 HA Ingress | Sidebar panel — no port forwarding required |
| 🔔 Notifications | Alert on new uploads and failed login attempts |

---

## Quick start

1. [Install the add-on](installation.md) via the Add-on Store
2. [Configure](configuration.md) the target folder and password
3. Open the panel in Home Assistant and start uploading photos

---

## Requirements

- Home Assistant with **Supervisor** (e.g. HAOS, Supervised)
- Any browser with JavaScript support
