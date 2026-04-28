import { SITE } from "@/lib/constants";

const LINKS = [
  { label: "GitHub", href: SITE.github },
  { label: "Research Blog", href: "#" },
  { label: "Docs", href: SITE.github },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="#top" className="font-mono text-2xl tracking-tight">
              <span className="text-text">Al</span>
              <span className="text-accent-gold">9</span>
              <span className="text-text">ha</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-text-muted">
              Research infrastructure for the age of autonomous intelligence.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-text-muted transition-colors hover:text-accent-cyan"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Al9ha. All rights reserved.</span>
          <span>
            Al9ha is not currently managing external capital. Paper trading
            only.
          </span>
        </div>
      </div>
    </footer>
  );
}
