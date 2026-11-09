"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/* Core helpers (self-contained)                                              */
/* -------------------------------------------------------------------------- */

export type DotMatrixColorPreset =
  "primary" | "accent" | "muted" | "foreground" | "destructive";

export type DotMatrixDotShape = "circle" | "square";

export interface DotMatrixCommonProps {
  /** Outer box size in px. */
  size?: number;
  /** Individual dot size in px. */
  dotSize?: number;
  /** CSS color used for the dots (defaults to currentColor). */
  color?: string;
  /** Named theme-token preset that overrides `color`. */
  colorPreset?: DotMatrixColorPreset;
  ariaLabel?: string;
  className?: string;
  muted?: boolean;
  bloom?: boolean;
  halo?: number;
  dotClassName?: string;
  dotShape?: DotMatrixDotShape;
  speed?: number;
  animated?: boolean;
  hoverAnimated?: boolean;
  cellPadding?: number;
  opacityBase?: number;
  opacityMid?: number;
  opacityPeak?: number;
}

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function stylePx(value: number): string {
  return `${value}px`;
}

function styleOpacity(value: number): number {
  return Math.max(0, Math.min(1, value));
}

const PRESET_TOKENS: Record<DotMatrixColorPreset, string> = {
  primary: "hsl(var(--primary))",
  accent: "hsl(var(--accent))",
  muted: "hsl(var(--muted-foreground))",
  foreground: "hsl(var(--foreground))",
  destructive: "hsl(var(--destructive))",
};

function resolveDmxColorTokens(
  color: string,
  colorPreset?: DotMatrixColorPreset,
): { resolvedColor: string; dotFill: string } {
  const resolvedColor =
    colorPreset && PRESET_TOKENS[colorPreset]
      ? PRESET_TOKENS[colorPreset]
      : color;
  return { resolvedColor, dotFill: "currentColor" };
}

function remapOpacityToTriplet(
  opacity: number,
  opacityBase?: number,
  opacityMid?: number,
  opacityPeak?: number,
): number {
  if (opacityBase == null && opacityMid == null && opacityPeak == null) {
    return opacity;
  }
  const base = opacityBase ?? 0;
  const mid = opacityMid ?? (base + (opacityPeak ?? 1)) / 2;
  const peak = opacityPeak ?? 1;
  const t = Math.max(0, Math.min(1, opacity));
  if (t <= 0.5) {
    return base + (mid - base) * (t / 0.5);
  }
  return mid + (peak - mid) * ((t - 0.5) / 0.5);
}

function dmxBloomRootActive(bloom: boolean, halo: number): boolean {
  return Boolean(bloom) || (typeof halo === "number" && halo > 0);
}

function dmxDotBloomParts(
  isActive: boolean,
  opacity: number,
  bloom: boolean,
  halo: number,
  _opacityBase?: number,
  _opacityMid?: number,
  _opacityPeak?: number,
): { bloomDot: boolean; level: number } {
  const active = isActive && dmxBloomRootActive(bloom, halo);
  const level = active ? Math.max(0, Math.min(1, opacity)) : 0;
  return { bloomDot: active && opacity > 0.4, level };
}

/* -------------------------------------------------------------------------- */
/* Hooks (self-contained)                                                     */
/* -------------------------------------------------------------------------- */

type DotMatrixPhase = "idle" | "auto" | "hover";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function useDotMatrixPhases({
  animated,
  hoverAnimated,
}: {
  animated: boolean;
  hoverAnimated: boolean;
  speed: number;
}): {
  phase: DotMatrixPhase;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} {
  const [hovering, setHovering] = useState(false);
  const onMouseEnter = useCallback(() => setHovering(true), []);
  const onMouseLeave = useCallback(() => setHovering(false), []);

  let phase: DotMatrixPhase = "idle";
  if (animated) {
    phase = "auto";
  } else if (hoverAnimated && hovering) {
    phase = "hover";
  }

  return { phase, onMouseEnter, onMouseLeave };
}

function useCyclePhase({
  active,
  cycleMsBase,
  speed,
}: {
  active: boolean;
  cycleMsBase: number;
  speed: number;
}): number {
  const [phase, setPhase] = useState(0);
  const rafRef = useRef(0);
  const startRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setPhase(0);
      return;
    }
    const duration = Math.max(200, cycleMsBase / Math.max(0.01, speed));
    const loop = (t: number) => {
      if (!startRef.current) {
        startRef.current = t;
      }
      const elapsed = (t - startRef.current) % duration;
      setPhase(elapsed / duration);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      startRef.current = 0;
    };
  }, [active, cycleMsBase, speed]);

  return phase;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export type DotmTriangle13Props = DotMatrixCommonProps;

const MATRIX_SIZE = 7;
const BASE_OPACITY = 0.13;
const HIGH_OPACITY = 0.95;

const TRIANGLE_CELLS = new Set([
  "1,3",
  "2,2",
  "2,4",
  "3,1",
  "3,3",
  "3,5",
  "4,0",
  "4,2",
  "4,4",
  "4,6",
]);

/** Row serpent: base row left→right, row 3 right→left, mid rows alternate — reads as a zigzag zip. */
const SERPENT_PATH: ReadonlyArray<readonly [number, number]> = [
  [4, 0],
  [4, 2],
  [4, 4],
  [4, 6],
  [3, 5],
  [3, 3],
  [3, 1],
  [2, 2],
  [2, 4],
  [1, 3],
];

const PATH_LEN = SERPENT_PATH.length;
/** Soft tail length in path units (Braille-style ramp, not discrete steps). */
const TRAIL_SPAN = 4.25;

function isWithinTriangleMask(row: number, col: number): boolean {
  if (row < 0 || row >= MATRIX_SIZE || col < 0 || col >= MATRIX_SIZE) {
    return false;
  }

  return TRIANGLE_CELLS.has(`${row},${col}`);
}

function pathIndex(row: number, col: number): number | null {
  for (let i = 0; i < PATH_LEN; i += 1) {
    const [pr, pc] = SERPENT_PATH[i]!;
    if (pr === row && pc === col) {
      return i;
    }
  }
  return null;
}

function modF(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function behindAlongPath(s: number, i: number, L: number): number {
  return modF(s - i, L);
}

function smoothstep01(edge0: number, edge1: number, x: number): number {
  if (edge1 <= edge0) {
    return x >= edge1 ? 1 : 0;
  }
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function opacityForCell(row: number, col: number, phase: number): number {
  const idx = pathIndex(row, col);
  if (idx === null) {
    return 0;
  }

  const s = phase * PATH_LEN;
  const d = behindAlongPath(s, idx, PATH_LEN);
  const g = 1 - smoothstep01(0, TRAIL_SPAN, d);
  return BASE_OPACITY + g * (HIGH_OPACITY - BASE_OPACITY);
}

export function DotmTriangle13({
  size = 30,
  dotSize = 6.5,
  color = "currentColor",
  colorPreset,
  ariaLabel = "Loading",
  className,
  muted = false,
  bloom = false,
  halo = 0,
  dotClassName,
  dotShape = "circle",
  speed = 1.65,
  animated = true,
  hoverAnimated = false,
  cellPadding,
  opacityBase,
  opacityMid,
  opacityPeak,
}: DotmTriangle13Props) {
  const reducedMotion = usePrefersReducedMotion();
  const {
    phase: matrixPhase,
    onMouseEnter,
    onMouseLeave,
  } = useDotMatrixPhases({
    animated: Boolean(animated && !reducedMotion),
    hoverAnimated: Boolean(hoverAnimated && !reducedMotion),
    speed,
  });
  const cycleActive = !reducedMotion && matrixPhase !== "idle";
  const cyclePhase = useCyclePhase({
    active: cycleActive,
    cycleMsBase: 1400,
    speed,
  });

  const gap =
    cellPadding ??
    Math.max(1, Math.floor((size - dotSize * MATRIX_SIZE) / (MATRIX_SIZE - 1)));
  const matrixSize = dotSize * MATRIX_SIZE + gap * (MATRIX_SIZE - 1);
  const { resolvedColor, dotFill } = resolveDmxColorTokens(color, colorPreset);
  const rootStyle = {
    width: stylePx(cellPadding == null ? size : matrixSize),
    height: stylePx(cellPadding == null ? size : matrixSize),
    ["--dmx-dot-size" as const]: `${dotSize}px`,
    ["--dmx-halo-level" as const]: halo,
    ["--dmx-dot-fill" as const]: dotFill,
    color: resolvedColor,
  } as CSSProperties;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      className={cx(
        "dmx-root",
        `dmx-dot-shape-${dotShape}`,
        muted && "dmx-muted",
        dmxBloomRootActive(bloom, halo) && "dmx-bloom",
        className,
      )}
      style={rootStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="dmx-grid"
        style={{
          gap,
          gridTemplateColumns: `repeat(${MATRIX_SIZE}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${MATRIX_SIZE}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: MATRIX_SIZE * MATRIX_SIZE }).map((_, index) => {
          const row = Math.floor(index / MATRIX_SIZE);
          const col = index % MATRIX_SIZE;
          const isActive = isWithinTriangleMask(row, col);

          const phase =
            reducedMotion || matrixPhase === "idle" ? 0.14 : cyclePhase;
          const opacity = isActive ? opacityForCell(row, col, phase) : 0;

          const dmxBloom = dmxDotBloomParts(
            isActive,
            opacity,
            bloom,
            halo,
            opacityBase,
            opacityMid,
            opacityPeak,
          );

          return (
            <span
              key={index}
              aria-hidden="true"
              className={cx(
                "dmx-dot",
                !isActive && "dmx-inactive",
                dmxBloom.bloomDot && "dmx-bloom-dot",
                dotClassName,
              )}
              style={
                {
                  width: stylePx(dotSize),
                  height: stylePx(dotSize),
                  opacity: styleOpacity(
                    remapOpacityToTriplet(
                      opacity,
                      opacityBase,
                      opacityMid,
                      opacityPeak,
                    ),
                  ),
                  ["--dmx-bloom-level" as const]: dmxBloom.level,
                } as CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default DotmTriangle13;
