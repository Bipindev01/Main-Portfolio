import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useActiveSection } from "./hooks/useInView";
import "./styles/globals.css";

const SECTIONS = ["home", "about", "skills", "services", "projects", "certificates", "contact"];

export default function App() {
  const [dark, setDark] = useState(true);
  const active = useActiveSection(SECTIONS);

  // Apply theme to root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Cursor glow effect (desktop only)
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Cursor glow */}
      <div
        id="cursor-glow"
        className="cursor-glow"
        style={{ display: window.innerWidth > 768 ? "block" : "none" }}
      />

      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
