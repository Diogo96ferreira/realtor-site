import { Inter, Inter_Tight } from "next/font/google";

export const headingFont = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
