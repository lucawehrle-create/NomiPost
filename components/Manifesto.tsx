"use client";

import { m as motion } from "framer-motion";
import WatercolorBlob from "./WatercolorBlob";

export default function Manifesto() {
  return (
    <section className="relative py-20 md:py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a2744 0%, #1e293b 50%, #1f2937 100%)" }} />

      {/* Subtile Sterne im Hintergrund */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stars"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <text x="20" y="30" fill="#F8FAFC" fontSize="14">✦</text>
              <text x="80" y="70" fill="#F8FAFC" fontSize="10">✦</text>
              <text x="40" y="100" fill="#F8FAFC" fontSize="12">✦</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>

      {/* Moon */}
      <div className="absolute top-16 md:top-20 right-[8%] md:right-[12%] w-16 md:w-24 lg:w-28 aspect-square pointer-events-none animate-float-slow">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, #FEF3C7, #FBBF24)",
            boxShadow: "0 0 60px rgba(251, 191, 36, 0.4), 0 0 100px rgba(251, 191, 36, 0.25)",
          }}
        />
      </div>

      {/* Bright twinkling stars */}
      <div className="absolute top-24 left-[10%] text-amber-300 text-xl md:text-2xl animate-twinkle pointer-events-none">✦</div>
      <div className="absolute top-40 left-[25%] text-amber-200 text-base md:text-lg animate-twinkle pointer-events-none" style={{ animationDelay: "1s" }}>✦</div>
      <div className="absolute top-32 right-[35%] text-amber-300 text-sm md:text-base animate-twinkle pointer-events-none" style={{ animationDelay: "2s" }}>✦</div>
      <div className="absolute bottom-32 left-[18%] text-amber-300 text-lg md:text-xl animate-twinkle pointer-events-none" style={{ animationDelay: "1.5s" }}>✦</div>
      <div className="absolute bottom-40 right-[15%] text-amber-200 text-sm md:text-base animate-twinkle pointer-events-none" style={{ animationDelay: "0.5s" }}>✦</div>

      {/* Goldener Lichtschein oben */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full pointer-events-none" />
      <WatercolorBlob
        className="absolute bottom-0 left-0 w-[600px] opacity-20 pointer-events-none"
        color="#FBBF24"
        variant={2}
      />
      <WatercolorBlob
        className="absolute top-0 right-0 w-[500px] opacity-15 pointer-events-none"
        color="#FBBF24"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-8">
              <span className="w-10 h-px bg-amber-400" />
              Unser Nordstern
              <span className="w-10 h-px bg-amber-400" />
            </div>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <p className="headline-serif text-[clamp(1.375rem,4.5vw,3.25rem)] font-semibold text-white leading-[1.25] italic text-balance">
              Stell dir vor, dein Kind zieht in zwanzig Jahren
              <br className="hidden sm:inline" />
              {" "}eine vergilbte Sammelmappe aus dem Regal –
              <br />
              <span className="text-amber-500 not-italic font-semibold">
                und erinnert sich an jeden einzelnen Brief.
              </span>
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-14 flex items-center justify-center gap-4"
          >
            <span className="w-16 h-px bg-amber-400/40" />
            <span className="text-amber-500 text-xl">✦</span>
            <span className="w-16 h-px bg-amber-400/40" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 md:mt-8 text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto text-pretty"
          >
            Jeder Brief ist ein Kunstwerk. Jede Geschichte ein Abenteuer. Jedes
            Detail eine bewusste Entscheidung – weil Kinder den Unterschied
            spüren, auch wenn sie ihn nicht{" "}
            <span className="text-white font-medium">benennen können</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
