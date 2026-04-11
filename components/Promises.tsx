"use client";

import { motion } from "framer-motion";
import HandDivider from "./HandDivider";

const promises = [
  {
    title: "Persönlich und einzigartig",
    description:
      "Nicht nur ein Name in einem Template. Jeder Brief ist eine kleine Welt, die für dein Kind gebaut wurde – mit seinen Lieblingsthemen und einem wiederkehrenden Begleiter, den es sofort erkennt.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="p1-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" scale="1" />
          </filter>
        </defs>
        <g filter="url(#p1-rough)">
          <path
            d="M 40 14 C 26 14 16 26 16 40 C 16 54 28 66 40 66 C 52 66 64 54 64 40 C 64 26 54 14 40 14 Z"
            stroke="#3B2D5F"
            strokeWidth="2"
            fill="#FFF8F0"
            strokeLinecap="round"
          />
          <circle cx="30" cy="36" r="2" fill="#3B2D5F" />
          <circle cx="50" cy="36" r="2" fill="#3B2D5F" />
          <path
            d="M 30 48 Q 40 54 50 48"
            stroke="#3B2D5F"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 22 22 L 18 16 M 58 22 L 62 16 M 14 40 L 8 40 M 66 40 L 72 40"
            stroke="#C9A84B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Kunstvoll, nie billig",
    description:
      "Aquarell statt Clip-Art. Handgezeichnete Linien statt Vektoren. Papier, das sich wie ein echtes Kinderbuch anfühlt – und das dein Kind nicht einfach weglegt.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="p2-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" scale="1" />
          </filter>
        </defs>
        <g filter="url(#p2-rough)">
          <path
            d="M 20 16 L 60 16 L 60 62 L 40 72 L 20 62 Z"
            stroke="#3B2D5F"
            strokeWidth="2"
            fill="#FFF8F0"
            strokeLinejoin="round"
          />
          <path
            d="M 28 30 L 52 30 M 28 40 L 52 40 M 28 50 L 44 50"
            stroke="#C9A84B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="20" r="3" fill="#C9A84B" />
        </g>
      </svg>
    ),
  },
  {
    title: "Mehr als nur lesen",
    description:
      "Zum Lesen, Kleben, Malen, Knobeln, Basteln, Anhören und unter das Kopfkissen legen. Bildschirmfreie Fantasiezeit, die von ganz allein entsteht – ohne dass du etwas dazukaufen musst.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="p3-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" scale="1" />
          </filter>
        </defs>
        <g filter="url(#p3-rough)">
          <path
            d="M 40 12 L 46 30 L 64 32 L 50 44 L 54 62 L 40 52 L 26 62 L 30 44 L 16 32 L 34 30 Z"
            stroke="#3B2D5F"
            strokeWidth="2"
            fill="#C9A84B"
            fillOpacity="0.25"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="40" r="4" fill="#C9A84B" />
        </g>
      </svg>
    ),
  },
];

export default function Promises() {
  return (
    <section className="section-spacing relative">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="eyebrow mb-6 justify-center">
            <span className="w-10 h-px bg-mattgold" />
            Unser Versprechen
            <span className="w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            Drei Versprechen,
            <br />
            <span className="italic">auf die wir alles setzen</span>
          </h2>
          <HandDivider className="mt-10" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-2deg]">
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
