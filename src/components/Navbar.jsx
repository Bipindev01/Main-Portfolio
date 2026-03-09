import { useState, useEffect } from "react";

const NAV_LINKS = ["home", "about", "skills", "services", "projects", "certificates", "contact"];

export default function Navbar({ dark, toggleDark, active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          height: "64px",
          background: scrolled
            ? dark ? "rgba(8,12,24,0.90)" : "rgba(240,246,255,0.90)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? dark ? "1px solid rgba(100,220,255,0.10)" : "1px solid rgba(2,132,199,0.12)"
            : "none",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 5vw",
          transition: "background 0.4s, border 0.4s, backdrop-filter 0.4s",
        }}
      >
        {/* Logo */}
        <span
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem",
            color: "var(--accent)", cursor: "pointer", letterSpacing: "0.02em",
            userSelect: "none",
          }}
        >
          Ɔㄣᗡ
        </span>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink key={link} label={link} active={active === link} onClick={() => scrollTo(link)} />
          ))}
          <ThemeToggle dark={dark} toggle={toggleDark} />
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }} className="nav-hamburger">
          <ThemeToggle dark={dark} toggle={toggleDark} />
          <button
            onClick={() => setOpen((o) => !o)}
            style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "8px", width: "38px", height: "38px",
              cursor: "pointer", color: "var(--accent)", fontSize: "1.1rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 199,
          background: dark ? "rgba(8,12,24,0.97)" : "rgba(240,246,255,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: dark ? "1px solid rgba(100,220,255,0.10)" : "1px solid rgba(2,132,199,0.12)",
          padding: open ? "1.5rem 5vw 2rem" : "0 5vw",
          maxHeight: open ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.4s",
          display: "flex", flexDirection: "column", gap: "0",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: "none", border: "none",
              borderBottom: dark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              padding: "13px 0", cursor: "pointer", textAlign: "left",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "1rem", textTransform: "capitalize",
              color: active === link ? "var(--accent)" : "var(--text-secondary)",
              transition: "color 0.2s",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: `${i * 0.04}s`,
              transitionProperty: "opacity, transform, color",
              transitionDuration: "0.35s",
            }}
          >
            {active === link && <span style={{ marginRight: "8px" }}>▸</span>}
            {link}
          </button>
        ))}
      </div>
    </>
  );
}

function NavLink({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
        fontWeight: active ? 700 : 500,
        textTransform: "capitalize", cursor: "pointer",
        letterSpacing: "0.06em",
        color: active || hovered ? "var(--accent)" : "var(--text-secondary)",
        position: "relative", paddingBottom: "3px",
        transition: "color 0.2s",
        userSelect: "none",
      }}
    >
      {label}
      <span style={{
        position: "absolute", bottom: 0, left: 0,
        height: "2px", borderRadius: "1px",
        background: "var(--accent)",
        width: active ? "100%" : hovered ? "100%" : "0%",
        transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: active ? "0 0 8px var(--accent)" : "none",
      }} />
    </span>
  );
}

function ThemeToggle({ dark, toggle }) {
  return (
    <button
      onClick={toggle}
      title={dark ? "Light mode" : "Dark mode"}
      style={{
        background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
        borderRadius: "8px", width: "36px", height: "36px",
        cursor: "pointer", color: "var(--accent)", fontSize: "0.95rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s",
        transform: "rotate(0deg)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(20deg) scale(1.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1)"; }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
