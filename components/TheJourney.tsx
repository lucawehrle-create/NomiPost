"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import { Cloud, Flower } from "./MagicElements";

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
      {/* Clouds */}
      <Cloud className="absolute top-4 left-[5%] w-[70px] md:w-[100px] opacity-70 animate-float-slow pointer-events-none" />
      <Cloud className="absolute top-8 right-[6%] w-[90px] md:w-[120px] opacity-75 animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Kira peeking from right edge */}
      <div className="absolute bottom-0 -right-6 md:right-2 lg:right-6 w-16 md:w-24 lg:w-28 pointer-events-none z-0 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
        <Image
          src="/images/kira-body.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-[0_12px_24px_rgba(220,38,38,0.2)]"
        />
      </div>

      {/* Flowers */}
      <Flower color="#FBBF24" className="absolute bottom-8 left-[15%] w-5 md:w-6 opacity-60 pointer-events-none" />
      <Flower color="#059669" className="absolute top-1/2 left-[3%] w-4 md:w-5 opacity-50 pointer-events-none hidden md:block" />

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
