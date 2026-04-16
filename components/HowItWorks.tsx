"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";

const steps = [
  {
    number: "01",
    title: "Du tr\u00E4gst dich ein",
    description:
      "Zwei Felder: dein Vorname und deine E-Mail. Mehr brauchen wir nicht.",
    color: "#3B82F6",
  },
  {
    number: "02",
    title: "Der erste Brief kommt",
    description:
      "Dein Kind bekommt seinen ersten pers\u00F6nlichen Brief von Nomi \u2013 mit einer besonderen \u00DCberraschung zum Start.",
    color: "#059669",
  },
  {
    number: "03",
    title: "Jeden Monat eine neue Reise",
    description:
      "Danach kommt jeden Monat ein neuer Umschlag. Neue Geschichte, neue Welt, neue R\u00E4tsel \u2013 aber immer dieselbe Nomi.",
    color: "#7C3AED",
  },
  {
    number: "04",
    title: "Die Sammlung w\u00E4chst",
    description:
      "Jeder Brief findet seinen Platz. Nach einem Jahr hat dein Kind eine ganze Sammlung \u2013 etwas, das bleibt.",
    color: "#D97706",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="wie"
      className="section-spacing relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF9EE 0%, #FFFBF5 40%, #FFF9EE 100%)",
      }}
    >
      {/* Floating decorations */}
      <div className="absolute top-16 left-[10%] text-amber-400/20 text-sm animate-twinkle pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-20 right-[15%] text-blue-400/15 text-lg animate-twinkle pointer-events-none" style={{ animationDelay: "1.5s" }}>
        ✦
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Wie es funktioniert
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Von der Anmeldung
            <br />
            <span className="italic text-blue-600">
              bis zu leuchtenden Augen am Briefkasten
            </span>
          </h2>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Horizontale Verbindungslinie \u2013 bunt statt nur blau */}
          <div
            className="hidden lg:block absolute top-[3.75rem] left-[12.5%] right-[12.5%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #3B82F640, #05966940, #7C3AED40, #D9770640)",
            }}
          />

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
                      <div
                        className="absolute inset-0 rounded-full blur-2xl scale-125"
                        style={{ backgroundColor: `${step.color}20` }}
                      />
                      <div
                        className="relative w-full h-full rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: step.color,
                          boxShadow: `0 12px 24px -6px ${step.color}70, 0 4px 10px -2px ${step.color}40`,
                        }}
                      >
                        <span className="headline-serif text-xl md:text-2xl text-white font-semibold">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left flex-1 min-w-0 pt-1 md:pt-2 lg:pt-0">
                    <h3 className="headline-serif text-lg md:text-xl lg:text-[1.375rem] font-semibold text-slate-800 mb-2 md:mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[0.9rem] md:text-[0.95rem] text-slate-700 leading-relaxed text-pretty">
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
