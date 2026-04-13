type Props = {
  className?: string;
};

/**
 * Handgezeichnete Trennlinie mit kleinen Ornamenten.
 * Verbindet Sektionen ohne harte geometrische Kante.
 */
export default function HandDivider({ className = "" }: Props) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <svg width="80" height="12" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 1 6 Q 15 3 30 6 T 60 6 T 79 6"
          stroke="#FBBF24"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 8 1 L 9.5 6.5 L 15 8 L 9.5 9.5 L 8 15 L 6.5 9.5 L 1 8 L 6.5 6.5 Z"
          fill="#FBBF24"
        />
      </svg>
      <svg width="80" height="12" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 1 6 Q 20 9 40 6 T 79 6"
          stroke="#FBBF24"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
