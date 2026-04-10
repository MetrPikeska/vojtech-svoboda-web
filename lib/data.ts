export const projects = [
  {
    id: 1,
    title: "Distribuce populace z dat mobilního operátora",
    subtitle: "Bakalářská práce",
    description:
      "Prostorově-statistická analýza vzorců distribuce obyvatelstva pomocí dat mobilních operátorů. Výsledky vizualizovány v interaktivním StoryMap.",
    tags: ["Python", "ArcGIS Pro", "Prostorová statistika", "StoryMap"],
    href: "https://www.geoinformatics.upol.cz/dprace/bakalarske/svoboda25/",
    links: null,
    award: "🏆 1. místo GISáček 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Ekonomický atlas Německa (NUTS 2)",
    subtitle: "Kartografický projekt",
    description:
      "Návrh a tvorba vícestránkového tematického atlasu — sběr dat z Eurostatu, tvorba indikátorů, prostorová analýza a kartografická syntéza.",
    tags: ["ArcGIS Pro", "Kartografie", "Eurostat", "Atlas"],
    href: null,
    links: null,
    award: null,
    featured: false,
  },
  {
    id: 3,
    title: "Rodinný stav v České republice",
    subtitle: "Semestrální projekt",
    description:
      "Kartografický projekt zaměřený na prostorové vzorce rodinného stavu obyvatelstva ČR. Samostatný sběr dat, analýza a vizualizace.",
    tags: ["QGIS", "Tematická kartografie", "Demografická data"],
    href: null,
    links: null,
    award: null,
    featured: false,
  },
  {
    id: 4,
    title: "Památné stromy v Ostravě",
    subtitle: "GIS projekt",
    description:
      "GIS projekt mapující a vizualizující výskyt památných stromů na území Ostravy.",
    tags: ["QGIS", "GIS", "Prostorová data"],
    href: null,
    links: null,
    award: null,
    featured: false,
  },
  {
    id: 5,
    title: "POGEO – Volební analýza Pirátů 2025",
    subtitle: "Prostorová analýza",
    description:
      "Prostorová analýza volebního úspěchu České pirátské strany na úrovni 6 157 obcí s využitím Geographically Weighted Regression. GWR model (R² 0.445) vs OLS (R² 0.188) — eliminace prostorové autokorelace reziduí. Prediktory z SLDB 2021: vzdělání, zaměstnanost, věřící aj.",
    tags: ["R", "GWR", "Prostorová analýza", "Kartografie", "ArcGIS Pro"],
    href: "https://petrmikeska.cz/pogeo/",
    links: [
      { label: "GitHub", href: "https://github.com/SvobVojtech/pogeo_2026" },
      { label: "Volební atlas", href: "https://petrmikeska.cz/pogeo/" },
      { label: "Interaktivní mapa", href: "https://petrmikeska.cz/pogeo/map/" },
    ],
    award: null,
    featured: false,
  },
];

export const skillGroups = [
  {
    id: "gis",
    label: "GIS & Kartografie",
    skills: [
      "ArcGIS Pro",
      "ArcGIS Online",
      "StoryMaps",
      "Survey123",
      "QGIS",
    ],
  },
  {
    id: "programming",
    label: "Programování",
    skills: [
      "Python",
      "pandas",
      "geopandas",
      "matplotlib",
      "arcpy",
      "R (základy)",
    ],
  },
  {
    id: "data",
    label: "Databáze & Data",
    skills: ["SQL", "PostgreSQL", "Geodatabáze", "Normalizace indikátorů"],
  },
  {
    id: "analysis",
    label: "Prostorová analýza",
    skills: [
      "Prostorová statistika",
      "ESDA",
      "Tematická kartografie",
      "Demografická analýza",
    ],
  },
  {
    id: "other",
    label: "Doplňkové",
    skills: [
      "HTML / CSS / JS",
      "Správa dat",
      "Video obsah",
      "Finanční trhy",
    ],
  },
];

export const awards = [
  {
    year: 2025,
    emoji: "🥇",
    title: "1. místo — GISáček",
    org: "VŠB–TUO Ostrava",
  },
  {
    year: 2025,
    emoji: "🥉",
    title: "3. místo — Děkanská soutěž",
    org: "UPOL",
  },
  {
    year: 2025,
    emoji: "🥉",
    title: "3. místo — Nejlepší student. vědecká práce",
    org: "Česká geografická společnost",
  },
];

export const education = [
  {
    period: "2025 – 2027",
    degree: "Mgr.",
    field: "Geoinformatika a Kartografie",
    institution: "Palackého univerzita v Olomouci",
    current: true,
  },
  {
    period: "2022 – 2025",
    degree: "Bc.",
    field: "Geoinformatika a Kartografie",
    institution: "Palackého univerzita v Olomouci",
    current: false,
  },
  {
    period: "2018 – 2022",
    degree: "",
    field: "Gymnázium",
    institution: "Wichterlovo gymnázium, Ostrava-Poruba",
    current: false,
  },
];

export const courses = [
  {
    year: 2025,
    title: "Spatial Analysis in ArcGIS Pro",
    provider: "ArcData Praha",
  },
  {
    year: 2024,
    title: "Python in ArcGIS Pro — Esri Certificate",
    provider: "Esri",
  },
  {
    year: 2024,
    title: "ArcGIS Online & Web GIS — Erasmus+ BIP",
    provider: "Universität Salzburg",
  },
  {
    year: 2023,
    title: "GeoSpatial Summer School G3S GIGame",
    provider: "G3S",
  },
];
