"use client";

import * as React from "react";
import { Check, RotateCcw } from "lucide-react";

export type UndoState = "idle" | "pending" | "done";
export type UndoVariant = "default" | "destructive" | "outline";
export type UndoSize = "sm" | "md" | "lg";

type ButtonProps = React.ComponentProps<"button">;

export type UndoCountdownButtonProps = {
  label: React.ReactNode;
  undoLabel?: string;
  doneLabel?: string;
  restoredLabel?: string;
  /** Milliseconds the action stays cancellable before onCommit runs. */
  undoWindow?: number;
  /** Milliseconds to show the done label before returning to idle; 0 keeps it. */
  resetAfter?: number;
  onCommit?: () => unknown;
  onUndo?: () => void;
  onStart?: () => void;
  state?: UndoState;
  onStateChange?: (state: UndoState) => void;
  variant?: UndoVariant;
  size?: UndoSize;
  showSeconds?: boolean;
  disabled?: boolean;
  className?: string;
  ref?: ButtonProps["ref"];
};

const SIZE = { sm: "h-8 px-3 text-xs gap-1.5", md: "h-10 px-4 text-sm gap-2", lg: "h-12 px-5 text-base gap-2.5" } as const;
const SHELL = {
  default: "bg-primary text-primary-foreground",
  destructive: "bg-destructive text-background",
  outline: "border border-border bg-card text-foreground",
} as const;
const BAR = { default: "bg-chart-2/45", destructive: "bg-background/30", outline: "bg-chart-2/20" } as const;
const FOCUS = "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function UndoCountdownButton({
  label,
  undoLabel = "Undo",
  doneLabel = "Done",
  restoredLabel = "Restored",
  undoWindow = 5000,
  resetAfter = 1800,
  onCommit,
  onUndo,
  onStart,
  state,
  onStateChange,
  variant = "default",
  size = "md",
  showSeconds = true,
  disabled = false,
  className = "",
  ref,
}: UndoCountdownButtonProps) {
  const [localState, setLocalState] = React.useState("idle" as UndoState);
  const [secondsLeft, setSecondsLeft] = React.useState(Math.ceil(undoWindow / 1000));
  const [restored, setRestored] = React.useState(false);
  const [reduced, setReduced] = React.useState(true);
  const bar = React.useRef(null as HTMLSpanElement | null);
  const countdown = React.useRef(null as Animation | null);
  const timer = React.useRef(0);
  const ticker = React.useRef(0);
  const resetTimer = React.useRef(0);
  const current = state ?? localState;

  const setState = React.useCallback((next: UndoState) => {
    if (state === undefined) setLocalState(next);
    onStateChange?.(next);
  }, [state, onStateChange]);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const clearTimers = () => {
    window.clearTimeout(timer.current);
    window.clearInterval(ticker.current);
    window.clearTimeout(resetTimer.current);
  };

  const commit = React.useCallback(() => {
    clearTimers();
    countdown.current = null;
    setState("done");
    void onCommit?.();
    if (resetAfter > 0) resetTimer.current = window.setTimeout(() => setState("idle"), resetAfter);
  }, [onCommit, resetAfter, setState]);

  const start = () => {
    if (disabled || current !== "idle") return;
    clearTimers();
    setRestored(false);
    setSecondsLeft(Math.ceil(undoWindow / 1000));
    setState("pending");
    onStart?.();
    const begin = performance.now();
    ticker.current = window.setInterval(() => {
      setSecondsLeft(Math.max(0, Math.ceil((undoWindow - (performance.now() - begin)) / 1000)));
    }, 100);
    const node = bar.current;
    if (node && !reduced && typeof node.animate === "function") {
      const animation = node.animate([{ transform: "scaleX(1)" }, { transform: "scaleX(0)" }], { duration: undoWindow, easing: "linear", fill: "forwards" });
      countdown.current = animation;
      animation.onfinish = () => { if (countdown.current === animation) commit(); };
    } else {
      timer.current = window.setTimeout(commit, undoWindow);
    }
  };

  const undo = () => {
    if (current !== "pending") return;
    clearTimers();
    const animation = countdown.current;
    countdown.current = null;
    const node = bar.current;
    if (animation && node && !reduced) {
      const progress = Math.min(1, Math.max(0, Number(animation.currentTime ?? 0) / undoWindow));
      animation.cancel();
      node.animate([{ transform: `scaleX(${1 - progress})` }, { transform: "scaleX(1)" }], { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
    }
    setRestored(true);
    setState("idle");
    onUndo?.();
    resetTimer.current = window.setTimeout(() => setRestored(false), 1200);
  };

  React.useEffect(() => () => { clearTimers(); countdown.current?.cancel(); }, []);

  // A host that drives `state` can also cancel from outside; keep timers in sync.
  React.useEffect(() => {
    if (state === "idle" && countdown.current) { clearTimers(); countdown.current.cancel(); countdown.current = null; }
  }, [state]);

  const pending = current === "pending";
  const done = current === "done";

  return (
    <button
      ref={ref}
      type="button"
      data-slot="undo-countdown-button"
      data-state={current}
      data-variant={variant}
      aria-live="polite"
      disabled={disabled}
      onClick={pending ? undo : start}
      onKeyDown={(event) => { if (event.key === "Escape" && pending) { event.preventDefault(); undo(); } }}
      className={`relative inline-flex select-none items-center justify-center overflow-hidden rounded-xl font-medium transition-[transform,opacity] motion-reduce:transition-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${SIZE[size]} ${SHELL[variant]} ${FOCUS} ${className}`}
    >
      <span ref={bar} data-bar aria-hidden="true" className={`absolute inset-0 origin-left ${BAR[variant]} ${pending ? "" : "opacity-0"}`} style={{ transform: pending ? undefined : "scaleX(1)" }} />
      <span className="relative inline-flex items-center gap-2">
        {done ? (
          <>
            <Check data-check className={`size-4 ${variant === "destructive" ? "" : "text-chart-2"}`} strokeWidth={2.5} aria-hidden="true" />
            <span>{doneLabel}</span>
          </>
        ) : pending ? (
          <>
            <RotateCcw className="size-4" aria-hidden="true" />
            <span data-undo-label>{undoLabel}{showSeconds && <span className="font-mono tabular-nums"> · {secondsLeft}s</span>}</span>
          </>
        ) : (
          <span data-label className={restored ? "text-chart-2" : ""}>{restored ? restoredLabel : label}</span>
        )}
      </span>
    </button>
  );
}

export default UndoCountdownButton;
