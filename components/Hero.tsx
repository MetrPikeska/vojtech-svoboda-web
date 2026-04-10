"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#FAFAF8",
        overflow: "hidden",
      }}
    >
      {/* Contour lines SVG background */}
      <ContourBackground />

      {/* Gradient vignette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #FAFAF8 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8rem 2rem 6rem",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#1C3A2F",
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
              backgroundColor: "#1C3A2F",
              flexShrink: 0,
            }}
          />
          Geoinformatik · Prostorová data · Kartografie
        </motion.p>

        {/* Main heading */}
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
            color: "#1A1A18",
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
            maxWidth: "14ch",
          }}
        >
          Vojtěch{" "}
          <em style={{ fontStyle: "italic", color: "#1C3A2F" }}>Svoboda</em>
        </motion.h1>

        {/* Perex */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.1875rem)",
            color: "#6B6860",
            lineHeight: 1.7,
            maxWidth: "52ch",
            marginBottom: "3rem",
          }}
        >
          MSc student geoinformatiky na UPOL. Pracuji s prostorovými daty, GIS
          analýzou a kartografickou vizualizací. Hledám zajímavé projekty a
          spolupráci.
        </motion.p>

        {/* CTAs */}
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
              backgroundColor: "#1C3A2F",
              color: "#FAFAF8",
              padding: "0.875rem 2rem",
              borderRadius: 8,
              fontSize: "0.9375rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#2D5C48";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#1C3A2F";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Projekty
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
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
              backgroundColor: "transparent",
              color: "#1A1A18",
              padding: "0.875rem 2rem",
              borderRadius: 8,
              fontSize: "0.9375rem",
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #C8C4BC",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#1C3A2F";
              (e.currentTarget as HTMLElement).style.color = "#1C3A2F";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC";
              (e.currentTarget as HTMLElement).style.color = "#1A1A18";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Kontakt
          </a>
        </motion.div>

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
            color: "#A8A49E",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 1,
              height: 40,
              backgroundColor: "#C8C4BC",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent, #1C3A2F, transparent)",
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
      {/* Contour lines — terrain-inspired */}
      <g
        fill="none"
        stroke="#1C3A2F"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* Outer rings */}
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
        {/* Second peak */}
        <ellipse cx="280" cy="280" rx="340" ry="200" />
        <ellipse cx="285" cy="278" rx="286" ry="168" />
        <ellipse cx="288" cy="276" rx="235" ry="140" />
        <ellipse cx="290" cy="274" rx="188" ry="114" />
        <ellipse cx="292" cy="272" rx="146" ry="90" />
        <ellipse cx="294" cy="270" rx="108" ry="68" />
        <ellipse cx="296" cy="268" rx="74" ry="47" />
        <ellipse cx="297" cy="266" rx="44" ry="29" />
        {/* Horizontal grid lines subtle */}
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
