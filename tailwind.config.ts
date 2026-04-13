import type { Config } from "tailwindcss";

/**
 * NOMI Color Token System — Version 1.0
 * 6 Primitive Farben × 10 Stufen + Semantic Tokens.
 * 60-25-10-5 Regel: 60% Blue/Neutrals, 25% Amber, 10% Coral, 5% Violet.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ───── PRIMITIVES ─────────────────────────────────────
        // Blue — Primärfarbe, Vertrauen, Identität (Nomi)
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        // Amber — Sekundärfarbe, Energie, Neugier
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Coral — Akzent, CTAs
        coral: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        // Emerald — Erfolg
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        // Violet — Kreativität, Premium, Fantasie
        violet: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        // Slate — Neutral
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        // ───── SEMANTIC TOKENS ────────────────────────────────
        // Brand
        "brand-primary": "#3B82F6", // Blue 500
        "brand-primary-hover": "#2563EB", // Blue 600
        "brand-primary-active": "#1D4ED8", // Blue 700
        "brand-secondary": "#FBBF24", // Amber 400
        "brand-accent": "#F87171", // Coral 400
        "brand-accent-hover": "#EF4444", // Coral 500
        "brand-creative": "#A78BFA", // Violet 400

        // Surface
        "surface-page": "#F8FAFC", // Slate 50
        "surface-card": "#FFFFFF",
        "surface-elevated": "#FFFBEB", // Amber 50
        "surface-muted": "#F1F5F9", // Slate 100
        "surface-dark": "#0F172A", // Slate 900

        // Text
        "text-primary": "#1E293B", // Slate 800
        "text-secondary": "#475569", // Slate 600
        "text-tertiary": "#64748B", // Slate 500
        "text-placeholder": "#94A3B8", // Slate 400
        "text-on-color": "#FFFFFF",

        // Feedback
        "feedback-success": "#34D399", // Emerald 400
        "feedback-warning": "#FBBF24", // Amber 400
        "feedback-error": "#F87171", // Coral 400
        "feedback-info": "#3B82F6", // Blue 500
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["Nunito", "system-ui", "sans-serif"],
        serif: ["Nunito", "system-ui", "sans-serif"], // Fallback for legacy code
        hand: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 7vw, 6.5rem)",
          { lineHeight: "1", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "compass-spin": "compass-spin 20s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "compass-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
