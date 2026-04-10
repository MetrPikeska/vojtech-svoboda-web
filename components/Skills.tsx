"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Globe, Code2, Database, MapPin, Layers } from "lucide-react";

const groupIcons = [Globe, Code2, Database, MapPin, Layers];

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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dovednosti"
      style={{
        padding: "7rem 2rem",
        background: "#F2F1EE",
        borderTop: "1px solid #E4E2DC",
        borderBottom: "1px solid #E4E2DC",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        {/* Label */}
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
            color: "#1A1A18",
            letterSpacing: "-0.02em",
            marginBottom: "3.5rem",
            maxWidth: "20ch",
          }}
        >
          Co umím a s čím pracuji
        </motion.h2>

        {/* Skill groups grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i] ?? Globe;
            return (
              <motion.div
                key={group.id}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  background: "#FAFAF8",
                  border: "1px solid #E4E2DC",
                  borderRadius: 14,
                  padding: "1.75rem",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  cursor: "default",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 28px rgba(28,58,47,0.1)",
                  borderColor: "#C8D8CC",
                }}
              >
                {/* Group header */}
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
                      borderRadius: 8,
                      backgroundColor: "#EBF0EC",
                      border: "1px solid #C8D8CC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="#1C3A2F" strokeWidth={1.75} />
                  </div>
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#1A1A18",
                      fontFamily: "DM Sans, system-ui, sans-serif",
                    }}
                  >
                    {group.label}
                  </h3>
                </div>

                {/* Skills pills */}
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
                        fontWeight: 500,
                        color: "#4A4840",
                        backgroundColor: "#F2F1EE",
                        border: "1px solid #E4E2DC",
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
