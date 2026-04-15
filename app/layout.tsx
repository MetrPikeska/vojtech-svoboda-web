import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vojtěch Svoboda | Prostorová data a datová analýza",
  description:
    "Student geoinformatiky na UPOL se zaměřením na statistiku, datovou analýzu v Pythonu, prostorová data, GIS a kartografickou vizualizaci.",
  keywords: [
    "geoinformatika",
    "GIS",
    "kartografie",
    "prostorová data",
    "ArcGIS",
    "ArcGIS Online",
    "QGIS",
    "Python",
    "spatial statistics",
    "PostgreSQL",
    "data analysis",
  ],
  authors: [{ name: "Vojtěch Svoboda" }],
  openGraph: {
    title: "Vojtěch Svoboda | Prostorová data a datová analýza",
    description:
      "Statistika, datová analýza v Pythonu, prostorová data, GIS a kartografie.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        style={{
          fontFamily: "var(--font-body), Inter, system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
