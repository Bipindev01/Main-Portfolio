import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

// 🔧 TO EDIT: Replace the `link` field with your actual Google Drive share link for each certificate
const CERTIFICATES = [
  {
    icon: "🏆",
    title: "MERN Stack Development",
    issuer: "Udemy",
    year: "2024",
    color: "#F59E0B",
    link: "https://drive.google.com/your-link-here",
  },
  {
    icon: "🤖",
    title: "Robotics Internship Certificate",
    issuer: "Unique World Robotics",
    year: "2025",
    color: "#22D3EE",
    link: "https://drive.google.com/file/d/1tPeQiOPOqKTe6m2sTl7ZmARJ4NwGIIvb/view?usp=sharing",
  },
  {
    icon: "⭐",
    title: "Algorithms & DS",
    issuer: "Microsoft",
    year: "2025",
    color: "#A78BFA",
    link: "https://drive.google.com/file/d/1Y7pbh-_iAiDCA20vQEpa-FqbOPnTCd1b/view?usp=sharing",
  },
  {
    icon: "🐍",
    title: "Python Programming",
    issuer: "Coursera",
    year: "2023",
    color: "#34D399",
    link: "https://drive.google.com/your-link-here",
  },
  {
    icon: "🌐",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    color: "#F97316",
    link: "https://drive.google.com/your-link-here",
  },
  {
    icon: "🔧",
    title: "C Programming Fundamentals",
    issuer: "NPTEL",
    year: "2022",
    color: "#EC4899",
    link: "https://drive.google.com/your-link-here",
  },
];

function CertCard({ cert, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block", textDecoration: "none",
        position: "relative", borderRadius: "18px",
        background: "var(--surface)",
        border: `1px solid ${hovered ? cert.color + "55" : "var(--border)"}`,
        padding: "1.6rem",
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)") : "translateY(28px) scale(0.96)",
        transition: `opacity 0.55s ${index * 0.08}s, transform 0.35s, border 0.3s, box-shadow 0.3s`,
        boxShadow: hovered ? `0 12px 36px rgba(0,0,0,0.2), 0 0 0 1px ${cert.color}33` : "none",
        overflow: "hidden",
      }}
    >
      {/* Color top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: cert.color,
        opacity: hovered ? 0.9 : 0.4,
        transition: "opacity 0.3s",
        boxShadow: hovered ? `0 0 12px ${cert.color}` : "none",
      }} />

      {/* Glow bg */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at top left, ${cert.color}0A 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px",
        background: `${cert.color}18`,
        border: `1px solid ${cert.color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.5rem", marginBottom: "1rem",
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.1) rotate(-6deg)" : "none",
      }}>
        {cert.icon}
      </div>

      <h4 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.3rem",
        lineHeight: 1.3,
      }}>
        {cert.title}
      </h4>
      <p style={{
        fontSize: "0.78rem", color: "var(--text-secondary)",
        marginBottom: "1rem",
      }}>
        {cert.issuer} · {cert.year}
      </p>

      <div style={{
        display: "flex", alignItems: "center", gap: "6px",
        fontSize: "0.78rem", fontWeight: 700, color: cert.color,
        transition: "gap 0.2s",
        gap: hovered ? "10px" : "6px",
      }}>
        <span>View Certificate</span>
        <span style={{
          transition: "transform 0.2s",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          display: "inline-block",
        }}>→</span>
      </div>
    </a>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="section section-alt">
      <SectionTitle
        eyebrow="Achievements"
        heading="Certificates"
        sub="Credentials and recognitions earned along the way"
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.3rem", maxWidth: "1000px", margin: "0 auto",
      }}>
        {CERTIFICATES.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>

      <p style={{
        textAlign: "center", marginTop: "1.8rem",
        fontSize: "0.8rem", color: "var(--text-muted)",
        fontStyle: "italic",
      }}>
        * Click any certificate to view it. Replace links in Certificates.jsx with your Google Drive links.
      </p>
    </section>
  );
}
