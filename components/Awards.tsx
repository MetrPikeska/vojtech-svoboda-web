"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { awards, education, courses } from "@/lib/data";
import { useIsMobile } from "@/lib/hooks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="milniky"
      style={{
        padding: isMobile ? "4rem 1.25rem" : "7rem 2rem",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
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
          Milníky & vzdělání
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
            marginBottom: "4rem",
          }}
        >
          Milníky & Vzdělávání
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "3rem",
          }}
        >
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-warm)",
                marginBottom: "1.75rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Ocenění
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.375rem",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                    }}
                  >
                    {award.emoji}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        lineHeight: 1.35,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {award.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-muted)",
                      }}
                    >
                      {award.org} · {award.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-warm)",
                marginBottom: "1.75rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Vzdělání
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: 6,
                  top: 8,
                  bottom: 8,
                  width: 1,
                  backgroundColor: "var(--color-border)",
                }}
              />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  custom={i + 6}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    paddingBottom: i < education.length - 1 ? "1.75rem" : 0,
                    position: "relative",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      backgroundColor: edu.current ? "var(--color-accent)" : "#aab6c6",
                      border: edu.current
                        ? "2px solid var(--color-accent)"
                        : "2px solid #aab6c6",
                      flexShrink: 0,
                      marginTop: 4,
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: edu.current ? "var(--color-accent)" : "var(--color-muted)",
                        letterSpacing: "0.04em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {edu.period}
                      {edu.current && (
                        <span
                          style={{
                            marginLeft: "0.5rem",
                            fontSize: "0.6875rem",
                            backgroundColor: "var(--color-accent-soft)",
                            color: "var(--color-accent-strong)",
                            border: "1px solid var(--color-accent-border)",
                            borderRadius: 100,
                            padding: "0.1rem 0.5rem",
                            fontWeight: 600,
                          }}
                        >
                          Nyní
                        </span>
                      )}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        marginBottom: "0.125rem",
                      }}
                    >
                      {edu.degree ? `${edu.degree} ${edu.field}` : edu.field}
                    </p>
                    <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={9}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-warm)",
                marginBottom: "1.75rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Kurzy & Mezinárodní
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {courses.map((course, i) => (
                <motion.div
                  key={i}
                  custom={i + 10}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  style={{
                    padding: "1.125rem 1.25rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 14,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        lineHeight: 1.35,
                      }}
                    >
                      {course.title}
                    </p>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-muted)",
                        flexShrink: 0,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {course.year}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>
                    {course.provider}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
