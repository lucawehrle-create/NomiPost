"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import WatercolorBlob from "./WatercolorBlob";
import WaitlistForm from "./WaitlistForm";
import { Cloud, RollingHills, Flower, Butterfly } from "./MagicElements";

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

      {/* Fluffy clouds floating */}
      <Cloud
        className="absolute top-20 right-[12%] w-[90px] md:w-[120px] lg:w-[140px] opacity-80 animate-float-slow pointer-events-none"
        style={{ animationDelay: "0s" }}
      />
      <Cloud
        className="absolute top-32 left-[8%] w-[70px] md:w-[100px] opacity-70 animate-float pointer-events-none hidden sm:block"
        style={{ animationDelay: "2s" }}
      />
      <Cloud
        className="absolute top-[38%] right-[3%] w-[60px] md:w-[80px] opacity-60 animate-float-slow pointer-events-none hidden md:block"
        style={{ animationDelay: "4s" }}
      />

      {/* Butterfly */}
      <Butterfly
        color="#7C3AED"
        className="absolute top-[25%] left-[52%] w-6 md:w-8 opacity-80 animate-float pointer-events-none hidden md:block"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Stars */}
      <div className="absolute top-28 right-[8%] text-amber-400/40 text-lg md:text-xl lg:text-2xl animate-twinkle pointer-events-none">
        ✦
      </div>
      <div className="absolute top-[45%] right-[3%] text-blue-400/30 text-sm md:text-base animate-twinkle pointer-events-none" style={{ animationDelay: "1s" }}>
        ✦
      </div>
      <div className="absolute top-[18%] left-[15%] text-emerald-400/30 text-xs md:text-sm hidden md:block animate-twinkle pointer-events-none" style={{ animationDelay: "2s" }}>
        ✦
      </div>
      <div className="absolute top-[65%] left-[4%] text-coral-400/30 text-sm hidden lg:block animate-twinkle pointer-events-none" style={{ animationDelay: "1.5s" }}>
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
            <div className="relative">
              {/* Weicher Glow hinter Nomi */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(251,191,36,0.08) 50%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "scale(1.3)",
                }}
              />

              {/* Flowers around Nomi */}
              <Flower
                color="#FBBF24"
                className="absolute -bottom-2 -left-4 md:-left-8 w-6 md:w-8 opacity-90 z-0 pointer-events-none"
              />
              <Flower
                color="#DC2626"
                className="absolute bottom-2 -right-2 md:-right-6 w-5 md:w-7 opacity-85 z-0 pointer-events-none"
              />
              <Flower
                color="#7C3AED"
                className="absolute -bottom-4 left-[38%] w-4 md:w-6 opacity-80 z-0 pointer-events-none"
              />

              <Image
                src="/images/nomi-body.png"
                alt="Nomi — das Fantasiewesen hinter NomiPost"
                width={800}
                height={800}
                quality={80}
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 400px"
                className="relative z-10 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[360px] xl:w-[400px] h-auto mx-auto drop-shadow-[0_24px_48px_rgba(59,130,246,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rolling hills at bottom */}
      <RollingHills className="absolute bottom-0 left-0 right-0 w-full h-[80px] md:h-[120px] lg:h-[140px] pointer-events-none" />
    </section>
  );
}
