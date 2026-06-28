import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050509",
        primary: {
          DEFAULT: "#C8952A",   // gold — Equity IB brand
          light:   "#F5C842",
          dark:    "#8B6000",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#34D399",   // emerald-400
          foreground: "#050509",
        },
        secondary: {
          DEFAULT: "#A78BFA",   // violet-400
          foreground: "#ffffff",
        },
        gold: {
          DEFAULT: "#C8952A",
          light:   "#F5C842",
          dark:    "#8B6000",
        },
        muted: {
          DEFAULT: "#13131f",
          foreground: "#94a3b8",
        },
        border: "rgba(255,255,255,0.07)",
        card:   "rgba(200,149,42,0.04)",
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial":    "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,149,42,0.28) 0%, transparent 70%)",
        "gradient-accent":    "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(52,211,153,0.15) 0%, transparent 70%)",
        "gradient-secondary": "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(167,139,250,0.15) 0%, transparent 70%)",
        "gradient-aurora":    "linear-gradient(-45deg, rgba(200,149,42,0.14), rgba(52,211,153,0.07), rgba(245,200,66,0.11), rgba(200,149,42,0.09))",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
        float:       "float 6s ease-in-out infinite",
        "float-alt": "floatAlt 9s ease-in-out infinite",
        pulse2:      "pulse2 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer:     "shimmer 2s linear infinite",
        "count-up":  "countUp 2s ease forwards",
        "scroll-x":  "scrollX 20s linear infinite",
        aurora:      "aurora 14s ease infinite",
        "glow-ring":  "glowRing 2.8s ease-in-out infinite",
        "gold-pulse": "goldPulse 2.4s ease-in-out infinite",
        beam:         "beam 4s ease-in-out infinite",
        scan:         "scan 9s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        floatAlt: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-8px) rotate(1deg)" },
          "66%":      { transform: "translateY(4px) rotate(-1deg)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scrollX: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glowRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200,149,42,0.45), 0 0 22px rgba(200,149,42,0.35)" },
          "50%":      { boxShadow: "0 0 0 10px rgba(200,149,42,0), 0 0 42px rgba(200,149,42,0.55)" },
        },
        goldPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200,149,42,0.5), 0 0 20px rgba(200,149,42,0.3)" },
          "50%":      { boxShadow: "0 0 0 12px rgba(200,149,42,0), 0 0 40px rgba(200,149,42,0.5)" },
        },
        beam: {
          "0%":   { transform: "translateX(-100%) skewX(-15deg)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateX(200%) skewX(-15deg)", opacity: "0" },
        },
        scan: {
          "0%":   { top: "-2px",   opacity: "0" },
          "3%":   { opacity: "1" },
          "97%":  { opacity: "0.8" },
          "100%": { top: "100vh",  opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow:           "0 0 40px rgba(200,149,42,0.35), 0 0 80px rgba(200,149,42,0.12)",
        "glow-accent":  "0 0 40px rgba(52,211,153,0.35), 0 0 80px rgba(52,211,153,0.12)",
        "glow-secondary":"0 0 40px rgba(167,139,250,0.35), 0 0 80px rgba(167,139,250,0.12)",
        glass:          "0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
