"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Slider marks family: 5 sliders with scale marks. A self-sufficient structure: a
   track div + a fill div + a marks layer + a thumb button. Pointer dragging (clientX
   within the track rect, with capture on the track) AND keyboard (arrows, Shift+arrow
   for a large step, Home/End). The snap behavior runs off step; the marks are purely
   visual and never swallow pointer events. Color comes ONLY from tokens. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const trackHeight: Record<StyledSize, string> = {
  sm: "h-1",
  md: "h-1.5",
  lg: "h-2.5",
  xl: "h-3.5",
};
const thumbSize: Record<StyledSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
  xl: "size-6",
};
const labelText: Record<StyledSize, string> = {
  sm: "text-[10px]",
  md: "text-[11px]",
  lg: "text-xs",
  xl: "text-sm",
};

const rootBase =
  "relative flex w-56 max-w-full touch-none select-none items-center outline-none";
/* Basparmak 24px altinda: gorunmez dokunma alani genisletmesi zorunlu. */
const thumbBase =
  "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-sm outline-none after:absolute after:-inset-1.5 after:content-[''] focus-visible:ring-[3px] focus-visible:ring-ring/50";

export type MarksSliderProps = {
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
function useSlider(props: MarksSliderProps, fallbackStep = 1) {
  const {
    value,
    defaultValue = 40,
    onValueChange,
    min = 0,
    max = 100,
    step = fallbackStep,
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

type MarksState = ReturnType<typeof useSlider>;

/* Ortak thumb: rol, aria, klavye ve yay tek yerde. */
function MarksThumb({
  s,
  size,
  reduce,
  className,
}: {
  s: MarksState;
  size: StyledSize;
  reduce: boolean | null;
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
      className={cn(thumbBase, thumbSize[size], className)}
      style={{ left: `${s.pct}%` }}
      animate={{ scale: !reduce && s.dragging ? 1.18 : 1 }}
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring" as const, stiffness: 500, damping: 30, mass: 0.6 }
      }
    />
  );
}

/* Steps: short, evenly spaced step lines along the track. */
export function StepsSlider({
  className,
  size = "md",
  ...rest
}: MarksSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  const ticks = 11;
  return (
    <div data-slot="styled-slider" className={cn(rootBase, className)}>
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-secondary",
          trackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
          style={{ width: `${s.pct}%` }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {Array.from({ length: ticks }).map((_, i) => (
            <span
              key={i}
              className="absolute top-1/2 h-1.5 w-px -translate-x-1/2 -translate-y-1/2 rounded-full bg-border"
              style={{ left: `${(i / (ticks - 1)) * 100}%` }}
            />
          ))}
        </div>
        <MarksThumb s={s} size={size} reduce={reduce} />
      </div>
    </div>
  );
}

/* Labels: adim cizgileri + altlarinda sayisal etiketler. */
export function LabelsSlider({
  className,
  size = "md",
  ...rest
}: MarksSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  const marks = 5;
  return (
    <div data-slot="styled-slider" className={cn(rootBase, "mb-5", className)}>
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-secondary",
          trackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
          style={{ width: `${s.pct}%` }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {Array.from({ length: marks }).map((_, i) => {
            const ratio = i / (marks - 1);
            return (
              <React.Fragment key={i}>
                <span
                  className="absolute top-1/2 h-2 w-px -translate-x-1/2 -translate-y-1/2 rounded-full bg-border"
                  style={{ left: `${ratio * 100}%` }}
                />
                <span
                  className={cn(
                    "absolute top-full mt-2 -translate-x-1/2 tabular-nums text-muted-foreground",
                    labelText[size],
                  )}
                  style={{ left: `${ratio * 100}%` }}
                >
                  {Math.round(s.min + ratio * (s.max - s.min))}
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <MarksThumb s={s} size={size} reduce={reduce} />
      </div>
    </div>
  );
}

/* Snap: 20'lik adima kenetlenir, isaret noktalari doldukca vurgulanir. */
export function SnapSlider({
  className,
  size = "md",
  ...rest
}: MarksSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest, 20);
  const stops = 6;
  return (
    <div data-slot="styled-slider" className={cn(rootBase, className)}>
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-secondary",
          trackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
          style={{ width: `${s.pct}%` }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {Array.from({ length: stops }).map((_, i) => {
            const ratio = i / (stops - 1);
            const passed = ratio * 100 <= s.pct;
            return (
              <span
                key={i}
                className={cn(
                  "absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
                  passed ? "bg-primary-foreground" : "bg-border",
                )}
                style={{ left: `${ratio * 100}%` }}
              />
            );
          })}
        </div>
        <MarksThumb s={s} size={size} reduce={reduce} />
      </div>
    </div>
  );
}

/* Scale: cetvel gorunumu, izin altinda uzun/kisa cizgiler. */
export function ScaleSlider({
  className,
  size = "md",
  ...rest
}: MarksSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  const ticks = 21;
  return (
    <div data-slot="styled-slider" className={cn(rootBase, "mb-4", className)}>
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative w-full cursor-pointer rounded-full bg-secondary",
          trackHeight[size],
        )}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-info"
          style={{ width: `${s.pct}%` }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-full mt-1.5"
          aria-hidden="true"
        >
          {Array.from({ length: ticks }).map((_, i) => {
            const major = i % 5 === 0;
            return (
              <span
                key={i}
                className={cn(
                  "absolute top-0 w-px -translate-x-1/2 rounded-full",
                  major ? "h-2.5 bg-muted-foreground" : "h-1.5 bg-border",
                )}
                style={{ left: `${(i / (ticks - 1)) * 100}%` }}
              />
            );
          })}
        </div>
        <MarksThumb s={s} size={size} reduce={reduce} className="bg-info" />
      </div>
    </div>
  );
}

/* Segments: iz aralikli parcalara bolunur, gecilen parcalar dolar. */
export function SegmentsSlider({
  className,
  size = "md",
  ...rest
}: MarksSliderProps) {
  const reduce = useReducedMotion();
  const s = useSlider(rest);
  const segments = 5;
  return (
    <div data-slot="styled-slider" className={cn(rootBase, className)}>
      <div
        ref={s.trackRef}
        onPointerDown={s.onPointerDown}
        onPointerMove={s.onPointerMove}
        onPointerUp={s.onPointerUp}
        className={cn(
          "relative flex w-full cursor-pointer gap-1",
          trackHeight[size],
        )}
      >
        {Array.from({ length: segments }).map((_, i) => {
          const start = (i / segments) * 100;
          const end = ((i + 1) / segments) * 100;
          const local = clamp(((s.pct - start) / (end - start)) * 100, 0, 100);
          return (
            <span
              key={i}
              className="relative h-full flex-1 overflow-hidden rounded-full bg-secondary"
            >
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                style={{ width: `${local}%` }}
              />
            </span>
          );
        })}
        <MarksThumb s={s} size={size} reduce={reduce} />
      </div>
    </div>
  );
}

export default StepsSlider;
