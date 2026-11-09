// Built with Remotion - https://remotion.pro/license
// Helpers for the cursor blocks: the ui group's cursor and motion, the proof-cta
// surfaces and type floors, the extra cursor shapes (I-beam, crosshair, pen) and
// the few exact lucide icons these scenes draw. Frame-pure.
import React from "react";
import { inkOn, withAlpha } from "../../kit/index";

export { Cursor, arc, decel, pathAt, press, type Key, type Pt } from "../ui/shared/cursor";
export { Ground, clamp01, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Surface } from "../proof-cta/shared";

/**
 * The cursor styles' arrow: a classic pointer with a tail, drawn for 21st
 * (24-unit box). Its hot spot is ARROW_TAIL_TIP.
 */
export const ARROW_TAIL_PATH = "M5.5 3.5 L5.5 19.6 L9.7 15.6 L12.6 22 L15.4 20.8 L12.5 14.5 L18.4 14.5 Z";
export const ARROW_TAIL_TIP = { x: 5.5 / 24, y: 3.5 / 24 };
/** The outline's vertices, for styles that redraw it (sketch wobble, pixel grids). */
export const ARROW_TAIL_POINTS: [number, number][] = [[5.5, 3.5], [5.5, 19.6], [9.7, 15.6], [12.6, 22], [15.4, 20.8], [12.5, 14.5], [18.4, 14.5]];

type Node = [string, Record<string, string>];
/** Exact icon nodes from lucide (ISC). */
const GLYPHS = {
  "text-cursor": [["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }], ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }], ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]],
  crosshair: [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]],
  pencil: [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { d: "m15 5 4 4" }]],
  "file-archive": [["path", { d: "M10 12v-1" }], ["path", { d: "M10 18v-2" }], ["path", { d: "M10 7V6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }], ["circle", { cx: "10", cy: "20", r: "2" }]],
  "cloud-upload": [["path", { d: "M12 13v8" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "m8 17 4-4 4 4" }]],
  check: [["path", { d: "M20 6 9 17l-5-5" }]],
  sparkles: [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }], ["path", { d: "M20 3v4" }], ["path", { d: "M22 5h-4" }], ["path", { d: "M4 17v2" }], ["path", { d: "M5 18H3" }]],
  bold: [["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]],
  italic: [["line", { x1: "19", x2: "10", y1: "4", y2: "4" }], ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }], ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]],
  link: [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]],
  "message-square": [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]],
  rocket: [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]],
  "arrow-right": [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]],
} satisfies Record<string, Node[]>;

export type GlyphName = keyof typeof GLYPHS;

export const Glyph: React.FC<{ name: GlyphName; size: number; color: string; strokeWidth?: number; fill?: string; style?: React.CSSProperties }> = ({ name, size, color, strokeWidth = 2, fill = "none", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0, overflow: "visible", ...style }}>
    {(GLYPHS[name] as Node[]).map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
  </svg>
);

/**
 * A cursor shape other than the arrow or hand, with its hot spot at (x, y):
 * the I-beam and crosshair at their centers, the pen at its nib. Drawn over a
 * wide halo in `halo` so it reads on any brand, like a system cursor.
 */
export const ShapeCursor: React.FC<{
  x: number;
  y: number;
  size: number;
  kind: "text-cursor" | "crosshair" | "pencil";
  ink: string;
  halo?: string;
  fill?: string;
  opacity?: number;
}> = ({ x, y, size, kind, ink, halo = inkOn(ink), fill = "none", opacity = 1 }) => {
  // Pen nib sits at (2.4, 21.6) in the 24-unit box; the others are centered.
  const tip = kind === "pencil" ? { x: 2.4 / 24, y: 21.6 / 24 } : { x: 0.5, y: 0.5 };
  const nodes = GLYPHS[kind] as Node[];
  return (
    <div
      style={{
        position: "absolute",
        left: x - size * tip.x,
        top: y - size * tip.y,
        width: size,
        height: size,
        opacity,
        filter: `drop-shadow(0 ${size * 0.05}px ${size * 0.1}px ${withAlpha(halo, 0.4)})`,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", overflow: "visible" }}>
        {nodes.map(([tag, attrs], i) => React.createElement(tag, { key: `h${i}`, ...attrs, stroke: halo, strokeWidth: 4.4 }))}
        {nodes.map(([tag, attrs], i) => React.createElement(tag, { key: `s${i}`, ...attrs, stroke: ink, strokeWidth: 1.8, fill: tag === "path" && kind === "pencil" && i === 0 ? fill : "none" }))}
      </svg>
    </div>
  );
};

/** An expanding ring at a click point, `t` 0..1 over its life. */
export const ClickRing: React.FC<{ x: number; y: number; size: number; t: number; color: string; width: number }> = ({ x, y, size, t, color, width }) => {
  if (t <= 0 || t >= 1) return null;
  const d = size * (1 - Math.pow(1 - t, 3));
  return <div style={{ position: "absolute", left: x - d / 2, top: y - d / 2, width: d, height: d, borderRadius: "50%", border: `${width}px solid ${withAlpha(color, 0.8 * (1 - t))}`, pointerEvents: "none" }} />;
};
