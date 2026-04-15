"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const traits = [
  {
    title: "Unendlich neugierig",
    text: "Stellt Fragen, die Kinder sich auch stellen: Warum fliegen Vögel? Was machen Wolken, wenn sie schlafen?",
  },
  {
    title: "Mutig, aber nicht furchtlos",
    text: "Hat auch mal Bammel – zeigt aber, dass Mut bedeutet, es trotzdem zu versuchen.",
  },
  {
    title: "Lacht viel",
    text: "Findet Dinge lustig, ist manchmal tollpatschig, nimmt sich selbst nicht zu ernst. Ein echter Freund.",
  },
];

export default function AboutNomi() {
  return (
    <section id="nomi" className="section-spacing relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-10 right-0 w-[600px] opacity-25 pointer-events-none"
        color="#FBBF24"
        variant={1}
      />
      <WatercolorBlob
        className="absolute bottom-10 left-0 w-[500px] opacity-20 pointer-events-none"
        color="#3B82F6"
        variant={2}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 min-w-0 flex justify-center order-first"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
              <div className="absolute inset-0 bg-amber-400/20 blur-[60px] md:blur-[80px] rounded-full scale-110" />

              <div className="relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-[800ms] ease-out overflow-hidden rounded-3xl">
                <Image
                  src="/images/nomi-portrait.png"
                  alt="Nomi – das Fantasiewesen hinter NomiPost"
                  width={800}
                  height={800}
                  quality={75}
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                  className="w-full h-auto"
                />
              </div>

              <p className="handwritten text-center mt-5 md:mt-6 text-lg md:text-xl text-slate-800">
                Hallo, ich bin Nomi ✦
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 min-w-0"
          >
            <div className="eyebrow mb-5 md:mb-6">
              <span className="w-8 md:w-10 h-px bg-amber-400" />
              Wer ist Nomi?
              <span className="w-8 md:w-10 h-px bg-amber-400" />
            </div>
            <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] mb-6 md:mb-8 text-balance">
              Ein Freund,
              <br />
              <span className="italic text-blue-600">den es so noch nie gab.</span>
            </h2>
            <HandDivider className="mb-6 md:mb-8 justify-start" />
            <div className="space-y-4 md:space-y-5 text-base md:text-lg text-slate-700 leading-relaxed text-pretty max-w-2xl">
              <p>
                Nomi ist kein Tier. Nomi ist kein Mensch. Nomi ist ein{" "}
                <span className="text-blue-600 font-semibold">Fantasiewesen</span>{" "}
                – mit leuchtendem Stirnmal, großen runden Ohren und einer
                kleinen Antenne, mit der Nomi neue Ideen empfängt.
              </p>
              <p>
                Nomi erzählt deinem Kind von den Orten, die es besucht hat.
                Von den Dingen, die es entdeckt hat. Von den Fragen, auf die
                es keine Antwort kennt – und bittet dein Kind um Hilfe.
              </p>
              <p>
                Weil das Schönste an einer Freundschaft ist: beide lernen
                voneinander.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid sm:grid-cols-3 gap-4 md:gap-5">
              {traits.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl bg-amber-50/60 px-4 py-3 md:px-5 md:py-4"
                >
                  <p className="headline-serif text-base md:text-lg font-semibold text-slate-800 mb-1">
                    {t.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 p-6 md:p-8 lg:p-10 paper-card hand-border paper-card-elevated relative">
              <span className="absolute -top-3 left-6 md:left-8 bg-slate-50 px-3 text-amber-500 text-xl">
                &ldquo;
              </span>
              <p className="handwritten text-lg md:text-xl lg:text-2xl text-slate-800 italic leading-relaxed">
                Huch! Hast du das auch gerade gesehen? Da war was unter dem
                Stein – und ich glaube, es hat mich angelächelt. Kommst du
                mit gucken?
              </p>
              <p className="handwritten text-amber-700 text-right mt-3 flex items-center justify-end gap-2">
                <span className="w-6 h-px bg-amber-700" />
                Nomi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
