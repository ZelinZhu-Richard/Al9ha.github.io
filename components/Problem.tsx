import { SectionReveal } from "./ui/SectionReveal";
import { GlowCard } from "./ui/GlowCard";

const POINTS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M3 7h18M3 12h18M3 17h12" strokeLinecap="round" />
        <circle cx="19" cy="17" r="2.5" />
        <path d="M21 19l2 2" strokeLinecap="round" />
      </svg>
    ),
    title: "No provenance",
    body: "Most systems can't prove where inputs came from, or whether they were available at decision time. Lookahead bias is a default, not an exception.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M4 6h10M4 12h6M4 18h10" strokeLinecap="round" />
        <path d="M18 8l4 4-4 4M22 12h-6" strokeLinecap="round" />
      </svg>
    ),
    title: "No review gates",
    body: "Ideas flow straight from generation to execution with no adversarial critique. Counter-hypotheses are slides, not structural artifacts.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="8" cy="14" r="0.8" fill="currentColor" />
        <path d="M11 14h7M11 17h5" strokeLinecap="round" />
      </svg>
    ),
    title: "No audit trail",
    body: "If you can't reconstruct a decision from raw inputs, you can't trust it. Most pipelines optimize for throughput; we optimize for inspection.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative border-t border-border py-28">
      <div className="absolute inset-0 bg-dot-grid bg-[size:24px_24px] opacity-[0.15]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            01 / The Problem
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            Most AI hedge funds are theater.
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted">
            A demo notebook with an LLM and a returns plot is not a research
            operating system. A real one carries provenance, runs adversarial
            critique, and survives audit. Three things go missing first.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <SectionReveal key={p.title} delay={0.05 * i}>
              <GlowCard className="h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border-strong bg-bg-subtle text-accent-cyan">
                    {p.icon}
                  </div>
                  <div className="font-mono text-xs text-text-dim">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {p.body}
                </p>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <p className="mt-14 font-mono text-sm text-text">
            <span className="text-accent-gold">→</span> We built the system that
            takes these problems seriously.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
