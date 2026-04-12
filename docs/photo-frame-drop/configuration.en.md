# Configuration

After installation, open the **Configuration** tab in the Photo Frame Drop add-on. All available options are described below.

---

## Options

### `target_folder` — Target folder

**Type:** `string`  
**Example:** `frame`

Name of the subfolder inside `/media/` where uploaded photos will be stored.  
The folder is created automatically on first run.

```yaml
target_folder: frame
```

!!! tip
    If you use the **Samba** or **SMB** integration, you can browse `/media/frame` directly from your computer.

---

### `password` — Access password

**Type:** `string`

Password required to log in to the web interface. Use a long, hard-to-guess string.

```yaml
password: StrongPassword!2024
```

!!! warning "Security"
    The password is stored as a SHA-256 hash. Nevertheless, use a strong password — the panel is reachable from the internet if you have external access to your HA.

---

### `allowed_extensions` — Allowed file extensions

**Type:** `string` (comma-separated list)  
**Default:** `jpg,jpeg,png,webp`

File formats accepted by the server. Files in other formats will be rejected.

```yaml
allowed_extensions: jpg,jpeg,png,webp,gif
```

---

### Notifications

The add-on can send push notifications via Home Assistant in two situations:

| Event | Description |
|---|---|
| ✅ New photos | Someone successfully uploaded photos to the frame |
| ⚠️ Failed login | The system detected an unauthorised login attempt |

Notifications are configured in the **Configuration** tab — you can choose your notification service and enable/disable each alert type individually.

---

## Example configuration

```yaml
target_folder: frame
password: StrongPassword!2024
allowed_extensions: jpg,jpeg,png,webp
```
