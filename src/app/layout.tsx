import type { Metadata } from "next";
import "./globals.css";
import { bodyFont, headingFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Realtor Luxe",
  description: "Experiências imobiliárias de alto padrão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
