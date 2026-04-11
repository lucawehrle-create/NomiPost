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
     feedback text
   );

   create unique index waitlist_email_idx on public.waitlist (lower(email));
   ```

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

## Nächste Schritte (nach der Validierung)

- Echte Produktfotos in warmen Settings integrieren (Hero, Brief-Anatomie).
- Zusätzliche Social-Proof-Sektion, sobald erste Testfamilien an Bord sind.
- Preisseite / Stripe-Integration vorbereiten, sobald der Preis feststeht.
- Analytics (z. B. Plausible) für die Wartelisten-Conversion-Rate.
- Double-Opt-In-Mail via Resend oder Loops für rechtlich saubere
  Newsletter-Kommunikation.
