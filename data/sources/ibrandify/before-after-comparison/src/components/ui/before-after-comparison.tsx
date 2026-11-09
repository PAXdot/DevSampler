"use client";

import * as React from "react";

export type State = {
  active?: number;
  open?: boolean;
  expanded?: number;
  reveal?: number;
  previous?: number;
  blend?: number;
  selected?: string;
  query?: string;
  notice?: string;
  highlighted?: boolean;
};

export type Props = {
  title?: string;
  subtitle?: string;
  state?: State;
  onStateChange?: (state: State) => void;
  onAction?: (action: string) => void;
  seeking?: boolean;
  className?: string;
  before?: string;
  after?: string;
  imageAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

const createSvg = (bg1: string, bg2: string, label: string, isVibrant: boolean) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520">
      <defs>
        <linearGradient id="${isVibrant ? "g_vibrant" : "g_muted"}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bg1}" />
          <stop offset="100%" stop-color="${bg2}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#${isVibrant ? "g_vibrant" : "g_muted"})" />
      <circle cx="450" cy="220" r="95" fill="white" fill-opacity="${isVibrant ? "0.22" : "0.08"}" />
      <path d="M0,380 L260,240 L500,390 L680,280 L900,410 L900,520 L0,520 Z" fill="white" fill-opacity="${isVibrant ? "0.25" : "0.12"}" />
      <path d="M0,440 L340,330 L590,445 L900,350 L900,520 L0,520 Z" fill="white" fill-opacity="${isVibrant ? "0.32" : "0.16"}" />
      <text x="450" y="485" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="white" fill-opacity="${isVibrant ? "0.9" : "0.55"}" text-anchor="middle" letter-spacing="4">${label}</text>
    </svg>`
  )}`;

const defaultBefore = createSvg("#475569", "#1e293b", "RAW PROFILE / LOG 01", false);
const defaultAfter = createSvg("#0284c7", "#0f766e", "COLOR GRADED / 3D LUT", true);

function useStateValue(
  initial: State,
  controlled: State | undefined,
  notify: Props["onStateChange"],
) {
  const [local, update] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => {
    const next = { ...value, ...patch };
    update(next);
    notify?.(next);
  };
  return [value, set] as const;
}

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));

export default function BeforeAfterComparison({
  title = "A different point of view.",
  subtitle = "Drag across the frame to inspect the grade.",
  before = defaultBefore,
  after = defaultAfter,
  imageAlt = "Before and after comparison showing the tone and colour transformation",
  beforeLabel = "Original",
  afterLabel = "Treated",
  state,
  onStateChange,
  onAction,
  seeking = false,
  className = "",
}: Props) {
  const [v, set] = useStateValue({ reveal: 50 }, state, onStateChange);
  const value = clamp(v.reveal ?? 50, 0, 100);
  const [dragging, drag] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
    set({ reveal: pct });
    onAction?.(`${Math.round(pct)}%`);
  };

  return (
    <section
      className={`w-full max-w-3xl mx-auto rounded-2xl border border-border bg-card text-card-foreground p-6 sm:p-8 shadow-sm transition-colors ${className}`}
      data-seeking={seeking}
    >
      {/* Header */}
      <header className="flex items-start justify-between gap-4 mb-7">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Grade study
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-foreground mt-1 mb-1">
            {title}
          </h2>
          <p className="text-xs text-muted-foreground max-w-[370px] leading-relaxed">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex items-center border border-border bg-muted/50 rounded-full px-3 py-1 text-[11px] font-medium text-foreground whitespace-nowrap">
          Interactive slider
        </span>
      </header>

      {/* Comparison Canvas */}
      <div
        ref={containerRef}
        role="slider"
        aria-label="Before and after image comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        aria-valuetext={`${Math.round(value)} percent ${beforeLabel}, ${Math.round(100 - value)} percent ${afterLabel}`}
        tabIndex={0}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          drag(true);
          updatePosition(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging) updatePosition(e.clientX);
        }}
        onPointerUp={(e) => {
          drag(false);
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        }}
        onPointerCancel={() => drag(false)}
        onKeyDown={(e) => {
          if (["ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "Home", "End"].includes(e.key)) {
            e.preventDefault();
            const step = e.shiftKey ? 10 : 2;
            const delta = ["ArrowLeft", "ArrowDown"].includes(e.key) ? -step : step;
            set({
              reveal:
                e.key === "Home"
                  ? 0
                  : e.key === "End"
                    ? 100
                    : clamp(value + delta, 0, 100),
            });
          }
        }}
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden select-none cursor-ew-resize border border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-none"
      >
        {/* After (Base) Image */}
        <img
          src={after}
          alt={imageAlt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before (Clipped) Image */}
        <img
          src={before}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Floating Badges */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-background/80 backdrop-blur-sm text-foreground border border-border/60 pointer-events-none">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-background/80 backdrop-blur-sm text-foreground border border-border/60 pointer-events-none">
          {afterLabel}
        </span>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${value}%` }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-foreground/80 shadow-lg flex items-center justify-center text-foreground transition-transform"
            style={{
              transform: `translate(${value < 4 ? "0%" : value > 96 ? "-100%" : "-50%"}, -50%)`,
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
              <polyline points="15 6 21 12 15 18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Segment controls & hint */}
      <div className="flex items-center justify-between gap-3 py-4 mt-1 border-b border-border flex-wrap">
        <span className="text-xs text-muted-foreground">
          Drag to reveal the difference
        </span>
        <div
          className="inline-flex items-center p-1 rounded-xl bg-muted/70 border border-border/50 text-xs"
          role="group"
          aria-label="Comparison position"
        >
          {[
            [100, "Before"],
            [50, "Split"],
            [0, "After"],
          ].map(([n, label]) => {
            const isSelected = Math.abs(value - Number(n)) < 0.5;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={isSelected}
                onClick={() => set({ reveal: Number(n) })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-background text-foreground shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grade Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 text-xs border-b border-border">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
            01 / Tone
          </span>
          <p className="font-medium text-foreground">A little more depth.</p>
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
            02 / Colour
          </span>
          <p className="font-medium text-foreground">A quieter balance.</p>
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
            03 / Detail
          </span>
          <p className="font-medium text-foreground">Nothing overlooked.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between gap-4 flex-wrap pt-4 text-[11px] text-muted-foreground">
        <span>Curated colour treatment</span>
        <span>Drag or use arrow keys</span>
      </footer>
    </section>
  );
}
