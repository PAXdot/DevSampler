// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE_SOFT, brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-adaptive.meta";
import type { schema } from "./cursor-adaptive.schema";

const SETTLE = 76;
const CLICK = meta.timing.markers.click ?? 48;
/** Frames of route the pointer remembers when it decides how far it has melted into a tool. */
const MEMORY = 6;
/** The pop back out to a disc, after the pointer has left the tool. */
const POP: [number, number] = [62, 74];

type Node = [string, Record<string, string>];
type Rect = { x: number; y: number; w: number; h: number };

/** Exact lucide nodes (ISC): mouse-pointer-2, pen-line, shapes, type, sticky-note. */
const TOOL_ICONS: Node[][] = [
  [["path", { d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" }]],
  [["path", { d: "M12 20h9" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" }]],
  [["path", { d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }], ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]],
  [["polyline", { points: "4 7 4 4 20 4 20 7" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]],
  [["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }], ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4" }]],
];

const Icon: React.FC<{ nodes: Node[]; size: number; color: string }> = ({ nodes, size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0, overflow: "visible" }}>
    {nodes.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
  </svg>
);

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const inside = (p: Pt, r: Rect, mx: number, my: number) => p.x >= r.x - mx && p.x <= r.x + r.w + mx && p.y >= r.y - my && p.y <= r.y + r.h + my;

export const Component: React.FC<z.infer<typeof schema>> = ({ title, tools, pick: rawPick, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const pick = Math.max(0, Math.min(4, Math.round(rawPick)));
  // The tool that is selected before the click.
  const first = pick === 0 ? 1 : 0;

  // Board: a canvas card. Landscape docks the palette along its bottom; portrait runs it down the left side.
  const boardW = portrait ? W * 0.88 : aspect === "1:1" ? W * 0.86 : W * 0.62;
  const boardH = portrait ? H * 0.72 : aspect === "1:1" ? H * 0.82 : H * 0.8;
  const boardX = (W - boardW) / 2;
  const boardY = (H - boardH) / 2;
  const pad = u * (portrait ? 4 : 3);
  const boardR = u * (portrait ? 4 : 3);
  const titleFs = Math.max(floor, fitFontSize({ chars: Array.from(title).length + 1, boxW: boardW * 0.6, boxH: u * 8, charEm: 0.56, max: portrait ? u * 6 : u * 2.8 }));
  const headBottom = boardY + pad + titleFs * 1.3 + u * (portrait ? 2.5 : 1.5);

  // Palette cells.
  const cw = portrait ? W * 0.3 : u * (aspect === "1:1" ? 14.6 : 16.5);
  const ch = portrait ? u * 18.5 : u * (aspect === "1:1" ? 12.5 : 13.2);
  const gap = u * (portrait ? 0.8 : 0.7);
  const ppad = u * (portrait ? 1.6 : 1.5);
  const palW = portrait ? cw + ppad * 2 : cw * 5 + gap * 4 + ppad * 2;
  const palH = portrait ? ch * 5 + gap * 4 + ppad * 2 : ch + ppad * 2;
  const palX = portrait ? boardX + u * 3.5 : W / 2 - palW / 2;
  const palY = portrait ? headBottom + (boardY + boardH - u * 3.5 - headBottom - palH) / 2 : boardY + boardH - u * 4 - palH;
  const cellR = u * (portrait ? 3 : 2.2);
  const cells: Rect[] = [0, 1, 2, 3, 4].map((i) =>
    portrait ? { x: palX + ppad, y: palY + ppad + i * (ch + gap), w: cw, h: ch } : { x: palX + ppad + i * (cw + gap), y: palY + ppad, w: cw, h: ch },
  );
  const center = (i: number): Pt => ({ x: cells[i]!.x + cw / 2, y: cells[i]!.y + ch / 2 });
  const iconSize = ch * (portrait ? 0.36 : 0.34);
  const longest = Math.max(4, ...tools.map((t) => Array.from(t).length));
  const labelFs = Math.max(floor, fitFontSize({ chars: longest + 1, boxW: cw * 0.86, boxH: ch * 0.26, charEm: 0.56, max: portrait ? u * 6 : u * 2.4 }));

  // The pointer: a soft disc.
  const d = u * (portrait ? 12.5 : aspect === "1:1" ? 9.6 : 9.6);

  // Canvas decor sits where the disc does not rest.
  const region: Rect = portrait
    ? { x: palX + palW + u * 4, y: headBottom, w: boardX + boardW - pad - (palX + palW + u * 4), h: boardY + boardH - u * 3.5 - headBottom }
    : { x: boardX + pad, y: headBottom, w: boardW - pad * 2, h: palY - d * 1.45 - headBottom };
  const rel = (x: number, y: number, w: number, h: number): Rect => ({ x: region.x + region.w * x, y: region.y + region.h * y, w: region.w * w, h: region.h * h });
  const tile = portrait ? rel(0.04, 0.45, 0.92, 0.32) : rel(0.02, 0.04, 0.34, 0.86);
  const noteSide = portrait ? Math.min(region.w * 0.56, region.h * 0.28) : Math.min(region.w * 0.2, region.h * 0.6);
  const note: Rect = portrait ? { ...rel(0.2, 0.0, 0, 0), w: noteSide, h: noteSide } : { ...rel(0.44, 0.16, 0, 0), w: noteSide, h: noteSide };
  const doodle = portrait ? rel(0.02, 0.82, 0.96, 0.18) : rel(0.75, 0.06, 0.25, 0.88);

  // Route: in from below, onto the far tool, a glide across the palette (overshooting a little), the click, then out.
  const start = pick >= 2 ? 0 : 4;
  const dir = pick > start ? 1 : -1;
  const a = center(start);
  const b = center(pick);
  const nudge = portrait ? { x: cw * 0.06, y: ch * 0.05 } : { x: cw * 0.04, y: ch * 0.1 };
  const over = portrait ? { x: 0, y: dir * ch * 0.34 } : { x: dir * cw * 0.34, y: 0 };
  const rest: Pt = portrait ? { x: palX + palW + d * 0.82, y: b.y + ch * 0.2 } : { x: b.x + cw * 0.26, y: palY - d * 0.8 };
  const keys: Key[] = [
    { f: 10, x: portrait ? palX + palW + d * 1.4 : a.x - dir * cw * 0.35, y: portrait ? a.y + ch * 0.4 : palY - d * 2.4 },
    { f: 26, x: a.x + nudge.x, y: a.y + nudge.y },
    { f: 40, x: b.x + over.x + nudge.x, y: b.y + over.y + nudge.y },
    { f: 46, x: b.x + nudge.x, y: b.y + nudge.y },
    { f: 55, x: b.x + nudge.x, y: b.y + nudge.y },
    { f: 68, x: rest.x, y: rest.y },
  ];
  const route = (t: number) => pathAt(t, keys, 0.1);

  // Melt: how much of the last few frames the pointer spent over a tool, and which one(s).
  const mx = portrait ? ppad * 0.6 : gap / 2 + 1;
  const my = portrait ? gap / 2 + 1 : ppad * 0.6;
  let hits = 0;
  let hx = 0;
  let hy = 0;
  const weight = [0, 0, 0, 0, 0];
  for (let k = 0; k < MEMORY; k++) {
    const q = route(f - k);
    const i = cells.findIndex((c) => inside(q, c, mx, my));
    if (i >= 0) {
      hits += 1;
      hx += cells[i]!.x;
      hy += cells[i]!.y;
      weight[i] = (weight[i] ?? 0) + 1 / MEMORY;
    }
  }
  const e = easeInOut(hits / MEMORY);
  const p = route(f);
  const q1 = route(f - 1);
  const vx = p.x - q1.x;
  const vy = p.y - q1.y;
  const speed = Math.hypot(vx, vy);
  const sp = clamp01(speed / (u * 3.4));
  const ax = speed > 0 ? Math.abs(vx) / speed : 0;
  const ay = speed > 0 ? Math.abs(vy) / speed : 0;
  // A free disc stretches along its motion.
  const dw = d * (1 + 0.4 * sp * ax - 0.16 * sp * ay);
  const dh = d * (1 + 0.4 * sp * ay - 0.16 * sp * ax);
  let cx = p.x;
  let cy = p.y;
  let w = dw;
  let h = dh;
  let r = Math.min(dw, dh) / 2;
  if (hits > 0) {
    const hc = { x: hx / hits + cw / 2, y: hy / hits + ch / 2 };
    cx = lerp(p.x, hc.x + (p.x - hc.x) * 0.08, e);
    cy = lerp(p.y, hc.y + (p.y - hc.y) * 0.08, e);
    w = lerp(dw, cw, e);
    h = lerp(dh, ch, e);
    r = lerp(r, cellR, e);
  }
  const down = press(f, CLICK);
  const popT = prog(f, POP[0], POP[1]);
  const pop = popT > 0 && popT < 1 ? Math.sin(Math.PI * popT) : 0;
  const appear = expoOut(prog(f, 10, 20));
  const discScale = (0.6 + 0.4 * appear) * (1 - 0.07 * down) * (1 + 0.13 * pop);
  const discA = (s.dark ? 0.24 : 0.15) + 0.12 * down;
  // Once it is free again, the disc carries the picked tool's ink as a dot.
  const dot = springSnap(f, fps, POP[0] + 1, { damping: 12, stiffness: 190, mass: 0.6 }) * (1 - e);

  // Selection moves to the picked tool on the click, with a short bloom of light.
  const sel = expoOut(prog(f, CLICK + 1, CLICK + 12));
  const fillOf = (i: number) => (i === pick ? sel : i === first ? 1 - sel : 0);
  const glowT = prog(f, CLICK, CLICK + 22);
  const glow = glowT > 0 && glowT < 1 ? Math.sin(Math.PI * glowT) : 0;

  // Entrances.
  const boardIn = springSnap(f, fps, 0, APPLE_SOFT);
  const palIn = springSnap(f, fps, 6);
  const palShift = px((1 - palIn) * u * (portrait ? -6 : 6));
  const palMove = portrait ? `translateX(${palShift}px)` : `translateY(${palShift}px)`;
  const palOpacity = prog(f, 6, 14);
  const decorIn = (i: number) => springSnap(f, fps, 9 + i * 3);
  const ink = inkOn(accent);

  const labelStyle: React.CSSProperties = { fontFamily: font, fontSize: labelFs, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.01em", whiteSpace: "nowrap" };

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={portrait ? 0.45 : 0.55} portrait={portrait} glow={0.8} />

      {/* Board */}
      <div
        style={{
          position: "absolute",
          left: boardX,
          top: boardY,
          width: boardW,
          height: boardH,
          borderRadius: boardR,
          background: s.card,
          backgroundImage: `radial-gradient(${withAlpha(color, s.dark ? 0.16 : 0.13)} ${px(u * 0.16)}px, transparent ${px(u * 0.22)}px)`,
          backgroundSize: `${px(u * 3)}px ${px(u * 3)}px`,
          backgroundPosition: `${px(u * 1.5)}px ${px(u * 1.5)}px`,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 8),
          transform: boardIn < 1 ? `translateY(${px((1 - boardIn) * u * 4)}px) scale(${px(0.97 + 0.03 * boardIn)})` : undefined,
        }}
      />
      <div style={{ position: "absolute", left: boardX + pad, top: boardY + pad, right: W - boardX - boardW + pad, height: titleFs * 1.3, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: prog(f, 3, 12) }}>
        {title ? (
          <span data-21st-slot="title" style={{ fontFamily: font, fontSize: titleFs, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: s.ink, whiteSpace: "nowrap" }}>
            {title}
          </span>
        ) : (
          <span />
        )}
        <div style={{ display: "flex" }}>
          {[accent, secondary, `color-mix(in srgb, ${color} 45%, ${surfaceColor})`].map((c, i) => (
            <div key={i} style={{ width: titleFs * 1.15, height: titleFs * 1.15, marginLeft: i ? -titleFs * 0.32 : 0, borderRadius: "50%", background: c, boxShadow: `0 0 0 ${px(Math.max(2, u * 0.3))}px ${s.card}` }} />
          ))}
        </div>
      </div>

      {/* Canvas decor: a picture tile, a sticky note, a circled doodle. */}
      <div
        style={{
          position: "absolute",
          left: tile.x,
          top: tile.y,
          width: tile.w,
          height: tile.h,
          borderRadius: u * 1.6,
          overflow: "hidden",
          background: `linear-gradient(140deg, color-mix(in srgb, ${accent} ${s.dark ? 34 : 26}%, ${s.card}), color-mix(in srgb, ${secondary} ${s.dark ? 30 : 24}%, ${s.card}))`,
          boxShadow: `0 ${px(u * 0.8)}px ${px(u * 2.4)}px ${withAlpha(s.deep, s.dark ? 0.5 : 0.14)}`,
          opacity: prog(f, 9, 15),
          transform: `scale(${px(0.94 + 0.06 * decorIn(0))})`,
        }}
      >
        <div style={{ position: "absolute", right: tile.w * 0.16, top: tile.h * 0.16, width: Math.min(tile.w, tile.h) * 0.2, height: Math.min(tile.w, tile.h) * 0.2, borderRadius: "50%", background: withAlpha(color, 0.18) }} />
        <svg width={tile.w} height={tile.h} viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", left: 0, top: 0 }}>
          <path d="M0 78 L26 50 L44 66 L64 40 L100 74 L100 100 L0 100 Z" fill={withAlpha(color, 0.08)} />
          <path d="M0 90 L30 70 L54 84 L78 64 L100 82 L100 100 L0 100 Z" fill={withAlpha(color, 0.13)} />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          left: note.x,
          top: note.y,
          width: note.w,
          height: note.h,
          borderRadius: u * 0.8,
          background: `color-mix(in srgb, ${secondary} ${s.dark ? 30 : 22}%, ${s.card})`,
          boxShadow: `0 ${px(u * 0.9)}px ${px(u * 2.2)}px ${withAlpha(s.deep, s.dark ? 0.5 : 0.16)}`,
          opacity: prog(f, 12, 18),
          transform: `rotate(-5deg) scale(${px(0.9 + 0.1 * decorIn(1))})`,
          padding: note.w * 0.14,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: note.w * 0.09,
        }}
      >
        {[0.82, 0.64, 0.74, 0.4].map((wd, i) => (
          <div key={i} style={{ width: `${wd * 100}%`, height: Math.max(3, note.w * 0.055), borderRadius: 99, background: withAlpha(color, 0.2) }} />
        ))}
      </div>
      <svg
        width={doodle.w}
        height={doodle.h}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{ position: "absolute", left: doodle.x, top: doodle.y, overflow: "visible", opacity: prog(f, 15, 21), transform: `scale(${px(0.92 + 0.08 * decorIn(2))})` }}
      >
        <path d="M36 16 C 56 6, 80 16, 76 38 C 72 60, 38 64, 27 46 C 18 30, 32 12, 56 13" fill="none" stroke={withAlpha(accent, 0.75)} strokeWidth={3.2} strokeLinecap="round" />
        <path d="M14 82 C 24 64, 34 64, 40 78 S 56 94, 64 76 S 80 62, 88 72" fill="none" stroke={withAlpha(color, 0.32)} strokeWidth={3.2} strokeLinecap="round" />
      </svg>

      {/* Palette: plate, selection fills, the pointer, then the tool faces on top. */}
      <div
        style={{
          position: "absolute",
          left: palX,
          top: palY,
          width: palW,
          height: palH,
          borderRadius: cellR + ppad,
          background: `color-mix(in srgb, ${color} ${s.dark ? 10 : 2}%, ${surfaceColor})`,
          boxShadow: `0 ${px(u * 1.6)}px ${px(u * 4.5)}px ${withAlpha(s.deep, s.dark ? 0.7 : 0.2)}, 0 0 0 1px ${withAlpha(color, s.dark ? 0.12 : 0.08)}`,
          opacity: palOpacity,
          transform: palMove,
        }}
      />
      {cells.map((c, i) => {
        const fl = fillOf(i);
        if (fl <= 0) return null;
        const grow = i === pick ? 0.84 + 0.16 * fl : 1;
        return (
          <div
            key={`fill${i}`}
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              width: c.w,
              height: c.h,
              borderRadius: cellR,
              background: accent,
              opacity: fl * palOpacity,
              transform: `${palMove} scale(${px(grow)})`,
              boxShadow: i === pick && glow > 0 ? `0 0 ${px(u * 4 * glow)}px ${px(u * 0.6 * glow)}px ${withAlpha(accent, 0.55 * glow)}` : undefined,
            }}
          />
        );
      })}
      {f >= 10 ? (
        <div
          style={{
            position: "absolute",
            left: px(cx - w / 2),
            top: px(cy - h / 2),
            width: px(w),
            height: px(h),
            borderRadius: px(r),
            background: `radial-gradient(120% 120% at 50% 22%, ${withAlpha(color, discA + 0.1 * (1 - e))}, ${withAlpha(color, discA)} 62%)`,
            backdropFilter: `blur(${px(u * 0.5)}px) saturate(1.3)`,
            boxShadow: `0 ${px(u * 0.9 * (1 - e))}px ${px(u * 2.4)}px ${withAlpha(s.deep, (s.dark ? 0.55 : 0.18) * (1 - e))}, inset 0 0 0 ${px(Math.max(1.5, u * 0.16))}px ${withAlpha(color, 0.1 + 0.18 * (1 - e))}, inset 0 ${px(u * 0.25)}px ${px(u * 0.5)}px ${withAlpha(color, 0.16 * (1 - e))}`,
            transform: `scale(${px(discScale)})`,
            opacity: prog(f, 10, 15),
            display: "grid",
            placeItems: "center",
          }}
        >
          {dot > 0 ? (
            <div
              style={{
                width: d * 0.24,
                height: d * 0.24,
                borderRadius: "50%",
                background: accent,
                boxShadow: `0 0 0 ${px(Math.max(1.5, u * 0.22))}px ${withAlpha(inkOn(accent), 0.5)}, 0 0 ${px(u * 1.6)}px ${withAlpha(accent, 0.7)}`,
                transform: `scale(${px(dot)})`,
              }}
            />
          ) : null}
        </div>
      ) : null}
      {cells.map((c, i) => {
        const wE = easeInOut(weight[i] ?? 0);
        const fl = fillOf(i);
        const tone = fl > 0.5 ? ink : wE > 0.3 ? s.ink : s.muted;
        const o = center(i);
        const shift = { x: (p.x - o.x) * 0.09 * wE, y: (p.y - o.y) * 0.09 * wE };
        return (
          <div
            key={`face${i}`}
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              width: c.w,
              height: c.h,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: ch * 0.08,
              opacity: palOpacity,
              transform: `${palMove} translate(${px(shift.x)}px, ${px(shift.y)}px) scale(${px(1 + 0.05 * wE)})`,
            }}
          >
            <Icon nodes={TOOL_ICONS[i]!} size={iconSize} color={tone} />
            <span data-21st-slot="tools" style={{ ...labelStyle, color: tone, fontWeight: fl > 0.5 ? 600 : 500 }}>
              {tools[i]}
            </span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
