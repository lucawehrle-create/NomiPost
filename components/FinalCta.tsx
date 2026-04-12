"use client";

import { m as motion } from "framer-motion";
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-mattgold" />
            <span className="text-pretty">Nomi packt schon den ersten Umschlag</span>
            <span className="w-8 md:w-10 h-px bg-mattgold" />
          </div>

          <h2 className="headline-serif text-[clamp(2rem,6.5vw,3.5rem)] font-semibold text-nomi-violet leading-[1.05] text-balance">
            Sei dabei,
            <br />
            <span className="italic">wenn die Post losgeht.</span>
          </h2>

          <HandDivider className="mt-8 mb-8" />

          <p className="text-base md:text-lg text-tintengrau leading-relaxed max-w-xl mx-auto text-pretty">
            Nur dein Vorname und deine E-Mail – mehr braucht es nicht. Keine
            Werbung, kein Stress. Nur eine Nachricht, sobald Nomis erster
            Brief auf die Reise geht. Und du bist ganz vorne dabei.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#top" className="btn-primary">
              Jetzt eintragen
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

          <p className="handwritten text-lg md:text-xl text-mattgold-dark mt-8 md:mt-10">
            Wir freuen uns auf dich ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
