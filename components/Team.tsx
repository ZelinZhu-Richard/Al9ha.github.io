import { SectionReveal } from "./ui/SectionReveal";

export function Team() {
  return (
    <section id="team" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            07 / Team
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            Built by researchers, for researchers.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SectionReveal delay={0.05}>
            <article className="h-full rounded-xl border border-border bg-bg-elevated p-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-cyan/40 bg-bg-subtle font-mono text-lg text-accent-cyan"
                  aria-hidden
                >
                  ZZ
                </div>
                <div>
                  <h3 className="text-lg text-text">Zelin “Richard” Zhu</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-text-dim">
                    Founder · Research
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-text-muted">
                Quantitative researcher and AI systems builder. Background in
                ML research and the architecture of large-scale autonomous
                agents. Building Al9ha from first principles — the system he
                wished existed when he started.
              </p>
            </article>
          </SectionReveal>

          {[0, 1].map((i) => (
            <SectionReveal key={i} delay={0.05 + 0.05 * (i + 1)}>
              <article className="flex h-full flex-col items-start justify-between rounded-xl border border-dashed border-border bg-bg-elevated/40 p-6">
                <div>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg-subtle font-mono text-text-dim"
                    aria-hidden
                  >
                    ?
                  </div>
                  <h3 className="mt-4 text-lg text-text-muted">
                    {i === 0 ? "Research Engineer" : "Quant Researcher"}
                  </h3>
                  <p className="mt-2 text-sm text-text-dim">
                    {i === 0
                      ? "Pipeline reliability, point-in-time data systems, evaluation infrastructure."
                      : "Signal generation, regime modeling, validated alpha measurement."}
                  </p>
                </div>
                <a
                  href="mailto:hiring@al9ha.com"
                  className="mt-6 font-mono text-xs text-accent-cyan hover:underline"
                >
                  apply →
                </a>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <div className="mt-10 flex items-center gap-3 font-mono text-sm">
            <span className="text-text-muted">We&apos;re hiring.</span>
            <a
              href="mailto:hiring@al9ha.com"
              className="text-accent-cyan hover:underline"
            >
              hiring@al9ha.com →
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
