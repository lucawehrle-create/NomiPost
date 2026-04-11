import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primärfarben aus dem Brand Guide
        "nomi-violet": "#3B2D5F",
        "nomi-violet-dark": "#2A1F47",
        "nomi-violet-light": "#5B4B82",
        "warmcreme": "#FFF8F0",
        "warmcreme-dark": "#F5EADB",
        "warmcreme-darker": "#E8D9C0",
        "mattgold": "#C9A84B",
        "mattgold-light": "#E0C878",
        "mattgold-dark": "#A68735",
        "tintengrau": "#3A3A3A",
        "tintengrau-light": "#6B6B6B",
        // Sekundärfarben (Magie-Töne)
        "nachtblau": "#1F2B5C",
        "sternlila": "#7A5BA6",
        "lavendel": "#B8A5D4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        // Premium-Display-Größen für Desktop
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backgroundImage: {
        "paper-texture": "url('/textures/paper.svg')",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
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
