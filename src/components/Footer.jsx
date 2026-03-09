const NAV_LINKS = ["home", "about", "skills", "services", "projects", "certificates", "contact"];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 5vw 1.5rem",
    }}>
      <div style={{
        maxWidth: "960px", margin: "0 auto",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "1.4rem",
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem",
          color: "var(--accent)", letterSpacing: "0.02em",
        }}>
          Ɔㄣᗡ
        </span>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap", justifyContent: "center" }}>
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
                fontWeight: 500, textTransform: "capitalize",
                color: "var(--text-muted)", cursor: "pointer",
                transition: "color 0.2s",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => { e.target.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.target.style.color = "var(--text-muted)"; }}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "var(--border)" }} />

        {/* Copyright */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
          color: "var(--text-muted)", textAlign: "center",
        }}>
          Designed & Built with ❤️ by{" "}
          <span style={{ color: "var(--accent)", fontWeight: 700 }}>Bipin Dev B</span>
          {" "}· {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
