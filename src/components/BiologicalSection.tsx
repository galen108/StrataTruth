"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Zap, Wind, FlameKindling, Activity } from "lucide-react";

const TIMELINE = [
  { year: "1960s–70s", era: "Symptom Era", title: "The surface is treated", color: "#10b981", description: "Mainstream medicine crystallizes around symptom management. Patients receive drug after drug for outputs — anxiety, mood swings, fatigue — never the inputs that produce them." },
  { year: "1980s–90s", era: "Cascade Era", title: "The cascade deepens", color: "#14b8a6", description: "Pharmaceutical infrastructure incentivizes escalating treatment ladders. Polypharmacy becomes standard care. Root metabolic causes are buried under layers of management." },
  { year: "2000s", era: "Silence Era", title: "The evidence goes dark", color: "#059669", description: "Research into ancient, cheap molecules (allopurinol, colchicine) stalls — no profit incentive to fund large trials. The uric acid dysregulation axis remains clinical orphan." },
  { year: "2010s", era: "Signal Era", title: "The data resurfaces", color: "#34d399", description: "Epidemiological studies quietly confirm elevated uric acid links to cardiovascular disease, metabolic syndrome, neuropsychiatric conditions. The medical mainstream takes no action." },
  { year: "2020s+", era: "Resolution Era", title: "Root cause resolved", color: "#6ee7b7", description: "Patients who discover the purinergic-mitochondrial axis for themselves — often outside formal care — report resolution of symptoms that decades of psychiatry never touched." },
];

const MECHANISMS = [
  { icon: Zap, title: "Nitric Oxide Suppression", color: "#10b981", description: "Elevated uric acid directly inhibits nitric oxide synthase, constricting vascular and neural tissue. Downstream effects include hypertension, cognitive fog, and poor cellular signaling." },
  { icon: Wind, title: "Oxidative Stress Cascade", color: "#14b8a6", description: "Xanthine oxidase — the enzyme that creates uric acid — simultaneously generates reactive oxygen species. Chronic elevation means chronic oxidative damage at the cellular level." },
  { icon: FlameKindling, title: "NLRP3 Inflammasome", color: "#059669", description: "Uric acid crystals activate the NLRP3 inflammasome, triggering systemic inflammatory cytokine release. This is the same pathway that produces gout — but operating subclinically everywhere." },
  { icon: Activity, title: "Mitochondrial Dysfunction", color: "#34d399", description: "Purinergic signaling disruption impairs mitochondrial ATP synthesis. Cells receive less energy than they produce substrate for. Fatigue, mood dysregulation, and cognitive decline follow." },
];

const CASCADE_NODES = [
  { label: "ATP Breakdown", color: "#10b981" },
  { label: "Xanthine Oxidase", color: "#14b8a6" },
  { label: "Uric Acid ↑", color: "#f59e0b" },
  { label: "NLRP3 Fires", color: "#ef4444" },
  { label: "Chronic Disease", color: "#dc2626" },
];

export default function BiologicalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expandedMech, setExpandedMech] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="biological"
      ref={sectionRef}
      className="relative py-16 md:py-32 px-4 sm:px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080820 0%, #040d14 100%)" }}
    >
      {/* Ambient blob */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#10b981" }}
          >
            Stratum I
          </p>
          <h2
            className="font-display"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.75rem, 7.5vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#e2e8f0",
            }}
          >
            THE{" "}
            <span style={{ color: "#10b981" }}>BIOLOGICAL</span>
            <br />
            STRATUM
          </h2>
          <p
            className="mt-5 max-w-2xl text-lg"
            style={{ color: "#94a3b8", fontStyle: "italic" }}
          >
            Your body carries a metabolic truth that the system was never built to find.
            The cascade runs beneath everything — diagnosed or not, treated or not, seen or not.
          </p>
        </div>

        {/* Cascade visualization */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
          >
            The Purinergic Cascade
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {CASCADE_NODES.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="rounded-lg px-4 py-2 text-sm font-mono-data"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    background: `${node.color}14`,
                    border: `1px solid ${node.color}35`,
                    color: node.color,
                  }}
                >
                  {node.label}
                </div>
                {i < CASCADE_NODES.length - 1 && (
                  <span style={{ color: "#334155", fontSize: "1.2rem" }}>→</span>
                )}
              </div>
            ))}
          </div>
          <p
            className="mt-3 text-sm"
            style={{ color: "#475569", fontStyle: "italic" }}
          >
            Ancient molecules — allopurinol ($4/mo) — break this cascade at step 2. 40 years of psychiatry never looked at step 1.
          </p>
        </div>

        {/* Mechanisms grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {MECHANISMS.map((m, i) => {
            const Icon = m.icon;
            const isOpen = expandedMech === i;
            return (
              <button
                key={i}
                onClick={() => setExpandedMech(isOpen ? null : i)}
                className="text-left rounded-xl p-5 transition-all duration-200 hover:scale-[1.01] group"
                style={{
                  background: `${m.color}08`,
                  border: `1px solid ${isOpen ? m.color + "50" : m.color + "20"}`,
                  boxShadow: isOpen ? `0 0 24px ${m.color}15` : "none",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 p-2 rounded-lg flex-shrink-0"
                      style={{ background: `${m.color}18` }}
                    >
                      <Icon size={16} style={{ color: m.color }} />
                    </div>
                    <div>
                      <h3
                        className="font-display text-base"
                        style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
                      >
                        {m.title}
                      </h3>
                      {isOpen && (
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                          {m.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={14} style={{ color: m.color, flexShrink: 0, marginTop: "2px" }} />
                  ) : (
                    <ChevronDown size={14} style={{ color: "#475569", flexShrink: 0, marginTop: "2px" }} />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div
          className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
          >
            A 60-Year Timeline of Suppression
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, #10b981 0%, #6ee7b7 100%)", opacity: 0.3 }}
            />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <div
                  key={i}
                  className="pl-12 relative"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(-12px)",
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  }}
                >
                  {/* Node */}
                  <div
                    className="absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: `${t.color}20`, border: `2px solid ${t.color}50` }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: t.color }}
                    />
                  </div>
                  <div
                    className="rounded-xl p-5"
                    style={{
                      background: `${t.color}06`,
                      border: `1px solid ${t.color}20`,
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="font-mono-data text-xs tracking-wider"
                        style={{ fontFamily: "var(--font-jetbrains)", color: t.color }}
                      >
                        {t.year}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${t.color}18`,
                          color: t.color,
                          fontFamily: "var(--font-jetbrains)",
                        }}
                      >
                        {t.era}
                      </span>
                    </div>
                    <h4
                      className="font-display text-lg mb-1"
                      style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
                    >
                      {t.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost callout */}
        <div
          className={`mt-10 md:mt-16 rounded-2xl p-5 sm:p-8 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p
                className="font-mono-data text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-jetbrains)", color: "#ef4444" }}
              >
                The cost comparison
              </p>
              <h3
                className="font-display text-2xl mb-2"
                style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
              >
                The System's Solution
              </h3>
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                $3,000–$12,000/year in psychiatric medications. Side effects managed with more medications. Decades of escalating intervention. The original metabolic cause never addressed.
              </p>
            </div>
            <div
              className="w-px hidden md:block"
              style={{ background: "rgba(239,68,68,0.2)", alignSelf: "stretch" }}
            />
            <div className="flex-1">
              <p
                className="font-mono-data text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-jetbrains)", color: "#10b981" }}
              >
                The Root Cause Solution
              </p>
              <h3
                className="font-display text-2xl mb-2"
                style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
              >
                What Actually Works
              </h3>
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                $48–$250/year in allopurinol and colchicine. Known molecules for 60+ years. Dirt cheap. Off-patent. Rarely prescribed for root-cause metabolic management. The system has no financial reason to find this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
