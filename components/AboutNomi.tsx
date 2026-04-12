"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";
import ImageSlot from "./ImageSlot";

const traits = [
  {
    title: "Neugierig",
    text: "Sie beobachtet Details, die andere übersehen: die Form eines Schattens, das Muster einer Baumrinde, den Geruch von Regen auf heißem Stein.",
  },
  {
    title: "Auf Augenhöhe",
    text: "Sie behandelt Kinder nicht wie Babys, sondern wie ihre wichtigste Komplizin und treueste Forschungspartnerin in der Heimat.",
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
        <div className="grid lg:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 min-w-0 flex justify-center order-first"
          >
            {/* Nomi-Portrait mit goldenem Kompass-Akzent */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
              <div className="absolute inset-0 bg-mattgold/15 blur-[60px] md:blur-[80px] rounded-full scale-110" />

              {/* Bild-Slot im Vordergrund */}
              <div className="relative">
                <ImageSlot
                  src="/images/nomi-portrait.png"
                  alt="Nomi, die Entdeckerin – Maskottchen von NomiPost"
                  aspect="square"
                  framed
                  className="relative z-10 transform rotate-[-1.5deg] hover:rotate-0 transition-transform duration-[800ms] ease-out"
                  placeholderTitle="Nomi-Portrait"
                  placeholderDescription="Nomi-Maskottchen, quadratisch 1:1, mind. 900×900 px, Aquarell-Stil."
                  filename="/images/nomi-portrait.png"
                />
              </div>

              <p className="handwritten text-center mt-5 md:mt-6 text-lg md:text-xl lg:text-2xl text-nomi-violet">
                Das ist Nomi ✦
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 min-w-0"
          >
            <div className="eyebrow mb-5 md:mb-6">
              <span className="w-8 md:w-10 h-px bg-mattgold" />
              Wer ist Nomi?
            </div>
            <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] mb-6 md:mb-8 text-balance">
              Die Entdeckerin,
              <br />
              <span className="italic">die dein Kind in sein Zimmer einlädt.</span>
            </h2>
            <HandDivider className="mb-6 md:mb-8 justify-start" />
            <div className="space-y-4 md:space-y-5 text-base md:text-lg text-tintengrau leading-relaxed text-pretty max-w-2xl">
              <p>
                Nomi ist kein Maskottchen. Sie ist die Absenderin jedes Briefes,
                die Erzählerin jeder Geschichte – und die unsichtbare Freundin,
                die dein Kind Monat für Monat begleitet.
              </p>
              <p>
                Sie reist mit einem alten, goldenen Kompass, dessen Nadel nicht
                nach Norden zeigt, sondern dorthin, wo das nächste Abenteuer
                wartet. Mal zu einem Leuchtturm, mal tief unter die Erde, mal
                in die Werkstatt eines alten Erfinders.
              </p>
              <p>
                Und weil ihre Posttasche direkt mit dem Briefkasten deines
                Kindes verbunden ist, landen ihre Briefe jeden Monat genau
                dort, wo sie hingehören.
              </p>
            </div>

            {/* Traits als Mini-Grid */}
            <div className="mt-8 md:mt-10 grid sm:grid-cols-3 gap-4 md:gap-5">
              {traits.map((t) => (
                <div
                  key={t.title}
                  className="border-l-[1.5px] border-mattgold/40 pl-4 py-1"
                >
                  <p className="headline-serif text-base md:text-lg font-semibold text-nomi-violet mb-1">
                    {t.title}
                  </p>
                  <p className="text-xs text-tintengrau-light leading-relaxed">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 p-6 md:p-8 paper-card hand-border paper-card-elevated relative">
              <span className="absolute -top-3 left-6 md:left-8 bg-warmcreme px-3 text-mattgold text-xl">
                &ldquo;
              </span>
              <p className="handwritten text-lg md:text-xl lg:text-2xl text-nomi-violet italic leading-relaxed">
                Psst&hellip; ich verrate dir ein Geheimnis. Unter den Steinen
                am Bach lebt etwas, das noch nie jemand gesehen hat. Wollen
                wir herausfinden, was es ist?
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
