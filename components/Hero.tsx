"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";

const focusCards = [
  {
    label: "Prostorová data",
    title: "geodata, atributy, prostorové souvislosti",
    desc: "Pracuji s daty, u kterých je klíčové nejen co říkají, ale i kde se odehrávají.",
  },
  {
    label: "Datová analýza",
    title: "Python, vizualizace, regrese",
    desc: "Věnuji se přípravě dat, exploraci, vizualizaci i modelům, které pomáhají výsledky dobře interpretovat.",
  },
  {
    label: "GIS",
    title: "ArcGIS Pro, ArcGIS Online, StoryMaps",
    desc: "Analytické výstupy převádím do map, dashboardů a srozumitelných GIS prezentací.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const isMobile = useIsMobile(1024);
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, var(--color-hero) 0%, #0a1220 55%, #0f1319 100%)",
        overflow: "hidden",
      }}
    >
      <ContourBackground />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.1), transparent 22%), radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.08), transparent 24%), radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(10, 15, 31, 0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "6rem 1.25rem 4rem" : "8rem 2rem 6rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: text content */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-highlight)",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1.5,
                backgroundColor: "var(--color-highlight)",
                flexShrink: 0,
              }}
            />
            Prostorová data · Datová analýza · GIS
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              color: "var(--color-hero-text)",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              maxWidth: "14ch",
            }}
          >
            Vojtěch{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>Svoboda</em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "var(--color-hero-muted)",
              lineHeight: 1.8,
              maxWidth: "58ch",
              marginBottom: "3rem",
            }}
          >
            Hlavní těžiště mám v datové analýze propojené s prostorovými daty. V
            Pythonu řeším zpracování, vizualizaci a modelování dat, v GISu pak jejich
            prostorovou interpretaci a převod do přehledných výstupů.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#projekty"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projekty")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-highlight)",
                color: "#000000",
                padding: "0.875rem 2rem",
                borderRadius: 999,
                fontSize: "0.9375rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-highlight)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Projekty
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#kontakt")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "var(--color-hero-text)",
                padding: "0.875rem 2rem",
                borderRadius: 999,
                fontSize: "0.9375rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1.5px solid var(--color-hero-border)",
                transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-hero-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-hero-text)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Kontakt
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "0.9rem",
              marginTop: "2rem",
            }}
          >
            {focusCards.map((card) => (
              <div
                key={card.label}
                style={{
                  padding: "1rem 1.1rem",
                  borderRadius: 18,
                  background: "var(--color-hero-panel)",
                  border: "1px solid var(--color-hero-border)",
                  boxShadow: "0 14px 40px rgba(4, 10, 24, 0.22)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: "0.45rem",
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--color-hero-text)",
                    lineHeight: 1.35,
                    marginBottom: "0.35rem",
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: "0.84rem",
                    lineHeight: 1.6,
                    color: "var(--color-hero-muted)",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: photo — hidden on mobile */}
        {!isMobile && (
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              position: "relative",
              flexShrink: 0,
              paddingRight: "0.5rem",
              paddingBottom: "2.25rem",
            }}
          >
            <div
              style={{
                width: 340,
                height: 420,
                borderRadius: 28,
                overflow: "hidden",
                border: "1px solid var(--color-hero-border)",
                position: "relative",
                background: "rgba(255,255,255,0.06)",
                boxShadow: "0 28px 80px rgba(4, 10, 24, 0.36)",
              }}
            >
              <Image
                src="/hero_foto.jpeg"
                alt="Vojtěch Svoboda"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
                sizes="340px"
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(10, 20, 40, 0.05) 0%, transparent 35%, rgba(10, 20, 40, 0.4) 100%)",
                }}
              />
            </div>

            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 14,
                borderRadius: 28,
                border: "1px solid rgba(8, 184, 175, 0.15)",
                zIndex: -1,
              }}
            />
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "rgba(248, 251, 255, 0.6)",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 1,
              height: 40,
              backgroundColor: "rgba(248, 251, 255, 0.24)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent, var(--color-highlight), transparent)",
              }}
            />
          </span>
          Scroll
        </motion.div>
      </div>
    </section>
  );
}

function ContourBackground() {
  return (
    <svg
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.045,
        pointerEvents: "none",
      }}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="#55d2f0" strokeWidth="1" strokeLinecap="round">
        <ellipse cx="700" cy="420" rx="520" ry="340" />
        <ellipse cx="700" cy="420" rx="460" ry="295" />
        <ellipse cx="700" cy="415" rx="400" ry="255" />
        <ellipse cx="705" cy="410" rx="345" ry="218" />
        <ellipse cx="710" cy="405" rx="295" ry="184" />
        <ellipse cx="715" cy="400" rx="248" ry="154" />
        <ellipse cx="718" cy="396" rx="204" ry="127" />
        <ellipse cx="720" cy="392" rx="164" ry="103" />
        <ellipse cx="722" cy="388" rx="128" ry="82" />
        <ellipse cx="724" cy="385" rx="96" ry="63" />
        <ellipse cx="725" cy="382" rx="66" ry="45" />
        <ellipse cx="726" cy="380" rx="40" ry="28" />
        <ellipse cx="280" cy="280" rx="340" ry="200" />
        <ellipse cx="285" cy="278" rx="286" ry="168" />
        <ellipse cx="288" cy="276" rx="235" ry="140" />
        <ellipse cx="290" cy="274" rx="188" ry="114" />
        <ellipse cx="292" cy="272" rx="146" ry="90" />
        <ellipse cx="294" cy="270" rx="108" ry="68" />
        <ellipse cx="296" cy="268" rx="74" ry="47" />
        <ellipse cx="297" cy="266" rx="44" ry="29" />
        <line x1="0" y1="200" x2="1200" y2="200" strokeWidth="0.5" strokeDasharray="4 16" />
        <line x1="0" y1="400" x2="1200" y2="400" strokeWidth="0.5" strokeDasharray="4 16" />
        <line x1="0" y1="600" x2="1200" y2="600" strokeWidth="0.5" strokeDasharray="4 16" />
        <line x1="200" y1="0" x2="200" y2="800" strokeWidth="0.5" strokeDasharray="4 16" />
        <line x1="600" y1="0" x2="600" y2="800" strokeWidth="0.5" strokeDasharray="4 16" />
        <line x1="1000" y1="0" x2="1000" y2="800" strokeWidth="0.5" strokeDasharray="4 16" />
      </g>
    </svg>
  );
}
