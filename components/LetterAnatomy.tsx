"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const items = [
  {
    title: "Eine Abenteuer-Geschichte",
    description:
      "Eine Geschichte aus Nomis Reisetagebuch, mit Illustrationen und einem Cliffhanger am Ende – damit dein Kind den nächsten Brief kaum erwarten kann.",
    label: "Idee 1",
  },
  {
    title: "Ein Rätsel zum Knobeln",
    description:
      "Geheimschrift, Wortsuche oder Quiz – passend zur Geschichte. Für die, die gerne zwischen den Zeilen lesen.",
    label: "Idee 2",
  },
  {
    title: "Ein Ausmalbild",
    description:
      "Ganzseitig, zum komplett ausfüllen. Keine Vorgaben, keine richtigen Farben – nur Stifte, Zeit, und ein Nachmittag, der vergeht wie im Flug.",
    label: "Idee 3",
  },
  {
    title: "\u201EWusstest du schon?\u201C",
    description:
      "Spannende Fakten, die Nomi auf ihrer Reise entdeckt hat – und die dein Kind beim Abendessen erzählen wird.",
    label: "Idee 4",
  },
  {
    title: "Etwas zum Mitmachen",
    description:
      "Basteln, Experimentieren oder Entdecken – mit Dingen, die sowieso in der Schublade liegen. Ohne Zusatzkauf.",
    label: "Idee 5",
  },
  {
    title: "Ein Antwortbrief",
    description:
      "Dein Kind schreibt Nomi zurück. Vielleicht der Anfang einer echten Brieffreundschaft.",
    label: "Idee 6",
  },
];

const extras = [
  {
    text: "Kleine Beilagen",
    sub: "Sticker, Postkarten oder andere \u00DCberraschungen \u2013 noch in Planung",
  },
  {
    text: "Etwas zum Sammeln",
    sub: "Damit jeder Brief seinen festen Platz bekommt",
  },
  {
    text: "Ein Hörerlebnis",
    sub: "Die Geschichte auch zum Anhören \u2013 z.\u202FB. als QR-Code",
  },
  {
    text: "Und was ihr euch wünscht",
    sub: "Das finale Paket gestalten wir auch nach eurem Feedback",
  },
];

export default function LetterAnatomy() {
  return (
    <section id="was" className="section-spacing relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-20 left-0 w-[400px] md:w-[600px] opacity-30 pointer-events-none"
        color="#7A5BA6"
        variant={3}
      />
      <WatercolorBlob
        className="absolute bottom-40 right-0 w-[400px] md:w-[500px] opacity-25 pointer-events-none"
        color="#C9A84B"
        variant={1}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-mattgold" />
            Was im Umschlag steckt
            <span className="w-8 md:w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            So stellen wir uns
            <br />
            <span className="italic">jeden Brief vor.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-tintengrau leading-relaxed max-w-2xl mx-auto text-pretty">
            NomiPost ist noch in der Entwicklung – aber so sieht unsere
            Vision aus. Was am Ende wirklich im Umschlag steckt, hängt
            auch von eurem Feedback ab.
          </p>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        {/* 6 Content-Karten im Raster */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="paper-card p-6 md:p-8 lg:p-10 hand-border group hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4 md:mb-5">
                <span className="handwritten text-xl md:text-2xl text-mattgold-dark">
                  {item.label}
                </span>
                <span className="text-mattgold text-lg group-hover:rotate-[90deg] transition-transform duration-700">
                  ✦
                </span>
              </div>
              <h3 className="headline-serif text-lg md:text-xl lg:text-2xl font-semibold text-nomi-violet mb-2 md:mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[0.9rem] md:text-[0.95rem] text-tintengrau leading-relaxed text-pretty">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beilagen-Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-20 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="paper-card hand-border paper-card-elevated p-7 md:p-14 lg:p-16 relative">
            <div className="absolute -top-3.5 left-6 md:left-12 bg-mattgold text-warmcreme px-4 md:px-5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-semibold rounded-sm shadow-md">
              Unsere Ideen
            </div>
            <h3 className="headline-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-nomi-violet mb-7 md:mb-10 leading-tight">
              Was wir uns außerdem
              <br />
              <span className="italic text-tintengrau text-lg md:text-2xl lg:text-3xl font-normal">
                vorstellen können
              </span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              {extras.map((e) => (
                <li
                  key={e.text}
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-mattgold flex items-center justify-center text-mattgold group-hover:bg-mattgold group-hover:text-warmcreme transition-all duration-500">
                    ✦
                  </span>
                  <div>
                    <p className="text-nomi-violet font-semibold leading-tight">
                      {e.text}
                    </p>
                    <p className="text-sm text-tintengrau-light mt-1">{e.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Willkommens-Paket Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto text-center px-2"
        >
          <p className="handwritten text-xl md:text-2xl text-nomi-violet leading-relaxed">
            Unsere Idee: Beim allerersten Brief soll es eine besondere
            Überraschung geben – damit dein Kind von Tag eins weiß:
            <br />
            <span className="text-mattgold-dark">
              Das hier ist etwas Besonderes.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
