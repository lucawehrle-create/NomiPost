"use client";

import { m as motion } from "framer-motion";
import WatercolorBlob from "./WatercolorBlob";

export default function Manifesto() {
  return (
    <section className="relative py-20 md:py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-nomi-violet" />

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
              <text x="20" y="30" fill="#FFF8F0" fontSize="14">✦</text>
              <text x="80" y="70" fill="#FFF8F0" fontSize="10">✦</text>
              <text x="40" y="100" fill="#FFF8F0" fontSize="12">✦</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>

      {/* Goldener Lichtschein oben */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mattgold/20 blur-[120px] rounded-full pointer-events-none" />
      <WatercolorBlob
        className="absolute bottom-0 left-0 w-[600px] opacity-20 pointer-events-none"
        color="#C9A84B"
        variant={2}
      />
      <WatercolorBlob
        className="absolute top-0 right-0 w-[500px] opacity-15 pointer-events-none"
        color="#C9A84B"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-mattgold font-semibold mb-8">
              <span className="w-10 h-px bg-mattgold" />
              Unser Nordstern
              <span className="w-10 h-px bg-mattgold" />
            </div>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="absolute -top-8 md:-top-12 lg:-top-16 left-1/2 -translate-x-1/2 headline-serif text-7xl md:text-8xl lg:text-[10rem] text-mattgold/40 leading-none font-serif">
              &ldquo;
            </span>
            <p className="headline-serif text-[clamp(1.375rem,4.5vw,3.25rem)] font-semibold text-warmcreme leading-[1.25] italic text-balance">
              Das Ziel ist nicht, dass Eltern ein Abo kaufen.
              <br />
              Das Ziel ist, dass ein Kind in zwanzig Jahren sagt:
              <br />
              <span className="text-mattgold not-italic font-semibold">
                &bdquo;Ich erinnere mich an jeden einzelnen Brief.&ldquo;
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
            <span className="w-16 h-px bg-mattgold/40" />
            <span className="text-mattgold text-xl">✦</span>
            <span className="w-16 h-px bg-mattgold/40" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 text-warmcreme/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto text-pretty"
          >
            Jeder Brief ist ein Kunstwerk. Jede Geschichte ein Abenteuer. Jedes
            Detail eine bewusste Entscheidung. Wir bauen NomiPost nicht, um zu
            skalieren – wir bauen es, um zu{" "}
            <span className="text-warmcreme font-medium">bleiben</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
