"use client";

import { useState } from "react";
import HandDivider from "./HandDivider";

const faqs = [
  {
    q: "Für welches Alter ist NomiPost geeignet?",
    a: "Die Briefe sind für Kinder von ungefähr 5 bis 10 Jahren gestaltet. Sprache, Schriftgröße und Rätsel-Schwierigkeit passen wir an das Leseniveau deines Kindes an (Beginner, Intermediate, Advanced).",
  },
  {
    q: "Wann startet NomiPost tatsächlich?",
    a: "Wir sind gerade dabei, das Produkt sorgfältig zu entwickeln. Über diese Seite möchten wir zuerst herausfinden, ob genügend Familien daran interessiert sind. Alle auf der Warteliste bekommen als Erste Bescheid, wenn es losgeht – und sichern sich einen Early-Bird-Preis.",
  },
  {
    q: "Was macht NomiPost anders als andere Kinder-Abos?",
    a: "NomiPost ist keine Überraschungsbox mit Bastelkram. Es ist ein interaktives Kinderbuch in Briefform: eine durchgehende Geschichte, pädagogisch fundiert, handgemacht im Look und persönlich in jedem Detail. Dein Kind soll nicht nur beschäftigt werden – es soll etwas erhalten, an das es sich in 20 Jahren noch erinnert.",
  },
  {
    q: "Wird mein Kind mit Werbung oder Zusatzkäufen konfrontiert?",
    a: "Niemals. NomiPost ist komplett werbefrei. Es gibt keine Cross-Promotion, keine In-App-Käufe, keine versteckten Kosten. Was im Umschlag steckt, ist alles, was dein Kind braucht – ohne Upsells.",
  },
  {
    q: "Wie persönlich ist der Brief wirklich?",
    a: "Sehr persönlich. Dein Kind wird beim Namen angesprochen, die Themen werden an seine Interessen angepasst, und es gibt ein wiederkehrendes Begleit-Element (Begleittier oder magischer Gegenstand), das in jedem Brief auftaucht. Das ist nicht einfach nur ein personalisierter Name im Text.",
  },
  {
    q: "Wie viel wird NomiPost kosten?",
    a: "Der genaue Preis steht noch nicht fest – das ist auch einer der Gründe für diese Warteliste. Wir möchten ein Produkt schaffen, das sich wirklich lohnt, und dabei einen fairen Preis finden. In der Umfrage kannst du uns gerne deine Preisvorstellung mitteilen.",
  },
  {
    q: "Kann ich jederzeit pausieren oder beenden?",
    a: "Ja. Sobald NomiPost startet, kannst du dein Abonnement jederzeit flexibel pausieren oder beenden. Kein Kleingedrucktes, keine Mindestlaufzeit über den aktuellen Monat hinaus.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="container-narrow relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="w-8 h-px bg-mattgold" />
            Häufige Fragen
            <span className="w-8 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-4xl md:text-5xl font-semibold text-nomi-violet leading-tight text-balance">
            Noch ein paar Antworten für dich
          </h2>
          <HandDivider className="mt-8" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="paper-card hand-border overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                aria-expanded={open === i}
              >
                <span className="headline-serif text-lg md:text-xl font-semibold text-nomi-violet">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-mattgold flex items-center justify-center text-mattgold-dark transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
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
                className={`grid transition-all duration-300 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-6 text-tintengrau leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
