"use client"

/**
 * Wallet, from Bevel: skeuomorphic React components for shadcn.
 * A customer's stored balance, shown as a leather wallet. Saved cards sit in it, and picking one pulls it out of the pocket.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/wallet) are at
 * https://bevel-ui.vercel.app/components/wallet
 */

import * as React from "react"
import { cn } from "cn"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { Meter as MeterPrimitive } from "@base-ui/react/meter"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup } from "@base-ui/react/radio-group"
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-wallet"
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
.active\:bevel-pressed:active { background-color: color-mix(in oklch, var(--bevel-material), black 4%);
background-image: none;
box-shadow: var(--bevel-depth-pressed) }
.data-pressed\:bevel-pressed[data-pressed] { background-color: color-mix(in oklch, var(--bevel-material), black 4%);
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
.before\:bevel-stitch::before { border-color: var(--bevel-stitch, oklch(0.88 0.05 82 / 0.8));
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

/* styles/payment-card.css */
:root {
  --payment-card-sapphire: oklch(0.55 0.14 258);
  --payment-card-sapphire-foreground: oklch(0.98 0.01 258);
  --payment-card-gold: oklch(0.8 0.11 86);
  --payment-card-gold-foreground: oklch(0.28 0.04 70);
  --payment-card-graphite: oklch(0.27 0.015 260);
  --payment-card-graphite-foreground: oklch(0.93 0.005 260);
  --payment-card-chip: oklch(0.8 0.09 85);
}

[data-slot="payment-card"][data-tone="sapphire"] {
  --bevel-material: var(--payment-card-sapphire);
  --payment-card-foreground: var(--payment-card-sapphire-foreground);
}
[data-slot="payment-card"][data-tone="gold"] {
  --bevel-material: var(--payment-card-gold);
  --payment-card-foreground: var(--payment-card-gold-foreground);
}
[data-slot="payment-card"][data-tone="graphite"] {
  --bevel-material: var(--payment-card-graphite);
  --payment-card-foreground: var(--payment-card-graphite-foreground);
}

/* styles/wallet.css */
:root {
  --wallet-leather: oklch(0.47 0.085 52);
  --wallet-lining: oklch(0.36 0.07 46);
  --wallet-edge: oklch(0.3 0.06 44);
  --wallet-recess: oklch(0.29 0.055 44);
  --wallet-foreground: oklch(0.97 0.02 82);
  --wallet-muted-foreground: oklch(0.88 0.035 72);
  --wallet-stitch: oklch(0.88 0.05 82 / 0.8);
  --wallet-meter: oklch(0.84 0.12 85);
  --wallet-ok: oklch(0.82 0.18 150);
  --wallet-low: oklch(0.86 0.16 82);
  --wallet-danger: oklch(0.72 0.19 28);
  --wallet-notch: 1.75rem;
  --wallet-card-peek: 2.25rem;
  --wallet-card-pull: 0.5rem;
  --wallet-card-enter: 3rem;
  --wallet-card-step: 1.25rem;
  --wallet-card-step-pick: 2rem;
  --wallet-card-lift: 0px;
  --wallet-card-slots: 3;
}

[data-slot="wallet"][data-variant="noir"] {
  --wallet-leather: oklch(0.29 0.008 260);
  --wallet-lining: oklch(0.22 0.008 260);
  --wallet-edge: oklch(0.16 0.006 260);
  --wallet-recess: oklch(0.17 0.006 260);
  --wallet-foreground: oklch(0.96 0.004 260);
  --wallet-muted-foreground: oklch(0.8 0.008 260);
  --wallet-stitch: oklch(0.72 0.01 260 / 0.75);
  --wallet-meter: oklch(0.88 0.01 260);
}

[data-slot="wallet"][data-variant="oxblood"] {
  --wallet-leather: oklch(0.38 0.105 22);
  --wallet-lining: oklch(0.29 0.085 20);
  --wallet-edge: oklch(0.23 0.07 20);
  --wallet-recess: oklch(0.22 0.065 20);
  --wallet-foreground: oklch(0.96 0.02 70);
  --wallet-muted-foreground: oklch(0.87 0.035 50);
  --wallet-stitch: oklch(0.86 0.05 75 / 0.75);
}
[data-slot="wallet"] {
  --bevel-material: var(--wallet-lining);
  --bevel-material-edge: var(--wallet-edge);
  --bevel-material-recess: var(--wallet-recess);
  --bevel-stitch: var(--wallet-stitch);
  --bevel-fill: var(--wallet-meter);
  --bevel-led: var(--wallet-ok);
}
[data-slot="wallet-pocket"] {
  --bevel-material: var(--wallet-leather);
}
[data-slot="wallet"][data-status="low"] {
  --bevel-fill: var(--wallet-low);
  --bevel-led: var(--wallet-low);
}
[data-slot="wallet"]:is([data-status="empty"], [data-status="insufficient"]) {
  --bevel-fill: var(--wallet-danger);
  --bevel-led: var(--wallet-danger);
}
.wallet-pocket { background-color: var(--bevel-material);
background-image:
    radial-gradient(
      circle at 50% 0,
      transparent var(--wallet-notch),
      var(--bevel-highlight) calc(var(--wallet-notch) + 1px),
      transparent calc(var(--wallet-notch) + 4px)
    ),
    var(--bevel-grain),
    linear-gradient(to bottom, var(--bevel-highlight), transparent 28%, transparent 72%, var(--bevel-shade));
background-size: 100% 100%, var(--bevel-grain-size) var(--bevel-grain-size), 100% 100%;
background-blend-mode: normal, soft-light, normal;
box-shadow:
    inset 0 1px 0 var(--bevel-highlight),
    inset 0 2px 0 var(--bevel-shade),
    inset 0 -2px 3px var(--bevel-shade);
mask-image: radial-gradient(circle at 50% 0, transparent var(--wallet-notch), black calc(var(--wallet-notch) + 0.5px)) }
@layer components {
  [data-slot="wallet-cards"] {
    --wallet-card-gap: calc(
      var(--wallet-card-step) * (var(--wallet-card-slots) - 1) /
        max(var(--wallet-card-count) - 1, var(--wallet-card-slots) - 1)
    );
    height: calc(var(--wallet-card-peek) + (var(--wallet-card-slots) - 1) * var(--wallet-card-step));
  }
  [data-slot="wallet-cards"][data-selectable] {
    --wallet-card-gap: var(--wallet-card-step-pick);
    height: calc(var(--wallet-card-peek) + max(var(--wallet-card-count) - 1, 0) * var(--wallet-card-step-pick));
  }
}
`
if (typeof document !== "undefined" && !document.getElementById(BEVEL_STYLE_ID)) {
  const style = document.createElement("style")
  style.id = BEVEL_STYLE_ID
  style.textContent = BEVEL_CSS
  document.head.appendChild(style)
}

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

/* ---- components/payment-card.tsx ---- */
type PaymentCardTone = "sapphire" | "gold" | "graphite"

type PaymentCardProps = useRender.ComponentProps<"div"> & {
  tone?: PaymentCardTone
}

/**
 * A plastic payment card. Works on its own, in a list or picker (pass
 * `render={<Radio.Root value="…" />}`), or inside a Wallet.
 */
function PaymentCard({ className, render, tone = "graphite", ...props }: PaymentCardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        "data-slot": "payment-card",
        "data-tone": tone,
        className: cn(
          "bevel-plastic relative flex aspect-[85.6/53.98] w-full items-start gap-2 overflow-hidden rounded-(--bevel-radius-md) px-3 pt-1 text-(--payment-card-foreground) outline-none select-none",
          "focus-visible:ring-2 focus-visible:ring-(--payment-card-foreground)/80",
          "data-disabled:cursor-not-allowed data-disabled:brightness-75 data-disabled:saturate-50",
          "forced-colors:border forced-colors:border-[CanvasText]",
          className
        ),
      } as React.ComponentProps<"div">,
      props
    ),
  })
}

function PaymentCardBrand({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="payment-card-brand"
      className={cn(
        "inline-flex items-center gap-1 text-(length:--bevel-fine) leading-4 font-semibold tracking-(--bevel-tracking-print) uppercase [&_svg]:h-3 [&_svg]:w-auto",
        className
      )}
      {...props}
    />
  )
}

function PaymentCardNumber({
  last4,
  className,
  ...props
}: { last4: string } & Omit<React.ComponentProps<"span">, "children">) {
  return (
    <span
      data-slot="payment-card-number"
      className={cn("ms-auto font-mono text-(length:--bevel-fine) leading-4 tabular-nums", className)}
      {...props}
    >
      <span aria-hidden>•••• </span>
      <span className="sr-only">ending in </span>
      {last4}
    </span>
  )
}

/** The contact chip. Decorative. */
function PaymentCardChip({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="payment-card-chip"
      aria-hidden
      className={cn(
        "bevel-metal absolute top-[38%] left-[9%] aspect-[4/3] w-[13%] rounded-(--bevel-radius-xs) [--bevel-material:var(--payment-card-chip)]",
        className
      )}
      {...props}
    />
  )
}

export { PaymentCard, PaymentCardBrand, PaymentCardNumber, PaymentCardChip }
export type { PaymentCardProps, PaymentCardTone }

/* ---- components/wallet.tsx ---- */
type WalletVariant = "saddle" | "noir" | "oxblood"
type WalletStatus = "default" | "low" | "empty" | "insufficient"

type WalletProps = useRender.ComponentProps<"div"> & {
  /** Leather finish. */
  variant?: WalletVariant
  /** Drives the status light, meter fill and any `group-data-[status=*]/wallet` styling. */
  status?: WalletStatus
}

function cssVars(vars: Record<`--${string}`, string | number>) {
  return vars as React.CSSProperties
}

const WalletContext = React.createContext<{ status: WalletStatus }>({ status: "default" })

function Wallet({
  className,
  render,
  variant = "saddle",
  status = "default",
  ...props
}: WalletProps) {
  const context = React.useMemo(() => ({ status }), [status])
  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        "data-slot": "wallet",
        "data-variant": variant,
        "data-status": status,
        className: cn(
          "group/wallet bevel-leather bevel-object relative isolate flex w-full max-w-sm flex-col rounded-(--bevel-radius-lg) text-left text-(--wallet-foreground) outline-none",
          "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          // Stitching follows the outline: inner radius = outer radius - inset.
          "before:bevel-stitch before:pointer-events-none before:absolute before:inset-(--bevel-stitch-inset) before:rounded-[calc(var(--bevel-radius-lg)-var(--bevel-stitch-inset))]",
          "forced-colors:border forced-colors:border-[CanvasText]",
          className
        ),
      } as React.ComponentProps<"div">,
      props
    ),
  })
  return <WalletContext value={context}>{element}</WalletContext>
}

type WalletCardsContextValue = {
  selectable: boolean
  /** True once the stack has mounted; read by each card on its first render only. */
  mountedRef: React.RefObject<boolean>
}
const WalletCardsContext = React.createContext<WalletCardsContextValue>({
  selectable: false,
  mountedRef: { current: false },
})
const WalletCardPositionContext = React.createContext({ index: 0, count: 1 })

type WalletCardsProps = Omit<RadioGroup.Props<string>, "render" | "style"> & {
  style?: React.CSSProperties
  /** Cards the slot shows spread out. More than this bunch together; the slot never grows. */
  slots?: number
}

/**
 * The cards tucked in the wallet, back to front. Passing `value`,
 * `defaultValue` or `onValueChange` makes them a radio group: the chosen
 * card is pulled up out of the pocket.
 */
function WalletCards({
  className,
  style,
  children,
  value,
  defaultValue,
  onValueChange,
  slots = 3,
  ...props
}: WalletCardsProps) {
  const selectable = value !== undefined || defaultValue !== undefined || onValueChange !== undefined
  const items = React.Children.toArray(children)

  // Cards present on first render are already in the wallet; only cards
  // added afterwards slide in.
  const mountedRef = React.useRef(false)
  React.useEffect(() => {
    mountedRef.current = true
  }, [])
  const context = React.useMemo(() => ({ selectable, mountedRef }), [selectable])

  const shared = {
    "data-slot": "wallet-cards",
    "data-selectable": selectable ? "" : undefined,
    // Crowded: cards behind the front one show only their edges, so their print hides.
    "data-crowded": !selectable && items.length > slots ? "" : undefined,
    // Height and card spacing live in wallet.css; the slot never animates its size.
    className: cn("relative mx-5 mt-4 shrink-0", !selectable && "pointer-events-none", className),
    style: { ...cssVars({ "--wallet-card-count": items.length, "--wallet-card-slots": slots }), ...style },
    children: items.map((child, index) => (
      <WalletCardPositionContext
        key={React.isValidElement(child) ? child.key : index}
        value={{ index, count: items.length }}
      >
        {child}
      </WalletCardPositionContext>
    )),
  }

  return (
    <WalletCardsContext value={context}>
      {selectable ? (
        <RadioGroup
          aria-label="Payment methods"
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          {...props}
          {...shared}
        />
      ) : (
        <div {...(props as React.ComponentProps<"div">)} {...shared} />
      )}
    </WalletCardsContext>
  )
}

// Resting tilt for each card behind the front one; the front card sits square.
const cardTilts = [-1.25, 0.75, -0.5, 1, -0.75]
const cardTones: PaymentCardTone[] = ["sapphire", "gold", "graphite"]

type WalletCardProps = Omit<PaymentCardProps, "render"> & {
  /** Selection value when the cards are a radio group. Defaults to the card's position. */
  value?: string
  disabled?: boolean
}

/** A PaymentCard placed in the wallet's stack. */
function WalletCard({ className, style, value, disabled, tone, children, ...props }: WalletCardProps) {
  const { selectable, mountedRef } = React.useContext(WalletCardsContext)
  const { index, count } = React.useContext(WalletCardPositionContext)
  const [enters] = React.useState(() => mountedRef.current)
  const fromFront = count - 1 - index

  return (
    <PaymentCard
      tone={tone ?? cardTones[index % cardTones.length]}
      render={
        selectable ? (
          <RadioPrimitive.Root value={value ?? String(index)} disabled={disabled} />
        ) : undefined
      }
      aria-hidden={selectable || children ? undefined : true}
      data-wallet-card=""
      data-enter={enters ? "" : undefined}
      className={cn(
        // Only the top strip shows above the pocket, so the card is shorter than a real one.
        "absolute inset-x-0 top-0 aspect-auto h-32",
        "[translate:0_calc(var(--wallet-card-index)*var(--wallet-card-gap)+var(--wallet-card-lift))] rotate-(--wallet-card-tilt)",
        "transition-[translate,rotate,opacity,filter] duration-(--bevel-duration-move) ease-(--bevel-ease-out) motion-reduce:transition-none",
        "group-hover/wallet:not-data-checked:[--wallet-card-lift:calc(var(--bevel-lift)*-1)] group-hover/wallet:not-data-checked:delay-[calc(var(--wallet-card-index)*var(--bevel-stagger))]",
        // Pulled out with a spring; it straightens as it comes up.
        "data-checked:rotate-0 data-checked:ease-(--bevel-ease-spring) data-checked:[--wallet-card-lift:calc(var(--wallet-card-pull)*-1)]",
        "data-enter:starting:opacity-0 data-enter:starting:[--wallet-card-lift:calc(var(--wallet-card-enter)*-1)]",
        "[&[role=radio]]:cursor-pointer [&[role=radio]]:not-data-checked:brightness-(--bevel-dim)",
        // In a crowded slot only the front card's print shows; the rest stay readable to screen readers.
        "in-data-crowded:not-last:*:opacity-0",
        className
      )}
      style={{
        ...cssVars({
          "--wallet-card-index": index,
          "--wallet-card-tilt": `${fromFront === 0 ? 0 : cardTilts[(fromFront - 1) % cardTilts.length]}deg`,
        }),
        ...style,
      }}
      {...props}
    >
      {children}
    </PaymentCard>
  )
}

function WalletPocket({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="wallet-pocket"
      className={cn(
        "wallet-pocket relative z-10 flex flex-col gap-4 rounded-t-(--bevel-radius-xs) rounded-b-(--bevel-radius-lg) px-5 pt-9 pb-5",
        "forced-colors:border-t forced-colors:border-[CanvasText]",
        className
      )}
      {...props}
    >
      {/* The pocket's top is a fold, so it is stitched on three sides only. */}
      <span
        aria-hidden
        className="bevel-stitch pointer-events-none absolute inset-x-(--bevel-stitch-inset) top-0 bottom-(--bevel-stitch-inset) rounded-b-[calc(var(--bevel-radius-lg)-var(--bevel-stitch-inset))] border-t-0"
      />
      {children}
    </div>
  )
}

function WalletHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="wallet-header"
      className={cn("flex items-center justify-between gap-3", className)}
      {...props}
    />
  )
}

function WalletLabel({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="wallet-label"
      className={cn(
        "bevel-deboss text-(length:--bevel-label) font-semibold tracking-(--bevel-tracking-label) text-(--wallet-muted-foreground) uppercase",
        className
      )}
      {...props}
    />
  )
}

const statusText: Record<WalletStatus, string> = {
  default: "Active",
  low: "Low balance",
  empty: "Empty",
  insufficient: "Insufficient",
}

/** Status light. Reads the wallet's `status`; pass children to override the text. */
function WalletStatusLight({ className, children, ...props }: React.ComponentProps<"span">) {
  const { status } = React.useContext(WalletContext)
  return (
    <span
      data-slot="wallet-status"
      className={cn(
        "bevel-deboss inline-flex items-center gap-1.5 text-(length:--bevel-label) font-medium text-(--wallet-muted-foreground)",
        className
      )}
      {...props}
    >
      <span aria-hidden className="bevel-led size-2 shrink-0 rounded-full" />
      {children ?? statusText[status]}
    </span>
  )
}

const isMinor = (type: Intl.NumberFormatPartTypes) =>
  type === "currency" || type === "decimal" || type === "fraction" || type === "literal"
const isMuted = (type: Intl.NumberFormatPartTypes) =>
  type === "currency" || type === "decimal" || type === "fraction"

function WalletBalance({
  value,
  currency,
  locale,
  format,
  className,
  ...props
}: AmountFormat & Omit<React.ComponentProps<"p">, "children">) {
  const parts = useAmountParts({ value, currency, locale, format })
  return (
    <p
      data-slot="wallet-balance"
      className={cn("bevel-deboss flex items-baseline font-semibold tracking-tight", className)}
      {...props}
    >
      {parts.map((part, i) => (
        <span
          key={i}
          data-part={part.type}
          className={cn(
            "text-(length:--bevel-amount) leading-none",
            isDigitPart(part.type) && "tabular-nums",
            isMinor(part.type) && "text-(length:--bevel-amount-minor)",
            isMuted(part.type) && "text-(--wallet-muted-foreground)",
            part.type === "currency" && "mr-0.5 self-start pt-1",
            part.type === "minusSign" && "mr-0.5"
          )}
        >
          {part.value}
        </span>
      ))}
    </p>
  )
}

/** Inline amount for detail rows; same formatting as the balance. */
function WalletAmount(props: React.ComponentProps<typeof Amount>) {
  return <Amount data-wallet-amount="" {...props} />
}

function WalletDetails({ className, ...props }: React.ComponentProps<"dl">) {
  return (
    <dl data-slot="wallet-details" className={cn("flex flex-col gap-1.5 text-sm", className)} {...props} />
  )
}

function WalletDetail({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="wallet-detail"
      className={cn("bevel-deboss flex items-baseline justify-between gap-4", className)}
      {...props}
    />
  )
}

function WalletDetailLabel({ className, ...props }: React.ComponentProps<"dt">) {
  return (
    <dt
      data-slot="wallet-detail-label"
      className={cn("text-(--wallet-muted-foreground)", className)}
      {...props}
    />
  )
}

function WalletDetailValue({ className, ...props }: React.ComponentProps<"dd">) {
  return <dd data-slot="wallet-detail-value" className={cn("font-medium", className)} {...props} />
}

function WalletSeparator({ className, ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="wallet-separator"
      className={cn("bevel-stitch -mx-1 border-x-0 border-b-0", className)}
      {...props}
    />
  )
}

function WalletMeter({ className, children, ...props }: MeterPrimitive.Root.Props) {
  return (
    <MeterPrimitive.Root
      data-slot="wallet-meter"
      className={cn("grid grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-2", className)}
      {...props}
    >
      {children}
      <MeterPrimitive.Track
        data-slot="wallet-meter-track"
        className="bevel-recessed col-span-full h-2 overflow-hidden rounded-full p-px"
      >
        <MeterPrimitive.Indicator
          data-slot="wallet-meter-indicator"
          className="bevel-fill h-full rounded-full forced-colors:bg-[Highlight]"
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  )
}

function WalletMeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      data-slot="wallet-meter-label"
      className={cn("bevel-deboss text-sm text-(--wallet-muted-foreground)", className)}
      {...props}
    />
  )
}

function WalletMeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      data-slot="wallet-meter-value"
      className={cn("bevel-deboss text-sm font-medium tabular-nums", className)}
      {...props}
    />
  )
}

function WalletFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="wallet-footer" className={cn("flex items-center gap-2", className)} {...props} />
  )
}

function WalletAction({ className, ...props }: ButtonPrimitive.Props) {
  return (
    <ButtonPrimitive
      data-slot="wallet-action"
      className={cn(
        "bevel-raised bevel-deboss inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-(--bevel-radius-sm) px-3 text-sm font-medium text-(--wallet-foreground) outline-none select-none",
        "transition-[translate,box-shadow] duration-(--bevel-duration-press) ease-(--bevel-ease-out) motion-reduce:transition-none",
        "active:translate-y-0.5 active:bevel-pressed data-pressed:translate-y-0.5 data-pressed:bevel-pressed",
        "focus-visible:ring-3 focus-visible:ring-(--wallet-foreground)/40",
        "data-disabled:cursor-not-allowed data-disabled:opacity-60 data-disabled:active:translate-y-0",
        "forced-colors:border forced-colors:border-[ButtonText]",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Wallet,
  WalletCards,
  WalletCard,
  WalletPocket,
  WalletHeader,
  WalletLabel,
  WalletStatusLight as WalletStatus,
  WalletBalance,
  WalletAmount,
  WalletDetails,
  WalletDetail,
  WalletDetailLabel,
  WalletDetailValue,
  WalletSeparator,
  WalletMeter,
  WalletMeterLabel,
  WalletMeterValue,
  WalletFooter,
  WalletAction,
}
export type {
  WalletProps,
  WalletCardsProps,
  WalletCardProps,
  WalletVariant,
  WalletStatus as WalletStatusValue,
}
