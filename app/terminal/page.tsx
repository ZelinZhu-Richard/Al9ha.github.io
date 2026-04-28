"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Line = { kind: "out" | "cmd" | "err"; text: string };

const HELP = [
  "available commands:",
  "  help            show this message",
  "  ls              list site sections",
  "  open <section>  jump to a section on the main site",
  "  status          system status",
  "  whoami          identify",
  "  clear           clear the screen",
  "  exit            return to the main site",
];

const SECTIONS = [
  "problem",
  "architecture",
  "roadmap",
  "stack",
  "philosophy",
  "open-source",
  "team",
  "contact",
];

export default function TerminalPage() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "Al9ha :: research-os terminal v0.1" },
    { kind: "out", text: "type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const exec = (raw: string) => {
    const cmd = raw.trim();
    const next: Line[] = [...lines, { kind: "cmd", text: `al9ha@research:~$ ${cmd}` }];
    if (!cmd) {
      setLines(next);
      return;
    }
    const [name, ...args] = cmd.split(/\s+/);
    switch (name) {
      case "help":
        next.push(...HELP.map((t) => ({ kind: "out" as const, text: t })));
        break;
      case "ls":
        next.push({ kind: "out", text: SECTIONS.join("  ") });
        break;
      case "open": {
        const target = args[0];
        if (!target || !SECTIONS.includes(target)) {
          next.push({ kind: "err", text: `unknown section: ${target ?? "(none)"}` });
        } else {
          next.push({ kind: "out", text: `→ navigating to /#${target}` });
          setTimeout(() => {
            window.location.href = `/#${target}`;
          }, 400);
        }
        break;
      }
      case "status":
        next.push(
          { kind: "out", text: "pipeline:        ready" },
          { kind: "out", text: "ingestion:       fixture-backed" },
          { kind: "out", text: "review-queue:    enabled" },
          { kind: "out", text: "execution-mode:  paper" },
          { kind: "out", text: "audit-log:       append-only" },
        );
        break;
      case "whoami":
        next.push({ kind: "out", text: "guest@al9ha — read-only" });
        break;
      case "clear":
        setLines([]);
        return;
      case "exit":
        window.location.href = "/";
        return;
      default:
        next.push({ kind: "err", text: `command not found: ${name}` });
    }
    setLines(next);
  };

  return (
    <main className="min-h-screen bg-bg p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-2xl">
          <div className="flex items-center justify-between border-b border-border bg-bg px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-3 font-mono text-xs text-text-dim">
                al9ha :: research-os
              </span>
            </div>
            <Link
              href="/"
              className="font-mono text-xs text-text-dim hover:text-accent-cyan"
            >
              exit →
            </Link>
          </div>

          <div
            className="h-[70vh] overflow-y-auto p-5 font-mono text-sm leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((l, i) => (
              <div
                key={i}
                className={
                  l.kind === "cmd"
                    ? "text-accent-cyan"
                    : l.kind === "err"
                      ? "text-accent-gold"
                      : "text-text"
                }
              >
                {l.text}
              </div>
            ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                exec(input);
                setInput("");
              }}
              className="mt-1 flex items-center gap-2"
            >
              <span className="text-accent-cyan">al9ha@research:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-text outline-none"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
            <div ref={endRef} />
          </div>
        </div>
        <p className="mt-4 text-center font-mono text-xs text-text-dim">
          tip: try <span className="text-accent-cyan">help</span>,{" "}
          <span className="text-accent-cyan">ls</span>, or{" "}
          <span className="text-accent-cyan">open architecture</span>
        </p>
      </div>
    </main>
  );
}
