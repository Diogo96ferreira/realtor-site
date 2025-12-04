import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        "navy-luxury": "#0A1A2F",
        "royal-blue": "#102B46",
        "gold-luxe": "#D4AF37",
        "soft-gold": "#F2D68C",
        "warm-white": "#F9F7F2",
        "slate-gray": "#6E6D73",

        // Semantic tokens
        background: "#0A1A2F",
        foreground: "#F9F7F2",
        muted: "#102B46",
        "muted-foreground": "#6E6D73",
        border: "#102B46",
        card: "#0F2036",
        "card-foreground": "#F9F7F2",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "elevated-soft": "0 18px 45px rgba(0, 0, 0, 0.45)",
        "glow-gold": "0 0 30px rgba(212, 175, 55, 0.35)",
      },
      spacing: {
        "section-y": "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
