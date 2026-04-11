"use client";

import { motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const items = [
  {
    title: "Eine Abenteuer-Geschichte",
    description:
      "Kein Sachtext, keine Belehrung – eine echte Geschichte aus Nomis Reisetagebuch, liebevoll illustriert.",
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
      "Eine ganzseitige Lineart-Illustration zum Thema. Stifte raus – Bildschirm aus.",
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
  { emoji: "✦", text: "Sticker-Bogen \u2013 \u201ESkizzen, die Nomi unterwegs gemacht hat\u201C" },
  { emoji: "✦", text: "Postkarte zum Selbstbeschriften und Verschicken" },
  { emoji: "✦", text: "Wechselnde Sonderbeilage: Masken, Lesezeichen, Decoder…" },
  { emoji: "✦", text: "Hörbuch per QR-Code – Geschichte zum Einschlafen" },
];

export default function LetterAnatomy() {
  return (
    <section id="was" className="py-20 md:py-28 relative">
      <WatercolorBlob
        className="absolute top-20 -left-20 w-[400px] opacity-40 pointer-events-none"
        color="#7A5BA6"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="w-8 h-px bg-mattgold" />
            Was im Umschlag steckt
            <span className="w-8 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-4xl md:text-5xl font-semibold text-nomi-violet leading-tight text-balance">
            Ein ganzes Abenteuer. Zum Anfassen.
          </h2>
          <p className="mt-6 text-lg text-tintengrau leading-relaxed">
            Jeder Brief ist kein Stapel Papier – er ist ein Kunstwerk in Briefform.
            Zehn Seiten plus physische Beigaben, sorgfältig gestaltet und
            erzählerisch verankert in Nomis Welt.
          </p>
          <HandDivider className="mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="paper-card p-7 hand-border group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="handwritten text-2xl text-mattgold-dark">
                  {item.label}
                </span>
                <span className="text-mattgold group-hover:rotate-45 transition-transform duration-500">
                  ✦
                </span>
              </div>
              <h3 className="headline-serif text-xl font-semibold text-nomi-violet mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-tintengrau leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beilagen-Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="paper-card hand-border p-8 md:p-12 relative">
            <div className="absolute -top-4 left-10 bg-mattgold text-warmcreme px-4 py-1 text-xs uppercase tracking-widest font-semibold rounded-sm">
              Und obendrauf
            </div>
            <h3 className="headline-serif text-2xl md:text-3xl font-semibold text-nomi-violet mb-6">
              Die physischen Beweise von Nomis Reise
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {extras.map((e) => (
                <li
                  key={e.text}
                  className="flex items-start gap-3 text-tintengrau"
                >
                  <span className="text-mattgold text-lg leading-tight mt-0.5">
                    {e.emoji}
                  </span>
                  <span className="leading-snug">{e.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Willkommens-Paket Callout */}
        <div className="mt-10 max-w-4xl mx-auto text-center">
          <p className="handwritten text-2xl text-nomi-violet">
            Beim ersten Brief gibt es außerdem eine Sammelmappe, ein A2-Poster
            und einen Abenteuer-Ausweis – damit dein Kind von Tag eins weiß:{" "}
            <br />
            <span className="text-mattgold-dark">
              Das hier ist etwas Besonderes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
