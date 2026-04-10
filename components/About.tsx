"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, BarChart2, Brain } from "lucide-react";

const values = [
  {
    icon: Target,
    label: "Přesnost",
    desc: "Každý prostorový výstup musí obstát při kritickém pohledu.",
  },
  {
    icon: BarChart2,
    label: "Vizualizace",
    desc: "Data mluví teprve tehdy, když jsou správně zobrazena.",
  },
  {
    icon: Brain,
    label: "Data-driven",
    desc: "Rozhodnutí podložená analýzou, ne intuicí.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="o-mne"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        background: "#FAFAF8",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#1C3A2F",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 24,
            height: 1.5,
            backgroundColor: "#1C3A2F",
          }}
        />
        O mně
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Photo + text */}
        <div>
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {/* Photo placeholder */}
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #EBF0EC 0%, #C8D8CC 100%)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #D4DDD6",
                position: "relative",
                overflow: "hidden",
              }}
              aria-label="Fotografie Vojtěcha Svobody"
              role="img"
            >
              <span
                style={{
                  fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "#1C3A2F",
                  opacity: 0.7,
                }}
              >
                VS
              </span>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 500,
                  color: "#1A1A18",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.25rem",
                }}
              >
                Vojtěch Svoboda
              </h2>
              <p style={{ fontSize: "0.875rem", color: "#6B6860" }}>
                MSc Geoinformatika · UPOL Olomouc
              </p>
            </div>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4A4840",
              maxWidth: "58ch",
            }}
          >
            Jsem student magisterského programu{" "}
            <strong style={{ color: "#1A1A18", fontWeight: 600 }}>
              Geoinformatika a Kartografie
            </strong>{" "}
            na Palackého univerzitě v Olomouci. Specializuji se na prostorovou
            statistiku, analýzu geodat a tvorbu kartografických výstupů.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4A4840",
              maxWidth: "58ch",
              marginTop: "1rem",
            }}
          >
            Svou bakalářskou prací o distribuci populace z dat mobilních
            operátorů jsem získal{" "}
            <strong style={{ color: "#1C3A2F", fontWeight: 600 }}>
              1.&nbsp;místo v soutěži GISáček
            </strong>{" "}
            na VŠB–TUO Ostrava. Mimo akademickou půdu obchoduji na finančních
            trzích a pracuji jako správce video obsahu ve fotbalové analytické
            firmě.
          </motion.p>
        </div>

        {/* Values */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            paddingTop: "0.5rem",
          }}
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.label}
                custom={i + 4}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.5rem",
                  borderRadius: 12,
                  background: "#F2F1EE",
                  border: "1px solid #E4E2DC",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "#EBF0EC",
                    border: "1px solid #C8D8CC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#1C3A2F" strokeWidth={1.75} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#1A1A18",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {v.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6B6860", lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
