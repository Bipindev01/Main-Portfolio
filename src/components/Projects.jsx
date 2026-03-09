import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

const PROJECTS = [
  {
    icon: "🤖",
    title: "AI Storytelling App",
    subtitle: "Questora – Mini Project",
    status: "Completed",
    statusColor: "#22D3EE",
    desc: "An AI-powered storytelling web application where users choose characters, fandoms, and story details. The system generates engaging stories along with AI-enhanced images using modern AI APIs.",
    tags: ["AI", "JavaScript", "API Integration", "UI/UX"],
    github: "https://github.com/Insaf-Finser/Questora---MINI-PROJECT",
    live: null,
    color: "rgba(34,211,238,0.08)",
    borderColor: "rgba(34,211,238,0.25)",
  },
  {
    icon: "💊",
    title: "Antibiotic Awareness Platform",
    subtitle: "Health Tech – Ongoing",
    status: "In Progress",
    statusColor: "#FBBF24",
    desc: "A platform designed to raise awareness about antibiotic misuse and educate people about antibiotic resistance through interactive content, quizzes, and up-to-date medical information.",
    tags: ["React", "Node.js", "MongoDB", "Health Tech"],
    github: null,
    live: null,
    color: "rgba(251,191,36,0.06)",
    borderColor: "rgba(251,191,36,0.22)",
  },
  {
    icon: "🦾",
    title: "Robotics Internship Projects",
    subtitle: "Unique World Robotics – 2025",
    status: "2025",
    statusColor: "#A78BFA",
    desc: "A series of hands-on projects during an internship at Unique World Robotics — including robotic programming, building and controlling RC cars, and 3D modeling for prototypes.",
    tags: ["Robotics", "3D Modeling", "C++", "Hardware"],
    github: null,
    live: null,
    color: "rgba(167,139,250,0.06)",
    borderColor: "rgba(167,139,250,0.22)",
  },
  {
    icon: "🚗",
    title: "Parking Finder (ParkEase)",
    subtitle: "React Web Application – 2026",
    status: "Feb 2026",
    statusColor: "#34D399",
    desc: "A React-based web application that helps users locate nearby parking lots, compare prices, view locations on an interactive map, and book parking slots. The platform features search and filtering, favorites, booking history, authentication flow, and a responsive modern UI built with Tailwind CSS. Leaflet and OpenStreetMap are integrated to display parking locations on an interactive map.",
    tags: ["React", "Tailwind CSS", "Leaflet", "OpenStreetMap", "LocalStorage", "Vite"],
    github: "https://github.com/Bipindev01/ParkNGo.git",
    live: "https://parkn-go.netlify.app/",
    color: "rgba(52,211,153,0.06)",
    borderColor: "rgba(52,211,153,0.22)",
  },
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.12);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: "22px",
        background: hovered ? project.color : "var(--surface)",
        border: `1px solid ${hovered ? project.borderColor : "var(--border)"}`,
        padding: "2rem",
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(36px)",
        transition: `opacity 0.65s ${index * 0.13}s, transform 0.4s, border 0.3s, background 0.3s, box-shadow 0.3s`,
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.25), 0 0 0 1px ${project.borderColor}` : "none",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px",
        background: `linear-gradient(90deg, transparent, ${project.statusColor}, transparent)`,
        opacity: hovered ? 0.7 : 0.3,
        transition: "opacity 0.3s",
      }} />

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "14px",
          background: `${project.color || "var(--accent-dim)"}`,
          border: `1px solid ${project.borderColor}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.6rem",
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.08) rotate(-4deg)" : "scale(1) rotate(0deg)",
        }}>
          {project.icon}
        </div>

        <span style={{
          fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
          background: `${project.statusColor}18`,
          color: project.statusColor,
          border: `1px solid ${project.statusColor}38`,
          borderRadius: "8px", padding: "4px 11px",
        }}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        fontSize: "1.08rem", color: "var(--text-primary)", marginBottom: "0.2rem",
      }}>
        {project.title}
      </h3>
      <p style={{ fontSize: "0.76rem", color: project.statusColor, fontWeight: 600, marginBottom: "0.8rem" }}>
        {project.subtitle}
      </p>
      <p style={{
        fontSize: "0.88rem", color: "var(--text-secondary)",
        lineHeight: 1.72, flexGrow: 1, marginBottom: "1.3rem",
      }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", marginBottom: "1.4rem" }}>
        {project.tags.map((t) => (
          <span key={t} className="tag" style={{ fontSize: "0.68rem" }}>{t}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: "flex", gap: "0.8rem",
        borderTop: "1px solid var(--border)", paddingTop: "1.1rem",
      }}>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.83rem",
              color: "var(--accent)", textDecoration: "none",
              display: "flex", alignItems: "center", gap: "6px",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
          >
            ⌨ GitHub →
          </a>
        ) : (
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            🔒 Private / Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        eyebrow="My Work"
        heading="Featured Projects"
        sub="A selection of projects I've built and contributed to"
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        gap: "1.8rem", maxWidth: "1060px", margin: "0 auto",
      }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* More on GitHub */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <a
          href="https://github.com/Bipindev01"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          style={{ display: "inline-block" }}
        >
          ⌨ More on GitHub →
        </a>
      </div>
    </section>
  );
}
