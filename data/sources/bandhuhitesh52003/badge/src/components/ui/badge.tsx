"use client"

/**
 * Badge, from Bevel: skeuomorphic React components for shadcn.
 * A small printed plate with an indicator lamp, for status in tables, lists and headings. Five tones; a lamp is lit while its condition holds and dark when it doesn't. Lamps burn steady and never blink.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/badge) are at
 * https://bevel-ui.vercel.app/components/badge
 */

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "cn"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-badge"
const BEVEL_CSS = String.raw`
/* styles/bevel.css */
:root {
  --bevel-highlight: oklch(1 0 0 / 0.22);
  --bevel-highlight-strong: oklch(1 0 0 / 0.35);
  --bevel-shade: oklch(0 0 0 / 0.32);
  --bevel-shade-strong: oklch(0 0 0 / 0.5);
  --bevel-cast: oklch(0.25 0.03 50 / 0.22);
  --bevel-deboss: 0 -1px 0 oklch(0 0 0 / 0.45), 0 1px 0 oklch(1 0 0 / 0.12);
  --bevel-material: oklch(0.47 0.085 52);
  --bevel-material-edge: oklch(0.3 0.06 44);
  --bevel-material-recess: oklch(0.2 0.008 260);
  --bevel-grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .7 0 0 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
  --bevel-grain-size: 180px;
  --bevel-depth-recessed:
    inset 0 1px 2px var(--bevel-shade-strong),
    0 1px 0 var(--bevel-highlight);
  --bevel-depth-flush:
    inset 0 1px 0 var(--bevel-highlight),
    inset 0 -1px 0 var(--bevel-shade);
  --bevel-depth-raised:
    inset 0 1px 0 var(--bevel-highlight),
    0 1px 0 var(--bevel-material-edge),
    0 2px 0 var(--bevel-material-edge),
    0 3px 5px var(--bevel-shade);
  --bevel-depth-pressed:
    inset 0 1px 2px var(--bevel-shade),
    0 1px 0 var(--bevel-highlight);
  --bevel-depth-object:
    inset 0 1px 0 var(--bevel-highlight),
    inset 0 -1px 0 var(--bevel-shade),
    0 0 0 1px var(--bevel-material-edge),
    0 1px 1px var(--bevel-cast),
    0 6px 12px -2px var(--bevel-cast),
    0 18px 32px -8px var(--bevel-cast);
  --bevel-depth-cast-sm: 0 4px 6px var(--bevel-cast);
  --bevel-depth-sheet:
    inset 0 1px 0 var(--bevel-highlight-strong),
    inset 0 0 0 1px oklch(0 0 0 / 0.12),
    0 -1px 2px oklch(0 0 0 / 0.18);
  --bevel-ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --bevel-ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --bevel-ease-spring: linear(0, 0.06, 0.202, 0.38, 0.561, 0.723, 0.856, 0.955, 1.023, 1.062, 1.081, 1.083, 1.075, 1.062, 1.047, 1.032, 1.019, 1.009, 1.002, 0.997, 0.994, 0.993, 0.993, 0.994, 1);
  --bevel-duration-press: 100ms;
  --bevel-duration-small: 200ms;
  --bevel-duration-move: 300ms;
  --bevel-duration-ambient: 520ms;
  --bevel-stagger: 30ms;
  --bevel-lift: 3px;
  --bevel-perspective: 30rem;
  --bevel-dim: 0.82;
  --bevel-radius-xs: 0.25rem;
  --bevel-radius-sm: 0.5rem;
  --bevel-radius-md: 0.625rem;
  --bevel-radius-lg: 1rem;
  --bevel-radius-xl: 1.5rem;
  --bevel-stitch-width: 1.5px;
  --bevel-stitch-inset: 0.375rem;
  --bevel-amount: 2.25rem;
  --bevel-amount-minor: 1.25rem;
  --bevel-label: 0.75rem;
  --bevel-fine: 0.6875rem;
  --bevel-tracking-label: 0.08em;
  --bevel-tracking-print: 0.06em;
  --bevel-paper: oklch(0.975 0.008 85);
  --bevel-paper-foreground: oklch(0.28 0.02 260);
  --bevel-paper-muted: oklch(0.48 0.015 260);
  --bevel-paper-rule: oklch(0.78 0.04 240 / 0.45);
  --bevel-paper-margin: oklch(0.68 0.14 25 / 0.45);
  --bevel-fibre: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9 .35' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .18 0 0 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E");
  --bevel-ink-texture: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='i'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -2.4 0 0 0 2.1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23i)'/%3E%3C/svg%3E");
  --bevel-ink-red: oklch(0.52 0.19 27);
  --bevel-ink-blue: oklch(0.44 0.14 262);
  --bevel-ink-green: oklch(0.5 0.12 155);
  --bevel-ink-black: oklch(0.3 0.01 260);
  --bevel-ink-amber: oklch(0.55 0.13 65);
  --bevel-brass: oklch(0.76 0.11 82);
  --bevel-brass-edge: oklch(0.52 0.08 70);
  --bevel-ivory: oklch(0.95 0.025 90);
  --bevel-ivory-foreground: oklch(0.25 0.015 60);
  --bevel-needle: oklch(0.55 0.2 27);
  --bevel-pad: oklch(0.95 0.075 98);
  --bevel-pad-foreground: oklch(0.27 0.03 255);
  --bevel-pad-rule: oklch(0.72 0.06 235 / 0.45);
  --bevel-pad-margin: oklch(0.62 0.16 25 / 0.55);
  --bevel-pen-red: oklch(0.52 0.2 27);
  --bevel-pen-blue: oklch(0.42 0.15 262);
  --bevel-pencil: oklch(0.55 0.01 260);
  --bevel-sticker: oklch(0.9 0.12 95);
  --bevel-sticker-foreground: oklch(0.26 0.03 70);
  --bevel-font-marker: "Permanent Marker", "Marker Felt", "Chalkboard SE", ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif;
}

.dark {
  --bevel-highlight: oklch(1 0 0 / 0.14);
  --bevel-paper: oklch(0.88 0.008 85);
  --bevel-ivory: oklch(0.86 0.022 90);
  --bevel-pad: oklch(0.86 0.07 98);
  --bevel-cast: oklch(0 0 0 / 0.55);
}
.bevel-recessed { background-color: var(--bevel-material-recess);
box-shadow: var(--bevel-depth-recessed) }
.bevel-flush { box-shadow: var(--bevel-depth-flush) }
.bevel-raised { background-color: color-mix(in oklch, var(--bevel-material), white 7%);
background-image: linear-gradient(to bottom, var(--bevel-highlight), transparent 60%);
box-shadow: var(--bevel-depth-raised) }
.bevel-pressed { background-color: color-mix(in oklch, var(--bevel-material), black 4%);
background-image: none;
box-shadow: var(--bevel-depth-pressed) }
.bevel-object { box-shadow: var(--bevel-depth-object) }
.bevel-leather { background-color: var(--bevel-material);
background-image:
    var(--bevel-grain),
    linear-gradient(to bottom, var(--bevel-highlight), transparent 28%, transparent 72%, var(--bevel-shade));
background-size: var(--bevel-grain-size) var(--bevel-grain-size), 100% 100%;
background-blend-mode: soft-light, normal }
.bevel-plastic { background-color: var(--bevel-material);
background-image:
    linear-gradient(115deg, var(--bevel-highlight-strong), transparent 40%),
    linear-gradient(to bottom, transparent 25%, oklch(0 0 0 / 0.45));
box-shadow: var(--bevel-depth-sheet) }
.bevel-metal { background-color: var(--bevel-material);
background-image:
    linear-gradient(to bottom, var(--bevel-highlight-strong), transparent 45%, var(--bevel-shade) 100%),
    repeating-linear-gradient(90deg, oklch(1 0 0 / 0.06) 0 1px, transparent 1px 3px);
box-shadow:
    inset 0 0 0 1px oklch(0 0 0 / 0.25),
    inset 0 1px 0 var(--bevel-highlight-strong) }
.bevel-deboss { text-shadow: var(--bevel-deboss) }
.bevel-stitch { border-color: var(--bevel-stitch, oklch(0.88 0.05 82 / 0.8));
border-style: dashed;
border-width: var(--bevel-stitch-width);
filter: drop-shadow(0 1px 0 var(--bevel-shade)) }
.bevel-fill { background-color: var(--bevel-fill);
background-image: linear-gradient(to bottom, oklch(1 0 0 / 0.55), transparent 55%, oklch(0 0 0 / 0.18));
box-shadow: 0 0 6px -1px var(--bevel-fill) }
.bevel-led { background-color: var(--bevel-led);
background-image: radial-gradient(circle at 35% 30%, oklch(1 0 0 / 0.85), transparent 45%);
box-shadow:
    0 0 6px var(--bevel-led),
    inset 0 -1px 1px oklch(0 0 0 / 0.35),
    0 1px 0 var(--bevel-highlight) }
.bevel-paper { background-color: var(--bevel-paper);
background-image: var(--bevel-fibre);
background-size: 240px 240px;
color: var(--bevel-paper-foreground);
box-shadow:
    0 1px 1px var(--bevel-cast),
    0 6px 14px -4px var(--bevel-cast) }
.bevel-ink { color: var(--bevel-ink, var(--bevel-ink-red));
border-color: currentColor;
mix-blend-mode: multiply;
mask-image: var(--bevel-ink-texture);
mask-size: 160px 160px }
.bevel-glass { pointer-events: none;
background-image: linear-gradient(165deg, var(--bevel-highlight-strong) 0%, transparent 38%, transparent 70%, var(--bevel-shade) 100%) }
[data-bevel-family="leather"] {
  --bevel-cast: oklch(0.25 0.03 50 / 0.22);
}
[data-bevel-family="paper"] {
  --bevel-cast: oklch(0.3 0.01 250 / 0.16);
}
.dark :is([data-bevel-family="leather"], [data-bevel-family="paper"]) {
  --bevel-cast: oklch(0 0 0 / 0.55);
}
.bevel-ruled { background-color: var(--bevel-sheet, var(--bevel-paper));
background-image:
    linear-gradient(
      to right,
      transparent calc(var(--bevel-rule-margin) - 1px),
      var(--bevel-sheet-margin, var(--bevel-paper-margin)) calc(var(--bevel-rule-margin) - 1px) calc(var(--bevel-rule-margin) + 1px),
      transparent calc(var(--bevel-rule-margin) + 1px)
    ),
    repeating-linear-gradient(
      to bottom,
      transparent 0 calc(var(--bevel-rule-height) - 1px),
      var(--bevel-sheet-rule, var(--bevel-paper-rule)) calc(var(--bevel-rule-height) - 1px) var(--bevel-rule-height)
    ),
    var(--bevel-fibre);
background-size: 100% 100%, 100% 100%, 240px 240px;
background-attachment: local;
color: var(--bevel-paper-foreground);
box-shadow:
    0 1px 1px var(--bevel-cast),
    0 6px 14px -4px var(--bevel-cast) }

/* styles/badge.css */
:root {
  --badge-plate-color: oklch(0.955 0.004 250);
  --badge-plate-foreground: oklch(0.38 0.012 250);
  --badge-neutral: oklch(0.86 0.02 90);
  --badge-info: oklch(0.7 0.14 245);
  --badge-success: oklch(0.74 0.17 150);
  --badge-warning: oklch(0.8 0.16 75);
  --badge-danger: oklch(0.63 0.22 27);
}

.dark {
  --badge-plate-color: oklch(0.27 0.008 250);
  --badge-plate-foreground: oklch(0.86 0.01 250);
}

[data-slot="badge"] {
  --badge-plate: var(--badge-plate-color);
  --badge-foreground: var(--badge-plate-foreground);
  --badge-plate-edge: inset 0 1px 0 var(--bevel-highlight), inset 0 0 0 1px oklch(0 0 0 / 0.08);
  --badge-lamp: var(--badge-neutral);
  --bevel-led: var(--badge-lamp);
  --badge-lamp-off: color-mix(in oklch, var(--badge-lamp), black 55%);
}
[data-slot="badge"][data-tone="neutral"] {
  --badge-lamp: var(--badge-neutral);
}
[data-slot="badge"][data-tone="info"] {
  --badge-lamp: var(--badge-info);
}
[data-slot="badge"][data-tone="success"] {
  --badge-lamp: var(--badge-success);
}
[data-slot="badge"][data-tone="warning"] {
  --badge-lamp: var(--badge-warning);
}
[data-slot="badge"][data-tone="danger"] {
  --badge-lamp: var(--badge-danger);
}
`
if (typeof document !== "undefined" && !document.getElementById(BEVEL_STYLE_ID)) {
  const style = document.createElement("style")
  style.id = BEVEL_STYLE_ID
  style.textContent = BEVEL_CSS
  document.head.appendChild(style)
}

/* ---- components/badge.tsx ---- */
type BadgeProps = useRender.ComponentProps<"span"> & {
  /** The colour of the lamp's glass. The label says what it means; colour only backs it up. */
  tone?: "neutral" | "info" | "success" | "warning" | "danger"
  /** Whether the lamp is on. Off still shows the tone's glass, dark. Lamps never blink. */
  lit?: boolean
}

/**
 * A status plate: a small printed label with an indicator lamp. Steady,
 * inline, and small enough for table rows and headings.
 */
function Badge({ className, render, tone = "neutral", lit = true, ...props }: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        "data-slot": "badge",
        "data-tone": tone,
        "data-lit": lit ? "" : undefined,
        className: cn(
          "inline-flex h-5 max-w-full shrink-0 items-center gap-1.5 rounded-(--bevel-radius-xs) bg-(--badge-plate) px-1.5 align-middle text-(length:--bevel-fine) leading-none font-semibold tracking-(--bevel-tracking-print) whitespace-nowrap text-(--badge-foreground) uppercase shadow-(--badge-plate-edge)",
          "forced-colors:border forced-colors:border-[CanvasText]",
          "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
          className
        ),
      } as React.ComponentProps<"span">,
      props
    ),
  })
}

/** The indicator lamp. Lit or dark with the badge; decorative, since the label carries the status. */
function BadgeLamp({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="badge-lamp"
      className={cn("relative size-1.5 shrink-0 rounded-full bg-(--badge-lamp-off) shadow-(--bevel-depth-pressed)", className)}
      {...props}
    >
      <span className="bevel-led absolute inset-0 rounded-full opacity-0 transition-opacity duration-(--bevel-duration-small) ease-(--bevel-ease-out) in-data-lit:opacity-100 motion-reduce:transition-none" />
    </span>
  )
}

export { Badge, BadgeLamp }
export type { BadgeProps }
