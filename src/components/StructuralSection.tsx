"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Gavel, BookOpen, HeartPulse, Eye } from "lucide-react";

const TIERS = [
  {
    id: 1, name: "The Pinnacle", population: "~2,700 people", percent: "0.00003%",
    wealth: "$10B–$200B+", color: "#8b5cf6", glow: "rgba(139,92,246,0.25)",
    description: "Sovereign wealth operators. They don't hold shares — they rewrite the rules under which shares exist.",
    context: "At this tier, policy is not something that happens to you — it is something you commission. Tax law, central bank policy, regulatory architecture: all are negotiable given sufficient capital and the right relationships.",
    examples: ["Sovereign wealth fund principals", "Multi-generational dynasty trusts", "Primary architecture-level donors to political infrastructure"],
  },
  {
    id: 2, name: "Macro-Architects", population: "~40,000 people", percent: "0.0005%",
    wealth: "$500M–$10B", color: "#7c3aed", glow: "rgba(124,58,237,0.22)",
    description: "They don't execute strategy — they define the terrain on which everyone else's strategy is executed.",
    context: "Hedge fund founders, family offices, and major institutional investors who move markets through conviction rather than calculation. Their asset management decisions restructure industries.",
    examples: ["Hedge fund founders", "Major private equity principals", "Billionaire donor network nodes"],
  },
  {
    id: 3, name: "Capital Stewards", population: "~2M people", percent: "0.025%",
    wealth: "$10M–$500M", color: "#6d28d9", glow: "rgba(109,40,217,0.20)",
    description: "Professionally wealthy — managing capital as the primary occupation, not a side effect of work.",
    context: "This tier controls most investable assets globally through pension funds, endowments, and professional investment firms. The structural decisions made here filter down to every retirement account.",
    examples: ["Institutional fund managers", "Family office operators", "Senior investment bankers"],
  },
  {
    id: 4, name: "Upper Professional Class", population: "~200M people", percent: "2.5%",
    wealth: "$1M–$10M", color: "#5b21b6", glow: "rgba(91,33,182,0.18)",
    description: "High earners who have crossed into wealth accumulation — asset appreciation begins to outpace labor income.",
    context: "Doctors, lawyers, senior executives, and successful small business owners. Work still defines identity, but capital begins to work in parallel. First-generation wealth builders who serve as aspirational anchor for the tier below.",
    examples: ["Senior executives", "High-earning professionals", "Successful small-medium business owners"],
  },
  {
    id: 5, name: "Global Working Middle", population: "~1.5B people", percent: "18%",
    wealth: "$50K–$1M", color: "#4c1d95", glow: "rgba(76,29,149,0.15)",
    description: "Stable employment, modest asset accumulation — the core audience for aspirational capitalism.",
    context: "Labor income covers costs, with enough surplus for housing and retirement. Culturally positioned as the 'success story' of the system, though structural mobility upward is statistically rare.",
    examples: ["Skilled tradespeople", "Mid-career professionals", "Dual-income households in high-income countries"],
  },
  {
    id: 6, name: "Global Precariat", population: "~3B people", percent: "36%",
    wealth: "$5K–$50K", color: "#3b0764", glow: "rgba(59,7,100,0.18)",
    description: "Sufficient for survival, insufficient for security. The structural majority of global humanity.",
    context: "One medical event, one job loss, or one economic shock from cascading downward. Labor sells at or near floor price. The system depends on this tier's labor to function and its aspiration to remain compliant.",
    examples: ["Informal sector workers", "Agricultural laborers", "Gig economy participants globally"],
  },
  {
    id: 7, name: "The Destitute", population: "~800M people", percent: "9.7%",
    wealth: "< $1,000/year", color: "#ef4444", glow: "rgba(239,68,68,0.2)",
    description: "Living below or at subsistence. Resources insufficient for basic caloric and health needs.",
    context: "Often geographically, politically, and economically isolated from systems of redistribution. Not an accident of history — a structural output of optimized extraction. Their poverty is a direct condition of others' wealth.",
    examples: ["Sub-Saharan subsistence populations", "Conflict-zone displaced persons", "Stateless or undocumented people"],
  },
];

const CONTROLS = [
  {
    Icon: Gavel, title: "Legal Architecture", color: "#8b5cf6",
    stat: "55,000+",
    statLabel: "lobbying filings/yr in US alone",
    description: "Tax codes, property law, intellectual property rights, and corporate personhood — all shaped by those with capital to direct legislative attention. The law is not neutral; it was built by those it protects.",
  },
  {
    Icon: HeartPulse, title: "Healthcare Profiteering", color: "#a855f7",
    stat: "$4.5T",
    statLabel: "US healthcare spend annually",
    description: "Insurance architecture, pharmaceutical pricing, and medical debt weaponized as class control. Access to health is inversely correlated with need and directly correlated with capital.",
  },
  {
    Icon: BookOpen, title: "Cultural Normalization", color: "#7c3aed",
    stat: "93%",
    statLabel: "media owned by 6 corporations",
    description: "The dominant culture teaches that the hierarchy is natural, inevitable, and fair. Aspiration is channeled upward. Critique is labeled cynicism. The frame benefits those who set the frame.",
  },
  {
    Icon: Eye, title: "Surveillance Capture", color: "#6d28d9",
    stat: "5B+",
    statLabel: "people with behavioral data harvested",
    description: "Digital behavioral data extracted at scale, weaponized to refine targeting, political messaging, and consumption manipulation. Attention itself is the resource being extracted.",
  },
];

export default function StructuralSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expandedTier, setExpandedTier] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="structural"
      ref={sectionRef}
      className="relative py-32 px-6"
      style={{ background: "linear-gradient(180deg, #040d14 0%, #08082a 100%)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-40 left-10 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", filter: "blur(90px)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#8b5cf6" }}
          >
            Stratum II
          </p>
          <h2
            className="font-display"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#e2e8f0",
            }}
          >
            THE{" "}
            <span style={{ color: "#8b5cf6" }}>STRUCTURAL</span>
            <br />
            STRATUM
          </h2>
          <p
            className="mt-5 max-w-2xl text-lg"
            style={{ color: "#94a3b8", fontStyle: "italic" }}
          >
            The architecture was designed to appear inevitable. Every tier below the top exists not by nature —
            but by the deliberate engineering of systems that extract value upward.
          </p>
        </div>

        {/* Impact stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { value: "40,000", label: "people", sub: "control half of all investable global wealth" },
            { value: "211,000:1", label: "ratio", sub: "top to bottom wealth differential" },
            { value: "70%", label: "decline", sub: "in worker share of GDP since 1980" },
            { value: "60%", label: "of gains", sub: "go to top 1% in every recovery cycle" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.18)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="font-display text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-syne)", color: "#8b5cf6" }}
              >
                {s.value}
              </div>
              <div
                className="font-mono-data text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "var(--font-jetbrains)", color: "#a855f7" }}
              >
                {s.label}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.7rem", marginTop: "3px" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tier hierarchy */}
        <div
          className={`mb-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
          >
            The Seven-Tier Global Hierarchy
          </p>
          <div className="space-y-2">
            {TIERS.map((tier, i) => {
              const isOpen = expandedTier === i;
              return (
                <div
                  key={tier.id}
                  className="rounded-xl overflow-hidden tier-row"
                  style={{
                    background: isOpen ? `${tier.color}10` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isOpen ? tier.color + "40" : "rgba(255,255,255,0.06)"}`,
                    boxShadow: isOpen ? `0 0 30px ${tier.glow}` : "none",
                    transitionDelay: `${i * 40}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(12px)",
                    transition: "opacity 0.5s ease-out, transform 0.5s ease-out, background 0.25s, border 0.25s, box-shadow 0.25s",
                  }}
                  onClick={() => setExpandedTier(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-mono-data"
                      style={{
                        background: `${tier.color}20`,
                        border: `1px solid ${tier.color}40`,
                        color: tier.color,
                        fontFamily: "var(--font-jetbrains)",
                      }}
                    >
                      {tier.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span
                          className="font-display text-base"
                          style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
                        >
                          {tier.name}
                        </span>
                        <span
                          className="font-mono-data text-xs"
                          style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
                        >
                          {tier.population} · {tier.percent}
                        </span>
                      </div>
                      <p className="text-sm mt-0.5 truncate" style={{ color: "#64748b" }}>
                        {tier.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className="font-mono-data text-xs hidden sm:block"
                        style={{ fontFamily: "var(--font-jetbrains)", color: tier.color }}
                      >
                        {tier.wealth}
                      </span>
                      {isOpen ? (
                        <ChevronDown size={14} style={{ color: tier.color }} />
                      ) : (
                        <ChevronRight size={14} style={{ color: "#475569" }} />
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t" style={{ borderColor: `${tier.color}20` }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div>
                          <p
                            className="font-mono-data text-xs tracking-widest uppercase mb-2"
                            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
                          >
                            Structural Context
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                            {tier.context}
                          </p>
                        </div>
                        <div>
                          <p
                            className="font-mono-data text-xs tracking-widest uppercase mb-2"
                            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
                          >
                            Examples
                          </p>
                          <ul className="space-y-1.5">
                            {tier.examples.map((ex, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#94a3b8" }}>
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ background: tier.color }}
                                />
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Control mechanisms */}
        <div
          className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
          >
            Mechanisms of Perpetuation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTROLS.map((c, i) => {
              const Icon = c.Icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-5 hover:scale-[1.01] transition-transform duration-200"
                  style={{
                    background: `${c.color}07`,
                    border: `1px solid ${c.color}22`,
                    transitionDelay: `${i * 70}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(12px)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ background: `${c.color}18` }}
                    >
                      <Icon size={16} style={{ color: c.color }} />
                    </div>
                    <div>
                      <h3
                        className="font-display text-base"
                        style={{ fontFamily: "var(--font-syne)", color: "#e2e8f0" }}
                      >
                        {c.title}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span
                          className="font-display text-lg"
                          style={{ fontFamily: "var(--font-syne)", color: c.color }}
                        >
                          {c.stat}
                        </span>
                        <span
                          className="font-mono-data text-xs"
                          style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
                        >
                          {c.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div
          className={`mt-16 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            borderLeft: "3px solid rgba(139,92,246,0.5)",
            paddingLeft: "1.5rem",
          }}
        >
          <p className="text-xl italic" style={{ color: "#94a3b8" }}>
            "The system is not broken. It is performing exactly as designed — with startling precision —
            for those who designed it."
          </p>
        </div>
      </div>
    </section>
  );
}
