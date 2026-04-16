"use client";

import { m as motion } from "framer-motion";
import { Mail, Layers, MapPin } from "lucide-react";

const stats = [
  {
    number: "12",
    label: "Briefe",
    sub: "Eine Geschichte, die Monat f\u00FCr Monat w\u00E4chst.",
    icon: Mail,
    color: "#3B82F6",
  },
  {
    number: "24",
    label: "Sammelkarten",
    sub: "Zwei pro Brief \u2013 eine kleine Galerie f\u00FCrs Kinderzimmer.",
    icon: Layers,
    color: "#7C3AED",
  },
  {
    number: "1",
    label: "Entdecker-Karte",
    sub: "12 Sticker, 12 Felder \u2013 nach einem Jahr ist die Welt komplett.",
    icon: MapPin,
    color: "#059669",
  },
];

export default function TheJourney() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFF9EE 0%, #FFFBF5 50%, #FFF9EE 100%)",
      }}
    >
      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="text-center"
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12 mx-auto mb-3">
                  <stat.icon
                    className="w-full h-full"
                    style={{ color: stat.color }}
                    strokeWidth={1.5}
                  />
                </div>
                <div
                  className="headline-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="headline-serif text-base md:text-lg font-semibold text-slate-800 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed text-pretty max-w-[220px] mx-auto">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
