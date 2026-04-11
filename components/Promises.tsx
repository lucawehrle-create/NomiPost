"use client";

import { motion } from "framer-motion";
import HandDivider from "./HandDivider";

const promises = [
  {
    title: "Persönlich und einzigartig",
    description:
      "Jeder Brief fühlt sich an, als wäre er nur für dieses eine Kind gemacht. Die Ansprache, die Geschichte, jedes Detail.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 32 12 C 20 12 12 22 12 34 C 12 46 22 54 32 54 C 42 54 52 46 52 34 C 52 22 44 12 32 12 Z"
          stroke="#3B2D5F"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="30" r="2" fill="#3B2D5F" />
        <circle cx="40" cy="30" r="2" fill="#3B2D5F" />
        <path
          d="M 24 40 Q 32 45 40 40"
          stroke="#3B2D5F"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 18 18 L 15 14 M 46 18 L 49 14"
          stroke="#C9A84B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Kunstvoll, nie billig",
    description:
      "Jeder Brief sieht aus wie eine Seite aus einem preisgekrönten Kinderbuch. Aquarell, hochwertiges Papier, liebevolle Details.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 16 14 L 48 14 L 48 50 L 32 58 L 16 50 Z"
          stroke="#3B2D5F"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M 24 24 L 40 24 M 24 32 L 40 32 M 24 40 L 34 40"
          stroke="#C9A84B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Mehr als nur lesen",
    description:
      "Ein multisensorisches Erlebnis: Geschichte zum Lesen, Rätsel zum Knobeln, Sticker zum Sammeln, Hörbuch zum Lauschen.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 32 10 L 36 24 L 50 26 L 40 36 L 42 50 L 32 44 L 22 50 L 24 36 L 14 26 L 28 24 Z"
          stroke="#3B2D5F"
          strokeWidth="2.5"
          fill="#C9A84B"
          fillOpacity="0.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Promises() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="w-8 h-px bg-mattgold" />
            Unser Versprechen
            <span className="w-8 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-4xl md:text-5xl font-semibold text-nomi-violet leading-tight text-balance">
            Drei Dinge, auf die du dich verlassen kannst
          </h2>
          <HandDivider className="mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6">{p.icon}</div>
              <h3 className="headline-serif text-2xl font-semibold text-nomi-violet mb-3">
                {p.title}
              </h3>
              <p className="text-tintengrau leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
