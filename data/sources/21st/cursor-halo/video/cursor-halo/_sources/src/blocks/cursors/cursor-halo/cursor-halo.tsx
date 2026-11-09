// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ARROW_TAIL_PATH, ARROW_TAIL_TIP, Glyph, Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./cursor-halo.meta";
import type { schema } from "./cursor-halo.schema";

const SETTLE = 86;
const SCAN = meta.timing.markers.scan ?? 26;
const HOVER = meta.timing.markers.hover ?? 48;
const CLICK = meta.timing.markers.click ?? 54;

type Rect = { x: number; y: number; w: number; h: number };

const len = (t: string) => Array.from(t).length;

/** Counts the leading number of a value up, keeping prefix, suffix, decimals and grouping. */
function countUp(value: string, p: number): string {
  const m = /^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/.exec(value);
  if (!m || p >= 1) return value;
  const [, pre, num, post] = m as unknown as [string, string, string, string];
  const decimals = num.includes(".") ? num.split(".")[1]!.length : 0;
  const v = parseFloat(num.replace(/,/g, "")) * clamp01(p);
  const body = num.includes(",") ? v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : v.toFixed(decimals);
  return `${pre}${body}${post}`;
}

/** A deterministic 12-point series for tile i (0..1), trending up or down. */
function series(i: number, up: boolean, n = 12): number[] {
  return Array.from({ length: n }, (_, k) => {
    const t = k / (n - 1);
    const trend = up ? t : 1 - t;
    const wob = Math.sin(k * 1.9 + i * 2.7) * 0.13 + Math.sin(k * 0.7 + i * 1.3) * 0.09;
    return clamp01(0.12 + trend * 0.62 + wob);
  });
}

/** Distance from a point to a rect, 0 inside it. */
const outside = (x: number, y: number, r: Rect) => Math.hypot(Math.max(r.x - x, 0, x - (r.x + r.w)), Math.max(r.y - y, 0, y - (r.y + r.h)));

/** Sparkline (and, once focused, its filled area) in a w x h box. */
const Spark: React.FC<{ w: number; h: number; values: number[]; stroke: string; width: number; area: string; areaOpacity: number; dot: number; dotColor: string; ring: string }> = ({ w, h, values, stroke, width, area, areaOpacity, dot, dotColor, ring }) => {
  const pad = width * 1.5;
  const pts = values.map((v, k) => ({ x: px(pad + (k / (values.length - 1)) * (w - pad * 2)), y: px(pad + (1 - v) * (h - pad * 2)) }));
  const line = pts.map((p, k) => `${k ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  const last = pts[pts.length - 1]!;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${px(w)} ${px(h)}`} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      {areaOpacity > 0 ? <path d={`${line} L${last.x} ${px(h)} L${pts[0]!.x} ${px(h)} Z`} fill={area} opacity={px(areaOpacity)} /> : null}
      <path d={line} fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
      {dot > 0 ? <circle cx={last.x} cy={last.y} r={px(width * 2.2 * dot)} fill={dotColor} stroke={ring} strokeWidth={px(width * 1.1)} /> : null}
    </svg>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ title, range, metrics, values, deltas, focus, detailsLabel, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  /** The cursor's fill: the lighter of the brand's ink and surface. */
  const light = s.dark ? s.ink : s.card;

  // ---- Dashboard geometry: a panel with a header and a grid of KPI tiles. ----
  const n = Math.min(metrics.length, portrait ? 4 : 8);
  const wide = aspect === "1:1";
  const cols = aspect === "16:9" ? (n > 6 ? 4 : 3) : 2;
  const rows = Math.ceil(n / cols);
  const pw = W * (aspect === "16:9" ? 0.86 : wide ? 0.88 : 0.92);
  const ph = H * (aspect === "16:9" ? 0.8 : wide ? 0.86 : 0.74);
  const panel: Rect = { x: (W - pw) / 2, y: (H - ph) / 2, w: pw, h: ph };
  const pad = u * (portrait ? 3 : 2.6);
  const gap = u * (portrait ? 2 : 1.4);
  const showRange = Boolean(range) && !portrait;
  const showDeltas = !portrait;

  const titleFs = Math.max(floor, fitFontSize({ chars: len(title) + 1, boxW: (pw - pad * 2) * (showRange ? 0.6 : 1), boxH: u * 9, charEm: 0.56, max: portrait ? u * 7.4 : u * 3.6 }));
  const rangeFs = floor;
  const chipH = rangeFs * 1.9;
  const headerH = Math.max(titleFs * 1.3, showRange ? chipH : 0);
  const gridTop = panel.y + pad + headerH + gap * 1.2;
  const gridH = panel.y + ph - pad - gridTop;
  const tileW = (pw - pad * 2 - (cols - 1) * gap) / cols;
  const tileH = (gridH - (rows - 1) * gap) / rows;
  const tiles: Rect[] = Array.from({ length: n }, (_, i) => ({ x: panel.x + pad + (i % cols) * (tileW + gap), y: gridTop + Math.floor(i / cols) * (tileH + gap), w: tileW, h: tileH }));
  const tp = u * (portrait ? 2.8 : wide ? 1.9 : 2.1);

  // ---- Type: one size per role, fitted to the longest copy. ----
  const shown = (arr: string[]) => arr.slice(0, n);
  const maxLabel = Math.max(1, ...shown(metrics).map(len));
  const maxValue = Math.max(1, ...shown(values).map(len));
  const maxDelta = Math.max(1, ...shown(deltas).map(len));
  const deltaFs = floor;
  const deltaW = deltaFs * (0.58 * maxDelta + 1.1);
  const colW = wide ? (tileW - tp * 2) * 0.52 : tileW - tp * 2;
  const labelBox = wide ? colW : colW - (showDeltas && deltas.length ? deltaW + u : 0);
  const labelFs = Math.max(floor, fitFontSize({ chars: maxLabel, boxW: labelBox, boxH: u * 6, charEm: 0.56, max: portrait ? floor * 1.04 : u * 2.2 }));
  const valueFs = Math.max(floor, fitFontSize({ chars: maxValue, boxW: colW, boxH: tileH * (wide ? 0.34 : 0.3), charEm: 0.6, max: portrait ? u * 10 : wide ? u * 4.8 : u * 6 }));
  const pillFs = Math.max(floor, portrait ? 0 : u * 2);
  const pillPadX = pillFs * (portrait ? 0.6 : 0.8);
  const glyphSize = pillFs * 0.9;
  const pillTextW = len(detailsLabel) * 0.56 * pillFs;
  const withGlyph = pillTextW + glyphSize + pillFs * 0.35 + pillPadX * 2 <= tileW - tp * 2;
  const pillW = Math.min(tileW - tp * 2, pillTextW + pillPadX * 2 + (withGlyph ? glyphSize + pillFs * 0.35 : 0));
  const pillH = pillFs * 1.85;

  // ---- The focused tile, its Details button and the cursor route. ----
  const idx = Math.max(0, Math.min(n - 1, focus));
  const target = tiles[idx]!;
  const pill: Rect = { x: target.x + tileW - tp - pillW, y: target.y + tileH - tp - pillH, w: pillW, h: pillH };
  const tr = Math.floor(idx / cols);
  const tc = idx % cols;
  let scanIdx = (tr < rows - 1 ? rows - 1 : Math.max(0, tr - 1)) * cols + (tc + 1 < cols ? tc + 1 : Math.max(0, tc - 1));
  if (scanIdx >= n || scanIdx === idx) scanIdx = idx === 0 ? 1 : 0;
  const scanT = tiles[scanIdx]!;
  const scan = { x: scanT.x + scanT.w * 0.42, y: scanT.y + scanT.h * 0.48 };
  const size = u * (portrait ? 12 : 9);
  // The hot spot lands on the button's arrow (or its right end), so the label stays readable.
  const hit = { x: pill.x + pill.w - (withGlyph ? pillPadX + glyphSize * 0.45 : pillPadX * 0.7), y: pill.y + pill.h * 0.56 };
  const rest = { x: hit.x + size * 0.05, y: hit.y + size * 0.08 };
  const start = { x: Math.max(W * 0.3, Math.min(W * 0.7, scan.x + W * 0.1)), y: H + size * 1.6 };
  const tip = pathAt(f, [
    { f: 4, ...start },
    { f: SCAN, ...scan },
    { f: SCAN + 5, ...scan },
    { f: HOVER, ...hit },
    { f: CLICK + 6, ...hit },
    { f: CLICK + 20, ...rest },
  ]);
  const down = press(f, CLICK);
  /** Where the pool of light sits: the arrow's body, not its hot spot. */
  // As it homes in on the button the pool drifts a little toward the tile, so the light sits on the KPI it opens.
  const homeT = easeInOut(prog(f, HOVER - 10, CLICK + 16));
  const settleT = easeInOut(prog(f, CLICK, CLICK + 24));
  const body = {
    x: tip.x + size * 0.2 + (target.x + tileW * 0.62 - tip.x) * 0.35 * homeT,
    y: tip.y + size * 0.3 + (target.y + tileH * 0.5 - tip.y) * 0.35 * homeT,
  };

  // ---- Reactions. ----
  const clicked = f >= CLICK;
  const focusT = easeInOut(prog(f, CLICK + 1, CLICK + 16));
  const fillT = expoOut(prog(f, CLICK, CLICK + 8));
  const swell = expoOut(prog(f, CLICK, CLICK + 3)) * (1 - easeInOut(prog(f, CLICK + 3, CLICK + 26)));
  const near = (r: Rect, reach: number) => easeInOut(clamp01(1 - outside(tip.x, tip.y, r) / reach));
  const targetHover = near(target, u * 5);
  const reveal = clicked ? 1 : expoOut(clamp01(targetHover * 1.25 - 0.25));
  const overPill = near(pill, u * 2.5);

  const D = size * 5.8;
  const haloScale = (1 + 0.1 * settleT) * (1 + 0.38 * swell);
  const haloIn = prog(f, 5, 16);
  const blend: React.CSSProperties["mixBlendMode"] = s.dark ? "screen" : "multiply";
  const glow = (a: number) =>
    `radial-gradient(circle, ${withAlpha(accent, a)} 0%, ${withAlpha(accent, a * 0.36)} 32%, ${withAlpha(accent, a * 0.1)} 50%, ${withAlpha(accent, 0)} 68%)`;

  const text: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.2 };
  const up = (d: string | undefined) => !d || !/^[-−]/.test(d.trim());
  /** Rising deltas: the secondary color pulled toward the ink so it reads on any brand. */
  const riseInk = `color-mix(in srgb, ${secondary} ${s.dark ? 52 : 66}%, ${color})`;

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.55} />
      <div
        style={{
          position: "absolute",
          left: px(panel.x),
          top: px(panel.y),
          width: px(pw),
          height: px(ph),
          borderRadius: u * 2.4,
          background: s.card,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 8),
          transform: `translateY(${px((1 - expoOut(prog(f, 0, 16))) * u * 2.4)}px)`,
        }}
      >
        <div style={{ position: "absolute", left: pad, right: pad, top: pad, height: headerH, display: "flex", alignItems: "center", justifyContent: "space-between", gap: u * 2 }}>
          <span data-21st-slot="title" style={{ ...text, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.02em", color: s.ink }}>
            {title}
          </span>
          {showRange ? (
            <div style={{ height: chipH, padding: `0 ${px(rangeFs * 0.85)}px`, borderRadius: chipH / 2, background: s.raised, boxShadow: `inset 0 0 0 1px ${s.line}`, display: "flex", alignItems: "center", flexShrink: 0 }}>
              <span data-21st-slot="range" style={{ ...text, fontSize: rangeFs, fontWeight: 500, color: s.muted }}>
                {range}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      {tiles.map((t, i) => {
        const isTarget = i === idx;
        const enter = expoOut(prog(f, 2 + i * 0.9, 13 + i * 0.9));
        const lift = isTarget ? Math.max(near(t, u * 5), focusT) : near(t, u * 4) * (1 - focusT);
        const dim = isTarget ? 0 : 0.42 * focusT;
        const delta = deltas[i];
        const rising = up(delta);
        const sparkBox: Rect = wide
          ? { x: tp + colW + tp * 0.8, y: tp + pillH * 0.1, w: tileW - tp * 2 - colW - tp * 0.8, h: tileH - tp * 2 - pillH * 1.1 }
          : { x: tp, y: tp + labelFs * 1.3 + tp * 0.3 + valueFs * 1.15 + tp * 0.6, w: tileW - tp * 2, h: 0 };
        // Every tall tile keeps a footer the height of the Details button, so the focused chart is never covered.
        if (!wide) sparkBox.h = Math.max(u * 2, tileH - tp - sparkBox.y - pillH - tp * 0.45);
        const lineInk = isTarget ? `color-mix(in srgb, ${accent} ${px(focusT * 100)}%, ${withAlpha(color, 0.42)})` : withAlpha(color, 0.36);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px(t.x),
              top: px(t.y),
              width: px(t.w),
              height: px(t.h),
              borderRadius: u * 1.5,
              background: `color-mix(in srgb, ${accent} ${px(lift * (s.dark ? 7 : 5))}%, ${s.raised})`,
              boxShadow: [
                `inset 0 0 0 1px ${s.line}`,
                `0 0 0 ${px(Math.max(1, u * 0.22))}px ${withAlpha(accent, (isTarget ? 0.85 * focusT : 0) + 0.28 * lift * (1 - focusT))}`,
                `0 ${px(u * (0.4 + 1.2 * lift))}px ${px(u * (1 + 3 * lift))}px ${withAlpha(s.deep, (s.dark ? 0.35 : 0.08) * lift)}`,
              ].join(", "),
              opacity: enter * (1 - dim),
              transform: `translateY(${px((1 - enter) * u * 2 - lift * u * 0.45)}px) scale(${px(1 + lift * 0.012)})`,
            }}
          >
            <div style={{ position: "absolute", left: tp, top: tp, width: colW, display: "flex", alignItems: "center", justifyContent: "space-between", gap: u }}>
              <span data-21st-slot="metrics" style={{ ...text, fontSize: labelFs, fontWeight: 500, color: s.muted }}>
                {metrics[i]}
              </span>
              {showDeltas && delta && !wide ? (
                <span data-21st-slot="deltas" style={{ ...text, fontSize: deltaFs, fontWeight: 600, padding: `${px(deltaFs * 0.12)}px ${px(deltaFs * 0.45)}px`, borderRadius: deltaFs, color: rising ? riseInk : s.muted, background: rising ? withAlpha(secondary, 0.14) : withAlpha(color, 0.07) }}>
                  {delta}
                </span>
              ) : null}
            </div>
            <div style={{ position: "absolute", left: tp, top: tp + labelFs * 1.3 + tp * 0.3, width: colW }}>
              <span data-21st-slot="values" style={{ ...text, display: "block", fontSize: valueFs, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, color: s.ink, fontVariantNumeric: "tabular-nums" }}>
                {countUp(values[i] ?? "", expoOut(prog(f, 4 + i * 0.8, 34)))}
              </span>
              {showDeltas && delta && wide ? (
                <span data-21st-slot="deltas" style={{ ...text, display: "inline-block", marginTop: tp * 0.35, fontSize: deltaFs, fontWeight: 600, padding: `${px(deltaFs * 0.12)}px ${px(deltaFs * 0.45)}px`, borderRadius: deltaFs, color: rising ? riseInk : s.muted, background: rising ? withAlpha(secondary, 0.14) : withAlpha(color, 0.07) }}>
                  {delta}
                </span>
              ) : null}
            </div>
            <div style={{ position: "absolute", left: px(sparkBox.x), top: px(sparkBox.y), width: px(sparkBox.w), height: px(sparkBox.h) }}>
              <Spark
                w={sparkBox.w}
                h={sparkBox.h}
                values={series(i, rising)}
                stroke={lineInk}
                width={Math.max(2, u * (portrait ? 0.45 : 0.3))}
                area={accent}
                areaOpacity={isTarget ? 0.2 * focusT : 0}
                dot={isTarget ? focusT : 0}
                dotColor={accent}
                ring={s.card}
              />
            </div>
            {isTarget ? (
              <div
                style={{
                  position: "absolute",
                  left: px(pill.x - t.x),
                  top: px(pill.y - t.y),
                  width: px(pillW),
                  height: px(pillH),
                  borderRadius: pillH / 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: pillFs * 0.35,
                  background: `color-mix(in srgb, ${accent} ${px(fillT * 100)}%, color-mix(in srgb, ${accent} ${px(overPill * 10)}%, ${s.card}))`,
                  boxShadow: `inset 0 0 0 1px ${withAlpha(color, 0.16 * (1 - fillT))}, 0 ${px(u * 0.5)}px ${px(u * 1.6)}px ${withAlpha(s.deep, s.dark ? 0.45 : 0.14)}`,
                  opacity: reveal,
                  transform: `translateY(${px((1 - reveal) * u * 1.2)}px) scale(${px((0.9 + 0.1 * reveal) * (1 - 0.07 * down))})`,
                }}
              >
                <span data-21st-slot="detailsLabel" style={{ ...text, fontSize: pillFs, fontWeight: 600, color: fillT > 0.5 ? inkOn(accent) : s.ink }}>
                  {detailsLabel}
                </span>
                {withGlyph ? (
                  <div style={{ transform: `translateX(${px(expoOut(prog(f, CLICK + 2, CLICK + 14)) * pillFs * 0.18)}px)` }}>
                    <Glyph name="arrow-right" size={glyphSize} color={fillT > 0.5 ? inkOn(accent) : s.ink} strokeWidth={2.4} />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
      {f >= 4 ? (
        <>
          <div
            style={{
              position: "absolute",
              left: px(body.x - D / 2),
              top: px(body.y - D / 2),
              width: px(D),
              height: px(D),
              borderRadius: "50%",
              background: glow(s.dark ? 0.66 : 0.38),
              mixBlendMode: blend,
              opacity: haloIn,
              transform: `scale(${px(haloScale)})`,
              pointerEvents: "none",
            }}
          />
          {swell > 0.001 ? (
            <div
              style={{
                position: "absolute",
                left: px(body.x - D * 0.3),
                top: px(body.y - D * 0.3),
                width: px(D * 0.6),
                height: px(D * 0.6),
                borderRadius: "50%",
                background: glow(s.dark ? 0.75 : 0.3),
                mixBlendMode: blend,
                opacity: px(swell),
                transform: `scale(${px(1 + swell * 0.5)})`,
                pointerEvents: "none",
              }}
            />
          ) : null}
          <div
            style={{
              position: "absolute",
              left: px(tip.x - size * ARROW_TAIL_TIP.x),
              top: px(tip.y - size * ARROW_TAIL_TIP.y),
              width: px(size),
              height: px(size),
              transform: `scale(${px(1 - 0.14 * down)})`,
              transformOrigin: `${ARROW_TAIL_TIP.x * 100}% ${ARROW_TAIL_TIP.y * 100}%`,
              filter: `drop-shadow(0 ${px(size * 0.05)}px ${px(size * 0.08)}px ${withAlpha(s.deep, s.dark ? 0.55 : 0.3)})`,
              pointerEvents: "none",
            }}
          >
            <svg width={px(size)} height={px(size)} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible" }}>
              <path d={ARROW_TAIL_PATH} fill={light} stroke={accent} strokeWidth={1.6} strokeLinejoin="round" />
            </svg>
          </div>
        </>
      ) : null}
    </AbsoluteFill>
  );
};
