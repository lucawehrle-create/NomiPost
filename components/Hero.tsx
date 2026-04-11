"use client";

import { motion } from "framer-motion";
import CompassRose from "./CompassRose";
import EnvelopeIllustration from "./EnvelopeIllustration";
import WatercolorBlob from "./WatercolorBlob";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40 xl:pt-56 xl:pb-48"
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
      <div className="absolute top-32 left-[15%] text-mattgold/40 text-2xl hidden lg:block animate-float-slow">✦</div>
      <div className="absolute top-48 right-[25%] text-mattgold/30 text-xl hidden lg:block animate-float">✦</div>
      <div className="absolute bottom-40 left-[30%] text-mattgold/35 text-lg hidden lg:block animate-float-slow">✦</div>

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

            <h1 className="headline-serif font-semibold text-nomi-violet text-balance text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.025em]">
              Ein Brief, der dein Kind{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-nomi-violet">zum Leuchten</span>
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
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 lg:mt-12 text-lg md:text-xl lg:text-[1.35rem] text-tintengrau leading-relaxed lg:leading-[1.55] max-w-[38rem] text-pretty"
            >
              Jeden Monat kommt ein handgemachter Brief von{" "}
              <span className="text-nomi-violet font-semibold">Nomi</span>, einer
              neugierigen Entdeckerin, die dein Kind auf ein Abenteuer mitnimmt –
              mit Geschichte, Rätsel, Sticker und Hörbuch. Anfassen statt
              wegklicken.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a href="#warteliste" className="btn-primary">
                Jetzt auf die Warteliste
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#was" className="btn-secondary">
                Was drinsteckt
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 flex items-center gap-6 text-sm text-tintengrau-light"
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
                    className="w-10 h-10 rounded-full border-[3px] border-warmcreme flex items-center justify-center text-xs text-warmcreme font-semibold shadow-sm"
                    style={{ backgroundColor: p.bg }}
                  >
                    {p.letters}
                  </div>
                ))}
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-nomi-violet">
                  Erste Familien sind schon dabei
                </p>
                <p className="text-xs mt-0.5">
                  Werde Teil der ersten Welle von Abenteurern
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
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
              className="absolute -bottom-6 -left-4 md:left-4 lg:-left-8"
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

        {/* Subtiler Scroll-Indikator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mattgold-dark/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
            Weiterentdecken
          </span>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            className="animate-float"
          >
            <path
              d="M 7 2 L 7 16 M 2 12 L 7 18 L 12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
