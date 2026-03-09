import { useTyping } from "../hooks/useInView";

const TYPED_WORDS = ["MERN Stack Dev", "Full Stack Engineer", "UI/UX Builder", "Problem Solver"];

function Particles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {Array.from({ length: 30 }).map((_, i) => {
        const size = 2 + (i % 4);
        const animIndex = i % 4;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${size}px`, height: `${size}px`,
              borderRadius: "50%",
              background: `rgba(100,220,255,${0.06 + (i % 6) * 0.025})`,
              left: `${(i * 37 + 5) % 100}%`,
              top: `${(i * 53 + 10) % 100}%`,
              animation: `particleFloat${animIndex} ${7 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function OrbitRing({ size, duration, opacity, reverse = false }) {
  return (
    <div style={{
      position: "absolute",
      top: "50%", right: "6%",
      width: `${size}px`, height: `${size}px`,
      marginTop: `-${size / 2}px`,
      border: `1px solid rgba(100,220,255,${opacity})`,
      borderRadius: "50%",
      animation: `spinSlow ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
      pointerEvents: "none",
    }}>
      {/* Dot on ring */}
      <div style={{
        position: "absolute", top: "-3px", left: "50%",
        width: "6px", height: "6px", borderRadius: "50%",
        background: "var(--accent)",
        boxShadow: "0 0 12px var(--accent)",
        transform: "translateX(-50%)",
      }} />
    </div>
  );
}

export default function Hero() {
  const typed = useTyping(TYPED_WORDS);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(100,220,255,0.10) 0%, transparent 70%), var(--bg)",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <Particles />

      {/* Orbit rings (hidden on mobile) */}
      <div className="hero-orbits" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <OrbitRing size={420} duration={35} opacity={0.08} />
        <OrbitRing size={280} duration={22} opacity={0.12} reverse />
        <OrbitRing size={160} duration={14} opacity={0.18} />
      </div>

      {/* Hero gradient blob */}
      <div style={{
        position: "absolute", top: "20%", left: "50%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(100,220,255,0.06) 0%, transparent 65%)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center", maxWidth: "800px", padding: "0 1rem",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "var(--accent-dim)",
          border: "1px solid var(--accent-border)",
          borderRadius: "100px", padding: "7px 20px",
          marginBottom: "1.6rem",
          animation: "fadeUp 0.6s 0.1s ease both",
        }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase" }}>
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
          lineHeight: 1.06, letterSpacing: "-0.025em",
          color: "var(--text-primary)",
          margin: "0 0 0.4rem",
          animation: "fadeUp 0.7s 0.2s ease both",
        }}>
          Hi, I'm{' '}
          <span style={{
            color: "var(--accent)",
            textShadow: "0 0 40px rgba(100,220,255,0.3)",
          }}>
            Bipin Dev B
          </span>
        </h1>

        {/* Typing */}
        <div style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: "clamp(1.1rem, 2.8vw, 1.9rem)",
          color: "var(--accent)", minHeight: "2.6rem",
          margin: "0 0 1.4rem",
          animation: "fadeUp 0.7s 0.3s ease both",
        }}>
          {typed}
          <span style={{ animation: "blink 1s step-end infinite", marginLeft: "1px" }}>|</span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.93rem, 2vw, 1.12rem)",
          color: "var(--text-secondary)", lineHeight: 1.8,
          maxWidth: "560px", margin: "0 auto 2.4rem",
          animation: "fadeUp 0.7s 0.4s ease both",
        }}>
          Passionate full-stack developer crafting modern, responsive, and accessible web applications using the MERN stack. I build solutions that are functional and deliver great user experiences.
        </p>

        {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeUp 0.7s 0.5s ease both",
            }}
          >
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View Projects →
            </button>
          
            <a
              className="btn-outline"
              href="https://drive.google.com/file/d/1bZhAN0l8wa8KQ7b3bw8ET86v19RYQSt4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 View Resume
            </a>
          </div>

        {/* Social links */}
        <div style={{
          display: "flex", gap: "0.9rem", justifyContent: "center",
          marginTop: "2.4rem",
          animation: "fadeUp 0.7s 0.6s ease both",
        }}>
          {[
            { href: "https://github.com/Bipindev01", icon: "⌨", label: "GitHub" },
            { href: "https://www.linkedin.com/in/bipindevb", icon: "💼", label: "LinkedIn" },
            { href: "mailto:bipindevb@email.com", icon: "✉", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="card"
              style={{
                width: "46px", height: "46px", borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.15rem", textDecoration: "none",
                color: "var(--accent)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(100,220,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          onClick={() => scrollTo("about")}
          style={{
            marginTop: "3rem", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            animation: "fadeUp 0.7s 0.75s ease both",
          }}
        >
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--text-muted)", textTransform: "uppercase" }}>
            Scroll down
          </span>
          <div style={{
            width: "24px", height: "38px", border: "2px solid var(--accent-border)",
            borderRadius: "12px", display: "flex", justifyContent: "center",
            paddingTop: "6px",
          }}>
            <div style={{
              width: "4px", height: "8px", background: "var(--accent)",
              borderRadius: "2px",
              animation: "float 1.6s ease-in-out infinite",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
