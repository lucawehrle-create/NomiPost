"use client";

import { motion } from "framer-motion";
import CompassRose from "./CompassRose";
import EnvelopeIllustration from "./EnvelopeIllustration";
import WatercolorBlob from "./WatercolorBlob";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Dezente Aquarell-Akzente im Hintergrund */}
      <WatercolorBlob
        className="absolute -top-20 -left-20 w-[500px] opacity-60 pointer-events-none"
        color="#C9A84B"
        variant={1}
      />
      <WatercolorBlob
        className="absolute top-40 -right-32 w-[600px] opacity-40 pointer-events-none"
        color="#3B2D5F"
        variant={2}
      />

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="eyebrow mb-6">
              <span className="w-8 h-px bg-mattgold" />
              Persönliche Post für kleine Entdecker
            </div>

            <h1 className="headline-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-nomi-violet leading-[1.05] tracking-tight text-balance">
              Ein Brief, der dein Kind{" "}
              <span className="relative inline-block">
                <span className="relative z-10">zum Leuchten</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 16"
                  fill="none"
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

            <p className="mt-8 text-lg md:text-xl text-tintengrau leading-relaxed max-w-xl">
              Jeden Monat kommt ein handgemachter Brief von{" "}
              <span className="text-nomi-violet font-semibold">Nomi</span>, einer
              neugierigen Entdeckerin, die dein Kind auf ein Abenteuer mitnimmt –
              mit Geschichte, Rätsel, Sticker und Hörbuch. Anfassen statt
              wegklicken.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-tintengrau-light">
              <div className="flex -space-x-2">
                {["#C9A84B", "#3B2D5F", "#7A5BA6", "#A68735"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-warmcreme flex items-center justify-center text-xs text-warmcreme font-semibold"
                    style={{ backgroundColor: c }}
                  >
                    {["LM", "JK", "SB", "AM"][i]}
                  </div>
                ))}
              </div>
              <span className="leading-tight">
                <span className="font-semibold text-nomi-violet">Erste Familien</span>
                <br />
                sind schon auf der Warteliste
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Schwebende Kompassrose als Akzent */}
            <div className="absolute -top-6 -right-4 w-24 md:w-32 animate-float">
              <CompassRose className="w-full h-full drop-shadow-xl" />
            </div>

            {/* Leicht gekippter Umschlag */}
            <div className="relative transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-nomi-violet/10 blur-3xl rounded-full" />
              <EnvelopeIllustration className="relative w-full max-w-lg mx-auto drop-shadow-2xl" />
            </div>

            {/* Handgeschriebene Notiz */}
            <div className="absolute -bottom-4 left-4 md:left-12 transform rotate-[2deg]">
              <div className="paper-card hand-border p-4 max-w-[200px]">
                <p className="handwritten text-nomi-violet text-xl leading-tight">
                  &ldquo;Du wirst nicht glauben, was ich heute entdeckt habe...&rdquo;
                </p>
                <p className="handwritten text-mattgold-dark text-sm mt-1">— Nomi ✦</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
