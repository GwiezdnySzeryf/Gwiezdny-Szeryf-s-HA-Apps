![Photo Frame Drop logo](https://raw.githubusercontent.com/GwiezdnySzeryf/Gwiezdny-Szeryf-s-HA-Apps/main/photo_frame_drop/icon.png){ width=120 align=right }

# 🖼️ Photo Frame Drop

![HA App](https://img.shields.io/badge/Home%20Assistant-App-blue?logo=home-assistant)
![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)

**Photo Frame Drop** to dodatek do Home Assistanta, który dostarcza interfejs webowy chroniony hasłem do błyskawicznego przesyłania zdjęć z telefonu lub komputera bezpośrednio na dysk HA — gotowy do podłączenia z cyfrową ramką.

!!! tip "Wersja Beta"
    Chcesz testować najnowsze funkcje przed oficjalnym wydaniem? Sprawdź [Photo Frame Drop Beta](../beta.md).

---

## Najważniejsze funkcje

| Funkcja | Opis |
|---|---|
| 📤 Drag & Drop | Przeciągnij zdjęcia wprost do okna przeglądarki |
| 🔒 Ochrona hasłem | Sesje z blokadą brute-force |
| 🖼️ Galeria | Lightbox, miniatury z cache (Pillow), usuwanie fotek |
| 🏠 HA Ingress | Panel boczny bez otwierania portów |
| 🔔 Powiadomienia | Alert przy nowych zdjęciach i nieudanych logowaniach |

---

## Szybki start

1. [Zainstaluj dodatek](installation.md)
2. [Skonfiguruj](configuration.md) folder docelowy i hasło
3. Otwórz panel w Home Assistant i zacznij wgrywać zdjęcia

---

## Wymagania

- Home Assistant z zainstalowanym **Supervisor** (np. HAOS, Supervised)
- Dowolna przeglądarka z obsługą JavaScript
