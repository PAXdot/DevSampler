// Built with Remotion - https://remotion.pro/license
// Cursor glyphs and frame-pure cursor motion shared by the "ui" block group.
import React from "react";
import { easeInOut, inkOn, ramp, withAlpha } from "../../../kit/index";
import { LUCIDE } from "./icons";

export type Pt = { x: number; y: number };

/** Cubic ease-out (decelerating glide: big steps first, tiny at the end). */
export const decel = (t: number) => 1 - Math.pow(1 - Math.max(0, Math.min(1, t)), 3);

/** Point on a quadratic arc from a to b. `bend` bows the path sideways by that share of the distance. */
export function arc(a: Pt, b: Pt, t: number, bend = 0.18): Pt {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const c = { x: mx - dy * bend, y: my + dx * bend };
  const u = 1 - t;
  return { x: u * u * a.x + 2 * u * t * c.x + t * t * b.x, y: u * u * a.y + 2 * u * t * c.y + t * t * b.y };
}

/** A cursor waypoint: be at (x,y) by frame f. */
export type Key = { f: number; x: number; y: number };

/**
 * Position along waypoints. Each leg is a slight arc. The first leg decelerates
 * (cursor arriving from off-frame); later legs ease in and out (deliberate moves).
 */
export function pathAt(frame: number, keys: Key[], bend = 0.14): Pt {
  const first = keys[0]!;
  if (frame <= first.f) return { x: first.x, y: first.y };
  for (let i = 1; i < keys.length; i++) {
    const a = keys[i - 1]!;
    const b = keys[i]!;
    if (frame <= b.f) {
      const raw = (frame - a.f) / Math.max(1, b.f - a.f);
      const t = i === 1 ? decel(raw) : easeInOut(raw);
      return arc(a, b, t, i % 2 ? bend : -bend);
    }
  }
  const last = keys[keys.length - 1]!;
  return { x: last.x, y: last.y };
}

/** 0 -> 1 over 2 frames at `at`, back to 0 over the next 5. The press dip of a click. */
export function press(frame: number, at: number): number {
  if (frame < at) return 0;
  if (frame < at + 2) return ramp(frame, [at, at + 2], [0, 1]);
  return ramp(frame, [at + 2, at + 7], [1, 0]);
}

/** Tip of lucide mouse-pointer-2 in its 24-unit box. */
const ARROW_TIP = 4.3 / 24;
/** Index fingertip of lucide pointer in its 24-unit box. */
const HAND_TIP = { x: 8 / 24, y: 2.6 / 24 };

/**
 * A cursor whose hot spot sits exactly at (x, y). `arrow` is lucide
 * mouse-pointer-2 (filled), `hand` is lucide pointer (outlined over a white halo).
 */
export const Cursor: React.FC<{
  x: number;
  y: number;
  size: number;
  kind?: "arrow" | "hand";
  /** 0..1 click dip. */
  down?: number;
  fill?: string;
  stroke?: string;
  opacity?: number;
  /** Name tag (multiplayer cursors). */
  label?: string;
  labelInk?: string;
  font?: string;
  slot?: string;
}> = ({ x, y, size, kind = "arrow", down = 0, fill = "currentColor", stroke = inkOn(fill), opacity = 1, label, labelInk = inkOn(fill), font, slot }) => {
  const tip = kind === "hand" ? HAND_TIP : { x: ARROW_TIP, y: ARROW_TIP };
  const s = 1 - 0.12 * down;
  return (
    <div
      style={{
        position: "absolute",
        left: x - size * tip.x,
        top: y - size * tip.y,
        width: size,
        height: size,
        opacity,
        transform: `scale(${s})`,
        transformOrigin: `${tip.x * 100}% ${tip.y * 100}%`,
        filter: `drop-shadow(0 ${size * 0.06}px ${size * 0.12}px ${withAlpha(stroke, 0.35)})`,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      {kind === "hand" ? (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", overflow: "visible" }}>
          {LUCIDE.pointer.map(([, a], i) => (
            <path key={`h${i}`} d={a.d} stroke={fill} strokeWidth={5.2} />
          ))}
          {LUCIDE.pointer.map(([, a], i) => (
            <path key={`s${i}`} d={a.d} stroke={stroke} strokeWidth={1.7} />
          ))}
        </svg>
      ) : (
        <svg width={size} height={size} viewBox="0 0 24 24" strokeLinejoin="round" style={{ display: "block", overflow: "visible" }}>
          <path d={LUCIDE["mouse-pointer-2"][0]![1].d} fill={fill} stroke={stroke} strokeWidth={1.5} />
        </svg>
      )}
      {label ? (
        <div
          data-21st-slot={slot}
          style={{
            position: "absolute",
            left: size * 0.78,
            top: size * 0.86,
            padding: `${size * 0.1}px ${size * 0.32}px`,
            borderRadius: size * 0.34,
            background: fill,
            color: labelInk,
            fontFamily: font,
            fontWeight: 600,
            fontSize: size * 0.46,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            boxShadow: `0 ${size * 0.05}px ${size * 0.15}px ${withAlpha(stroke, 0.25)}`,
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};

/** Expanding ring at a click point. `t` is 0..1 progress over the ripple's life. */
export const Ripple: React.FC<{ x: number; y: number; t: number; radius: number; color: string; width?: number }> = ({ x, y, t, radius, color, width }) => {
  if (t <= 0 || t >= 1) return null;
  const r = radius * decel(t);
  return (
    <div
      style={{
        position: "absolute",
        left: x - r,
        top: y - r,
        width: r * 2,
        height: r * 2,
        borderRadius: "50%",
        border: `${width ?? Math.max(1.5, radius * 0.06)}px solid ${withAlpha(color, 0.7 * (1 - t))}`,
        background: withAlpha(color, 0.14 * (1 - t)),
      }}
    />
  );
};
