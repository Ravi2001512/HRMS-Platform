import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        paper: "#FAF8F3",
        "paper-line": "#DCD5C4",
        ink: "#1B2B26",
        "ink-soft": "#4B5A54",
        brand: {
          DEFAULT: "#0F6E5C",
          dark: "#0B5347",
          light: "#E4F0EC",
        },
        stamp: {
          DEFAULT: "#C77D2E",
          light: "#F7E9D7",
        },
        seal: {
          DEFAULT: "#2B4C7E",
          light: "#E8EDF5",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        ledger:
          "repeating-linear-gradient(to bottom, transparent, transparent 35px, rgba(27,43,38,0.07) 36px)",
        "gradient-brand":
          "linear-gradient(135deg, #0F6E5C 0%, #0B5347 50%, #2B4C7E 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,110,92,0.12) 0%, transparent 70%)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      boxShadow: {
        card: "0 1px 4px rgba(27,43,38,0.06), 0 4px 16px rgba(27,43,38,0.06)",
        elevated:
          "0 2px 8px rgba(27,43,38,0.06), 0 8px 32px rgba(27,43,38,0.10)",
        brand: "0 4px 24px rgba(15,110,92,0.20)",
        stamp: "0 4px 20px rgba(199,125,46,0.22)",
      },
      keyframes: {
        "stamp-in": {
          "0%": { transform: "scale(1.6) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(0.95) rotate(-8deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-8deg)", opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "count-up": {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "stamp-in": "stamp-in 0.5s cubic-bezier(0.2,0.8,0.2,1) both",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.5s ease both",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "pulse-ring": "pulse-ring 1.5s cubic-bezier(0.2,0.6,0.3,1) infinite",
        "float": "float 4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "count-up": "count-up 0.3s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
