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
     child_name text,
     child_age text not null,
     interests text[] default '{}',
     price_expectation text,
     importance text[] default '{}',
     frequency text,
     heard_from text,
     feedback text,
     -- DSGVO: Nachweis der Einwilligung (Art. 7 Abs. 1 DSGVO)
     consent_contact boolean not null default false,
     consent_guardian boolean not null default false,
     consent_survey boolean not null default false,
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

## Deployment auf Vercel

1. Repo zu GitHub pushen.
2. Auf [vercel.com](https://vercel.com) importieren.
3. Environment Variables setzen: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
   `ADMIN_PASSWORD`.
4. Deployen. Das Admin-Dashboard liegt dann unter `https://deine-domain.de/admin`.

> **Achtung:** Ohne Supabase auf Vercel gehen Einträge verloren, weil das
> lokale Dateisystem nicht persistent ist.

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
