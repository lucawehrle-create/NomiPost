"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";
import { characters } from "@/lib/characters";

export default function Characters() {
  return (
    <section id="freunde" className="section-spacing relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-20 left-0 w-[500px] opacity-15 pointer-events-none"
        color="#3B82F6"
        variant={2}
      />
      <WatercolorBlob
        className="absolute bottom-20 right-0 w-[500px] opacity-15 pointer-events-none"
        color="#FBBF24"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Nomis Welt
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Fünf Freunde,
            <br />
            <span className="italic text-blue-600">
              fünf Persönlichkeiten.
            </span>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto text-pretty">
            Nomi reist nicht allein. Unterwegs begegnet Nomi vier Freunden —
            jeder mit einem eigenen Charakter. Dein Kind wird schnell einen
            Liebling haben.
          </p>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        {/* Kompaktes 5er-Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {characters.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className="text-center group first:col-span-2 sm:first:col-span-1"
            >
              {/* Charakter-Bild im farbigen Kreis */}
              <div className="relative mx-auto mb-4 md:mb-5">
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: c.colorHex,
                    boxShadow: `0 12px 28px -8px ${c.colorHex}40, 0 4px 12px -4px ${c.colorHex}25`,
                  }}
                >
                  <Image
                    src={`/images/${c.id}-head.png`}
                    alt={c.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3
                className="headline-serif text-xl md:text-2xl font-bold mb-1.5"
                style={{ color: c.colorHex }}
              >
                {c.name}
              </h3>

              {/* Archetyp */}
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                {c.archetype}
              </p>

              {/* Zitat */}
              <p
                className="handwritten text-base md:text-lg leading-snug mb-4 text-pretty"
                style={{ color: c.colorHex }}
              >
                &bdquo;{c.quote}&ldquo;
              </p>

              {/* Was dein Kind lernt — kurzer Satz */}
              <p className="text-[0.8rem] md:text-sm text-slate-600 leading-relaxed text-pretty">
                {c.funktion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
