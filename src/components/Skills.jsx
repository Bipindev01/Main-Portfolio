import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

const SKILLS = [
  { name: "HTML5", level: 92, icon: "🌐", category: "Frontend" },
  { name: "CSS3", level: 88, icon: "🎨", category: "Frontend" },
  { name: "JavaScript", level: 82, icon: "⚡", category: "Frontend" },
  { name: "React.js", level: 75, icon: "⚛️", category: "Frontend" },
  { name: "Bootstrap", level: 84, icon: "🅱️", category: "Frontend" },
  { name: "Tailwind CSS", level: 80, icon: "💨", category: "Frontend" },
  { name: "Node.js", level: 76, icon: "🟢", category: "Backend" },
  { name: "Express.js", level: 74, icon: "🚂", category: "Backend" },
  { name: "MongoDB", level: 72, icon: "🍃", category: "Backend" },
  { name: "Python", level: 65, icon: "🐍", category: "Other" },
  { name: "C Programming", level: 68, icon: "🔧", category: "Other" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Other"];

function SkillBar({ name, level, icon, delay, active }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: active ? (inView ? 1 : 0) : 0,
        transform: active ? (inView ? "translateY(0)" : "translateY(16px)") : "translateY(16px)",
        transition: `opacity 0.5s ${delay}s, transform 0.5s ${delay}s`,
        marginBottom: "1.5rem",
      }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: "8px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1.1rem" }}>{icon}</span>
          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>{name}</span>
        </div>
        <span style={{
          fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)",
          background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
          borderRadius: "6px", padding: "2px 9px",
        }}>{level}%</span>
      </div>

      {/* Track */}
      <div style={{
        height: "7px", borderRadius: "4px",
        background: "rgba(255,255,255,0.07)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Shimmer background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2.5s infinite",
        }} />
        {/* Fill */}
        <div style={{
          height: "100%", borderRadius: "4px",
          background: "linear-gradient(90deg, var(--accent), rgba(56,189,248,0.7))",
          width: active && inView ? `${level}%` : "0%",
          transition: `width 1.2s ${delay + 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`,
          boxShadow: inView ? "0 0 10px rgba(100,220,255,0.5), 0 0 20px rgba(100,220,255,0.2)" : "none",
          position: "relative",
        }}>
          {/* Glint */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "4px", height: "100%",
            background: "rgba(255,255,255,0.8)",
            borderRadius: "2px",
            opacity: inView ? 1 : 0,
            transition: `opacity 0.3s ${delay + 1.2}s`,
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView(0.1);

  const filtered = activeCategory === "All" ? SKILLS : SKILLS.filter((s) => s.category === activeCategory);
  const half = Math.ceil(filtered.length / 2);

  return (
    <section id="skills" className="section">
      <SectionTitle
        eyebrow="My Expertise"
        heading="Skills & Technologies"
        sub="Technologies I work with to build modern web experiences"
      />

      {/* Category filter */}
      <div
        ref={ref}
        style={{
          display: "flex", justifyContent: "center", gap: "0.6rem",
          marginBottom: "3rem", flexWrap: "wrap",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s, transform 0.6s",
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.82rem", letterSpacing: "0.06em",
              padding: "7px 18px", borderRadius: "100px", cursor: "pointer",
              border: "1px solid",
              borderColor: activeCategory === cat ? "var(--accent)" : "var(--border)",
              background: activeCategory === cat ? "var(--accent-dim)" : "transparent",
              color: activeCategory === cat ? "var(--accent)" : "var(--text-secondary)",
              transition: "all 0.25s",
              transform: activeCategory === cat ? "scale(1.05)" : "scale(1)",
              boxShadow: activeCategory === cat ? "0 0 16px rgba(100,220,255,0.18)" : "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill bars grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "0 3rem", maxWidth: "960px", margin: "0 auto",
      }}>
        <div>
          {filtered.slice(0, half).map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 0.07} active={true} />
          ))}
        </div>
        <div>
          {filtered.slice(half).map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 0.07} active={true} />
          ))}
        </div>
      </div>

      {/* Tech badges */}
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Also familiar with
        </p>
        <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap" }}>
          {["Git", "GitHub", "REST APIs", "Postman", "VS Code", "Figma"].map((t) => (
            <span key={t} className="tag" style={{ fontSize: "0.76rem", padding: "4px 13px" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
