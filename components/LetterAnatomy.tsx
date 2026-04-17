"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";
import { Cloud, Flower } from "./MagicElements";

const items = [
  {
    title: "Eine illustrierte Geschichte",
    description:
      "Nomi erz\u00E4hlt von den Orten, die es entdeckt hat \u2014 spannend, liebevoll illustriert, mit einem Cliffhanger, der Lust auf den n\u00E4chsten Brief macht.",
    color: "#3B82F6",
  },
  {
    title: "R\u00E4tsel & Mitmach-Seiten",
    description:
      "Geheimschrift, Knobeleien, Bastel-Ideen \u2014 alles passend zur Geschichte. Ohne Zusatzmaterial, ohne Aufwand f\u00FCr dich.",
    color: "#059669",
  },
  {
    title: "Sammelkarten & Sticker",
    description:
      "Zwei Sammelkarten und ein Entdecker-Sticker in jedem Brief. Nach 12 Monaten: eine vollst\u00E4ndige Sammlung f\u00FCrs Kinderzimmer.",
    color: "#7C3AED",
  },
  {
    title: "Ein Antwortbrief",
    description:
      "Dein Kind schreibt Nomi zur\u00FCck \u2014 und wird Teil der Geschichte.",
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

      {/* Cloud accent */}
      <Cloud className="absolute top-8 right-[8%] w-[80px] md:w-[110px] opacity-70 animate-float-slow pointer-events-none" />

      {/* Lumi peeking from the left edge */}
      <div className="absolute top-[40%] -left-8 md:-left-4 lg:left-0 w-20 md:w-28 lg:w-32 pointer-events-none z-0 hidden sm:block animate-float-slow" style={{ animationDelay: "1s" }}>
        <Image
          src="/images/lumi-body.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-[0_12px_24px_rgba(5,150,105,0.2)]"
        />
      </div>

      {/* Tiko peeking from right */}
      <div className="absolute bottom-10 -right-8 md:right-4 lg:right-8 w-16 md:w-24 lg:w-28 pointer-events-none z-0 hidden md:block animate-float" style={{ animationDelay: "2.5s" }}>
        <Image
          src="/images/tiko-body.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-[0_12px_24px_rgba(217,119,6,0.2)]"
        />
      </div>

      {/* Scattered flowers */}
      <Flower
        color="#DC2626"
        className="absolute top-[30%] left-[40%] w-4 md:w-5 opacity-40 pointer-events-none hidden lg:block"
      />
      <Flower
        color="#7C3AED"
        className="absolute bottom-[25%] left-[15%] w-5 md:w-6 opacity-50 pointer-events-none"
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
                  ✦
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
