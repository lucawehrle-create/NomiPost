"use client";

import { motion } from "framer-motion";
import CompassRose from "./CompassRose";
import EnvelopeIllustration from "./EnvelopeIllustration";
import WatercolorBlob from "./WatercolorBlob";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      {/* Dezente Aquarell-Akzente im Hintergrund */}
      <WatercolorBlob
        className="absolute -top-40 -left-32 w-[700px] opacity-60 pointer-events-none"
        color="#C9A84B"
        variant={1}
      />
      <WatercolorBlob
        className="absolute top-60 -right-40 w-[800px] opacity-40 pointer-events-none"
        color="#3B2D5F"
        variant={2}
      />

      {/* Dekorative Sterne verteilt */}
      <div className="absolute top-32 left-[12%] text-mattgold/40 text-2xl hidden lg:block animate-float-slow">
        ✦
      </div>
      <div className="absolute top-48 right-[22%] text-mattgold/30 text-xl hidden lg:block animate-float">
        ✦
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="eyebrow mb-8"
            >
              <span className="w-10 h-px bg-mattgold" />
              Persönliche Post für kleine Entdecker
              <span className="text-mattgold">✦</span>
            </motion.div>

            <h1 className="headline-serif font-semibold text-nomi-violet text-balance text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.025em]">
              Ein Brief, der dein Kind{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-nomi-violet">
                  zum Leuchten
                </span>
                <svg
                  className="absolute -bottom-2 lg:-bottom-3 left-0 w-full"
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 3 10 Q 80 2 150 8 T 297 6"
                    stroke="#C9A84B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              bringt.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 lg:mt-10 text-lg md:text-xl text-tintengrau leading-relaxed max-w-[36rem] text-pretty"
            >
              Einmal im Monat trifft ein Umschlag im Briefkasten ein –
              handgemacht, persönlich adressiert, von{" "}
              <span className="text-nomi-violet font-semibold">Nomi</span>.
              Keine App, kein Bildschirm, keine Batterien. Nur ein Kunstwerk
              aus Papier, das dein Kind Jahre später noch aus dem Regal ziehen
              wird.
            </motion.p>

            {/* Inline-Form direkt im Hero – max. Conversion */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 lg:mt-10 max-w-[38rem]"
            >
              <WaitlistForm variant="hero" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-5 text-sm text-tintengrau-light"
            >
              <div className="flex -space-x-2.5">
                {[
                  { bg: "#C9A84B", letters: "LM" },
                  { bg: "#3B2D5F", letters: "JK" },
                  { bg: "#7A5BA6", letters: "SB" },
                  { bg: "#A68735", letters: "AM" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-[3px] border-warmcreme flex items-center justify-center text-[11px] text-warmcreme font-semibold shadow-sm"
                    style={{ backgroundColor: p.bg }}
                  >
                    {p.letters}
                  </div>
                ))}
              </div>
              <p className="leading-tight">
                <span className="font-semibold text-nomi-violet">
                  Die ersten Familien halten schon Wache am Briefkasten.
                </span>
                <br />
                <span className="text-xs">
                  Werde Teil der ersten Welle von Abenteurern.
                </span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Schwebende Kompassrose als Akzent */}
            <div className="absolute -top-8 -right-4 lg:-right-8 w-28 lg:w-36 xl:w-40 animate-float z-20">
              <CompassRose className="w-full h-full gold-glow" />
            </div>

            {/* Leicht gekippter Umschlag */}
            <div className="relative transform rotate-[-3deg] hover:rotate-0 transition-transform duration-[800ms] ease-out">
              <div className="absolute inset-0 bg-nomi-violet/15 blur-3xl rounded-full" />
              <EnvelopeIllustration className="relative w-full max-w-xl mx-auto drop-shadow-[0_25px_50px_rgba(59,45,95,0.25)]" />
            </div>

            {/* Handgeschriebene Notiz */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              animate={{ opacity: 1, rotate: 2, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-6 left-4 lg:-left-8"
            >
              <div className="paper-card hand-border p-5 max-w-[220px] paper-card-elevated">
                <p className="handwritten text-nomi-violet text-xl leading-tight">
                  &ldquo;Du wirst nicht glauben, was ich heute entdeckt habe…&rdquo;
                </p>
                <p className="handwritten text-mattgold-dark text-sm mt-2 flex items-center gap-1">
                  <span className="w-4 h-px bg-mattgold-dark" />
                  Nomi ✦
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
