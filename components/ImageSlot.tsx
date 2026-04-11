"use client";

import { useState } from "react";

type AspectRatio = "square" | "portrait" | "landscape" | "wide" | "banner";

const aspectClasses: Record<AspectRatio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  banner: "aspect-[21/9]",
};

type Props = {
  /**
   * Der src des Bildes (z. B. "/images/nomi-portrait.jpg").
   * Wenn leer oder wenn das Bild fehlschlägt, wird ein eleganter
   * Platzhalter im Brand-Stil gezeigt.
   */
  src?: string;

  /** Alt-Text für Barrierefreiheit (Pflicht) */
  alt: string;

  /** Seitenverhältnis – default: portrait */
  aspect?: AspectRatio;

  /** Zusätzliche CSS-Klassen für den Container */
  className?: string;

  /** Kurze Beschreibung für den Platzhalter (sagt dem Betreiber, was reinsoll) */
  placeholderTitle: string;

  /** Detaillierter Hinweis für den Platzhalter */
  placeholderDescription: string;

  /** Der Pfad, unter dem die Datei abgelegt werden soll (z. B. "/images/nomi-portrait.jpg") */
  filename: string;

  /** Optional: Rahmen und Papier-Look (für Brand-konforme Platzhalter) */
  framed?: boolean;

  /** Optional: priorität für Above-the-fold Bilder (Next.js Image) */
  priority?: boolean;
};

/**
 * Eleganter Bild-Platzhalter im NomiPost-Markenstil.
 *
 * Verwendung:
 *  - src leer lassen, bis das Bild hochgeladen ist → zeigt schönen Platzhalter
 *  - src setzen → zeigt das Bild; bei Ladefehler fällt er zurück auf Platzhalter
 *
 * Der Betreiber kann Bilder einfach nach `public/images/` legen und die
 * genannten Dateinamen verwenden (siehe `public/images/README.md`).
 */
export default function ImageSlot({
  src,
  alt,
  aspect = "portrait",
  className = "",
  placeholderTitle,
  placeholderDescription,
  filename,
  framed = true,
  priority = false,
}: Props) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  if (showPlaceholder) {
    return (
      <div
        className={`relative ${aspectClasses[aspect]} ${className} group`}
        aria-label={`Bildplatzhalter: ${placeholderTitle}`}
        role="img"
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 ${
            framed ? "paper-card hand-border-gold" : ""
          }`}
        >
          {/* Dekorativer Rahmen – dicker gestrichelt, markenkonform */}
          <div className="absolute inset-4 border-2 border-dashed border-mattgold/30 rounded-sm pointer-events-none" />

          {/* Aquarell-Fleck als Akzent */}
          <div className="absolute top-4 right-4 text-mattgold/50 text-2xl opacity-60 rotate-12">
            ✦
          </div>
          <div className="absolute bottom-4 left-4 text-mattgold/50 text-xl opacity-40 -rotate-12">
            ✦
          </div>

          {/* Bild-Icon */}
          <div className="relative w-14 h-14 mb-4 text-mattgold-dark/70">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect
                x="6"
                y="8"
                width="36"
                height="32"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2 3"
              />
              <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.6" />
              <path
                d="M 8 34 L 18 22 L 26 28 L 34 18 L 42 26 L 42 38 L 8 38 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
                fillOpacity="0.15"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="handwritten text-xl md:text-2xl text-mattgold-dark leading-none mb-1">
            {placeholderTitle}
          </p>

          <p className="text-[0.75rem] text-tintengrau leading-snug max-w-[85%] mt-2 mb-3 text-pretty">
            {placeholderDescription}
          </p>

          <code className="text-[0.65rem] text-tintengrau-light/80 font-mono bg-warmcreme-dark/40 px-2 py-1 rounded-sm break-all max-w-[90%]">
            {filename}
          </code>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspectClasses[aspect]} ${className} overflow-hidden`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => setErrored(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
