"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Slider minimal family: 5 plain, low-emphasis sliders. A self-sufficient structure: a track div plus a fill div plus a thumb button. Pointer dragging (clientX against the track rect, with capture on the track) AND keyboard (arrows, Shift+arrow for a large step, Home/End). Because the visuals are thin, the thumb carries an invisible touch area. Colour comes ONLY from tokens, alpha via color-mix. Motion is off under reduced-motion. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const hairTrackHeight: Record<StyledSize, string> = {
  sm: "h-px",
  md: "h-px",
  lg: "h-0.5",
  xl: "h-0.5",
};
const thinTrackHeight: Record<StyledSize, string> = {
  sm: "h-0.5",
  md: "h-1",
  lg: "h-1",
  xl: "h-1.5",
};
const smallThumbSize: Record<StyledSize, string> = {
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5",
  xl: "size-4",
};
const thumbSize: Record<StyledSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
  xl: "size-6",
};

const rootBase =
  "relative flex w-56 max-w-full touch-none select-none items-center outline-none";
/* Basparmak 24px altinda: gorunmez dokunma alani genisletmesi zorunlu. */
const thumbBase =
  "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none after:absolute after:-inset-1.5 after:content-[''] focus-visible:ring-[3px] focus-visible:ring-ring/50";

export type MinimalSliderProps = {
  className?: string;
  size?: StyledSize;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onValueChange?: (v: number) => void;
};

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/* Shared horizontal slider behaviour: controlled/uncontrolled value, pointer,
   keyboard. */
function useSlider(props: MinimalSliderProps) {
  const {
    value,
    defaultValue = 50,
    onValueChange,
    min = 0,
    max = 100,
    step = 1,
  } = props;
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [internal, setInternal] = React.useState(() =>
    clamp(defaultValue, min, max),
  );
  const [dragging, setDragging] = React.useState(false);
  const current = value !== undefined ? clamp(value, min, max) : internal;

  const commit = React.useCallback(
    (next: number) => {
      const c = clamp(Math.round(next / step) * step, min, max);
      if (value === undefined) setInternal(c);
      onValueChange?.(c);
    },
    [max, min, onValueChange, step, value],
  );

  const fromClientX = React.useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return current;
      const rect = el.getBoundingClientRect();
      const ratio = rect.width > 0 ? (clientX - rect.left) / rect.width : 0;
      return min + clamp(ratio, 0, 1) * (max - min);
    },
    [current, max, min],
  );

  const onPointerDown = React.useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      trackRef.current?.setPointerCapture?.(e.pointerId);
      setDragging(true);
      commit(fromClientX(e.clientX));
    },
    [commit, fromClientX],
  );

  const onThumbPointerDown = React.useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    trackRef.current?.setPointerCapture?.(e.pointerId);
    setDragging(true);
  }, []);

  const onPointerMove = React.useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      commit(fromClientX(e.clientX));
    },
    [commit, dragging, fromClientX],
  );

  const onPointerUp = React.useCallback((e: React.PointerEvent) => {
    trackRef.current?.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  }, []);

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      const delta = e.shiftKey ? step * 10 : step;
      let next = current;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown")
        next = current - delta;
      else if (e.key === "ArrowRight" || e.key === "ArrowUp")
        next = current + delta;
      else if (e.key === "Home") next = min;
      else if (e.key === "End") next = max;
      else return;
      e.preventDefault();
      commit(next);
    },
    [commit, current, max, min, step],
  );

  const pct = max > min ? ((current - min) / (max - min)) * 100 : 0;

  return {
    trackRef,
    current,
    pct,
    dragging,
    min,
    max,
    onPointerDown,
    onThumbPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
  };
}

type MinimalState = ReturnType<typeof useSlider>;

/* Ortak thumb: rol, aria, klavye ve yay tek yerde. */
function MinimalThumb({
  s,
  reduce,
  sizeClass,
  className,
}: {
  s: MinimalState;
  reduce: boolean | null;
  sizeClass: string;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      data-slot="styled-slider-thumb"
      role="slider"
      aria-label="Value"
      aria-valuenow={Math.round(s.current)}
      aria-valuemin={s.min}
      aria-valuemax={s.max}
      aria-orientation="horizontal"
      tabIndex={0}
      onPointerDown={s.onThumbPointerDown}
      onKeyDown={s.onKeyDown}
      className={cn(thumbBase, sizeClass, className)}
      style={{ left: `${s.pct}%` }}
      animate={{ scale: !reduce && s.dragging ? 1.25 : 1 }}
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring" as const, stiffness: 500, damping: 30, mass: 0.6 }
      }
    />
  );
}

/* Hair: sac teli inceliginde iz, kucuk sade basparmak. */
export function HairSlider({
  className,
  size = "md",
  ...rest
}: MinimalSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  return (
    <div
      data-slot="styled-slider"
      className={cn(rootBase, "min-h-6", className)}
    >
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-border",
          hairTrackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground"
          style={{ width: `${s.pct}%` }}
        />
        <MinimalThumb
          s={s}
          reduce={reduce}
          sizeClass={smallThumbSize[size]}
          className="bg-foreground"
        />
      </div>
    </div>
  );
}

/* Bare: no fill, only the track and a hollow ring thumb. */
export function BareSlider({
  className,
  size = "md",
  ...rest
}: MinimalSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  return (
    <div
      data-slot="styled-slider"
      className={cn(rootBase, "min-h-6", className)}
    >
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-border",
          thinTrackHeight[size],
        )}
      >
        <MinimalThumb
          s={s}
          reduce={reduce}
          sizeClass={thumbSize[size]}
          className="border-2 border-foreground bg-background"
        />
      </div>
    </div>
  );
}

/* Ghost: a very low-intensity track, with the thumb separated only by a token
   shadow. */
export function GhostSlider({
  className,
  size = "md",
  ...rest
}: MinimalSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  return (
    <div
      data-slot="styled-slider"
      className={cn(rootBase, "min-h-6", className)}
    >
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full [background-color:color-mix(in_oklab,var(--foreground)_8%,transparent)]",
          thinTrackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full [background-color:color-mix(in_oklab,var(--foreground)_35%,transparent)]"
          style={{ width: `${s.pct}%` }}
        />
        <MinimalThumb
          s={s}
          reduce={reduce}
          sizeClass={smallThumbSize[size]}
          className="bg-background shadow-md ring-1 ring-border"
        />
      </div>
    </div>
  );
}

/* Thin: ince iz, dar dikdortgen kolcak basparmak. */
export function ThinSlider({
  className,
  size = "md",
  ...rest
}: MinimalSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  return (
    <div
      data-slot="styled-slider"
      className={cn(rootBase, "min-h-6", className)}
    >
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-secondary",
          thinTrackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground"
          style={{ width: `${s.pct}%` }}
        />
        <MinimalThumb
          s={s}
          reduce={reduce}
          sizeClass={cn(smallThumbSize[size], "w-1 rounded-sm")}
          className="h-4 bg-foreground"
        />
      </div>
    </div>
  );
}

/* Dot: dolum yok, tek notr nokta ve nokta izi. */
export function DotSlider({
  className,
  size = "md",
  ...rest
}: MinimalSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  const dots = 9;
  return (
    <div
      data-slot="styled-slider"
      className={cn(rootBase, "min-h-6", className)}
    >
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn("relative w-full cursor-pointer", thinTrackHeight[size])}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {Array.from({ length: dots }).map((_, i) => (
            <span
              key={i}
              className="absolute top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border"
              style={{ left: `${(i / (dots - 1)) * 100}%` }}
            />
          ))}
        </div>
        <MinimalThumb
          s={s}
          reduce={reduce}
          sizeClass={smallThumbSize[size]}
          className="bg-foreground"
        />
      </div>
    </div>
  );
}

export default HairSlider;
