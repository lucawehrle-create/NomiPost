type Props = {
  className?: string;
};

/**
 * Stilisierter Briefumschlag im Kraftpapier-Look mit goldenem Siegel.
 * Ersetzt ein Produktbild im Hero, bis echte Fotos vorliegen.
 */
export default function EnvelopeIllustration({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="env-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
        <linearGradient id="env-paper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5EADB" />
          <stop offset="100%" stopColor="#E8D9C0" />
        </linearGradient>
        <linearGradient id="env-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4C3A3" />
          <stop offset="100%" stopColor="#C4B08C" />
        </linearGradient>
        <radialGradient id="seal-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E0C878" />
          <stop offset="100%" stopColor="#A68735" />
        </radialGradient>
      </defs>

      {/* Schatten unter dem Umschlag */}
      <ellipse cx="200" cy="255" rx="160" ry="10" fill="#3B2D5F" opacity="0.12" />

      {/* Umschlag-Körper */}
      <g filter="url(#env-rough)">
        <rect x="40" y="70" width="320" height="180" rx="4" fill="url(#env-paper)" stroke="#A68735" strokeWidth="1.5" />

        {/* Umschlag-Klappe */}
        <path
          d="M 40 70 L 200 180 L 360 70 Z"
          fill="url(#env-shadow)"
          stroke="#A68735"
          strokeWidth="1.5"
        />

        {/* Adresslinien (handgezeichnet) */}
        <path
          d="M 80 205 Q 130 203 180 205 T 260 205"
          stroke="#3B2D5F"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
        <path
          d="M 80 220 Q 115 218 150 220 T 220 220"
          stroke="#3B2D5F"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
        <path
          d="M 80 235 Q 120 233 160 235 T 240 235"
          stroke="#3B2D5F"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>

      {/* Briefmarke rechts oben – mit Stern */}
      <g transform="translate(295, 88)">
        <rect width="48" height="58" fill="#FFF8F0" stroke="#3B2D5F" strokeWidth="1.5" strokeDasharray="3,2" rx="2" />
        <circle cx="24" cy="24" r="14" fill="none" stroke="#3B2D5F" strokeWidth="1" opacity="0.4" />
        <path
          d="M 24 12 L 26 22 L 36 24 L 26 26 L 24 36 L 22 26 L 12 24 L 22 22 Z"
          fill="#C9A84B"
        />
        <text x="24" y="52" fontSize="6" fill="#3B2D5F" textAnchor="middle" fontFamily="serif">NOMIPOST</text>
      </g>

      {/* Goldenes Wachs-Siegel mit Kompassrose-Andeutung */}
      <g transform="translate(200, 180)">
        <circle cx="0" cy="0" r="32" fill="url(#seal-grad)" />
        <circle cx="0" cy="0" r="28" fill="none" stroke="#FFF8F0" strokeWidth="0.8" opacity="0.4" />

        {/* Mini-Kompassrose im Siegel */}
        <polygon points="0,-22 3,0 0,22 -3,0" fill="#3B2D5F" />
        <polygon points="-22,0 0,3 22,0 0,-3" fill="#3B2D5F" />
        <circle cx="0" cy="0" r="3" fill="#FFF8F0" />
        <circle cx="0" cy="0" r="1.5" fill="#3B2D5F" />
      </g>

      {/* Gekritzeltes "An: ..." handschriftlich */}
      <text
        x="80"
        y="130"
        fontFamily="var(--font-caveat), cursive"
        fontSize="22"
        fill="#3B2D5F"
        transform="rotate(-1 80 130)"
      >
        An meinen liebsten
      </text>
      <text
        x="80"
        y="158"
        fontFamily="var(--font-caveat), cursive"
        fontSize="28"
        fill="#3B2D5F"
        fontWeight="600"
        transform="rotate(-1 80 158)"
      >
        Entdecker ✦
      </text>
    </svg>
  );
}
