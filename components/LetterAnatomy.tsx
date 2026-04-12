"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const items = [
  {
    title: "Eine Abenteuer-Geschichte",
    description:
      "Eine echte Geschichte aus Nomis Reisetagebuch. Mit Spot-Illustrationen am Rand und einem Cliffhanger am Ende – damit dein Kind den nächsten Brief kaum erwarten kann.",
    label: "Seite 1–4",
  },
  {
    title: "Ein Rätsel zum Knobeln",
    description:
      "Geheimschrift, Wortsuche oder Quiz – immer verwoben mit der Geschichte. Für die, die gerne zwischen den Zeilen lesen.",
    label: "Seite 5",
  },
  {
    title: "Ein Ausmalbild",
    description:
      "Ganzseitig, handgezeichnet, zum komplett ausfüllen. Keine Vorgaben, keine richtigen Farben – nur Stifte, Zeit, und ein Nachmittag, der im Flug vergeht.",
    label: "Seite 6",
  },
  {
    title: "\u201EWusstest du schon?\u201C",
    description:
      "Vier, fünf Dinge, die Nomi auf ihrer Reise gelernt hat – und die dein Kind beim Abendessen erzählen wird. Versprochen.",
    label: "Seite 7",
  },
  {
    title: "Eine Bastelanleitung",
    description:
      "Schritt für Schritt, mit Dingen, die sowieso in der Schublade liegen. Kein Bausatz zum Nachkaufen – einfach aufklappen und loslegen.",
    label: "Seite 8",
  },
  {
    title: "Ein Antwortbrief",
    description:
      "Linien zum Schreiben, ein Feld zum Zeichnen, und eine Adresse. Dein Kind antwortet Nomi zurück – und das ist der Anfang einer echten Brieffreundschaft.",
    label: "Seite 9",
  },
];

const extras = [
  {
    text: "Ein Stickerbogen",
    sub: "\u201ESkizzen, die ich unterwegs gemacht habe\u201C",
  },
  {
    text: "Eine Postkarte",
    sub: "zum Selbstbeschriften und an Oma verschicken",
  },
  {
    text: "Eine wechselnde Beilage",
    sub: "Maske, Lesezeichen, Decoder\u2026",
  },
  {
    text: "Ein Hörbuch per QR-Code",
    sub: "Gute-Nacht-Geschichte, von Nomi selbst gelesen",
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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-mattgold" />
            Was im Umschlag steckt
            <span className="w-8 md:w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.05] text-balance">
            Ein ganzes Abenteuer.
            <br />
            <span className="italic">Zum Anfassen.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-tintengrau leading-relaxed max-w-2xl mx-auto text-pretty">
            Jeder Brief ist kein Stapel Papier. Er ist eine kleine Reise, die
            dein Kind aus dem Umschlag holt – zehn Seiten plus Beilagen,
            erzählerisch verwoben in Nomis Welt.
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
              Und obendrauf
            </div>
            <h3 className="headline-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-nomi-violet mb-7 md:mb-10 leading-tight">
              Die physischen Beweise
              <br />
              <span className="italic text-tintengrau text-lg md:text-2xl lg:text-3xl font-normal">
                von Nomis Reise
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
          <p className="handwritten text-xl md:text-2xl lg:text-3xl text-nomi-violet leading-relaxed">
            Beim ersten Brief liegt außerdem ein ganzes Willkommens-Paket
            bei: Sammelmappe, A2-Poster, Namensaufkleber und ein
            Abenteuer-Ausweis – damit dein Kind von Tag eins weiß:
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
