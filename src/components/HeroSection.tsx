"use client";
import { useEffect, useRef } from "react";
import { ChevronDown, Dna, Network, Flame } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  hue: number;
  opacity: number;
  size: number;
}

const STATS = [
  { value: "3", label: "substrata", sub: "shaping all experience" },
  { value: "40+", label: "years", sub: "of metabolic suppression" },
  { value: "$12T", label: "extracted", sub: "by top 0.01% annually" },
];

const PATHS = [
  { id: "biological", label: "Biological", color: "#10b981", Icon: Dna, desc: "The body's hidden cascade" },
  { id: "structural", label: "Structural", color: "#8b5cf6", Icon: Network, desc: "The architecture of power" },
  { id: "sacred", label: "Sacred", color: "#f59e0b", Icon: Flame, desc: "The consciousness frontier" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 160;
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.2 + Math.random() * 0.5,
      hue: 150 + Math.random() * 140,
      opacity: 0.15 + Math.random() * 0.55,
      size: 0.8 + Math.random() * 1.8,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      particlesRef.current.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
        const flicker = Math.sin(t * 2.5 + p.x * 0.01) * 0.12 + p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${Math.max(0, Math.min(1, flicker))})`;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040410 0%, #080820 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-blobDrift"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(60px)", animation: "blobDrift 10s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)", filter: "blur(60px)", animation: "blobDrift 12s ease-in-out infinite" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <p
          className="font-mono-data text-xs tracking-[0.4em] uppercase mb-6 opacity-0 animate-fadeInUp"
          style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
        >
          A manifesto in three layers
        </p>

        {/* Main title */}
        <h1
          className="font-display opacity-0 animate-fadeInUp delay-100"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(5rem, 22vw, 18rem)",
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #10b981 0%, #8b5cf6 50%, #f59e0b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          STRATA
        </h1>

        {/* Tagline */}
        <p
          className="mt-6 text-lg md:text-xl opacity-0 animate-fadeInUp delay-200"
          style={{ color: "#94a3b8", fontStyle: "italic", maxWidth: "520px", margin: "1.5rem auto 0" }}
        >
          Three hidden systems. One human experience. The layers most never see — but all of us live inside.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 opacity-0 animate-fadeInUp delay-300">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl px-6 py-4 text-center"
            >
              <div
                className="font-display text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
              >
                {s.value}
              </div>
              <div
                className="font-mono-data text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "var(--font-jetbrains)", color: "#10b981" }}
              >
                {s.label}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: "2px" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Path cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 opacity-0 animate-fadeInUp delay-400">
          {PATHS.map((p) => {
            const Icon = p.Icon;
            return (
              <button
                key={p.id}
                onClick={() => scrollTo(p.id)}
                className="flex items-center gap-3 glass rounded-xl px-6 py-3 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                style={{
                  border: `1px solid ${p.color}30`,
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 20px ${p.color}25`;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = `${p.color}60`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = `${p.color}30`;
                }}
              >
                <Icon size={16} style={{ color: p.color }} />
                <div className="text-left">
                  <div
                    className="font-mono-data text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-jetbrains)", color: p.color }}
                  >
                    {p.label}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.72rem" }}>{p.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("biological")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
        style={{ color: "#64748b" }}
      >
        <span className="font-mono-data text-xs tracking-widest" style={{ fontFamily: "var(--font-jetbrains)" }}>
          descend
        </span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
