"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink, Send } from "lucide-react";
import { useIsMobile } from "@/lib/hooks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  borderRadius: 10,
  border: "1.5px solid var(--color-border)",
  background: "var(--color-bg)",
  fontSize: "0.9375rem",
  color: "var(--color-text)",
  outline: "none",
  fontFamily: "DM Sans, system-ui, sans-serif",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Zpráva od ${form.name || "návštěvníka webu"}`
    );
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:vojttas@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="kontakt"
      style={{
        padding: isMobile ? "4rem 1.25rem" : "7rem 2rem",
        background:
          "linear-gradient(135deg, var(--color-hero) 0%, #0a1220 60%, #0f1319 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle contour bg */}
      <ContactBg />

      <div
        style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
        ref={ref}
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
          Kontakt
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: headline + links */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 500,
                color: "var(--color-hero-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Pojďme
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-highlight)" }}>
                spolupracovat
              </em>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                fontSize: "1rem",
                color: "var(--color-hero-muted)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "44ch",
              }}
            >
              Pokud řešíš GIS, prostorová data, analytický projekt nebo hledáš někoho
              na stáž či spolupráci, ozvi se. Nejblíž mám datové analýze se spatial
              přesahem.
            </motion.p>

            {/* Direct links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  icon: Mail,
                  label: "vojttas@gmail.com",
                  href: "mailto:vojttas@gmail.com",
                  i: 3,
                },
                {
                  icon: ExternalLink,
                  label: "linkedin.com/in/vojtěch-svoboda",
                  href: "https://www.linkedin.com/in/vojt%C4%9Bch-svoboda-623956266/",
                  i: 4,
                },
                {
                  icon: ExternalLink,
                  label: "github.com/SvobVojtech",
                  href: "https://github.com/SvobVojtech",
                  i: 5,
                },
              ].map(({ icon: Icon, label, href, i }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "rgba(248, 251, 255, 0.88)",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  whileHover={{ color: "#ffffff" } as never}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: "1px solid var(--color-hero-border)",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid var(--color-hero-border)",
                borderRadius: 20,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#b5c4da",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Jméno
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jan Novák"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      ...inputStyle,
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: "var(--color-hero-text)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--color-highlight)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.14)")
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#b5c4da",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="jan@firma.cz"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      ...inputStyle,
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: "var(--color-hero-text)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--color-highlight)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.14)")
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#b5c4da",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Zpráva
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="O co jde, co hledáš…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{
                    ...inputStyle,
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.14)",
                    color: "var(--color-hero-text)",
                    resize: "vertical",
                    minHeight: 120,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-highlight)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.14)")
                  }
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--color-highlight)",
                  color: "#000000",
                  padding: "0.875rem 1.75rem",
                  borderRadius: 999,
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.2s",
                  fontFamily: "DM Sans, system-ui, sans-serif",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "var(--color-highlight)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "var(--color-accent)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }}
              >
                <Send size={15} strokeWidth={2} />
                Odeslat zprávu
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactBg() {
  return (
    <svg
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.06,
        pointerEvents: "none",
      }}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="#7ce9dc" strokeWidth="1">
        <ellipse cx="900" cy="300" rx="500" ry="280" />
        <ellipse cx="900" cy="300" rx="420" ry="235" />
        <ellipse cx="902" cy="298" rx="345" ry="192" />
        <ellipse cx="904" cy="296" rx="274" ry="153" />
        <ellipse cx="906" cy="294" rx="208" ry="116" />
        <ellipse cx="908" cy="292" rx="148" ry="84" />
        <ellipse cx="910" cy="290" rx="94" ry="55" />
        <ellipse cx="160" cy="480" rx="300" ry="180" />
        <ellipse cx="162" cy="478" rx="240" ry="145" />
        <ellipse cx="164" cy="476" rx="182" ry="112" />
        <ellipse cx="166" cy="474" rx="128" ry="80" />
      </g>
    </svg>
  );
}
