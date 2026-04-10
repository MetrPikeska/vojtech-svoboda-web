"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E4E2DC" : "1px solid transparent",
        boxShadow: scrolled
          ? "0 1px 12px rgba(28,58,47,0.06)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontWeight: 500,
            fontSize: "1.125rem",
            color: "#1A1A18",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          VS
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#1C3A2F",
              marginLeft: 4,
              marginBottom: 2,
              verticalAlign: "middle",
            }}
          />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Hlavní navigace"
          style={{ display: "flex", gap: "2rem" }}
          className="hidden md:flex"
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
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#6B6860",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1A1A18",
            padding: 8,
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(250,250,248,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid #E4E2DC",
            padding: "1.25rem 2rem 1.5rem",
          }}
        >
          <nav
            aria-label="Mobilní navigace"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
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
