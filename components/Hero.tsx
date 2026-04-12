"use client";

import { m as motion } from "framer-motion";
import WatercolorBlob from "./WatercolorBlob";
import WaitlistForm from "./WaitlistForm";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28"
    >
      {/* Dezente Aquarell-Akzente im Hintergrund */}
      <WatercolorBlob
        className="absolute -top-20 left-0 w-[400px] sm:w-[500px] md:w-[700px] opacity-50 pointer-events-none"
        color="#C9A84B"
        variant={1}
      />
      <WatercolorBlob
        className="absolute top-60 right-0 w-[400px] sm:w-[500px] md:w-[800px] opacity-30 md:opacity-40 pointer-events-none"
        color="#3B2D5F"
        variant={2}
      />

      {/* Dekorative Sterne */}
      <div className="absolute top-28 right-[8%] text-mattgold/40 text-lg md:text-xl lg:text-2xl animate-float-slow pointer-events-none">
        ✦
      </div>
      <div className="absolute top-40 left-[6%] text-mattgold/30 text-base md:text-lg lg:text-xl hidden sm:block animate-float pointer-events-none">
        ✦
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* ───── Mobile-only: kompaktes Hero-Bild oben ───── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden relative mx-auto w-[220px] sm:w-[260px] -mb-2"
          >
            <ImageSlot
              src="/images/hero-visual.png"
              alt="NomiPost – Persönliche Post für Kinder"
              aspect="square"
              framed={false}
              className="rounded-2xl overflow-hidden shadow-xl shadow-nomi-violet/15"
              placeholderTitle="Hero-Bild"
              placeholderDescription="Produkt-Bild oder Nomi-Illustration, quadratisch."
              filename="/images/hero-visual.png"
            />
          </motion.div>

          {/* ───── Content Column ───── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 min-w-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="eyebrow mb-5 md:mb-8"
            >
              <span className="w-8 md:w-10 h-px bg-mattgold" />
              Persönliche Post für kleine Entdecker
              <span className="text-mattgold hidden sm:inline">✦</span>
            </motion.div>

            <h1 className="headline-serif font-semibold text-nomi-violet text-balance text-[clamp(2rem,7.5vw,5rem)] leading-[1.05] tracking-[-0.025em]">
              Ein Brief, der dein Kind{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-nomi-violet">
                  zum Leuchten
                </span>
                <svg
                  className="absolute -bottom-1 md:-bottom-2 lg:-bottom-3 left-0 w-full"
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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
              className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-tintengrau leading-relaxed max-w-full md:max-w-[36rem] text-pretty"
            >
              Einmal im Monat trifft ein Umschlag im Briefkasten ein –
              persönlich adressiert, liebevoll gestaltet, von{" "}
              <span className="text-nomi-violet font-semibold">Nomi</span>.
              Keine App, kein Bildschirm. Nur Post aus Papier, an die sich
              dein Kind noch Jahre später erinnert.
            </motion.p>

            {/* Inline-Form direkt im Hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 md:mt-10 w-full max-w-full md:max-w-[38rem]"
            >
              <WaitlistForm variant="hero" />
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5 text-sm text-tintengrau-light"
            >
              <div className="flex -space-x-2.5 flex-shrink-0">
                {[
                  { bg: "#C9A84B", letters: "LM" },
                  { bg: "#3B2D5F", letters: "JK" },
                  { bg: "#7A5BA6", letters: "SB" },
                  { bg: "#A68735", letters: "AM" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full border-[3px] border-warmcreme flex items-center justify-center text-[10px] md:text-[11px] text-warmcreme font-semibold shadow-sm"
                    style={{ backgroundColor: p.bg }}
                  >
                    {p.letters}
                  </div>
                ))}
              </div>
              <p className="leading-tight">
                <span className="font-semibold text-nomi-violet text-[13px] md:text-sm">
                  Die ersten Familien sind schon dabei.
                </span>
                <br />
                <span className="text-[11px] md:text-xs">
                  Werde Teil der ersten Welle.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* ───── Desktop: Großes Hero-Bild ───── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 min-w-0 relative hidden lg:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-visual.png"
              alt="NomiPost – Persönliche Post für Kinder"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-[0_20px_40px_rgba(59,45,95,0.15)]"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
