export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#141F1A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
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
            color: "#4A6050",
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
              color: "#4A6050",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#A8D4BA")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#4A6050")
            }
          >
            vojttas@gmail.com
          </a>
          <span
            aria-hidden
            style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "#4A6050" }}
          />
          <a
            href="https://linkedin.com/in/vojtěch-svoboda-623956266"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "#4A6050",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#A8D4BA")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#4A6050")
            }
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
