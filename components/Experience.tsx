"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import { experience } from "@/lib/data";
import { useIsMobile } from "@/lib/hooks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="zkusenosti"
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
          Zkušenosti
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
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
                lineHeight: 1.1,
                marginBottom: "1.25rem",
                maxWidth: "14ch",
              }}
            >
              Krátce k praxi mimo školu
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
                maxWidth: "52ch",
              }}
            >
              Vedle univerzitních projektů mám zkušenost i s datově organizovanou
              prací ve sportovní analytice a krátkou praxí v geodézii. I tyhle role
              pro mě byly důležité hlavně v přesnosti, disciplíně a práci s daty.
            </motion.p>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {experience.map((item, i) => (
              <motion.article
                key={`${item.role}-${item.period}`}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{
                  y: -3,
                  boxShadow: "0 16px 40px rgba(7, 22, 41, 0.08)",
                }}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 18,
                  padding: isMobile ? "1.25rem" : "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: "var(--color-accent-soft)",
                        border: "1px solid var(--color-accent-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <BriefcaseBusiness size={18} color="var(--color-accent)" />
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-warm)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        {item.period}
                      </p>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          lineHeight: 1.35,
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.role}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    color="var(--color-accent)"
                    style={{ flexShrink: 0, marginTop: 4 }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "var(--color-muted)",
                  }}
                >
                  {item.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--color-highlight)",
                        background: "var(--color-chip)",
                        border: "1px solid var(--color-accent)",
                        borderRadius: 999,
                        padding: "0.28rem 0.7rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
