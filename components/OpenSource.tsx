import { SectionReveal } from "./ui/SectionReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { SITE } from "@/lib/constants";

const DOCS = [
  { label: "Architecture", href: `${SITE.github}#architecture` },
  { label: "Demo Script", href: `${SITE.github}/blob/main/DEMO.md` },
  { label: "Known Limitations", href: `${SITE.github}/blob/main/LIMITATIONS.md` },
  { label: "Phase 2 Roadmap", href: `${SITE.github}/blob/main/ROADMAP.md` },
];

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="relative border-t border-border bg-bg-elevated/30 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            06 / Open Source
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            Inspect the work.
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted">
            The core research operating system is open source. Auditability
            isn&apos;t optional — it is the product.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-xl border border-border bg-bg-elevated">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 font-mono text-xs text-text-dim">
                  ZelinZhu-Richard / Nexus-Tensor-Alpha
                </span>
              </div>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-accent-cyan hover:underline"
              >
                view on github →
              </a>
            </div>

            <div className="grid gap-0 sm:grid-cols-3">
              <div className="border-b border-border p-6 sm:border-b-0 sm:border-r">
                <div className="font-mono text-xs uppercase tracking-wider text-text-dim">
                  Stars
                </div>
                <div className="mt-2 text-3xl text-text">
                  <AnimatedCounter to={142} />
                </div>
              </div>
              <div className="border-b border-border p-6 sm:border-b-0 sm:border-r">
                <div className="font-mono text-xs uppercase tracking-wider text-text-dim">
                  Commits
                </div>
                <div className="mt-2 text-3xl text-text">
                  <AnimatedCounter to={1287} />
                </div>
              </div>
              <div className="p-6">
                <div className="font-mono text-xs uppercase tracking-wider text-text-dim">
                  Last updated
                </div>
                <div className="mt-2 font-mono text-lg text-text">
                  this week
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-bg p-5 font-mono text-xs">
              <div className="text-text-dim">$ git clone</div>
              <div className="mt-1 text-text">
                git clone https://github.com/ZelinZhu-Richard/Nexus-Tensor-Alpha.git
              </div>
              <div className="mt-3 text-text-dim">$ cd Nexus-Tensor-Alpha &amp;&amp; make demo</div>
              <div className="mt-1 text-accent-cyan">
                ✓ pipeline ready · 11 stages · audit log enabled
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DOCS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-md border border-border bg-bg-elevated px-4 py-3 transition-colors hover:border-accent-cyan"
              >
                <span className="font-mono text-sm text-text">{d.label}</span>
                <span className="text-text-dim transition-transform group-hover:translate-x-0.5 group-hover:text-accent-cyan">
                  →
                </span>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
