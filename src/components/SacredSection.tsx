"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Wind, Shield, Sunrise } from "lucide-react";

const PATHS = [
  {
    id: "acceptance",
    label: "Path of Acceptance",
    icon: Wind,
    color: "#f59e0b",
    tagline: "Change what you can. Release what you cannot. Know the difference.",
    paragraphs: [
      "Acceptance is not passivity. It is the radical, disciplined act of seeing what is true — without the distortion of rage at its truth, or despair at its scale. The biological cascade runs. The hierarchy extracts. These are facts. Acceptance begins with the willingness to hold facts without flinching.",
      "Every tradition that survived millennia understood this. The Stoics called it amor fati — love of fate. The Buddhists called it equanimity. The Serenity Prayer calls it courage to change, serenity to accept, and wisdom to know the difference. This is not resignation. It is the foundation on which every genuine action is built.",
      "You cannot respond to a system you refuse to see. The first act of liberation is a clear-eyed encounter with what is. The second act — action or release — follows from that clarity, not from fear or denial.",
    ],
  },
  {
    id: "resistance",
    label: "Path of Resistance",
    icon: Shield,
    color: "#10b981",
    tagline: "Sacred resistance is not anger. It is love with teeth.",
    paragraphs: [
      "The Sermon on the Mount is a document of radical politics. Blessed are the meek — not the defeated, but the disciplined. Blessed are those who hunger for justice — not comfort, but righteousness. These beatitudes are not consolations for losers. They are the strategic orientation of people who understand that power built on extraction is inherently unstable.",
      "Resistance does not require hatred of those at the top of the hierarchy. It requires clarity about the hierarchy itself — the systems, not the individuals who happen to occupy nodes within them. Systems can be named, documented, contested, and rebuilt. Sacred resistance insists on this possibility even when evidence is scarce.",
      "The prophetic tradition — from Amos to King to every movement that changed the arc of history — carried one consistent message: the gap between what is and what could be is not natural. It is a choice. It can be unchosen. The cost of inaction is not safety. It is complicity.",
    ],
  },
  {
    id: "emergence",
    label: "Path of Emergence",
    icon: Sunrise,
    color: "#a855f7",
    tagline: "Civilization optimizes. Life emerges. The question is which you serve.",
    paragraphs: [
      "Two readings of this moment are possible. The first: civilization has reached its terminal stage — optimizing meaning out of existence, replacing love with engagement, community with network, wisdom with information density. The native end. A system so complete in its own logic that it cannot conceive of its own outside.",
      "The second: this is a liminal threshold. A hinge point. Every previous civilizational structure that collapsed — and all of them did — left behind both ruin and seed. What emerges from the composting of the old is not predetermined. It is shaped by what the people who live through the transition choose to carry forward.",
      "The sacred path of emergence does not pretend the collapse is not happening. It insists that what comes next is not written. The biological truth of the body can be recovered. The structural architecture of extraction can be redesigned. The consciousness frameworks that guided humans through previous thresholds still exist, still carry their original power. This is the invitation of emergence: not escape, but passage.",
    ],
  },
];

const BREATHING_PHASES = ["Inhale", "Hold", "Exhale"];

export default function SacredSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activePath, setActivePath] = useState(0);
  const [expandedParagraph, setExpandedParagraph] = useState<number | null>(null);
  const [breathPhase, setBreathPhase] = useState(0);
  const [mode, setMode] = useState<"collapse" | "renewal">("renewal");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathPhase((p) => (p + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPath = PATHS[activePath];

  const collapseText = [
    "We built systems so efficient at extracting value that they began extracting meaning. The attention economy monetized wonder. The gig economy fragmented vocation. The optimization imperative turned relationships into transactions and time into productivity metrics.",
    "Loneliness is now the defining health crisis of wealthy nations. Not a bug — an output. Connection is expensive to monetize. Disconnection keeps people consuming. The native end of civilization is not a bang but a slow optimization toward a world perfectly suited to profit and perfectly hostile to life.",
    "The smartphone knows more about your desires than you do. The algorithm knows which fear to surface to keep you scrolling. The political economy of attention has turned interiority itself into a resource to be mined. What is left of you when all of it has been extracted?",
  ];

  const renewalText = [
    "Every threshold in human history that looked terminal produced what came after it. Rome fell. The medieval period ended. The colonial project ran its logic to exhaustion. After each, something emerged that the previous order could not have predicted — because it was built from what the previous order couldn't destroy.",
    "What cannot be destroyed: the body's capacity to heal when given what it actually needs. The human capacity for solidarity, for meaning-making, for love that persists even when it has nothing to gain. The ancient wisdom of every tradition that survived long enough to accumulate real knowledge about how to be human.",
    "Renewal is not a return to a previous state. It is a passage. You carry forward what is essential and you let the rest compost into the ground. The question each person must answer at a threshold: what is essential? The answer — biological truth, structural clarity, sacred orientation — is what STRATA is about.",
  ];

  return (
    <section
      id="sacred"
      ref={sectionRef}
      className="relative py-32 px-6"
      style={{ background: "linear-gradient(180deg, #08082a 0%, #0c0820 50%, #040410 100%)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-40 left-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#f59e0b" }}
          >
            Stratum III
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
            <span style={{ color: "#f59e0b" }}>SACRED</span>
            <br />
            STRATUM
          </h2>
          <p
            className="mt-5 max-w-2xl text-lg"
            style={{ color: "#94a3b8", fontStyle: "italic" }}
          >
            When the biological is suppressed and the structural extracts everything —
            what remains is the oldest question: how do we remain human at a threshold?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Breathing orb + path selector */}
          <div
            className={`lg:col-span-2 flex flex-col items-center gap-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Orb */}
            <div className="relative flex items-center justify-center w-40 h-40">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${currentPath.color}35 0%, ${currentPath.color}08 60%, transparent 100%)`,
                  transform: breathPhase === 0 || breathPhase === 1 ? "scale(1.15)" : "scale(0.7)",
                  transition: "transform 4s ease-in-out, background 0.8s ease",
                  opacity: breathPhase === 2 ? 0.55 : 1,
                }}
              />
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `${currentPath.color}25`,
                  border: `2px solid ${currentPath.color}50`,
                  transform: breathPhase === 0 || breathPhase === 1 ? "scale(1.1)" : "scale(0.85)",
                  transition: "transform 4s ease-in-out",
                  boxShadow: `0 0 30px ${currentPath.color}30`,
                }}
              >
                <currentPath.icon size={24} style={{ color: currentPath.color }} />
              </div>
              <div
                className="absolute -bottom-6 font-mono-data text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
              >
                {BREATHING_PHASES[breathPhase]}
              </div>
            </div>

            {/* Path selector */}
            <div className="flex flex-col gap-2 w-full mt-4">
              {PATHS.map((p, i) => {
                const Icon = p.icon;
                const isActive = activePath === i;
                return (
                  <button
                    key={p.id}
                    onClick={() => { setActivePath(i); setExpandedParagraph(null); }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200"
                    style={{
                      background: isActive ? `${p.color}12` : "rgba(255,255,255,0.025)",
                      border: `1px solid ${isActive ? p.color + "40" : "rgba(255,255,255,0.06)"}`,
                      boxShadow: isActive ? `0 0 16px ${p.color}15` : "none",
                    }}
                  >
                    <Icon size={14} style={{ color: isActive ? p.color : "#475569", flexShrink: 0 }} />
                    <span
                      className="text-sm font-display"
                      style={{
                        fontFamily: "var(--font-syne)",
                        color: isActive ? p.color : "#64748b",
                      }}
                    >
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Path content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: `${currentPath.color}07`,
                border: `1px solid ${currentPath.color}25`,
              }}
            >
              <p
                className="font-mono-data text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-jetbrains)", color: currentPath.color }}
              >
                {currentPath.label}
              </p>
              <p
                className="text-xl italic mb-5"
                style={{ color: "#94a3b8", borderLeft: `3px solid ${currentPath.color}50`, paddingLeft: "1rem" }}
              >
                {currentPath.tagline}
              </p>
              <div className="space-y-3">
                {currentPath.paragraphs.map((para, i) => {
                  const isOpen = expandedParagraph === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setExpandedParagraph(isOpen ? null : i)}
                      className="w-full text-left rounded-xl p-4 transition-all duration-200"
                      style={{
                        background: isOpen ? `${currentPath.color}10` : "rgba(255,255,255,0.02)",
                        border: `1px solid ${isOpen ? currentPath.color + "35" : "rgba(255,255,255,0.05)"}`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: isOpen ? "#e2e8f0" : "#64748b" }}
                        >
                          {isOpen ? para : para.slice(0, 100) + "…"}
                        </p>
                        {isOpen ? (
                          <ChevronUp size={12} style={{ color: currentPath.color, flexShrink: 0, marginTop: 2 }} />
                        ) : (
                          <ChevronDown size={12} style={{ color: "#475569", flexShrink: 0, marginTop: 2 }} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Collapse vs Renewal toggle */}
        <div
          className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono-data text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#64748b" }}
          >
            Two Readings of This Moment
          </p>
          <div className="flex gap-2 mb-6">
            {(["collapse", "renewal"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="px-5 py-2 rounded-full text-sm font-mono-data transition-all duration-200"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  background: mode === m
                    ? m === "collapse" ? "rgba(239,68,68,0.18)" : "rgba(245,158,11,0.18)"
                    : "rgba(255,255,255,0.04)",
                  border: mode === m
                    ? m === "collapse" ? "1px solid rgba(239,68,68,0.4)" : "1px solid rgba(245,158,11,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: mode === m
                    ? m === "collapse" ? "#ef4444" : "#f59e0b"
                    : "#64748b",
                }}
              >
                {m === "collapse" ? "Native End" : "Re-Emergence"}
              </button>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 transition-all duration-500"
            style={{
              background: mode === "collapse" ? "rgba(239,68,68,0.04)" : "rgba(245,158,11,0.04)",
              border: mode === "collapse" ? "1px solid rgba(239,68,68,0.18)" : "1px solid rgba(245,158,11,0.18)",
            }}
          >
            <h3
              className="font-display text-2xl mb-4"
              style={{
                fontFamily: "var(--font-syne)",
                color: mode === "collapse" ? "#ef4444" : "#f59e0b",
                animation: mode === "collapse" ? "glitch 0.4s ease-in-out 3" : "none",
              }}
            >
              {mode === "collapse" ? "The Native End" : "The Re-Emergence"}
            </h3>
            <div className="space-y-4">
              {(mode === "collapse" ? collapseText : renewalText).map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
