"use client";

import { useState } from "react";
import { SectionReveal } from "./ui/SectionReveal";
import { GlowCard } from "./ui/GlowCard";
import { SITE } from "@/lib/constants";

export function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative border-t border-border bg-bg-elevated/30 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            08 / Contact
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            Let&apos;s talk.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <SectionReveal delay={0.05}>
            <GlowCard className="h-full p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
                Investors
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Interested in the fund? We&apos;re happy to walk through the
                research approach and current state.
              </p>
              <a
                href="mailto:investors@al9ha.com"
                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:underline"
              >
                investors@al9ha.com →
              </a>
            </GlowCard>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <GlowCard accent="gold" className="h-full p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-accent-gold">
                Researchers
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Want to contribute to the open-source research OS? Start with
                the issues, or open one of your own.
              </p>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-accent-gold hover:underline"
              >
                contribute on github →
              </a>
            </GlowCard>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <GlowCard className="h-full p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
                Press / general
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                For everything else, the inbox below is read by a human.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:underline"
              >
                {SITE.email} →
              </a>
            </GlowCard>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.2}>
          <div className="mt-12 rounded-xl border border-border bg-bg p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg text-text">Research updates</h3>
                <p className="mt-1 text-sm text-text-muted">
                  Occasional notes on the system as it evolves. No marketing.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="flex w-full max-w-md gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-md border border-border bg-bg-elevated px-3 py-2 font-mono text-sm text-text placeholder:text-text-dim focus:border-accent-cyan focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 font-mono text-sm text-accent-cyan transition-colors hover:border-accent-cyan"
                >
                  {submitted ? "Subscribed ✓" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
