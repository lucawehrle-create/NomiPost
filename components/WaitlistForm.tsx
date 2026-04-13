"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";

type Step = "form" | "survey" | "done";

type Props = {
  /**
   * "hero" – kompakte Version für den Hero-Bereich (schmaler, ohne
   * aufwändige Papier-Karten-Optik).
   * "card" – klassische, größere Karten-Version mit Papier-Look.
   */
  variant?: "hero" | "card";
};

const priceOptions = [
  { value: "u15", label: "unter 15 €" },
  { value: "15-20", label: "15 – 20 €" },
  { value: "20-25", label: "20 – 25 €" },
  { value: "25-30", label: "25 – 30 €" },
  { value: "30+", label: "über 30 €" },
  { value: "unsicher", label: "Bin mir unsicher" },
];

export default function WaitlistForm({ variant = "card" }: Props) {
  const [step, setStep] = useState<Step>("form");

  // Schritt 1 – Pflicht
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [consentContact, setConsentContact] = useState(false);

  // Schritt 2 – Bonus-Umfrage (optional)
  const [wishes, setWishes] = useState("");
  const [priceExpectation, setPriceExpectation] = useState("");

  // UI-State
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [devConfirmUrl, setDevConfirmUrl] = useState<string | null>(null);

  const canSubmitStep1 =
    parentName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    consentContact;

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmitStep1 || submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: parentName.trim(),
          email: email.trim(),
          consentContact,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error ?? "Etwas ist schiefgelaufen. Bitte versuche es noch einmal."
        );
      }

      if (typeof data.token === "string") setToken(data.token);
      if (typeof data.devConfirmUrl === "string")
        setDevConfirmUrl(data.devConfirmUrl);
      setStep("survey");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Etwas ist schiefgelaufen. Bitte versuche es noch einmal."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSurveySubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token || submitting) return;

    // Wenn beides leer ist, ist es quasi ein Skip
    if (!wishes.trim() && !priceExpectation) {
      setStep("done");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          wishes: wishes.trim(),
          priceExpectation,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error ?? "Umfrage konnte nicht gespeichert werden."
        );
      }

      setStep("done");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Umfrage konnte nicht gespeichert werden."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleSkip() {
    setStep("done");
  }

  const containerClass =
    variant === "hero"
      ? "w-full overflow-hidden"
      : "paper-card hand-border paper-card-elevated p-6 md:p-10 lg:p-12 w-full max-w-2xl mx-auto overflow-hidden";

  return (
    <div className={containerClass}>
      <AnimatePresence mode="wait">
        {/* ─── SCHRITT 1: MINIMAL-FORM ─────────────────────── */}
        {step === "form" && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleFormSubmit}
            className="space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="wl-name" className="sr-only">
                  Dein Vorname
                </label>
                <input
                  id="wl-name"
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Dein Vorname"
                  autoComplete="given-name"
                  className="paper-input"
                />
              </div>
              <div>
                <label htmlFor="wl-email" className="sr-only">
                  Deine E-Mail-Adresse
                </label>
                <input
                  id="wl-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail-Adresse"
                  autoComplete="email"
                  className="paper-input"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group py-1">
              <span className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  required
                  checked={consentContact}
                  onChange={(e) => setConsentContact(e.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="block w-5 h-5 rounded-[4px] border-[1.5px] border-slate-300 bg-slate-50 transition-all duration-200 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-50 group-hover:border-blue-500/60"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute inset-0 w-5 h-5 p-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                >
                  <path
                    d="M 3 8 L 6.5 11.5 L 13 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="text-[0.8rem] text-slate-700 leading-[1.55] text-pretty">
                Ja, ich möchte Bescheid bekommen, sobald Nomis erster Brief
                auf die Reise geht. Jederzeit abmeldbar. Mehr dazu in der{" "}
                <a
                  href="/datenschutz"
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-amber-400 decoration-1 underline-offset-2 hover:decoration-2 text-slate-800"
                >
                  Datenschutzerklärung
                </a>
                .
              </span>
            </label>

            {error && (
              <div className="p-3 border-l-4 border-red-500 bg-red-50/60 text-sm text-red-800 rounded-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmitStep1 || submitting}
              className="btn-primary w-full sm:w-auto text-base"
            >
              {submitting ? "Einen Moment …" : "Nomi Bescheid geben"}
              {!submitting && <span className="text-amber-300">✦</span>}
            </button>

            <p className="text-[0.7rem] text-slate-500 leading-snug">
              Du bekommst gleich eine kurze Mail von uns. Einmal klicken,
              und du bist dabei. Kein Spam, versprochen.
            </p>
          </motion.form>
        )}

        {/* ─── SCHRITT 2: BONUS-UMFRAGE ─────────────────────── */}
        {step === "survey" && (
          <motion.form
            key="survey"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSurveySubmit}
            className="space-y-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 5 12 L 10 17 L 19 8"
                    stroke="#FBBF24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="headline-serif text-xl md:text-2xl font-semibold text-slate-800 leading-tight">
                  Willkommen auf der Liste, {parentName} ✦
                </h3>
                <p className="text-sm text-slate-700 leading-snug mt-1">
                  Schau kurz in dein Postfach – dort wartet eine
                  Nachricht von uns. <strong className="text-slate-800/80">Nicht
                  da? Bitte auch im Spam-Ordner nachschauen</strong> – manchmal
                  landet die erste Mail dort.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-amber-400/25">
              <p className="text-sm text-slate-700 leading-relaxed mt-4 mb-4">
                <strong className="text-slate-800">
                  Zwei kurze Fragen noch, wenn du magst –
                </strong>{" "}
                sie helfen uns enorm, die Briefe richtig gut für euch zu machen:
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="wl-wishes"
                    className="block text-sm font-semibold text-slate-800 mb-2"
                  >
                    Was dürfen wir auf keinen Fall falsch machen?
                  </label>
                  <textarea
                    id="wl-wishes"
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    placeholder="Worauf achtest du? Was wäre dir wichtig?"
                    rows={3}
                    className="paper-input resize-none"
                    maxLength={2000}
                  />
                </div>

                <div>
                  <label
                    htmlFor="wl-price"
                    className="block text-sm font-semibold text-slate-800 mb-2"
                  >
                    Was wäre für dich ein fairer Monatspreis?
                  </label>
                  <select
                    id="wl-price"
                    value={priceExpectation}
                    onChange={(e) => setPriceExpectation(e.target.value)}
                    className="paper-select"
                  >
                    <option value="">Bitte wählen …</option>
                    {priceOptions.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3 border-l-4 border-red-500 bg-red-50/60 text-sm text-red-800 rounded-sm">
                {error}
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleSkip}
                className="text-sm text-slate-800/70 hover:text-slate-800 underline underline-offset-4 transition-colors"
              >
                Überspringen – ich bin schon drin
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary py-3 px-6 text-sm"
              >
                {submitting ? "Danke …" : "Absenden"}
                {!submitting && <span className="text-amber-300">✦</span>}
              </button>
            </div>

            {devConfirmUrl && (
              <div className="mt-4 p-3 border-l-4 border-amber-400 bg-amber-400/10 text-left rounded-sm">
                <p className="text-[0.65rem] font-semibold text-amber-700 uppercase tracking-wider mb-1">
                  Dev-Modus
                </p>
                <p className="text-[0.7rem] text-slate-700 mb-1">
                  Kein Mail-Service konfiguriert – Bestätigungs-Link direkt:
                </p>
                <a
                  href={devConfirmUrl}
                  className="text-[0.7rem] text-slate-800 underline break-all"
                >
                  {devConfirmUrl}
                </a>
              </div>
            )}
          </motion.form>
        )}

        {/* ─── FINAL: DANKE ─────────────────────── */}
        {step === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center py-4"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-amber-400/20 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="12"
                  width="36"
                  height="26"
                  rx="2"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M 6 14 L 24 28 L 42 14"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="headline-serif text-2xl md:text-3xl font-semibold text-slate-800 leading-tight mb-3">
              Bis bald, {parentName} ✦
            </h3>
            <p className="text-slate-700 leading-relaxed max-w-sm mx-auto text-sm md:text-base">
              Wir haben dir eine Nachricht an{" "}
              <strong className="text-slate-800">{email}</strong>{" "}
              geschickt. Einmal klicken, und wir sehen uns wieder.
            </p>
            <p className="text-xs text-slate-500 mt-3 max-w-xs mx-auto">
              Keine Mail bekommen? Schau bitte auch im Spam-Ordner
              nach – manchmal landet die erste Nachricht dort.
            </p>
            <p className="handwritten text-lg text-amber-700 mt-5">
              Nomi meldet sich ✦
            </p>

            {devConfirmUrl && (
              <div className="mt-6 p-3 border-l-4 border-amber-400 bg-amber-400/10 text-left rounded-sm max-w-md mx-auto">
                <p className="text-[0.65rem] font-semibold text-amber-700 uppercase tracking-wider mb-1">
                  Dev-Modus
                </p>
                <a
                  href={devConfirmUrl}
                  className="text-[0.7rem] text-slate-800 underline break-all"
                >
                  {devConfirmUrl}
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
