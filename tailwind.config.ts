import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-luxury": "#0A1A2F",
        "royal-blue": "#102B46",
        "gold-luxe": "#D4AF37",
        "soft-gold": "#F2D68C",
        "warm-white": "#F9F7F2",
        "slate-gray": "#6E6D73",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        border: "var(--color-border)",
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
      },
      spacing: {
        "section-y": "6rem",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        "elevated-soft": "0 20px 60px rgba(10, 26, 47, 0.18)",
        "glow-gold":
          "0 0 0 1px rgba(212, 175, 55, 0.3), 0 15px 45px rgba(212, 175, 55, 0.25)",
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Inter Tight",
          "system-ui",
          "sans-serif",
        ],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
