// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Easing, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ARROW_TAIL_PATH, ARROW_TAIL_POINTS, ARROW_TAIL_TIP, ClickRing, Ground, arc, clamp01, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-glass.meta";
import type { schema } from "./cursor-glass.schema";

const SETTLE = 84;
const PLAY = meta.timing.markers.play ?? 54;
const ARRIVE = 48;

type Node = [string, Record<string, string>];
/** Exact icon nodes from lucide-react 0.460 (ISC). */
const ICONS = {
  play: [["polygon", { points: "6 3 20 12 6 21 6 3" }]],
  pause: [
    ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }],
    ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }],
  ],
  "skip-back": [["polygon", { points: "19 20 9 12 19 4 19 20" }], ["line", { x1: "5", x2: "5", y1: "19", y2: "5" }]],
  "skip-forward": [["polygon", { points: "5 4 15 12 5 20 5 4" }], ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]],
} satisfies Record<string, Node[]>;

/** A lucide media icon, filled like a player's transport controls. */
const MediaIcon: React.FC<{ name: keyof typeof ICONS; size: number; color: string }> = ({ name, size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0, overflow: "visible" }}>
    {(ICONS[name] as Node[]).map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
  </svg>
);

const chars = (text: string) => Array.from(text).length;

/** "3:41" -> 221 seconds, NaN when it is not m:ss. */
const seconds = (t: string) => {
  const m = /^(\d{1,3}):([0-5]\d)$/.exec(t.trim());
  return m ? Number(m[1]) * 60 + Number(m[2]) : NaN;
};

/** The shared tailed arrow in px, scaled by k and moved by (dx, dy), for clip paths. */
const arrowPath = (k: number, dx = 0, dy = 0) => `M${ARROW_TAIL_POINTS.map(([x, y]) => `${px(x * k + dx)} ${px(y * k + dy)}`).join(" L")} Z`;

const bezier = (a: Pt, b: Pt, c: Pt, d: Pt, t: number): Pt => {
  const m = 1 - t;
  return {
    x: m * m * m * a.x + 3 * m * m * t * b.x + 3 * m * t * t * c.x + t * t * t * d.x,
    y: m * m * m * a.y + 3 * m * m * t * b.y + 3 * m * t * t * c.y + t * t * t * d.y,
  };
};

const glide = Easing.bezier(0.42, 0, 0.2, 1);

/**
 * The frosted arrow: the frame behind it blurred and brightened inside the arrow
 * (backdrop filter clipped to the shared arrow path), a lit rim and a glint. The
 * lift shadow sits outside the glass so the frosting stays clean. Hot spot at (x, y).
 */
const GlassArrow: React.FC<{ x: number; y: number; size: number; down: number; flash: number; light: string; tint: string; rim: string; deep: string; dark: boolean }> = ({ x, y, size, down, flash, light, tint, rim, deep, dark }) => {
  const k = size / 24;
  const m = size * 0.4;
  const box = size + m * 2;
  const frost = `blur(${px(size * 0.05)}px) saturate(1.8) brightness(1.25)`;
  return (
    <div
      style={{
        position: "absolute",
        left: px(x - size * ARROW_TAIL_TIP.x),
        top: px(y - size * ARROW_TAIL_TIP.y),
        width: size,
        height: size,
        transform: `scale(${px(1 - 0.12 * down)})`,
        transformOrigin: `${ARROW_TAIL_TIP.x * 100}% ${ARROW_TAIL_TIP.y * 100}%`,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <div style={{ position: "absolute", left: -m, top: -m, width: box, height: box, clipPath: `path(evenodd, 'M0 0 H${px(box)} V${px(box)} H0 Z ${arrowPath(k, m, m)}')` }}>
        <svg width={box} height={box} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", filter: `blur(${px(size * 0.07)}px)` }}>
          <path d={arrowPath(k, m, m + size * 0.08)} fill={withAlpha(deep, dark ? 0.5 : 0.3)} />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `path('${arrowPath(k)}')`,
          backdropFilter: frost,
          WebkitBackdropFilter: frost,
          background: `linear-gradient(150deg, ${withAlpha(light, dark ? 0.5 : 0.7)}, ${withAlpha(tint, dark ? 0.1 : 0.35)} 55%, ${withAlpha(light, dark ? 0.3 : 0.5)})`,
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ position: "absolute", inset: 0, overflow: "visible", filter: flash > 0 ? `drop-shadow(0 0 ${px(size * 0.08 * flash)}px ${withAlpha(light, 0.9 * flash)})` : undefined }}
      >
        <path d={ARROW_TAIL_PATH} fill="none" stroke={rim} strokeWidth={dark ? 0.9 : 1.05} strokeLinejoin="round" />
        <path d="M6.6 6.2 L6.6 13" stroke={withAlpha(light, 0.85)} strokeWidth={0.9} strokeLinecap="round" />
      </svg>
    </div>
  );
};

/** A soft light blob that fades to nothing inside its own circle. */
const Blob: React.FC<{ x: number; y: number; d: number; tone: string; o: number }> = ({ x, y, d, tone, o }) => (
  <div
    style={{
      position: "absolute",
      left: px(x - d / 2),
      top: px(y - d / 2),
      width: d,
      height: d,
      borderRadius: "50%",
      background: `radial-gradient(circle closest-side, ${withAlpha(tone, 0.95 * o)}, ${withAlpha(tone, 0.5 * o)} 45%, ${withAlpha(tone, 0)} 100%)`,
    }}
  />
);

export const Component: React.FC<z.infer<typeof schema>> = ({ label, title, artist, elapsed, duration, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  // The brand's light tone: the text on dark brands, the surface on light ones.
  const light = s.dark ? color : s.card;
  const mode = portrait ? "stack" : aspect === "1:1" ? "compact" : "row";

  // Widget geometry, in widget units q (1% of its width).
  const Wc = mode === "row" ? W * 0.5 : mode === "compact" ? W * 0.82 : W * 0.86;
  const q = Wc / 100;
  const pad = q * (mode === "stack" ? 6 : mode === "compact" ? 5 : 4.6);
  const inner = Wc - pad * 2;
  const showLabel = mode !== "stack" && Boolean(label);
  const labelFs = Math.max(floor, q * (mode === "row" ? 2.2 : 2.4));
  const artistFs = Math.max(floor, q * (mode === "stack" ? 6.4 : mode === "row" ? 2.8 : 3.2));
  const timeFs = Math.max(floor, q * (mode === "stack" ? 5 : 2.2));
  const timeRowH = timeFs * 1.3;
  const pr = q * (mode === "stack" ? 9.5 : mode === "row" ? 5 : 6);
  const iconS = pr * 0.78;
  const ctrlGap = pr * (mode === "stack" ? 1.1 : 1);
  const barH = Math.max(3, q * (mode === "stack" ? 1.3 : 0.9));
  const labelH = showLabel ? labelFs * 1.3 + q * 1.2 : 0;

  // Layout per format: a wide player (16:9), a compact card (1:1), a tall now-playing card (9:16).
  const art = mode === "row" ? q * 32 : mode === "compact" ? q * 30 : inner * 0.84;
  const colX = mode === "stack" ? pad : pad + art + q * (mode === "row" ? 4.4 : 5);
  const colW = mode === "stack" ? inner : Wc - colX - pad;
  const eqH = mode === "stack" ? q * 5 : labelFs * 1.05;
  const eqBar = eqH * 0.18;
  const eqGap = eqH * 0.13;
  const eqW = eqBar * 4 + eqGap * 3;
  const titleFs = Math.max(floor, fitFontSize({ chars: chars(title) + 1, boxW: mode === "stack" ? colW - eqW - q * 4 : colW, boxH: q * 12, charEm: 0.58, max: q * (mode === "stack" ? 8.4 : mode === "row" ? 4.4 : 5) }));
  const textH = labelH + titleFs * 1.2 + artistFs * 1.3;

  let Hc: number, artX: number, artY: number, textY: number, barRowY: number, barX: number, barW: number, ctrlX: number, ctrlY: number;
  if (mode === "row") {
    const colH = textH + q * 3.2 + timeRowH + q * 2.4 + pr * 2;
    Hc = Math.max(art, colH) + pad * 2;
    artX = pad;
    artY = (Hc - art) / 2;
    textY = (Hc - colH) / 2;
    barRowY = textY + textH + q * 3.2;
    barX = colX;
    barW = colW;
    ctrlX = colX + colW / 2;
    ctrlY = barRowY + timeRowH + q * 2.4 + pr;
  } else if (mode === "compact") {
    const headH = Math.max(art, textH);
    artX = pad;
    artY = pad + (headH - art) / 2;
    textY = pad + (headH - textH) / 2;
    barRowY = pad + headH + q * 5.5;
    barX = pad;
    barW = inner;
    ctrlX = Wc / 2;
    ctrlY = barRowY + timeRowH + q * 4 + pr;
    Hc = ctrlY + pr + pad;
  } else {
    artX = (Wc - art) / 2;
    artY = pad;
    textY = pad + art + q * 6;
    barRowY = textY + textH + q * 5;
    barX = pad;
    barW = inner;
    ctrlX = Wc / 2;
    ctrlY = barRowY + barH + q * 2 + timeRowH + q * 4 + pr;
    Hc = ctrlY + pr + pad;
  }
  const L = (W - Wc) / 2;
  const T = (H - Hc) / 2;
  const total = seconds(duration);
  const played = seconds(elapsed);
  const frac = total > 0 && played >= 0 ? Math.max(0.04, Math.min(0.96, played / total)) : 0.38;

  // Motion.
  const enter = springSnap(f, fps, 2, { damping: 18, stiffness: 130, mass: 0.9 });
  const drift = 1 - easeOut(prog(f, 0, SETTLE));
  const blobsIn = prog(f, 0, 14);
  const playOn = expoOut(prog(f, PLAY, PLAY + 8));
  const swap = expoOut(prog(f, PLAY + 1, PLAY + 9));
  const glow = expoOut(prog(f, PLAY + 2, PLAY + 18));
  const artScale = 0.94 + 0.06 * springSnap(f, fps, PLAY + 2, { damping: 14, stiffness: 150, mass: 0.8 });
  const freeze = easeInOut(prog(f, SETTLE - 16, SETTLE));
  const pose = [0.55, 0.95, 0.4, 0.75];
  const eq = pose.map((p, i) => {
    const wave = 0.5 + 0.45 * Math.sin(f * 0.62 + i * 1.9) * Math.cos(f * 0.23 + i * 0.7);
    const live = 0.2 + (wave - 0.2) * playOn;
    return live + (p - live) * freeze;
  });

  // Cursor: sweeps in over the cover and the title, settles on Play, clicks, eases to the rim.
  const play = { x: L + ctrlX, y: T + ctrlY };
  const hit = { x: play.x + pr * 0.1, y: play.y + pr * 0.16 };
  const rest = { x: play.x + pr * 0.58, y: play.y + pr * 0.6 };
  const [p0, p1, p2] =
    mode === "row"
      ? [{ x: L + Wc * 0.06, y: H + u * 3 }, { x: L + Wc * 0.0, y: T + Hc * 0.12 }, { x: L + Wc * 0.52, y: T - Hc * 0.16 }]
      : mode === "compact"
        ? [{ x: L + Wc * 0.08, y: H + u * 3 }, { x: L - Wc * 0.02, y: T + Hc * 0.08 }, { x: L + Wc * 0.86, y: T + Hc * 0.02 }]
        : [{ x: L + Wc * 0.92, y: H + u * 3 }, { x: L + Wc * 1.02, y: T + Hc * 0.16 }, { x: L + Wc * 0.12, y: T + Hc * 0.22 }];
  let cur: Pt;
  if (f <= ARRIVE) {
    const t = prog(f, 2, ARRIVE);
    cur = bezier(p0, p1, p2, hit, glide(t) + 0.03 * Math.sin(Math.PI * clamp01((t - 0.7) / 0.3)));
  } else cur = arc(hit, rest, easeInOut(prog(f, PLAY + 6, PLAY + 24)), 0.12);
  const cs = u * (mode === "stack" ? 17 : 13);
  const down = press(f, PLAY);
  const flash = f >= PLAY ? 1 - prog(f, PLAY, PLAY + 16) : 0;
  const hov = easeInOut(clamp01(1 - (Math.hypot(cur.x - play.x, cur.y - play.y) - pr) / (pr * 1.4)));
  const pressPlay = press(f, PLAY);

  const blobs =
    mode === "row"
      ? [
          { x: 0.1, y: 0.05, d: 0.78, tone: accent, dx: -5, dy: -3 },
          { x: 0.92, y: 0.95, d: 0.72, tone: secondary, dx: 5, dy: 3 },
          { x: 0.62, y: -0.1, d: 0.38, tone: `color-mix(in srgb, ${accent} 50%, ${secondary})`, dx: 3, dy: -4 },
        ]
      : mode === "compact"
        ? [
            { x: 0.12, y: 0.08, d: 0.74, tone: accent, dx: -4, dy: -3 },
            { x: 0.72, y: 0.95, d: 0.7, tone: secondary, dx: 4, dy: 3 },
            { x: 0.8, y: 0.04, d: 0.36, tone: `color-mix(in srgb, ${accent} 50%, ${secondary})`, dx: 3, dy: -3 },
          ]
        : [
            { x: 0.18, y: 0.14, d: 0.9, tone: accent, dx: -5, dy: -4 },
            { x: 0.7, y: 0.88, d: 0.86, tone: secondary, dx: 5, dy: 4 },
            { x: 0.06, y: 0.56, d: 0.44, tone: `color-mix(in srgb, ${accent} 50%, ${secondary})`, dx: -3, dy: 3 },
          ];

  const glass = `blur(${px(q * 4)}px) saturate(1.6)`;
  const text: React.CSSProperties = { fontFamily: font, lineHeight: 1.2, whiteSpace: "nowrap" };
  const playInk = inkOn(color);
  const eqBars = (
    <div style={{ display: "flex", alignItems: "flex-end", gap: eqGap, height: eqH, flexShrink: 0 }}>
      {eq.map((h, i) => (
        <div key={i} style={{ width: eqBar, height: px(Math.max(eqBar, h * eqH)), borderRadius: eqBar / 2, background: accent }} />
      ))}
    </div>
  );

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.5} />
      {blobs.map((b, i) => (
        <Blob key={i} x={L + Wc * b.x + b.dx * u * drift} y={T + Hc * b.y + b.dy * u * drift} d={Wc * b.d} tone={b.tone} o={blobsIn} />
      ))}
      <div
        style={{
          position: "absolute",
          left: L,
          top: T,
          width: Wc,
          height: Hc,
          borderRadius: q * (mode === "stack" ? 6 : 4.4),
          background: `linear-gradient(160deg, ${withAlpha(light, s.dark ? 0.18 : 0.55)}, ${withAlpha(light, s.dark ? 0.06 : 0.3)})`,
          backdropFilter: glass,
          WebkitBackdropFilter: glass,
          boxShadow: `inset 0 1px 0 ${withAlpha(light, s.dark ? 0.35 : 0.9)}, inset 0 0 0 1px ${withAlpha(light, s.dark ? 0.14 : 0.55)}, 0 ${px(q * 3)}px ${px(q * 8)}px -${px(q)}px ${withAlpha(s.deep, s.dark ? 0.55 : 0.18)}`,
          opacity: prog(f, 0, 8),
          transform: enter < 1 ? `translateY(${px((1 - enter) * u * 5)}px) scale(${px(0.96 + 0.04 * enter)})` : undefined,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: artX,
            top: artY,
            width: art,
            height: art,
            overflow: "hidden",
            borderRadius: art * (mode === "stack" ? 0.07 : 0.12),
            transform: `scale(${px(artScale)})`,
            boxShadow: `0 ${px(q * 1.4)}px ${px(q * 4)}px ${withAlpha(s.deep, s.dark ? 0.45 : 0.22)}, 0 ${px(q * 2)}px ${px(q * 7)}px ${withAlpha(accent, 0.35 * glow)}`,
            background: `radial-gradient(circle at 26% 22%, ${withAlpha(light, 0.55)}, ${withAlpha(light, 0)} 42%), radial-gradient(circle at 86% 90%, ${withAlpha(secondary, 0.95)}, ${withAlpha(secondary, 0)} 62%), linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 40%, ${secondary}))`,
          }}
        >
          {[0.88, 0.58].map((r, i) => (
            <div
              key={i}
              style={{ position: "absolute", left: art * (0.64 - r / 2), top: art * (0.6 - r / 2), width: art * r, height: art * r, borderRadius: "50%", border: `${px(Math.max(1.5, art * 0.008))}px solid ${withAlpha(light, i ? 0.24 : 0.32)}` }}
            />
          ))}
          <div style={{ position: "absolute", left: art * 0.59, top: art * 0.55, width: art * 0.1, height: art * 0.1, borderRadius: "50%", background: withAlpha(light, 0.85) }} />
        </div>
        <div style={{ position: "absolute", left: colX, top: textY, width: colW }}>
          {showLabel ? (
            <div style={{ display: "flex", alignItems: "center", gap: labelFs * 0.5, height: labelFs * 1.3, marginBottom: q * 1.2 }}>
              {eqBars}
              <span data-21st-slot="label" style={{ ...text, fontSize: labelFs, fontWeight: 500, color: s.muted }}>
                {label}
              </span>
            </div>
          ) : null}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: q * 4 }}>
            <span data-21st-slot="title" style={{ ...text, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.02em", color: s.ink }}>
              {title}
            </span>
            {mode === "stack" ? eqBars : null}
          </div>
          <div data-21st-slot="artist" style={{ ...text, lineHeight: 1.3, fontSize: artistFs, fontWeight: 400, color: s.muted }}>
            {artist}
          </div>
        </div>
        {mode === "stack" ? (
          <>
            <div style={{ position: "absolute", left: barX, top: barRowY, width: barW, height: barH, borderRadius: barH, background: withAlpha(color, s.dark ? 0.2 : 0.16), overflow: "hidden" }}>
              <div style={{ width: `${px(frac * 100)}%`, height: "100%", borderRadius: barH, background: withAlpha(color, 0.9) }} />
            </div>
            <div style={{ position: "absolute", left: barX, top: barRowY + barH + q * 2, width: barW, display: "flex", justifyContent: "space-between" }}>
              <span data-21st-slot="elapsed" style={{ ...text, lineHeight: 1.3, fontSize: timeFs, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
                {elapsed}
              </span>
              <span data-21st-slot="duration" style={{ ...text, lineHeight: 1.3, fontSize: timeFs, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
                {duration}
              </span>
            </div>
          </>
        ) : (
          <div style={{ position: "absolute", left: barX, top: barRowY, width: barW, height: timeRowH, display: "flex", alignItems: "center", gap: timeFs * 0.8 }}>
            <span data-21st-slot="elapsed" style={{ ...text, lineHeight: 1.3, fontSize: timeFs, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
              {elapsed}
            </span>
            <div style={{ position: "relative", flex: 1, height: barH, borderRadius: barH, background: withAlpha(color, s.dark ? 0.2 : 0.16), overflow: "hidden" }}>
              <div style={{ width: `${px(frac * 100)}%`, height: "100%", borderRadius: barH, background: withAlpha(color, 0.9) }} />
            </div>
            <span data-21st-slot="duration" style={{ ...text, lineHeight: 1.3, fontSize: timeFs, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
              {duration}
            </span>
          </div>
        )}
        {[
          { name: "skip-back" as const, x: ctrlX - pr - ctrlGap - iconS / 2 },
          { name: "skip-forward" as const, x: ctrlX + pr + ctrlGap + iconS / 2 },
        ].map((c) => (
          <div key={c.name} style={{ position: "absolute", left: c.x - iconS / 2, top: ctrlY - iconS / 2 }}>
            <MediaIcon name={c.name} size={iconS} color={withAlpha(color, 0.86)} />
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            left: ctrlX - pr,
            top: ctrlY - pr,
            width: pr * 2,
            height: pr * 2,
            borderRadius: "50%",
            background: color,
            transform: `scale(${px((1 + 0.06 * hov) * (1 - 0.08 * pressPlay))})`,
            boxShadow: `0 0 0 ${px(q * 0.9 * glow)}px ${withAlpha(accent, 0.34)}, 0 ${px(q * 1.2)}px ${px(q * (3 + 4 * glow))}px ${withAlpha(accent, 0.55 * glow)}, 0 ${px(q * 0.8)}px ${px(q * 2.4)}px ${withAlpha(s.deep, s.dark ? 0.45 : 0.22)}`,
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 1 - swap, transform: `scale(${px(1 - 0.5 * swap)})` }}>
            <MediaIcon name="play" size={pr * 0.84} color={playInk} />
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: swap, transform: `scale(${px(0.5 + 0.5 * swap)})` }}>
            <MediaIcon name="pause" size={pr * 0.84} color={playInk} />
          </div>
        </div>
      </div>
      <ClickRing x={play.x} y={play.y} size={pr * 4.4} t={prog(f, PLAY, PLAY + 22)} color={s.dark ? light : accent} width={Math.max(2, q * 0.35)} />
      {f >= 4 ? (
        <GlassArrow
          x={cur.x}
          y={cur.y}
          size={cs}
          down={down}
          flash={flash}
          light={light}
          tint={s.dark ? light : `color-mix(in srgb, ${accent} 22%, ${light})`}
          rim={withAlpha(color, s.dark ? 0.9 : 0.55)}
          deep={s.deep}
          dark={s.dark}
        />
      ) : null}
    </AbsoluteFill>
  );
};
