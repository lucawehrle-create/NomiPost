"use client";

import { motion } from "framer-motion";
import CompassRose from "./CompassRose";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const traits = [
  {
    title: "Neugierig",
    text: "Sie beobachtet Details, die andere übersehen: die Form eines Schattens, das Muster einer Baumrinde.",
  },
  {
    title: "Auf Augenhöhe",
    text: "Sie behandelt Kinder nicht wie Babys, sondern wie ihre wichtigste Komplizin und treueste Forschungspartnerin.",
  },
  {
    title: "Mutig, aber verletzlich",
    text: "Sie hat Ängste und Zweifel. Sie zeigt: Mut bedeutet Handeln trotz Angst – nie Handeln ohne Angst.",
  },
];

export default function AboutNomi() {
  return (
    <section id="nomi" className="section-spacing relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-10 right-0 w-[600px] opacity-25 pointer-events-none"
        color="#7A5BA6"
        variant={1}
      />
      <WatercolorBlob
        className="absolute bottom-10 left-0 w-[500px] opacity-20 pointer-events-none"
        color="#C9A84B"
        variant={2}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-mattgold/15 blur-[80px] rounded-full scale-125" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-float-slow">
                <CompassRose className="w-full h-full gold-glow" />
              </div>
              <p className="handwritten text-center mt-6 text-xl lg:text-2xl text-nomi-violet">
                Nomis goldener Kompass ✦
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="eyebrow mb-6">
              <span className="w-10 h-px bg-mattgold" />
              Wer ist Nomi?
            </div>
            <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] mb-8 text-balance">
              Die Entdeckerin,
              <br />
              <span className="italic">die dein Kind in sein Zimmer einlädt.</span>
            </h2>
            <HandDivider className="mb-8 justify-start" />
            <div className="space-y-5 text-lg text-tintengrau leading-relaxed text-pretty max-w-2xl">
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
            </div>

            {/* Traits als Mini-Grid */}
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {traits.map((t) => (
                <div key={t.title} className="border-l-[1.5px] border-mattgold/40 pl-4 py-1">
                  <p className="headline-serif text-lg font-semibold text-nomi-violet mb-1">
                    {t.title}
                  </p>
                  <p className="text-xs text-tintengrau-light leading-relaxed">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 paper-card hand-border paper-card-elevated relative">
              <span className="absolute -top-3 left-8 bg-warmcreme px-3 text-mattgold text-xl">
                &ldquo;
              </span>
              <p className="handwritten text-xl lg:text-2xl text-nomi-violet italic leading-relaxed">
                Psst&hellip; ich verrate dir ein Geheimnis. Unter den Steinen am
                Bach lebt etwas, das noch nie jemand gesehen hat. Wollen wir
                herausfinden, was es ist?
              </p>
              <p className="handwritten text-mattgold-dark text-right mt-3 flex items-center justify-end gap-2">
                <span className="w-6 h-px bg-mattgold-dark" />
                Nomi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
