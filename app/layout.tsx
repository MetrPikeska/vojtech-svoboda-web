import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vojtěch Svoboda — Geoinformatik & Datový analytik",
  description:
    "MSc student geoinformatiky na UPOL. Pracuji s prostorovými daty, GIS analýzou a kartografickou vizualizací. Hledám zajímavé projekty a spolupráci.",
  keywords: [
    "geoinformatika",
    "GIS",
    "kartografie",
    "prostorová data",
    "ArcGIS",
    "QGIS",
    "Python",
    "data analytics",
  ],
  authors: [{ name: "Vojtěch Svoboda" }],
  openGraph: {
    title: "Vojtěch Svoboda — Geoinformatik & Datový analytik",
    description:
      "MSc student geoinformatiky na UPOL. Prostorová data, GIS analýza a kartografická vizualizace.",
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
