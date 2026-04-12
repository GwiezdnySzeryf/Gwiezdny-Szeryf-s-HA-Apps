<p align="center">
  <img src="https://github.com/GwiezdnySzeryf/Gwiezdny-Szeryf-s-HA-Apps/blob/main/photo_frame_drop/icon.png" width="140" />
</p>

<h1 align="center">Photo Frame Drop</h1>

<p align="center">
  📸 Simple photo upload for Home Assistant<br>
  🔒 Secure • ⚡ Drag & Drop • 🖼️ Digital frame ready
</p>

<p align="center">
  <a href="https://github.com/GwiezdnySzeryf/Gwiezdny-Szeryf-s-HA-Apps/wiki/Photo-Frame-Drop">
    📖 Documentation
  </a>
  •
  <a href="#-główne-funkcje">Features</a>
  •
  <a href="https://github.com/GwiezdnySzeryf/Gwiezdny-Szeryf-s-HA-Apps/wiki/Photo-Frame-Drop">Configuration</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Home%20Assistant-App-blue?logo=home-assistant" />
  <img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen" />
  <img src="https://img.shields.io/badge/status-active-success" />
</p>


<p align="center">
  Aplikacja dla Home Assistanta, która dostarcza chroniony hasłem interfejs webowy (zarówno przez panel boczny, jak i własny port sieciowy) do łatwego i błyskawicznego przesyłania zdjęć prosto z Twojej komórki lub komputera na dysk Home Assistanta. Gotowe do podłączenia z cyfrową ramką!
</p>




---

## 🎨 Główne funkcje
*   **Intuicyjne Przesyłanie**: Pełne wsparcie dla *Drag & Drop* (Przeciągnij i Upuść) z paskami postępu ładowania,
*   **Zarządzanie Galerią**: Widok pełnoekranowy wybranego zdjęcia (Lightbox), miniatury ładujące się natychmiastowo z cache (Pillow) oraz możliwość usuwania starych fotek z dysku,
*   **Wyśrubowane Bezpieczeństwo**: Sesje logowania na ukrytym hashu SHA-256 z wbudowaną ochroną Brute-Force Rate Limiting na złośliwe logowania (blokada czasowa),
*   **Home Assistant Ingress**: Działa bezpiecznie i prosto, ukrywając wszystkie połączenia i nie wymagając od Ciebie otwierania portów do panelu bocznego,
*   **Integracja**: Powiadomienia, jak tylko ktoś wgra pomyślnie zdjęcia na ramkę, albo kiedy system przyłapie kogoś na niepoprawnym logowaniu!

## ⚙️ Konfiguracja (Ustawienia aplikacji)

1.  **Folder Docelowy** (`target_folder`): Podfolder wewnątrz `/media/` gdzie będą składowane fotki.
2.  **Hasło Dostępu** (`password`): Wpisz trudne do zgadnięcia hasło używane do zalogowania się z przeglądarki na ekran główny wgrywania!
3.  **Dozwolone rozszerzenia** (`allowed_extensions`): Formaty po przecinku np. `jpg,png,webp`. Niezgodny format zostanie brutalnie odrzucony przez serwer.
4.  **Powiadomienia**: Włącz i ustaw wedle własnych preferencji, czy Twoja aplikacja na telefon powinna krzyczeć przy nowych wgranych obrazkach. Domyślnie wysyłane są powiadomienia z adresami IP przy nieudanym logowaniu.
   
*To jest mniejszy brat nowej aplikacji, nad którą trwają prace i która kiedyś się pojawi. W przyszłości przyniesie jeszcze więcej funkcji!*
