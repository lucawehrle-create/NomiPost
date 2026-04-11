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
    "child_name",
    "child_age",
    "interests",
    "price_expectation",
    "importance",
    "frequency",
    "heard_from",
    "feedback",
  ];

  const escape = (v: string | null | undefined) => {
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
      escape(e.child_name),
      escape(e.child_age),
      escape((e.interests ?? []).join("; ")),
      escape(e.price_expectation),
      escape((e.importance ?? []).join("; ")),
      escape(e.frequency),
      escape(e.heard_from),
      escape(e.feedback),
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
      [e.parent_name, e.email, e.child_name, e.feedback, e.heard_from]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(q))
    );
  }, [entries, query]);

  // Stats
  const stats = useMemo(() => {
    const ages: Record<string, number> = {};
    const prices: Record<string, number> = {};
    const sources: Record<string, number> = {};
    const interests: Record<string, number> = {};
    const importance: Record<string, number> = {};

    entries.forEach((e) => {
      if (e.child_age) ages[e.child_age] = (ages[e.child_age] || 0) + 1;
      if (e.price_expectation)
        prices[e.price_expectation] = (prices[e.price_expectation] || 0) + 1;
      if (e.heard_from) sources[e.heard_from] = (sources[e.heard_from] || 0) + 1;
      (e.interests ?? []).forEach((i) => {
        interests[i] = (interests[i] || 0) + 1;
      });
      (e.importance ?? []).forEach((i) => {
        importance[i] = (importance[i] || 0) + 1;
      });
    });

    return { ages, prices, sources, interests, importance };
  }, [entries]);

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
          <StatCard
            label="Heute"
            value={
              entries.filter((e) =>
                e.created_at?.startsWith(new Date().toISOString().slice(0, 10))
              ).length
            }
          />
          <StatCard
            label="Mit Feedback"
            value={entries.filter((e) => e.feedback && e.feedback.length > 0).length}
          />
          <StatCard
            label="Mit Kinder-Name"
            value={entries.filter((e) => e.child_name && e.child_name.length > 0).length}
          />
        </div>

        {/* Analyse-Blöcke */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <AnalysisCard title="Preisvorstellung" data={stats.prices} />
          <AnalysisCard title="Alter der Kinder" data={stats.ages} />
          <AnalysisCard title="Interessen (Top)" data={stats.interests} />
          <AnalysisCard title="Wichtigste Kriterien" data={stats.importance} />
          <AnalysisCard title="Gehört über" data={stats.sources} />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <input
            type="search"
            placeholder="Suchen (Name, E-Mail, Feedback…)"
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
                <th className="p-3 font-semibold">Eltern</th>
                <th className="p-3 font-semibold">E-Mail</th>
                <th className="p-3 font-semibold">Kind</th>
                <th className="p-3 font-semibold">Alter</th>
                <th className="p-3 font-semibold">Preis</th>
                <th className="p-3 font-semibold">Interessen</th>
                <th className="p-3 font-semibold">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-tintengrau-light">
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
                  <td className="p-3 text-tintengrau">{e.child_name || "–"}</td>
                  <td className="p-3 text-tintengrau">{e.child_age}</td>
                  <td className="p-3 text-tintengrau">{e.price_expectation || "–"}</td>
                  <td className="p-3 text-tintengrau text-xs">
                    {(e.interests ?? []).slice(0, 3).join(", ")}
                    {(e.interests ?? []).length > 3 &&
                      ` +${(e.interests ?? []).length - 3}`}
                  </td>
                  <td className="p-3 text-tintengrau text-xs max-w-[240px] truncate">
                    {e.feedback || "–"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    <div className="paper-card hand-border p-5">
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
