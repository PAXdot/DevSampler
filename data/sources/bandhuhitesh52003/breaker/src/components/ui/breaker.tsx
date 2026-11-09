"use client"

/**
 * Breaker, from Bevel: skeuomorphic React components for shadcn.
 * A circuit breaker: on, off, or tripped until someone resets it. For spending caps, kill switches and feature flags.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/breaker) are at
 * https://bevel-ui.vercel.app/components/breaker
 */

import * as React from "react"
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-breaker"
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

/* styles/breaker.css */
:root {
  --breaker-panel: oklch(0.36 0.008 260);
  --breaker-panel-edge: oklch(0.22 0.008 260);
  --breaker-body: oklch(0.2 0.006 260);
  --breaker-lever: oklch(0.93 0.008 90);
  --breaker-lever-edge: oklch(0.7 0.01 90);
  --breaker-tripped: oklch(0.6 0.21 27);
  --breaker-on: oklch(0.8 0.17 150);
  --breaker-off: oklch(0.4 0.01 260);

  --breaker-throw: 1.25rem;
  --breaker-slot-height: 4.5rem;
}

[data-slot="breaker-panel"] {
  --bevel-material: var(--breaker-panel);
  --bevel-material-edge: var(--breaker-panel-edge);
}
[data-slot="breaker-switch"] {
  --bevel-material-recess: var(--breaker-body);
}
[data-slot="breaker-lever"] {
  --bevel-material: var(--breaker-lever);
  --bevel-material-edge: var(--breaker-lever-edge);
}
[data-slot="breaker"] {
  --bevel-led: var(--breaker-off);
}
[data-slot="breaker"][data-state="on"] {
  --bevel-led: var(--breaker-on);
}
[data-slot="breaker"][data-state="tripped"] {
  --bevel-led: var(--breaker-tripped);
}
`
if (typeof document !== "undefined" && !document.getElementById(BEVEL_STYLE_ID)) {
  const style = document.createElement("style")
  style.id = BEVEL_STYLE_ID
  style.textContent = BEVEL_CSS
  document.head.appendChild(style)
}

/* ---- lib/feedback.ts ---- */
/*
 * Opt-in sound and haptics for Bevel controls.
 *
 *   <BevelFeedback sound haptics>…</BevelFeedback>
 *   const { click, detent, thunk, toggle } = useBevelFeedback()
 *
 * Off by default, and a no-op outside the provider: components call the hook
 * unconditionally and stay silent unless an app turns feedback on. Sounds are
 * synthesised with the Web Audio API (short filtered noise bursts and a low
 * thump), no audio files. The AudioContext is created on the first sound,
 * which always comes from a user gesture, so browsers allow it to start.
 * Haptics use navigator.vibrate where it exists (Android); elsewhere they do
 * nothing.
 */

type FeedbackSound = "click" | "detent" | "thunk" | "toggle"

type BevelFeedbackValue = {
  /** A button or key going down. */
  click: () => void
  /** A rotary detent or a small step: the lightest tick. */
  detent: () => void
  /** Something heavy landing: a breaker, a plug seating, a punch clock. */
  thunk: () => void
  /** A switch snapping over. */
  toggle: () => void
}

type BevelFeedbackProps = {
  /** Play sounds. Default off. */
  sound?: boolean
  /** Vibrate on devices that can. Default off. */
  haptics?: boolean
  /** 0 to 1. */
  volume?: number
  children?: React.ReactNode
}

const noop = () => {}
const silent: BevelFeedbackValue = { click: noop, detent: noop, thunk: noop, toggle: noop }

const BevelFeedbackContext = React.createContext<BevelFeedbackValue>(silent)

/* One AudioContext for the page, made on first use. */
let audio: AudioContext | null = null
let noise: AudioBuffer | null = null

function context() {
  if (typeof window === "undefined") return null
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return null
  if (!audio) {
    audio = new Ctor()
    // Half a second of white noise, reused by every burst.
    noise = audio.createBuffer(1, Math.ceil(audio.sampleRate * 0.5), audio.sampleRate)
    const data = noise.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  }
  if (audio.state === "suspended") void audio.resume()
  return audio
}

/** A burst of band-passed noise that dies away: the body of every click. */
function burst(ctx: AudioContext, at: number, { freq, q, length, gain }: { freq: number; q: number; length: number; gain: number }) {
  const source = ctx.createBufferSource()
  source.buffer = noise
  const filter = ctx.createBiquadFilter()
  filter.type = "bandpass"
  filter.frequency.value = freq
  filter.Q.value = q
  const env = ctx.createGain()
  env.gain.setValueAtTime(gain, at)
  env.gain.exponentialRampToValueAtTime(0.0001, at + length)
  source.connect(filter).connect(env).connect(ctx.destination)
  source.start(at, Math.random() * 0.4, length + 0.01)
}

/** A falling sine: weight behind a click. */
function thump(ctx: AudioContext, at: number, { from, to, length, gain }: { from: number; to: number; length: number; gain: number }) {
  const osc = ctx.createOscillator()
  osc.frequency.setValueAtTime(from, at)
  osc.frequency.exponentialRampToValueAtTime(to, at + length)
  const env = ctx.createGain()
  env.gain.setValueAtTime(gain, at)
  env.gain.exponentialRampToValueAtTime(0.0001, at + length)
  osc.connect(env).connect(ctx.destination)
  osc.start(at)
  osc.stop(at + length + 0.01)
}

const recipes: Record<FeedbackSound, (ctx: AudioContext, volume: number) => void> = {
  click: (ctx, v) => {
    const t = ctx.currentTime
    burst(ctx, t, { freq: 3200, q: 1.2, length: 0.012, gain: 0.5 * v })
  },
  detent: (ctx, v) => {
    const t = ctx.currentTime
    burst(ctx, t, { freq: 5200, q: 2, length: 0.006, gain: 0.35 * v })
  },
  toggle: (ctx, v) => {
    // The lever leaves one contact and snaps onto the other.
    const t = ctx.currentTime
    burst(ctx, t, { freq: 2600, q: 1.4, length: 0.008, gain: 0.3 * v })
    burst(ctx, t + 0.022, { freq: 3800, q: 1.4, length: 0.014, gain: 0.55 * v })
  },
  thunk: (ctx, v) => {
    const t = ctx.currentTime
    thump(ctx, t, { from: 140, to: 50, length: 0.09, gain: 0.7 * v })
    burst(ctx, t, { freq: 900, q: 0.8, length: 0.03, gain: 0.45 * v })
  },
}

const vibrations: Record<FeedbackSound, number | number[]> = {
  click: 8,
  detent: 4,
  toggle: [6, 24, 8],
  thunk: 22,
}

/**
 * Turns on sound and haptics for every Bevel control inside it. Both are off
 * unless you pass them, so a settings toggle can drive this directly.
 */
function BevelFeedback({ sound = false, haptics = false, volume = 0.6, children }: BevelFeedbackProps) {
  const value = React.useMemo<BevelFeedbackValue>(() => {
    if (!sound && !haptics) return silent
    const play = (kind: FeedbackSound) => () => {
      if (sound) {
        const ctx = context()
        if (ctx) recipes[kind](ctx, Math.min(1, Math.max(0, volume)))
      }
      if (haptics && typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate(vibrations[kind])
    }
    return { click: play("click"), detent: play("detent"), thunk: play("thunk"), toggle: play("toggle") }
  }, [sound, haptics, volume])
  return React.createElement(BevelFeedbackContext.Provider, { value }, children)
}

/** click, detent, thunk and toggle. Silent outside <BevelFeedback> or when it's off. */
function useBevelFeedback() {
  return React.useContext(BevelFeedbackContext)
}

/* ---- components/breaker.tsx ---- */
/** A panel of breakers, like a fuse box. Label it with BreakerPanelTitle. */
function BreakerPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="breaker-panel"
      className={cn(
        "bevel-metal bevel-object flex flex-col gap-4 rounded-(--bevel-radius-md) p-5 text-(--breaker-lever)",
        className
      )}
      {...props}
    />
  )
}

function BreakerPanelTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="breaker-panel-title"
      className={cn(
        "bevel-deboss text-(length:--bevel-label) font-semibold tracking-(--bevel-tracking-label) uppercase",
        className
      )}
      {...props}
    />
  )
}

function BreakerRow({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="breaker-row" className={cn("flex flex-wrap gap-4", className)} {...props} />
}

type BreakerState = "on" | "off" | "tripped"

type BreakerProps = Omit<SwitchPrimitive.Root.Props, "children"> & {
  /** Tripped: the lever drops to the middle and a red flag shows until it's reset. */
  tripped?: boolean
  /** What this breaker protects, shown on the label strip. */
  label: React.ReactNode
  /** A second line under the label: the limit, or why it's locked. */
  description?: React.ReactNode
}

const stateText: Record<BreakerState, string> = { on: "On", off: "Off", tripped: "Tripped" }

/**
 * One breaker. A switch with a third, tripped state. Switching a tripped
 * breaker resets it: handle that in onCheckedChange by clearing `tripped`.
 */
function Breaker({
  className,
  tripped = false,
  label,
  description,
  checked: checkedProp,
  defaultChecked,
  onCheckedChange,
  disabled,
  ...props
}: BreakerProps) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultChecked ?? false)
  const checked = checkedProp ?? uncontrolled
  const state: BreakerState = tripped ? "tripped" : checked ? "on" : "off"
  const labelId = React.useId()
  const statusId = React.useId()
  const descriptionId = React.useId()
  const feedback = useBevelFeedback()

  return (
    <div
      data-slot="breaker"
      data-state={state}
      data-disabled={disabled ? "" : undefined}
      className={cn("group/breaker flex w-24 flex-col items-center gap-2 text-center", className)}
    >
      <SwitchPrimitive.Root
        data-slot="breaker-switch"
        checked={checked && !tripped}
        onCheckedChange={(next, details) => {
          if (checkedProp === undefined) setUncontrolled(next)
          feedback.thunk()
          onCheckedChange?.(next, details)
        }}
        disabled={disabled}
        aria-labelledby={labelId}
        aria-describedby={description ? `${statusId} ${descriptionId}` : statusId}
        className={cn(
          "bevel-recessed relative flex h-(--breaker-slot-height) w-12 items-center justify-center rounded-(--bevel-radius-sm) outline-none",
          "cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--breaker-panel)",
          "data-disabled:cursor-not-allowed"
        )}
        {...props}
      >
        <span
          aria-hidden
          className="absolute top-1.5 left-1/2 hidden h-2 w-5 -translate-x-1/2 rounded-full bg-(--breaker-tripped) group-data-[state=tripped]/breaker:block"
        />
        <SwitchPrimitive.Thumb
          data-slot="breaker-lever"
          className={cn(
            "bevel-raised block h-7 w-8 rounded-(--bevel-radius-xs)",
            "translate-y-(--breaker-throw) data-checked:-translate-y-(--breaker-throw) group-data-[state=tripped]/breaker:translate-y-0",
            "transition-[translate] duration-(--bevel-duration-small) ease-(--bevel-ease-spring) motion-reduce:transition-none"
          )}
        />
      </SwitchPrimitive.Root>
      <span className="flex items-center gap-1.5 text-(length:--bevel-fine) font-semibold tracking-(--bevel-tracking-print) uppercase">
        <span aria-hidden className="bevel-led size-1.5 rounded-full" />
        <span id={statusId}>{stateText[state]}</span>
      </span>
      <span
        data-slot="breaker-label"
        className="bevel-paper w-full rounded-(--bevel-radius-xs) px-1.5 py-1 text-(length:--bevel-fine) leading-tight font-semibold"
      >
        <span id={labelId}>{label}</span>
        {description && (
          <span id={descriptionId} className="block font-normal text-(--bevel-paper-muted)">
            {description}
          </span>
        )}
      </span>
    </div>
  )
}

export { BreakerPanel, BreakerPanelTitle, BreakerRow, Breaker }
export type { BreakerProps, BreakerState }
