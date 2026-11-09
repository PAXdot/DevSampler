// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-dot-ring.meta";
import type { schema } from "./cursor-dot-ring.schema";

const SETTLE = 90;
const CLICK = meta.timing.markers.click ?? 62;
/** The project the cursor opens, and the one it slides across on the way. */
const TARGET = 2;
const PASS = 3;
/** The ring trails the dot: a weighted average of the last LAG route positions. */
const LAG = 8;
const LAG_W = 0.68;

type Rect = { x: number; y: number; w: number; h: number };
const inside = (p: Pt, r: Rect) => p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h;

/** Exact lucide arrow-up-right. */
const ArrowUpRight: React.FC<{ size: number; color: string; width: number }> = ({ size, color, width }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0 }}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

/** Abstract project covers drawn only from the brand colors: four different posters. */
const Cover: React.FC<{ i: number; w: number; h: number; zoom: number; accent: string; secondary: string; color: string; paper: string }> = ({ i, w, h, zoom, accent, secondary, color, paper }) => {
  const disc = (cx: number, cy: number, r: number, fill: string, key?: string) => (
    <div key={key} style={{ position: "absolute", left: cx - r, top: cy - r, width: r * 2, height: r * 2, borderRadius: "50%", background: fill }} />
  );
  const m = Math.min(w, h);
  const bg = [accent, `color-mix(in srgb, ${color} 9%, ${paper})`, `color-mix(in srgb, ${color} 90%, ${paper})`, secondary][i]!;
  let art: React.ReactNode = null;
  if (i === 0) {
    art = (
      <>
        {disc(w * 0.62, h * 0.66, m * 0.58, secondary)}
        {disc(w * 0.24, h * 0.2, m * 0.09, paper)}
        <div style={{ position: "absolute", left: w * 0.12, top: h * 0.2 + m * 0.15, width: m * 0.34, height: Math.max(2, m * 0.012), background: paper }} />
      </>
    );
  } else if (i === 1) {
    const bars = [0.74, 0.56, 0.66, 0.38, 0.5];
    art = bars.map((bw, k) => (
      <div key={k} style={{ position: "absolute", left: w * 0.12, top: h * (0.17 + k * 0.135), width: w * bw, height: h * 0.07, borderRadius: h * 0.035, background: k === 3 ? secondary : accent }} />
    ));
  } else if (i === 2) {
    const aw = m * 0.64;
    art = (
      <>
        <div style={{ position: "absolute", left: (w - aw) / 2, bottom: 0, width: aw, height: h * 0.62, borderRadius: `${aw / 2}px ${aw / 2}px 0 0`, background: secondary }} />
        <div style={{ position: "absolute", left: (w - aw * 0.46) / 2, bottom: 0, width: aw * 0.46, height: h * 0.34, borderRadius: `${(aw * 0.46) / 2}px ${(aw * 0.46) / 2}px 0 0`, background: `color-mix(in srgb, ${color} 90%, ${paper})` }} />
        {disc(w * 0.76, h * 0.2, m * 0.1, accent)}
      </>
    );
  } else {
    art = (
      <>
        {disc(w * 0.5, h * 0.4, m * 0.34, accent)}
        <div style={{ position: "absolute", left: 0, right: 0, top: h * 0.4, height: h * 0.6, background: secondary }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: h * 0.4 - Math.max(2, m * 0.012) / 2, height: Math.max(2, m * 0.012), background: paper }} />
        {disc(w * 0.5, h * 0.72, m * 0.06, paper)}
      </>
    );
  }
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: Math.max(4, w * 0.02), background: bg }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${px(zoom)})`, transformOrigin: "50% 55%" }}>{art}</div>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ heading, note, titles, tags, viewLabel, color, accent, secondary, surfaceColor, background, fontFamily, serifFontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const serif = brandFontStack(serifFontFamily);
  const s = surfaceFor(surfaceColor, color);
  const paper = surfaceColor === "transparent" ? inkOn(color) : surfaceColor;
  const floor = typeFloor(H, portrait);

  // Grid: a row of four tall covers in 16:9, two by two elsewhere. Heading row on top.
  const cols = aspect === "16:9" ? 4 : 2;
  const rows = 4 / cols;
  const margin = W * (portrait ? 0.07 : 0.08);
  const gridW = W - margin * 2;
  const gapX = aspect === "16:9" ? W * 0.018 : portrait ? W * 0.04 : W * 0.03;
  const gapY = portrait ? u * 7 : u * 3.6;
  const tileW = (gridW - gapX * (cols - 1)) / cols;
  const showTags = !portrait;
  const showNote = !portrait && note.length > 0;

  const headingFs = fitFontSize({ chars: Array.from(heading).length, boxW: showNote ? gridW * 0.62 : gridW, boxH: u * 14, charEm: 0.46, max: portrait ? u * 11 : aspect === "1:1" ? u * 7.4 : u * 7.2, min: floor });
  const noteFs = Math.max(floor, fitFontSize({ chars: Array.from(note).length, boxW: gridW * 0.34, boxH: u * 5, charEm: 0.56, max: aspect === "1:1" ? u * 2.6 : u * 2.2 }));
  const capChars = Math.max(...titles.map((t, i) => Array.from(t).length + (showTags ? Array.from(tags[i] ?? "").length + 3 : 0)));
  const capFs = Math.max(floor, fitFontSize({ chars: capChars, boxW: tileW, boxH: u * 8, charEm: 0.56, max: portrait ? u * 5.8 : aspect === "1:1" ? u * 2.9 : u * 2.5 }));
  const capH = capFs * 1.3 + u * (portrait ? 2 : 1.4);
  const ruleGap = u * (portrait ? 3 : 2.2);
  const headerH = headingFs * 1.08 + ruleGap + u * (portrait ? 4.5 : 3.4);
  const coverH = aspect === "16:9" ? tileW * 1.4 : portrait ? tileW * 1.18 : (H * 0.76 - headerH - gapY * (rows - 1)) / rows - capH;
  const total = headerH + rows * (coverH + capH) + (rows - 1) * gapY;
  const top = (H - total) / 2;
  const gridTop = top + headerH;
  const ruleY = top + headingFs * 1.08 + ruleGap;
  const cover = (i: number): Rect => ({ x: margin + (i % cols) * (tileW + gapX), y: gridTop + Math.floor(i / cols) * (coverH + capH + gapY), w: tileW, h: coverH });
  const covers = [0, 1, 2, 3].map(cover);
  const T = covers[TARGET]!;
  const P = covers[PASS]!;

  // Cursor sizes: the idle ring is ~9% of the frame height in 16:9; it swells to fit the label.
  const R0 = aspect === "16:9" ? H * 0.09 : portrait ? u * 12 : u * 9;
  const labelFs = Math.max(floor, R0 * 0.34);
  const labelW = Array.from(viewLabel).length * 0.58 * labelFs + labelFs * 1.05;
  const Rs = Math.max(R0 * 1.9, labelW + labelFs * 1.7);
  const bw = Math.max(2, R0 * 0.028);
  const dotD = R0 * 0.2;

  // Route: in from the right below the grid, up across the last cover, onto the target, click, rest.
  const below = Math.min(H - R0 * 0.62, P.y + P.h + capH + R0 * 0.7);
  const keys: Key[] = [
    { f: 4, x: W + Rs * 0.7, y: below + R0 * 0.2 },
    { f: 26, x: P.x + P.w * 0.6, y: below },
    { f: 42, x: P.x + P.w * 0.46, y: P.y + P.h * 0.52 },
    { f: 56, x: T.x + T.w * 0.56, y: T.y + T.h * 0.5 },
    { f: CLICK, x: T.x + T.w * 0.56, y: T.y + T.h * 0.5 },
    { f: 80, x: T.x + T.w * 0.6, y: T.y + T.h * 0.58 },
  ];
  const route = (fr: number) => pathAt(fr, keys, 0.16);
  const dot = route(f);
  let rx = 0;
  let ry = 0;
  let ws = 0;
  for (let k = 0; k < LAG; k++) {
    const q = route(f - k);
    const w = Math.pow(LAG_W, k);
    rx += q.x * w;
    ry += q.y * w;
    ws += w;
  }
  const ring = { x: rx / ws, y: ry / ws };
  // Hover: share of the last few route samples over each cover, eased.
  const hoverOf = (r: Rect) => {
    let h = 0;
    let n = 0;
    for (let k = 0; k < 6; k++) {
      const w = Math.pow(0.72, k);
      h += inside(route(f - k), r) ? w : 0;
      n += w;
    }
    return easeInOut(h / n);
  };
  const hov = covers.map(hoverOf);
  const any = clamp01(hov.reduce((a, b) => a + b, 0));
  const down = press(f, CLICK);
  const res = expoOut(prog(f, CLICK + 2, CLICK + 22));

  const D = (R0 + (Rs - R0) * any) * (1 - 0.6 * down);
  const ringStroke = `color-mix(in srgb, ${accent} ${Math.round(any * 100)}%, ${withAlpha(color, 0.85)})`;
  // During the snap the label hands over to the dot, never both at once.
  const labelO = clamp01((any - 0.55) / 0.45) * clamp01(1 - down / 0.45);
  const dotScale = clamp01(1 - any * 1.1) + any * 0.9 * clamp01((down - 0.45) / 0.55);
  const dotInk = `color-mix(in srgb, ${inkOn(accent)} ${Math.round(any * 100)}%, ${color})`;
  const echo = prog(f, CLICK + 1, CLICK + 21);
  const echoD = Rs * (0.7 + 0.8 * expoOut(echo));

  const head = expoOut(prog(f, 0, 16));
  const textStyle: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.2 };

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={(T.x + T.w / 2) / W} y={(T.y + T.h / 2) / H} portrait={portrait} glow={0.55 + 0.45 * res} />
      {/* Heading row and hairline rule */}
      <div style={{ position: "absolute", left: margin, width: gridW, top, height: headingFs * 1.08, display: "flex", alignItems: "flex-end", justifyContent: "space-between", opacity: prog(f, 0, 10), transform: `translateY(${px((1 - head) * u * 2)}px)` }}>
        <span data-21st-slot="heading" style={{ fontFamily: serif, fontSize: headingFs, fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em", color: s.ink, whiteSpace: "nowrap" }}>
          {heading}
        </span>
        {showNote ? (
          <span data-21st-slot="note" style={{ ...textStyle, fontSize: noteFs, fontWeight: 500, color: s.muted, paddingBottom: headingFs * 0.14 }}>
            {note}
          </span>
        ) : null}
      </div>
      <div style={{ position: "absolute", left: margin, top: ruleY, width: gridW, height: Math.max(1, u * 0.12), background: s.line, transform: `scaleX(${px(expoOut(prog(f, 2, 22)))})`, transformOrigin: "0 50%" }} />
      {/* Project tiles */}
      {covers.map((r, i) => {
        const e = expoOut(prog(f, 3 + i * 3, 20 + i * 3));
        const target = i === TARGET;
        const dim = target ? 1 : 1 - 0.45 * res;
        const zoom = 1 + 0.08 * hov[i]! + (target ? 0.04 * res : 0);
        const pressK = target ? 1 - 0.025 * down : 1;
        return (
          <div key={i} style={{ position: "absolute", left: r.x, top: r.y, width: r.w, height: r.h + capH, opacity: prog(f, 3 + i * 3, 11 + i * 3) * dim, transform: `translateY(${px((1 - e) * u * 4)}px)` }}>
            <div style={{ position: "absolute", left: 0, top: 0, width: r.w, height: r.h, transform: `scale(${px(pressK)})`, filter: target || res <= 0 ? undefined : `grayscale(${px(0.85 * res)})`, boxShadow: target ? `0 ${px(u * 1.6 * res)}px ${px(u * 4 * res)}px ${withAlpha(s.deep, (s.dark ? 0.6 : 0.2) * res)}` : undefined, borderRadius: Math.max(4, r.w * 0.02) }}>
              <Cover i={i} w={r.w} h={r.h} zoom={zoom} accent={accent} secondary={secondary} color={color} paper={paper} />
            </div>
            <div style={{ position: "absolute", left: 0, top: r.h + u * (portrait ? 2 : 1.4), width: r.w, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: capFs * 0.6 }}>
              <span style={{ position: "relative", display: "inline-block" }}>
                <span data-21st-slot="titles" style={{ ...textStyle, fontSize: capFs, fontWeight: 600, letterSpacing: "-0.015em", color: s.ink, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                  {titles[i]}
                </span>
                {target ? (
                  <span style={{ position: "absolute", left: 0, right: 0, bottom: -capFs * 0.12, height: Math.max(2, capFs * 0.09), background: accent, transform: `scaleX(${px(res)})`, transformOrigin: "0 50%" }} />
                ) : null}
              </span>
              {showTags ? (
                <span data-21st-slot="tags" style={{ ...textStyle, fontSize: capFs, fontWeight: 400, color: s.muted }}>
                  {tags[i]}
                </span>
              ) : null}
            </div>
          </div>
        );
      })}
      {/* Click echo: the swollen ring left behind, widening and fading */}
      {echo > 0 && echo < 1 ? (
        <div style={{ position: "absolute", left: px(ring.x - echoD / 2), top: px(ring.y - echoD / 2), width: px(echoD), height: px(echoD), borderRadius: "50%", border: `${px(bw)}px solid ${withAlpha(accent, 0.8 * (1 - echo))}` }} />
      ) : null}
      {f >= 4 ? (
        <>
          {/* The ring: lags behind the dot, swells over a project, snaps tight on the click */}
          <div
            style={{
              position: "absolute",
              left: px(ring.x - D / 2),
              top: px(ring.y - D / 2),
              width: px(D),
              height: px(D),
              borderRadius: "50%",
              boxSizing: "border-box",
              border: `${px(bw)}px solid ${ringStroke}`,
              background: withAlpha(accent, 0.94 * any),
              boxShadow: any > 0 ? `0 ${px(u * 1.2 * any)}px ${px(u * 3.6 * any)}px ${withAlpha(s.deep, (s.dark ? 0.5 : 0.22) * any)}` : undefined,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: labelFs * 0.18, opacity: labelO, transform: `scale(${px(Math.min(1, D / Rs))})` }}>
              <span data-21st-slot="viewLabel" style={{ ...textStyle, fontSize: labelFs, fontWeight: 600, letterSpacing: "-0.01em", color: inkOn(accent) }}>
                {viewLabel}
              </span>
              <ArrowUpRight size={labelFs * 0.86} color={inkOn(accent)} width={2.4} />
            </div>
          </div>
          {/* The dot: the hot spot, exact on the route */}
          <div
            style={{
              position: "absolute",
              left: px(dot.x - dotD / 2),
              top: px(dot.y - dotD / 2),
              width: px(dotD),
              height: px(dotD),
              borderRadius: "50%",
              background: dotInk,
              transform: `scale(${px(dotScale)})`,
              zIndex: 21,
            }}
          />
        </>
      ) : null}
    </AbsoluteFill>
  );
};
