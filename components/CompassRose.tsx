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
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="60%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
      </defs>

      {/* Äußerer Kreis, leicht unregelmäßig */}
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="2"
      />

      {/* Himmelsrichtungs-Buchstaben */}
      <g
        fill="#1E293B"
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
        fill="#1E293B"
      />
      <polygon
        points="100,100 108,100 100,18"
        fill="#475569"
      />

      {/* Süd */}
      <polygon
        points="100,100 108,100 100,182 92,100"
        fill="#FBBF24"
      />
      <polygon
        points="100,100 108,100 100,182"
        fill="#B45309"
      />

      {/* Ost */}
      <polygon
        points="100,100 100,92 182,100 100,108"
        fill="#FBBF24"
      />
      <polygon
        points="100,100 100,92 182,100"
        fill="#B45309"
      />

      {/* West */}
      <polygon
        points="100,100 100,92 18,100 100,108"
        fill="#FBBF24"
      />
      <polygon
        points="100,100 100,92 18,100"
        fill="#B45309"
      />

      {/* Mittelpunkt */}
      <circle cx="100" cy="100" r="6" fill="#1E293B" />
      <circle cx="100" cy="100" r="3" fill="#FBBF24" />
    </svg>
  );
}
