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

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Etwas ist schiefgelaufen. Bitte versuche es noch einmal.");
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
        className="paper-card hand-border p-10 md:p-14 text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mattgold/20 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 8 20 L 16 28 L 32 12"
              stroke="#C9A84B"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="headline-serif text-3xl md:text-4xl font-semibold text-nomi-violet mb-4">
          Nomi hat dich auf ihre Liste gesetzt ✦
        </h3>
        <p className="text-tintengrau leading-relaxed mb-6">
          Vielen Dank, {form.parentName}! Sobald Nomis erster Brief auf die Reise
          geht, bekommst du als Erste:r Bescheid. Bis dahin – halt deinen
          Briefkasten bereit.
        </p>
        <p className="handwritten text-xl text-mattgold-dark">
          Bis bald, dein NomiPost-Team
        </p>
      </motion.div>
    );
  }

  return (
    <div className="paper-card hand-border p-6 md:p-10 lg:p-12 max-w-2xl mx-auto relative">
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
              disabled={submitting}
              className="btn-primary py-3 px-6 text-sm"
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
