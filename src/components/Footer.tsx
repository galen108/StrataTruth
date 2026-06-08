"use client";
import { Dna, Network, Flame, Layers } from "lucide-react";

const STRATA = [
  { label: "Stratum I", name: "Biological", color: "#10b981", icon: Dna, id: "biological", desc: "The body's hidden cascade — metabolic truth, purinergic suppression, root-cause vs. symptom-management." },
  { label: "Stratum II", name: "Structural", color: "#8b5cf6", icon: Network, id: "structural", desc: "The architecture of extraction — seven tiers, four mechanisms, the deliberate engineering of inequality." },
  { label: "Stratum III", name: "Sacred", color: "#f59e0b", icon: Flame, id: "sacred", desc: "The consciousness frontier — three paths, the breath, the choice between collapse and emergence." },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-12 md:py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #040410 0%, #020208 100%)" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(16,185,129,0.3), rgba(245,158,11,0.3), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Strata grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">
          {STRATA.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left rounded-2xl p-5 hover:scale-[1.02] transition-all duration-200 group"
                style={{
                  background: `${s.color}07`,
                  border: `1px solid ${s.color}22`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = `${s.color}45`;
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 24px ${s.color}12`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = `${s.color}22`;
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ background: `${s.color}18` }}
                  >
                    <Icon size={14} style={{ color: s.color }} />
                  </div>
                  <span
                    className="font-mono-data text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-jetbrains)", color: s.color }}
                  >
                    {s.label}
                  </span>
                </div>
                <h3
                  className="font-display text-xl mb-2"
                  style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
                >
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {s.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Synthesis statement */}
        <div
          className="rounded-2xl p-5 sm:p-8 mb-8 md:mb-12 text-center"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Layers size={28} className="mx-auto mb-4" style={{ color: "#475569" }} />
          <p className="text-lg italic max-w-3xl mx-auto" style={{ color: "#94a3b8" }}>
            The three strata are not separate problems. They are one architecture viewed from different angles —
            biological suppression enables structural extraction; structural extraction severs the sacred;
            the severed sacred makes people manageable enough to suppress biologically.
            The loop is complete. The exit is seeing it whole.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => scrollTo("hero")}
            className="font-display text-xl tracking-widest transition-opacity duration-200 hover:opacity-60"
            style={{
              fontFamily: "var(--font-syne)",
              background: "linear-gradient(135deg, #10b981 0%, #8b5cf6 50%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            STRATA
          </button>
          <p
            className="font-mono-data text-xs text-center"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#334155" }}
          >
            Three layers. One truth. No exit. — A synthesis of metabolic, structural, and sacred inquiry.
          </p>
        </div>
      </div>
    </footer>
  );
}
