"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";

const promises = [
  {
    title: "Persönlich und einzigartig",
    description:
      "Kein Brief von der Stange. Jeder Umschlag enthält eine kleine Welt, die für dein Kind gemacht wurde – mit seinen Lieblingsthemen und einem wiederkehrenden Begleiter, den es sofort erkennt.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Versiegelter Briefumschlag */}
        <rect x="12" y="22" width="56" height="38" rx="3" stroke="#3B2D5F" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M 12 24 L 40 44 L 68 24" stroke="#3B2D5F" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        {/* Goldenes Wachs-Siegel */}
        <circle cx="40" cy="50" r="7" fill="#C9A84B" />
        <path d="M 40 45 L 41.5 48.5 L 45 49 L 42.5 51.5 L 43 55 L 40 53 L 37 55 L 37.5 51.5 L 35 49 L 38.5 48.5 Z" fill="#FFF8F0" />
      </svg>
    ),
  },
  {
    title: "Kunstvoll, nie billig",
    description:
      "Aquarell statt Clip-Art. Handgezeichnete Linien statt Vektoren. Papier, das sich wie ein echtes Kinderbuch anfühlt – und das dein Kind nicht einfach weglegt.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Aufgeschlagenes Buch mit Feder */}
        <path d="M 40 20 L 40 62" stroke="#3B2D5F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 40 20 C 34 18 20 16 14 20 L 14 58 C 20 54 34 56 40 62" stroke="#3B2D5F" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <path d="M 40 20 C 46 18 60 16 66 20 L 66 58 C 60 54 46 56 40 62" stroke="#3B2D5F" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        {/* Goldene Seitenlinien */}
        <path d="M 22 30 L 34 30 M 22 38 L 32 38 M 22 46 L 34 46" stroke="#C9A84B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        {/* Gold-Stern */}
        <circle cx="54" cy="34" r="4" fill="#C9A84B" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Mehr als nur lesen",
    description:
      "Zum Lesen, Kleben, Malen, Knobeln, Basteln, Anhören und unter das Kopfkissen legen. Bildschirmfreie Fantasiezeit, die von ganz allein entsteht – ohne dass du etwas dazukaufen musst.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Geschichtete Elemente: Papier + Sticker + Stift */}
        {/* Hinteres Blatt (schräg) */}
        <rect x="18" y="16" width="40" height="52" rx="2" stroke="#3B2D5F" strokeWidth="2" transform="rotate(6 38 42)" opacity="0.3" />
        {/* Mittleres Blatt */}
        <rect x="20" y="18" width="40" height="52" rx="2" stroke="#3B2D5F" strokeWidth="2" transform="rotate(-3 40 44)" opacity="0.5" />
        {/* Vorderes Blatt */}
        <rect x="22" y="14" width="40" height="52" rx="2" stroke="#3B2D5F" strokeWidth="2.5" fill="#FFF8F0" />
        {/* Inhalt: Zeilen + Stern */}
        <path d="M 30 28 L 54 28 M 30 36 L 50 36 M 30 44 L 46 44" stroke="#3B2D5F" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
        {/* Gold-Stern als Sticker-Andeutung */}
        <path d="M 48 52 L 50 47 L 55 48 L 51 44 L 54 40 L 50 42 L 48 38 L 46 42 L 42 40 L 45 44 L 41 48 L 46 47 Z" fill="#C9A84B" />
      </svg>
    ),
  },
];

export default function Promises() {
  return (
    <section className="section-spacing relative">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 lg:mb-24">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-mattgold" />
            Unser Versprechen
            <span className="w-8 md:w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            Drei Versprechen,
            <br />
            <span className="italic">auf die wir alles setzen</span>
          </h2>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group sm:last:col-span-2 lg:last:col-span-1"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-5 md:mb-8 transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-2deg]">
                <div className="absolute inset-0 bg-mattgold/10 rounded-full blur-2xl scale-75" />
                <div className="relative">{p.icon}</div>
              </div>
              <h3 className="headline-serif text-2xl lg:text-[1.75rem] font-semibold text-nomi-violet mb-4 leading-tight">
                {p.title}
              </h3>
              <p className="text-tintengrau leading-relaxed text-pretty max-w-sm mx-auto">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
