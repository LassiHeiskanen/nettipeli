# Messuvisa - iPad-kioskisovellus

## Yleiskuvaus

Tämä on messuvisa-kyselypeli, joka on suunniteltu toimimaan iPad-laitteella iPadOS 17.2 -versiolla. Sovellus toimii web-pohjaisena sovelluksena Safarissa ja voidaan lisätä Koti-näyttöön toimimaan kiosk-tilassa.

## Tiedostorakenne

```
messuvisa/
├── index.html          # Pääsovellus
├── styles.css          # Tyylit
├── game.js             # Pelilogiikka
├── kysymyspankki1.js   # Kysymyspankki 1 (perustaso)
├── kysymyspankki2.js   # Kysymyspankki 2 (keskitaso)
├── kysymyspankki3.js   # Kysymyspankki 3 (edistynyt)
├── qrcode.min.js       # QR-koodin kirjasto
└── README.md           # Tämä tiedosto
```

## Uudet ominaisuudet (v2.0)

### 2x2 Vastausvaihtoehdot

Vastausvaihtoehdot näytetään nyt 2x2-ruudukossa (2 vierekkäin, 2 allekkain) iPadin vaakanäytöllä. Mobiililaitteilla vaihtoehdot näytetään pystysuunnassa.

### QR-Koodi

QR-koodi generoidaan automaattisesti tulossivulle ja vie suoraan Microsoft Forms -yhteystietolomakkeeseen.

### Supabase-tietokanta

Pelaajien tulokset tallentuvat automaattisesti Supabase-tietokantaan.

---

## Käyttöönotto GitHub Pages -palveluun

### Vaihe 1: Luo GitHub-repositorio

1. Mene osoitteeseen: **github.com**
2. Kirjaudu sisään tai luo uusi tili
3. Valitse "New repository"
4. Nimeä repositorio (esim. "messuvisa")
5. Valitse "Public" ja klikkaa "Create repository"

### Vaihe 2: Lataa tiedostot

1. Klikkaa "uploading an existing file" tai valitse "Add file" > "Upload files"
2. Lataa kaikki tiedostot:
   - index.html
   - styles.css
   - game.js
   - kysymyspankki1.js
   - kysymyspankki2.js
   - kysymyspankki3.js
   - qrcode.min.js
3. Klikkaa "Commit changes"

### Vaihe 3: Aktivoi GitHub Pages

1. Mene repositorion asetuksiin (Settings)
2. Valitse vasemmalta valikosta "Pages"
3. Valitse "Deploy from" ja "main" (tai "master")
4. Odota muutama minuutti kun sivu generoituu
5. Saat URL-osoitteen (esim. `https://sinunimi.github.io/messuvisa/`)

### Vaihe 4: Avaa iPadilla

1. Avaa saamasi URL Safarilla iPadilla
2. Paina Jaa-painiketta (ruudun oikeassa yläreunassa, neliön sisällä nuoli)
3. Valitse "Lisää Koti-näyttöön"
4. Nimeä sovellus (esim. "Messuvisa")
5. Klikkaa "Lisää"

Nyt peli toimii Koti-näytöltä ilman Safari-käyttöliittymää!

---

## Supabase-tietokannan käyttöönotto

### Vaihe 1: Luo Supabase-projekti

1. Mene osoitteeseen: **supabase.com**
2. Kirjaudu sisään tai luo ilmainen tili
3. Valitse "New Project"
4. Anna projektille nimi ja luo Salasana (password)
5. Odota kun projekti luodaan (muutama minuutti)

### Vaihe 2: Kopioi tunnisteet

1. Mene projektin asetuksiin (Settings) > API
2. Kopioi **Project URL** (muotoa `https://xyz123.supabase.co`)
3. Kopioi **anon public** -avain

### Vaihe 3: Lisää tunnisteet game.js-tiedostoon

Avaa `game.js` tekstieditorilla ja etsi:

```javascript
// ==================== SUPABASE-KONFIGURAATIO ====================
// Korvaa omilla arvoilla!
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-KEY';
```

Korvaa arvot:
- `YOUR-PROJECT` → projektisi tunnuksella (URL:stä)
- `YOUR-ANON_KEY` → anon public -avaimella

Tallenna ja lataa tiedosto GitHubiin.

### Vaihe 4: Luo tietokantataulu

Avaa Supabase Dashboard > SQL Editor ja aja:

```sql
CREATE TABLE game_results (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    player_id TEXT,
    score INTEGER,
    total_questions INTEGER
);
```

Klikkaa "Run" suorittaaksesi koodin.

---

## Kysymyspankkien muokkaus

Kysymyspankit ovat erillisiä JavaScript-tiedostoja (`kysymyspankki1.js`, `kysymyspankki2.js`, `kysymyspankki3.js`).

### Tiedoston rakenne

```javascript
const kysymyspankki1 = [
  {
    "kysymys": "Kysymys teksti tähän",
    "vaihtoehdot": ["Vastaus 1", "Vastaus 2", "Vastaus 3", "Vastaus 4"],
    "oikea": 0  // Oikean vastauksen indeksi (0-3)
  },
  // Lisää kysymyksiä...
];
```

### Muokkausohjeet

1. Avaa kysymyspankki tekstieditorilla
2. Lisää, poista tai muokkaa kysymys-objekteja
3. Tallenna tiedosto
4. Lataa päivitetty tiedosto GitHubiin

### Kysymysten määrä

- Jokainen pankki voi sisältää rajattoman määrän kysymyksiä
- Peli valitsee automaattisesti 5 satunnaista kysymystä kustakin pankista
- Kysymykset tulevat järjestyksessä: pankki 1, pankki 2, pankki 3

---

## Pelin toiminta

### Aloitus

Näytöllä vain "Aloita"-painike keskellä.

### Pelin aikana

- 15 kysymystä (5 kustakin pankista)
- 20 sekunnin aika per kysymys
- Vastausvaihtoehdot 2x2-ruudukossa
- Pisteet = jäljellä olevat sekunnit (0-20)
- Aikarajan ylitys = 0 pistettä

### Pelin jälkeen

- Näyttää pelaaja-ID:n ja pisteet
- QR-koodi Forms-yhteystietolomakkeeseen
- Tulokset tallentuvat Supabase-tietokantaan
- "Palaa"-painike aloittaa uuden pelin

---

## Tekniset ominaisuudet

### iPad-yhteensopivuus

- iPadOS 17.2 ja uudemmat
- Landscape-tila (vaaka)
- Kosketusoptimoitu
- Ei zoomausta

### Tiedostokoot

- Kysymyspankit: ~4 KB kukin
- Pääsovellus: ~8 KB
- Yhteensä: ~50 KB

### Toiminta ilman internetyhteyttä

Sovellus toimii offline-tilassa seuraavia toimintoja lukuun ottamatta:
- Supabase-tietokantaan tallennus (vaatii netin)
- QR-koodin skannaaminen (käyttäjän puhelimella)

---

## Vianmääritys

### QR-koodi ei näy

- Tarkista, että qrcode.min.js on ladattu GitHubiin
- Avaa selaimen kehittäjäkonsoli (F12) ja tarkista virheet

### Supabase-tallennus ei toimi

- Varmista, että olet lisännyt oikeat tunnisteet game.js-tiedostoon
- Tarkista, että taulu `game_results` on luotu SQL-koodilla
- Avaa selaimen konsoli ja katso virheilmoituksia

### Peli ei toimi oikein

- Päivitä sivu (Ctrl+F5)
- Tarkista kysymyspankkien syntaksi
- Avaa selaimen kehittäjäkonsoli virheilmoituksia varten

---

## Forms-lomakkeen URL

QR-koodi osoittaa suoraan:

```
https://forms.office.com/e/85u09b7t9R
```

Pelaaja syöttää Pelaaja-ID:n ja yhteystietonsa lomakkeeseen.

---

## Lokalidata

Pelaajan ID ja pisteet tallentuvat iPadin localStorage-muistiin. Tämä mahdollistaa tulosten tarkastelun messujen jälkeen.

### Datan hakeminen

1. Avaa Safari DevTools (iPadissa: Asetukset > Safari > Kehittäjätyökalut)
2. Siirry sovellukseen
3. Tarkista localStorage (messuvisa_results)

---

## Lisenssi

Copyright © 2024 - Messuvisa
