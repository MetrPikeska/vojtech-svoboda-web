import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="cs" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
