import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

const SOCIALS = [
  {
    icon: "💼",
    label: "LinkedIn",
    value: "bipindevb",
    href: "https://www.linkedin.com/in/bipindevb",
    color: "#0A66C2",
  },
  {
    icon: "⌨",
    label: "GitHub",
    value: "Bipindev01",
    href: "https://github.com/Bipindev01",
    color: "#64DCFF",
  },
  {
    icon: "✉",
    label: "Email",
    value: "bipindevb@email.com",
    href: "mailto:bipindevb@email.com",
    color: "#F472B6",
  },
];

function SocialCard({ social, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "1rem",
        textDecoration: "none", borderRadius: "14px",
        background: "var(--surface)",
        border: `1px solid ${hovered ? social.color + "44" : "var(--border)"}`,
        padding: "1.1rem 1.4rem",
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? "translateX(6px)" : "translateX(0)") : "translateX(-24px)",
        transition: `opacity 0.5s ${index * 0.1}s, transform 0.3s, border 0.3s, box-shadow 0.3s`,
        boxShadow: hovered ? `0 4px 20px rgba(0,0,0,0.15)` : "none",
      }}
    >
      <div style={{
        width: "42px", height: "42px", borderRadius: "10px",
        background: `${social.color}18`,
        border: `1px solid ${social.color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.2rem", flexShrink: 0,
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.12)" : "scale(1)",
      }}>
        {social.icon}
      </div>
      <div>
        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "2px" }}>
          {social.label}
        </div>
        <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>
          {social.value}
        </div>
      </div>
      <div style={{
        marginLeft: "auto", color: social.color, fontSize: "0.9rem",
        opacity: hovered ? 1 : 0.3, transition: "opacity 0.2s, transform 0.2s",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
      }}>
        →
      </div>
    </a>
  );
}

function ContactForm() {
  const [ref, inView] = useInView(0.15);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  const inputStyle = (field) => ({
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem",
    background: focused === field ? "rgba(100,220,255,0.04)" : "var(--surface)",
    border: `1px solid ${focused === field ? "rgba(100,220,255,0.45)" : "var(--border)"}`,
    borderRadius: "12px", padding: "12px 16px",
    width: "100%", boxSizing: "border-box",
    color: "var(--text-primary)", outline: "none",
    transition: "border 0.25s, background 0.25s",
  });

  return (
    <div
      ref={ref}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "22px", padding: "2.2rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(40px)",
        transition: "opacity 0.7s 0.15s, transform 0.7s 0.15s",
      }}
    >
      <h3 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "1.6rem",
      }}>
        Send a Message
      </h3>

      {status === "sent" ? (
        <div style={{
          textAlign: "center", padding: "2.5rem 1rem",
          animation: "bounceIn 0.6s ease",
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "1.1rem", color: "var(--accent)", marginBottom: "0.5rem",
          }}>
            Message sent!
          </div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: "5px" }}>NAME</label>
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Your Name"
                style={inputStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: "5px" }}>EMAIL</label>
              <input
                name="email" value={form.email} onChange={handleChange}
                placeholder="your@email.com" type="email"
                style={inputStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: "5px" }}>MESSAGE</label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell me about your project or just say hi..."
              rows={5} style={{ ...inputStyle("message"), resize: "vertical" }}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
          </div>

          {status === "error" && (
            <p style={{ fontSize: "0.82rem", color: "#F87171", margin: "0" }}>
              ⚠ Please fill in all fields.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="btn-primary"
            style={{
              width: "100%", padding: "14px",
              opacity: status === "sending" ? 0.7 : 1,
              cursor: status === "sending" ? "wait" : "pointer",
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message 🚀"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [refLeft, inViewLeft] = useInView(0.15);

  return (
    <section id="contact" className="section">
      <SectionTitle
        eyebrow="Get In Touch"
        heading="Contact Me"
        sub="Have a project in mind? Let's talk!"
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2.5rem", maxWidth: "960px", margin: "0 auto",
        alignItems: "start",
      }}>
        {/* Left – info */}
        <div
          ref={refLeft}
          style={{
            opacity: inViewLeft ? 1 : 0,
            transform: inViewLeft ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          <h3 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "0.7rem",
          }}>
            Let's Work Together
          </h3>
          <p style={{
            fontSize: "0.95rem", lineHeight: 1.78,
            color: "var(--text-secondary)", marginBottom: "2rem",
          }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>

          {/* Social cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {SOCIALS.map((s, i) => (
              <SocialCard key={s.label} social={s} index={i} />
            ))}
          </div>

          {/* Availability badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginTop: "1.8rem",
            background: "rgba(34,197,94,0.10)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "100px", padding: "7px 16px",
          }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#22C55E",
              boxShadow: "0 0 8px #22C55E",
              animation: "pulse-glow 2s infinite",
            }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#22C55E" }}>
              Available for new projects
            </span>
          </div>
        </div>

        {/* Right – form */}
        <ContactForm />
      </div>
    </section>
  );
}
