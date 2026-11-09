"use client"

/**
 * Icon key, from Bevel: skeuomorphic React components for shadcn.
 * A square keycap for a single icon: copy, close, toolbar actions. It must be given an aria-label, and is secondary by default so a row of them stays quiet.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/icon-key) are at
 * https://bevel-ui.vercel.app/components/icon-key
 */

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cn } from "cn"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-icon-key"
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

/* styles/key.css */
:root {
  --key-primary: oklch(0.76 0.14 68);
  --key-primary-side: oklch(0.58 0.13 55);
  --key-primary-foreground: oklch(0.24 0.04 55);
  --key-secondary: oklch(0.97 0.004 250);
  --key-secondary-side: oklch(0.8 0.008 250);
  --key-secondary-foreground: oklch(0.27 0.012 250);
  --key-danger: oklch(0.55 0.19 27);
  --key-danger-side: oklch(0.4 0.15 27);
  --key-danger-foreground: oklch(0.98 0.01 27);
  --key-ghost-foreground: currentColor;
  --key-ghost-hover: oklch(0.5 0.01 250 / 0.08);
  --key-ghost-well: oklch(0.5 0.01 250 / 0.14);
  --key-lamp: oklch(0.82 0.17 145);
  --key-lamp-off: oklch(0.45 0.01 250 / 0.55);
  --key-travel-sm: 2px;
  --key-travel: 3px;
  --key-travel-lg: 3px;
}

.dark {
  --key-primary: oklch(0.74 0.13 68);
  --key-primary-side: oklch(0.5 0.11 55);
  --key-secondary: oklch(0.36 0.008 250);
  --key-secondary-side: oklch(0.22 0.008 250);
  --key-secondary-foreground: oklch(0.94 0.01 90);
  --key-danger: oklch(0.56 0.18 27);
  --key-danger-side: oklch(0.36 0.13 27);
  --key-ghost-hover: oklch(1 0 0 / 0.06);
  --key-ghost-well: oklch(0 0 0 / 0.3);
}

[data-slot="key"] {
  --key-depth: var(--key-travel);
  --key-cap: var(--key-primary);
  --key-cap-side: var(--key-primary-side);
  --key-cap-foreground: var(--key-primary-foreground);
  --bevel-led: var(--key-lamp);
  --key-cap-sheen: var(--bevel-highlight);
  --key-cap-light: inset 0 1px 0 var(--bevel-highlight-strong), inset 0 0 0 1px oklch(0 0 0 / 0.06);
  --key-cast: 0 1px 2px var(--bevel-cast);
}
[data-slot="key"][data-size="sm"] {
  --key-depth: var(--key-travel-sm);
}
[data-slot="key"][data-size="lg"] {
  --key-depth: var(--key-travel-lg);
}
[data-slot="key"][data-variant="secondary"] {
  --key-cap: var(--key-secondary);
  --key-cap-side: var(--key-secondary-side);
  --key-cap-foreground: var(--key-secondary-foreground);
}
[data-slot="key"][data-variant="danger"] {
  --key-cap: var(--key-danger);
  --key-cap-side: var(--key-danger-side);
  --key-cap-foreground: var(--key-danger-foreground);
}
[data-slot="key"][data-variant="ghost"] {
  --key-depth: 0px;
  --key-cap: transparent;
  --key-cap-side: transparent;
  --key-cap-foreground: var(--key-ghost-foreground);
  --key-cap-sheen: transparent;
  --key-cap-light: none;
  --key-cast: none;
}
[data-slot="key"][data-variant="ghost"]:hover:not([data-state]) {
  --key-cap: var(--key-ghost-hover);
}
[data-slot="key"][data-variant="ghost"]:is([data-pressed], [data-state="pending"]) {
  --key-cap: var(--key-ghost-well);
  --key-cap-light: var(--bevel-depth-pressed);
}
[data-slot="key"][data-state="disabled"] {
  --key-cap-light: none;
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

/* ---- components/key.tsx ---- */
type KeyContextValue = { pending: boolean }

const KeyContext = React.createContext<KeyContextValue>({ pending: false })

type KeyProps = ButtonPrimitive.Props & {
  /** primary: the lit key for the main action. secondary: a plain cap. ghost: engraved, no body until pressed. danger: a red key. */
  variant?: "primary" | "secondary" | "ghost" | "danger"
  /** Heights match shadcn's buttons: sm 32px, md 36px, lg 40px, side included. */
  size?: "sm" | "md" | "lg"
  /** The key latches down while its action runs and pops back up when this goes false. */
  pending?: boolean
  /** A square cap for a single icon. Prefer IconKey, which also requires a label. */
  square?: boolean
}

/**
 * A keycap button. The cap sits on a visible side and travels down by its
 * depth when pressed, by pointer, Space or Enter. While `pending`, it latches
 * down and stays there until the work is done.
 */
function Key({
  className,
  variant = "primary",
  size = "md",
  pending = false,
  square = false,
  disabled = false,
  focusableWhenDisabled,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onPointerCancel,
  onKeyDown,
  onKeyUp,
  onBlur,
  children,
  ...props
}: KeyProps) {
  const [down, setDown] = React.useState(false)
  const feedback = useBevelFeedback()
  const live = !disabled && !pending
  const press = () => {
    if (!live) return
    setDown(true)
    feedback.click()
  }
  const release = () => setDown(false)

  React.useEffect(() => {
    if (!live) setDown(false)
  }, [live])

  const context = React.useMemo(() => ({ pending }), [pending])
  return (
    <KeyContext value={context}>
      <ButtonPrimitive
        {...props}
        onPointerDown={(event) => {
          onPointerDown?.(event)
          if (event.button === 0) press()
        }}
        onPointerUp={(event) => {
          onPointerUp?.(event)
          release()
        }}
        onPointerLeave={(event) => {
          onPointerLeave?.(event)
          release()
        }}
        onPointerCancel={(event) => {
          onPointerCancel?.(event)
          release()
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event)
          if ((event.key === " " || event.key === "Enter") && !event.repeat) press()
        }}
        onKeyUp={(event) => {
          onKeyUp?.(event)
          if (event.key === " " || event.key === "Enter") release()
        }}
        onBlur={(event) => {
          onBlur?.(event)
          release()
        }}
        // A busy key keeps focus so keyboard users don't lose their place.
        disabled={disabled || pending}
        focusableWhenDisabled={focusableWhenDisabled ?? pending}
        aria-busy={pending || undefined}
        data-slot="key"
        data-variant={variant}
        data-size={size}
        data-square={square ? "" : undefined}
        data-pressed={down ? "" : undefined}
        data-state={pending ? "pending" : disabled ? "disabled" : undefined}
        className={cn(
          "group/key relative isolate inline-flex shrink-0 flex-col rounded-(--bevel-radius-sm) pb-(--key-depth) align-middle outline-none select-none",
          "h-9 data-[size=lg]:h-10 data-[size=sm]:h-8",
          "data-square:w-9 data-square:data-[size=lg]:w-10 data-square:data-[size=sm]:w-8",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "data-[state=disabled]:cursor-not-allowed data-[state=pending]:cursor-progress",
          "forced-colors:border forced-colors:border-[ButtonText]",
          className as string
        )}
      >
        {/* The side of the key: visible below the cap until it travels down over it. */}
        <span
          aria-hidden
          data-slot="key-side"
          className="absolute inset-x-0 top-(--key-depth) bottom-0 -z-1 rounded-(--bevel-radius-sm) bg-(--key-cap-side) shadow-(--key-cast)"
        />
        <span
          data-slot="key-cap"
          className={cn(
            "flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-(--bevel-radius-sm) px-3 text-sm font-semibold whitespace-nowrap text-(--key-cap-foreground)",
            "group-data-[size=lg]/key:px-4 group-data-[size=sm]/key:gap-1 group-data-[size=sm]/key:px-2.5 group-data-[size=sm]/key:text-xs group-data-square/key:px-0",
            "bg-(--key-cap) bg-linear-to-b from-(--key-cap-sheen) to-transparent to-60% shadow-(--key-cap-light)",
            // Released: the spring pushes the cap back up with a small overshoot.
            "transition-[translate,filter] duration-(--bevel-duration-move) ease-(--bevel-ease-spring) motion-reduce:transition-none",
            "group-hover/key:brightness-105",
            // Pressed: down by the side's depth, quickly.
            "group-data-pressed/key:translate-y-(--key-depth) group-data-pressed/key:duration-(--bevel-duration-press) group-data-pressed/key:ease-(--bevel-ease-out)",
            // Busy: latched down and dimmed.
            "group-data-[state=pending]/key:translate-y-(--key-depth) group-data-[state=pending]/key:brightness-90 group-data-[state=pending]/key:duration-(--bevel-duration-press) group-data-[state=pending]/key:ease-(--bevel-ease-out)",
            // Disabled: sunk into its housing, matte.
            "group-data-[state=disabled]/key:translate-y-(--key-depth) group-data-[state=disabled]/key:bg-none group-data-[state=disabled]/key:text-(--key-cap-foreground)/60 group-data-[state=disabled]/key:saturate-50 group-data-[state=disabled]/key:brightness-100",
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[size=sm]/key:[&_svg:not([class*='size-'])]:size-3.5"
          )}
        >
          {children}
        </span>
      </ButtonPrimitive>
    </KeyContext>
  )
}

/**
 * A small lamp on the cap. Dark at rest; it glows while the key is pending.
 * Put it first or last among the key's children.
 */
function KeyLamp({ className, ...props }: React.ComponentProps<"span">) {
  const { pending } = React.useContext(KeyContext)
  return (
    <span
      aria-hidden
      data-slot="key-lamp"
      data-lit={pending ? "" : undefined}
      className={cn("relative size-1.5 shrink-0 rounded-full bg-(--key-lamp-off) shadow-(--bevel-depth-pressed)", className)}
      {...props}
    >
      <span
        className={cn(
          "bevel-led absolute inset-0 rounded-full opacity-0 transition-opacity duration-(--bevel-duration-small) ease-(--bevel-ease-out) motion-reduce:transition-none",
          "in-data-lit:opacity-100"
        )}
      />
    </span>
  )
}

/* ---- components/icon-key.tsx ---- */
type IconKeyProps = Omit<KeyProps, "square"> & {
  /** An icon-only key has no visible text, so it must be named. */
  "aria-label": string
}

/**
 * A square keycap for one icon: toolbars, copy and close buttons. Secondary
 * by default, so a row of them stays quiet beside a primary key.
 */
function IconKey({ variant = "secondary", ...props }: IconKeyProps) {
  return <Key variant={variant} square {...props} />
}

export { IconKey }
export type { IconKeyProps }
