// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Glyph, Ground, arc, clamp01, decel, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-spotlight.meta";
import type { schema } from "./cursor-spotlight.schema";

const SETTLE = 128;
const SWEEP = meta.timing.markers.sweep ?? 22;
const REVEAL = meta.timing.markers.reveal ?? 98;
/** The torch comes to rest here, then the light opens until OPEN. */
const REST = 102;
const OPEN = 124;

const sine = (t: number) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01(t));

/** Smooth path through the points (Catmull-Rom), timed by chord length so the torch keeps an even pace. */
function spline(pts: Pt[], t: number): Pt {
  if (pts.length < 2) return pts[0] ?? { x: 0, y: 0 };
  const lens = pts.slice(1).map((p, i) => Math.hypot(p.x - pts[i]!.x, p.y - pts[i]!.y));
  const total = lens.reduce((a, b) => a + b, 0) || 1;
  let d = clamp01(t) * total;
  let i = 0;
  while (i < lens.length - 1 && d > lens[i]!) {
    d -= lens[i]!;
    i++;
  }
  const k = lens[i] ? clamp01(d / lens[i]!) : 0;
  const p0 = pts[Math.max(0, i - 1)]!;
  const p1 = pts[i]!;
  const p2 = pts[i + 1]!;
  const p3 = pts[Math.min(pts.length - 1, i + 2)]!;
  const cr = (a: number, b: number, c: number, e: number) => 0.5 * (2 * b + (c - a) * k + (2 * a - 5 * b + 4 * c - e) * k * k + (3 * b - a - 3 * c + e) * k * k * k);
  return { x: cr(p0.x, p1.x, p2.x, p3.x), y: cr(p0.y, p1.y, p2.y, p3.y) };
}

/** Card artwork: a soft field of the two brand colors with a sketch of the section on it. */
const Art: React.FC<{ i: number; w: number; h: number; accent: string; secondary: string }> = ({ i, w, h, accent, secondary }) => {
  const v = i % 3;
  const ink = inkOn(v === 1 ? secondary : accent);
  // Mixed in oklch so any two brand colors blend through clean hues, never through gray.
  const mesh =
    v === 0
      ? `linear-gradient(in oklch 135deg, ${accent} 8%, ${secondary} 115%)`
      : v === 1
        ? `radial-gradient(in oklch circle at 16% 92%, ${accent}, ${secondary} 78%)`
        : `linear-gradient(in oklch 210deg, ${secondary} -20%, ${accent} 70%)`;
  const m = Math.min(w, h);
  const r = m * 0.035;
  const box = (x: number, y: number, bw: number, bh: number, a: number, round = r): React.CSSProperties => ({
    position: "absolute",
    left: px(x * w),
    top: px(y * h),
    width: px(bw * w),
    height: px(bh * h),
    borderRadius: round,
    background: withAlpha(ink, a),
  });
  return (
    <div style={{ position: "absolute", inset: 0, background: mesh }}>
      {v === 0 ? (
        <>
          <div style={box(0.12, 0.32, 0.56, 0.085, 0.86)} />
          <div style={box(0.12, 0.46, 0.38, 0.055, 0.5)} />
          <div style={box(0.12, 0.6, 0.24, 0.12, 0.92, m)} />
        </>
      ) : v === 1 ? (
        <>
          {[0, 1, 2].map((k) => (
            <div key={k} style={box(0.12 + k * 0.27, k === 1 ? 0.16 : 0.26, 0.22, k === 1 ? 0.68 : 0.52, k === 1 ? 0.36 : 0.2, m * 0.05)}>
              <div style={{ position: "absolute", left: "18%", top: px(h * 0.06), width: "50%", height: px(Math.max(2, h * 0.05)), borderRadius: r, background: withAlpha(ink, 0.8) }} />
              <div style={{ position: "absolute", left: "18%", top: px(h * 0.15), width: "64%", height: px(Math.max(2, h * 0.09)), borderRadius: r, background: withAlpha(ink, k === 1 ? 0.95 : 0.6) }} />
            </div>
          ))}
        </>
      ) : (
        <>
          <div style={box(0.12, 0.17, 0.76, 0.44, 0.22, m * 0.06)}>
            <div style={{ position: "absolute", left: "9%", top: "24%", width: "74%", height: "13%", borderRadius: r, background: withAlpha(ink, 0.8) }} />
            <div style={{ position: "absolute", left: "9%", top: "50%", width: "52%", height: "13%", borderRadius: r, background: withAlpha(ink, 0.5) }} />
          </div>
          <div style={{ position: "absolute", left: px(w * 0.12), top: px(h * 0.69), width: px(h * 0.15), height: px(h * 0.15), borderRadius: "50%", background: withAlpha(ink, 0.88) }} />
          <div style={box(0.12 + (h * 0.15) / w + 0.04, 0.74, 0.3, 0.055, 0.7)} />
        </>
      )}
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, cards, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const titles = cards.slice(0, 3);
  const n = titles.length;
  const column = portrait;

  // Page: the headline over a row of cards (a column of wide cards in 9:16).
  const CW = aspect === "16:9" ? W * 0.72 : W * 0.86;
  const headBoxW = aspect === "16:9" ? CW * 0.9 : portrait ? W * 0.9 : CW;
  const hChars = Math.max(1, Array.from(headline).length);
  const headFs = Math.max(floor, fitFontSize({ chars: hChars, boxW: headBoxW, boxH: H * 0.3, lines: 2, charEm: 0.54, lineHeight: 1.06, max: u * (aspect === "16:9" ? 9.6 : aspect === "1:1" ? 8.6 : 9) }));
  const headLines = hChars * 0.54 * headFs > headBoxW * 0.98 ? 2 : 1;
  const headH = headLines * headFs * 1.06;
  const longestTitle = Math.max(4, ...titles.map((t) => Array.from(t).length));

  const gap = column ? H * 0.022 : u * (aspect === "16:9" ? 3.6 : 2.8);
  const cardW = column ? CW : (CW - gap * 2) / 3;
  const cardH = column ? H * 0.158 : H * (aspect === "16:9" ? 0.36 : 0.37);
  const pad = u * (column ? 3.6 : aspect === "16:9" ? 2.6 : 2);
  const thumbW = column ? cardH * 1.08 : cardW;
  const arrowRoom = column ? 0 : u * 4;
  const titleFs = Math.max(
    floor,
    fitFontSize({ chars: longestTitle, boxW: column ? cardW - thumbW - pad * 2 : cardW - pad * 2 - arrowRoom, boxH: column ? cardH * 0.4 : H * 0.1, charEm: 0.58, max: u * (column ? 6.4 : aspect === "16:9" ? 3.3 : 2.9) }),
  );
  const titleRowH = column ? 0 : titleFs * 1.25 + pad * 1.7;
  const thumbH = column ? cardH : cardH - titleRowH;
  const rad = u * (column ? 3 : 2.4);
  const cardsH = n ? (column ? n * cardH + (n - 1) * gap : cardH) : 0;
  const sectionGap = n ? (column ? H * 0.05 : H * (aspect === "16:9" ? 0.1 : 0.08)) : 0;
  const top0 = (H - (headH + sectionGap + cardsH)) / 2;
  const headTop = top0;
  const cardsTop = top0 + headH + sectionGap;
  const rowW = n * cardW + (n - 1) * gap;
  const rects = titles.map((_, i) =>
    column
      ? { x: (W - cardW) / 2, y: cardsTop + i * (cardH + gap), w: cardW, h: cardH }
      : { x: (W - rowW) / 2 + i * (cardW + gap), y: cardsTop, w: cardW, h: cardH },
  );
  const mid = Math.floor(n / 2);

  // The torch reads the headline line by line, sweeps the cards, then rests on the middle card.
  const lineHalf = Math.min(headBoxW, (hChars / headLines) * 0.54 * headFs) / 2;
  const lineY = (k: number) => headTop + headFs * 1.06 * (k + 0.55);
  const hx0 = W / 2 - lineHalf * 0.78;
  const hx1 = W / 2 + lineHalf * 0.78;
  const pts: Pt[] = [
    { x: hx0, y: lineY(0) },
    { x: hx1, y: lineY(0) },
  ];
  if (headLines > 1) pts.push({ x: hx1 - lineHalf * 0.08, y: lineY(1) }, { x: hx0 + lineHalf * 0.08, y: lineY(1) });
  rects.forEach((r, i) => {
    if (column) {
      const a = { x: r.x + thumbW * 0.5, y: r.y + r.h * 0.5 };
      const b = { x: r.x + r.w * 0.78, y: r.y + r.h * 0.5 };
      pts.push(...(i % 2 ? [b, a] : [a, b]));
    } else {
      pts.push({ x: r.x + r.w * 0.5, y: r.y + thumbH * (i % 2 ? 0.38 : 0.6) });
    }
  });
  const restAt: Pt = n
    ? column
      ? { x: rects[mid]!.x + thumbW * 0.62, y: rects[mid]!.y + cardH * 0.58 }
      : { x: rects[mid]!.x + cardW * 0.6, y: rects[mid]!.y + thumbH * 0.58 }
    : { x: W / 2 + lineHalf * 0.3, y: lineY(headLines - 0.4) };
  pts.push(restAt);
  const enter: Pt = { x: W * 0.94, y: H * 1.08 };
  const cur = f < SWEEP ? arc(enter, pts[0]!, decel(prog(f, 4, SWEEP)), 0.1) : spline(pts, sine(prog(f, SWEEP, REST)));
  const x = px(cur.x);
  const y = px(cur.y);

  // The light: a soft circle at the cursor that opens over the whole page.
  const open = easeInOut(prog(f, REVEAL, OPEN));
  const r0 = u * (portrait ? 30 : 26);
  const far = Math.max(...[[0, 0], [W, 0], [0, H], [W, H]].map(([cx, cy]) => Math.hypot(cx! - restAt.x, cy! - restAt.y)));
  const radius = r0 + (far / 0.55 + u * 4 - r0) * open * open;
  const mask = `radial-gradient(circle ${px(radius)}px at ${x}px ${y}px, ${color} 55%, transparent 100%)`;
  const lit = open >= 1;
  const haloR = r0 * 1.5 * (1 + 0.6 * open);
  const haloO = prog(f, 4, 16) * (1 - open);

  // Hover: the card under the torch lifts and picks up the accent.
  const hover = rects.map((r) => {
    const dx = Math.max(r.x - cur.x, 0, cur.x - (r.x + r.w));
    const dy = Math.max(r.y - cur.y, 0, cur.y - (r.y + r.h));
    return easeInOut(clamp01(1 - Math.hypot(dx, dy) / (u * 4)));
  });

  const page = (on: boolean) => (
    <>
      {/* Centered in the room reserved for it, so a narrower or wider brand font stays balanced. */}
      <div style={{ position: "absolute", left: (W - headBoxW) / 2, top: headTop, width: headBoxW, height: headH, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          data-21st-slot="headline"
          style={{
            width: "100%",
            fontFamily: font,
            fontWeight: 700,
            fontSize: headFs,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            textAlign: "center",
            color: s.ink,
            textWrap: "balance",
          } as React.CSSProperties}
        >
          {headline}
        </div>
      </div>
      {rects.map((r, i) => {
        const h = hover[i]!;
        const lift = px(h * u * 0.9);
        return (
          <React.Fragment key={i}>
            {on && h > 0 ? (
              <div style={{ position: "absolute", left: r.x - u * 1.5, top: r.y - lift - u * 1.5, width: r.w + u * 3, height: r.h + u * 3, borderRadius: rad + u * 1.5, background: withAlpha(accent, 0.34 * h), filter: `blur(${px(u * 3.2)}px)` }} />
            ) : null}
            <div
              style={{
                position: "absolute",
                left: r.x,
                top: r.y - lift,
                width: r.w,
                height: r.h,
                borderRadius: rad,
                overflow: "hidden",
                background: s.card,
                boxShadow: `${s.shadow(u)}${h > 0 ? `, 0 0 0 ${px(Math.max(1.5, u * 0.22))}px ${withAlpha(accent, 0.7 * h)}` : ""}`,
              }}
            >
              <div style={{ position: "absolute", left: 0, top: 0, width: thumbW, height: thumbH, overflow: "hidden" }}>
                <Art i={i} w={thumbW} h={thumbH} accent={accent} secondary={secondary} />
              </div>
              {column ? (
                <div style={{ position: "absolute", left: thumbW + pad, right: pad, top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: titleFs * 0.32 }}>
                  <span data-21st-slot="cards" style={{ fontFamily: font, fontWeight: 600, fontSize: titleFs, lineHeight: 1.15, letterSpacing: "-0.02em", color: s.ink, whiteSpace: "nowrap" }}>
                    {titles[i]}
                  </span>
                  <div style={{ width: "78%", height: px(Math.max(4, titleFs * 0.2)), borderRadius: titleFs, background: withAlpha(color, s.dark ? 0.14 : 0.1) }} />
                  <div style={{ width: "52%", height: px(Math.max(4, titleFs * 0.2)), borderRadius: titleFs, background: withAlpha(color, s.dark ? 0.1 : 0.07) }} />
                </div>
              ) : (
                <div style={{ position: "absolute", left: pad, right: pad, top: thumbH, height: titleRowH, display: "flex", alignItems: "center", justifyContent: "space-between", gap: pad * 0.5 }}>
                  <span data-21st-slot="cards" style={{ fontFamily: font, fontWeight: 600, fontSize: titleFs, lineHeight: 1.2, letterSpacing: "-0.02em", color: s.ink, whiteSpace: "nowrap" }}>
                    {titles[i]}
                  </span>
                  <div style={{ transform: `translateX(${px(h * titleFs * 0.2)}px)` }}>
                    <Glyph name="arrow-right" size={titleFs * 0.9} color={`color-mix(in srgb, ${accent} ${Math.round(h * 100)}%, ${s.faint})`} strokeWidth={2.2} />
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.3 + 0.7 * open} />
      {!lit ? <AbsoluteFill style={{ opacity: (s.dark ? 0.1 : 0.16) * prog(f, 0, 10) }}>{page(false)}</AbsoluteFill> : null}
      {haloO > 0 ? (
        <div
          style={{
            position: "absolute",
            left: x - haloR,
            top: y - haloR,
            width: haloR * 2,
            height: haloR * 2,
            borderRadius: "50%",
            opacity: haloO,
            background: `radial-gradient(circle, ${withAlpha(accent, s.dark ? 0.3 : 0.22)} 0%, ${withAlpha(accent, s.dark ? 0.12 : 0.08)} 36%, transparent 70%)`,
          }}
        />
      ) : null}
      <AbsoluteFill style={lit ? undefined : { maskImage: mask, WebkitMaskImage: mask }}>{page(true)}</AbsoluteFill>
      {f >= 4 ? <Cursor x={x} y={y} size={Math.max(u * (portrait ? 7.4 : 5), 24)} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
