"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import WatercolorBlob from "./WatercolorBlob";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28"
    >
      <WatercolorBlob
        className="absolute -top-20 left-0 w-[400px] sm:w-[500px] md:w-[700px] opacity-50 pointer-events-none"
        color="#FBBF24"
        variant={1}
      />
      <WatercolorBlob
        className="absolute top-60 right-0 w-[400px] sm:w-[500px] md:w-[800px] opacity-30 md:opacity-40 pointer-events-none"
        color="#1E293B"
        variant={2}
      />

      <div className="absolute top-28 right-[8%] text-amber-400/40 text-lg md:text-xl lg:text-2xl animate-float-slow pointer-events-none">
        ✦
      </div>
      <div className="absolute top-40 left-[6%] text-amber-400/30 text-base md:text-lg lg:text-xl hidden sm:block animate-float pointer-events-none">
        ✦
      </div>
      <div className="absolute top-[45%] right-[3%] text-blue-400/30 text-sm md:text-base animate-twinkle pointer-events-none">
        ✦
      </div>
      <div className="absolute top-[18%] left-[15%] text-emerald-400/25 text-xs md:text-sm hidden md:block animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }}>
        ✦
      </div>
      <div className="absolute top-[65%] left-[4%] text-coral-400/25 text-sm hidden lg:block animate-twinkle pointer-events-none" style={{ animationDelay: "1.5s" }}>
        ✦
      </div>
      <div className="absolute top-[55%] right-[12%] text-amber-300/20 text-xs animate-float pointer-events-none" style={{ animationDelay: "3s" }}>
        ✦
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
          <div className="lg:col-span-7 min-w-0">
            <div className="eyebrow mb-5 md:mb-6">
              <span className="w-8 md:w-10 h-px bg-amber-400" />
              Persönliche Post für Kinder von 5 bis 10
              <span className="w-8 md:w-10 h-px bg-amber-400" />
            </div>

            <h1 className="headline-serif font-semibold text-slate-800 text-balance text-[clamp(2rem,7.5vw,5rem)] leading-[1.05] tracking-[-0.025em]">
              Ein Brief, der Kinderaugen{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">
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
                    stroke="#3B82F6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              bringt.
            </h1>

            <p className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-full md:max-w-[36rem] text-pretty">
              <span className="text-blue-600 font-semibold">Nomi</span> ist
              ein Fantasiewesen auf Entdeckungsreise — und schreibt deinem Kind
              jeden Monat einen persönlichen Brief. Mit illustrierten Geschichten,
              Rätseln, Sammelkarten und Dingen zum Mitmachen. Ohne Bildschirm.
            </p>

            <div className="mt-8 md:mt-10 w-full max-w-full md:max-w-[38rem]">
              <WaitlistForm variant="hero" />
            </div>

            <div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5 text-sm text-slate-500">
              <div className="flex -space-x-2.5 flex-shrink-0">
                {[
                  { bg: "#FBBF24", letters: "LM" },
                  { bg: "#1E293B", letters: "JK" },
                  { bg: "#7A5BA6", letters: "SB" },
                  { bg: "#B45309", letters: "AM" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full border-[3px] border-white flex items-center justify-center text-[10px] md:text-[11px] text-white font-semibold shadow-[0_2px_8px_rgba(251,191,36,0.25)]"
                    style={{ backgroundColor: p.bg }}
                  >
                    {p.letters}
                  </div>
                ))}
              </div>
              <p className="leading-tight">
                <span className="font-semibold text-slate-800 text-[13px] md:text-sm">
                  Die ersten Familien warten schon.
                </span>
                <br />
                <span className="text-[11px] md:text-xs">
                  Sichere dir deinen Platz.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 min-w-0 relative flex justify-center">
            <Image
              src="/images/hero-visual.png"
              alt="NomiPost – Persönliche Post für Kinder"
              width={600}
              height={600}
              quality={80}
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 500px"
              className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-full lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-[0_20px_40px_rgba(30,41,59,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
