// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { headingFont, bodyFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "KW Luxury Real Estate",
  description:
    "Luxury cinematic real estate experience for a top-tier Keller Williams agent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen bg-navy-luxury text-warm-white font-sans">
        {children}
      </body>
    </html>
  );
}
