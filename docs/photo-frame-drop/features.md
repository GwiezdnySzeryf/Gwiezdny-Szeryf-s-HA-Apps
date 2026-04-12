# Funkcje

## 📤 Drag & Drop z paskami postępu

Interfejs obsługuje przeciąganie i upuszczanie plików — zarówno pojedynczych zdjęć, jak i zaznaczonych grupowo. Każde przesyłane zdjęcie ma własny pasek postępu, dzięki czemu wiesz dokładnie, co się dzieje nawet przy wolniejszym łączu.

---

## 🖼️ Galeria i zarządzanie zdjęciami

Po wgraniu zdjęć masz do dyspozycji pełną galerię z:

- **Miniaturkami** generowanymi przez bibliotekę Pillow i cachowanymi po stronie serwera — ładują się błyskawicznie nawet przy dużej liczbie zdjęć
- **Lightboxem** — kliknij miniaturkę, żeby zobaczyć pełen podgląd bez otwierania nowej karty
- **Usuwaniem** — możesz usuwać zdjęcia bezpośrednio z galerii

---

## 🔒 Bezpieczeństwo

### Sesje na SHA-256

Logowanie opiera się na tokenie sesji zapisanym jako hash SHA-256. Hasło nigdy nie jest przechowywane w postaci jawnej.

### Ochrona przed atakami brute-force

System śledzi nieudane próby logowania. Po przekroczeniu limitu prób adres IP jest tymczasowo blokowany. Przy każdej blokadzie możesz opcjonalnie dostać powiadomienie z adresem IP sprawcy.

---

## 🏠 Home Assistant Ingress

Dodatek działa przez mechanizm **Ingress** wbudowany w Home Assistant — oznacza to, że:

- Panel pojawia się w bocznym menu HA
- Całe połączenie jest tunelowane przez HA — **nie musisz otwierać żadnych dodatkowych portów**
- Działa poprawnie z zewnętrznym dostępem przez Nabu Casa lub własne reverse proxy

---

## 🔔 Powiadomienia

Możesz włączyć powiadomienia push na telefon w dwóch przypadkach:

- ktoś wgra zdjęcia na ramkę (przydatne jeśli panel jest dostępny dla rodziny)
- system wykryje nieudaną próbę logowania

Powiadomienia są wysyłane przez wbudowany system notyfikacji Home Assistanta — działają z każdą skonfigurowaną usługą (Companion App, Telegram, itp.).
