"use client";
import { useEffect, useState } from "react";
import { Layers, Dna, Network, Flame } from "lucide-react";

const SECTIONS = [
  { id: "hero", label: "Surface", short: "I", icon: Layers },
  { id: "biological", label: "Biological", short: "II", icon: Dna },
  { id: "structural", label: "Structural", short: "III", icon: Network },
  { id: "sacred", label: "Sacred", short: "IV", icon: Flame },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const y = window.scrollY + 140;
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300"
    >
      <div
        className="flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(8,8,26,0.92)"
            : "rgba(8,8,26,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-sm tracking-widest px-2 sm:px-4 py-1 text-white/70 hover:text-white transition-colors mr-1 sm:mr-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          STRATA
        </button>
        <div className="w-px h-5 bg-white/10 mx-1" />
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex items-center gap-1.5 px-2 sm:px-4 py-1.5 rounded-full text-sm font-mono-data transition-all duration-200"
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: isActive
                  ? s.id === "biological"
                    ? "#10b981"
                    : s.id === "structural"
                    ? "#8b5cf6"
                    : s.id === "sacred"
                    ? "#f59e0b"
                    : "#e2e8f0"
                  : "#64748b",
                background: isActive ? "rgba(255,255,255,0.07)" : "transparent",
              }}
            >
              <Icon size={12} />
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.short}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
