"use client";

import { m as motion } from "framer-motion";
import { Heart, Palette, Sparkles } from "lucide-react";
import HandDivider from "./HandDivider";

const promises = [
  {
    title: "Persönlich und einzigartig",
    description:
      "Kein Brief von der Stange. Jeder Umschlag enthält eine kleine Welt, die für dein Kind gemacht wurde – mit seinen Lieblingsthemen und einem wiederkehrenden Begleiter, den es sofort erkennt.",
    icon: Heart,
  },
  {
    title: "Kunstvoll bis ins Detail",
    description:
      "Aquarell statt Clip-Art. Handgezeichnete Linien statt Vektoren. Papier, das sich wie ein echtes Kinderbuch anfühlt – und das dein Kind nicht einfach weglegt.",
    icon: Palette,
  },
  {
    title: "Mehr als nur lesen",
    description:
      "Zum Lesen, Kleben, Malen, Knobeln, Basteln, Anhören und unter das Kopfkissen legen. Bildschirmfreie Fantasiezeit, die von ganz allein entsteht – ohne dass du etwas dazukaufen musst.",
    icon: Sparkles,
  },
];

export default function Promises() {
  return (
    <section className="section-spacing relative overflow-hidden">
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
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-5 md:mb-8 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105">
                <div className="absolute inset-0 bg-mattgold/10 rounded-full blur-2xl" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <p.icon
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-nomi-violet"
                    strokeWidth={1.5}
                  />
                </div>
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
