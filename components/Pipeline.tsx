"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";
import { PIPELINE_NODES } from "@/lib/constants";

export function Pipeline() {
  const [active, setActive] = useState<string>(PIPELINE_NODES[0].id);
  const node = PIPELINE_NODES.find((n) => n.id === active) ?? PIPELINE_NODES[0];

  return (
    <section
      id="architecture"
      className="relative border-t border-border bg-bg-elevated/30 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            02 / The Research Operating System
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            Eleven stages. One provenance graph.
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted">
            Every decision in the system is reconstructable. Hover or tap a
            stage to inspect what runs there.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-14 hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border-strong to-transparent" />
              <div className="relative grid grid-cols-11 gap-2">
                {PIPELINE_NODES.map((n, i) => {
                  const isActive = active === n.id;
                  return (
                    <button
                      key={n.id}
                      onMouseEnter={() => setActive(n.id)}
                      onFocus={() => setActive(n.id)}
                      onClick={() => setActive(n.id)}
                      className={`group relative flex flex-col items-center gap-2 ${
                        isActive ? "z-10" : ""
                      }`}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.4 : 1,
                          backgroundColor: isActive
                            ? "rgba(0,240,255,0.95)"
                            : "rgba(42,42,62,1)",
                          boxShadow: isActive
                            ? "0 0 24px rgba(0,240,255,0.6)"
                            : "0 0 0 rgba(0,0,0,0)",
                        }}
                        transition={{ type: "spring", stiffness: 240 }}
                        className="h-3 w-3 rounded-full"
                      />
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider transition-colors ${
                          isActive ? "text-accent-cyan" : "text-text-dim"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`max-w-[88px] text-center text-[11px] leading-tight transition-colors ${
                          isActive ? "text-text" : "text-text-muted"
                        }`}
                      >
                        {n.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto mt-14 max-w-3xl rounded-xl border border-border bg-bg-elevated p-8"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-text-dim">
                  stage_
                  {String(
                    PIPELINE_NODES.findIndex((n) => n.id === node.id) + 1,
                  ).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-border-strong" />
                <h3 className="font-mono text-lg text-text">{node.label}</h3>
              </div>
              {node.highlight && (
                <div className="mt-4 inline-block rounded border border-accent-cyan/30 bg-accent-cyan/5 px-2.5 py-1 font-mono text-xs text-accent-cyan">
                  {node.highlight}
                </div>
              )}
              <p className="mt-4 text-text-muted">{node.description}</p>
            </motion.div>
          </div>
        </SectionReveal>

        <div className="mt-14 lg:hidden">
          <div className="relative pl-6">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-border-strong" />
            {PIPELINE_NODES.map((n, i) => (
              <SectionReveal key={n.id} delay={i * 0.04}>
                <div className="relative pb-7">
                  <div className="absolute -left-[18px] top-1.5 h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_16px_rgba(0,240,255,0.5)]" />
                  <div className="font-mono text-[10px] uppercase tracking-wider text-text-dim">
                    stage_{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-mono text-base text-text">
                    {n.label}
                  </div>
                  {n.highlight && (
                    <div className="mt-2 inline-block rounded border border-accent-cyan/30 bg-accent-cyan/5 px-2 py-0.5 font-mono text-[10px] text-accent-cyan">
                      {n.highlight}
                    </div>
                  )}
                  <p className="mt-2 text-sm text-text-muted">
                    {n.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
