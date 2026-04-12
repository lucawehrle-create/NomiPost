"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";

const steps = [
  {
    number: "01",
    title: "Du trägst dich ein",
    description:
      "Zwei Felder: dein Vorname und deine E-Mail. Mehr brauchen wir nicht.",
  },
  {
    number: "02",
    title: "Nomi packt den ersten Umschlag",
    description:
      "Wenn Nomi ihren ersten Brief verschickt, bekommst du als Erste:r Bescheid – mit einer besonderen Überraschung zum Start.",
  },
  {
    number: "03",
    title: "Jeden Monat eine neue Reise",
    description:
      "Danach soll jeden Monat ein neuer Umschlag kommen. Neue Geschichte, neue Welt, neue Rätsel – aber immer dieselbe Nomi.",
  },
  {
    number: "04",
    title: "Die Sammlung wächst",
    description:
      "Jeder Brief soll seinen Platz bekommen. Nach einem Jahr hält dein Kind eine ganze Sammlung in der Hand – etwas, das bleibt.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="wie"
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-warmcreme via-warmcreme-dark/30 to-warmcreme"
    >
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-mattgold" />
            Wie es funktioniert
            <span className="w-8 md:w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            Von der Anmeldung
            <br />
            <span className="italic">bis zu leuchtenden Augen am Briefkasten</span>
          </h2>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        {/* Timeline: auf Mobile vertikal mit Connector-Linie links, auf Desktop horizontal */}
        <div className="max-w-7xl mx-auto relative">
          {/* Horizontale Verbindungslinie – nur Desktop */}
          <div className="hidden lg:block absolute top-[3.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-mattgold/40 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <div className="flex lg:flex-col items-start gap-5 lg:gap-0">
                  <div className="flex-shrink-0 lg:mb-6">
                    <div className="relative w-14 h-14 md:w-[4.5rem] md:h-[4.5rem]">
                      <div className="absolute inset-0 bg-mattgold/10 rounded-full blur-xl scale-125" />
                      <div className="relative w-full h-full rounded-full border-2 border-mattgold bg-warmcreme flex items-center justify-center shadow-sm">
                        <span className="headline-serif text-xl md:text-2xl text-mattgold-dark font-semibold">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left flex-1 min-w-0 pt-1 md:pt-2 lg:pt-0">
                    <h3 className="headline-serif text-lg md:text-xl lg:text-[1.375rem] font-semibold text-nomi-violet mb-2 md:mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[0.9rem] md:text-[0.95rem] text-tintengrau leading-relaxed text-pretty">
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
