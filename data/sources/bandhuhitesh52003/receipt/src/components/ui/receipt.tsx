"use client"

/**
 * Receipt, from Bevel: skeuomorphic React components for shadcn.
 * Thermal paper with torn edges. Lines print in as they're added; a stamp or seal lands when it's paid.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/receipt) are at
 * https://bevel-ui.vercel.app/components/receipt
 */

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "cn"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup } from "@base-ui/react/radio-group"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-receipt"
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

/* styles/receipt.css */
:root {
  --receipt-tooth: 0.625rem;
  --receipt-carbon: oklch(0.93 0.07 95);
  --receipt-carbon-offset: 0.375rem;
  --receipt-print-in: 0.5em;
}
.receipt-edges { mask-image:
    conic-gradient(from 135deg at top, transparent, black 1deg 89deg, transparent 90deg),
    conic-gradient(from -45deg at bottom, transparent, black 1deg 89deg, transparent 90deg),
    linear-gradient(black, black);
mask-size:
    var(--receipt-tooth) var(--receipt-tooth),
    var(--receipt-tooth) var(--receipt-tooth),
    100% calc(100% - var(--receipt-tooth));
mask-position: top, bottom, center;
mask-repeat: repeat-x, repeat-x, no-repeat }

.receipt-shadow { filter: drop-shadow(0 1px 1px var(--bevel-cast)) drop-shadow(0 6px 10px var(--bevel-cast)) }

/* styles/stamp.css */
:root {
  --stamp-border: 3px;
  --stamp-tilt: -4deg;
  --stamp-land-scale: 1.4;
  --seal-relief: oklch(0.9 0.01 85);
}

[data-slot="stamp"] {
  --bevel-ink: var(--bevel-ink-red);
}
[data-slot="stamp"][data-tone="blue"] {
  --bevel-ink: var(--bevel-ink-blue);
}
[data-slot="stamp"][data-tone="green"] {
  --bevel-ink: var(--bevel-ink-green);
}
[data-slot="stamp"][data-tone="amber"] {
  --bevel-ink: var(--bevel-ink-amber);
}
[data-slot="stamp"][data-tone="black"] {
  --bevel-ink: var(--bevel-ink-black);
}
.seal-relief { color: var(--seal-relief);
filter: drop-shadow(0 -1px 0 var(--bevel-highlight-strong)) drop-shadow(0 1px 1px var(--bevel-shade)) }

/* styles/ticket-sheet.css */
:root {
  --ticket-hole: 0.25rem;
  --ticket-tear-tilt: -2deg;
  --ticket-tear-lift: 0.375rem;
  --ticket-vermilion: oklch(0.5 0.17 32);
  --ticket-ultramarine: oklch(0.45 0.15 265);
  --ticket-emerald: oklch(0.44 0.1 160);
  --ticket-ochre: oklch(0.78 0.13 80);
  --ticket-light-foreground: oklch(0.98 0.01 90);
  --ticket-dark-foreground: oklch(0.24 0.04 60);
}

[data-slot="ticket"] {
  --ticket-tone: var(--ticket-vermilion);
  --ticket-foreground: var(--ticket-light-foreground);
}
[data-slot="ticket"][data-tone="ultramarine"] {
  --ticket-tone: var(--ticket-ultramarine);
}
[data-slot="ticket"][data-tone="emerald"] {
  --ticket-tone: var(--ticket-emerald);
}
[data-slot="ticket"][data-tone="ochre"] {
  --ticket-tone: var(--ticket-ochre);
  --ticket-foreground: var(--ticket-dark-foreground);
}
.ticket-perforated { padding: calc(var(--ticket-hole) * 2);
mask-image:
    radial-gradient(circle, transparent var(--ticket-hole), black calc(var(--ticket-hole) + 0.5px)),
    linear-gradient(black, black);
mask-size:
    calc(var(--ticket-hole) * 3) calc(var(--ticket-hole) * 3),
    100% 100%;
mask-position:
    calc(var(--ticket-hole) * -1.5) calc(var(--ticket-hole) * -1.5),
    center;
mask-repeat: round, no-repeat;
mask-clip: border-box, content-box;
mask-origin: border-box, content-box }
`
if (typeof document !== "undefined" && !document.getElementById(BEVEL_STYLE_ID)) {
  const style = document.createElement("style")
  style.id = BEVEL_STYLE_ID
  style.textContent = BEVEL_CSS
  document.head.appendChild(style)
}

/* ---- components/receipt.tsx ---- */
type ReceiptProps = useRender.ComponentProps<"div"> & {
  /** "carbon" adds the yellow copy behind, offset like a carbon book. */
  variant?: "thermal" | "carbon"
}

const ReceiptContext = React.createContext<{ mountedRef: React.RefObject<boolean> }>({
  mountedRef: { current: false },
})

/** A strip of thermal paper. Lines added after it renders print in. */
function Receipt({ className, render, variant = "thermal", children, ...props }: ReceiptProps) {
  const mountedRef = React.useRef(false)
  React.useEffect(() => {
    mountedRef.current = true
  }, [])
  const context = React.useMemo(() => ({ mountedRef }), [])

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        "data-slot": "receipt",
        "data-variant": variant,
        className: cn("receipt-shadow relative isolate w-full max-w-xs", className),
        children: (
          <>
            {variant === "carbon" && (
              <div
                aria-hidden
                data-slot="receipt-carbon"
                className="receipt-edges absolute inset-0 -z-10 translate-x-(--receipt-carbon-offset) translate-y-(--receipt-carbon-offset) rotate-1 bg-(--receipt-carbon)"
              />
            )}
            <div
              data-slot="receipt-paper"
              className="bevel-paper receipt-edges flex flex-col gap-3 px-5 py-7 font-mono text-sm shadow-none"
            >
              {children}
            </div>
          </>
        ),
      } as React.ComponentProps<"div">,
      props
    ),
  })
  return <ReceiptContext value={context}>{element}</ReceiptContext>
}

function ReceiptHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="receipt-header"
      className={cn("flex flex-col items-center gap-0.5 text-center", className)}
      {...props}
    />
  )
}

function ReceiptTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="receipt-title"
      className={cn("font-bold tracking-(--bevel-tracking-label) uppercase", className)}
      {...props}
    />
  )
}

function ReceiptMeta({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="receipt-meta"
      className={cn("text-(length:--bevel-fine) text-(--bevel-paper-muted)", className)}
      {...props}
    />
  )
}

function ReceiptItems({ className, ...props }: React.ComponentProps<"dl">) {
  return <dl data-slot="receipt-items" className={cn("flex flex-col gap-1", className)} {...props} />
}

/** One line. Lines added after the receipt renders print in from above. */
function ReceiptItem({ className, ...props }: React.ComponentProps<"div">) {
  const { mountedRef } = React.useContext(ReceiptContext)
  const [prints] = React.useState(() => mountedRef.current)
  return (
    <div
      data-slot="receipt-item"
      data-enter={prints ? "" : undefined}
      className={cn(
        "flex items-baseline gap-2",
        "transition-[translate,opacity] duration-(--bevel-duration-move) ease-(--bevel-ease-out) motion-reduce:transition-none",
        "data-enter:starting:-translate-y-(--receipt-print-in) data-enter:starting:opacity-0",
        className
      )}
      {...props}
    />
  )
}

/** The item's name, followed by a dotted leader to the value. */
function ReceiptLabel({ className, ...props }: React.ComponentProps<"dt">) {
  return (
    <dt
      data-slot="receipt-label"
      className={cn(
        "flex min-w-0 flex-1 items-baseline gap-2 after:min-w-4 after:flex-1 after:border-b after:border-dotted after:border-current/40 after:content-['']",
        className
      )}
      {...props}
    />
  )
}

function ReceiptValue({ className, ...props }: React.ComponentProps<"dd">) {
  return <dd data-slot="receipt-value" className={cn("whitespace-nowrap", className)} {...props} />
}

function ReceiptSeparator({ className, ...props }: React.ComponentProps<"hr">) {
  return (
    <hr
      data-slot="receipt-separator"
      className={cn("border-0 border-t border-dashed border-current/40", className)}
      {...props}
    />
  )
}

/** The total line: same parts as an item, printed bold. A list of its own. */
function ReceiptTotal({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <dl data-slot="receipt-total">
      <ReceiptItem
        className={cn("text-base font-bold [&_[data-slot=receipt-label]]:after:border-transparent", className)}
        {...props}
      />
    </dl>
  )
}

function ReceiptFooter({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="receipt-footer"
      className={cn("text-center text-(length:--bevel-fine) text-(--bevel-paper-muted)", className)}
      {...props}
    />
  )
}

type ReceiptMarkProps = React.ComponentProps<"div"> & {
  /**
   * Press the mark over the printed lines instead of in its own space. Only
   * use it where it can't cover anything that must stay readable.
   */
  overlay?: boolean
}

/** Holds a Stamp or Seal. By default it prints in its own space on the receipt, so it never covers a figure. */
function ReceiptMark({ className, overlay = false, ...props }: ReceiptMarkProps) {
  return (
    <div
      data-slot="receipt-mark"
      data-overlay={overlay ? "" : undefined}
      className={cn(
        "pointer-events-none flex min-h-14 items-center justify-center",
        "data-overlay:absolute data-overlay:right-6 data-overlay:bottom-12 data-overlay:z-10 data-overlay:min-h-0",
        className
      )}
      {...props}
    />
  )
}

export {
  Receipt,
  ReceiptHeader,
  ReceiptTitle,
  ReceiptMeta,
  ReceiptItems,
  ReceiptItem,
  ReceiptLabel,
  ReceiptValue,
  ReceiptSeparator,
  ReceiptTotal,
  ReceiptFooter,
  ReceiptMark,
}
export type { ReceiptProps, ReceiptMarkProps }

/* ---- lib/format-amount.ts ---- */
type AmountFormat = {
  value: number
  /** ISO 4217 code. Omit for a plain number (credits, tokens…). */
  currency?: string
  /** Fixed by default so server and client render the same string. */
  locale?: Intl.LocalesArgument
  /** Merged over the defaults. */
  format?: Intl.NumberFormatOptions
}

function formatAmountParts({ value, currency, locale = "en-US", format }: AmountFormat) {
  return new Intl.NumberFormat(locale, {
    ...(currency ? { style: "currency", currency } : { maximumFractionDigits: 0 }),
    ...format,
  }).formatToParts(value)
}

function formatAmount(options: AmountFormat) {
  return formatAmountParts(options)
    .map((part) => part.value)
    .join("")
}

function useAmountParts({ value, currency, locale, format }: AmountFormat) {
  return React.useMemo(
    () => formatAmountParts({ value, currency, locale, format }),
    [value, currency, locale, format]
  )
}

// Tabular figures keep digits from shifting as amounts change, but some
// fonts make separators tabular too, so apply them to digit groups only.
const isDigitPart = (type: Intl.NumberFormatPartTypes) =>
  type === "integer" || type === "fraction"

/* ---- components/amount.tsx ---- */
type AmountProps = AmountFormat &
  Omit<React.ComponentProps<"span">, "children"> & {
    /** Show a leading + for positive values, for credits in a ledger. */
    signed?: boolean
  }

/** A formatted amount with steady digits. The building block for every figure in Bevel. */
function Amount({ value, currency, locale, format, signed, className, ...props }: AmountProps) {
  const parts = useAmountParts({
    value,
    currency,
    locale,
    format: signed ? { signDisplay: "exceptZero", ...format } : format,
  })
  return (
    <span
      data-slot="amount"
      data-sign={value > 0 ? "positive" : value < 0 ? "negative" : "zero"}
      className={cn("whitespace-nowrap", className)}
      {...props}
    >
      {parts.map((part, i) => (
        <span key={i} className={isDigitPart(part.type) ? "tabular-nums" : undefined}>
          {part.value}
        </span>
      ))}
    </span>
  )
}

export { Amount }
export type { AmountProps }

/* ---- components/stamp.tsx ---- */
type StampProps = React.ComponentProps<"span"> & {
  tone?: "red" | "blue" | "green" | "amber" | "black"
  shape?: "rect" | "round"
  /** Land with a press when it appears. Use for the moment something happens, not for lists. */
  animate?: boolean
}

/** A rubber-stamp impression: inked text that soaks into the surface. */
function Stamp({ className, tone = "red", shape = "rect", animate, ...props }: StampProps) {
  return (
    <span
      data-slot="stamp"
      data-tone={tone}
      data-shape={shape}
      data-animate={animate ? "" : undefined}
      className={cn(
        "bevel-ink inline-flex flex-col items-center justify-center gap-0.5 border-(length:--stamp-border) border-double px-2 py-1 text-center text-(length:--bevel-label) leading-none font-black tracking-(--bevel-tracking-label) uppercase select-none",
        "rotate-(--stamp-tilt) data-[shape=rect]:rounded-(--bevel-radius-xs) data-[shape=round]:aspect-square data-[shape=round]:rounded-full data-[shape=round]:p-3",
        "data-animate:transition-[scale,opacity] data-animate:duration-(--bevel-duration-move) data-animate:ease-(--bevel-ease-spring)",
        "data-animate:starting:scale-(--stamp-land-scale) data-animate:starting:opacity-0 motion-reduce:transition-none",
        "forced-colors:mix-blend-normal forced-colors:mask-none",
        className
      )}
      {...props}
    />
  )
}

/** A second, smaller line on a stamp: a date or reference. */
function StampDetail({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="stamp-detail"
      className={cn("text-(length:--bevel-fine) font-bold tracking-(--bevel-tracking-print)", className)}
      {...props}
    />
  )
}

type SealProps = Omit<React.ComponentProps<"span">, "children"> & {
  /** Text set around the rim. */
  text: string
  /** A short mark in the centre. */
  children?: React.ReactNode
  /** Press it into the paper when it appears. */
  animate?: boolean
}

/** An embossed seal pressed into paper: colourless relief, readable by its shadow. */
function Seal({ className, text, children, animate, ...props }: SealProps) {
  const id = React.useId()
  return (
    <span
      data-slot="seal"
      role="img"
      aria-label={typeof children === "string" ? `${text}, ${children}` : text}
      data-animate={animate ? "" : undefined}
      className={cn(
        "seal-relief relative inline-flex aspect-square w-28 items-center justify-center select-none",
        "data-animate:transition-[scale,opacity] data-animate:duration-(--bevel-duration-move) data-animate:ease-(--bevel-ease-spring)",
        "data-animate:starting:scale-(--stamp-land-scale) data-animate:starting:opacity-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    >
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 size-full">
        <defs>
          <path id={id} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text fill="currentColor" fontSize="9" fontWeight="700" letterSpacing="2">
          <textPath href={`#${id}`}>{text.toUpperCase()}</textPath>
        </text>
      </svg>
      <span
        aria-hidden
        className="relative text-(length:--bevel-label) font-black tracking-(--bevel-tracking-label) uppercase"
      >
        {children}
      </span>
    </span>
  )
}

export { Stamp, StampDetail, Seal }
export type { StampProps, SealProps }

/* ---- components/ticket-sheet.tsx ---- */
type TicketSheetProps = RadioGroup.Props<string>

/** A sheet of perforated tickets, one per option. Picking one tears it off. */
function TicketSheet({ className, ...props }: TicketSheetProps) {
  return (
    <RadioGroup
      data-slot="ticket-sheet"
      className={cn("bevel-paper grid grid-cols-2 gap-1 rounded-(--bevel-radius-xs) p-3", className)}
      {...props}
    />
  )
}

type TicketProps = RadioPrimitive.Root.Props<string> & {
  tone?: "vermilion" | "ultramarine" | "emerald" | "ochre"
}

function Ticket({ className, tone = "vermilion", children, ...props }: TicketProps) {
  return (
    <RadioPrimitive.Root
      data-slot="ticket"
      data-tone={tone}
      className={cn(
        "ticket-perforated group/ticket relative block cursor-pointer bg-(--bevel-paper) outline-none select-none",
        "transition-[translate,rotate,filter] duration-(--bevel-duration-move) ease-(--bevel-ease-spring) motion-reduce:transition-none",
        "data-checked:-translate-y-(--ticket-tear-lift) data-checked:rotate-(--ticket-tear-tilt) data-checked:drop-shadow-(--bevel-depth-cast-sm)",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ticket-tone)",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span
        data-slot="ticket-face"
        className="relative flex h-full flex-col items-start gap-1 bg-(--ticket-tone) p-3 text-(--ticket-foreground) shadow-(--bevel-depth-flush) outline outline-1 -outline-offset-4 outline-current/40"
      >
        {children}
      </span>
    </RadioPrimitive.Root>
  )
}

function TicketValue({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="ticket-value"
      className={cn("text-(length:--bevel-amount-minor) leading-none font-black tabular-nums", className)}
      {...props}
    />
  )
}

function TicketLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="ticket-label"
      className={cn(
        "text-(length:--bevel-fine) font-bold tracking-(--bevel-tracking-print) uppercase",
        className
      )}
      {...props}
    />
  )
}

/** Small print: a fee or what the option includes. */
function TicketNote({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="ticket-note"
      className={cn("mt-auto text-(length:--bevel-fine)", className)}
      {...props}
    />
  )
}

export { TicketSheet, Ticket, TicketValue, TicketLabel, TicketNote }
export type { TicketSheetProps, TicketProps }
