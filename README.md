# NomiPost – Landingpage

Eine Validierungs-Landingpage für **NomiPost**: ein monatlicher, handgemachter
Brief für Kinder im Premium-Kinderbuch-Look. Gebaut mit Next.js 14 (App Router),
TypeScript, Tailwind CSS und Framer Motion.

Die Seite folgt konsequent dem NomiPost Brand Identity Playbook
(Warmcreme-Hintergründe, Nomi-Violett, Mattgold, Aquarell-Texturen,
handgezeichnete Linien, Fraunces-Serif + Inter).

## Was die Seite kann

- **Landingpage** mit Hero, Brief-Anatomie, Ablauf, „Wer ist Nomi?", FAQ und Footer.
- **Warteliste-Formular** in 3 Schritten (Kontakt → Kind → Umfrage).
- **Umfrage-Daten:** Preisvorstellung, Alter, Interessen, wichtigste Kriterien,
  Häufigkeit, Herkunft, Freitext-Feedback.
- **Admin-Dashboard** unter `/admin` mit Passwortschutz, Live-Statistiken und CSV-Export.
- **Zwei Speicher-Modi:**
  - **Supabase** (empfohlen für Produktion)
  - **Lokale JSON-Datei** (`data/waitlist.json`) als Fallback für die Entwicklung.

## Schnellstart (lokal)

```bash
# 1. Dependencies installieren
npm install

# 2. .env.local anlegen (optional, siehe unten)
cp .env.example .env.local

# 3. Dev-Server starten
npm run dev
```

Die Seite läuft dann unter `http://localhost:3000`. Das Admin-Dashboard erreichst
du unter `http://localhost:3000/admin` – das Default-Passwort ist
`nomi-geheim-2026` (änderbar über `ADMIN_PASSWORD` in `.env.local`).

Ohne weitere Konfiguration werden Warteliste-Einträge in `data/waitlist.json`
gespeichert. Diese Datei ist via `.gitignore` vom Commit ausgeschlossen.

## Supabase einrichten (für Deployment)

Für den Produktiveinsatz (z. B. auf Vercel) ist eine Datenbank nötig, weil
serverless Dateisysteme nicht persistent sind. Supabase ist kostenlos, einfach
und hat ein schönes Dashboard zum Ansehen der Einträge.

1. **Projekt erstellen:** Erstelle ein kostenloses Projekt auf
   [supabase.com](https://supabase.com).

2. **Tabelle anlegen:** Öffne im Supabase-Dashboard den **SQL Editor** und führe
   das folgende SQL aus:

   ```sql
   create table public.waitlist (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz not null default now(),
     parent_name text not null,
     email text not null,
     -- Bonus-Umfrage (freiwillig, wird via /api/waitlist/survey befüllt)
     wishes text,
     price_expectation text,
     -- DSGVO: Nachweis der Einwilligung (Art. 7 Abs. 1 DSGVO)
     consent_contact boolean not null default false,
     consent_at timestamptz not null default now(),
     consent_text_version text not null,
     -- Double-Opt-In (§ 7 Abs. 2 UWG, BGH I ZR 164/09)
     confirmation_token text,
     confirmed_at timestamptz,
     -- IP-Nachweis gemäß Art. 6 Abs. 1 lit. f i.V.m. Art. 7 Abs. 1 DSGVO
     ip_signup text,
     ip_confirm text
   );

   create unique index waitlist_email_idx on public.waitlist (lower(email));
   create index waitlist_token_idx on public.waitlist (confirmation_token);
   ```

   **Falls du schon eine alte Tabelle hast** (v2-Schema mit Kinddaten),
   kannst du einfach `drop table public.waitlist;` ausführen und neu
   erstellen – solange du noch keine Echtdaten hast. Alternativ Migration:

   ```sql
   -- Migration v2 → v3 (Formular radikal vereinfacht)
   alter table public.waitlist drop column if exists child_name;
   alter table public.waitlist drop column if exists child_age;
   alter table public.waitlist drop column if exists interests;
   alter table public.waitlist drop column if exists importance;
   alter table public.waitlist drop column if exists heard_from;
   alter table public.waitlist drop column if exists frequency;
   alter table public.waitlist drop column if exists feedback;
   alter table public.waitlist drop column if exists consent_guardian;
   alter table public.waitlist drop column if exists consent_survey;
   alter table public.waitlist add column if not exists wishes text;
   ```

   **Wichtig:** Wähle beim Anlegen des Supabase-Projekts eine **Region in der
   EU** (z. B. `eu-central-1` / Frankfurt), damit die Daten im
   Geltungsbereich der DSGVO verarbeitet werden.

3. **API-Keys kopieren:** Gehe in **Project Settings → API** und kopiere:
   - `Project URL` → `SUPABASE_URL`
   - `service_role` Key (nicht anon!) → `SUPABASE_SERVICE_ROLE_KEY`

4. **In `.env.local` eintragen:**
   ```
   SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
   ADMIN_PASSWORD=dein-sicheres-passwort
   ```

5. **Server neu starten.** Die Seite erkennt automatisch Supabase und schreibt
   neue Einträge dort hinein. Das Admin-Dashboard zeigt oben den aktuellen
   Speicher-Modus an.

## Deployment auf Vercel (Setup-Architektur)

Die Landingpage wird auf **Vercel** gehostet (Code + Serverless Functions
in Frankfurt), die Domain `nomipost.de` bleibt bei **IONOS**. Daten
landen in einer **Supabase**-Datenbank in Frankfurt. Mails verschickt
**Resend**.

```
Besucher:in → nomipost.de (IONOS Domain)
                ↓ (DNS zeigt auf Vercel)
            Vercel Edge (Deutschland)
                ↓ (API-Routes in fra1 Frankfurt)
            Supabase EU-central-1 (Frankfurt)
                ↓ (bei DOI-Mail)
            Resend → Empfänger-Postfach
```

**Warum nicht IONOS Shared Hosting?** Weil NomiPost serverseitige
API-Routes hat (`/api/waitlist`, `/api/waitlist/survey`,
`/api/unsubscribe`), die einen Node.js-Server brauchen. IONOS Shared
Hosting kann das nicht. Deswegen läuft der Code bei Vercel.

---

### Schritt-für-Schritt Deployment-Anleitung

#### 1. Supabase-Projekt einrichten (5 Min)

1. Account auf [supabase.com](https://supabase.com) erstellen
2. **New Project** → Name: `nomipost`, Region: **Frankfurt (eu-central-1)**
3. Passwort für die DB notieren (brauchst du nicht, aber sicher ist sicher)
4. Warten bis das Projekt gestartet ist (~1 Min)
5. **SQL Editor** öffnen, das SQL-Schema aus dem nächsten Abschnitt
   einfügen und ausführen
6. **Project Settings → API**: `Project URL` und `service_role` Key
   kopieren (NICHT den `anon` Key!)
7. **Settings → Legal → Data Processing Agreement** → „Accept DPA"
   klicken

#### 2. Resend-Account einrichten (5 Min)

1. Account auf [resend.com](https://resend.com) erstellen
2. **Domains → Add Domain** → `nomipost.de` eingeben
3. Resend zeigt dir mehrere DNS-Einträge (MX, TXT für SPF, TXT für DKIM)
4. Diese trägst du später im IONOS-Control-Center ein (siehe Schritt 5)
5. **API Keys → Create API Key** → Namen geben, Key kopieren und sicher
   speichern (wird nur einmal angezeigt)
6. **Settings → Legal → DPA** akzeptieren

#### 3. Code zu Vercel deployen (5 Min)

1. Auf [vercel.com](https://vercel.com) mit deinem **GitHub-Account**
   einloggen
2. **Add New → Project**
3. Das Repo `lucawehrle-create/nomipost` importieren
4. Vercel erkennt Next.js automatisch – Einstellungen lassen wie sie sind
5. **Environment Variables** setzen (ganz unten im Import-Dialog):

   ```
   SUPABASE_URL           = https://xxxxxxxxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY = eyJhbGci...
   ADMIN_PASSWORD         = <mindestens 8 Zeichen, sicher wählen>
   RESEND_API_KEY         = re_xxxxx
   MAIL_FROM              = NomiPost <no-reply@nomipost.de>
   MAIL_REPLY_TO          = hallo@nomipost.de
   ```

6. **Deploy** klicken. Nach ~2 Min ist die Seite live unter einer
   `*.vercel.app`-URL.
7. Öffne die URL und teste den kompletten Flow einmal mit deiner
   eigenen E-Mail.

#### 4. Domain nomipost.de bei Vercel hinzufügen (3 Min)

1. Im Vercel-Dashboard: **Projekt → Settings → Domains**
2. `nomipost.de` eingeben → **Add**
3. Vercel zeigt dir **zwei DNS-Einträge**:
   - **A-Record**: `@` zeigt auf `76.76.21.21`
   - **CNAME-Record**: `www` zeigt auf `cname.vercel-dns.com`
4. Diese Einträge merken – die trägst du gleich bei IONOS ein

#### 5. DNS bei IONOS konfigurieren (10 Min + Wartezeit)

1. Ins IONOS-Control-Center einloggen
2. **Domains & SSL → nomipost.de → DNS**
3. **Bestehende A-Records für `@` und `www` löschen** (falls
   vorhanden – IONOS setzt dort meistens einen Parking-Eintrag)
4. **Neue Einträge anlegen:**
   - **A-Record**: Host `@`, Wert `76.76.21.21`
   - **CNAME-Record**: Host `www`, Wert `cname.vercel-dns.com`
5. **Für Resend (Mail-Versand) zusätzlich folgende Einträge anlegen**
   (Resend zeigt dir die genauen Werte in seinem Dashboard):
   - **MX-Record**: `send.nomipost.de` → `feedback-smtp.eu-west-1.amazonses.com` (Priorität 10)
   - **TXT-Record (SPF)**: `send.nomipost.de` → `"v=spf1 include:amazonses.com ~all"`
   - **TXT-Record (DKIM)**: `resend._domainkey` → Resend zeigt dir den Schlüssel
6. **Speichern.** DNS-Propagierung dauert 5 Min bis 24 h, meistens
   ca. 15 Min.
7. Während du wartest: Zurück zu Vercel, dort wird das Häkchen neben
   deiner Domain grün, sobald die DNS-Einträge aktiv sind. Vercel
   stellt dann automatisch ein SSL-Zertifikat aus (Let's Encrypt).

#### 6. Admin-Bereich einrichten

Sobald die Domain aktiv ist:

1. Öffne `https://nomipost.de/admin`
2. Gib das `ADMIN_PASSWORD` ein, das du in Schritt 3 gesetzt hast
3. Du siehst das Dashboard mit CSV-Export

---

### SQL-Schema für Supabase

(Im SQL-Editor ausführen, Schritt 1.5 oben)

## Daten ansehen & exportieren

- **In der App:** `/admin` zeigt alle Einträge, Filter und Live-Statistiken zu
  Alter, Preisvorstellung, Interessen, Wichtigkeits-Kriterien und Traffic-Quelle.
- **CSV-Export:** Über den Button „CSV herunterladen" im Admin-Dashboard.
  Der Export berücksichtigt die aktuelle Suche.
- **Supabase Dashboard:** Unter „Table Editor → waitlist" direkt im Supabase-UI.

## Projektstruktur

```
app/
  layout.tsx           – Root-Layout mit Schriften
  page.tsx             – Landingpage (komponiert alle Sektionen)
  globals.css          – Tailwind + Brand-CSS (Papier-Texturen, Buttons)
  api/waitlist/route.ts – POST-Endpoint für das Formular
  admin/
    page.tsx           – Admin-Routing (Login / Dashboard)
    actions.ts         – Server Actions für Login/Logout
    AdminLogin.tsx     – Login-Formular
    AdminDashboard.tsx – Tabelle, Stats, CSV-Export
components/
  Navigation.tsx
  Hero.tsx
  Promises.tsx
  LetterAnatomy.tsx
  HowItWorks.tsx
  AboutNomi.tsx
  WaitlistSection.tsx
  WaitlistForm.tsx
  FAQ.tsx
  Footer.tsx
  CompassRose.tsx      – SVG-Kompassrose (Markensymbol)
  HandDivider.tsx      – Handgezeichnete Trennlinie
  WatercolorBlob.tsx   – Aquarell-Flecken im Hintergrund
  EnvelopeIllustration.tsx – Umschlag-Illustration im Hero
lib/
  storage.ts           – Supabase + JSON-Datei Abstraktion
  validation.ts        – Zod-Schema für das Formular
data/
  .gitkeep             – Ordner für lokale Fallback-Daten
```

## Brand-Treue / Design-Entscheidungen

- **Hintergrund:** Niemals reines Weiß – überall Warmcreme `#FFF8F0`.
- **Text:** Niemals reines Schwarz – Tintengrau `#3A3A3A`.
- **Akzente:** Mattgold `#C9A84B` sparsam als Highlight.
- **Schriften:** Fraunces (Serif, für Eltern seriös) + Inter (Body) + Caveat
  (handschriftliche Akzente, z. B. Nomis Zitate).
- **Keine Clip-Art:** Alle Icons, Ornamente und der Umschlag sind inline-SVGs
  mit leichten Turbulenz-Filtern für den handgemachten Look.
- **Tonalität:** Beruhigend, professionell, wertschätzend – nie kindlich.
  Keine verbotenen Begriffe („KI", „Abo-Box", „Algorithmus").

## Bilder einpflegen

Die Seite hat drei strategische Bildslots, die aktuell mit eleganten
Platzhaltern im Brand-Stil gefüllt sind. Sobald du Bilder hochlädst,
werden sie automatisch angezeigt.

**So pflegst du ein Bild ein:**

1. Leg die Datei in `public/images/` ab – unter dem genauen Namen, der im
   Platzhalter auf der Seite angezeigt wird (z. B. `nomi-portrait.jpg`).
2. Öffne die zugehörige Komponente (Pfad steht im Platzhalter).
3. Setze den `src`-Prop:

   **Vorher:**
   ```tsx
   <ImageSlot src="" filename="/images/nomi-portrait.jpg" ... />
   ```

   **Nachher:**
   ```tsx
   <ImageSlot src="/images/nomi-portrait.jpg" filename="/images/nomi-portrait.jpg" ... />
   ```

4. Speichern, fertig. Die Seite lädt dein Bild.

**Die drei Slots:**

| Dateiname | Komponente | Was reingehört |
|---|---|---|
| `nomi-portrait.jpg` | `components/AboutNomi.tsx` | Großes Nomi-Maskottchen-Portrait im Aquarell-Stil, Hochformat 3:4 |
| `letter-preview.jpg` | `components/LetterAnatomy.tsx` | Foto/Illustration eines aufgeklappten Briefs mit allen Beilagen, Querformat 16:10 |
| `nomi-hero.jpg` | `components/Hero.tsx` (optional) | Kleines Nomi-Vignetten-Bild als Akzent im Hero |

Eine vollständige Anleitung mit Format-Empfehlungen findest du unter
[`public/images/README.md`](./public/images/README.md).

## Rechtskonformität (DSGVO / DDG / UWG)

Die Seite ist umfassend auf die aktuellen deutschen Rechts-Anforderungen
(Stand April 2026) ausgelegt:

**Pflichtseiten:**
- `/impressum` nach § 5 **DDG** (Digitale-Dienste-Gesetz, seit 14.05.2024 –
  ersetzt das frühere TMG)
- `/datenschutz` nach Art. 13 DSGVO mit allen Pflichtangaben inkl.
  Löschkonzept, Widerspruchsrecht hervorgehoben, Vercel namentlich genannt
  mit EU-US Data Privacy Framework-Verweis
- `/bestaetigung` (Double-Opt-In Confirmation, nicht indexiert)
- `/abmelden` (Widerruf-Seite, nicht indexiert)

**Einwilligung nach Art. 7 DSGVO:**
- **Drei Einwilligungen** im Formular: (1) Datenspeicherung + E-Mail,
  (2) Sorgeberechtigten-Einwilligung für Kinddaten, (3) optional Umfrage
- Alle Checkboxen nicht vorangekreuzt (Art. 7 Abs. 1 DSGVO)
- Ohne die Pflicht-Einwilligungen bleibt der Submit-Button disabled
- Serverseitige Validierung via Zod (`z.literal(true)`)

**Double-Opt-In (§ 7 Abs. 2 UWG, BGH I ZR 164/09):**
- Nach dem Submit wird eine Bestätigungsmail mit eindeutigem Token versendet
- Erst nach Klick auf den Confirmation-Link ist die Einwilligung gültig
- **Mail-Inhalt enthält bewusst KEINE Werbung** (OLG München 29 U 1682/12)
- **One-Click-Unsubscribe** nach RFC 8058 via List-Unsubscribe-Header
- Confirmation-Token funktioniert gleichzeitig als Unsubscribe-Token

**Beweispflicht (Art. 7 Abs. 1 DSGVO):**
Pro Eintrag werden gespeichert:
- `consent_at` – Zeitstempel der Einwilligung
- `consent_text_version` – Version des zugestimmten Texts
- `ip_signup` – IP beim Formular-Submit
- `ip_confirm` – IP beim Confirmation-Klick
- `confirmed_at` – Zeitstempel der Bestätigung

**Selbst-gehostete Schriften (LG München 3 O 17493/20 + Folge-Urteile):**
- Inter, Fraunces, Caveat über **Fontsource-npm-Pakete** lokal ausgeliefert
- Null Requests an fonts.googleapis.com, Google, CDNs
- Keine externen Scripts, keine Analytics, keine Tracking-Pixel

**Security (Art. 32 DSGVO, BSI APP.3.1):**
- Content-Security-Policy, HSTS, X-Frame-Options DENY, Referrer-Policy,
  Permissions-Policy, X-Content-Type-Options (alles in `next.config.mjs`)
- Rate-Limiting auf `/api/waitlist` (5/h pro IP) und `/api/unsubscribe`
- **Timing-safe Passwort-Vergleich** im Admin (crypto.timingSafeEqual)
- **Kein Default-Passwort** – Admin bleibt gesperrt bis `ADMIN_PASSWORD`
  gesetzt ist
- Next.js `X-Powered-By` Header deaktiviert
- Next.js Telemetry via `.env.production` und CLI deaktiviert

**TDDDG § 25 (ehemals TTDSG):**
- Nur ein einziges Cookie: `nomi_admin_auth` für den Admin-Login
- Kein Tracking, kein LocalStorage, kein externes Pixel
- Daher kein Cookie-Banner nötig (nur „strictly necessary")

### Mail-Versand (Resend) konfigurieren

Damit Double-Opt-In funktioniert, brauchst du einen Mail-Service. Ich
empfehle **Resend** (kostenlos bis 3000 Mails/Monat, einfach, DSGVO-konform):

1. Kostenlosen Account auf [resend.com](https://resend.com) erstellen
2. Domain verifizieren (oder im Dev-Modus Resend-Test-Domain nutzen)
3. API-Key erstellen und in `.env.local` eintragen:
   ```
   RESEND_API_KEY=re_...
   MAIL_FROM="NomiPost <no-reply@deine-domain.de>"
   ```
4. Server neu starten

**Ohne Resend-Key läuft der Dev-Fallback:** Der Bestätigungs-Link wird im
Server-Log ausgegeben und zusätzlich direkt im Success-Screen angezeigt, damit
du lokal testen kannst.

**Wichtig:** Die Seite darf **nicht produktiv** eingesetzt werden ohne
funktionierendem Mail-Versand. Ohne DOI-Mails ist die Einwilligung
rechtlich unwirksam.

### Was du noch selbst tun musst (vor Go-Live)

**Kritisch (Blocker):**

1. **Impressum ausfüllen** (`app/impressum/page.tsx`) – alle `[…]` durch
   echte Daten ersetzen. Für Privatperson: Name, Adresse, E-Mail, Telefon.
2. **Datenschutzerklärung ausfüllen** (`app/datenschutz/page.tsx`) – vor
   allem Verantwortlicher, Datenschutz-E-Mail, Supabase-Region, Aufsichts-
   behörde, Löschstichtag für Warteliste.
3. **Resend-Account erstellen** und `RESEND_API_KEY` setzen
4. **`ADMIN_PASSWORD` setzen** (mind. 8 Zeichen, nicht committen)
5. **Supabase einrichten** in EU-Region (eu-central-1 / Frankfurt)

**Wichtig (AV-Verträge):**

6. **AVV mit Vercel** – wird automatisch akzeptiert bei Account-Erstellung,
   siehe [vercel.com/legal/dpa](https://vercel.com/legal/dpa)
7. **AVV mit Supabase** – im Dashboard unter Settings → Legal → DPA
8. **AVV mit Resend** – siehe [resend.com/legal/dpa](https://resend.com/legal/dpa)

**Dringend empfohlen:**

9. **Datenschutz-E-Mail-Adresse** einrichten (z. B. `datenschutz@deine-domain.de`)
   und Löschanfragen binnen 30 Tagen beantworten können
10. **Anwaltliche Prüfung** durch Fachanwält:in für IT-Recht – besonders
    wichtig, wenn du noch kein eingetragenes Unternehmen hast

**Darüber hinaus denken an:**

11. **Verzeichnis von Verarbeitungstätigkeiten (Art. 30 DSGVO)** intern
    führen
12. **Löschfristen technisch umsetzen** – Cron-Job, der nicht bestätigte
    Einträge nach 14 Tagen automatisch löscht (noch nicht implementiert)
13. **BFSG** (Barrierefreiheitsstärkungsgesetz, ab 28.06.2025) prüfen – für
    reine Warteliste voraussichtlich nicht anwendbar, aber grenzwertig

### Einwilligungs-Änderungen nachvollziehbar halten

Wenn du den Text der Einwilligungs-Checkbox später änderst, **erhöhe die
Version** in `lib/storage.ts`:

```ts
export const CONSENT_TEXT_VERSION = "2026-04-11.v2"; // → "2026-06-01.v3"
```

So kannst du bei Datenschutz-Anfragen später nachweisen, welchem Text die
jeweilige Person zugestimmt hat.

## Nächste Schritte (nach der Validierung)

- Echte Produktfotos in warmen Settings integrieren (Hero, Brief-Anatomie).
- Zusätzliche Social-Proof-Sektion, sobald erste Testfamilien an Bord sind.
- Preisseite / Stripe-Integration vorbereiten, sobald der Preis feststeht.
- Analytics (z. B. Plausible) für die Wartelisten-Conversion-Rate.
- Double-Opt-In-Mail via Resend oder Loops für rechtlich saubere
  Newsletter-Kommunikation.
