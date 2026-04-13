"use client";

import { useState } from "react";

type Props = {
  token: string;
};

export default function UnsubscribeButton({ token }: Props) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleUnsubscribe() {
    setState("loading");
    setError(null);
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Abmeldung fehlgeschlagen.");
      }
      setState("done");
    } catch (err) {
      setState("error");
      setError(
        err instanceof Error ? err.message : "Abmeldung fehlgeschlagen."
      );
    }
  }

  if (state === "done") {
    return (
      <div className="space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path
              d="M 8 20 L 16 28 L 32 12"
              stroke="#FBBF24"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="headline-serif text-2xl text-slate-800">
          Du bist jetzt abgemeldet.
        </p>
        <p className="text-sm text-slate-700">
          Alle deine Daten wurden gelöscht. Keine weiteren E-Mails von uns.
        </p>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleUnsubscribe}
        disabled={state === "loading"}
        className="btn-primary bg-red-700 hover:bg-red-800 shadow-none"
      >
        {state === "loading" ? "Lösche Daten …" : "Ja, Daten unwiderruflich löschen"}
      </button>
      {error && (
        <p className="mt-4 text-sm text-red-700">{error}</p>
      )}
    </>
  );
}
