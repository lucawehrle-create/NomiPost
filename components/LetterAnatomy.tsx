"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const items = [
  {
    title: "Eine Abenteuer-Geschichte",
    description:
      "Nomi erz\u00E4hlt von einem neuen Ort, einer Begegnung, einem R\u00E4tsel \u2013 mit Illustrationen und einem Cliffhanger am Ende.",
    color: "#3B82F6",
  },
  {
    title: "R\u00E4tsel & Mitmach-Seiten",
    description:
      "Geheimschrift, Knobeleien, Bastel-Ideen \u2013 passend zur Geschichte. Mit Dingen, die sowieso in der Schublade liegen.",
    color: "#059669",
  },
  {
    title: "Sammelkarten & Sticker",
    description:
      "Zwei Sammelkarten und ein Entdecker-Sticker in jedem Brief. Nach 12 Monaten: eine vollst\u00E4ndige Sammlung.",
    color: "#7C3AED",
  },
  {
    title: "Ein Antwortbrief",
    description:
      "Dein Kind schreibt Nomi zur\u00FCck. Vielleicht der Anfang einer echten Brieffreundschaft.",
    color: "#DC2626",
  },
];

export default function LetterAnatomy() {
  return (
    <section id="was" className="section-spacing relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-20 left-0 w-[400px] md:w-[600px] opacity-30 pointer-events-none"
        color="#7A5BA6"
        variant={3}
      />
      <WatercolorBlob
        className="absolute bottom-40 right-0 w-[400px] md:w-[500px] opacity-25 pointer-events-none"
        color="#FBBF24"
        variant={1}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Was im Umschlag steckt
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Was in jedem Brief
            <br />
            <span className="italic text-blue-600">auf dein Kind wartet.</span>
          </h2>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="paper-card p-6 md:p-8 lg:p-10 hand-border group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <span
                  className="text-lg"
                  style={{ color: item.color }}
                >
                  \u2726
                </span>
              </div>
              <h3 className="headline-serif text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[0.9rem] md:text-[0.95rem] text-slate-700 leading-relaxed text-pretty">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
