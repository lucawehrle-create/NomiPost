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
    iconColor: "text-blue-500",
    glowColor: "bg-blue-400/20",
    bgTint: "bg-blue-50/50",
  },
  {
    title: "Kunstvoll bis ins Detail",
    description:
      "Jeder Brief fühlt sich an wie eine Seite aus einem Kinderbuch – mit Illustrationen, die man gerne aufhebt statt wegwirft.",
    icon: Palette,
    iconColor: "text-violet-600",
    glowColor: "bg-violet-400/20",
    bgTint: "bg-violet-50/50",
  },
  {
    title: "Mehr als nur lesen",
    description:
      "Zum Lesen, Kleben, Malen, Knobeln, Basteln, Anhören und unter das Kopfkissen legen. Bildschirmfreie Fantasiezeit, die von ganz allein entsteht – ohne dass du etwas dazukaufen musst.",
    icon: Sparkles,
    iconColor: "text-amber-500",
    glowColor: "bg-amber-400/20",
    bgTint: "bg-amber-50/50",
  },
];

export default function Promises() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Unser Versprechen
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Was NomiPost
            <br />
            <span className="italic text-blue-600">anders macht.</span>
          </h2>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`text-center group sm:last:col-span-2 lg:last:col-span-1 rounded-3xl ${p.bgTint} p-8 md:p-10`}
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-5 md:mb-8 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105">
                <div className={`absolute inset-0 ${p.glowColor} rounded-full blur-2xl`} />
                <div className="relative w-full h-full flex items-center justify-center">
                  <p.icon
                    className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${p.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="headline-serif text-2xl lg:text-[1.75rem] font-semibold text-slate-800 mb-4 leading-tight">
                {p.title}
              </h3>
              <p className="text-slate-700 leading-relaxed text-pretty max-w-sm mx-auto">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
