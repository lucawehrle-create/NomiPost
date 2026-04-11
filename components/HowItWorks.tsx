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
      className="py-20 md:py-28 relative bg-warmcreme-dark/30"
    >
      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="w-8 h-px bg-mattgold" />
            Wie es funktioniert
            <span className="w-8 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-4xl md:text-5xl font-semibold text-nomi-violet leading-tight text-balance">
            Von der Anmeldung bis zum großen Staunen
          </h2>
          <HandDivider className="mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full border-2 border-mattgold bg-warmcreme flex items-center justify-center">
                  <span className="headline-serif text-xl text-mattgold-dark font-semibold">
                    {step.number}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="headline-serif text-xl font-semibold text-nomi-violet mb-2">
                  {step.title}
                </h3>
                <p className="text-tintengrau leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
