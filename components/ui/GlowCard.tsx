"use client";

import { ReactNode, useRef, MouseEvent } from "react";

export function GlowCard({
  children,
  className = "",
  accent = "cyan",
}: {
  children: ReactNode;
  className?: string;
  accent?: "cyan" | "gold";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const accentColor = accent === "gold" ? "240, 165, 0" : "0, 240, 255";

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-xl border border-border bg-bg-elevated transition-colors hover:border-border-strong ${className}`}
      style={
        {
          ["--accent" as string]: accentColor,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx) var(--my), rgba(${accentColor}, 0.10), transparent 40%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
