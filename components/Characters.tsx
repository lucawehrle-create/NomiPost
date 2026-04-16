"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import HandDivider from "./HandDivider";
import WatercolorBlob from "./WatercolorBlob";
import { characters } from "@/lib/characters";

export default function Characters() {
  const [activeId, setActiveId] = useState(characters[0].id);
  const active = characters.find((c) => c.id === activeId)!;

  return (
    <section id="freunde" className="section-spacing relative overflow-hidden">
      <WatercolorBlob
        className="absolute top-20 left-0 w-[500px] opacity-15 pointer-events-none"
        color={active.colorHex}
        variant={2}
      />
      <WatercolorBlob
        className="absolute bottom-20 right-0 w-[500px] opacity-15 pointer-events-none"
        color={active.colorHex}
        variant={3}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 md:mb-6 justify-center">
            <span className="w-8 md:w-10 h-px bg-amber-400" />
            Nomis Welt
            <span className="w-8 md:w-10 h-px bg-amber-400" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-slate-800 leading-[1.05] text-balance">
            Fünf Freunde,
            <br />
            <span className="italic text-blue-600">fünf Persönlichkeiten.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto text-pretty">
            Auf der Reise begegnet Nomi Freunden, die bleiben — jeder mit einer
            eigenen Farbe, einer eigenen Art. Jedes Kind findet sich in einem von
            ihnen wieder.
          </p>
          <HandDivider className="mt-8 md:mt-10" />
        </div>

        {/* Character buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-14">
          {characters.map((c) => {
            const isActive = activeId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                aria-label={`${c.name} anzeigen`}
                aria-pressed={isActive}
                className="group flex flex-col items-center gap-2 md:gap-3 focus:outline-none"
              >
                <div
                  className="relative rounded-full overflow-hidden transition-all duration-500"
                  style={{
                    width: "clamp(56px, 10vw, 96px)",
                    height: "clamp(56px, 10vw, 96px)",
                    backgroundColor: c.colorHex,
                    boxShadow: isActive
                      ? `0 0 0 4px rgba(255,255,255,1), 0 0 0 7px ${c.colorHex}60, 0 14px 30px -6px ${c.colorHex}50`
                      : `0 6px 16px -4px ${c.colorHex}30`,
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/characters/${c.id}-head.png`}
                    alt=""
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Fallback: Anfangsbuchstabe */}
                  <span className="absolute inset-0 flex items-center justify-center text-white/40 headline-serif text-2xl md:text-3xl lg:text-4xl font-bold select-none pointer-events-none">
                    {c.name[0]}
                  </span>
                </div>
                <span
                  className="text-xs md:text-sm font-semibold transition-all duration-300"
                  style={{
                    color: isActive ? c.colorHex : "#94A3B8",
                  }}
                >
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active character panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div
              className="paper-card paper-card-elevated overflow-hidden"
              style={{
                borderTop: `3px solid ${active.colorHex}`,
              }}
            >
              <div className="grid lg:grid-cols-12">
                {/* Left: body image */}
                <div className="lg:col-span-4 min-w-0 relative">
                  <div
                    className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[340px] overflow-hidden flex items-end justify-center"
                    style={{
                      background: `linear-gradient(180deg, ${active.colorHex}10 0%, ${active.colorHex}06 100%)`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/characters/${active.id}-body.png`}
                      alt={active.name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="relative z-10 w-auto h-[85%] max-w-[80%] object-contain object-bottom"
                      draggable={false}
                    />
                    {/* Placeholder wenn kein Bild */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span
                        className="headline-serif font-bold select-none opacity-[0.07]"
                        style={{
                          fontSize: "clamp(120px, 20vw, 200px)",
                          color: active.colorHex,
                        }}
                      >
                        {active.name[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: character details */}
                <div className="lg:col-span-8 min-w-0 p-6 sm:p-8 md:p-10 lg:p-12">
                  {/* Name + Color Label */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3
                      className="headline-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-none"
                      style={{ color: active.colorHex }}
                    >
                      {active.name}
                    </h3>
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      {active.colorLabel}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="handwritten text-lg sm:text-xl md:text-2xl text-slate-600 italic mt-3 mb-6 md:mb-8">
                    „{active.quote}"
                  </p>

                  {/* Archetyp */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 mb-1.5">
                      Archetyp
                    </p>
                    <p className="headline-serif text-base md:text-lg font-semibold text-slate-800 mb-2 leading-tight">
                      {active.archetype}
                    </p>
                    <p className="text-sm md:text-[0.9rem] text-slate-600 leading-relaxed text-pretty">
                      {active.archetypeText}
                    </p>
                  </div>

                  {/* Funktion */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 mb-1.5">
                      Für dein Kind
                    </p>
                    <p className="text-sm md:text-[0.9rem] text-slate-600 leading-relaxed text-pretty">
                      {active.funktion}
                    </p>
                  </div>

                  {/* Signatur-Elemente */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 mb-2">
                      Signatur-Elemente
                    </p>
                    <ul className="space-y-1.5">
                      {active.signaturElemente.map((e) => (
                        <li
                          key={e}
                          className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                          <span
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: active.colorHex }}
                          >
                            ✦
                          </span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Persönlichkeit — Chips */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 mb-2.5">
                      Persönlichkeit
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {active.traits.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: `${active.colorHex}12`,
                            color: active.colorHex,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Schwäche */}
                  <div
                    className="p-4 md:p-5 rounded-2xl"
                    style={{
                      backgroundColor: `${active.colorHex}08`,
                    }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 mb-1.5">
                      Macht menschlich
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                      {active.schwaeche}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
