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
      <ellipse cx="58" cy="44" rx="38" ry="3" fill="rgba(30, 41, 59, 0.05)" />
    </svg>
  );
}

export function RollingHills({ className = "", style }: Props) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hills-back" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E0EFDA" />
          <stop offset="100%" stopColor="#C8E0BF" />
        </linearGradient>
        <linearGradient id="hills-mid" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#B5D6A5" />
          <stop offset="100%" stopColor="#9CC791" />
        </linearGradient>
        <linearGradient id="hills-front" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8CC27D" />
          <stop offset="100%" stopColor="#6FA866" />
        </linearGradient>
      </defs>
      {/* Hintere Hügel, sehr weich */}
      <path
        d="M0 100 C 240 60, 480 90, 720 80 S 1200 95, 1440 80 L 1440 220 L 0 220 Z"
        fill="url(#hills-back)"
      />
      {/* Mittlere Hügel */}
      <path
        d="M0 140 C 288 100, 576 125, 864 120 S 1296 130, 1440 125 L 1440 220 L 0 220 Z"
        fill="url(#hills-mid)"
      />
      {/* Vordere Hügel */}
      <path
        d="M0 180 C 360 145, 720 170, 1080 165 S 1368 175, 1440 170 L 1440 220 L 0 220 Z"
        fill="url(#hills-front)"
      />
    </svg>
  );
}
