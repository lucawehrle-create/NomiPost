"use client";

import { useMemo, useState } from "react";
import type { WaitlistEntry } from "@/lib/storage";
import CompassRose from "@/components/CompassRose";
import { logoutAction } from "./actions";

type Props = {
  entries: WaitlistEntry[];
  mode: "supabase" | "file";
};

function toCsv(entries: WaitlistEntry[]): string {
  const headers = [
    "id",
    "created_at",
    "parent_name",
    "email",
    "wishes",
    "price_expectation",
    "consent_contact",
    "consent_at",
    "consent_text_version",
    "confirmed_at",
    "ip_signup",
    "ip_confirm",
  ];

  const escape = (v: string | null | undefined | boolean) => {
    if (v === null || v === undefined) return "";
    const s = String(v).replace(/"/g, '""');
    return `"${s}"`;
  };

  const rows = entries.map((e) =>
    [
      escape(e.id),
      escape(e.created_at),
      escape(e.parent_name),
      escape(e.email),
      escape(e.wishes),
      escape(e.price_expectation),
      escape(e.consent_contact),
      escape(e.consent_at),
      escape(e.consent_text_version),
      escape(e.confirmed_at),
      escape(e.ip_signup),
      escape(e.ip_confirm),
    ].join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

export default function AdminDashboard({ entries, mode }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) =>
      [e.parent_name, e.email, e.wishes]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(q))
    );
  }, [entries, query]);

  // Stats
  const stats = useMemo(() => {
    const prices: Record<string, number> = {};
    entries.forEach((e) => {
      if (e.price_expectation)
        prices[e.price_expectation] = (prices[e.price_expectation] || 0) + 1;
    });
    return { prices };
  }, [entries]);

  const confirmedCount = entries.filter((e) => e.confirmed_at).length;
  const withWishesCount = entries.filter((e) => e.wishes && e.wishes.length > 0).length;
  const withPriceCount = entries.filter(
    (e) => e.price_expectation && e.price_expectation.length > 0
  ).length;

  const handleDownload = () => {
    const csv = toCsv(filtered);
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nomipost-waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen py-10 md:py-14">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12">
              <CompassRose className="w-full h-full" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-mattgold-dark font-semibold">
                NomiPost · Admin
              </p>
              <h1 className="headline-serif text-2xl md:text-3xl font-semibold text-nomi-violet">
                Warteliste & Umfrage-Daten
              </h1>
            </div>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="text-sm text-nomi-violet/70 hover:text-nomi-violet underline underline-offset-4"
            >
              Abmelden
            </button>
          </form>
        </div>

        {/* Speicher-Hinweis */}
        <div className="mb-8 paper-card hand-border p-4 text-sm flex items-center gap-3 flex-wrap">
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              mode === "supabase" ? "bg-green-600" : "bg-mattgold"
            }`}
          />
          <span className="text-tintengrau">
            Speicher-Modus:{" "}
            <strong className="text-nomi-violet">
              {mode === "supabase" ? "Supabase" : "Lokale JSON-Datei"}
            </strong>
            {mode === "file" && " (data/waitlist.json)"}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Einträge gesamt" value={entries.length} />
          <StatCard label="Bestätigt (DOI)" value={confirmedCount} />
          <StatCard label="Mit Wunsch-Feedback" value={withWishesCount} />
          <StatCard label="Mit Preisangabe" value={withPriceCount} />
        </div>

        {/* Preisvorstellungs-Verteilung */}
        {Object.keys(stats.prices).length > 0 && (
          <div className="mb-10 grid md:grid-cols-1 gap-6">
            <AnalysisCard title="Preisvorstellung" data={stats.prices} />
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <input
            type="search"
            placeholder="Suchen (Name, E-Mail, Wunsch …)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="paper-input max-w-sm"
          />
          <button onClick={handleDownload} className="btn-primary py-3 px-5 text-sm">
            CSV herunterladen ({filtered.length})
          </button>
        </div>

        {/* Tabelle */}
        <div className="paper-card hand-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-nomi-violet/5 border-b-2 border-nomi-violet/10">
              <tr className="text-left text-nomi-violet">
                <th className="p-3 font-semibold">Datum</th>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">E-Mail</th>
                <th className="p-3 font-semibold">DOI</th>
                <th className="p-3 font-semibold">Preis</th>
                <th className="p-3 font-semibold">Wunsch / Feedback</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-tintengrau-light">
                    {entries.length === 0
                      ? "Noch keine Einträge. Sobald sich jemand in die Warteliste einträgt, erscheint er hier."
                      : "Keine Treffer für deine Suche."}
                  </td>
                </tr>
              )}
              {filtered.map((e) => (
                <tr
                  key={e.id ?? e.email}
                  className="border-b border-nomi-violet/10 hover:bg-nomi-violet/5"
                >
                  <td className="p-3 text-tintengrau-light whitespace-nowrap">
                    {e.created_at
                      ? new Date(e.created_at).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        })
                      : "–"}
                  </td>
                  <td className="p-3 font-medium text-nomi-violet">
                    {e.parent_name}
                  </td>
                  <td className="p-3 text-tintengrau">{e.email}</td>
                  <td className="p-3 text-xs whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 ${
                        e.confirmed_at ? "text-green-700" : "text-mattgold-dark"
                      }`}
                      title={
                        e.confirmed_at
                          ? `Bestätigt am ${new Date(e.confirmed_at).toLocaleString("de-DE")}`
                          : "Noch nicht bestätigt"
                      }
                    >
                      {e.confirmed_at ? "✓ Bestätigt" : "⧖ Wartet"}
                    </span>
                  </td>
                  <td className="p-3 text-tintengrau">
                    {e.price_expectation || "–"}
                  </td>
                  <td className="p-3 text-tintengrau text-xs max-w-[380px]">
                    {e.wishes || <span className="text-tintengrau-light">–</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* DSGVO-Hinweis für den Admin */}
        <div className="mt-8 p-5 border-l-4 border-mattgold bg-mattgold/10 text-sm text-tintengrau">
          <strong className="text-nomi-violet">DSGVO-Hinweis:</strong> Alle
          Einträge enthalten Einwilligungs-Zeitpunkt (<code>consent_at</code>)
          und Text-Version (<code>consent_text_version</code>) als Nachweis
          gemäß Art. 7 Abs. 1 DSGVO. IP-Adressen (Signup + Confirmation)
          werden ausschließlich zu Nachweiszwecken gespeichert. Bei
          Löschanfragen bitte den entsprechenden Eintrag aus der Datenbank
          entfernen (Supabase Dashboard oder <code>data/waitlist.json</code>).
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="paper-card hand-border p-5">
      <p className="text-xs uppercase tracking-widest text-mattgold-dark font-semibold">
        {label}
      </p>
      <p className="headline-serif text-3xl font-semibold text-nomi-violet mt-2">
        {value}
      </p>
    </div>
  );
}

function AnalysisCard({
  title,
  data,
}: {
  title: string;
  data: Record<string, number>;
}) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map(([, v]) => v));

  return (
    <div className="paper-card hand-border p-6">
      <h3 className="headline-serif text-lg font-semibold text-nomi-violet mb-4">
        {title}
      </h3>
      {entries.length === 0 ? (
        <p className="text-sm text-tintengrau-light">Noch keine Daten.</p>
      ) : (
        <ul className="space-y-2">
          {entries.slice(0, 8).map(([label, count]) => (
            <li key={label}>
              <div className="flex justify-between text-xs text-tintengrau mb-1">
                <span>{label}</span>
                <span className="font-semibold">{count}</span>
              </div>
              <div className="h-1.5 bg-nomi-violet/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-mattgold"
                  style={{ width: `${(count / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
