"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/lib/hooks";

const navLinks = [
  { href: "#o-mne", label: "O mně" },
  { href: "#dovednosti", label: "Dovednosti" },
  { href: "#projekty", label: "Projekty" },
  { href: "#oceneni", label: "Ocenění" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile(768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const solidBg = scrolled || open;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        background: solidBg ? "rgba(250,250,248,0.97)" : "transparent",
        backdropFilter: solidBg ? "blur(12px)" : "none",
        WebkitBackdropFilter: solidBg ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E4E2DC" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(28,58,47,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.25rem",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "var(--font-display), Playfair Display, Georgia, serif",
            fontWeight: 500,
            fontSize: "1.125rem",
            color: "#1A1A18",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          VS
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#1C3A2F",
              flexShrink: 0,
            }}
          />
        </a>

        {/* Desktop nav — only rendered when not mobile */}
        {!isMobile && (
          <nav aria-label="Hlavní navigace" style={{ display: "flex", gap: "2rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#6B6860",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  padding: "0.25rem 0",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#1C3A2F")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#6B6860")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1A1A18",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && open && (
        <div
          style={{
            background: "rgba(250,250,248,0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid #E4E2DC",
            padding: "0.5rem 0 1rem",
          }}
        >
          <nav
            aria-label="Mobilní navigace"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#1A1A18",
                  textDecoration: "none",
                  padding: "0.875rem 1.5rem",
                  borderBottom: "1px solid #F2F1EE",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#F2F1EE";
                  (e.currentTarget as HTMLElement).style.color = "#1C3A2F";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1A1A18";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
