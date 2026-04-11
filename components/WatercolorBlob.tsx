type Props = {
  className?: string;
  color?: string;
  variant?: 1 | 2 | 3;
};

/**
 * Organische Aquarell-Flecken als Hintergrund-Akzente.
 * Dezent, nie dominant – "Jede Illustration atmet."
 */
export default function WatercolorBlob({
  className = "",
  color = "#C9A84B",
  variant = 1,
}: Props) {
  const paths = {
    1: "M 50 10 C 80 5, 110 15, 125 40 C 140 70, 130 100, 100 115 C 65 125, 30 110, 15 80 C 5 55, 20 20, 50 10 Z",
    2: "M 60 5 C 95 0, 130 20, 135 55 C 140 90, 115 120, 80 120 C 40 120, 10 95, 15 55 C 20 25, 35 10, 60 5 Z",
    3: "M 40 15 C 75 5, 115 10, 130 45 C 140 80, 120 115, 85 120 C 45 125, 10 105, 10 70 C 10 40, 20 20, 40 15 Z",
  } as const;

  return (
    <svg
      viewBox="0 0 150 130"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id={`watercolor-${variant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed={variant} />
          <feDisplacementMap in="SourceGraphic" scale="8" />
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <path
        d={paths[variant]}
        fill={color}
        opacity="0.18"
        filter={`url(#watercolor-${variant})`}
      />
      <path d={paths[variant]} fill={color} opacity="0.08" />
    </svg>
  );
}
