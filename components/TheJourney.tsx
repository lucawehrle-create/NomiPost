"use client";

import { m as motion } from "framer-motion";

const stats = [
  {
    number: "12",
    label: "Briefe",
    sub: "Jeden Monat ein neues Abenteuer — eine Geschichte, die w\u00E4chst.",
    color: "#3B82F6",
    emoji: "\uD83D\uDCE8",
  },
  {
    number: "24",
    label: "Sammelkarten",
    sub: "Zwei in jedem Umschlag. Freunde, Orte, Entdeckungen — zum Tauschen und Aufbewahren.",
    color: "#7C3AED",
    emoji: "\u2728",
  },
  {
    number: "1",
    label: "Entdecker-Karte",
    sub: "Gro\u00DFes Poster mit 12 Feldern. Jeden Monat kommt ein Sticker dazu — bis die Welt komplett ist.",
    color: "#059669",
    emoji: "\uD83D\uDDFA\uFE0F",
  },
];

export default function TheJourney() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFF9EE 0%, #FFFBF5 50%, #FFF9EE 100%)",
      }}
    >
      <div className="container-wide relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="handwritten text-lg md:text-xl text-amber-700">
            Was nach 12 Monaten entsteht ✦
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="paper-card p-6 md:p-8 text-center group hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                  {stat.emoji}
                </div>
                <div
                  className="headline-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="headline-serif text-base md:text-lg font-semibold text-slate-800 mb-3">
                  {stat.label}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed text-pretty">
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
