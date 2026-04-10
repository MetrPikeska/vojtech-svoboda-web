"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { useIsMobile } from "@/lib/hooks";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = projects;

  return (
    <section
      id="projekty"
      style={{
        padding: isMobile ? "4rem 1.25rem" : "7rem 2rem",
        background: "#FAFAF8",
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
          Projekty
        </motion.p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
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
              maxWidth: "18ch",
            }}
          >
            Vybrané práce
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontSize: "0.875rem",
              color: "#8C8070",
              maxWidth: "30ch",
              textAlign: "right",
              lineHeight: 1.6,
            }}
          >
            GIS analýzy, kartografické projekty a prostorová statistika
          </motion.p>
        </div>

        {/* Featured project — wide card */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: "1.5rem" }}
        >
          <ProjectCard project={featured} featured />
        </motion.div>

        {/* Rest — 3-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i + 4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const isMobile = useIsMobile(768);
  const hasLink = !!project.href;
  const hasMultiLinks = !!(project.links && project.links.length > 0);
  const clickable = hasLink && !hasMultiLinks;
  const isRow = featured && !isMobile;

  const inner = (
    <motion.article
      whileHover={{ y: hasLink || hasMultiLinks ? -4 : -2 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        background: "#FAFAF8",
        border: "1px solid #E4E2DC",
        borderRadius: 16,
        padding: isMobile ? "1.25rem" : featured ? "2.5rem" : "1.75rem",
        height: "100%",
        display: "flex",
        flexDirection: isRow ? ("row" as const) : ("column" as const),
        gap: isRow ? "3rem" : "1rem",
        transition: "box-shadow 0.25s, border-color 0.25s",
        cursor: clickable ? "pointer" : "default",
        alignItems: isRow ? "flex-start" : undefined,
        position: "relative",
        overflow: "hidden",
      }}
      onHoverStart={(e) => {
        const el = e.target as HTMLElement;
        const article = el.closest("article");
        if (article) {
          article.style.boxShadow = "0 8px 32px rgba(28,58,47,0.11)";
          article.style.borderColor = "#C8D8CC";
        }
      }}
      onHoverEnd={(e) => {
        const el = e.target as HTMLElement;
        const article = el.closest("article");
        if (article) {
          article.style.boxShadow = "none";
          article.style.borderColor = "#E4E2DC";
        }
      }}
    >
      {/* Decorative index number */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: featured ? "1.5rem" : "1.25rem",
          right: featured ? "2rem" : "1.5rem",
          fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
          fontSize: featured ? "5rem" : "3.5rem",
          fontWeight: 400,
          color: "#1C3A2F",
          opacity: 0.04,
          lineHeight: 1,
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}
      >
        {String(project.id).padStart(2, "0")}
      </span>

      {/* Left / top content */}
      <div
        style={{
          flex: isRow ? "0 0 auto" : undefined,
          width: isRow ? "clamp(200px, 35%, 320px)" : undefined,
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8C8070",
            marginBottom: "0.75rem",
          }}
        >
          {project.subtitle}
        </p>

        <h3
          style={{
            fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
            fontSize: featured ? "clamp(1.375rem, 2.5vw, 1.875rem)" : "1.1875rem",
            fontWeight: 500,
            color: "#1A1A18",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            marginBottom: featured ? "0" : "0.75rem",
          }}
        >
          {project.title}
        </h3>

        {project.award && isRow && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginTop: "1rem",
              backgroundColor: "#EBF0EC",
              border: "1px solid #C8D8CC",
              borderRadius: 100,
              padding: "0.35rem 0.875rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#1C3A2F",
            }}
          >
            {project.award}
          </div>
        )}
      </div>

      {/* Right / bottom content */}
      <div style={{ flex: 1 }}>
        {project.award && !isRow && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "0.75rem",
              backgroundColor: "#EBF0EC",
              border: "1px solid #C8D8CC",
              borderRadius: 100,
              padding: "0.3rem 0.75rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#1C3A2F",
            }}
          >
            {project.award}
          </div>
        )}

        <p
          style={{
            fontSize: "0.9375rem",
            color: "#6B6860",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
            marginBottom: hasLink || hasMultiLinks ? "1.25rem" : 0,
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#6B6860",
                backgroundColor: "#F2F1EE",
                border: "1px solid #E4E2DC",
                borderRadius: 4,
                padding: "0.2rem 0.6rem",
                letterSpacing: "0.01em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Multi-links */}
        {hasMultiLinks && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.links!.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#1C3A2F",
                  backgroundColor: "#EBF0EC",
                  border: "1px solid #C8D8CC",
                  borderRadius: 6,
                  padding: "0.35rem 0.75rem",
                  textDecoration: "none",
                  transition: "background 0.15s, border-color 0.15s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#D4E8DA";
                  (e.currentTarget as HTMLElement).style.borderColor = "#A8C8B4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#EBF0EC";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C8D8CC";
                }}
              >
                {link.label}
                <ArrowUpRight size={13} strokeWidth={2} />
              </a>
            ))}
          </div>
        )}

        {/* Single link */}
        {clickable && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#1C3A2F",
              letterSpacing: "0.01em",
            }}
          >
            Zobrazit práci
            <ArrowUpRight size={15} strokeWidth={2} />
          </div>
        )}
      </div>
    </motion.article>
  );

  if (clickable) {
    return (
      <a
        href={project.href!}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block", height: "100%" }}
        aria-label={`Otevřít projekt: ${project.title}`}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
