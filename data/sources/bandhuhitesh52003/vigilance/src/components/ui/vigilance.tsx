"use client"

/**
 * Dead man's switch, from Bevel: skeuomorphic React components for shadcn.
 * A train cab's vigilance control for supervised agent runs: the run keeps going only while someone checks in. Miss the window and it warns, then pauses.
 *
 * This is a single-file build for 21st.dev. The source, docs and the shadcn
 * install (npx shadcn@latest add @bevel/vigilance) are at
 * https://bevel-ui.vercel.app/components/vigilance
 */

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

/* Bevel's design tokens and this component's styles, added to the page once. */
const BEVEL_STYLE_ID = "bevel-vigilance"
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

/* styles/vigilance.css */
:root {
  --vigilance-panel: oklch(0.26 0.008 260);
  --vigilance-panel-edge: oklch(0.17 0.008 260);
  --vigilance-clear: oklch(0.8 0.17 150);
  --vigilance-warning: oklch(0.83 0.16 80);
  --vigilance-stopping: oklch(0.66 0.21 27);
  --vigilance-off: oklch(0.36 0.01 260);
  --vigilance-tick: 250ms;
}

[data-slot="vigilance"] {
  --bevel-material: var(--vigilance-panel);
  --bevel-material-edge: var(--vigilance-panel-edge);
  --bevel-material-recess: var(--vigilance-panel-edge);
}
[data-slot="vigilance-button"] {
  --bevel-material: var(--bevel-brass);
  --bevel-material-edge: var(--bevel-brass-edge);
}
[data-slot="vigilance-lamp"] {
  --bevel-led: var(--vigilance-off);
}
[data-slot="vigilance-lamp"][data-lit][data-stage="clear"] {
  --bevel-led: var(--vigilance-clear);
}
[data-slot="vigilance-lamp"][data-lit][data-stage="warning"] {
  --bevel-led: var(--vigilance-warning);
}
[data-slot="vigilance-lamp"][data-lit][data-stage="stopping"],
[data-slot="vigilance-lamp"][data-lit][data-stage="paused"] {
  --bevel-led: var(--vigilance-stopping);
}
`
if (typeof document !== "undefined" && !document.getElementById(BEVEL_STYLE_ID)) {
  const style = document.createElement("style")
  style.id = BEVEL_STYLE_ID
  style.textContent = BEVEL_CSS
  document.head.appendChild(style)
}

/* ---- components/vigilance.tsx ---- */
type VigilanceStage = "clear" | "warning" | "stopping" | "paused"

type VigilanceContextValue = {
  stage: VigilanceStage
  remaining: number
  interval: number
  checkIn: () => void
  resume: () => void
}

const VigilanceContext = React.createContext<VigilanceContextValue | null>(null)

function useVigilance() {
  const context = React.useContext(VigilanceContext)
  if (!context) throw new Error("Vigilance parts must be inside <Vigilance>")
  return context
}

type VigilanceProps = React.ComponentProps<"div"> & {
  /** Time allowed between check-ins, in milliseconds. */
  interval: number
  /** Share of the interval left when the warning lamp lights. */
  warnAt?: number
  /** Share left when the final warning is announced. */
  stopAt?: number
  /** Count down only while the supervised run is going. */
  running?: boolean
  /** The window ran out: pause the run. */
  onTrip?: () => void
  onCheckIn?: () => void
  onResume?: () => void
}

/**
 * A dead man's switch for a supervised run: it keeps going only while
 * someone checks in. Miss the window and it warns, then stops.
 */
function Vigilance({
  className,
  interval,
  warnAt = 0.4,
  stopAt = 0.15,
  running = true,
  onTrip,
  onCheckIn,
  onResume,
  children,
  ...props
}: VigilanceProps) {
  // The clock starts on mount, not during render, so a prerendered page and
  // the browser agree. Until then the full window shows.
  const [deadline, setDeadline] = React.useState<number | null>(null)
  const [now, setNow] = React.useState(0)
  React.useEffect(() => {
    const t = Date.now()
    setNow(t)
    setDeadline(t + interval)
    // Only on mount: check-ins and resumes set the deadline after that.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [paused, setPaused] = React.useState(false)
  const tripped = React.useRef(false)

  // Stopping holds the time left; starting again carries it over, so time
  // spent stopped doesn't count against the window.
  const held = React.useRef<number | null>(null)
  React.useEffect(() => {
    const t = Date.now()
    if (deadline === null) return
    if (!running) {
      held.current = Math.max(0, deadline - t)
    } else if (held.current !== null) {
      setDeadline(t + held.current)
      setNow(t)
      held.current = null
    }
    // Only a change of `running` moves the deadline.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

  React.useEffect(() => {
    if (!running || paused || deadline === null) return
    const timer = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(timer)
  }, [running, paused, deadline === null])

  const remaining = deadline === null ? interval : Math.max(0, deadline - now)
  React.useEffect(() => {
    if (running && !paused && remaining === 0 && !tripped.current) {
      tripped.current = true
      setPaused(true)
      onTrip?.()
    }
  }, [remaining, running, paused, onTrip])

  const share = remaining / interval
  const stage: VigilanceStage = paused ? "paused" : share <= stopAt ? "stopping" : share <= warnAt ? "warning" : "clear"

  const context = React.useMemo<VigilanceContextValue>(
    () => ({
      stage,
      remaining,
      interval,
      checkIn: () => {
        if (paused) return
        const t = Date.now()
        setNow(t)
        setDeadline(t + interval)
        onCheckIn?.()
      },
      resume: () => {
        const t = Date.now()
        tripped.current = false
        setPaused(false)
        setNow(t)
        setDeadline(t + interval)
        onResume?.()
      },
    }),
    [stage, remaining, interval, paused, onCheckIn, onResume]
  )

  return (
    <VigilanceContext value={context}>
      <div
        role="group"
        data-slot="vigilance"
        data-stage={stage}
        className={cn(
          "bevel-metal bevel-object flex w-72 flex-col gap-4 rounded-(--bevel-radius-md) p-4 text-(--bevel-ivory)",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </VigilanceContext>
  )
}

const lamps: { stage: VigilanceStage; label: string }[] = [
  { stage: "clear", label: "Clear" },
  { stage: "warning", label: "Warning" },
  { stage: "stopping", label: "Stopping" },
]

/**
 * Three lamps and the stage in words. Steady, never flashing. The final
 * warning and the pause are announced assertively.
 */
function VigilanceLamps({ className, ...props }: React.ComponentProps<"div">) {
  const { stage, remaining } = useVigilance()
  const seconds = Math.ceil(remaining / 1000)
  const urgent = stage === "stopping" || stage === "paused"
  return (
    <div data-slot="vigilance-lamps" className={cn("flex flex-col gap-2", className)} {...props}>
      <div className="flex justify-between gap-2">
        {lamps.map((lamp) => (
          <span
            key={lamp.stage}
            data-slot="vigilance-lamp"
            data-stage={stage}
            data-lit={
              lamp.stage === stage || (lamp.stage === "stopping" && stage === "paused") ? "" : undefined
            }
            className="bevel-deboss flex items-center gap-1.5 text-(length:--bevel-fine) font-semibold tracking-(--bevel-tracking-print) uppercase"
          >
            <span aria-hidden className="bevel-led size-2.5 rounded-full" />
            {lamp.label}
          </span>
        ))}
      </div>
      <div className="flex min-h-5 items-baseline justify-between gap-3 text-sm">
        {/* Only the stage is live, so it's announced once per change, not every second. */}
        <p role={urgent ? "alert" : "status"}>
          {stage === "paused"
            ? "Paused: no check-in."
            : stage === "stopping"
              ? "Check in now or the run pauses."
              : stage === "warning"
                ? "Check in soon."
                : "Running."}
        </p>
        {stage !== "paused" && (
          <span aria-hidden className="font-mono text-(length:--bevel-fine) tabular-nums opacity-80">
            {seconds}s
          </span>
        )}
      </div>
    </div>
  )
}

/** Time left until the next check-in. */
function VigilanceTimer({ className, ...props }: Omit<ProgressPrimitive.Root.Props, "value">) {
  const { remaining, interval } = useVigilance()
  return (
    <ProgressPrimitive.Root
      value={Math.round(remaining / 1000)}
      max={Math.round(interval / 1000)}
      aria-label="Time until next check-in"
      getAriaValueText={(_, v) => `${v ?? 0} seconds left`}
      className={cn("w-full", className)}
      {...props}
    >
      <ProgressPrimitive.Track className="bevel-recessed relative h-2 overflow-hidden rounded-full">
        <span
          aria-hidden
          className="absolute inset-0 origin-left rounded-full bg-(--bevel-led) transition-[scale] duration-(--vigilance-tick) ease-linear motion-reduce:transition-none in-data-[stage=clear]:[--bevel-led:var(--vigilance-clear)] in-data-[stage=warning]:[--bevel-led:var(--vigilance-warning)] in-data-[stage=stopping]:[--bevel-led:var(--vigilance-stopping)]"
          style={{ scale: `${remaining / interval} 1` }}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

/** The check-in button. While paused it becomes Resume. */
function VigilanceButton({ className, children, ...props }: Omit<ButtonPrimitive.Props, "onClick">) {
  const { stage, checkIn, resume } = useVigilance()
  const paused = stage === "paused"
  return (
    <ButtonPrimitive
      data-slot="vigilance-button"
      onClick={paused ? resume : checkIn}
      className={cn(
        "bevel-raised mx-auto grid size-20 place-items-center rounded-full text-center text-(length:--bevel-label) font-black tracking-(--bevel-tracking-label) text-(--bevel-ivory-foreground) uppercase outline-none select-none",
        "transition-[translate,box-shadow] duration-(--bevel-duration-press) ease-(--bevel-ease-out) active:translate-y-0.5 active:bevel-pressed motion-reduce:transition-none",
        "focus-visible:ring-3 focus-visible:ring-(--bevel-ivory)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-(--vigilance-panel)",
        className
      )}
      {...props}
    >
      {paused ? "Resume" : (children ?? "I'm here")}
    </ButtonPrimitive>
  )
}

export { Vigilance, VigilanceLamps, VigilanceTimer, VigilanceButton }
export type { VigilanceProps, VigilanceStage }
