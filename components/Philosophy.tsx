import { SectionReveal } from "./ui/SectionReveal";

const QUOTES = [
  "Every research artifact links back to its source evidence.",
  "Counter-hypotheses are generated for every thesis — not optional, structural.",
  "We measure what we can prove, and we're honest about what we can't.",
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative border-t border-border py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            05 / Research Philosophy
          </p>
          <h2 className="mt-4 text-balance text-4xl tracking-tight sm:text-5xl">
            Evidence over intuition.{" "}
            <span className="text-accent-gold">Provenance over performance.</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-7 text-lg leading-relaxed text-text-muted">
          <SectionReveal delay={0.05}>
            <p>
              The fund is the artifact at the end of a research process. Most
              quantitative shops treat the research process as a black box that
              outputs returns. We treat it as the product. Every claim,
              hypothesis, and proposed trade is an object with a schema, a
              source, and a chain of custody.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p>
              Large language models are extraordinary at extracting structure
              from unstructured text. They are not extraordinary at being
              right. The system separates the two: agents extract, the schema
              constrains, deterministic logic decides. The LLM is a powerful
              microscope, not the lab.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.11}>
            <p>
              Adversarial critique is structural, not cultural. For every
              hypothesis the system generates, it generates a counter — and
              both must clear arbitration on their own merits. Disagreement is
              an output of the pipeline, not a meeting agenda.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.14}>
            <p>
              Approval-gated execution is not a compliance fig leaf. It is the
              admission that quantitative systems fail in surprising ways, and
              the way you survive failure is by making sure a human sees the
              output before it touches a market.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <SectionReveal key={q} delay={i * 0.06}>
              <blockquote className="h-full rounded-lg border-l-2 border-accent-cyan bg-bg-elevated p-5 text-sm leading-relaxed text-text">
                &ldquo;{q}&rdquo;
              </blockquote>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
