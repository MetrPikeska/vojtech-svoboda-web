"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BarChart3, Database, Map } from "lucide-react";
import { useIsMobile } from "@/lib/hooks";

const values = [
  {
    icon: BarChart3,
    label: "Prostorová data",
    desc: "Nejvíc mě zajímá práce s daty, která dávají smysl až ve chvíli, kdy je čtu i v prostoru.",
  },
  {
    icon: Map,
    label: "Datová analýza",
    desc: "Baví mě čistit data, zkoumat vztahy, vizualizovat výsledky a hledat v nich čitelný příběh.",
  },
  {
    icon: Database,
    label: "GIS",
    desc: "Na analýzu navazuji GIS workflow, kartografií a publikací výsledků do mapových výstupů.",
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
  const isMobile = useIsMobile();

  return (
    <section
      id="o-mne"
      ref={ref}
      style={{
        padding: isMobile ? "4rem 1.25rem" : "7rem 2rem",
        background: "var(--color-bg)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
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
            backgroundColor: "var(--color-accent)",
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
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                flexShrink: 0,
                border: "2px solid var(--color-accent-border)",
                position: "relative",
                overflow: "hidden",
                background: "var(--color-accent-soft)",
              }}
            >
              <Image
                src="/hero_foto.jpeg"
                alt="Vojtěch Svoboda"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="96px"
              />
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.25rem",
                }}
              >
                Vojtěch Svoboda
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>
                Student magisterského oboru Geoinformatika a kartografie · UPOL Olomouc
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
              color: "var(--color-muted)",
              maxWidth: "58ch",
            }}
          >
            Jsem studentem magisterského programu{" "}
            <strong style={{ color: "var(--color-text)", fontWeight: 700 }}>
              Geoinformatika a kartografie
            </strong>{" "}
            na Univerzitě Palackého v Olomouci. Nejvíc mě táhne datová analýza ve
            spojení s prostorovými daty, kde pracuji hlavně s balíčky jako{" "}
            <strong style={{ color: "var(--color-text)", fontWeight: 700 }}>
              pandas, geopandas a matplotlib
            </strong>
            , případně s dalšími nástroji pro zpracování, vizualizaci a základní
            modelování dat.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--color-muted)",
              maxWidth: "58ch",
              marginTop: "1rem",
            }}
          >
            Tenhle analytický směr jsem rozvíjel i v bakalářské práci a dalších
            akademických projektech. Dlouhodobě se chci věnovat oblastem, kde se
            potkává{" "}
            <strong style={{ color: "var(--color-highlight)", fontWeight: 700 }}>
              datová analýza s prostorovými daty
            </strong>{" "}
            — od explorace a modelování až po kartografickou interpretaci výsledků.
            Právě za práci s mobilními daty v bakalářské práci jsem získal{" "}
            <strong style={{ color: "var(--color-accent)", fontWeight: 700 }}>
              1. místo v soutěži GISáček
            </strong>{" "}
            na VŠB–TUO Ostrava.
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--color-muted)",
              maxWidth: "58ch",
              marginTop: "1rem",
            }}
          >
            Vedle analýzy mám zkušenost i se{" "}
            <strong style={{ color: "var(--color-text)", fontWeight: 700 }}>
              SQL, PostgreSQL, návrhem databází a prostorovými databázemi
            </strong>
            . V GISu stojím hlavně na ArcGIS Pro, ArcGIS Online, tematické
            kartografii a vizualizaci analytických výstupů. Mimo školu mě formuje i
            trading, správa dat a práce s video obsahem.
          </motion.p>
        </div>

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
                custom={i + 5}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.5rem",
                  borderRadius: 18,
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="var(--color-accent)" strokeWidth={1.75} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {v.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                    }}
                  >
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
