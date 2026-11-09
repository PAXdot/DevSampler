// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../../ui/shared/icons";
import { ARROW_TAIL_PATH, ARROW_TAIL_TIP, Ground, arc, clamp01, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-classic.meta";
import type { schema } from "./cursor-classic.schema";

const SETTLE = 100;
const TOGGLE = meta.timing.markers.toggle ?? 42;
const SAVE = meta.timing.markers.save ?? 74;

const chars = (text: string) => Array.from(text).length;

/** Ease out with a small overshoot: the arrow lands a hair past its target and settles back. */
const backOut = (t: number, k = 1.1) => {
  const c = clamp01(t) - 1;
  return 1 + (k + 1) * c * c * c + k * c * c;
};

type Leg = { f: number; x: number; y: number; ease?: "back" | "inout"; bend?: number };

/** Position along the legs: each leg a slight arc, eased per leg. */
function route(f: number, keys: Leg[]): Pt {
  const first = keys[0]!;
  if (f <= first.f) return { x: first.x, y: first.y };
  for (let i = 1; i < keys.length; i++) {
    const a = keys[i - 1]!;
    const b = keys[i]!;
    if (f <= b.f) {
      const t = (f - a.f) / Math.max(1, b.f - a.f);
      return arc(a, b, b.ease === "back" ? backOut(t) : easeInOut(t), b.bend ?? 0.12);
    }
  }
  const last = keys[keys.length - 1]!;
  return { x: last.x, y: last.y };
}

type Rect = { x: number; y: number; w: number; h: number };

/** 1 with the point inside the rect, easing to 0 at `soft` px outside it. */
const near = (p: Pt, r: Rect, soft: number) => {
  const dx = Math.max(r.x - p.x, 0, p.x - (r.x + r.w));
  const dy = Math.max(r.y - p.y, 0, p.y - (r.y + r.h));
  return easeInOut(clamp01(1 - Math.hypot(dx, dy) / soft));
};

/** The classic tailed arrow: text-colored fill, a contrasting hairline and a soft lift. Hot spot at (x, y). */
const ClassicArrow: React.FC<{ x: number; y: number; size: number; down: number; fill: string; stroke: string; shadow: string }> = ({ x, y, size, down, fill, stroke, shadow }) => (
  <div
    style={{
      position: "absolute",
      left: px(x - size * ARROW_TAIL_TIP.x),
      top: px(y - size * ARROW_TAIL_TIP.y),
      width: size,
      height: size,
      transform: `scale(${px(1 - 0.14 * down)})`,
      transformOrigin: `${ARROW_TAIL_TIP.x * 100}% ${ARROW_TAIL_TIP.y * 100}%`,
      filter: `drop-shadow(0 ${px(size * 0.05)}px ${px(size * 0.08)}px ${withAlpha(shadow, 0.42)})`,
      pointerEvents: "none",
      zIndex: 20,
    }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible" }}>
      <path d={ARROW_TAIL_PATH} fill={fill} stroke={stroke} strokeWidth={0.9} strokeLinejoin="round" />
    </svg>
  </div>
);

/** A switch: `on` 0..1 slides the knob and fills the track, `squeeze` stretches the knob while pressed. */
const Toggle: React.FC<{ w: number; h: number; on: number; squeeze: number; hover: number; accent: string; off: string; knob: string; shadow: string }> = ({ w, h, on, squeeze, hover, accent, off, knob, shadow }) => {
  const inset = h * 0.1;
  const d = h - inset * 2;
  const kw = d * (1 + 0.24 * squeeze);
  const x = inset + Math.max(-0.04, Math.min(1.04, on)) * (w - inset * 2 - kw);
  return (
    <div
      style={{
        position: "relative",
        width: w,
        height: h,
        flexShrink: 0,
        borderRadius: h / 2,
        background: `color-mix(in srgb, ${accent} ${px(clamp01(on) * 100)}%, ${off})`,
        boxShadow: `0 0 0 ${px(h * 0.14 * hover)}px ${withAlpha(accent, 0.24 * hover)}`,
      }}
    >
      <div style={{ position: "absolute", left: px(x), top: inset, width: px(kw), height: d, borderRadius: d / 2, background: knob, boxShadow: `0 ${px(d * 0.08)}px ${px(d * 0.22)}px ${withAlpha(shadow, 0.35)}` }} />
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({
  title,
  subtitle,
  firstLabel,
  firstHint,
  secondLabel,
  secondHint,
  cancelLabel,
  saveLabel,
  savedLabel,
  color,
  accent,
  surfaceColor,
  background,
  fontFamily,
}) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  // The brand's light tone: the text on dark brands, the surface on light ones.
  const light = s.dark ? color : s.card;

  // Dialog geometry, in dialog units q (1% of its width).
  const D = aspect === "16:9" ? W * 0.44 : aspect === "1:1" ? W * 0.8 : W * 0.86;
  const q = D / 100;
  const pad = q * (portrait ? 7 : 6);
  const inner = D - pad * 2;
  const closeSize = q * (portrait ? 6.4 : 4);
  const titleFs = Math.max(floor, fitFontSize({ chars: chars(title) + 1, boxW: inner - closeSize - q * 3, boxH: q * 12, charEm: 0.56, max: q * (portrait ? 9.4 : 4.8) }));
  const subLines = portrait ? 2 : 1;
  const subFs = subtitle ? Math.max(floor, fitFontSize({ chars: chars(subtitle) + 1, boxW: inner, boxH: q * 20, lines: subLines, charEm: 0.52, max: q * (portrait ? 6.4 : 2.8) })) : 0;
  const subRows = subtitle ? Math.max(1, Math.min(subLines, Math.ceil((chars(subtitle) * 0.6 * subFs) / inner))) : 0;

  const tile = q * (portrait ? 11 : 8);
  const tw = q * (portrait ? 15 : 11);
  const th = tw * 0.58;
  const gap = q * (portrait ? 4 : 3);
  const textW = inner - tile - tw - gap * 2;
  const labelLines = portrait ? 2 : 1;
  const labelFs = Math.max(floor, fitFontSize({ chars: Math.max(chars(firstLabel), chars(secondLabel)) + 1, boxW: textW, boxH: q * 16, lines: labelLines, charEm: 0.56, max: q * (portrait ? 6.8 : 3.2) }));
  const showHints = !portrait && Boolean(firstHint || secondHint);
  const hintFs = Math.max(floor, fitFontSize({ chars: Math.max(chars(firstHint), chars(secondHint)) + 1, boxW: textW, boxH: q * 6, charEm: 0.52, max: q * 2.6 }));
  const rowH = q * (portrait ? 22 : 13.5);

  const btnH = q * (portrait ? 14 : 8.6);
  const longest = Math.max(chars(saveLabel), chars(savedLabel) + 2) + 1;
  const btnFs = Math.max(floor, fitFontSize({ chars: longest, boxW: portrait ? inner - btnH : inner * 0.55 - btnH * 0.8, boxH: btnH * 0.5, charEm: 0.56, max: q * (portrait ? 6.4 : 3) }));
  const saveW = portrait ? inner : Math.min(inner * 0.55, longest * btnFs * 0.56 + btnH * 0.8);
  const cancelW = portrait ? inner : cancelLabel ? Math.min(inner * 0.4, (chars(cancelLabel) + 1) * btnFs * 0.56 + btnH * 0.7) : 0;

  const headH = titleFs * 1.2 + (subtitle ? q * 1.4 + subRows * subFs * 1.3 : 0);
  const secGap = q * (portrait ? 6 : 4.6);
  const footGap = q * (portrait ? 2.6 : 2);
  const footH = portrait && cancelLabel ? btnH * 2 + footGap : btnH;
  const dialogH = pad + headH + secGap + rowH * 2 + secGap + footH + pad;
  const left = (W - D) / 2;
  const top = (H - dialogH) / 2;
  const rowsTop = pad + headH + secGap;
  const footTop = rowsTop + rowH * 2 + secGap;
  const saveX = portrait ? pad : D - pad - saveW;
  const cancelX = portrait ? pad : saveX - footGap - cancelW;
  const cancelY = portrait ? footTop + btnH + footGap : footTop;

  // Targets in frame coordinates.
  const toggle: Rect = { x: left + D - pad - tw, y: top + rowsTop + rowH + (rowH - th) / 2, w: tw, h: th };
  const row: Rect = { x: left + pad - q * 2.4, y: top + rowsTop + rowH + q * 1.2, w: inner + q * 4.8, h: rowH - q * 2.4 };
  const save: Rect = { x: left + saveX, y: top + footTop, w: saveW, h: btnH };
  const c1 = { x: toggle.x + th * 0.5, y: toggle.y + th * 0.56 };
  const c2 = { x: save.x + saveW * (portrait ? 0.64 : 0.6), y: save.y + btnH * 0.56 };
  const rest = { x: save.x + saveW * (portrait ? 0.8 : 0.8), y: save.y + btnH * (portrait ? 0.64 : 0.7) };
  const start = portrait ? { x: W * 0.94, y: H + u * 2 } : { x: Math.min(W - u * 4, left + D + u * 16), y: H + u * 2 };

  // The arrow arrives with a little overshoot, flips the switch, glides to Save, clicks and eases off.
  const cur = route(f, [
    { f: 8, ...start },
    { f: 36, ...c1, ease: "back", bend: 0.16 },
    { f: 50, ...c1 },
    { f: 68, ...c2, ease: "back", bend: -0.2 },
    { f: SAVE + 6, ...c2 },
    { f: 96, ...rest, bend: 0.12 },
  ]);
  const cs = u * (portrait ? 17 : 12.5);
  const down = press(f, TOGGLE) + press(f, SAVE);

  // Reactions.
  const enter = springSnap(f, fps, 0, { damping: 18, stiffness: 140, mass: 0.9 });
  const on = springSnap(f, fps, TOGGLE + 1, { damping: 14, stiffness: 220, mass: 0.7 });
  const hovToggle = near(cur, toggle, q * 6);
  const hovRow = near(cur, row, q * 3) * (1 - prog(f, TOGGLE + 10, TOGGLE + 22));
  const hovSave = near(cur, save, q * 5);
  const pressSave = press(f, SAVE);
  const done = expoOut(prog(f, SAVE, SAVE + 8));
  const swap = expoOut(prog(f, SAVE + 2, SAVE + 10));
  const draw = expoOut(prog(f, SAVE + 4, SAVE + 16));
  const ring = expoOut(prog(f, SAVE + 2, SAVE + 18));

  const offTrack = `color-mix(in srgb, ${color} ${s.dark ? 18 : 14}%, ${s.card})`;
  const text: React.CSSProperties = { fontFamily: font, lineHeight: 1.2 };
  const rows = [
    { key: "first", label: firstLabel, hint: firstHint, icon: "mail" as const, on: 1 },
    { key: "second", label: secondLabel, hint: secondHint, icon: "bell" as const, on },
  ];

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.75} />
      <div
        style={{
          position: "absolute",
          left,
          top,
          width: D,
          height: dialogH,
          borderRadius: q * 3.6,
          background: s.card,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 6),
          transform: enter < 1 ? `translateY(${px((1 - enter) * u * 4)}px) scale(${px(0.96 + 0.04 * enter)})` : undefined,
        }}
      >
        <div style={{ position: "absolute", left: pad, right: pad, top: pad, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: q * 3 }}>
          <div style={{ minWidth: 0 }}>
            <div data-21st-slot="title" style={{ ...text, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.02em", color: s.ink, whiteSpace: "nowrap" }}>
              {title}
            </div>
            {subtitle ? (
              <div data-21st-slot="subtitle" style={{ ...text, marginTop: q * 1.4, fontSize: subFs, lineHeight: 1.3, color: s.muted, whiteSpace: portrait ? "normal" : "nowrap", textWrap: "balance" }}>
                {subtitle}
              </div>
            ) : null}
          </div>
          <div style={{ marginTop: (titleFs * 1.2 - closeSize) / 2 }}>
            <Icon name="x" size={closeSize} color={s.faint} strokeWidth={2} />
          </div>
        </div>
        <div style={{ position: "absolute", left: pad - q * 2.4, top: rowsTop + rowH + q * 1.2, width: inner + q * 4.8, height: rowH - q * 2.4, borderRadius: q * 2.4, background: s.raised, opacity: px(hovRow) }} />
        {rows.map((r, i) => {
          const t = prog(f, 4 + i * 3, 12 + i * 3);
          return (
            <div
              key={r.key}
              style={{
                position: "absolute",
                left: pad,
                width: inner,
                top: rowsTop + rowH * i,
                height: rowH,
                display: "flex",
                alignItems: "center",
                gap,
                borderTop: `1px solid ${s.line}`,
                borderBottom: i === 1 ? `1px solid ${s.line}` : undefined,
                boxSizing: "border-box",
                opacity: t,
                transform: t < 1 ? `translateY(${px((1 - expoOut(t)) * q * 2)}px)` : undefined,
              }}
            >
              <div
                style={{
                  width: tile,
                  height: tile,
                  flexShrink: 0,
                  borderRadius: tile * 0.28,
                  display: "grid",
                  placeItems: "center",
                  background: `color-mix(in srgb, ${withAlpha(accent, 0.16)} ${px(clamp01(r.on) * 100)}%, ${s.raised})`,
                }}
              >
                <Icon name={r.icon} size={tile * 0.48} color={`color-mix(in srgb, ${accent} ${px(clamp01(r.on) * 100)}%, ${s.muted})`} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div data-21st-slot={`${r.key}Label`} style={{ ...text, fontSize: labelFs, fontWeight: 500, letterSpacing: "-0.01em", color: s.ink, whiteSpace: portrait ? "normal" : "nowrap" }}>
                  {r.label}
                </div>
                {showHints && r.hint ? (
                  <div data-21st-slot={`${r.key}Hint`} style={{ ...text, marginTop: q * 0.8, fontSize: hintFs, lineHeight: 1.3, color: s.muted, whiteSpace: "nowrap" }}>
                    {r.hint}
                  </div>
                ) : null}
              </div>
              <Toggle w={tw} h={th} on={r.on} squeeze={i === 1 ? press(f, TOGGLE) : 0} hover={i === 1 ? hovToggle : 0} accent={accent} off={offTrack} knob={light} shadow={s.deep} />
            </div>
          );
        })}
        {cancelLabel ? (
          <div
            style={{
              position: "absolute",
              left: cancelX,
              top: cancelY,
              width: cancelW,
              height: btnH,
              borderRadius: q * 2.2,
              background: s.raised,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: prog(f, 10, 18),
            }}
          >
            <span data-21st-slot="cancelLabel" style={{ ...text, fontSize: btnFs, fontWeight: 500, color: s.muted, whiteSpace: "nowrap" }}>
              {cancelLabel}
            </span>
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            left: saveX,
            top: footTop,
            width: saveW,
            height: btnH,
            borderRadius: q * 2.2,
            overflow: "hidden",
            background: `color-mix(in srgb, ${accent} ${px(done * 100)}%, ${color})`,
            boxShadow: `0 0 0 ${px(q * 0.9 * ring)}px ${withAlpha(accent, 0.28)}, 0 ${px(q * (0.6 + 0.9 * hovSave))}px ${px(q * (2 + 2.4 * hovSave))}px ${withAlpha(s.deep, s.dark ? 0.55 : 0.2)}`,
            transform: `translateY(${px(-q * 0.4 * hovSave * (1 - pressSave))}px) scale(${px((1 + 0.02 * hovSave) * (1 - 0.06 * pressSave))})`,
            opacity: prog(f, 10, 18),
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 1 - swap, transform: `translateY(${px(-swap * btnFs * 0.7)}px)` }}>
            <span data-21st-slot="saveLabel" style={{ ...text, fontSize: btnFs, fontWeight: 600, letterSpacing: "-0.01em", color: inkOn(color), whiteSpace: "nowrap" }}>
              {saveLabel}
            </span>
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: btnFs * 0.4, opacity: swap, transform: `translateY(${px((1 - swap) * btnFs * 0.7)}px)` }}>
            <svg width={btnFs * 1.05} height={btnFs * 1.05} viewBox="0 0 24 24" fill="none" stroke={inkOn(accent)} strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0 }}>
              <path d="M4 12l5 5L20 6" strokeDasharray={23} strokeDashoffset={px(23 * (1 - draw))} />
            </svg>
            <span data-21st-slot="savedLabel" style={{ ...text, fontSize: btnFs, fontWeight: 600, letterSpacing: "-0.01em", color: inkOn(accent), whiteSpace: "nowrap" }}>
              {savedLabel}
            </span>
          </div>
        </div>
      </div>
      {f >= 8 ? <ClassicArrow x={cur.x} y={cur.y} size={cs} down={down} fill={color} stroke={inkOn(color)} shadow={s.deep} /> : null}
    </AbsoluteFill>
  );
};
