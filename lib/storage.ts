import { promises as fs } from "fs";
import path from "path";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Einheitliche Speicherabstraktion für Warteliste-Einträge.
 *
 * Zwei Modi:
 *  1. Supabase (wenn SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY gesetzt sind)
 *  2. Lokale JSON-Datei in /data/waitlist.json (Fallback für lokale Entwicklung)
 *
 * Die JSON-Datei funktioniert nur bei lokalen Servern mit persistentem
 * Dateisystem. Für Produktions-Deployments (Vercel, Netlify) bitte Supabase
 * konfigurieren – siehe README.
 */

export type WaitlistEntry = {
  id?: string;
  created_at?: string;
  parent_name: string;
  email: string;
  child_name: string | null;
  child_age: string;
  interests: string[];
  price_expectation: string | null;
  importance: string[];
  frequency: string | null;
  heard_from: string | null;
  feedback: string | null;

  // DSGVO: Nachweis der Einwilligung (Art. 7 Abs. 1 DSGVO)
  consent_contact: boolean;
  consent_survey: boolean;
  consent_at: string; // ISO-Timestamp
  consent_text_version: string; // Text-Version der Einwilligung

  // Optional: Für späteres Double-Opt-In
  confirmation_token: string | null;
  confirmed_at: string | null;
};

/**
 * Die aktuelle Version des Einwilligungstexts.
 * Bei Änderung des Consent-Textes diese Version hochzählen,
 * damit bei Datenschutz-Anfragen nachweisbar ist, welchem
 * Text der Nutzer zugestimmt hat.
 */
export const CONSENT_TEXT_VERSION = "2026-04-11.v1";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function getStorageMode(): "supabase" | "file" {
  return getSupabaseClient() ? "supabase" : "file";
}

async function ensureFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readFile(): Promise<WaitlistEntry[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  try {
    return JSON.parse(raw) as WaitlistEntry[];
  } catch {
    return [];
  }
}

async function writeFile(entries: WaitlistEntry[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function addEntry(entry: WaitlistEntry): Promise<WaitlistEntry> {
  const client = getSupabaseClient();
  if (client) {
    const { data, error } = await client
      .from("waitlist")
      .insert(entry)
      .select()
      .single();
    if (error) throw new Error(`Supabase-Fehler: ${error.message}`);
    return data as WaitlistEntry;
  }

  // Fallback: lokale Datei
  const entries = await readFile();

  // Duplikate abfangen (E-Mail)
  if (entries.some((e) => e.email.toLowerCase() === entry.email.toLowerCase())) {
    // Existierenden Eintrag aktualisieren, um neuere Umfrage-Daten zu behalten
    const idx = entries.findIndex(
      (e) => e.email.toLowerCase() === entry.email.toLowerCase()
    );
    entries[idx] = {
      ...entries[idx],
      ...entry,
      id: entries[idx].id,
      created_at: entries[idx].created_at,
    };
    await writeFile(entries);
    return entries[idx];
  }

  const withMeta: WaitlistEntry = {
    ...entry,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
  };
  entries.push(withMeta);
  await writeFile(entries);
  return withMeta;
}

export async function listEntries(): Promise<WaitlistEntry[]> {
  const client = getSupabaseClient();
  if (client) {
    const { data, error } = await client
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(`Supabase-Fehler: ${error.message}`);
    return (data ?? []) as WaitlistEntry[];
  }

  const entries = await readFile();
  return entries.sort((a, b) =>
    (b.created_at ?? "").localeCompare(a.created_at ?? "")
  );
}
