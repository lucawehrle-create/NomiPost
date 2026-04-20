"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";
import WaitlistForm from "./WaitlistForm";
import { Cloud } from "./MagicElements";

export default function FinalCta() {
  return (
    <section
      id="warteliste"
      className="relative section-spacing-sm overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFBF5 0%, #FFF5E6 50%, #FFFBF5 100%)",
      }}
    >
      <WatercolorBlob
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] opacity-25 pointer-events-none"
        color="#FBBF24"
        variant={1}
      />

      {/* Clouds */}
      <Cloud className="absolute top-6 left-[6%] w-[80px] md:w-[110px] opacity-70 animate-float-slow pointer-events-none" />
      <Cloud className="absolute top-12 right-[5%] w-[70px] md:w-[100px] opacity-65 animate-float pointer-events-none" style={{ animationDelay: "2s" }} />


      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            <span className="text-pretty">Der erste Brief entsteht gerade</span>
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>

          <h2 className="headline-serif text-[clamp(2rem,6.5vw,3.5rem)] font-semibold text-slate-800 leading-[1.05] text-balance">
            Sei dabei,
            <br />
            <span className="italic text-blue-600">wenn die Post losgeht.</span>
          </h2>

          <HandDivider className="mt-8 mb-8" />

          <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto text-pretty mb-4 md:mb-5">
            NomiPost gibt es noch nicht — aber der erste Brief entsteht gerade.
            Wer jetzt auf der Warteliste steht, bekommt ihn als Erstes — plus ein
            kleines Willkommensgeschenk.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm variant="hero" />
          </div>

          <p className="handwritten text-lg md:text-xl text-amber-700 mt-8 md:mt-10">
            Nomi freut sich auf dein Kind ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
