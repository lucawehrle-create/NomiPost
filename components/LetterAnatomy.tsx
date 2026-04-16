"use client";

import { m as motion } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const items = [
  {
    title: "Eine Abenteuer-Geschichte",
    description:
      "Nomi erzählt von einem neuen Ort, einer Begegnung, einem Rätsel – mit Illustrationen und einem Cliffhanger am Ende. Dein Kind kann den nächsten Brief kaum erwarten.",
    label: "01",
    color: "#3B82F6",
  },
  {
    title: "Ein Rätsel zum Knobeln",
    description:
      "Geheimschrift, Wortsuche oder Quiz – passend zur Geschichte. Für die, die gerne zwischen den Zeilen lesen.",
    label: "02",
    color: "#059669",
  },
  {
    title: "Ein Ausmalbild",
    description:
      "Eine ganzseitige Illustration zum Ausmalen. Ein ruhiger Nachmittag mit Stiften statt Bildschirm.",
    label: "03",
    color: "#7C3AED",
  },
  {
    title: "\u201EWusstest du schon?\u201C",
    description:
      "Spannende Fakten, die Nomi auf ihrer Reise entdeckt hat – und die dein Kind beim Abendessen erzählen wird.",
    label: "04",
    color: "#D97706",
  },
  {
    title: "Etwas zum Mitmachen",
    description:
      "Basteln, Experimentieren oder Entdecken – mit Dingen, die sowieso in der Schublade liegen. Ohne Zusatzkauf.",
    label: "05",
    color: "#DC2626",
  },
  {
    title: "Ein Antwortbrief",
    description:
      "Dein Kind schreibt Nomi zurück. Vielleicht der Anfang einer echten Brieffreundschaft.",
    label: "06",
    color: "#3B82F6",
  },
];

const extras = [
  {
    text: "Kleine Beilagen",
    sub: "Sticker, Postkarten oder andere \u00DCberraschungen",
  },
  {
    text: "Etwas zum Sammeln",
    sub: "Damit jeder Brief seinen festen Platz bekommt",
  },
  {
    text: "Ein Hörerlebnis",
    sub: "Die Geschichte auch zum Anh\u00F6ren \u2013 z.\u202FB. als QR-Code",
  },
  {
    text: "Und was dein Kind liebt",
    sub: "Die Briefe greifen die Interessen deines Kindes auf",
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
        color="#FBBF24"
        variant={1}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Was im Umschlag steckt
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Was in jedem Brief
            <br />
            <span className="italic text-blue-600">auf dein Kind wartet.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto text-pretty">
            Kein Stapel Papier, sondern eine kleine Reise aus dem Umschlag –
            mehrere Seiten plus Beilagen, erzählerisch verwoben in Nomis Welt.
          </p>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        {/* 6 Content-Karten im Raster */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="paper-card p-6 md:p-8 lg:p-10 hand-border group hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              {/* Colored top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex items-start justify-between mb-4 md:mb-5">
                <span
                  className="text-xs font-bold tracking-[0.2em] px-2.5 py-1 rounded-full"
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}14`,
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-lg group-hover:rotate-[90deg] transition-transform duration-700"
                  style={{ color: item.color }}
                >
                  ✦
                </span>
              </div>
              <h3 className="headline-serif text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 mb-2 md:mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[0.9rem] md:text-[0.95rem] text-slate-700 leading-relaxed text-pretty">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beilagen-Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14 md:mt-20 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="paper-card hand-border paper-card-elevated p-7 md:p-14 lg:p-16 relative">
            <div className="absolute -top-3.5 left-6 md:left-12 bg-blue-500 text-white px-4 md:px-5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-semibold rounded-full shadow-md">
              Und obendrauf
            </div>
            <h3 className="headline-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-7 md:mb-10 leading-tight">
              Nomis persönliche
              <br />
              <span className="italic text-slate-700 text-lg md:text-2xl lg:text-3xl font-normal">
                Grüße an dein Kind
              </span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              {extras.map((e) => (
                <li
                  key={e.text}
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all duration-500">
                    ✦
                  </span>
                  <div>
                    <p className="text-slate-800 font-semibold leading-tight">
                      {e.text}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{e.sub}</p>
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
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto text-center px-2"
        >
          <p className="handwritten text-xl md:text-2xl text-slate-800 leading-relaxed">
            Und beim allerersten Brief wartet eine besondere Überraschung –
            damit dein Kind von Tag eins weiß:
            <br />
            <span className="text-amber-700">
              Das hier ist etwas Besonderes.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
