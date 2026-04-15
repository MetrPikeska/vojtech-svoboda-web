import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
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
      className={`${playfair.variable} ${dmSans.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        style={{
          fontFamily: "var(--font-body), DM Sans, system-ui, sans-serif",
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
