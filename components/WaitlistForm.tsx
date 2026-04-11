"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HandDivider from "./HandDivider";

type FormState = {
  // Step 1: Eltern-Kontakt
  parentName: string;
  email: string;

  // Step 2: Kinder-Info
  childName: string;
  childAge: string;

  // Step 3: Umfrage
  interests: string[];
  priceExpectation: string;
  importance: string[];
  frequency: string;
  heardFrom: string;
  feedback: string;

  // Step 3: Einwilligungen (DSGVO)
  consentContact: boolean; // Pflicht – Speicherung & E-Mail-Benachrichtigung
  consentGuardian: boolean; // Pflicht – Sorgeberechtigten-Einwilligung
  consentSurvey: boolean; // Optional – Umfragedaten für Produktentwicklung
};

const initialState: FormState = {
  parentName: "",
  email: "",
  childName: "",
  childAge: "",
  interests: [],
  priceExpectation: "",
  importance: [],
  frequency: "",
  heardFrom: "",
  feedback: "",
  consentContact: false,
  consentGuardian: false,
  consentSurvey: false,
};

const interestOptions = [
  "Natur & Tiere",
  "Weltraum",
  "Unterwasserwelten",
  "Mittelalter & Ritter",
  "Erfinder & Werkstatt",
  "Piraten & Meere",
  "Mythen & Sagen",
  "Alte Kulturen",
  "Jahreszeiten",
  "Zukunft & Sci-Fi",
];

const importanceOptions = [
  "Bildschirmzeit reduzieren",
  "Lesen fördern",
  "Kreativität anregen",
  "Persönliche Ansprache",
  "Hochwertige Gestaltung",
  "Pädagogischer Wert",
  "Sammelbarkeit",
  "Bastelmaterial",
];

const priceOptions = [
  { value: "u10", label: "unter 10 €" },
  { value: "10-15", label: "10 – 15 €" },
  { value: "15-20", label: "15 – 20 €" },
  { value: "20-25", label: "20 – 25 €" },
  { value: "25-30", label: "25 – 30 €" },
  { value: "30+", label: "über 30 €" },
  { value: "weiss-nicht", label: "Weiß ich noch nicht" },
];

const frequencyOptions = [
  { value: "monatlich", label: "Monatlich – perfekt" },
  { value: "zweimonatlich", label: "Alle 2 Monate" },
  { value: "quartal", label: "Quartalsweise" },
  { value: "egal", label: "Ist mir egal" },
];

const heardFromOptions = [
  "Instagram",
  "Facebook",
  "Empfehlung",
  "Suchmaschine",
  "Blog / Magazin",
  "Freunde / Familie",
  "Anders",
];

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [devConfirmUrl, setDevConfirmUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArrayValue = (key: "interests" | "importance", value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const canProceedStep1 =
    form.parentName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const canProceedStep2 = form.childAge !== "";

  // Ohne Pflicht-Einwilligungen darf nicht abgeschickt werden (Art. 7 DSGVO)
  const canSubmit = form.consentContact && form.consentGuardian;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Etwas ist schiefgelaufen. Bitte versuche es noch einmal."
        );
      }

      if (typeof data.devConfirmUrl === "string") {
        setDevConfirmUrl(data.devConfirmUrl);
      }
      setDone(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Etwas ist schiefgelaufen. Bitte versuche es noch einmal."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="paper-card hand-border paper-card-elevated p-10 md:p-14 text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mattgold/20 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="12"
              width="36"
              height="26"
              rx="2"
              stroke="#C9A84B"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M 6 14 L 24 28 L 42 14"
              stroke="#C9A84B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h3 className="headline-serif text-3xl md:text-4xl font-semibold text-nomi-violet mb-4 leading-tight">
          Schau in dein Postfach, {form.parentName} ✦
        </h3>
        <p className="text-tintengrau leading-relaxed mb-6 max-w-lg mx-auto">
          Wir haben dir gerade eine Bestätigungs-E-Mail an{" "}
          <strong className="text-nomi-violet">{form.email}</strong> gesendet.
          Bitte klicke auf den Link in der Mail, um deine Anmeldung
          abzuschließen.
        </p>
        <p className="text-sm text-tintengrau-light mb-4">
          Keine Mail bekommen? Schau kurz im Spam-Ordner nach. Falls nichts
          angekommen ist, kannst du es gleich noch einmal versuchen.
        </p>
        <p className="handwritten text-xl text-mattgold-dark mt-6">
          Bis gleich, dein NomiPost-Team
        </p>

        {devConfirmUrl && (
          <div className="mt-8 p-4 border-l-4 border-mattgold bg-mattgold/10 text-left rounded-sm">
            <p className="text-xs font-semibold text-mattgold-dark uppercase tracking-wider mb-2">
              Dev-Modus · Kein Mail-Service konfiguriert
            </p>
            <p className="text-xs text-tintengrau mb-2">
              In Produktion würde jetzt eine Bestätigungsmail gesendet. Zum
              Testen kannst du den Link direkt öffnen:
            </p>
            <a
              href={devConfirmUrl}
              className="text-xs text-nomi-violet underline break-all"
            >
              {devConfirmUrl}
            </a>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="paper-card hand-border paper-card-elevated p-8 md:p-12 lg:p-14 max-w-2xl mx-auto relative">
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-mattgold-dark font-semibold">
            Schritt {step} von {totalSteps}
          </span>
          <span className="text-xs text-tintengrau-light">
            {step === 1 && "Dein Kontakt"}
            {step === 2 && "Dein Kind"}
            {step === 3 && "Deine Wünsche"}
          </span>
        </div>
        <div className="h-1.5 bg-nomi-violet/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-mattgold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Schritt 1: Kontakt */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="headline-serif text-2xl md:text-3xl font-semibold text-nomi-violet mb-2">
                Lass uns in Kontakt bleiben
              </h3>
              <p className="text-tintengrau mb-6 text-sm">
                Wir benachrichtigen dich, sobald NomiPost startet. Keine Werbung,
                keine Weitergabe an Dritte – versprochen.
              </p>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Dein Vorname
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    required
                    value={form.parentName}
                    onChange={(e) => update("parentName", e.target.value)}
                    placeholder="z. B. Lena"
                    className="paper-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Deine E-Mail-Adresse
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="lena@beispiel.de"
                    className="paper-input"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Schritt 2: Kind */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="headline-serif text-2xl md:text-3xl font-semibold text-nomi-violet mb-2">
                Erzähl uns von deinem Kind
              </h3>
              <p className="text-tintengrau mb-6 text-sm">
                Damit wir einschätzen können, für welche Altersgruppe wir die
                Briefe gestalten sollen.
              </p>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="childName"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Vorname deines Kindes{" "}
                    <span className="text-tintengrau-light font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="childName"
                    type="text"
                    value={form.childName}
                    onChange={(e) => update("childName", e.target.value)}
                    placeholder="z. B. Mira"
                    className="paper-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Alter deines Kindes
                  </label>
                  <select
                    id="childAge"
                    required
                    value={form.childAge}
                    onChange={(e) => update("childAge", e.target.value)}
                    className="paper-select"
                  >
                    <option value="">Bitte wählen …</option>
                    <option value="unter-5">Unter 5 Jahre</option>
                    <option value="5">5 Jahre</option>
                    <option value="6">6 Jahre</option>
                    <option value="7">7 Jahre</option>
                    <option value="8">8 Jahre</option>
                    <option value="9">9 Jahre</option>
                    <option value="10">10 Jahre</option>
                    <option value="ueber-10">Über 10 Jahre</option>
                    <option value="mehrere">Mehrere Kinder in unterschiedlichen Altern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-nomi-violet mb-3">
                    Welche Themen interessieren dein Kind besonders?{" "}
                    <span className="text-tintengrau-light font-normal">
                      (mehrere möglich)
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArrayValue("interests", opt)}
                        className={`chip ${
                          form.interests.includes(opt) ? "chip-active" : ""
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Schritt 3: Umfrage */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="headline-serif text-2xl md:text-3xl font-semibold text-nomi-violet mb-2">
                Hilf uns, NomiPost besser zu machen
              </h3>
              <p className="text-tintengrau mb-6 text-sm">
                Ein paar kurze Fragen – damit wir wissen, was dir wichtig ist.
                Antworten sind optional, aber sie helfen uns wirklich.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-nomi-violet mb-3">
                    Was ist dir an einem solchen Produkt am wichtigsten?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {importanceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArrayValue("importance", opt)}
                        className={`chip ${
                          form.importance.includes(opt) ? "chip-active" : ""
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="priceExpectation"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Welcher monatliche Preis wäre für dich angemessen?
                  </label>
                  <select
                    id="priceExpectation"
                    value={form.priceExpectation}
                    onChange={(e) => update("priceExpectation", e.target.value)}
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

                <div>
                  <label
                    htmlFor="frequency"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Wie oft sollte dein Kind einen Brief bekommen?
                  </label>
                  <select
                    id="frequency"
                    value={form.frequency}
                    onChange={(e) => update("frequency", e.target.value)}
                    className="paper-select"
                  >
                    <option value="">Bitte wählen …</option>
                    {frequencyOptions.map((f) => (
                      <option key={f.value} value={f.value}>
                        {f.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="heardFrom"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Wie bist du auf uns aufmerksam geworden?
                  </label>
                  <select
                    id="heardFrom"
                    value={form.heardFrom}
                    onChange={(e) => update("heardFrom", e.target.value)}
                    className="paper-select"
                  >
                    <option value="">Bitte wählen …</option>
                    {heardFromOptions.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-sm font-semibold text-nomi-violet mb-2"
                  >
                    Etwas, das du uns noch mitgeben möchtest?{" "}
                    <span className="text-tintengrau-light font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="feedback"
                    value={form.feedback}
                    onChange={(e) => update("feedback", e.target.value)}
                    placeholder="Was wünschst du dir? Was darf nicht fehlen?"
                    rows={4}
                    className="paper-input resize-none"
                  />
                </div>

                {/* DSGVO-Einwilligung: nicht vorangekreuzt, Pflicht */}
                <div className="pt-4 border-t border-mattgold/30 space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <span className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        required
                        checked={form.consentContact}
                        onChange={(e) =>
                          update("consentContact", e.target.checked)
                        }
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="block w-5 h-5 rounded-[4px] border-[1.5px] border-nomi-violet/30 bg-warmcreme transition-all duration-200 peer-checked:bg-nomi-violet peer-checked:border-nomi-violet peer-focus-visible:ring-2 peer-focus-visible:ring-mattgold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-warmcreme group-hover:border-nomi-violet/60"
                      />
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="absolute inset-0 w-5 h-5 p-0.5 text-warmcreme opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
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
                    <span className="text-[0.85rem] text-tintengrau leading-[1.55] text-pretty">
                      <strong className="text-nomi-violet">
                        Ich willige ein
                      </strong>
                      , dass NomiPost meine oben angegebenen Daten speichert
                      und mich per E-Mail über den Launch und Early-Bird-
                      Konditionen informiert. Ich bekomme eine
                      Bestätigungs-E-Mail und muss meine Anmeldung dort
                      bestätigen (Double-Opt-In). Ich kann diese Einwilligung
                      jederzeit mit Wirkung für die Zukunft widerrufen – über
                      den Abmelde-Link in jeder E-Mail oder per Nachricht an
                      uns. Weitere Informationen in der{" "}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener"
                        className="underline decoration-mattgold decoration-1 underline-offset-2 hover:decoration-2 text-nomi-violet"
                      >
                        Datenschutzerklärung
                      </a>
                      .{" "}
                      <span className="text-red-700" aria-hidden="true">
                        *
                      </span>
                    </span>
                  </label>

                  {/* Sorgeberechtigten-Einwilligung – § 1626 BGB, Art. 8 DSGVO */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <span className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        required
                        checked={form.consentGuardian}
                        onChange={(e) =>
                          update("consentGuardian", e.target.checked)
                        }
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="block w-5 h-5 rounded-[4px] border-[1.5px] border-nomi-violet/30 bg-warmcreme transition-all duration-200 peer-checked:bg-nomi-violet peer-checked:border-nomi-violet peer-focus-visible:ring-2 peer-focus-visible:ring-mattgold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-warmcreme group-hover:border-nomi-violet/60"
                      />
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="absolute inset-0 w-5 h-5 p-0.5 text-warmcreme opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
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
                    <span className="text-[0.85rem] text-tintengrau leading-[1.55] text-pretty">
                      Ich bin{" "}
                      <strong className="text-nomi-violet">
                        sorgeberechtigt
                      </strong>{" "}
                      und willige in die Verarbeitung der angegebenen Daten
                      meines Kindes (Alter, ggf. Name) ein. Die Daten werden
                      nur zur Personalisierung der späteren Produkt­kommunikation
                      genutzt.{" "}
                      <span className="text-red-700" aria-hidden="true">
                        *
                      </span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <span className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={form.consentSurvey}
                        onChange={(e) =>
                          update("consentSurvey", e.target.checked)
                        }
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="block w-5 h-5 rounded-[4px] border-[1.5px] border-nomi-violet/30 bg-warmcreme transition-all duration-200 peer-checked:bg-nomi-violet peer-checked:border-nomi-violet peer-focus-visible:ring-2 peer-focus-visible:ring-mattgold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-warmcreme group-hover:border-nomi-violet/60"
                      />
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="absolute inset-0 w-5 h-5 p-0.5 text-warmcreme opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
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
                    <span className="text-[0.85rem] text-tintengrau leading-[1.55] text-pretty">
                      Zusätzlich willige ich ein, dass meine Umfrage-Antworten
                      anonymisiert zur{" "}
                      <strong className="text-nomi-violet">
                        Produktentwicklung
                      </strong>{" "}
                      ausgewertet werden. (Freiwillig)
                    </span>
                  </label>

                  <p className="text-[0.7rem] text-tintengrau-light pt-1 flex items-start gap-1.5">
                    <span className="text-red-700" aria-hidden="true">
                      *
                    </span>
                    <span>Pflichtangabe – ohne diese Einwilligung können wir dich nicht auf die Warteliste aufnehmen.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <div className="mt-6 p-4 border-2 border-red-300/50 bg-red-50/50 rounded-lg text-sm text-red-800">
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="text-sm text-nomi-violet/70 hover:text-nomi-violet transition-colors font-medium"
            >
              ← Zurück
            </button>
          ) : (
            <span />
          )}

          {step < totalSteps && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2)
              }
              className="btn-primary py-3 px-6 text-sm"
            >
              Weiter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {step === totalSteps && (
            <button
              type="submit"
              disabled={submitting || !canSubmit}
              className="btn-primary py-3 px-6 text-sm"
              title={!canSubmit ? "Bitte bestätige die Einwilligung" : undefined}
            >
              {submitting ? "Sende ..." : "Auf die Warteliste"}
              {!submitting && <span className="text-mattgold-light">✦</span>}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
