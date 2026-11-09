// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE_SOFT, brandFontStack, easeOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-touch.meta";
import type { schema } from "./cursor-touch.schema";

const SETTLE = 80;
const TAPS = [meta.timing.markers.tap ?? 27, meta.timing.markers.secondTap ?? 42];
/** Rows the hand taps, in order. */
const TAPPED = [0, 2];
const CTA_TAP = meta.timing.markers.cta ?? 58;
const REST_AT = 72;
const SNAPPY = { damping: 12, stiffness: 200, mass: 0.6 };

type Node = [string, Record<string, string>];
type Rect = { x: number; y: number; w: number; h: number };

/** Exact lucide nodes (ISC). */
const ICONS = {
  globe: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { d: "M2 12h20" }]],
  smartphone: [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }], ["path", { d: "M12 18h.01" }]],
  "layout-dashboard": [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]],
  "shopping-bag": [["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }], ["path", { d: "M3 6h18" }], ["path", { d: "M16 10a4 4 0 0 1-8 0" }]],
  "chevron-left": [["path", { d: "m15 18-6-6 6-6" }]],
  check: [["path", { d: "M20 6 9 17l-5-5" }]],
  "arrow-right": [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]],
  signal: [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M17 20V8" }], ["path", { d: "M22 4v16" }]],
  wifi: [["path", { d: "M12 20h.01" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]],
  "battery-full": [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "13" }]],
} satisfies Record<string, Node[]>;
type IconName = keyof typeof ICONS;
const ROW_ICONS: IconName[] = ["globe", "smartphone", "layout-dashboard", "shopping-bag"];

/** lucide pointer (ISC): the touch hand. Fingertip hot spot at (8, 2.6) of the 24 box. */
const POINTER = [
  "M22 14a8 8 0 0 1-8 8",
  "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
  "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",
  "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",
  "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
];
const TIP = { x: 8 / 24, y: 2.6 / 24 };

const Icon: React.FC<{ name: IconName; size: number; color: string; strokeWidth?: number; style?: React.CSSProperties }> = ({ name, size, color, strokeWidth = 2, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0, overflow: "visible", ...style }}>
    {(ICONS[name] as Node[]).map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
  </svg>
);

/** The touch hand: lucide pointer filled in `fill`, outlined in `ink`, hot spot at (x, y). */
const Hand: React.FC<{ x: number; y: number; size: number; scale: number; tilt: number; lift: number; fill: string; ink: string; shade: string }> = ({ x, y, size, scale, tilt, lift, fill, ink, shade }) => (
  <div
    style={{
      position: "absolute",
      left: px(x - size * TIP.x),
      top: px(y - size * TIP.y),
      width: size,
      height: size,
      transform: `rotate(${px(tilt)}deg) scale(${px(scale)})`,
      transformOrigin: `${TIP.x * 100}% ${TIP.y * 100}%`,
      filter: `drop-shadow(${px(size * 0.02 * (1 + lift))}px ${px(size * (0.035 + 0.07 * lift))}px ${px(size * (0.06 + 0.08 * lift))}px ${withAlpha(shade, 0.3 + 0.1 * lift)})`,
    }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", overflow: "visible" }}>
      {POINTER.map((d, i) => (
        <path key={`f${i}`} d={d} fill={fill} stroke={fill} strokeWidth={4.4} />
      ))}
      {POINTER.map((d, i) => (
        <path key={`s${i}`} d={d} fill="none" stroke={ink} strokeWidth={1.6} />
      ))}
    </svg>
  </div>
);

export const Component: React.FC<z.infer<typeof schema>> = ({ title, subtitle, options, cta, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const screen = surfaceColor === "transparent" ? inkOn(color) : surfaceColor;
  const ink = inkOn(accent);

  // Phone, centered.
  const phoneH = H * (portrait ? 0.88 : aspect === "1:1" ? 0.86 : 0.84);
  const phoneW = portrait ? W * 0.86 : phoneH * 0.49;
  const phoneX = (W - phoneW) / 2;
  const phoneY = (H - phoneH) / 2;
  const bezel = phoneW * 0.03;
  const outerR = phoneW * 0.15;
  const sx = phoneX + bezel;
  const sy = phoneY + bezel;
  const sw = phoneW - bezel * 2;
  const sh = phoneH - bezel * 2;
  const padX = sw * 0.075;
  const cx0 = sx + padX;
  const cwid = sw - padX * 2;

  // Type.
  const titleChars = Array.from(title).length;
  const titleFs = Math.max(floor, fitFontSize({ chars: titleChars + 1, boxW: cwid, boxH: sh * 0.2, lines: 2, charEm: 0.56, max: portrait ? u * 8.4 : u * 3.6 }));
  const subFs = subtitle ? Math.max(floor, Math.min(titleFs * 0.62, fitFontSize({ chars: Array.from(subtitle).length + 1, boxW: cwid, boxH: sh * 0.08, charEm: 0.52, max: portrait ? u * 5.8 : u * 2.3 }))) : 0;

  // Vertical rhythm of the screen.
  const statusH = sh * 0.055;
  const navH = sh * 0.06;
  const titleTop = sy + statusH + navH + sh * 0.03;
  const titleBox = titleFs * 1.12 * 2 + (subtitle ? subFs * 1.35 + sh * 0.012 : 0);
  const rowH = u * (portrait ? 13 : 7.4);
  const rowGap = rowH * 0.16;
  const btnH = u * (portrait ? 13.5 : 6.8);
  const homeH = sh * 0.05;
  const btnY = sy + sh - homeH - btnH;
  // The options sit in the middle of the space between the heading and the button.
  const rowsBlock = rowH * 4 + rowGap * 3;
  const rowsY = Math.max(titleTop + titleBox + sh * 0.035, (titleTop + titleBox + btnY - rowsBlock) / 2);
  const rows: Rect[] = [0, 1, 2, 3].map((i) => ({ x: cx0, y: rowsY + i * (rowH + rowGap), w: cwid, h: rowH }));
  const rowPad = rowH * 0.2;
  const tileS = rowH * 0.6;
  const checkS = rowH * 0.36;
  const longest = Math.max(4, ...options.map((o) => Array.from(o).length));
  const labelFs = Math.max(floor, fitFontSize({ chars: longest + 1, boxW: cwid - rowPad * 2 - tileS - checkS - rowPad * 1.6, boxH: rowH * 0.5, charEm: 0.55, max: portrait ? u * 6.2 : u * 2.4 }));
  const btn: Rect = { x: cx0, y: btnY, w: cwid, h: btnH };
  const ctaFs = Math.max(floor, fitFontSize({ chars: Array.from(cta).length + 3, boxW: cwid * 0.8, boxH: btnH * 0.5, charEm: 0.56, max: portrait ? u * 6.2 : u * 2.5 }));

  // The hand: in from the lower right, taps two rows, then the button, and rests just under it.
  const hs = u * (portrait ? 16 : aspect === "1:1" ? 12 : 11.5);
  const tapAt = (r: Rect, k = 0.58): Pt => ({ x: r.x + r.w * k, y: r.y + r.h * 0.56 });
  const t1 = tapAt(rows[TAPPED[0]!]!);
  const t2 = tapAt(rows[TAPPED[1]!]!, 0.5);
  const t3 = tapAt(btn, 0.62);
  const rest: Pt = { x: btn.x + btn.w * 0.87, y: btn.y + btnH * 0.7 };
  const keys: Key[] = [
    { f: 8, x: portrait ? W * 0.9 : phoneX + phoneW + hs * 0.9, y: H + hs * 0.35 },
    { f: TAPS[0]! - 2, ...t1 },
    { f: TAPS[0]! + 4, ...t1 },
    { f: TAPS[1]! - 2, ...t2 },
    { f: TAPS[1]! + 4, ...t2 },
    { f: CTA_TAP - 2, ...t3 },
    { f: CTA_TAP + 5, ...t3 },
    { f: REST_AT, ...rest },
  ];
  const route = (t: number) => pathAt(t, keys, 0.12);
  const p = route(f);
  const back = route(f - 2);
  const vx = (p.x - back.x) / 2;
  const vy = (p.y - back.y) / 2;
  const lift = clamp01(Math.hypot(vx, vy) / (u * 2.2));
  const tilt = Math.max(-1, Math.min(1, vx / (u * 2.4))) * 8;
  const down = Math.max(press(f, TAPS[0]!), press(f, TAPS[1]!), press(f, CTA_TAP));
  const handScale = (1 + 0.07 * lift) * (1 - 0.1 * down);
  const handFill = s.dark ? color : screen;
  const handInk = s.dark ? s.deep : color;

  // Tap feedback.
  const tapPoints: { at: number; pt: Pt }[] = [
    { at: TAPS[0]!, pt: t1 },
    { at: TAPS[1]!, pt: t2 },
    { at: CTA_TAP, pt: t3 },
  ];
  const ringW = Math.max(2, u * (portrait ? 0.5 : 0.35));

  // Screen state.
  const enabled = expoOut(prog(f, TAPS[0]! + 3, TAPS[0]! + 12));
  const ctaDown = press(f, CTA_TAP);
  const ctaRipple = prog(f, CTA_TAP, CTA_TAP + 16);
  const done = springSnap(f, fps, CTA_TAP + 2, SNAPPY);
  const step = expoOut(prog(f, CTA_TAP + 4, CTA_TAP + 16));

  // Entrances.
  const phoneIn = springSnap(f, fps, 0, APPLE_SOFT);
  const riseY = (a: number) => px((1 - expoOut(prog(f, a, a + 14))) * u * 2);
  const rise = (a: number) => ({ opacity: prog(f, a, a + 8), transform: `translateY(${riseY(a)}px)` });

  const text: React.CSSProperties = { fontFamily: font, lineHeight: 1.12, whiteSpace: "nowrap" };
  const statusIcon = statusH * 0.36;

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.9} />

      <div style={{ position: "absolute", inset: 0, opacity: prog(f, 0, 7), transform: phoneIn < 1 ? `translateY(${px((1 - phoneIn) * u * 7)}px)` : undefined }}>
        {/* Body and screen */}
        <div
          style={{
            position: "absolute",
            left: phoneX,
            top: phoneY,
            width: phoneW,
            height: phoneH,
            borderRadius: outerR,
            background: s.dark ? `color-mix(in srgb, ${color} 16%, ${s.deep})` : `color-mix(in srgb, ${color} 90%, ${screen})`,
            boxShadow: `0 ${px(u * 2.4)}px ${px(u * 6)}px -${px(u * 1)}px ${withAlpha(s.deep, s.dark ? 0.8 : 0.3)}, inset 0 0 0 ${px(Math.max(1.5, bezel * 0.12))}px ${withAlpha(color, s.dark ? 0.16 : 0.4)}`,
          }}
        />
        <div style={{ position: "absolute", left: sx, top: sy, width: sw, height: sh, borderRadius: outerR - bezel, background: screen, overflow: "hidden" }}>
          {/* Status bar: island and system icons. */}
          <div style={{ position: "absolute", left: sw * 0.36, top: statusH * 0.26, width: sw * 0.28, height: statusH * 0.5, borderRadius: 99, background: s.dark ? inkOn(color) : color }} />
          <div style={{ position: "absolute", right: padX, top: statusH * 0.32, height: statusH * 0.38, display: "flex", alignItems: "center", gap: statusIcon * 0.35 }}>
            <Icon name="signal" size={statusIcon} color={s.ink} strokeWidth={2.4} />
            <Icon name="wifi" size={statusIcon} color={s.ink} strokeWidth={2.4} />
            <Icon name="battery-full" size={statusIcon * 1.2} color={s.ink} strokeWidth={2} />
          </div>
        </div>

        {/* Nav: back chevron and step progress. */}
        <div style={{ position: "absolute", left: cx0, top: sy + statusH, width: cwid, height: navH, display: "flex", alignItems: "center", justifyContent: "space-between", ...rise(3) }}>
          <Icon name="chevron-left" size={navH * 0.5} color={s.ink} strokeWidth={2.2} style={{ marginLeft: -navH * 0.1 }} />
          <div style={{ display: "flex", gap: navH * 0.1, width: cwid * 0.5 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ position: "relative", flex: 1, height: Math.max(3, navH * 0.1), borderRadius: 99, background: s.line, overflow: "hidden" }}>
                {i < 2 || (i === 2 && step > 0) ? (
                  <div style={{ position: "absolute", inset: 0, borderRadius: 99, background: accent, transform: i === 2 ? `scaleX(${px(step)})` : undefined, transformOrigin: "0% 50%" }} />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Heading. */}
        <div style={{ position: "absolute", left: cx0, top: titleTop, width: cwid, display: "flex", flexDirection: "column", gap: sh * 0.012, ...rise(5) }}>
          <span data-21st-slot="title" style={{ ...text, whiteSpace: "normal", fontSize: titleFs, fontWeight: 650, letterSpacing: "-0.03em", color: s.ink, maxHeight: titleFs * 1.12 * 2, overflowWrap: "anywhere" }}>
            {title}
          </span>
          {subtitle ? (
            <span data-21st-slot="subtitle" style={{ ...text, fontSize: subFs, lineHeight: 1.35, fontWeight: 400, color: s.muted }}>
              {subtitle}
            </span>
          ) : null}
        </div>

        {/* Options. */}
        {rows.map((r, i) => {
          const which = TAPPED.indexOf(i);
          const at = which >= 0 ? TAPS[which]! : -1;
          const pr = at >= 0 ? press(f, at) : 0;
          const on = at >= 0 ? springSnap(f, fps, at + 1, SNAPPY) : 0;
          const flash = at >= 0 ? Math.max(0, 1 - Math.abs(f - (at + 1)) / 5) : 0;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: r.x,
                top: r.y,
                width: r.w,
                height: r.h,
                borderRadius: rowH * 0.26,
                background: s.raised,
                boxShadow: `inset 0 0 0 ${px(Math.max(1, u * 0.12))}px ${s.line}`,
                opacity: prog(f, 7 + i * 2, 15 + i * 2),
                transform: `translateY(${riseY(7 + i * 2)}px) scale(${px(1 - 0.03 * pr)})`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: rowH * 0.26,
                  background: withAlpha(accent, s.dark ? 0.16 : 0.1),
                  boxShadow: `inset 0 0 0 ${px(Math.max(1.5, u * (portrait ? 0.32 : 0.2)))}px ${accent}`,
                  opacity: clamp01(on),
                }}
              />
              {flash > 0 ? <div style={{ position: "absolute", inset: 0, borderRadius: rowH * 0.26, background: withAlpha(color, 0.08 * flash) }} /> : null}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", gap: rowPad * 0.8, padding: `0 ${px(rowPad)}px` }}>
                <div style={{ width: tileS, height: tileS, borderRadius: tileS * 0.28, flexShrink: 0, display: "grid", placeItems: "center", background: withAlpha(secondary, s.dark ? 0.22 : 0.14) }}>
                  <Icon name={ROW_ICONS[i]!} size={tileS * 0.54} color={`color-mix(in srgb, ${secondary} ${s.dark ? 72 : 82}%, ${color})`} strokeWidth={2} />
                </div>
                <span data-21st-slot="options" style={{ ...text, flex: 1, minWidth: 0, fontSize: labelFs, fontWeight: 550, letterSpacing: "-0.01em", color: s.ink }}>
                  {options[i]}
                </span>
                <div style={{ position: "relative", width: checkS, height: checkS, flexShrink: 0 }}>
                  <div style={{ position: "absolute", inset: 0, borderRadius: "50%", boxShadow: `inset 0 0 0 ${px(Math.max(1.5, checkS * 0.08))}px ${s.faint}` }} />
                  {on > 0 ? (
                    <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: accent, display: "grid", placeItems: "center", transform: `scale(${px(Math.min(1.15, on))})` }}>
                      <Icon name="check" size={checkS * 0.62} color={ink} strokeWidth={3} />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}

        {/* Continue. */}
        <div
          style={{
            position: "absolute",
            left: btn.x,
            top: btn.y,
            width: btn.w,
            height: btn.h,
            borderRadius: btnH / 2,
            overflow: "hidden",
            background: s.raised,
            boxShadow: enabled > 0 ? `0 ${px(btnH * 0.14)}px ${px(btnH * 0.5)}px ${withAlpha(accent, 0.32 * enabled)}` : undefined,
            opacity: prog(f, 15, 23),
            transform: `translateY(${riseY(15)}px) scale(${px(1 - 0.04 * ctaDown)})`,
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: accent, opacity: enabled }} />
          {ctaRipple > 0 && ctaRipple < 1 ? (
            <div
              style={{
                position: "absolute",
                left: t3.x - btn.x - easeOut(ctaRipple) * btn.w,
                top: t3.y - btn.y - easeOut(ctaRipple) * btn.w,
                width: easeOut(ctaRipple) * btn.w * 2,
                height: easeOut(ctaRipple) * btn.w * 2,
                borderRadius: "50%",
                background: withAlpha(ink, 0.26 * (1 - ctaRipple)),
              }}
            />
          ) : null}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: ctaFs * 0.45 }}>
            <span data-21st-slot="cta" style={{ ...text, fontSize: ctaFs, fontWeight: 600, letterSpacing: "-0.01em", color: enabled > 0.5 ? ink : s.faint }}>
              {cta}
            </span>
            <div style={{ position: "relative", width: ctaFs, height: ctaFs }}>
              <div style={{ position: "absolute", inset: 0, opacity: 1 - clamp01(done * 1.5), transform: `translateX(${px(clamp01(done) * ctaFs * 0.6)}px)` }}>
                <Icon name="arrow-right" size={ctaFs} color={enabled > 0.5 ? ink : s.faint} strokeWidth={2.4} />
              </div>
              {done > 0 ? (
                <div style={{ position: "absolute", inset: 0, transform: `scale(${px(done)})` }}>
                  <Icon name="check" size={ctaFs} color={ink} strokeWidth={2.8} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* Home indicator. */}
        <div style={{ position: "absolute", left: W / 2 - sw * 0.17, top: sy + sh - homeH * 0.42, width: sw * 0.34, height: Math.max(3, homeH * 0.1), borderRadius: 99, background: withAlpha(color, 0.5) }} />
      </div>

      {/* Touch feedback: a soft press dot and two rings per tap. */}
      {tapPoints.map(({ at, pt }, i) => {
        const dotT = prog(f, at - 1, at + 10);
        const dot = dotT > 0 && dotT < 1 ? Math.sin(Math.PI * Math.min(1, dotT * 1.6)) * (1 - dotT) : 0;
        return (
          <React.Fragment key={i}>
            {dot > 0 ? (
              <div style={{ position: "absolute", left: pt.x - hs * 0.2, top: pt.y - hs * 0.2, width: hs * 0.4, height: hs * 0.4, borderRadius: "50%", background: withAlpha(accent, 0.45 * dot), transform: `scale(${px(0.5 + 0.5 * dot)})` }} />
            ) : null}
            {[0, 4].map((lag) => {
              const t = prog(f, at + lag, at + lag + 16);
              if (t <= 0 || t >= 1) return null;
              const dd = hs * (0.25 + 1.15 * easeOut(t));
              return <div key={lag} style={{ position: "absolute", left: px(pt.x - dd / 2), top: px(pt.y - dd / 2), width: px(dd), height: px(dd), borderRadius: "50%", border: `${px(ringW * (1 - 0.5 * t))}px solid ${withAlpha(accent, (lag ? 0.6 : 0.9) * (1 - t))}` }} />;
            })}
          </React.Fragment>
        );
      })}

      {f >= 8 ? <Hand x={p.x} y={p.y} size={hs} scale={handScale} tilt={tilt} lift={lift} fill={handFill} ink={handInk} shade={s.deep} /> : null}
    </AbsoluteFill>
  );
};
