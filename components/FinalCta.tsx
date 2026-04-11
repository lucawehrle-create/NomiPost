"use client";

import { motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

export default function FinalCta() {
  return (
    <section
      id="warteliste"
      className="relative section-spacing-sm overflow-hidden"
    >
      <WatercolorBlob
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] opacity-25 pointer-events-none"
        color="#C9A84B"
        variant={1}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="eyebrow mb-6 justify-center">
            <span className="w-10 h-px bg-mattgold" />
            Nomi packt schon den ersten Umschlag
            <span className="w-10 h-px bg-mattgold" />
          </div>

          <h2 className="headline-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-nomi-violet leading-[1.05] text-balance">
            Sei dabei,
            <br />
            <span className="italic">wenn die Post losgeht.</span>
          </h2>

          <HandDivider className="mt-8 mb-8" />

          <p className="text-lg text-tintengrau leading-relaxed max-w-xl mx-auto text-pretty">
            Vorname, E-Mail, fertig. Keine Werbung, kein Weitersagen, kein
            Stress. Nur eine Nachricht, sobald Nomis erster Brief auf die
            Reise geht – und die Zusicherung, dass du zur allerersten Welle
            gehörst.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#top" className="btn-primary">
              Jetzt eintragen
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <p className="handwritten text-xl text-mattgold-dark mt-10">
            Wir freuen uns auf dich ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
