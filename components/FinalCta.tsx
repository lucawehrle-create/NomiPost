"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";
import WaitlistForm from "./WaitlistForm";
import { Cloud, Flower, Butterfly } from "./MagicElements";

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

      {/* Milo peeking bottom-left */}
      <div className="absolute bottom-0 -left-6 md:left-4 lg:left-10 w-16 md:w-24 lg:w-32 pointer-events-none z-0 hidden md:block animate-float-slow" style={{ animationDelay: "1s" }}>
        <Image
          src="/images/milo-body.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-[0_12px_24px_rgba(124,58,237,0.2)]"
        />
      </div>

      {/* Butterfly */}
      <Butterfly color="#DC2626" className="absolute top-[30%] right-[12%] w-6 md:w-8 opacity-80 animate-float pointer-events-none hidden md:block" style={{ animationDelay: "2.5s" }} />

      {/* Flowers scattered */}
      <Flower color="#FBBF24" className="absolute bottom-8 right-[15%] w-5 md:w-7 opacity-70 pointer-events-none" />
      <Flower color="#DC2626" className="absolute top-1/2 left-[3%] w-4 md:w-5 opacity-50 pointer-events-none hidden lg:block" />
      <Flower color="#7C3AED" className="absolute bottom-14 left-[40%] w-3 md:w-4 opacity-40 pointer-events-none" />

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

          <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto text-pretty mb-8 md:mb-10">
            Vorname und E-Mail — mehr braucht es nicht. Wir melden uns,
            sobald der erste Brief auf die Reise geht.
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
