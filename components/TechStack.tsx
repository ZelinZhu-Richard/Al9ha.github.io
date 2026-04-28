import { SectionReveal } from "./ui/SectionReveal";
import { GlowCard } from "./ui/GlowCard";
import { STACK } from "@/lib/constants";

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative border-t border-border bg-bg-elevated/30 py-28"
    >
      <div className="absolute inset-0 bg-dot-grid bg-[size:24px_24px] opacity-[0.12]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            04 / Technology
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            Decisions that survive contact with reality.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {STACK.map((s, i) => (
            <SectionReveal key={s.title} delay={i * 0.04}>
              <GlowCard
                accent={i % 2 === 0 ? "cyan" : "gold"}
                className="h-full p-6"
              >
                <h3 className="text-lg font-medium text-text">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {s.body}
                </p>
                <pre className="mt-5 overflow-x-auto rounded-md border border-border bg-bg/80 p-4 font-mono text-[11.5px] leading-relaxed text-text">
                  <code>{s.code}</code>
                </pre>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
