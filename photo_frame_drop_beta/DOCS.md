# Photo Frame Drop (Beta)

**To jest mniejszy brat nowej aplikacji (Aplikacje były wcześniej znane jako Dodatki!), nad którą trwają prace i która wkrótce się pojawi. Wersja Beta służy do testowania nowości tuż przed wydaniem oficjalnym!**

Aplikacja dla Home Assistant, która dostarcza chroniony hasłem interfejs webowy (zarówno przez panel boczny, jak i własny port sieciowy) do łatwego i błyskawicznego przesyłania zdjęć prosto z Twojej komórki lub komputera na dysk Home Assistanta. Gotowe do podłączenia z cyfrową ramką!

---

## 🧪 Co to jest kanał Beta?
Instalując tę aplikację, stajesz się testerem nowych, wprowadzanych tuż po zatwierdzeniu nowości! Wersja Beta zawsze jest co najmniej o krok przed oficjalną. Instalujesz ją obok normalnego dodatku, co pozwala na bezpieczne eksperymentowanie bez obaw o utratę danych ze stabilnej wersji (domyślnie korzysta z portu `8100` i folderu `digital_frame_beta`).

## 🔬 Aktualnie testowane poprawki
*   Czytelniejsze i lokalizowane komunikaty błędów podczas wgrywania zdjęć, np. przy zbyt dużym pliku albo niedozwolonym rozszerzeniu,
*   Walidacja pliku w przeglądarce przed rozpoczęciem uploadu,
*   Osobne pole z pełnym opisem błędu pod odrzuconym plikiem.

## 🎨 Główne funkcje
*   **Intuicyjne Przesyłanie**: Pełne wsparcie dla *Drag & Drop* (Przeciągnij i Upuść) z paskami postępu ładowania,
*   **Zarządzanie Galerią**: Widok pełnoekranowy wybranego zdjęcia (Lightbox), miniatury ładujące się natychmiastowo z cache (Pillow) oraz możliwość usuwania starych fotek z dysku,
*   **Wyśrubowane Bezpieczeństwo**: Sesje logowania na ukrytym hashu SHA-256 z wbudowaną ochroną Brute-Force Rate Limiting na złośliwe logowania (blokada czasowa),
*   **Home Assistant Ingress**: Działa bezpiecznie i prosto, ukrywając wszystkie połączenia i nie wymagając od Ciebie otwierania portów do panelu bocznego,
*   **Integracja**: Powiadomienia na telefon, jak tylko ktoś wgra pomyślnie zdjęcia na ramkę, albo kiedy system przyłapie kogoś na niepoprawnym logowaniu!
