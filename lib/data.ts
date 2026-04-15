export const projects = [
  {
    id: 1,
    title: "Hodnocení distribuce populace z dat mobilního operátora",
    subtitle: "Bakalářská práce",
    description:
      "Prostorově-statistická analýza distribuce populace z anonymizovaných mobilních dat. Projekt propojuje Python, GIS a srozumitelnou prezentaci výsledků v ArcGIS StoryMaps.",
    details:
      "Součástí řešení byla příprava dat, prostorová explorace vzorců, interpretace časové i územní variability a převod analytických výstupů do veřejně čitelné mapové formy.",
    tags: ["Python", "ArcGIS Pro", "Spatial statistics", "StoryMaps"],
    href: null,
    links: [
      {
        label: "StoryMap",
        href: "https://storymaps.arcgis.com/stories/2af68642ab8d407f81a9d806fe920321",
      },
    ],
    note: null,
    award: "1. místo GISáček 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Ekonomický atlas Německa (NUTS 2)",
    subtitle: "Kartografický projekt",
    description:
      "Vícestránkový tematický atlas zaměřený na regionální ekonomické rozdíly v Německu na úrovni NUTS 2.",
    details:
      "Projekt zahrnoval práci s daty Eurostatu, tvorbu a normalizaci indikátorů, kartografickou generalizaci a návrh konzistentního atlasového layoutu.",
    tags: ["ArcGIS Pro", "Eurostat", "Atlas", "Tematická kartografie"],
    href: null,
    links: null,
    note: "PDF projektu je k dispozici na vyžádání.",
    award: null,
    featured: false,
  },
  {
    id: 3,
    title: "Rodinný stav v České republice",
    subtitle: "Semestrální kartografický projekt",
    description:
      "Tematická kartografie demografických ukazatelů se zaměřením na prostorové vzorce rodinného stavu v Česku.",
    details:
      "Součástí byla příprava dat, volba klasifikačních metod, návrh více mapových kompozic a interpretace regionálních rozdílů.",
    tags: ["QGIS", "Demografie", "Tematická kartografie", "Vizualizace"],
    href: null,
    links: null,
    note: "PDF projektu je k dispozici na vyžádání.",
    award: null,
    featured: false,
  },
  {
    id: 4,
    title: "Památné stromy v Ostravě",
    subtitle: "Dashboard & Web GIS",
    description:
      "Interaktivní přehled památných stromů v Ostravě postavený jako webový GIS výstup s důrazem na přehlednou prezentaci geodat.",
    details:
      "Projekt stojí na práci s ArcGIS Online, publikaci vrstev, konfiguraci dashboardu a přípravě uživatelsky srozumitelného pohledu na data.",
    tags: ["ArcGIS Online", "Dashboard", "Web GIS", "Správa dat"],
    href: "https://www.arcgis.com/apps/dashboards/47f1605647cf458286856ed073cf8a5e",
    links: null,
    note: null,
    award: null,
    featured: false,
  },
  {
    id: 5,
    title: "POGEO – Volební analýza Pirátů 2025",
    subtitle: "Prostorová analýza",
    description:
      "Analýza volebního výsledku České pirátské strany na úrovni 6 157 obcí s využitím geograficky vážené regrese.",
    details:
      "Projekt porovnává OLS a GWR přístup, pracuje s prostorovou autokorelací reziduí a propojuje statistický model s kartografickou interpretací výsledků.",
    tags: ["R", "GWR", "Prostorová autokorelace", "ArcGIS Pro", "Kartografie"],
    href: null,
    links: [
      { label: "Volební atlas", href: "https://petrmikeska.cz/pogeo/" },
      { label: "Interaktivní mapa", href: "https://petrmikeska.cz/pogeo/map/" },
      { label: "GitHub", href: "https://github.com/SvobVojtech/pogeo_2026" },
    ],
    note: null,
    award: null,
    featured: false,
  },
];

export const skillGroups = [
  {
    id: "statistics",
    label: "Statistika & datová analýza",
    description:
      "Nejvíc mě baví hledat vzorce v datech, čistit je, testovat hypotézy a převádět výsledky do interpretovatelných výstupů.",
    skills: [
      "Python",
      "pandas",
      "geopandas",
      "matplotlib",
      "explorační analýza",
      "tvorba indikátorů",
    ],
  },
  {
    id: "spatial-analysis",
    label: "Prostorová analýza",
    description:
      "Pracuji s metodami, kde je prostorový kontext klíčový: od prostorové autokorelace přes shlukování až po analýzu mobilních dat.",
    skills: [
      "prostorová statistika",
      "ESDA",
      "shlukování",
      "prostorová autokorelace",
      "analýza mobilních dat",
      "interpretace výsledků",
    ],
  },
  {
    id: "gis",
    label: "GIS & kartografie",
    description:
      "Nejčastěji pracuji v ArcGIS Pro, umím ArcGIS Online a StoryMaps, QGIS používám v základu a baví mě tematická kartografie i pokročilejší vizualizace.",
    skills: [
      "ArcGIS Pro",
      "ArcGIS Online",
      "StoryMaps",
      "Survey123",
      "QGIS (základy)",
      "tematická kartografie",
    ],
  },
  {
    id: "databases",
    label: "Databáze & správa dat",
    description:
      "Ve škole jsme řešili SQL, PostgreSQL, návrh databází i prostorové databáze. Důležitá je pro mě i kvalita dat a dobře navržený workflow.",
    skills: [
      "SQL",
      "PostgreSQL",
      "návrh databází",
      "prostorové databáze",
      "správa dat",
      "datové workflow",
    ],
  },
  {
    id: "other",
    label: "Doplňkové přesahy",
    description:
      "Vedle geodat mám zkušenost i s video obsahem a tradingem, což mi dává cit pro systematičnost, práci s rizikem a rozhodování nad daty.",
    skills: [
      "video obsah",
      "datová organizace",
      "trading",
      "řízení rizika",
      "disciplína",
      "samostatná práce",
    ],
  },
];

export const experience = [
  {
    period: "2024 – současnost",
    role: "Video Content Administrator",
    company: "Eyeball, Česko",
    description:
      "Administrativní a datově orientovaná práce s video obsahem ve fotbalově analytickém prostředí. Součástí je organizace dat, práce se strukturovanými workflow a důraz na konzistenci výstupů.",
    tags: ["video obsah", "správa dat", "workflow"],
  },
  {
    period: "2024",
    role: "Geodetická stáž",
    company: "R&M Geodata, Česko",
    description:
      "Krátkodobá praxe zaměřená na základní terénní i kancelářskou geodetickou práci, technickou dokumentaci a týmovou spolupráci.",
    tags: ["geodézie", "technická dokumentace", "terénní práce"],
  },
];

export const awards = [
  {
    year: 2025,
    emoji: "🥇",
    title: "1. místo – GISáček",
    org: "VŠB–TUO Ostrava",
  },
  {
    year: 2025,
    emoji: "🥉",
    title: "3. místo – Děkanská soutěž",
    org: "UPOL",
  },
  {
    year: 2025,
    emoji: "🥉",
    title: "3. místo – Nejlepší studentská vědecká práce",
    org: "Česká geografická společnost",
  },
];

export const education = [
  {
    period: "2025 – 2027",
    degree: "Mgr.",
    field: "Geoinformatika a kartografie",
    institution: "Univerzita Palackého v Olomouci",
    current: true,
  },
  {
    period: "2022 – 2025",
    degree: "Bc.",
    field: "Geoinformatika a kartografie",
    institution: "Univerzita Palackého v Olomouci",
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
    title: "Python in ArcGIS Pro",
    provider: "Esri Certificate",
  },
  {
    year: 2024,
    title: "ArcGIS Online & Web GIS – Erasmus+ BIP",
    provider: "Universität Salzburg",
  },
  {
    year: 2023,
    title: "GeoSpatial Summer School G3S GIGame",
    provider: "G3S",
  },
];
