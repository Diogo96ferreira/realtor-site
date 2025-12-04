// lib/fonts.ts
import { Inter_Tight, Inter } from "next/font/google";

export const headingFont = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
