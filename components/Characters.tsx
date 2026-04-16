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

        {/* ─── Character selector ─── */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {characters.map((c) => {
            const isActive = activeId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                aria-label={`${c.name} anzeigen`}
                aria-pressed={isActive}
                className="group flex flex-col items-center gap-2.5 md:gap-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
                style={
                  { "--char-color": c.colorHex } as React.CSSProperties
                }
              >
                <div className="relative">
                  {/* Glow hinter dem aktiven Kreis */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundColor: c.colorHex,
                      opacity: isActive ? 0.3 : 0,
                      transform: "scale(1.4)",
                    }}
                  />
                  <div
                    className="relative rounded-full overflow-hidden transition-all duration-500"
                    style={{
                      width: "clamp(52px, 11vw, 96px)",
                      height: "clamp(52px, 11vw, 96px)",
                      backgroundColor: c.colorHex,
                      boxShadow: isActive
                        ? `0 0 0 3px #fff, 0 0 0 6px ${c.colorHex}50, 0 16px 32px -8px ${c.colorHex}40`
                        : `inset 0 -6px 16px -4px rgba(0,0,0,0.12), 0 6px 16px -6px ${c.colorHex}25`,
                      transform: isActive ? "scale(1.12)" : "scale(1)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/${c.id}-head.png`}
                      alt=""
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white/30 headline-serif text-2xl md:text-3xl lg:text-4xl font-bold select-none pointer-events-none">
                      {c.name[0]}
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs md:text-sm font-semibold transition-all duration-300"
                  style={{ color: isActive ? c.colorHex : "#94A3B8" }}
                >
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ─── Character detail panel ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[68rem] mx-auto"
          >
            <div className="paper-card paper-card-elevated overflow-hidden">
              <div className="grid lg:grid-cols-12">
                {/* ── Left: Character stage ── */}
                <div className="lg:col-span-5 min-w-0 relative">
                  <div
                    className="relative h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[600px] overflow-hidden flex flex-col items-center justify-end"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 55% at 50% 45%, ${active.colorHex}20 0%, transparent 70%),
                        linear-gradient(180deg, ${active.colorHex}08 0%, ${active.colorHex}04 100%)
                      `,
                    }}
                  >
                    {/* Großer, weicher Glow */}
                    <div
                      className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                      style={{
                        width: "min(320px, 70%)",
                        height: "min(320px, 70%)",
                        background: `radial-gradient(circle, ${active.colorHex}28 0%, transparent 70%)`,
                        filter: "blur(40px)",
                      }}
                    />

                    {/* Dezentes Muster */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                      <div
                        className="absolute top-[12%] left-[18%] text-xl"
                        style={{ color: active.colorHex }}
                      >
                        ✦
                      </div>
                      <div
                        className="absolute top-[25%] right-[22%] text-sm"
                        style={{ color: active.colorHex }}
                      >
                        ✦
                      </div>
                      <div
                        className="absolute bottom-[30%] left-[28%] text-base"
                        style={{ color: active.colorHex }}
                      >
                        ✦
                      </div>
                    </div>

                    {/* Body-Bild */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/${active.id}-body.png`}
                      alt={active.name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="relative z-10 w-auto max-w-[75%] sm:max-w-[65%] lg:max-w-[80%] object-contain object-bottom"
                      style={{ height: "78%", maxHeight: "480px" }}
                      draggable={false}
                    />

                    {/* Placeholder-Initial */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span
                        className="headline-serif font-bold select-none opacity-[0.05]"
                        style={{
                          fontSize: "clamp(140px, 24vw, 240px)",
                          color: active.colorHex,
                        }}
                      >
                        {active.name[0]}
                      </span>
                    </div>

                    {/* Name + Farbe – unten zentriert */}
                    <div className="relative z-20 text-center pb-8 sm:pb-10 lg:pb-12 pt-4">
                      <h3
                        className="headline-serif text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-none"
                        style={{ color: active.colorHex }}
                      >
                        {active.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* ── Right: Character details ── */}
                <div className="lg:col-span-7 min-w-0 flex flex-col">
                  <div className="p-7 sm:p-9 md:p-10 lg:px-14 lg:py-12 flex flex-col flex-1">
                    {/* Zitat — emotional hook */}
                    <div className="mb-8 md:mb-10">
                      <div className="flex items-start gap-3 md:gap-4">
                        <span
                          className="flex-shrink-0 headline-serif text-4xl md:text-5xl leading-[0.8] select-none mt-1"
                          style={{ color: `${active.colorHex}40` }}
                        >
                          &bdquo;
                        </span>
                        <p
                          className="handwritten text-xl sm:text-2xl md:text-[1.65rem] leading-[1.4]"
                          style={{ color: active.colorHex }}
                        >
                          {active.quote}
                        </p>
                      </div>
                    </div>

                    {/* Trennlinie im Charakter-Farbton */}
                    <div
                      className="h-px w-full mb-8 md:mb-10"
                      style={{
                        background: `linear-gradient(90deg, ${active.colorHex}30, ${active.colorHex}08 80%, transparent)`,
                      }}
                    />

                    {/* Archetyp */}
                    <div className="mb-7 md:mb-8">
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full mb-3"
                        style={{
                          backgroundColor: `${active.colorHex}10`,
                          color: active.colorHex,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: active.colorHex }}
                        />
                        Archetyp
                      </span>
                      <p className="headline-serif text-lg md:text-xl font-semibold text-slate-800 mb-2.5 leading-tight">
                        {active.archetype}
                      </p>
                      <p className="text-[0.9rem] md:text-base text-slate-600 leading-[1.7] text-pretty">
                        {active.archetypeText}
                      </p>
                    </div>

                    {/* Für dein Kind */}
                    <div className="mb-7 md:mb-8">
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full mb-3 bg-amber-50 text-amber-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Für dein Kind
                      </span>
                      <p className="text-[0.9rem] md:text-base text-slate-600 leading-[1.7] text-pretty">
                        {active.funktion}
                      </p>
                    </div>

                    {/* Persönlichkeit */}
                    <div className="mt-auto">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-3">
                        Persönlichkeit
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {active.traits.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-semibold px-3.5 py-[6px] rounded-full"
                            style={{
                              backgroundColor: `${active.colorHex}10`,
                              color: active.colorHex,
                              boxShadow: `0 2px 8px -3px ${active.colorHex}25`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
