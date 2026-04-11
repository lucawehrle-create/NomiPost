"use client";

import { motion } from "framer-motion";
import HandDivider from "./HandDivider";

const steps = [
  {
    number: "01",
    title: "Du meldest dich an",
    description:
      "Name und Alter deines Kindes reichen. Ein paar Fragen zu Lieblingsthemen helfen uns, die Briefe zu personalisieren.",
  },
  {
    number: "02",
    title: "Nomi schickt den ersten Brief",
    description:
      "Dein Kind bekommt sein Willkommens-Paket: Sammelmappe, Poster, Abenteuer-Ausweis – und den ersten Brief von Nomi, persönlich adressiert.",
  },
  {
    number: "03",
    title: "Jeden Monat eine neue Reise",
    description:
      "Einmal pro Monat landet ein neuer Umschlag im Briefkasten. Neue Geschichte, neue Welt, neue Rätsel – aber immer dieselbe Nomi.",
  },
  {
    number: "04",
    title: "Die Sammlung wächst",
    description:
      "Jeder Brief kommt in die Sammelmappe. Nach einem Jahr hat dein Kind ein ganzes Reisetagebuch – ein Schatz, der bleibt.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="wie"
      className="section-spacing relative bg-gradient-to-b from-warmcreme via-warmcreme-dark/30 to-warmcreme"
    >
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="eyebrow mb-6 justify-center">
            <span className="w-10 h-px bg-mattgold" />
            Wie es funktioniert
            <span className="w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            Von der Anmeldung
            <br />
            <span className="italic">bis zum großen Staunen</span>
          </h2>
          <HandDivider className="mt-10" />
        </div>

        {/* Horizontale Timeline auf Desktop, Stacked auf Mobile */}
        <div className="max-w-7xl mx-auto relative">
          {/* Verbindungslinie – nur Desktop */}
          <div className="hidden lg:block absolute top-[3.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-mattgold/40 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center lg:text-left"
              >
                <div className="flex lg:flex-col items-start lg:items-start gap-5 lg:gap-0">
                  <div className="flex-shrink-0 lg:mb-6">
                    <div className="relative w-[4.5rem] h-[4.5rem] mx-auto lg:mx-0">
                      <div className="absolute inset-0 bg-mattgold/10 rounded-full blur-xl scale-125" />
                      <div className="relative w-full h-full rounded-full border-2 border-mattgold bg-warmcreme flex items-center justify-center shadow-sm">
                        <span className="headline-serif text-2xl text-mattgold-dark font-semibold">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left lg:text-left flex-1">
                    <h3 className="headline-serif text-xl lg:text-[1.375rem] font-semibold text-nomi-violet mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[0.95rem] text-tintengrau leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
