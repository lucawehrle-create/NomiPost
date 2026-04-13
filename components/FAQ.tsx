"use client";

import { useState } from "react";
import HandDivider from "./HandDivider";

const faqs = [
  {
    q: "Für welches Alter ist NomiPost gemacht?",
    a: "Für Kinder zwischen 5 und 10 Jahren. Sprache und Schwierigkeit der Rätsel passen sich dem Alter an – damit Leseanfänger genauso auf ihre Kosten kommen wie kleine Profis.",
  },
  {
    q: "Wann kommt der erste Brief?",
    a: "Wir arbeiten gerade an den ersten Briefen. Alle auf der Warteliste bekommen als Erste Bescheid, wenn es losgeht – und sichern sich automatisch einen Early-Bird-Preis.",
  },
  {
    q: "Was ist NomiPost eigentlich nicht?",
    a: "Keine Überraschungsbox mit Bastelkram. Kein generisches Kinder-Magazin. Keine App, die Aufmerksamkeit jagt. NomiPost ist ein interaktives Kinderbuch in Briefform – mit einer durchgehenden Geschichte, liebevoll gestaltet und persönlich in jedem Detail.",
  },
  {
    q: "Wird mein Kind mit Werbung oder Zusatzkäufen konfrontiert?",
    a: "Niemals. NomiPost ist komplett werbefrei. Keine Cross-Promotion, keine In-App-Käufe, keine versteckten Kosten. Was im Umschlag steckt, ist alles – ohne Nachkaufen, ohne Haken.",
  },
  {
    q: "Wie persönlich wird der Brief wirklich?",
    a: "Sehr persönlich. Die Briefe greifen den Namen und die Interessen deines Kindes auf – inklusive einem wiederkehrenden Begleit-Element, das in jedem Brief auftaucht und das dein Kind sofort erkennt. Für die Warteliste reichen jetzt dein Vorname und deine E-Mail – den Rest fragen wir, wenn es losgeht.",
  },
  {
    q: "Wie viel wird NomiPost kosten?",
    a: "Der genaue Preis steht noch nicht fest – das ist auch einer der Gründe für diese Warteliste. Wir möchten etwas schaffen, das sich wirklich lohnt, und dabei einen fairen Preis finden. In der kurzen Frage nach der Anmeldung kannst du uns verraten, was du dir vorstellen könntest. Freiwillig, versteht sich.",
  },
  {
    q: "Kann ich jederzeit pausieren oder aufhören?",
    a: "Ja. Sobald die Briefe verschickt werden, kannst du jederzeit pausieren oder aufhören. Kein Kleingedrucktes, keine Mindestlaufzeit – der aktuelle Monat läuft zu Ende, und danach bist du frei.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-spacing relative overflow-hidden">
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
            <span className="italic">für dich</span>
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
                  className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full border-[1.5px] border-amber-400 flex items-center justify-center text-amber-700 transition-all duration-500 group-hover:bg-amber-400 group-hover:text-white ${
                    open === i ? "rotate-45 bg-amber-400 text-white" : ""
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
