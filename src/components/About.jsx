import { useInView } from "../hooks/useInView";

const FACTS = [
  { icon: "🎓", label: "Focus", value: "Full-Stack / MERN" },
  { icon: "💡", label: "Passion", value: "Clean Code & UX" },
  { icon: "🌐", label: "Email", value: "bipindevb@email.com" },
  { icon: "📍", label: "Location", value: "India" },
];

const STATS = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "1", label: "Internship" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const [refLeft, inViewLeft] = useInView(0.2);
  const [refRight, inViewRight] = useInView(0.2);

  return (
    <section id="about" className="section section-alt">
      {/* Section title */}
      <SectionTitle eyebrow="Who I Am" heading="About Me" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "3.5rem", maxWidth: "960px", margin: "0 auto",
        alignItems: "center",
      }}>
        {/* Left – avatar + stats */}
        <div
          ref={refLeft}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem",
            opacity: inViewLeft ? 1 : 0,
            transform: inViewLeft ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          {/* Avatar */}
            <div
              style={{
                width: "265px",
                height: "320px",
                borderRadius: "28px",
                background: "linear-gradient(135deg, var(--accent-dim) 0%, transparent 100%)",
                border: "2px solid var(--accent-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(100,220,255,0.10)",
                animation: inViewLeft ? "pulse-glow 3s ease-in-out infinite" : "none",
                overflow: "hidden"
              }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "28px"
                }}
              />
            </div>

          {/* Stats row */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", width: "100%",
          }}>
            {STATS.map((s) => (
              <div key={s.label} className="card" style={{
                padding: "1rem", textAlign: "center", borderRadius: "12px",
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "1.5rem", color: "var(--accent)",
                  textShadow: "0 0 20px rgba(100,220,255,0.4)",
                }}>{s.value}</div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontWeight: 500, marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – text + facts */}
        <div
          ref={refRight}
          style={{
            opacity: inViewRight ? 1 : 0,
            transform: inViewRight ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.7s 0.15s, transform 0.7s 0.15s",
          }}
        >
          <p style={{
            fontSize: "1.04rem", lineHeight: 1.82,
            color: "var(--text-secondary)", marginBottom: "2rem",
          }}>
            I'm{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Bipin Dev B</strong>
            , a passionate developer deeply interested in full-stack web development using the MERN stack. I enjoy writing clean, efficient code and solving real-world problems through technology — creating solutions that are both functional and deliver an exceptional user experience.
          </p>
          <p style={{
            fontSize: "1.04rem", lineHeight: 1.82,
            color: "var(--text-secondary)", marginBottom: "2rem",
          }}>
            I focus on building modern web applications that are accessible, performant, and visually engaging. Always learning, always building.
          </p>

          {/* Fact grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className="card"
                style={{
                  padding: "0.9rem 1.1rem", borderRadius: "12px",
                  opacity: inViewRight ? 1 : 0,
                  transform: inViewRight ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ${0.2 + i * 0.08}s, transform 0.5s ${0.2 + i * 0.08}s`,
                }}
              >
                <div style={{ fontSize: "1.2rem" }}>{f.icon}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.08em", marginTop: "3px" }}>{f.label}</div>
                <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--text-primary)", marginTop: "1px" }}>{f.value}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "1.8rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://github.com/Bipindev01"
              target="_blank" rel="noreferrer"
              className="btn-primary"
              style={{ textDecoration: "none", fontSize: "0.88rem", padding: "11px 24px" }}
            >
              ⌨ GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/bipindevb"
              target="_blank" rel="noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.88rem", padding: "9px 22px" }}
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable SectionTitle – exported for use in other components too
export function SectionTitle({ eyebrow, heading, sub }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      className="section-title-wrap"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s, transform 0.7s",
      }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{heading}</h2>
      {sub && <p className="section-sub">{sub}</p>}
      <div className="section-divider" />
    </div>
  );
}
