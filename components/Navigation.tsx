"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg tracking-tight">
          <span className="text-text">Al</span>
          <span className="text-accent-gold">9</span>
          <span className="text-text">ha</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border-strong bg-bg-elevated px-3 py-1.5 font-mono text-xs text-text transition-colors hover:border-accent-cyan hover:text-accent-cyan"
          >
            GitHub →
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
        >
          <span className="block h-0.5 w-6 bg-text" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-bg/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-text-muted hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent-cyan"
            >
              GitHub →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
