# Konfiguracja

Po instalacji przejdź do zakładki **Konfiguracja** w dodatku Photo Frame Drop. Poniżej znajdziesz opis każdego ustawienia.

---

## Parametry

### `target_folder` — Folder docelowy

**Typ:** `string`  
**Przykład:** `ramka`

Nazwa podfolderu wewnątrz `/media/`, do którego będą trafiać wgrane zdjęcia.  
Przy pierwszym uruchomieniu folder zostanie utworzony automatycznie.

```yaml
target_folder: ramka
```

!!! tip
    Jeśli używasz integracji **Samba** lub **SMB**, możesz przeglądać folder `/media/ramka` bezpośrednio z komputera.

---

### `password` — Hasło dostępu

**Typ:** `string`

Hasło wymagane do zalogowania się w interfejsie webowym. Używaj długiego, trudnego do zgadnięcia ciągu znaków.

```yaml
password: TrudneHaslo!2024
```

!!! warning "Uwaga"
    Używaj silnego hasła — panel jest dostępny z internetu jeśli korzystasz z zewnętrznego dostępu do HA.

---

### `allowed_extensions` — Dozwolone rozszerzenia

**Typ:** `string` (lista po przecinku)  
**Domyślnie:** `jpg,jpeg,png,webp`

Formaty plików akceptowane przez serwer. Pliki w innych formatach zostaną odrzucone.

```yaml
allowed_extensions: jpg,jpeg,png,webp,gif
```

---

### Powiadomienia

Dodatek może wysyłać powiadomienia push przez Home Assistant w dwóch sytuacjach:

| Zdarzenie | Opis |
|---|---|
| ✅ Nowe zdjęcia | Ktoś pomyślnie wgrał zdjęcia na ramkę |
| ⚠️ Nieudane logowanie | System wykrył próbę włamania z konkretnego IP |

Powiadomienia konfiguruje się w zakładce **Konfiguracja** — możesz wybrać usługę powiadomień i włączyć/wyłączyć każdy typ alertu osobno.

---

## Przykładowa konfiguracja

```yaml
target_folder: ramka
password: TrudneHaslo!2024
allowed_extensions: jpg,jpeg,png,webp
```
