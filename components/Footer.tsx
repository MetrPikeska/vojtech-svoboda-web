"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#081425",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "0.8125rem",
            color: "rgba(248,251,255,0.56)",
            letterSpacing: "0.02em",
          }}
        >
          © {year} Vojtěch Svoboda
        </p>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href="mailto:vojttas@gmail.com"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(248,251,255,0.56)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--color-highlight)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(248,251,255,0.56)")
            }
          >
            vojttas@gmail.com
          </a>
          <span
            aria-hidden
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              backgroundColor: "rgba(248,251,255,0.3)",
            }}
          />
          <a
            href="https://www.linkedin.com/in/vojt%C4%9Bch-svoboda-623956266/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(248,251,255,0.56)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--color-highlight)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(248,251,255,0.56)")
            }
          >
            LinkedIn
          </a>
          <span
            aria-hidden
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              backgroundColor: "rgba(248,251,255,0.3)",
            }}
          />
          <a
            href="https://github.com/SvobVojtech"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(248,251,255,0.56)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--color-highlight)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(248,251,255,0.56)")
            }
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
