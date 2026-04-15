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
            className="text-link"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(248,251,255,0.7)",
            }}
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
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(248,251,255,0.7)",
            }}
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
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(248,251,255,0.7)",
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
