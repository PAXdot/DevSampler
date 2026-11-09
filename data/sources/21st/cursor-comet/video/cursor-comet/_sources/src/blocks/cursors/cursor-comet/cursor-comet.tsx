// Built with Remotion - https://remotion.pro/license
import React, { useId } from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ARROW_TAIL_PATH, ARROW_TAIL_TIP, Glyph, Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-comet.meta";
import type { schema } from "./cursor-comet.schema";

const SETTLE = 102;
const TOUR = meta.timing.markers.tour ?? 20;
const LAND = meta.timing.markers.land ?? 62;
const CLICK = meta.timing.markers.click ?? 68;
/** Frames between two tour stops, and how long the comet hangs on each. */
const LEG = 13;
const DWELL = 4;
/** The trail is the path of the last HISTORY frames, sampled SAMPLES times. */
const HISTORY = 12;
const SAMPLES = 32;
const ICONS = ["sparkles", "pencil", "crosshair", "rocket"] as const;

type Rect = { x: number; y: number; w: number; h: number };

const len = (t: string) => Array.from(t).length;
/** Distance from a point to a rect, 0 inside it. */
const outside = (p: Pt, r: Rect) => Math.hypot(Math.max(r.x - p.x, 0, p.x - (r.x + r.w)), Math.max(r.y - p.y, 0, p.y - (r.y + r.h)));

/** A tapered ribbon through `pts` (head first) as a closed SVG path; `w` is the full width per point. */
function ribbon(pts: Pt[], w: number[]): string {
  const n = pts.length;
  const normals: (Pt | null)[] = pts.map((_, k) => {
    const a = pts[Math.max(0, k - 1)]!;
    const b = pts[Math.min(n - 1, k + 1)]!;
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const l = Math.hypot(dx, dy);
    return l > 0.01 ? { x: -dy / l, y: dx / l } : null;
  });
  // Points where the path stood still borrow the nearest real direction.
  let last: Pt = normals.find(Boolean) ?? { x: 0, y: 1 };
  const fixed = normals.map((v) => (v ? (last = v) : last));
  const side = (sign: number) => pts.map((p, k) => `${px(p.x + fixed[k]!.x * sign * w[k]! * 0.5)} ${px(p.y + fixed[k]!.y * sign * w[k]! * 0.5)}`);
  const l = side(1);
  const r = side(-1).reverse();
  return `M${l.join(" L")} L${r.join(" L")} Z`;
}

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, titles, captions, buttonLabel, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  /** The cursor's fill: the lighter of the brand's ink and surface. */
  const light = s.dark ? s.ink : s.card;
  const wide = aspect === "16:9";

  // ---- Copy and type. ----
  const n = Math.min(4, titles.length);
  const last = n - 1;
  const showCaptions = !portrait && captions.slice(0, n).some(Boolean);
  const maxTitle = Math.max(1, ...titles.slice(0, n).map(len));
  const maxCap = Math.max(1, ...captions.slice(0, n).map(len));
  const pad = u * (portrait ? 3.6 : 2.6);
  const hlFs = headline
    ? Math.max(floor, fitFontSize({ chars: len(headline) + 1, boxW: W * (portrait ? 0.84 : wide ? 0.72 : 0.84), boxH: u * 20, lines: portrait ? 2 : 1, charEm: 0.56, lineHeight: 1.15, max: portrait ? u * 7.4 : wide ? u * 4.6 : u * 5 }))
    : 0;
  const hlLines = portrait && hlFs * 0.56 * (len(headline) + 1) > W * 0.84 ? 2 : 1;
  const hlH = headline ? hlFs * 1.15 * hlLines : 0;
  const hlGap = headline ? H * (portrait ? 0.045 : wide ? 0.06 : 0.05) : 0;

  // ---- Cards: a staggered row (16:9), a staggered 2x2 (1:1) or zigzag rows (9:16). ----
  const gap = u * (portrait ? 2.2 : 2.4);
  const chipS = u * (portrait ? 12 : wide ? 6.2 : 5.8);
  const btnFs = Math.max(floor, portrait ? 0 : u * 2.1);
  const btnH = btnFs * (portrait ? 1.9 : 2.3);
  let cards: Rect[];
  if (portrait) {
    const cw = W * 0.8;
    const rowH = pad * 2 + chipS;
    const lastH = rowH + btnH + pad * 0.7;
    const total = hlH + hlGap + rowH * last + lastH + gap * last;
    let y = (H - total) / 2 + hlH + hlGap;
    cards = Array.from({ length: n }, (_, i) => {
      const r = { x: W * 0.06 + (i % 2 ? W * 0.08 : 0), y, w: cw, h: i === last ? lastH : rowH };
      y += r.h + gap;
      return r;
    });
  } else if (wide) {
    const cw = (W * 0.88 - gap * (n - 1)) / n;
    const ch = H * 0.37;
    const stagger = H * 0.1;
    const top = (H - (hlH + hlGap + ch + stagger)) / 2 + hlH + hlGap;
    const left = (W - (cw * n + gap * (n - 1))) / 2;
    cards = Array.from({ length: n }, (_, i) => ({ x: left + i * (cw + gap), y: top + (i % 2 ? stagger : 0), w: cw, h: ch }));
  } else {
    const cw = (W * 0.86 - gap) / 2;
    const ch = H * 0.32;
    const stagger = H * 0.05;
    const rows = Math.ceil(n / 2);
    const top = (H - (hlH + hlGap + rows * ch + (rows - 1) * gap + stagger)) / 2 + hlH + hlGap;
    const left = (W - (cw * 2 + gap)) / 2;
    cards = Array.from({ length: n }, (_, i) => ({ x: left + (i % 2) * (cw + gap), y: top + Math.floor(i / 2) * (ch + gap) + (i % 2 ? stagger : 0), w: cw, h: ch }));
  }
  const cw = cards[0]!.w;
  const inner = cw - pad * 2;
  const titleFs = portrait
    ? Math.max(floor, fitFontSize({ chars: maxTitle, boxW: inner - chipS - u * 2.6, boxH: chipS, charEm: 0.56, max: u * 6.6 }))
    : Math.max(floor, fitFontSize({ chars: maxTitle, boxW: inner, boxH: u * 6, charEm: 0.56, max: wide ? u * 3.2 : u * 3 }));
  const capFs = Math.max(floor, fitFontSize({ chars: maxCap, boxW: inner, boxH: u * 8, lines: 2, charEm: 0.52, lineHeight: 1.35, max: u * 2.2 }));

  // The button on the last card, and where the hot spot lands on it (its arrow).
  const lastCard = cards[last]!;
  const btn: Rect = { x: lastCard.x + pad, y: lastCard.y + lastCard.h - pad * (portrait ? 0.9 : 1) - btnH, w: inner, h: btnH };
  const glyphS = btnFs * 0.95;
  const contentW = len(buttonLabel) * 0.56 * btnFs + btnFs * 0.4 + glyphS;
  const hit = { x: btn.x + btn.w / 2 + contentW / 2 - glyphS * 0.45, y: btn.y + btn.h * 0.56 };
  const size = u * (portrait ? 12 : 9.2);
  const rest = { x: hit.x + size * 0.06, y: hit.y + size * 0.1 };

  // ---- The route: in from the left, a stop on every card, then down onto the button. ----
  const stops: Pt[] = cards.slice(0, last).map((c, i) =>
    portrait
      ? i % 2
        ? { x: c.x + pad + chipS * 0.62, y: c.y + pad + chipS * 0.62 }
        : { x: c.x + c.w * 0.82, y: c.y + c.h * 0.42 }
      : { x: c.x + c.w * 0.74, y: c.y + pad + chipS * 0.55 },
  );
  const arrive = cards.map((_, i) => (i === last ? LAND : TOUR + i * LEG));
  const start = { x: -size * 1.6, y: (stops[0]?.y ?? H / 2) + H * (portrait ? 0.08 : 0.16) };
  const keys: Key[] = [{ f: 7, ...start }];
  stops.forEach((p, i) => keys.push({ f: arrive[i]!, ...p }, { f: arrive[i]! + DWELL, ...p }));
  keys.push({ f: LAND, ...hit }, { f: CLICK + 6, ...hit }, { f: CLICK + 18, ...rest });
  const tipAt = (fr: number) => pathAt(fr, keys, 0.2);
  const tip = tipAt(f);
  const down = press(f, CLICK);

  // ---- The comet: a ribbon through the arrow body's recent positions, head first. ----
  const bodyOff = { x: size * 0.15, y: size * 0.24 };
  const trail = Array.from({ length: SAMPLES + 1 }, (_, k) => {
    const p = tipAt(f - (k / SAMPLES) * HISTORY);
    return { x: p.x + bodyOff.x, y: p.y + bodyOff.y };
  });
  const trailLen = trail.reduce((acc, p, k) => (k ? acc + Math.hypot(p.x - trail[k - 1]!.x, p.y - trail[k - 1]!.y) : 0), 0);
  const trailVis = clamp01(trailLen / (size * 0.7));
  const headW = size * 0.26;
  const widths = trail.map((_, k) => headW * Math.pow(1 - k / SAMPLES, 0.9));
  const head = trail[0]!;
  const tail = trail[SAMPLES]!;
  const showTrail = trailLen > 1.5 && trailVis > 0.01;

  // ---- Click: press dip, spark burst, the button fills and the card locks in. ----
  const fillT = expoOut(prog(f, CLICK, CLICK + 8));
  const doneT = easeInOut(prog(f, CLICK + 2, CLICK + 18));
  const sparkT = prog(f, CLICK, CLICK + 16);
  const btnHover = easeInOut(clamp01(1 - outside(tip, btn) / (u * 3)));

  const text: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.2 };
  const midMix = `color-mix(in oklch, ${secondary} 40%, ${accent})`;

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.52} portrait={portrait} glow={0.6} />
      {headline ? (
        <div
          style={{
            position: "absolute",
            left: W * 0.08,
            right: W * 0.08,
            top: px(cards[0]!.y - hlGap - hlH - (portrait ? 0 : 0)),
            height: px(hlH),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: prog(f, 0, 10),
            transform: `translateY(${px((1 - expoOut(prog(f, 0, 14))) * u * 2)}px)`,
          }}
        >
          <span data-21st-slot="headline" style={{ ...text, whiteSpace: portrait ? "normal" : "nowrap", textAlign: "center", lineHeight: 1.15, fontSize: hlFs, fontWeight: 600, letterSpacing: "-0.025em", color: s.ink, textWrap: "balance" } as React.CSSProperties}>
            {headline}
          </span>
        </div>
      ) : null}
      {cards.map((c, i) => {
        const isLast = i === last;
        const enter = expoOut(prog(f, 1 + i * 2.5, 14 + i * 2.5));
        const a = arrive[i]!;
        const lit = expoOut(prog(f, a - 3, a + 5));
        const flash = prog(f, a - 4, a) * (1 - prog(f, a + 3, a + 16));
        const over = easeInOut(clamp01(1 - outside(tip, c) / (u * 3)));
        const lift = Math.max(over, isLast ? doneT : 0);
        const ring = isLast ? Math.max(0.5 * flash, doneT) : 0.5 * flash;
        const ringColor = isLast && doneT > 0 ? `color-mix(in srgb, ${accent} ${px(doneT * 100)}%, ${secondary})` : secondary;
        const chip = (
          <div style={{ position: "relative", width: px(chipS), height: px(chipS), borderRadius: chipS * 0.28, flexShrink: 0, background: withAlpha(color, 0.07), boxShadow: `inset 0 0 0 1px ${s.line}`, display: "grid", placeItems: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: chipS * 0.28, background: `linear-gradient(135deg, ${accent}, ${secondary})`, opacity: px(lit), boxShadow: `0 ${px(u * 0.5)}px ${px(u * 2)}px ${withAlpha(secondary, 0.35 * lit)}` }} />
            <div style={{ position: "relative", transform: `scale(${px(1 + 0.12 * flash)})` }}>
              <Glyph name={ICONS[i % 4]!} size={chipS * 0.48} color={lit > 0.5 ? inkOn(accent) : s.muted} strokeWidth={2} />
            </div>
          </div>
        );
        const button = isLast ? (
          <div
            style={{
              position: "absolute",
              left: px(btn.x - c.x),
              top: px(btn.y - c.y),
              width: px(btn.w),
              height: px(btn.h),
              borderRadius: btn.h / 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: btnFs * 0.4,
              background: `color-mix(in srgb, ${accent} ${px(fillT * 100)}%, ${color})`,
              boxShadow: `0 ${px(u * 0.6)}px ${px(u * 2)}px ${withAlpha(fillT > 0.5 ? accent : s.deep, s.dark ? 0.4 : 0.22)}`,
              transform: `scale(${px((1 + 0.025 * btnHover) * (1 - 0.06 * down))})`,
            }}
          >
            <span data-21st-slot="buttonLabel" style={{ ...text, fontSize: btnFs, fontWeight: 600, letterSpacing: "-0.01em", color: fillT > 0.5 ? inkOn(accent) : inkOn(color) }}>
              {buttonLabel}
            </span>
            <div style={{ transform: `translateX(${px(expoOut(prog(f, CLICK + 2, CLICK + 14)) * btnFs * 0.2)}px)` }}>
              <Glyph name="arrow-right" size={glyphS} color={fillT > 0.5 ? inkOn(accent) : inkOn(color)} strokeWidth={2.4} />
            </div>
          </div>
        ) : null;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px(c.x),
              top: px(c.y),
              width: px(c.w),
              height: px(c.h),
              borderRadius: u * (portrait ? 2.6 : 2),
              background: s.card,
              boxShadow: `${s.shadow(u)}, 0 0 0 ${px(Math.max(1.5, u * 0.24))}px ${withAlpha(ringColor, 0.85 * ring)}, 0 ${px(u)}px ${px(u * 5)}px ${withAlpha(isLast && doneT > 0 ? accent : secondary, 0.3 * ring)}`,
              opacity: enter,
              transform: `translateY(${px((1 - enter) * u * 3 - lift * u * 0.6)}px)`,
            }}
          >
            {portrait ? (
              <div style={{ position: "absolute", left: pad, top: pad, right: pad, height: chipS, display: "flex", alignItems: "center", gap: u * 2.6 }}>
                {chip}
                <span data-21st-slot="titles" style={{ ...text, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.02em", color: s.ink }}>
                  {titles[i]}
                </span>
              </div>
            ) : (
              <>
                <div style={{ position: "absolute", left: pad, top: pad }}>{chip}</div>
                <div style={{ position: "absolute", left: pad, right: pad, top: pad + chipS + u * 2 }}>
                  <span data-21st-slot="titles" style={{ ...text, display: "block", fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.02em", color: s.ink }}>
                    {titles[i]}
                  </span>
                  {showCaptions && captions[i] ? (
                    <span data-21st-slot="captions" style={{ ...text, display: "block", whiteSpace: "normal", textWrap: "balance", marginTop: u * 0.8, fontSize: capFs, lineHeight: 1.35, fontWeight: 400, color: s.muted } as React.CSSProperties}>
                      {captions[i]}
                    </span>
                  ) : null}
                </div>
                {!isLast ? (
                  <div style={{ position: "absolute", left: pad, right: pad, bottom: pad, height: px(Math.max(3, u * 0.6)), display: "flex", gap: u * 0.8 }}>
                    {Array.from({ length: n }, (_, k) => (
                      <div key={k} style={{ flex: 1, borderRadius: u, background: k <= i ? `color-mix(in srgb, ${accent} ${px(lit * 100)}%, ${withAlpha(color, 0.12)})` : withAlpha(color, 0.12) }} />
                    ))}
                  </div>
                ) : null}
              </>
            )}
            {button}
          </div>
        );
      })}
      {showTrail ? (
        <>
          <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, filter: `blur(${px(size * 0.14)}px)`, opacity: px(0.55 * trailVis), pointerEvents: "none" }}>
            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
              <defs>
                <linearGradient id={`${uid}g`} gradientUnits="userSpaceOnUse" x1={px(head.x)} y1={px(head.y)} x2={px(tail.x)} y2={px(tail.y)}>
                  <stop offset="0" style={{ stopColor: secondary, stopOpacity: 0.9 }} />
                  <stop offset="1" style={{ stopColor: accent, stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path d={ribbon(trail, widths.map((w) => w * 2.4))} fill={`url(#${uid}g)`} />
            </svg>
          </div>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", opacity: px(trailVis), pointerEvents: "none" }}>
            <defs>
              <linearGradient id={`${uid}t`} gradientUnits="userSpaceOnUse" x1={px(head.x)} y1={px(head.y)} x2={px(tail.x)} y2={px(tail.y)}>
                <stop offset="0" style={{ stopColor: secondary, stopOpacity: 0.95 }} />
                <stop offset="0.45" style={{ stopColor: midMix, stopOpacity: 0.62 }} />
                <stop offset="1" style={{ stopColor: accent, stopOpacity: 0 }} />
              </linearGradient>
              <linearGradient id={`${uid}c`} gradientUnits="userSpaceOnUse" x1={px(head.x)} y1={px(head.y)} x2={px(tail.x)} y2={px(tail.y)}>
                <stop offset="0" style={{ stopColor: light, stopOpacity: 0.95 }} />
                <stop offset="0.55" style={{ stopColor: light, stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path d={ribbon(trail, widths)} fill={`url(#${uid}t)`} />
            <circle cx={px(head.x)} cy={px(head.y)} r={px(headW / 2)} fill={secondary} opacity={0.95} />
            <path d={ribbon(trail, widths.map((w) => w * 0.36))} fill={`url(#${uid}c)`} />
          </svg>
        </>
      ) : null}
      {sparkT > 0 && sparkT < 1 ? (
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
          {Array.from({ length: 8 }, (_, j) => {
            const ang = (j / 8) * Math.PI * 2 + 0.35;
            const r1 = size * (0.32 + 0.85 * expoOut(sparkT));
            const r0 = r1 - size * 0.32 * (1 - sparkT);
            return (
              <line
                key={j}
                x1={px(hit.x + Math.cos(ang) * r0)}
                y1={px(hit.y + Math.sin(ang) * r0)}
                x2={px(hit.x + Math.cos(ang) * r1)}
                y2={px(hit.y + Math.sin(ang) * r1)}
                stroke={j % 2 ? secondary : accent}
                strokeWidth={px(size * 0.07 * (1 - sparkT))}
                strokeLinecap="round"
                opacity={px(1 - sparkT)}
              />
            );
          })}
        </svg>
      ) : null}
      {f >= 7 ? (
        <div
          style={{
            position: "absolute",
            left: px(tip.x + bodyOff.x - size * 0.9),
            top: px(tip.y + bodyOff.y - size * 0.9),
            width: px(size * 1.8),
            height: px(size * 1.8),
            borderRadius: "50%",
            background: `radial-gradient(circle, ${withAlpha(secondary, s.dark ? 0.34 : 0.24)}, ${withAlpha(secondary, 0)} 62%)`,
            transform: `scale(${px(1 + 0.35 * expoOut(prog(f, CLICK, CLICK + 4)) * (1 - prog(f, CLICK + 4, CLICK + 18)))})`,
            pointerEvents: "none",
          }}
        />
      ) : null}
      {f >= 7 ? (
        <div
          style={{
            position: "absolute",
            left: px(tip.x - size * ARROW_TAIL_TIP.x),
            top: px(tip.y - size * ARROW_TAIL_TIP.y),
            width: px(size),
            height: px(size),
            transform: `scale(${px(1 - 0.14 * down)})`,
            transformOrigin: `${ARROW_TAIL_TIP.x * 100}% ${ARROW_TAIL_TIP.y * 100}%`,
            filter: `drop-shadow(0 ${px(size * 0.04)}px ${px(size * 0.12)}px ${withAlpha(secondary, 0.6)})`,
            pointerEvents: "none",
          }}
        >
          <svg width={px(size)} height={px(size)} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible" }}>
            <path d={ARROW_TAIL_PATH} fill={light} stroke={secondary} strokeWidth={1.4} strokeLinejoin="round" />
          </svg>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
