// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Ground, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-pixel.meta";
import type { schema } from "./cursor-pixel.schema";

const SETTLE = 90;
const CLICK = meta.timing.markers.click ?? 58;
const TARGET = 0;

/** The 8-bit arrow with a tail: X = outline, W = fill. Its hot spot is the top-left cell. */
const ARROW = ["X", "XX", "XWX", "XWWX", "XWWWX", "XWWWWX", "XWWWWWX", "XWWWWWWX", "XWWWWWWWX", "XWWWWWXXXX", "XWWXWWX", "XWX XWWX", "XX  XWWX", "X    XWWX", "     XWWX", "      XX"];
const CARET = ["X", "XX", "XXX", "XX", "X"];
const HEART = [" XX XX ", "XXXXXXX", "XXXXXXX", " XXXXX ", "  XXX  ", "   X   "];
const STAR = [" X ", "XXX", " X "];

/** A bitmap drawn as crisp cells; runs of one color merge into one rect. */
const Bitmap: React.FC<{ rows: string[]; cell: number; colors: Record<string, string>; style?: React.CSSProperties }> = ({ rows, cell, colors, style }) => {
  const cols = Math.max(...rows.map((r) => r.length));
  const rects: React.ReactNode[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x]!;
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run++;
      if (colors[ch]) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={colors[ch]} />);
      x += run;
    }
  });
  return (
    <svg width={cols * cell} height={rows.length * cell} viewBox={`0 0 ${cols} ${rows.length}`} shapeRendering="crispEdges" style={{ display: "block", overflow: "visible", ...style }}>
      {rects}
    </svg>
  );
};

/** A rectangle with staircase corners (`steps` cells of size `s`), as a clip-path polygon. */
function stepped(w: number, h: number, s: number, steps: number): string {
  const tl: [number, number][] = [];
  for (let i = 0; i < steps; i++) tl.push([i * s, (steps - i) * s], [(i + 1) * s, (steps - i) * s]);
  tl.push([steps * s, 0]);
  const tr = [...tl].reverse().map(([x, y]) => [w - x, y]);
  const br = tl.map(([x, y]) => [w - x, h - y]);
  const bl = [...tl].reverse().map(([x, y]) => [x, h - y]);
  return `polygon(${[...tl, ...tr, ...br, ...bl].map(([x, y]) => `${px(x!)}px ${px(y!)}px`).join(", ")})`;
}

const PixelBox: React.FC<{ x: number; y: number; w: number; h: number; s: number; steps: number; fill: string; style?: React.CSSProperties; children?: React.ReactNode }> = ({ x, y, w, h, s, steps, fill, style, children }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h, clipPath: stepped(w, h, s, steps), background: fill, ...style }}>{children}</div>
);

export const Component: React.FC<z.infer<typeof schema>> = ({ title, items, hint, readyLabel, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  /** Everything moves on 2-frame steps, like an old game loop. */
  const fs2 = Math.floor(f / 2) * 2;
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const paper = surfaceColor === "transparent" ? inkOn(color) : surfaceColor;
  const floor = typeFloor(H, portrait);

  // The art pixel. The cursor is 16 of them tall (~9% of the frame in 16:9).
  const P = Math.max(3, Math.round(u * (portrait ? 0.84 : 0.66)));
  const snap = (v: number) => Math.round(v / P) * P;

  // The screen: a pixel frame centered in the shot.
  const fw = snap(aspect === "16:9" ? W * 0.46 : aspect === "1:1" ? W * 0.74 : W * 0.86);
  const fh = snap(aspect === "16:9" ? H * 0.8 : aspect === "1:1" ? H * 0.8 : H * 0.64);
  const fx = snap((W - fw) / 2);
  const fy = snap((H - fh) / 2);
  const border = P * 2;
  const pad = snap(portrait ? u * 5 : u * 4);
  const innerX = fx + border + pad;
  const innerW = fw - (border + pad) * 2;

  const longest = Math.max(...items.map((t) => Array.from(t).length));
  const titleFs = fitFontSize({ chars: Array.from(title).length, boxW: innerW - P * 8, boxH: u * 14, charEm: 0.62, max: portrait ? u * 9.5 : aspect === "1:1" ? u * 7.6 : u * 6.6, min: floor });
  const barW = snap(innerW * (portrait ? 0.9 : 0.84));
  const itemFs = fitFontSize({ chars: longest, boxW: barW - P * 18, boxH: u * 10, charEm: 0.62, max: portrait ? u * 6.2 : aspect === "1:1" ? u * 4.4 : u * 3.6, min: floor });
  const labelFs = fitFontSize({ chars: Math.max(Array.from(hint).length, Array.from(readyLabel).length), boxW: innerW, boxH: u * 8, charEm: 0.62, max: portrait ? u * 5.6 : aspect === "1:1" ? u * 3.2 : u * 2.6, min: floor });
  const barH = snap(itemFs * 1.7);
  const rowH = snap(itemFs * 2.15);
  const loadW = snap(barW * 0.62);
  const loadH = P * 6;

  // Stack: hearts, title, menu, label + loading bar; the free height split between the gaps.
  const heartsH = P * 6;
  const titleH = titleFs * 1.25;
  const menuH = rowH * 3;
  const bottomH = labelFs * 1.3 + P * 3 + loadH;
  const innerTop = fy + border + pad;
  const innerH = fh - (border + pad) * 2;
  const free = Math.max(0, innerH - (heartsH + titleH + menuH + bottomH));
  const gap = free / 4.4;
  const heartsY = snap(innerTop);
  const titleY = heartsY + heartsH + gap * 1.2;
  const menuY = snap(titleY + titleH + gap * 1.5);
  const labelY = menuY + menuH + gap * 1.3;
  const loadY = snap(labelY + labelFs * 1.3 + P * 3);
  const barX = snap(W / 2 - barW / 2);
  const rowY = (i: number) => menuY + i * rowH + snap((rowH - barH) / 2);
  const bars = items.map((_, i) => ({ x: barX, y: rowY(i), w: barW, h: barH }));

  // Route: in from the right, up the menu (Quit, Options, Start), click, rest by the bar's end.
  const tipX = (k: number) => barX + barW * k;
  const mid = (i: number) => rowY(i) + barH * 0.5;
  const keys: Key[] = [
    { f: 10, x: W + P * 6, y: mid(2) + rowH * 0.9 },
    { f: 28, x: tipX(0.86), y: mid(2) },
    { f: 38, x: tipX(0.84), y: mid(1) },
    { f: 48, x: tipX(0.87), y: mid(0) },
    { f: CLICK, x: tipX(0.87), y: mid(0) },
    { f: 70, x: tipX(0.9), y: mid(0) + barH * 0.12 },
  ];
  const routeAt = (fr: number): Pt => {
    const p = pathAt(fr, keys, 0.12);
    return { x: snap(p.x), y: snap(p.y) };
  };
  const down = press(fs2, CLICK);
  const cur = routeAt(fs2);
  const inBar = (p: Pt, b: { x: number; y: number; w: number; h: number }) => p.x >= b.x && p.x < b.x + b.w && p.y >= b.y && p.y < b.y + b.h;
  // Selection follows the cursor and sticks to the last entry it touched.
  let selected = -1;
  for (let fr = 0; fr <= Math.min(fs2, 72); fr += 2) {
    const hit = bars.findIndex((b) => inBar(routeAt(fr), b));
    if (hit >= 0) selected = hit;
  }
  const flashing = fs2 >= CLICK && fs2 < CLICK + 12 && Math.floor((fs2 - CLICK) / 2) % 2 === 0;
  const picked = fs2 >= CLICK;

  // Boot: the frame opens in steps, then the pieces pop on.
  const boot = Math.ceil(prog(fs2, 0, 10) * 5) / 5;
  const on = (at: number) => fs2 >= at;

  // Burst: sixteen pixels flung on the grid, big accent ones far, small secondary ones near.
  const bt = prog(fs2, CLICK, CLICK + 20);
  const hot = routeAt(CLICK);
  // Loading bar fills one segment every two frames after the pick.
  const segs = 10;
  const filled = picked ? Math.min(segs, Math.max(0, Math.floor((fs2 - (CLICK + 4)) / 2) + 1)) : 0;
  const typed = picked ? Math.max(0, Math.floor(f - (CLICK + 2))) : 0;
  const readyText = Array.from(readyLabel).slice(0, typed).join("");
  const hintOn = !picked && on(10) && (fs2 >= 40 || Math.floor((fs2 - 10) / 8) % 2 === 0);

  // Inks: the cursor is the light ink filled, the dark ink outlined, like the classic arrow.
  const light = s.dark ? color : paper;
  const dark = s.deep;
  const textBase: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1, letterSpacing: "0.02em" };

  // Pixel stars around the screen (never near the corners).
  const starSpots: [number, number][] =
    aspect === "16:9"
      ? [[0.16, 0.26], [0.2, 0.7], [0.11, 0.5], [0.82, 0.22], [0.87, 0.44], [0.8, 0.64]]
      : aspect === "1:1"
        ? [[0.07, 0.3], [0.06, 0.66], [0.93, 0.26], [0.94, 0.58]]
        : [[0.2, 0.1], [0.5, 0.075], [0.8, 0.11], [0.24, 0.9], [0.76, 0.91]];

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.48} portrait={portrait} glow={0.5 + 0.5 * (picked ? 1 : 0)} />
      {starSpots.map(([sx, sy], i) => {
        const at = 6 + i * 2;
        if (!on(at)) return null;
        const c = [secondary, withAlpha(color, 0.4), accent][i % 3]!;
        const x = snap(W * sx);
        const y = snap(H * sy);
        return fs2 < at + 2 ? (
          <div key={i} style={{ position: "absolute", left: x + P, top: y + P, width: P, height: P, background: c }} />
        ) : (
          <Bitmap key={i} rows={STAR} cell={P} colors={{ X: c }} style={{ position: "absolute", left: x, top: y }} />
        );
      })}
      {/* The screen: hard shadow, thick stepped border, inner panel */}
      <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transform: `scaleY(${px(boot)})`, transformOrigin: `50% ${px(fy + fh / 2)}px`, opacity: on(0) ? 1 : 0 }}>
        <PixelBox x={fx + border} y={fy + border} w={fw} h={fh} s={P} steps={2} fill={withAlpha(dark, s.dark ? 0.7 : 0.22)} />
        <PixelBox x={fx} y={fy} w={fw} h={fh} s={P} steps={2} fill={color} />
        <PixelBox x={fx + border} y={fy + border} w={fw - border * 2} h={fh - border * 2} s={P} steps={1} fill={s.dark ? `color-mix(in srgb, ${color} 5%, ${paper})` : paper} />
      </div>
      {/* Lives */}
      {on(12) ? (
        <div style={{ position: "absolute", left: innerX, top: heartsY, display: "flex", gap: P * 2 }}>
          {[0, 1, 2].map((i) => (
            <Bitmap key={i} rows={HEART} cell={P} colors={{ X: i < 2 ? accent : withAlpha(color, 0.22) }} />
          ))}
        </div>
      ) : null}
      {/* Title with a stacked hard shadow */}
      {on(8) ? (
        <div style={{ position: "absolute", left: innerX, width: innerW, top: titleY, height: titleH, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span data-21st-slot="title" style={{ ...textBase, fontSize: titleFs, fontWeight: 700, color: s.ink, letterSpacing: "-0.01em", textShadow: `${P}px ${P}px 0 ${accent}, ${P * 2}px ${P * 2}px 0 ${secondary}` }}>
            {title}
          </span>
        </div>
      ) : null}
      {/* Menu */}
      {items.map((label, i) => {
        if (!on(12 + i * 2)) return null;
        const b = bars[i]!;
        const sel = i === selected;
        const isTarget = i === TARGET;
        const barFill = isTarget && flashing ? secondary : accent;
        const ink = sel ? inkOn(barFill) : s.ink;
        const dip = isTarget && down > 0.3 ? P : 0;
        return (
          <div key={i} style={{ position: "absolute", left: b.x, top: b.y + dip, width: b.w, height: b.h }}>
            {sel ? <PixelBox x={0} y={0} w={b.w} h={b.h} s={P} steps={1} fill={barFill} /> : null}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: P * 2, zIndex: 6 }}>
              <Bitmap rows={CARET} cell={P} colors={sel ? { X: ink } : {}} />
              <span data-21st-slot="items" style={{ ...textBase, fontSize: itemFs, fontWeight: sel ? 700 : 500, color: sel ? ink : withAlpha(color, 0.78) }}>
                {label}
              </span>
              <div style={{ width: P * 3 }} />
            </div>
          </div>
        );
      })}
      {/* Hint before the pick, then the ready line and the loading bar */}
      <div style={{ position: "absolute", left: innerX, width: innerW, top: labelY, height: labelFs * 1.3, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {hintOn ? (
          <span data-21st-slot="hint" style={{ ...textBase, fontSize: labelFs, fontWeight: 500, color: s.muted }}>
            {hint}
          </span>
        ) : null}
        {picked ? (
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ ...textBase, fontSize: labelFs, fontWeight: 700, visibility: "hidden" }}>{readyLabel}</span>
            <span data-21st-slot="readyLabel" style={{ ...textBase, position: "absolute", left: 0, top: 0, fontSize: labelFs, fontWeight: 700, color: s.ink }}>
              {readyText}
            </span>
          </span>
        ) : null}
      </div>
      {picked && fs2 >= CLICK + 2 ? (
        <div style={{ position: "absolute", left: snap(W / 2 - loadW / 2), top: loadY, width: loadW, height: loadH }}>
          <PixelBox x={0} y={0} w={loadW} h={loadH} s={P} steps={1} fill={color} />
          <PixelBox x={P} y={P} w={loadW - P * 2} h={loadH - P * 2} s={P} steps={0} fill={s.dark ? `color-mix(in srgb, ${color} 5%, ${paper})` : paper} />
          <div style={{ position: "absolute", left: P * 2, top: P * 2, right: P * 2, bottom: P * 2, display: "flex", gap: P }}>
            {Array.from({ length: segs }, (_, i) => (
              <div key={i} style={{ flex: 1, background: i < filled ? (i === segs - 1 ? secondary : accent) : "transparent" }} />
            ))}
          </div>
        </div>
      ) : null}
      {/* Pixel burst: over the selection bar, under its label */}
      {bt > 0 && bt < 1
        ? Array.from({ length: 16 }, (_, i) => {
            const far = i % 2 === 0;
            const ang = (i / 16) * Math.PI * 2;
            const d = (3 + (far ? 17 : 10) * easeOut(bt)) * P;
            const size = far ? (bt < 0.6 ? P * 3 : bt < 0.85 ? P * 2 : P) : bt < 0.5 ? P * 2 : P;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: snap(hot.x + Math.cos(ang) * d) - size / 2,
                  top: snap(hot.y + Math.sin(ang) * d) - size / 2,
                  width: size,
                  height: size,
                  background: far ? accent : secondary,
                  zIndex: 5,
                }}
              />
            );
          })
        : null}
      {/* The 8-bit cursor with its hard pixel shadow */}
      {fs2 >= 10 ? (
        <div style={{ position: "absolute", left: cur.x, top: cur.y + (down > 0.3 ? P : 0), zIndex: 20 }}>
          <Bitmap rows={ARROW} cell={P} colors={{ X: withAlpha(dark, s.dark ? 0.55 : 0.3), W: withAlpha(dark, s.dark ? 0.55 : 0.3) }} style={{ position: "absolute", left: P, top: P }} />
          <Bitmap rows={ARROW} cell={P} colors={{ X: dark, W: light }} style={{ position: "relative" }} />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
