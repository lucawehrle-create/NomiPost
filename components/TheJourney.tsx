"use client";

import { m as motion } from "framer-motion";
import { Mail, Layers, MapPin } from "lucide-react";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";

const stats = [
  {
    number: "12",
    label: "pers\u00F6nliche Briefe",
    sub: "Eine Geschichte, die Monat f\u00FCr Monat w\u00E4chst.",
    icon: Mail,
    color: "#3B82F6",
  },
  {
    number: "24",
    label: "Sammelkarten",
    sub: "Zwei in jedem Umschlag. Eine kleine Galerie im Kinderzimmer.",
    icon: Layers,
    color: "#7C3AED",
  },
  {
    number: "12",
    label: "Entdecker-Sticker",
    sub: "F\u00FCr die gro\u00DFe Karte, die im ersten Brief mitkommt.",
    icon: MapPin,
    color: "#059669",
  },
];


export default function TheJourney() {
  return (
    <section
      id="reise"
      className="section-spacing relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF9EE 0%, #FFFBF5 40%, #FFF9EE 100%)" }}
    >
      <WatercolorBlob
        className="absolute top-20 right-0 w-[500px] opacity-20 pointer-events-none"
        color="#3B82F6"
        variant={2}
      />
      <WatercolorBlob
        className="absolute bottom-10 left-0 w-[500px] opacity-20 pointer-events-none"
        color="#FBBF24"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Die Sammlung
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Was über zwölf Monate
            <br />
            <span className="italic text-blue-600">zusammenkommt.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto text-pretty">
            Jeder Brief steht für sich – und fügt sich Stück für Stück in etwas
            Größeres ein. Ein Jahr, in dem ein kleines Universum entsteht.
          </p>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        {/* Stat-Karten: 12 Briefe, 24 Sammelkarten, 12 Sticker */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="paper-card hand-border p-7 md:p-9 lg:p-10 text-center sm:last:col-span-2 lg:last:col-span-1 group hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-5">
                <div className="absolute inset-0 rounded-full blur-xl" style={{ backgroundColor: `${stat.color}15` }} />
                <div className="relative w-full h-full flex items-center justify-center">
                  <stat.icon
                    className="w-6 h-6 md:w-7 md:h-7"
                    style={{ color: stat.color }}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="headline-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-none mb-3" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <p className="headline-serif text-base md:text-lg lg:text-xl font-semibold text-slate-800 mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed text-pretty max-w-xs mx-auto">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Entdecker-Karte: Hero-Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14 md:mt-20 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="paper-card hand-border paper-card-elevated p-7 md:p-12 lg:p-16 relative">
            <div className="absolute -top-3.5 left-6 md:left-12 bg-amber-400 text-slate-900 px-4 md:px-5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-semibold rounded-full shadow-md">
              Zum Start
            </div>

            <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 min-w-0">
                <h3 className="headline-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-5 md:mb-6 leading-tight">
                  Eine Karte, die
                  <br />
                  <span className="italic text-blue-600">mit der Zeit wächst.</span>
                </h3>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed text-pretty mb-4">
                  Im ersten Brief liegt eine große{" "}
                  <span className="font-semibold text-slate-800">Entdecker-Karte</span>{" "}
                  – zwölf Felder, noch alle leer.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed text-pretty">
                  Mit jedem Monat kommt ein Sticker dazu. Nach einem Jahr hängt
                  eine Welt an der Wand – und dein Kind weiß zu jedem Feld eine
                  eigene Geschichte.
                </p>
              </div>

              {/* Visuelle Mini-Karte: 12 Felder im 4x3 Raster */}
              <div className="lg:col-span-5 min-w-0">
                <div
                  className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 via-amber-50/50 to-emerald-50/60 p-5 md:p-6 overflow-hidden"
                  style={{
                    borderRadius: "24px",
                    boxShadow:
                      "inset 0 2px 6px rgba(251, 191, 36, 0.08), 0 10px 30px -10px rgba(30, 41, 59, 0.08)",
                  }}
                >
                  {/* Dezente Sterne im Hintergrund */}
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    <div className="absolute top-[15%] left-[20%] text-amber-700 text-xs">✦</div>
                    <div className="absolute top-[60%] left-[75%] text-amber-700 text-[10px]">✦</div>
                    <div className="absolute top-[85%] left-[30%] text-amber-700 text-[10px]">✦</div>
                  </div>

                  {/* 4x3 Felder-Raster */}
                  <div className="relative grid grid-cols-4 grid-rows-3 gap-2 md:gap-2.5 h-full">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-xl flex items-center justify-center text-[9px] md:text-[10px] font-semibold transition-colors"
                        style={
                          i < 2
                            ? {
                                background: "#FBBF24",
                                color: "#FFFFFF",
                                boxShadow:
                                  "0 6px 12px -3px rgba(251, 191, 36, 0.45), 0 2px 4px -1px rgba(251, 191, 36, 0.3)",
                              }
                            : {
                                background: "rgba(255, 255, 255, 0.6)",
                                color: "#94A3B8",
                                boxShadow:
                                  "inset 0 0 0 1px rgba(203, 213, 225, 0.5)",
                              }
                        }
                      >
                        {i < 2 ? "✦" : i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="handwritten text-center text-sm text-slate-500 mt-3">
                  Monat für Monat füllt sich die Karte
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Finale-Hinweis: poetisch und offen */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 md:mt-20 max-w-3xl mx-auto text-center px-2"
        >
          <div className="inline-flex items-center gap-3 text-amber-700 mb-5">
            <span className="w-10 h-px bg-amber-400" />
            <span className="text-xl">✦</span>
            <span className="w-10 h-px bg-amber-400" />
          </div>
          <p className="handwritten text-xl md:text-2xl lg:text-[1.625rem] text-slate-800 leading-relaxed text-balance">
            Am Ende der zwölf Briefe wartet ein Moment,
            <br className="hidden sm:inline" />
            {" "}der nur <span className="text-amber-700">deinem Kind</span> gehört.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
