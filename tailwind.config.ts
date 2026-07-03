import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05060a",
        surface: "#0d0f17",
        surface2: "#11141d",
        border: "#1c2130",
        muted: "#8b93a7",
        text: "#f1f5f9",
        accent1: "#38bdf8",
        accent2: "#6366f1",
        accent3: "#a855f7",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
