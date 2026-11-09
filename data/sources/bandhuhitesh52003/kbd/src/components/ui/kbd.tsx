"use client"

/**
 * Kbd, from Bevel: skeuomorphic React components for shadcn.
 * A keycap printed in a line of text, for shortcuts and docs. Symbols such as ⌘ are read aloud by name. With listen, the cap goes down when the reader presses that key on their own keyboard, so a shortcut list shows its keys working.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/kbd) are at
 * https://bevel-ui.vercel.app/components/kbd
 */

import * as React from "react"
import { cn } from "cn"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-kbd"
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

/* styles/kbd.css */
:root {
  --kbd-cap: oklch(0.985 0.003 250);
  --kbd-side: oklch(0.82 0.008 250);
  --kbd-foreground: oklch(0.4 0.012 250);
  --kbd-travel: 2px;
}

.dark {
  --kbd-cap: oklch(0.34 0.008 250);
  --kbd-side: oklch(0.21 0.008 250);
  --kbd-foreground: oklch(0.88 0.01 250);
}

[data-slot="kbd"] {
  --kbd-cap-light: inset 0 1px 0 var(--bevel-highlight-strong), inset 0 0 0 1px oklch(0 0 0 / 0.05);
  --kbd-cast: 0 0 0 1px oklch(0 0 0 / 0.06), 0 1px 1px var(--bevel-cast);
}
`
if (typeof document !== "undefined" && !document.getElementById(BEVEL_STYLE_ID)) {
  const style = document.createElement("style")
  style.id = BEVEL_STYLE_ID
  style.textContent = BEVEL_CSS
  document.head.appendChild(style)
}

/* ---- components/kbd.tsx ---- */
/* Symbols people print on keycaps: the key they stand for and a name to read aloud. */
const symbols: Record<string, { key: string; name: string }> = {
  "⌘": { key: "Meta", name: "Command" },
  "⌥": { key: "Alt", name: "Option" },
  "⇧": { key: "Shift", name: "Shift" },
  "⌃": { key: "Control", name: "Control" },
  "↵": { key: "Enter", name: "Enter" },
  "⏎": { key: "Enter", name: "Return" },
  "⌫": { key: "Backspace", name: "Delete" },
  "⎋": { key: "Escape", name: "Escape" },
  "⇥": { key: "Tab", name: "Tab" },
  "↑": { key: "ArrowUp", name: "Up arrow" },
  "↓": { key: "ArrowDown", name: "Down arrow" },
  "←": { key: "ArrowLeft", name: "Left arrow" },
  "→": { key: "ArrowRight", name: "Right arrow" },
}

/* Words people print, mapped to KeyboardEvent.key. */
const aliases: Record<string, string> = {
  cmd: "meta",
  command: "meta",
  ctrl: "control",
  option: "alt",
  opt: "alt",
  esc: "escape",
  return: "enter",
  space: " ",
  del: "delete",
}

function isApple() {
  return typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
}

/** A key name as the store records it: lowercase KeyboardEvent.key, with mod resolved per platform. */
function normalize(key: string) {
  const lower = key.toLowerCase()
  if (lower === "mod") return isApple() ? "meta" : "control"
  return aliases[lower] ?? lower
}

/*
 * One keyboard listener for the page, shared by every listening cap. It
 * records the keys held down by both key and physical code, so ⇧K and ⌥K
 * still press the K cap.
 */
const held = new Set<string>()
const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function isTyping(target: EventTarget | null) {
  return (
    target instanceof Element &&
    target.closest("input, textarea, select, [contenteditable='true'], [contenteditable='']") !== null
  )
}

function names(event: KeyboardEvent) {
  const out = [event.key.toLowerCase()]
  const code = /^(?:Key|Digit)(.)$/.exec(event.code)
  if (code?.[1]) out.push(code[1].toLowerCase())
  return out
}

function onKeyDown(event: KeyboardEvent) {
  if (isTyping(event.target)) return
  let changed = false
  for (const name of names(event)) {
    if (!held.has(name)) {
      held.add(name)
      changed = true
    }
  }
  if (changed) emit()
}

function onKeyUp(event: KeyboardEvent) {
  // macOS swallows the key-up of anything pressed with ⌘, so letting go of ⌘ lets go of everything.
  if (event.key === "Meta") held.clear()
  else for (const name of names(event)) held.delete(name)
  emit()
}

function releaseAll() {
  if (!held.size) return
  held.clear()
  emit()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  if (listeners.size === 1) {
    window.addEventListener("keydown", onKeyDown, true)
    window.addEventListener("keyup", onKeyUp, true)
    window.addEventListener("blur", releaseAll)
  }
  return () => {
    listeners.delete(listener)
    if (!listeners.size) {
      window.removeEventListener("keydown", onKeyDown, true)
      window.removeEventListener("keyup", onKeyUp, true)
      window.removeEventListener("blur", releaseAll)
      held.clear()
    }
  }
}

const noSubscribe = () => () => {}

/** Whether `key` is held down on the keyboard right now. Undefined listens to nothing. */
function useKeyHeld(key: string | undefined) {
  const name = key === undefined ? undefined : normalize(key)
  return React.useSyncExternalStore(
    name === undefined ? noSubscribe : subscribe,
    () => (name === undefined ? false : held.has(name)),
    () => false
  )
}

type KbdProps = React.ComponentProps<"kbd"> & {
  /**
   * Press the cap when the reader presses the key. true listens for the key
   * printed on it (⌘ listens for Meta); a string names the key, e.g. "k",
   * "Escape" or "mod" (⌘ on Apple, Ctrl elsewhere). Ignored while typing in a field.
   */
  listen?: boolean | string
}

/**
 * A keycap legend for shortcuts and docs. Symbols such as ⌘ are read aloud
 * by name. With `listen`, the cap goes down when you press the real key.
 */
function Kbd({ className, listen, children, ...props }: KbdProps) {
  const symbol = typeof children === "string" ? symbols[children] : undefined
  const printed = typeof children === "string" ? children : undefined
  const target = listen === true ? (symbol?.key ?? printed) : listen || undefined
  const down = useKeyHeld(target)
  return (
    <kbd
      data-slot="kbd"
      data-listening={target ? "" : undefined}
      data-pressed={down ? "" : undefined}
      className={cn(
        "group/kbd inline-flex h-5 min-w-5 shrink-0 flex-col rounded-(--bevel-radius-xs) bg-(--kbd-side) pb-(--kbd-travel) align-middle font-sans shadow-(--kbd-cast) select-none",
        "forced-colors:border forced-colors:border-[CanvasText]",
        className
      )}
      {...props}
    >
      <span
        data-slot="kbd-cap"
        className={cn(
          "flex flex-1 items-center justify-center rounded-(--bevel-radius-xs) bg-(--kbd-cap) px-1 text-(length:--bevel-label) leading-none font-medium text-(--kbd-foreground) shadow-(--kbd-cap-light)",
          "transition-transform duration-(--bevel-duration-small) ease-(--bevel-ease-spring) motion-reduce:transition-none",
          "group-data-pressed/kbd:translate-y-(--kbd-travel) group-data-pressed/kbd:duration-(--bevel-duration-press) group-data-pressed/kbd:ease-(--bevel-ease-out)",
          "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0"
        )}
      >
        {symbol ? (
          <>
            <span aria-hidden>{children}</span>
            <span className="sr-only">{symbol.name}</span>
          </>
        ) : (
          children
        )}
      </span>
    </kbd>
  )
}

/** Caps pressed together, such as ⌘ K. Each cap listens for its own key. */
function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1 align-middle font-sans", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
export type { KbdProps }
