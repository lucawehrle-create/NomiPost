"use client";

import { motion } from "framer-motion";
import CompassRose from "./CompassRose";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

export default function AboutNomi() {
  return (
    <section id="nomi" className="py-20 md:py-28 relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-10 right-0 w-[500px] opacity-30 pointer-events-none"
        color="#7A5BA6"
        variant={1}
      />

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-mattgold/20 blur-3xl rounded-full" />
              <div className="relative w-64 h-64 animate-float-slow">
                <CompassRose className="w-full h-full drop-shadow-2xl" />
              </div>
              <p className="handwritten text-center mt-4 text-xl text-nomi-violet">
                Nomis goldener Kompass ✦
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="eyebrow mb-4">
              <span className="w-8 h-px bg-mattgold" />
              Wer ist Nomi?
            </div>
            <h2 className="headline-serif text-4xl md:text-5xl font-semibold text-nomi-violet leading-tight mb-6 text-balance">
              Die Entdeckerin, die dein Kind in sein Zimmer einlädt.
            </h2>
            <HandDivider className="mb-6 justify-start md:justify-start" />
            <div className="space-y-4 text-tintengrau leading-relaxed">
              <p>
                Nomi ist kein Maskottchen. Sie ist die Absenderin jedes Briefes,
                die Erzählerin jeder Geschichte – und die unsichtbare Freundin,
                die dein Kind Monat für Monat begleitet.
              </p>
              <p>
                Sie reist mit einem alten, goldenen Kompass, dessen Nadel nicht
                nach Norden zeigt, sondern dorthin, wo das nächste Abenteuer
                wartet. Mal zu einem Leuchtturm, mal tief unter die Erde, mal in
                die Werkstatt eines alten Erfinders.
              </p>
              <p>
                Und sie spricht mit deinem Kind nicht von oben herab, sondern auf
                Augenhöhe. Wie ihre wichtigste Komplizin. Wie ihr treuester
                Forschungspartner.
              </p>
            </div>

            <div className="mt-8 p-6 paper-card hand-border">
              <p className="handwritten text-xl md:text-2xl text-nomi-violet italic leading-relaxed">
                &bdquo;Psst... ich verrate dir ein Geheimnis. Unter den Steinen am
                Bach lebt etwas, das noch nie jemand gesehen hat. Wollen wir
                herausfinden, was es ist?&ldquo;
              </p>
              <p className="handwritten text-mattgold-dark text-right mt-2">
                — Nomi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
