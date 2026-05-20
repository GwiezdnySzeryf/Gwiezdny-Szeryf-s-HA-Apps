"use strict";

const basePath = window.location.pathname.replace(/\/$/, "");
const api = (path) => `${basePath}${path}`;

const state = {
  tablets: [],
  config: null,
};

const els = {
  tabletCount: document.getElementById("tablet-count"),
  onlineCount: document.getElementById("online-count"),
  wsStatus: document.getElementById("ws-status"),
  tileCount: document.getElementById("tile-count"),
  tabletGrid: document.getElementById("tablet-grid"),
  tabletEmpty: document.getElementById("tablet-empty"),
  configJson: document.getElementById("config-json"),
  apiStatus: document.getElementById("api-status"),
  lastRefresh: document.getElementById("last-refresh"),
  lastWsEvent: document.getElementById("last-ws-event"),
  eventLog: document.getElementById("event-log"),
  pairingCard: document.getElementById("pairing-card"),
  pairingCode: document.getElementById("pairing-code"),
  pairingQr: document.getElementById("pairing-qr"),
  pairingExpiry: document.getElementById("pairing-expiry"),
};

document.getElementById("refresh-btn").addEventListener("click", refreshAll);
document.getElementById("pairing-btn").addEventListener("click", createPairingCode);
document.getElementById("reset-config-btn").addEventListener("click", resetDemoConfig);

refreshAll();
connectWs();

async function refreshAll() {
  await Promise.all([loadTablets(), loadConfig()]);
  els.apiStatus.textContent = "ok";
  els.lastRefresh.textContent = new Date().toLocaleString();
}

async function loadTablets() {
  const response = await fetch(api("/api/tablets"));
  state.tablets = await response.json();
  renderTablets();
}

async function loadConfig() {
  const response = await fetch(api("/api/dashboard/admin/config"));
  state.config = await response.json();
  els.configJson.textContent = JSON.stringify(state.config, null, 2);
  els.tileCount.textContent = String(state.config.tiles?.length ?? 0);
}

async function createPairingCode() {
  const response = await fetch(api("/api/tablets/pairing-code"), { method: "POST" });
  const pairing = await response.json();
  els.pairingCard.hidden = false;
  els.pairingCode.textContent = pairing.code;
  els.pairingQr.src = api(pairing.qr_url);
  els.pairingExpiry.textContent = `Wazny do ${new Date(pairing.expires_at).toLocaleTimeString()}`;
  logEvent(`Utworzono kod parowania ${pairing.code}`);
}

async function resetDemoConfig() {
  const response = await fetch(api("/api/dashboard/config/reset-demo"), { method: "POST" });
  if (!response.ok) {
    logEvent("Reset demo config odrzucony");
    return;
  }
  state.config = await response.json();
  els.configJson.textContent = JSON.stringify(state.config, null, 2);
  els.tileCount.textContent = String(state.config.tiles?.length ?? 0);
  logEvent("Zresetowano konfiguracje demo");
}

function renderTablets() {
  els.tabletGrid.innerHTML = "";
  els.tabletEmpty.hidden = state.tablets.length > 0;
  els.tabletCount.textContent = String(state.tablets.length);
  els.onlineCount.textContent = String(state.tablets.filter((tablet) => tablet.online).length);

  for (const tablet of state.tablets) {
    const telemetry = tablet.telemetry || {};
    const battery = telemetry.battery_level ?? "-";
    const charging = telemetry.charging === true;
    const batteryClass = charging ? "battery-charging" : (Number(battery) <= 20 ? "battery-low" : "");
    const resolution = formatResolution(telemetry);
    const aspectRatio = telemetry.aspect_ratio || calculateAspectRatio(telemetry.screen_width_px, telemetry.screen_height_px) || "-";
    const card = document.createElement("article");
    card.className = "tablet-card";
    card.innerHTML = `
      <div class="tablet-top">
        <div class="tablet-icon">▣</div>
        <div>
          <div class="tablet-name">${escapeHtml(tablet.name)}</div>
          <div class="tablet-model">${escapeHtml(telemetry.model || "nieznany model")}</div>
        </div>
        <span class="status-pill ${tablet.online ? "status-online" : "status-offline"}">${tablet.online ? "online" : "offline"}</span>
      </div>
      <div class="tablet-facts">
        <div class="fact ${batteryClass}"><span>Bateria</span><strong>${battery}${battery === "-" ? "" : "%"}${charging ? " + ladowanie" : ""}</strong></div>
        <div class="fact"><span>IP</span><strong>${escapeHtml(telemetry.ip_address || "-")}</strong></div>
        <div class="fact"><span>Ekran</span><strong>${telemetry.screen_on === false ? "wylaczony" : telemetry.screen_on === true ? "wlaczony" : "-"}</strong></div>
        <div class="fact"><span>Widok</span><strong>${escapeHtml(telemetry.current_screen || "-")}</strong></div>
        <div class="fact"><span>Wi-Fi</span><strong>${escapeHtml(telemetry.wifi_ssid || "-")}</strong></div>
        <div class="fact"><span>Rozdzielczosc</span><strong>${escapeHtml(resolution)}</strong></div>
        <div class="fact"><span>Aspect ratio</span><strong>${escapeHtml(aspectRatio)}</strong></div>
        <div class="fact"><span>Orientacja</span><strong>${escapeHtml(telemetry.orientation || "-")}</strong></div>
        <div class="fact"><span>Ostatnio</span><strong>${tablet.last_seen ? new Date(tablet.last_seen).toLocaleTimeString() : "-"}</strong></div>
      </div>
    `;
    els.tabletGrid.appendChild(card);
  }
}

function formatResolution(telemetry) {
  if (!telemetry.screen_width_px || !telemetry.screen_height_px) {
    return "-";
  }
  const density = telemetry.screen_density ? ` @ ${Number(telemetry.screen_density).toFixed(2)}x` : "";
  return `${telemetry.screen_width_px} x ${telemetry.screen_height_px}${density}`;
}

function calculateAspectRatio(width, height) {
  if (!width || !height) {
    return null;
  }
  const divisor = gcd(Number(width), Number(height));
  return `${Math.round(width / divisor)}:${Math.round(height / divisor)}`;
}

function gcd(a, b) {
  while (b) {
    const next = a % b;
    a = b;
    b = next;
  }
  return Math.abs(a) || 1;
}

function connectWs() {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const url = `${protocol}://${window.location.host}${api("/api/dashboard/ws")}`;
  const ws = new WebSocket(url);
  ws.addEventListener("open", () => {
    els.wsStatus.textContent = "online";
    logEvent("WebSocket polaczony");
  });
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    els.lastWsEvent.textContent = message.type || "unknown";
    if (["tablet_paired", "tablet_telemetry", "tablet_revoked"].includes(message.type)) {
      loadTablets();
    }
    if (message.type === "config_updated") {
      state.config = message.config;
      els.configJson.textContent = JSON.stringify(state.config, null, 2);
      els.tileCount.textContent = String(state.config.tiles?.length ?? 0);
    }
    logEvent(`WS: ${message.type}`);
  });
  ws.addEventListener("close", () => {
    els.wsStatus.textContent = "offline";
    logEvent("WebSocket rozlaczony, ponawiam za 3s");
    setTimeout(connectWs, 3000);
  });
}

function logEvent(text) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = `${new Date().toLocaleTimeString()} ${text}`;
  els.eventLog.prepend(entry);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[char]));
}
