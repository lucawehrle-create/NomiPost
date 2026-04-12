type Props = {
  className?: string;
  color?: string;
  variant?: 1 | 2 | 3;
};

/**
 * Organische Farbflecken als Hintergrund-Akzente.
 * Rein CSS-basiert (keine SVG-Filter mehr → deutlich besser für Mobile-GPU).
 */
export default function WatercolorBlob({
  className = "",
  color = "#C9A84B",
  variant = 1,
}: Props) {
  // Drei leicht verschiedene Formen via border-radius
  const shapes = {
    1: "42% 58% 62% 38% / 45% 55% 45% 55%",
    2: "55% 45% 38% 62% / 52% 40% 60% 48%",
    3: "38% 62% 55% 45% / 60% 42% 58% 40%",
  } as const;

  return (
    <div
      className={`${className}`}
      aria-hidden="true"
      style={{
        borderRadius: shapes[variant],
        backgroundColor: color,
        opacity: 0.12,
        filter: "blur(60px)",
      }}
    />
  );
}
