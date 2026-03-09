import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

const SERVICES = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Building modern, performant, and responsive websites using React, Node.js, and the full MERN stack. From landing pages to full web apps.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    highlight: false,
  },
  {
    icon: "⚙️",
    title: "Backend API Development",
    desc: "Creating scalable, secure, and well-documented REST APIs using Node.js and Express. Authentication, database design, and server-side logic.",
    tags: ["Express.js", "Auth", "JWT", "MongoDB"],
    highlight: true,
  },
  {
    icon: "📱",
    title: "Mobile Responsive Design",
    desc: "Designing and developing websites optimized for all screen sizes — from phones to desktops — using CSS Grid, Flexbox, Bootstrap, and Tailwind.",
    tags: ["Tailwind CSS", "Bootstrap", "CSS Grid", "Flexbox"],
    highlight: false,
  },
];

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        background: service.highlight ? "var(--accent-dim)" : "var(--surface)",
        border: `1px solid ${service.highlight ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "20px",
        padding: "2.2rem 1.8rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ${index * 0.13}s, transform 0.65s ${index * 0.13}s, border 0.3s, box-shadow 0.3s, background 0.3s`,
        cursor: "default",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid var(--accent)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(100,220,255,0.12)";
        e.currentTarget.style.background = service.highlight ? "rgba(100,220,255,0.14)" : "var(--surface-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${service.highlight ? "var(--accent)" : "var(--border)"}`;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = service.highlight ? "var(--accent-dim)" : "var(--surface)";
      }}
    >
      {/* Top corner glow for highlighted card */}
      {service.highlight && (
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "120px", height: "120px",
          background: "radial-gradient(circle at top right, rgba(100,220,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      )}

      {/* Popular badge */}
      {service.highlight && (
        <div style={{
          position: "absolute", top: "1.2rem", right: "1.2rem",
          background: "var(--accent)", color: "var(--bg)",
          fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em",
          padding: "3px 10px", borderRadius: "100px",
          textTransform: "uppercase",
        }}>
          Popular
        </div>
      )}

      {/* Icon */}
      <div style={{
        width: "54px", height: "54px", borderRadius: "14px",
        background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.6rem", marginBottom: "1.3rem",
      }}>
        {service.icon}
      </div>

      <h3 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        fontSize: "1.12rem", color: "var(--text-primary)",
        marginBottom: "0.7rem",
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: "0.9rem", lineHeight: 1.75,
        color: "var(--text-secondary)", marginBottom: "1.4rem",
      }}>
        {service.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
        {service.tags.map((t) => (
          <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>{t}</span>
        ))}
      </div>

      {/* Bottom line accent */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "3px",
        background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
        opacity: 0.4,
      }} />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <SectionTitle
        eyebrow="What I Do"
        heading="Services"
        sub="How I can help bring your ideas to life"
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
        gap: "1.6rem", maxWidth: "1000px", margin: "0 auto",
      }}>
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
