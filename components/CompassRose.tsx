"use client";

type Props = {
  className?: string;
  spin?: boolean;
};

/**
 * Die goldene Kompassrose – zentrales Markensymbol von NomiPost.
 * Handgezeichneter Look, warm, nie perfekt geometrisch.
 */
export default function CompassRose({ className = "", spin = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0C878" />
          <stop offset="60%" stopColor="#C9A84B" />
          <stop offset="100%" stopColor="#A68735" />
        </radialGradient>
        <filter id="roughen">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" />
          <feDisplacementMap in="SourceGraphic" scale="1.2" />
        </filter>
      </defs>

      {/* Äußerer Kreis, leicht unregelmäßig */}
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="#C9A84B"
        strokeWidth="1.5"
        opacity="0.5"
        filter="url(#roughen)"
      />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="#C9A84B"
        strokeWidth="2"
        filter="url(#roughen)"
      />

      {/* Himmelsrichtungs-Buchstaben */}
      <g
        fill="#3B2D5F"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="14"
        fontWeight="600"
        textAnchor="middle"
      >
        <text x="100" y="22">N</text>
        <text x="100" y="188">S</text>
        <text x="185" y="105">O</text>
        <text x="15" y="105">W</text>
      </g>

      {/* Innere Sterne-Speichen, diagonal (klein) */}
      <g fill="url(#goldGrad)" opacity="0.8">
        <polygon points="100,100 128,72 100,58 72,72" transform="rotate(45 100 100)" />
        <polygon points="100,100 128,72 100,58 72,72" transform="rotate(135 100 100)" />
        <polygon points="100,100 128,72 100,58 72,72" transform="rotate(225 100 100)" />
        <polygon points="100,100 128,72 100,58 72,72" transform="rotate(315 100 100)" />
      </g>

      {/* Hauptspitzen der Kompassrose */}
      {/* Nord (länger, dunkler) */}
      <polygon
        points="100,100 108,100 100,18 92,100"
        fill="#3B2D5F"
      />
      <polygon
        points="100,100 108,100 100,18"
        fill="#5B4B82"
      />

      {/* Süd */}
      <polygon
        points="100,100 108,100 100,182 92,100"
        fill="#C9A84B"
      />
      <polygon
        points="100,100 108,100 100,182"
        fill="#A68735"
      />

      {/* Ost */}
      <polygon
        points="100,100 100,92 182,100 100,108"
        fill="#C9A84B"
      />
      <polygon
        points="100,100 100,92 182,100"
        fill="#A68735"
      />

      {/* West */}
      <polygon
        points="100,100 100,92 18,100 100,108"
        fill="#C9A84B"
      />
      <polygon
        points="100,100 100,92 18,100"
        fill="#A68735"
      />

      {/* Mittelpunkt */}
      <circle cx="100" cy="100" r="6" fill="#3B2D5F" />
      <circle cx="100" cy="100" r="3" fill="#C9A84B" />
    </svg>
  );
}
