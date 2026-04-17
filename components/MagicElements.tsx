type Props = { className?: string; style?: React.CSSProperties };

export function Cloud({ className = "", style }: Props) {
  return (
    <svg
      viewBox="0 0 120 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="30" cy="32" rx="22" ry="14" fill="white" />
      <ellipse cx="58" cy="25" rx="26" ry="17" fill="white" />
      <ellipse cx="85" cy="30" rx="22" ry="14" fill="white" />
      <ellipse cx="50" cy="38" rx="28" ry="10" fill="white" />
      <ellipse cx="78" cy="38" rx="20" ry="8" fill="white" />
      {/* Schatten für 3D-Feel */}
      <ellipse cx="58" cy="42" rx="35" ry="3" fill="rgba(30, 41, 59, 0.06)" />
    </svg>
  );
}

export function RollingHills({ className = "", style }: Props) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Hintere Hügel, heller */}
      <path
        d="M0 90 Q 200 60 400 80 T 800 70 T 1200 85 T 1440 70 L 1440 200 L 0 200 Z"
        fill="#D4E8D4"
      />
      {/* Mittlere Hügel */}
      <path
        d="M0 130 Q 240 90 480 115 T 960 110 T 1440 120 L 1440 200 L 0 200 Z"
        fill="#A8D5BA"
      />
      {/* Vordere Hügel, dunkler */}
      <path
        d="M0 170 Q 280 135 560 160 T 1120 155 T 1440 165 L 1440 200 L 0 200 Z"
        fill="#7AB892"
      />
    </svg>
  );
}

export function Flower({
  className = "",
  color = "#FBBF24",
  style,
}: Props & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="3.2" fill={color} />
      <circle cx="19" cy="9" r="3.2" fill={color} />
      <circle cx="17" cy="17" r="3.2" fill={color} />
      <circle cx="7" cy="17" r="3.2" fill={color} />
      <circle cx="5" cy="9" r="3.2" fill={color} />
      <circle cx="12" cy="12" r="3" fill="#FFF8E7" />
    </svg>
  );
}

export function GrassTuft({ className = "", style }: Props) {
  return (
    <svg
      viewBox="0 0 40 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M4 20 Q 5 8 7 20 M10 20 Q 11 4 14 20 M17 20 Q 19 6 22 20 M25 20 Q 27 10 29 20 M32 20 Q 34 5 37 20"
        stroke="#7AB892"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Butterfly({
  className = "",
  color = "#7C3AED",
  style,
}: Props & { color?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="10" cy="10" rx="9" ry="7" fill={color} opacity="0.9" />
      <ellipse cx="30" cy="10" rx="9" ry="7" fill={color} opacity="0.9" />
      <ellipse cx="10" cy="22" rx="7" ry="5" fill={color} opacity="0.75" />
      <ellipse cx="30" cy="22" rx="7" ry="5" fill={color} opacity="0.75" />
      <rect x="19" y="6" width="2" height="20" rx="1" fill="#1e293b" />
      <circle cx="20" cy="5" r="1.5" fill="#1e293b" />
    </svg>
  );
}
