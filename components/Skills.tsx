"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { useIsMobile } from "@/lib/hooks";
import { Globe, BarChart2, Database, MapPin, Layers } from "lucide-react";

const groupIcons = [BarChart2, MapPin, Globe, Database, Layers];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dovednosti"
      style={{
        padding: isMobile ? "4rem 1.25rem" : "7rem 2rem",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
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
          Dovednosti
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 500,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
            maxWidth: "16ch",
          }}
        >
          Analytický a GIS stack
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--color-muted)",
            maxWidth: "62ch",
            marginBottom: "3rem",
          }}
        >
          Nejbližší je mi kombinace statistiky, datové analýzy a prostorových dat.
          Níže jsou oblasti, ve kterých mám největší jistotu a které chci dál
          rozvíjet i profesně.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.1rem",
          }}
        >
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i] ?? Globe;
            return (
              <motion.div
                key={group.id}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 18,
                  padding: "1.75rem",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  cursor: "default",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
                  borderColor: "var(--color-accent-border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: "var(--color-accent-soft)",
                      border: "1px solid var(--color-accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="var(--color-accent)" strokeWidth={1.75} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      fontFamily: "DM Sans, system-ui, sans-serif",
                    }}
                  >
                    {group.label}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--color-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  {group.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--color-accent-strong)",
                        backgroundColor: "var(--color-chip)",
                        border: "1px solid var(--color-chip-border)",
                        borderRadius: 100,
                        padding: "0.3rem 0.75rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
