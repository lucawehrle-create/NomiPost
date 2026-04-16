"use client";

import { useState } from "react";
import HandDivider from "./HandDivider";

const faqs = [
  {
    q: "F\u00FCr welches Alter ist NomiPost gemacht?",
    a: "F\u00FCr Kinder zwischen 5 und 10 Jahren. Sprache und Schwierigkeit passen sich dem Alter an \u2014 damit Leseanf\u00E4nger genauso auf ihre Kosten kommen wie kleine Profis.",
  },
  {
    q: "Wann kommt der erste Brief?",
    a: "Wir arbeiten gerade an den ersten Briefen. Alle auf der Warteliste erfahren als Erste, wann es losgeht \u2014 und sichern sich einen Early-Bird-Preis.",
  },
  {
    q: "Was unterscheidet NomiPost von anderen Kinderprodukten?",
    a: "NomiPost ist ein interaktives Kinderbuch in Briefform \u2014 mit einer durchgehenden Geschichte, liebevoll illustriert und pers\u00F6nlich in jedem Detail. Keine \u00DCberraschungsbox mit Bastelkram. Kein generisches Kinder-Magazin. Keine App.",
  },
  {
    q: "Gibt es Werbung oder versteckte Kosten?",
    a: "Nein. NomiPost ist komplett werbefrei. Was im Umschlag steckt, ist alles \u2014 ohne Nachkaufen, ohne Haken.",
  },
  {
    q: "Wie pers\u00F6nlich wird der Brief wirklich?",
    a: "Sehr. Die Briefe verwenden den Namen deines Kindes und greifen seine Interessen auf. F\u00FCr die Warteliste reichen Vorname und E-Mail \u2014 den Rest fragen wir, wenn es losgeht.",
  },
  {
    q: "Wie viel wird NomiPost kosten?",
    a: "Der genaue Preis steht noch nicht fest \u2014 wir m\u00F6chten etwas schaffen, das sich wirklich lohnt, und einen fairen Preis finden. Nach der Anmeldung kannst du uns verraten, was du dir vorstellen k\u00F6nntest.",
  },
  {
    q: "Kann ich jederzeit aufh\u00F6ren?",
    a: "Ja. Kein Kleingedrucktes, keine Mindestlaufzeit. Du kannst jederzeit pausieren oder k\u00FCndigen.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-spacing relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFBF5 0%, #FFF7EB 50%, #FFFBF5 100%)" }}
    >
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Häufige Fragen
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Noch ein paar Antworten
            <br />
            <span className="italic text-blue-600">für dich</span>
          </h2>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="paper-card hand-border overflow-hidden transition-all duration-500 hover:paper-card-elevated"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 md:gap-5 p-5 md:p-6 lg:p-7 text-left group min-h-[64px]"
                aria-expanded={open === i}
              >
                <span className="headline-serif text-base md:text-lg lg:text-xl font-semibold text-slate-800 pr-2 md:pr-4 leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 transition-all duration-500 group-hover:bg-amber-400 group-hover:text-white ${
                    open === i ? "rotate-45 bg-amber-400 text-white shadow-[0_8px_16px_-4px_rgba(251,191,36,0.4)]" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M 7 1 L 7 13 M 1 7 L 13 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 md:px-6 lg:px-7 pb-6 md:pb-7">
                    <div className="h-px bg-amber-400/20 mb-4 md:mb-5" />
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed text-pretty">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
