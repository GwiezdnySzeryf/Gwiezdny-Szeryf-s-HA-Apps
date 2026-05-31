const translations = {
  pl: {
    "nav.dashboard": "Pulpit",
    "nav.call": "Połączenie",
    "nav.history": "Historia",
    "nav.settings": "Ustawienia",
    "nav.options": "Opcje",
    "app.tagline": "Sterowanie wejściem",
    "action.openGate": "Otwórz bramę",
    "action.openDoor": "Otwórz furtkę",
    "action.open": "Otwórz",
    "action.gate": "Brama",
    "action.door": "Furtka",
    "action.opening": "Otwieranie...",
    "action.opened": "Otwarto",
    "call.incomingEyebrow": "Dzwonek do wejścia",
    "call.incomingTitle": "Ktoś jest przy furtce",
    "call.incomingSubtitle": "Sprawdź obraz z kamery i zdecyduj, czy chcesz odebrać rozmowę.",
    "call.answeredEyebrow": "Rozmowa aktywna",
    "call.answeredTitle": "Połączono z wejściem",
    "call.answeredSubtitle": "Mikrofon jest gotowy. Użyj trybu naciśnij i mów albo zakończ rozmowę.",
    "call.declinedEyebrow": "Połączenie zakończone",
    "call.declinedTitle": "Odrzucono dzwonek",
    "call.declinedSubtitle": "Zdarzenie zostanie zapisane w historii aktywności.",
    "call.endedTitle": "Rozmowa zakończona",
    "call.openedWicket": "Furtka otwarta",
    "call.openedGate": "Brama otwarta",
    "call.answer": "Odbierz",
    "call.decline": "Odrzuć",
    "call.end": "Zakończ",
    "action.entryActions": "Otwórz",
    "settings.entities": "Encje Home Assistant",
    "settings.camera": "Kamera",
    "settings.cameraRtsp": "Adres RTSP kamery",
    "settings.cameraRtspHint": "RTSP jest zapisywany do przyszłego adaptera. Przeglądarka nie odtwarza RTSP bezpośrednio, więc obraz na żywo nadal wymaga HA stream, WebRTC albo go2rtc.",
    "settings.cameraSource": "Tryb podglądu kamery",
    "settings.cameraSourceAuto": "Auto: stream, potem snapshot",
    "settings.cameraSourceHa": "Home Assistant stream",
    "settings.cameraSourceSnapshot": "Snapshot co sekundę",
    "settings.cameraSourceHint": "Jeśli obraz live jest niestabilny, wybierz snapshot co sekundę.",
    "settings.autoOpenCall": "Otwieraj ekran dzwonka automatycznie",
    "settings.autoOpenCallHint": "Po wykryciu stanu ON na encji dzwonka Doorhalo przełączy się na ekran połączenia.",
    "settings.confirmActions": "Potwierdzaj otwieranie bramy/furtki",
    "settings.confirmActionsHint": "Dodatkowe zabezpieczenie przed przypadkowym kliknięciem.",
    "settings.talkEnabled": "Włącz rozmowę dwukierunkową",
    "settings.talkEnabledHint": "Pierwszy etap uruchamia mikrofon w przeglądarce. Wysyłka audio do urządzenia wymaga adaptera.",
    "settings.talkAdapter": "Adapter rozmowy",
    "settings.talkAdapterLocal": "Tylko mikrofon lokalny",
    "settings.talkAdapterReolink": "Reolink",
    "settings.talkAdapterDahua": "Dahua VTO",
    "settings.talkAdapterSip": "SIP/WebRTC",
    "settings.talkTarget": "Adres docelowy rozmowy",
    "settings.talkTargetHint": "Opcjonalne miejsce na adres przyszłego adaptera, np. SIP/WebRTC/go2rtc.",
    "settings.doorbell": "Dzwonek",
    "settings.gate": "Brama",
    "settings.door": "Furtka",
    "settings.useCamera": "Używaj kamery",
    "settings.useDoorbell": "Używaj dzwonka",
    "settings.useGate": "Używaj bramy",
    "settings.useGateState": "Stan bramy",
    "settings.useDoor": "Używaj furtki",
    "settings.useDoorState": "Stan furtki",
    "settings.useLight": "Używaj światła",
    "settings.useMuteState": "Stan wyciszenia",
    "settings.useHistory": "Używaj historii",
    "entryStatus.eyebrow": "Stan wejścia",
    "settings.adapter": "Adapter urządzenia",
    "settings.remoteAccess": "Dostęp zdalny",
    "settings.outsideWifi": "Poza Wi-Fi",
    "settings.viaHaUrl": "Przez HA URL",
    "settings.publicPort": "Publiczny port",
    "settings.remoteHint": "Rekomendowane: Nabu Casa, VPN albo zabezpieczony reverse proxy do Home Assistant.",
    "settings.appOptions": "Opcje aplikacji",
    "settings.configHealth": "Zdrowie konfiguracji",
    "settings.configHealthOk": "Konfiguracja OK",
    "settings.configHealthBad": "Wymaga uwagi",
    "settings.configHealthLoading": "Sprawdzanie encji Home Assistant...",
    "settings.configHealthEmpty": "Wszystkie skonfigurowane encje i akcje są dostępne.",
    "settings.language": "Język",
    "settings.darkMode": "Tryb ciemny",
    "settings.darkModeHint": "Podgląd docelowego motywu HA.",
    "settings.infoButton": "Informacje o aplikacji",
    "state.active": "Aktywny",
    "state.disabled": "Wyłączony",
    "state.muted": "Wyciszony",
    "toast.muted": "Wyciszono dzwonek",
    "toast.unmuted": "Dzwonek aktywny",
    "toast.actionFailed": "Akcja Home Assistant nie powiodła się",
    "toast.snapshotFailed": "Nie udało się pobrać snapshotu",
    "toast.microphoneDenied": "Brak dostępu do mikrofonu",
    "toast.talkFailed": "Nie udało się uruchomić rozmowy",
    "confirm.entryAction": "Na pewno wykonać akcję: {action}?",
    "state.closedGate": "Zamknięta",
    "state.openGate": "Otwarta",
    "state.closedWicket": "Zamknięta",
    "state.openWicket": "Otwarta",
    "info.eyebrow": "Informacje",
    "info.description": "Makieta aplikacji ingress dla Home Assistant do obsługi dzwonka, podglądu kamery, rozmowy dwukierunkowej oraz akcji bramy lub drzwi.",
    "info.ingress": "Dostęp lokalny i zdalny przez HA.",
    "info.devices": "Adaptery urządzeń planowane w roadmapie.",
    "talk.pushLabel": "Naciśnij i mów",
    "talk.duplexLabel": "Rozmowa ciągła",
    "info.talkTitle": "Rozmowa dwukierunkowa",
    "info.talk": "Tryb „naciśnij i mów” albo „rozmowa ciągła” wybierany w UI.",
    "talk.pushHint": "Zalecany dla Reolink. Audio przesyłane tylko podczas przytrzymania przycisku. Zmniejsza echo i opóźnienia.",
    "talk.duplexWarning": "Uwaga: Rozmowa ciągła bez słuchawek może powodować sprzężenia akustyczne (echo) na niektórych telefonach.",
    "talk.duplexHint": "Zalecany dla Dahua VTO. Stała, dwukierunkowa transmisja audio bez konieczności trzymania przycisku.",
    "talk.holdLabel": "Przytrzymaj i mów",
    "talk.toggleLabelOn": "Mikrofon włączony",
    "talk.toggleLabelOff": "Włącz mikrofon",
    "talk.statusReady": "Mikrofon gotowy",
    "talk.statusDisabled": "Rozmowa wyłączona",
    "talk.statusLocalOnly": "Mikrofon działa lokalnie. Adapter urządzenia nie jest jeszcze podłączony.",
    "talk.statusLive": "Mów teraz",
    "talk.statusIdle": "Mikrofon nieaktywny",
    "app.type": "Komunikator Ingress",
    "sidebar.ingressActive": "HA Ingress aktywny",
    "sidebar.ingressHint": "Lokalnie i zdalnie przez HA",
    "camera.title": "Kamera dzwonka",
    "camera.mainEntrance": "Wejście główne",
    "status.eyebrow": "Status",
    "status.online": "System online",
    "status.hint": "Reolink i Dahua VTO gotowe do obsługi przez adaptery.",
    "status.loading": "Ładowanie statusu...",
    "status.ok": "System gotowy",
    "status.issue": "Wymaga uwagi",
    "status.offline": "Brak połączenia z HA",
    "status.okHint": "Doorhalo ma połączenie z Home Assistant, a skonfigurowane encje są dostępne.",
    "status.issueHint": "Część skonfigurowanych encji albo akcji nie jest dostępna. Sprawdź Zdrowie konfiguracji w Ustawieniach.",
    "status.offlineHint": "Backend Doorhalo nie ma aktualnie dostępu do API Home Assistant.",
    "status.cameraLive": "Kamera: na żywo",
    "status.cameraSnapshot": "Kamera: snapshot 1s",
    "status.cameraOffline": "Kamera: niedostępna",
    "status.haConnected": "HA połączony",
    "status.configOk": "Konfiguracja OK",
    "status.configIssue": "Błąd konfiguracji",
    "camera.live": "NA ŻYWO",
    "camera.snapshot": "Ładowanie",
    "camera.offline": "OFFLINE",
    "camera.noStream": "BRAK OBRAZU NA ŻYWO",
    "camera.loadingLive": "Ładowanie",
    "events.recentTitle": "Ostatnie zdarzenia",
    "action.seeAll": "Zobacz wszystko",
    "event.ding": "Dzwonek",
    "event.dingHint": "Kurier przy wejściu głównym",
    "event.gateOpen": "Brama otwarta",
    "event.gateOpenHint": "Akcja z Home Assistant",
    "event.motion": "Wykryto ruch",
    "talk.modeTitle": "Tryb rozmowy",
    "history.title": "Historia aktywności",
    "history.export": "Eksport",
    "history.dingAnswered": "Dzwonek odebrany",
    "history.dingAnsweredHint": "Reolink Doorbell, naciśnij i mów",
    "history.missed": "Połączenie nieodebrane",
    "history.missedHint": "Dahua VTO, brak odpowiedzi po 30 s",
    "history.snapshot": "Snapshot zapisany",
    "history.snapshotHint": "Wyzwalacz: dzwonek",
    "history.gateOpen": "Brama otwarta",
    "history.noEvents": "Brak zapisanych zdarzeń",
    "history.gateOpenHint": "Wywołano button.open_gate",
    "time.today1432": "Dziś 14:32",
    "time.today1202": "Dziś 12:02",
    "time.yesterday1817": "Wczoraj 18:17",
    "time.yesterday0811": "Wczoraj 08:11",
  },
  en: {
    "nav.dashboard": "Dashboard",
    "nav.call": "Call",
    "nav.history": "History",
    "nav.settings": "Settings",
    "nav.options": "Options",
    "app.tagline": "Gate entry control",
    "action.openGate": "Open gate",
    "action.openDoor": "Open wicket",
    "action.open": "Open",
    "action.gate": "Gate",
    "action.door": "Wicket",
    "action.opening": "Opening...",
    "action.opened": "Opened",
    "call.incomingEyebrow": "Entry ring",
    "call.incomingTitle": "Someone is at the wicket",
    "call.incomingSubtitle": "Check the camera view and decide whether to answer the call.",
    "call.answeredEyebrow": "Call active",
    "call.answeredTitle": "Connected to entry",
    "call.answeredSubtitle": "Microphone is ready. Use press-and-talk mode or end the call.",
    "call.declinedEyebrow": "Call ended",
    "call.declinedTitle": "Doorbell declined",
    "call.declinedSubtitle": "The event will be saved in activity history.",
    "call.endedTitle": "Call ended",
    "call.openedWicket": "Wicket opened",
    "call.openedGate": "Gate opened",
    "call.answer": "Answer",
    "call.decline": "Decline",
    "call.end": "End",
    "action.entryActions": "Open",
    "settings.entities": "Home Assistant entities",
    "settings.camera": "Camera",
    "settings.cameraRtsp": "Camera RTSP address",
    "settings.cameraRtspHint": "RTSP is saved for a future adapter. Browsers do not play RTSP directly, so live video still requires HA stream, WebRTC, or go2rtc.",
    "settings.cameraSource": "Camera preview mode",
    "settings.cameraSourceAuto": "Auto: stream, then snapshot",
    "settings.cameraSourceHa": "Home Assistant stream",
    "settings.cameraSourceSnapshot": "Snapshot every second",
    "settings.cameraSourceHint": "If live video is unstable, choose snapshot every second.",
    "settings.autoOpenCall": "Open call screen automatically",
    "settings.autoOpenCallHint": "When the doorbell entity turns ON, Doorhalo switches to the call screen.",
    "settings.confirmActions": "Confirm gate/wicket actions",
    "settings.confirmActionsHint": "Extra protection against accidental taps.",
    "settings.talkEnabled": "Enable two-way talk",
    "settings.talkEnabledHint": "The first stage enables the browser microphone. Sending audio to the device requires an adapter.",
    "settings.talkAdapter": "Talk adapter",
    "settings.talkAdapterLocal": "Local microphone only",
    "settings.talkAdapterReolink": "Reolink",
    "settings.talkAdapterDahua": "Dahua VTO",
    "settings.talkAdapterSip": "SIP/WebRTC",
    "settings.talkTarget": "Talk target address",
    "settings.talkTargetHint": "Optional place for a future adapter address, for example SIP/WebRTC/go2rtc.",
    "settings.doorbell": "Doorbell",
    "settings.gate": "Gate",
    "settings.door": "Wicket",
    "settings.useCamera": "Use camera",
    "settings.useDoorbell": "Use doorbell",
    "settings.useGate": "Use gate",
    "settings.useGateState": "Gate state",
    "settings.useDoor": "Use wicket",
    "settings.useDoorState": "Wicket state",
    "settings.useLight": "Use light",
    "settings.useMuteState": "Mute state",
    "settings.useHistory": "Use history",
    "entryStatus.eyebrow": "Entry status",
    "settings.adapter": "Device adapter",
    "settings.remoteAccess": "Remote access",
    "settings.outsideWifi": "Outside Wi-Fi",
    "settings.viaHaUrl": "Via HA URL",
    "settings.publicPort": "Public port",
    "settings.remoteHint": "Recommended: Nabu Casa, VPN, or a secured reverse proxy to Home Assistant.",
    "settings.appOptions": "App options",
    "settings.configHealth": "Configuration health",
    "settings.configHealthOk": "Configuration OK",
    "settings.configHealthBad": "Needs attention",
    "settings.configHealthLoading": "Checking Home Assistant entities...",
    "settings.configHealthEmpty": "All configured entities and actions are available.",
    "settings.language": "Language",
    "settings.darkMode": "Dark mode",
    "settings.darkModeHint": "Preview of the target HA theme.",
    "settings.infoButton": "Application info",
    "state.active": "Active",
    "state.disabled": "Disabled",
    "state.muted": "Muted",
    "toast.muted": "Doorbell muted",
    "toast.unmuted": "Doorbell active",
    "toast.actionFailed": "Home Assistant action failed",
    "toast.snapshotFailed": "Could not download snapshot",
    "toast.microphoneDenied": "Microphone access denied",
    "toast.talkFailed": "Could not start talk",
    "confirm.entryAction": "Run action: {action}?",
    "state.closedGate": "Closed",
    "state.openGate": "Open",
    "state.closedWicket": "Closed",
    "state.openWicket": "Open",
    "info.eyebrow": "Information",
    "info.description": "Ingress application mockup for Home Assistant doorbell, camera preview, two-way talk, and gate or door actions.",
    "info.ingress": "Local and remote access through HA.",
    "info.devices": "Device adapters planned in the roadmap.",
    "talk.pushLabel": "Press and talk",
    "talk.duplexLabel": "Continuous call",
    "info.talkTitle": "Two-way talk",
    "info.talk": "Press-and-talk or continuous full-duplex call selectable in the UI.",
    "talk.pushHint": "Recommended for Reolink. Audio is sent only while holding the button. Reduces echo and delays.",
    "talk.duplexWarning": "Warning: Continuous call without headphones may cause acoustic feedback (echo) on some phones.",
    "talk.duplexHint": "Recommended for Dahua VTO. Constant, two-way audio transmission without needing to hold a button.",
    "talk.holdLabel": "Hold and talk",
    "talk.toggleLabelOn": "Microphone on",
    "talk.toggleLabelOff": "Turn on mic",
    "talk.statusReady": "Microphone ready",
    "talk.statusDisabled": "Talk disabled",
    "talk.statusLocalOnly": "Microphone works locally. Device adapter is not connected yet.",
    "talk.statusLive": "Speak now",
    "talk.statusIdle": "Microphone idle",
    "app.type": "Ingress intercom",
    "sidebar.ingressActive": "HA Ingress active",
    "sidebar.ingressHint": "Locally and remotely via HA",
    "camera.title": "Doorbell camera",
    "camera.mainEntrance": "Main entrance",
    "status.eyebrow": "Status",
    "status.online": "System online",
    "status.hint": "Reolink and Dahua VTO ready to handle via adapters.",
    "status.loading": "Loading status...",
    "status.ok": "System ready",
    "status.issue": "Needs attention",
    "status.offline": "No HA connection",
    "status.okHint": "Doorhalo is connected to Home Assistant and configured entities are available.",
    "status.issueHint": "Some configured entities or actions are unavailable. Check Configuration health in Settings.",
    "status.offlineHint": "Doorhalo backend cannot currently access the Home Assistant API.",
    "status.cameraLive": "Camera: live",
    "status.cameraSnapshot": "Camera: 1s snapshot",
    "status.cameraOffline": "Camera: unavailable",
    "status.haConnected": "HA connected",
    "status.configOk": "Config OK",
    "status.configIssue": "Config issue",
    "camera.live": "LIVE",
    "camera.snapshot": "Loading",
    "camera.offline": "OFFLINE",
    "camera.noStream": "NO LIVE VIDEO",
    "camera.loadingLive": "Loading",
    "events.recentTitle": "Recent events",
    "action.seeAll": "See all",
    "event.ding": "Doorbell",
    "event.dingHint": "Courier at the main entrance",
    "event.gateOpen": "Gate opened",
    "event.gateOpenHint": "Action from Home Assistant",
    "event.motion": "Motion detected",
    "talk.modeTitle": "Talk mode",
    "history.title": "Activity history",
    "history.export": "Export",
    "history.dingAnswered": "Doorbell answered",
    "history.dingAnsweredHint": "Reolink Doorbell, press and talk",
    "history.missed": "Missed call",
    "history.missedHint": "Dahua VTO, no response after 30s",
    "history.snapshot": "Snapshot saved",
    "history.snapshotHint": "Trigger: doorbell",
    "history.gateOpen": "Gate opened",
    "history.noEvents": "No saved events",
    "history.gateOpenHint": "Called button.open_gate",
    "time.today1432": "Today 14:32",
    "time.today1202": "Today 12:02",
    "time.yesterday1817": "Yesterday 18:17",
    "time.yesterday0811": "Yesterday 08:11",
  },
};

const wordmark = '<span class="doorhalo-wordmark">Door<span>ha</span>lo</span>';

const titles = {
  pl: {
    dashboard: `Pulpit ${wordmark}`,
    call: "Dzwonek do wejścia",
    history: "Historia aktywności",
    settings: `Ustawienia ${wordmark}`,
  },
  en: {
    dashboard: `${wordmark} Dashboard`,
    call: "Entry ring",
    history: "Activity history",
    settings: `${wordmark} Settings`,
  },
};

let currentScreen = "dashboard";
let currentLanguage = localStorage.getItem("doorhalo-language") || "pl";
let currentDoorhaloStatus = null;
let cameraStreamCleanups = [];
let currentCameraStreamUrl = "";
let currentCameraSnapshotUrl = "";
let cameraSnapshotTimer = null;
const doorhaloBasePath = window.location.pathname.replace(/\/$/, "");
const entityOptionKeys = {
  camera: "camera_entity",
  doorbell: "doorbell_entity",
  gate: "gate_action",
  "gate-state": "gate_state",
  door: "wicket_action",
  "door-state": "wicket_state",
  light: "light_action",
  "mute-state": "mute_state",
};

const entityDomains = {
  camera: ["camera"],
  doorbell: ["binary_sensor", "sensor"],
  gate: ["button", "switch", "cover", "input_button", "script"],
  "gate-state": ["binary_sensor", "cover", "sensor"],
  door: ["lock", "button", "switch", "input_button", "script"],
  "door-state": ["binary_sensor", "lock", "sensor"],
  light: ["light", "switch"],
  "mute-state": ["input_boolean", "switch"],
};

function doorhaloPath(path) {
  return `${doorhaloBasePath}${path}`;
}

function activateScreen(screenId) {
  currentScreen = screenId;
  document.body.dataset.screen = screenId;
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });

  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screenId);
  });

  document.getElementById("screen-title").innerHTML = titles[currentLanguage][screenId] || wordmark;
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("doorhalo-language", language);
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-action-state]").forEach((element) => {
    const value = translations[language][element.dataset.actionState];
    if (value) element.textContent = value;
  });

  document.getElementById("infoTitle").innerHTML = `${wordmark} Mockup`;
  syncCallLanguage();
  if (currentDoorhaloStatus) applyDoorhaloStatus(currentDoorhaloStatus);

  activateScreen(currentScreen);
}

function syncCallLanguage() {
  const card = document.getElementById("callCard");
  if (!card) return;

  if (card.dataset.callState === "answered") {
    setCallCopy("call.answeredEyebrow", "call.answeredTitle", "call.answeredSubtitle");
    return;
  }

  if (card.dataset.callState === "declined") {
    setCallCopy("call.declinedEyebrow", "call.declinedTitle", "call.declinedSubtitle");
    return;
  }

  setCallCopy("call.incomingEyebrow", "call.incomingTitle", "call.incomingSubtitle");
}

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => activateScreen(button.dataset.screen));
});

const languageSelect = document.getElementById("languageSelect");
languageSelect.value = currentLanguage;
languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));

const entryActionsToggle = document.getElementById("entryActionsToggle");
const entryActions = document.getElementById("entryActions");
const splitOptions = entryActions.querySelector(".split-options");
entryActionsToggle.addEventListener("click", () => {
  const isOpen = entryActions.classList.toggle("open");
  splitOptions.setAttribute("aria-hidden", isOpen ? "false" : "true");
  entryActionsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll("[data-entry-command]").forEach((button) => {
  const state = button.querySelector("[data-action-state]");
  const command = button.dataset.entryCommand;
  const closedKey = command === "gate" ? "state.closedGate" : "state.closedWicket";
  const openKey = command === "gate" ? "state.openGate" : "state.openWicket";

  const dashboardGateState = document.getElementById("dashboardGateState");
  const dashboardWicketState = document.getElementById("dashboardWicketState");
  const dashboardState = command === "gate" ? dashboardGateState : dashboardWicketState;

  button.addEventListener("click", () => {
    if (!confirmEntryAction(command)) return;

    entryActions.classList.add("open");
    splitOptions.setAttribute("aria-hidden", "false");
    entryActionsToggle.setAttribute("aria-expanded", "true");

    button.classList.remove("success", "open-state", "closed-state");
    button.classList.add("running");
    state.dataset.actionState = "action.opening";
    state.textContent = translations[currentLanguage][state.dataset.actionState];

    if (dashboardState) {
      dashboardState.className = "status-gray";
      dashboardState.dataset.actionState = "action.opening";
      dashboardState.textContent = translations[currentLanguage][dashboardState.dataset.actionState];
    }

    callDoorhaloAction(command).catch(() => showToast("toast.actionFailed"));

    window.setTimeout(() => {
      button.classList.remove("running");
      button.classList.add("success", "open-state");
      state.dataset.actionState = openKey;
      state.textContent = translations[currentLanguage][state.dataset.actionState];

      if (dashboardState) {
        dashboardState.className = "status-green";
        dashboardState.dataset.actionState = openKey;
        dashboardState.textContent = translations[currentLanguage][dashboardState.dataset.actionState];
      }
    }, 650);

    window.setTimeout(() => {
      button.classList.remove("success", "open-state");
      button.classList.add("closed-state");
      state.dataset.actionState = closedKey;
      state.textContent = translations[currentLanguage][state.dataset.actionState];

      if (dashboardState) {
        dashboardState.className = "status-gray";
        dashboardState.dataset.actionState = closedKey;
        dashboardState.textContent = translations[currentLanguage][dashboardState.dataset.actionState];
      }
    }, 4200);
  });
});

const callCard = document.getElementById("callCard");
const callEyebrow = document.getElementById("callEyebrow");
const callTitle = document.getElementById("callTitle");
const callSubtitle = document.getElementById("callSubtitle");
const callActions = document.getElementById("callActions");
const callActiveTools = document.getElementById("callActiveTools");
const callResult = document.getElementById("callResult");

function setCallCopy(eyebrowKey, titleKey, subtitleKey) {
  callEyebrow.textContent = translations[currentLanguage][eyebrowKey];
  callTitle.textContent = translations[currentLanguage][titleKey];
  callSubtitle.textContent = translations[currentLanguage][subtitleKey];
}

function resetCallState() {
  callCard.dataset.callState = "incoming";
  callActions.style.display = "flex";
  callActiveTools.classList.remove("active");
  callActiveTools.setAttribute("aria-hidden", "true");
  callResult.textContent = "";
  setCallCopy("call.incomingEyebrow", "call.incomingTitle", "call.incomingSubtitle");
}

document.querySelectorAll("[data-call-action]").forEach((button) => {
  button.addEventListener("click", async () => {
    const action = button.dataset.callAction;

    if (action === "answer") {
      try {
        await startTalkSession();
        callCard.dataset.callState = "answered";
        callActions.style.display = "none";
        callActiveTools.classList.add("active");
        callActiveTools.setAttribute("aria-hidden", "false");
        callResult.textContent = translations[currentLanguage]["talk.statusReady"];
        setCallCopy("call.answeredEyebrow", "call.answeredTitle", "call.answeredSubtitle");
      } catch (error) {
        console.warn("Doorhalo talk start failed", error);
        showToast(error?.name === "NotAllowedError" ? "toast.microphoneDenied" : "toast.talkFailed");
      }
      return;
    }

    if (action === "decline" || action === "end") {
      stopTalkSession().catch(() => undefined);
      callCard.dataset.callState = "declined";
      callActions.style.display = "none";
      callActiveTools.classList.remove("active");
      callActiveTools.setAttribute("aria-hidden", "true");
      callResult.textContent = action === "end" ? translations[currentLanguage]["call.endedTitle"] : translations[currentLanguage]["call.declinedTitle"];
      setCallCopy("call.declinedEyebrow", action === "end" ? "call.endedTitle" : "call.declinedTitle", "call.declinedSubtitle");
      return;
    }

    if (action === "open-wicket" || action === "open-gate") {
      const command = action === "open-wicket" ? "wicket" : "gate";
      if (!confirmEntryAction(command)) return;

      callCard.dataset.callState = "opened";
      const key = action === "open-wicket" ? "call.openedWicket" : "call.openedGate";
      callResult.textContent = translations[currentLanguage][key];
      showToast(key);
      callDoorhaloAction(command).catch(() => showToast("toast.actionFailed"));
    }
  });
});

const cameraLightToggle = document.getElementById("cameraLightToggle");
cameraLightToggle.addEventListener("click", () => {
  if (cameraLightToggle.disabled) return;
  const isOn = cameraLightToggle.classList.toggle("light-on");
  cameraLightToggle.setAttribute("aria-pressed", isOn ? "true" : "false");
  cameraLightToggle.querySelector(".mdi").className = isOn ? "mdi mdi-lightbulb-on" : "mdi mdi-lightbulb-outline";
  callDoorhaloAction("light").catch(() => showToast("toast.actionFailed"));
});

const muteDoorbellToggle = document.getElementById("muteDoorbellToggle");
const muteStateText = document.getElementById("muteStateText");
const appToast = document.getElementById("appToast");
const cameraRtspInput = document.getElementById("cameraRtspInput");
const cameraSourceModeSelect = document.getElementById("cameraSourceModeSelect");
const autoOpenCallToggle = document.getElementById("autoOpenCallToggle");
const confirmActionsToggle = document.getElementById("confirmActionsToggle");
const talkEnabledToggle = document.getElementById("talkEnabledToggle");
const talkAdapterSelect = document.getElementById("talkAdapterSelect");
const talkTargetInput = document.getElementById("talkTargetInput");
const talkStatusText = document.getElementById("talkStatusText");
const exportHistoryButton = document.getElementById("exportHistoryButton");
let toastTimeout;

function showToast(messageKey) {
  window.clearTimeout(toastTimeout);
  appToast.textContent = translations[currentLanguage][messageKey];
  appToast.classList.add("show");
  toastTimeout = window.setTimeout(() => appToast.classList.remove("show"), 1800);
}

async function doorhaloFetch(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

async function callDoorhaloAction(action) {
  const result = await doorhaloFetch(doorhaloPath(`/api/actions/${action}`), { method: "POST" });
  if (result.status) applyDoorhaloStatus(result.status);
  return result;
}

function confirmEntryAction(action) {
  const options = currentDoorhaloStatus?.options || {};
  if (!["gate", "wicket"].includes(action) || options.confirm_entry_actions === false) return true;
  const label = action === "gate" ? translations[currentLanguage]["action.gate"] : translations[currentLanguage]["action.door"];
  const message = translations[currentLanguage]["confirm.entryAction"].replace("{action}", label);
  return window.confirm(message);
}

async function saveDoorhaloOptions(values) {
  const result = await doorhaloFetch(doorhaloPath("/api/options"), {
    method: "POST",
    body: JSON.stringify(values),
  });
  if (result.status) applyDoorhaloStatus(result.status);
}

async function saveDoorhaloOption(row, value) {
  const optionKey = entityOptionKeys[row];
  if (!optionKey) return;
  await saveDoorhaloOptions({ [optionKey]: value });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function iconForDomain(domain) {
  const icons = {
    binary_sensor: "mdi mdi-radiobox-marked",
    button: "mdi mdi-gesture-tap-button",
    camera: "mdi mdi-video",
    cover: "mdi mdi-garage",
    input_boolean: "mdi mdi-toggle-switch",
    input_button: "mdi mdi-gesture-tap-button",
    light: "mdi mdi-lightbulb",
    lock: "mdi mdi-lock",
    script: "mdi mdi-script-text-play",
    sensor: "mdi mdi-access-point",
    switch: "mdi mdi-toggle-switch",
  };
  return icons[domain] || "mdi mdi-home-assistant";
}

function renderEntityOptions(row, entities) {
  const list = document.querySelector(`[data-feature-row="${row}"] .ha-combo-list`);
  if (!list) return;

  const domains = entityDomains[row] || [];
  const matchingEntities = entities.filter((entity) => domains.includes(entity.entity_id.split(".")[0]));
  if (!matchingEntities.length) return;
  const selectedValue = currentDoorhaloStatus?.options?.[entityOptionKeys[row]];

  list.innerHTML = "";
  matchingEntities.forEach((entity) => {
    const option = document.createElement("div");
    option.className = `ha-combo-option${entity.entity_id === selectedValue ? " selected" : ""}`;
    option.dataset.value = entity.entity_id;
    option.innerHTML = `<span class="${iconForDomain(entity.entity_id.split(".")[0])}"></span>${entity.entity_id}`;
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      list.querySelectorAll(".ha-combo-option").forEach((item) => item.classList.remove("selected"));
      option.classList.add("selected");
      const valueSpan = option.closest(".ha-combo-box").querySelector(".ha-combo-value");
      valueSpan.textContent = entity.entity_id;
      option.closest(".ha-combo-box").classList.remove("open");
      saveDoorhaloOption(row, entity.entity_id).catch(() => showToast("toast.actionFailed"));
    });
    list.appendChild(option);
  });
}

async function loadDoorhaloEntities() {
  try {
    const entities = await doorhaloFetch(doorhaloPath("/api/entities"));
    Object.keys(entityDomains).forEach((row) => renderEntityOptions(row, entities));
  } catch (error) {
    console.warn("Doorhalo entities unavailable", error);
  }
}

function entityLooksOpen(entity) {
  return ["on", "open", "opening", "unlocked"].includes(entity?.state);
}

function setEntryState(command, entity) {
  const stateKey = entityLooksOpen(entity)
    ? (command === "gate" ? "state.openGate" : "state.openWicket")
    : (command === "gate" ? "state.closedGate" : "state.closedWicket");
  const element = command === "gate"
    ? document.getElementById("dashboardGateState")
    : document.getElementById("dashboardWicketState");

  if (!element || !entity) return;

  element.className = entityLooksOpen(entity) ? "status-green" : "status-gray";
  element.dataset.actionState = stateKey;
  element.textContent = translations[currentLanguage][stateKey];
}

function setMuteState(entity) {
  if (!entity) return;

  const isMuted = entity.state === "on";
  muteDoorbellToggle.classList.toggle("muted", isMuted);
  muteDoorbellToggle.setAttribute("aria-pressed", isMuted ? "true" : "false");
  muteDoorbellToggle.querySelector(".mdi").className = isMuted ? "mdi mdi-bell-off-outline" : "mdi mdi-bell-ring-outline";
  muteStateText.dataset.i18n = isMuted ? "state.muted" : "state.disabled";
  muteStateText.textContent = translations[currentLanguage][muteStateText.dataset.i18n];
  muteStateText.className = isMuted ? "status-red" : "status-gray";
}

function setCameraLiveState(stateKey) {
  document.querySelectorAll("[data-camera-live-badge]").forEach((badge) => {
    badge.dataset.liveState = stateKey;
    badge.replaceChildren();

    badge.append(document.createTextNode(translations[currentLanguage][`camera.${stateKey}`] || stateKey.toUpperCase()));
    if (stateKey === "snapshot" || stateKey === "loadingLive") {
      const dots = document.createElement("span");
      dots.className = "loading-dots";
      dots.setAttribute("aria-hidden", "true");
      dots.innerHTML = "<i>.</i><i>.</i><i>.</i>";
      badge.append(dots);
    }
  });

  const streamStatus = document.getElementById("cameraStreamStatus");
  if (streamStatus) {
    streamStatus.textContent = translations[currentLanguage][`camera.${stateKey}`] || stateKey;
    if (stateKey === "snapshot" || stateKey === "loadingLive") {
      const dots = document.createElement("span");
      dots.className = "loading-dots";
      dots.setAttribute("aria-hidden", "true");
      dots.innerHTML = "<i>.</i><i>.</i><i>.</i>";
      streamStatus.append(dots);
    }
  }
}

function stopCameraStreams() {
  cameraStreamCleanups.forEach((cleanup) => cleanup());
  cameraStreamCleanups = [];
  currentCameraStreamUrl = "";
  document.querySelectorAll(".camera-live-video, .camera-live-image").forEach((element) => element.remove());
}

function stopCameraSnapshotRefresh() {
  if (cameraSnapshotTimer) {
    window.clearInterval(cameraSnapshotTimer);
    cameraSnapshotTimer = null;
  }
  currentCameraSnapshotUrl = "";
}

function withCacheBuster(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}_doorhalo_ts=${Date.now()}`;
}

function snapshotImageForFrame(frame) {
  let image = frame.querySelector(".camera-snapshot-image");
  if (!image) {
    image = document.createElement("img");
    image.className = "camera-snapshot-image";
    image.alt = "";
    image.decoding = "async";
    frame.prepend(image);
  }
  return image;
}

function paintCameraSnapshot(snapshotUrl) {
  const snapshotWithCacheBuster = withCacheBuster(snapshotUrl);
  document.querySelectorAll(".video-frame.porch-bg").forEach((frame) => {
    const currentImage = snapshotImageForFrame(frame);
    const preload = new Image();
    preload.onload = () => {
      currentImage.src = snapshotWithCacheBuster;
      currentImage.classList.add("loaded");
    };
    preload.src = snapshotWithCacheBuster;
  });
}

function startCameraSnapshotRefresh(snapshotUrl) {
  if (!snapshotUrl) {
    stopCameraSnapshotRefresh();
    return;
  }

  if (snapshotUrl === currentCameraSnapshotUrl && cameraSnapshotTimer) return;

  stopCameraSnapshotRefresh();
  currentCameraSnapshotUrl = snapshotUrl;
  paintCameraSnapshot(snapshotUrl);
  cameraSnapshotTimer = window.setInterval(() => paintCameraSnapshot(snapshotUrl), 1000);
}

function cameraFrameForButton(button) {
  return button.closest(".video-frame") || document.querySelector(".video-frame.porch-bg");
}

async function openCameraFullscreen(button) {
  const frame = cameraFrameForButton(button);
  if (!frame) return;

  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }

  const requestFullscreen = frame.requestFullscreen || frame.webkitRequestFullscreen || frame.msRequestFullscreen;
  if (requestFullscreen) {
    await requestFullscreen.call(frame);
  }
}

async function downloadCameraSnapshot() {
  if (!currentCameraSnapshotUrl) {
    showToast("toast.snapshotFailed");
    return;
  }

  try {
    const response = await fetch(withCacheBuster(currentCameraSnapshotUrl), { cache: "no-store" });
    if (!response.ok) throw new Error("Snapshot request failed");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `doorhalo-${new Date().toISOString().replace(/[:.]/g, "-")}.jpg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.warn("Doorhalo snapshot download failed", error);
    showToast("toast.snapshotFailed");
  }
}

function tokenFromCameraPicture(cameraPicture) {
  if (!cameraPicture) return "";
  try {
    return new URL(cameraPicture, window.location.origin).searchParams.get("token") || "";
  } catch (error) {
    return "";
  }
}

function attachCameraStream(frame, streamUrl) {
  const image = document.createElement("img");
  image.className = "camera-live-image";
  image.alt = "";
  image.decoding = "async";
  frame.prepend(image);

  let isLive = false;
  const removeImageFallback = () => {
    image.remove();
    setCameraLiveState("snapshot");
  };
  const markLive = () => {
    if (isLive) return;
    isLive = true;
    image.classList.add("playing");
    setCameraLiveState("live");
    if (currentDoorhaloStatus) renderSystemStatus(currentDoorhaloStatus);
  };
  image.addEventListener("load", markLive, { once: true });
  image.addEventListener("error", removeImageFallback, { once: true });
  image.src = streamUrl;
  const liveFallbackTimer = window.setTimeout(markLive, 500);
  cameraStreamCleanups.push(() => image.removeAttribute("src"));
  cameraStreamCleanups.push(() => window.clearTimeout(liveFallbackTimer));
  return true;
}

function shouldUseCameraStream(mode) {
  return mode === "auto" || mode === "ha_stream";
}

function attachHlsCameraStream(frame, streamUrl) {
  const video = document.createElement("video");
  video.className = "camera-live-video";
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  frame.prepend(video);

  const removeVideoFallback = () => {
    video.remove();
    setCameraLiveState("snapshot");
  };
  video.addEventListener("playing", () => {
    video.classList.add("playing");
    setCameraLiveState("live");
  }, { once: true });
  video.addEventListener("error", removeVideoFallback, { once: true });

  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = streamUrl;
    cameraStreamCleanups.push(() => video.removeAttribute("src"));
    return true;
  }

  if (window.Hls?.isSupported()) {
    const hls = new window.Hls({ lowLatencyMode: true });
    hls.loadSource(streamUrl);
    hls.attachMedia(video);
    hls.on(window.Hls.Events.ERROR, (_, data) => {
      if (data.fatal) {
        hls.destroy();
        removeVideoFallback();
      }
    });
    cameraStreamCleanups.push(() => hls.destroy());
    return true;
  }

  video.remove();
  return false;
}

function setCameraPreview(entity) {
  const cameraPicture = entity?.attributes?.entity_picture;
  const cameraToken = entity?.attributes?.access_token || tokenFromCameraPicture(cameraPicture);
  const cameraName = entity?.friendly_name || entity?.entity_id || "Camera";
  const frames = document.querySelectorAll(".video-frame.porch-bg");
  const status = document.getElementById("callVideoStatus");
  const encodedEntityId = entity?.entity_id ? encodeURIComponent(entity.entity_id) : "";
  const snapshotUrl = cameraPicture || (encodedEntityId ? doorhaloPath(`/api/camera/${encodedEntityId}/snapshot`) : "");
  const cameraMode = currentDoorhaloStatus?.options?.camera_source_mode || "auto";
  const streamUrl = encodedEntityId && cameraToken
    ? `/api/camera_proxy_stream/${encodedEntityId}?token=${encodeURIComponent(cameraToken)}`
    : (encodedEntityId ? doorhaloPath(`/api/camera/${encodedEntityId}/stream`) : "");
  const effectiveStreamUrl = shouldUseCameraStream(cameraMode) ? streamUrl : "";

  if (!entity?.available) {
    stopCameraStreams();
    stopCameraSnapshotRefresh();
    setCameraLiveState("offline");
  } else if (effectiveStreamUrl) {
    if (effectiveStreamUrl !== currentCameraStreamUrl) {
      stopCameraStreams();
      currentCameraStreamUrl = effectiveStreamUrl;
      setCameraLiveState("loadingLive");
    }
  } else {
    stopCameraStreams();
    setCameraLiveState(snapshotUrl ? "snapshot" : "noStream");
  }

  startCameraSnapshotRefresh(entity?.available ? snapshotUrl : "");

  frames.forEach((frame) => {
    if (!snapshotUrl || !entity?.available) {
      frame.querySelector(".camera-snapshot-image")?.remove();
      return;
    }

    if (effectiveStreamUrl && !frame.querySelector(".camera-live-image, .camera-live-video") && !attachCameraStream(frame, effectiveStreamUrl)) {
      setCameraLiveState("snapshot");
    }
  });

  if (status) {
    status.innerHTML = `<span class="mdi mdi-doorbell-video"></span>${cameraName}`;
  }
}

function setComboRowValue(row, value) {
  const valueElement = document.querySelector(`[data-feature-row="${row}"] .ha-combo-value`);
  if (valueElement) valueElement.textContent = value || "Not configured";

  const list = document.querySelector(`[data-feature-row="${row}"] .ha-combo-list`);
  if (!list) return;
  list.querySelectorAll(".ha-combo-option").forEach((option) => {
    option.classList.toggle("selected", Boolean(value) && option.dataset.value === value);
  });
}

function setFeatureToggle(row, enabled) {
  const toggle = document.querySelector(`[data-feature-row="${row}"] [data-feature-toggle]`);
  const entityRow = toggle?.closest("[data-feature-row]");
  const combo = entityRow?.querySelector(".ha-combo-box");
  if (!toggle || !entityRow) return;
  toggle.checked = enabled;
  if (combo) combo.classList.toggle("disabled", !enabled);
  entityRow.classList.toggle("inactive", !enabled);
}

function formatEventTime(timestamp) {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleString(currentLanguage === "pl" ? "pl-PL" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function iconForEvent(type) {
  const icons = {
    action: "mdi mdi-gesture-tap-button",
    doorbell: "mdi mdi-doorbell-video",
    talk: "mdi mdi-microphone-message",
  };
  return icons[type] || "mdi mdi-history";
}

function renderHistory(events = []) {
  const historyList = document.getElementById("historyList");
  const recentEventList = document.getElementById("recentEventList");
  const empty = `<div class="history-item empty"><span class="mdi mdi-history"></span><div><strong>${translations[currentLanguage]["history.noEvents"]}</strong><small>/data/doorhalo_history.json</small></div><time></time></div>`;

  const markup = events.length
    ? events.map((event) => `
        <div class="history-item">
          <span class="${iconForEvent(event.type)}"></span>
          <div><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.detail || event.entity_id || "")}</small></div>
          <time>${formatEventTime(event.timestamp)}</time>
        </div>`).join("")
    : empty;

  if (historyList) historyList.innerHTML = markup;
  if (recentEventList) {
    recentEventList.innerHTML = events.slice(0, 3).map((event) => `
      <button class="event" data-screen="history">
        <span class="${iconForEvent(event.type)}"></span>
        <div><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.detail || event.entity_id || "")}</small></div>
        <time>${formatEventTime(event.timestamp)}</time>
      </button>`).join("") || empty;
  }
}

function renderConfigHealth(configHealth) {
  const chip = document.getElementById("configHealthChip");
  const summary = document.getElementById("configHealthSummary");
  const list = document.getElementById("configHealthList");
  if (!chip || !summary || !list || !configHealth) return;

  chip.textContent = translations[currentLanguage][configHealth.ok ? "settings.configHealthOk" : "settings.configHealthBad"];
  chip.classList.toggle("success", configHealth.ok);
  const missing = [
    ...(configHealth.missing_entities || []).map((name) => `Missing state: ${name}`),
    ...(configHealth.missing_actions || []).map((name) => `Missing action: ${name}`),
  ];
  summary.textContent = missing.length ? missing.join(", ") : translations[currentLanguage]["settings.configHealthEmpty"];
  list.innerHTML = missing.map((item) => `<span class="chip warning">${escapeHtml(item)}</span>`).join("");
}

function renderSystemStatus(status) {
  const title = document.getElementById("systemStatusTitle");
  const hint = document.getElementById("systemStatusHint");
  const chips = document.getElementById("systemStatusChips");
  if (!title || !hint || !chips || !status) return;

  const haConnected = status.home_assistant?.connected === true;
  const configOk = status.config_health?.ok === true;
  const camera = status.entities?.camera;
  const cameraAvailable = camera?.available === true;
  const cameraLive = document.querySelector(".camera-live-image.playing, .camera-live-video.playing") !== null;

  if (!haConnected) {
    title.textContent = translations[currentLanguage]["status.offline"];
    hint.textContent = translations[currentLanguage]["status.offlineHint"];
  } else if (!configOk) {
    title.textContent = translations[currentLanguage]["status.issue"];
    hint.textContent = translations[currentLanguage]["status.issueHint"];
  } else {
    title.textContent = translations[currentLanguage]["status.ok"];
    hint.textContent = translations[currentLanguage]["status.okHint"];
  }

  const chipData = [
    { label: translations[currentLanguage]["status.haConnected"], className: haConnected ? "success" : "warning" },
    { label: translations[currentLanguage][configOk ? "status.configOk" : "status.configIssue"], className: configOk ? "success" : "warning" },
    {
      label: translations[currentLanguage][cameraLive ? "status.cameraLive" : (cameraAvailable ? "status.cameraSnapshot" : "status.cameraOffline")],
      className: cameraLive ? "success" : (cameraAvailable ? "warning" : "warning"),
    },
  ];

  chips.innerHTML = chipData.map((chip) => `<span class="chip ${chip.className}">${escapeHtml(chip.label)}</span>`).join("");
}

function applyDoorhaloStatus(status) {
  if (!status) return;
  currentDoorhaloStatus = status;

  const options = status.options || {};
  setComboRowValue("camera", options.camera_entity);
  setComboRowValue("doorbell", options.doorbell_entity);
  setComboRowValue("gate", options.gate_action);
  setComboRowValue("gate-state", options.gate_state);
  setComboRowValue("door", options.wicket_action);
  setComboRowValue("door-state", options.wicket_state);
  setComboRowValue("light", options.light_action);
  setComboRowValue("mute-state", options.mute_state);
  if (cameraRtspInput && document.activeElement !== cameraRtspInput) {
    cameraRtspInput.value = options.camera_rtsp_url || "";
  }
  if (cameraSourceModeSelect && document.activeElement !== cameraSourceModeSelect) {
    cameraSourceModeSelect.value = options.camera_source_mode || "auto";
  }
  if (autoOpenCallToggle) autoOpenCallToggle.checked = options.auto_open_call !== false;
  if (confirmActionsToggle) confirmActionsToggle.checked = options.confirm_entry_actions !== false;
  if (talkEnabledToggle) talkEnabledToggle.checked = options.talk_enabled !== false;
  if (talkAdapterSelect && document.activeElement !== talkAdapterSelect) talkAdapterSelect.value = options.talk_adapter || "local_microphone";
  if (talkTargetInput && document.activeElement !== talkTargetInput) talkTargetInput.value = options.talk_target_url || "";
  selectedTalkMode = options.talk_mode || selectedTalkMode;
  updateTalkModeUI();
  updateTalkStatus(status.talk);
  setFeatureToggle("camera", Boolean(options.camera_entity));
  setFeatureToggle("doorbell", Boolean(options.doorbell_entity));
  setFeatureToggle("gate", Boolean(options.gate_action));
  setFeatureToggle("gate-state", Boolean(options.gate_state));
  setFeatureToggle("door", Boolean(options.wicket_action));
  setFeatureToggle("door-state", Boolean(options.wicket_state));
  setFeatureToggle("light", Boolean(options.light_action));
  setFeatureToggle("mute-state", Boolean(options.mute_state));
  setFeatureToggle("history", options.history_enabled !== false);

  const cameraLabel = document.querySelector(".video-overlay.top span:first-child");
  if (cameraLabel) {
    cameraLabel.textContent = status.entities?.camera?.friendly_name || options.camera_entity || "Camera";
  }
  cameraLightToggle.disabled = !options.light_action;
  cameraLightToggle.title = options.light_action || "No light entity configured";

  document.querySelectorAll("[data-entry-command]").forEach((button) => {
    const command = button.dataset.entryCommand;
    button.disabled = !status.actions?.[command]?.exists;
    button.title = status.actions?.[command]?.entity?.entity_id || "No action entity configured";
  });

  muteDoorbellToggle.disabled = !status.actions?.mute?.exists;
  muteDoorbellToggle.title = status.actions?.mute?.entity?.entity_id || "No mute entity configured";

  setEntryState("gate", status.entities?.gate);
  setEntryState("wicket", status.entities?.wicket);
  setMuteState(status.entities?.mute);
  setCameraPreview(status.entities?.camera);
  renderConfigHealth(status.config_health);
  renderHistory(status.history || []);
  renderSystemStatus(status);
}

async function refreshDoorhaloStatus() {
  try {
    applyDoorhaloStatus(await doorhaloFetch(doorhaloPath("/api/status")));
  } catch (error) {
    console.warn("Doorhalo status unavailable", error);
  }
}

async function loadDoorhaloHistory() {
  try {
    renderHistory(await doorhaloFetch(doorhaloPath("/api/history?limit=50")));
  } catch (error) {
    console.warn("Doorhalo history unavailable", error);
  }
}

async function exportDoorhaloHistory() {
  try {
    const events = await doorhaloFetch(doorhaloPath("/api/history?limit=200"));
    const blob = new Blob([JSON.stringify(events, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `doorhalo-history-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.warn("Doorhalo history export failed", error);
    showToast("toast.actionFailed");
  }
}

function connectDoorhaloSocket() {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const socket = new WebSocket(`${protocol}://${window.location.host}${doorhaloPath("/api/ws")}`);

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.type === "snapshot") {
      applyDoorhaloStatus(message.data);
      return;
    }

    if (message.type === "state_changed") {
      const options = currentDoorhaloStatus?.options || {};
      if (options.auto_open_call !== false && message.entity?.entity_id === options.doorbell_entity && message.entity?.state === "on") {
        resetCallState();
        activateScreen("call");
        window.setTimeout(() => {
          if (callCard?.dataset.callState === "incoming") {
            callResult.textContent = translations[currentLanguage]["history.missed"];
          }
        }, 30000);
      }
      refreshDoorhaloStatus();
    }
  });

  socket.addEventListener("close", () => {
    window.setTimeout(connectDoorhaloSocket, 5000);
  });
}

muteDoorbellToggle.addEventListener("click", () => {
  const isMuted = muteDoorbellToggle.classList.toggle("muted");
  muteDoorbellToggle.setAttribute("aria-pressed", isMuted ? "true" : "false");
  muteDoorbellToggle.setAttribute("aria-label", isMuted ? "Włącz dzwonek" : "Wycisz dzwonek");
  muteDoorbellToggle.querySelector(".mdi").className = isMuted ? "mdi mdi-bell-off-outline" : "mdi mdi-bell-ring-outline";
  muteStateText.dataset.i18n = isMuted ? "state.muted" : "state.disabled";
  muteStateText.textContent = translations[currentLanguage][muteStateText.dataset.i18n];
  muteStateText.className = isMuted ? "status-red" : "status-gray";
  showToast(isMuted ? "toast.muted" : "toast.unmuted");
  callDoorhaloAction("mute").catch(() => showToast("toast.actionFailed"));
});

// HA Combo Box custom dropdown logic
document.querySelectorAll(".ha-combo-trigger").forEach((trigger) => {
  const combo = trigger.closest(".ha-combo-box");
  const dropdown = combo.querySelector(".ha-combo-dropdown");
  const searchInput = dropdown.querySelector(".ha-combo-search input");
  const options = dropdown.querySelectorAll(".ha-combo-option");
  const valueSpan = trigger.querySelector(".ha-combo-value");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (combo.classList.contains("disabled")) return;
    
    // Close other dropdowns first
    document.querySelectorAll(".ha-combo-box").forEach((other) => {
      if (other !== combo) other.classList.remove("open");
    });
    
    const isOpen = combo.classList.toggle("open");
    if (isOpen) {
      searchInput.value = "";
      options.forEach(opt => opt.style.display = "flex");
      searchInput.focus();
    }
  });

  searchInput.addEventListener("click", (e) => e.stopPropagation());
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    dropdown.querySelectorAll(".ha-combo-option").forEach((opt) => {
      const text = opt.dataset.value.toLowerCase();
      opt.style.display = text.includes(filter) ? "flex" : "none";
    });
  });

  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      options.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      valueSpan.textContent = opt.dataset.value;
      combo.classList.remove("open");
      const row = trigger.closest("[data-feature-row]")?.dataset.featureRow;
      saveDoorhaloOption(row, opt.dataset.value).catch(() => showToast("toast.actionFailed"));
    });
  });
});

// Close dropdowns on document click
document.addEventListener("click", () => {
  document.querySelectorAll(".ha-combo-box").forEach(c => c.classList.remove("open"));
});

document.getElementById("recentEventList")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-screen='history']")) activateScreen("history");
});

cameraRtspInput?.addEventListener("change", () => {
  saveDoorhaloOptions({ camera_rtsp_url: cameraRtspInput.value.trim() }).catch(() => showToast("toast.actionFailed"));
});

cameraSourceModeSelect?.addEventListener("change", () => {
  stopCameraStreams();
  saveDoorhaloOptions({ camera_source_mode: cameraSourceModeSelect.value }).catch(() => showToast("toast.actionFailed"));
});

autoOpenCallToggle?.addEventListener("change", () => {
  saveDoorhaloOptions({ auto_open_call: autoOpenCallToggle.checked }).catch(() => showToast("toast.actionFailed"));
});

confirmActionsToggle?.addEventListener("change", () => {
  saveDoorhaloOptions({ confirm_entry_actions: confirmActionsToggle.checked }).catch(() => showToast("toast.actionFailed"));
});

talkEnabledToggle?.addEventListener("change", () => {
  if (!talkEnabledToggle.checked) stopTalkSession().catch(() => undefined);
  saveDoorhaloOptions({ talk_enabled: talkEnabledToggle.checked }).catch(() => showToast("toast.actionFailed"));
});

talkAdapterSelect?.addEventListener("change", () => {
  saveDoorhaloOptions({ talk_adapter: talkAdapterSelect.value }).catch(() => showToast("toast.actionFailed"));
});

talkTargetInput?.addEventListener("change", () => {
  saveDoorhaloOptions({ talk_target_url: talkTargetInput.value.trim() }).catch(() => showToast("toast.actionFailed"));
});

exportHistoryButton?.addEventListener("click", exportDoorhaloHistory);

document.querySelectorAll("[data-camera-fullscreen]").forEach((button) => {
  button.addEventListener("click", () => {
    openCameraFullscreen(button).catch(() => showToast("toast.actionFailed"));
  });
});

document.querySelectorAll("[data-camera-snapshot]").forEach((button) => {
  button.addEventListener("click", () => {
    downloadCameraSnapshot();
  });
});

// Talk Mode segmented logic & warning toggle
const talkModeSegmented = document.getElementById("talkModeSegmented");
const talkModeHintText = document.getElementById("talkModeHintText");
const talkModeWarning = document.getElementById("talkModeWarning");

let selectedTalkMode = "push"; // default
let talkSessionId = "";
let talkMediaStream = null;
let talkPttActive = false;

function setTalkButtonLabel(button, labelKey) {
  const label = button.querySelector("span:not(.mdi)");
  if (!label) return;
  label.textContent = translations[currentLanguage][labelKey];
}

if (talkModeSegmented) {
  talkModeSegmented.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      talkModeSegmented.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      
      selectedTalkMode = btn.dataset.mode;
      updateTalkModeUI();
      saveDoorhaloOptions({ talk_mode: selectedTalkMode }).catch(() => showToast("toast.actionFailed"));
    });
  });
}

function updateTalkModeUI() {
  talkModeSegmented?.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.mode === selectedTalkMode);
  });

  if (selectedTalkMode === "push") {
    talkModeHintText.textContent = translations[currentLanguage]["talk.pushHint"];
    talkModeWarning.style.display = "none";
    talkModeWarning.setAttribute("aria-hidden", "true");
    
    // Update active microphone buttons to Hold-To-Talk
    document.querySelectorAll(".talk-button").forEach((btn) => {
      setTalkButtonLabel(btn, "talk.holdLabel");
    });
  } else {
    talkModeHintText.textContent = translations[currentLanguage]["talk.duplexHint"];
    talkModeWarning.style.display = "flex";
    talkModeWarning.setAttribute("aria-hidden", "false");
    
    // Update active microphone buttons to Mute/Unmute toggle style
    document.querySelectorAll(".talk-button").forEach((btn) => {
      setTalkButtonLabel(btn, "talk.toggleLabelOff");
    });
  }
}

function updateTalkStatus(talk) {
  if (!talkStatusText) return;
  if (!talk?.enabled) {
    talkStatusText.textContent = translations[currentLanguage]["talk.statusDisabled"];
    talkStatusText.className = "talk-status warning";
    return;
  }

  const isLocalOnly = talk.adapter === "local_microphone" || talk.audio_transport === "browser_microphone_only";
  talkStatusText.textContent = isLocalOnly
    ? translations[currentLanguage]["talk.statusLocalOnly"]
    : translations[currentLanguage]["talk.statusReady"];
  talkStatusText.className = isLocalOnly ? "talk-status warning" : "talk-status success";
}

async function startTalkSession() {
  const options = currentDoorhaloStatus?.options || {};
  if (options.talk_enabled === false) throw new Error("Talk disabled");
  if (!navigator.mediaDevices?.getUserMedia) throw new Error("Microphone API unavailable");

  if (!talkMediaStream) {
    talkMediaStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      video: false,
    });
  }

  if (!talkSessionId) {
    const result = await doorhaloFetch(doorhaloPath("/api/talk/start"), {
      method: "POST",
      body: JSON.stringify({ mode: selectedTalkMode }),
    });
    talkSessionId = result.session?.id || "";
    updateTalkStatus(result.talk);
  }

  return talkSessionId;
}

async function stopTalkSession() {
  if (talkSessionId) {
    const sessionId = talkSessionId;
    talkSessionId = "";
    await doorhaloFetch(doorhaloPath(`/api/talk/${sessionId}/stop`), { method: "POST" });
  }

  talkPttActive = false;
  document.querySelectorAll(".talk-button").forEach((button) => {
    button.classList.remove("light-on");
    button.style.boxShadow = "";
    button.style.background = "";
  });

  if (talkMediaStream) {
    talkMediaStream.getTracks().forEach((track) => track.stop());
    talkMediaStream = null;
  }

  if (talkStatusText) {
    talkStatusText.textContent = translations[currentLanguage]["talk.statusIdle"];
    talkStatusText.className = "talk-status";
  }
}

async function setPushToTalk(active) {
  if (!talkSessionId) await startTalkSession();
  talkPttActive = active;
  document.querySelectorAll(".talk-button").forEach((button) => {
    button.classList.toggle("light-on", active);
    setTalkButtonLabel(button, active ? "talk.statusLive" : "talk.holdLabel");
    button.style.boxShadow = active ? "0 0 0 8px rgba(3, 169, 244, 0.35)" : "";
  });
  if (talkStatusText) talkStatusText.textContent = translations[currentLanguage][active ? "talk.statusLive" : "talk.statusReady"];
  await doorhaloFetch(doorhaloPath(`/api/talk/${talkSessionId}/ptt`), {
    method: "POST",
    body: JSON.stringify({ active }),
  });
}

// Active microphone hold-to-talk & click-to-toggle logic
document.querySelectorAll(".talk-button").forEach((btn) => {
  // Touch & hold events for Push-to-talk
  const startRecording = (e) => {
    if (selectedTalkMode !== "push") return;
    e.preventDefault();
    setPushToTalk(true).catch((error) => {
      console.warn("Doorhalo push-to-talk failed", error);
      showToast(error?.name === "NotAllowedError" ? "toast.microphoneDenied" : "toast.talkFailed");
    });
  };

  const stopRecording = () => {
    if (selectedTalkMode !== "push" || !talkPttActive) return;
    setPushToTalk(false).catch(() => undefined);
  };

  btn.addEventListener("mousedown", startRecording);
  btn.addEventListener("touchstart", startRecording, { passive: false });
  document.addEventListener("mouseup", stopRecording);
  document.addEventListener("touchend", stopRecording);

  // Click event for Full-duplex toggle
  btn.addEventListener("click", async () => {
    if (selectedTalkMode !== "duplex") return;
    try {
      if (talkSessionId) {
        await stopTalkSession();
        setTalkButtonLabel(btn, "talk.toggleLabelOff");
        return;
      }

      await startTalkSession();
      btn.classList.add("light-on");
      setTalkButtonLabel(btn, "talk.toggleLabelOn");
      btn.style.background = "#177245";
      if (talkStatusText) talkStatusText.textContent = translations[currentLanguage]["talk.statusLive"];
    } catch (error) {
      console.warn("Doorhalo duplex talk failed", error);
      showToast(error?.name === "NotAllowedError" ? "toast.microphoneDenied" : "toast.talkFailed");
    }
  });
});

// Sync features checkbox toggle (disabling custom dropdown)
document.querySelectorAll("[data-feature-toggle]").forEach((toggle) => {
  const rowElement = toggle.closest("[data-feature-row]");
  const combo = rowElement.querySelector(".ha-combo-box");
  const row = rowElement.dataset.featureRow;

  function syncFeatureState() {
    if (combo) {
      combo.classList.toggle("disabled", !toggle.checked);
    }
    rowElement.classList.toggle("inactive", !toggle.checked);
  }

  toggle.addEventListener("change", () => {
    syncFeatureState();
    if (row === "history") {
      saveDoorhaloOptions({ history_enabled: toggle.checked }).catch(() => showToast("toast.actionFailed"));
      return;
    }

    const optionKey = entityOptionKeys[row];
    if (!optionKey) return;
    const selectedValue = toggle.checked ? rowElement.querySelector(".ha-combo-value")?.textContent : "";
    saveDoorhaloOptions({ [optionKey]: selectedValue === "Not configured" ? "" : selectedValue }).catch(() => showToast("toast.actionFailed"));
  });
  syncFeatureState();
});

// Material Design 3 Ripple Effect implementation
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) { ripple.remove(); }

  button.appendChild(circle);
}

document.querySelectorAll(".primary-pill, .nav-item, .event, .mega-action, .split-options button, .ha-combo-trigger, .segmented button, .icon-button, .glass-button").forEach((btn) => {
  btn.classList.add("ripple-container");
  btn.addEventListener("click", createRipple);
});

const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.checked = localStorage.getItem("doorhalo-dark-mode") === "true";
document.body.classList.toggle("dark-theme", darkModeToggle.checked);
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme", darkModeToggle.checked);
  localStorage.setItem("doorhalo-dark-mode", darkModeToggle.checked ? "true" : "false");
});

const infoModal = document.getElementById("infoModal");
document.getElementById("openInfoButton").addEventListener("click", () => {
  infoModal.classList.add("open");
  infoModal.setAttribute("aria-hidden", "false");
});
document.getElementById("closeInfoButton").addEventListener("click", closeInfoModal);
infoModal.addEventListener("click", (event) => {
  if (event.target === infoModal) closeInfoModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeInfoModal();
});

function closeInfoModal() {
  infoModal.classList.remove("open");
  infoModal.setAttribute("aria-hidden", "true");
}

function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  clock.textContent = new Date().toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

setInterval(updateClock, 1000);
updateClock();
applyLanguage(currentLanguage);
updateTalkModeUI();
refreshDoorhaloStatus();
loadDoorhaloEntities();
loadDoorhaloHistory();
connectDoorhaloSocket();
