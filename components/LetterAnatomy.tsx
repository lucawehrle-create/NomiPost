"use client";

import { motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const items = [
  {
    title: "Eine Abenteuer-Geschichte",
    description:
      "Kein Sachtext, keine Belehrung – eine echte Geschichte aus Nomis Reisetagebuch, liebevoll illustriert und pädagogisch fundiert.",
    label: "Seite 1–4",
  },
  {
    title: "Ein Rätsel zum Knobeln",
    description:
      "Wortsuche, Geheimschrift oder Quiz – passend zur Geschichte. Für kleine Detektive mit wachem Blick.",
    label: "Seite 5",
  },
  {
    title: "Ein Ausmalbild",
    description:
      "Eine ganzseitige Lineart-Illustration zum Thema. Stifte raus – Bildschirm aus. Kunst, die aus dem Kind kommt.",
    label: "Seite 6",
  },
  {
    title: "\u201EWusstest du schon?\u201C",
    description:
      "Vier bis fünf Fun Facts, die neugierig machen – verpackt in kleine Illustrationen, nie in trockene Listen.",
    label: "Seite 7",
  },
  {
    title: "Eine Bastelanleitung",
    description:
      "Schritt für Schritt mit Dingen, die fast jede Familie zu Hause hat. Keine Spezial-Sets, kein Zusatzkauf.",
    label: "Seite 8",
  },
  {
    title: "Antwortbrief-Vorlage",
    description:
      "Dein Kind schreibt Nomi zurück – mit Linien zum Schreiben und einem Feld zum Zeichnen. Wirklicher Austausch.",
    label: "Seite 9",
  },
];

const extras = [
  {
    text: "Sticker-Bogen",
    sub: "\u201ESkizzen, die Nomi unterwegs gemacht hat\u201C",
  },
  {
    text: "Postkarte",
    sub: "zum Selbstbeschriften und Verschicken",
  },
  {
    text: "Wechselnde Sonderbeilage",
    sub: "Masken, Lesezeichen, Decoder…",
  },
  {
    text: "Hörbuch per QR-Code",
    sub: "Geschichte zum Einschlafen",
  },
];

export default function LetterAnatomy() {
  return (
    <section id="was" className="section-spacing relative">
      <WatercolorBlob
        className="absolute top-20 -left-40 w-[600px] opacity-30 pointer-events-none"
        color="#7A5BA6"
        variant={3}
      />
      <WatercolorBlob
        className="absolute bottom-40 -right-40 w-[500px] opacity-25 pointer-events-none"
        color="#C9A84B"
        variant={1}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="eyebrow mb-6 justify-center">
            <span className="w-10 h-px bg-mattgold" />
            Was im Umschlag steckt
            <span className="w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            Ein ganzes Abenteuer.
            <br />
            <span className="italic">Zum Anfassen.</span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-tintengrau leading-relaxed max-w-2xl mx-auto text-pretty">
            Jeder Brief ist kein Stapel Papier – er ist ein Kunstwerk in Briefform.
            Zehn Seiten plus physische Beigaben, sorgfältig gestaltet und
            erzählerisch verankert in Nomis Welt.
          </p>
          <HandDivider className="mt-10" />
        </div>

        {/* 6 Content-Karten im Raster */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="paper-card p-8 lg:p-10 hand-border group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="handwritten text-2xl text-mattgold-dark">
                  {item.label}
                </span>
                <span className="text-mattgold text-lg group-hover:rotate-[90deg] transition-transform duration-700">
                  ✦
                </span>
              </div>
              <h3 className="headline-serif text-xl lg:text-2xl font-semibold text-nomi-violet mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[0.95rem] text-tintengrau leading-relaxed text-pretty">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beilagen-Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="paper-card hand-border paper-card-elevated p-10 md:p-14 lg:p-16 relative">
            <div className="absolute -top-4 left-12 bg-mattgold text-warmcreme px-5 py-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold rounded-sm shadow-md">
              Und obendrauf
            </div>
            <h3 className="headline-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-nomi-violet mb-10 leading-tight">
              Die physischen Beweise
              <br />
              <span className="italic text-tintengrau text-xl md:text-2xl lg:text-3xl font-normal">
                von Nomis Reise
              </span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-6 lg:gap-8">
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
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <p className="handwritten text-2xl lg:text-3xl text-nomi-violet leading-relaxed">
            Beim ersten Brief gibt es außerdem eine Sammelmappe, ein A2-Poster
            und einen Abenteuer-Ausweis – damit dein Kind von Tag eins weiß:
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
