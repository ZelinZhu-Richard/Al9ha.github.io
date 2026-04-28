import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          elevated: "#0f0f17",
          subtle: "#13131c",
        },
        border: {
          DEFAULT: "#1f1f2e",
          strong: "#2a2a3e",
        },
        accent: {
          cyan: "#00f0ff",
          gold: "#f0a500",
        },
        text: {
          DEFAULT: "#e6e6f0",
          muted: "#8a8aa0",
          dim: "#5a5a72",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 12px rgba(0, 240, 255, 0.4)" },
          "50%": { textShadow: "0 0 24px rgba(0, 240, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
