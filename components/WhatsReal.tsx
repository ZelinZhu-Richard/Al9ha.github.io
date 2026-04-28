import { SectionReveal } from "./ui/SectionReveal";
import { BUILT, ROADMAP } from "@/lib/constants";

export function WhatsReal() {
  return (
    <section id="roadmap" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            03 / What&apos;s real / what&apos;s next
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            We&apos;d rather show you what&apos;s real than pretend we&apos;re
            further than we are.
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted">
            Honesty is the differentiator. Here is what is shipped today, and
            here is what is on deck.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <SectionReveal delay={0.05}>
            <div className="h-full rounded-xl border border-accent-cyan/30 bg-accent-cyan/[0.03] p-8">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                shipped
              </div>
              <h3 className="mt-4 text-2xl">What we&apos;ve built</h3>
              <ul className="mt-6 space-y-3 font-mono text-sm">
                {BUILT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-border/60 pb-3 last:border-0"
                  >
                    <span className="mt-1 text-accent-cyan">▸</span>
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="h-full rounded-xl border border-accent-gold/30 bg-accent-gold/[0.03] p-8">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                roadmap
              </div>
              <h3 className="mt-4 text-2xl">What&apos;s next</h3>
              <ul className="mt-6 space-y-3 font-mono text-sm">
                {ROADMAP.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-border/60 pb-3 last:border-0"
                  >
                    <span className="mt-1 text-accent-gold">◇</span>
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
