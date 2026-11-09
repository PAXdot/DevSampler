// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, luminance, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ARROW_TAIL_POINTS, ARROW_TAIL_TIP, Ground, arc, clamp01, decel, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-sketch.meta";
import type { schema } from "./cursor-sketch.schema";

const SETTLE = 96;
const DOODLE = meta.timing.markers.doodle ?? 30;
const CLICK = meta.timing.markers.click ?? 66;
const DOODLE_END = DOODLE + 14;
const ARRIVE = CLICK - 6;
const LEAVE = CLICK + 6;
const REST = CLICK + 24;
/** The pencil line boils on a new seed every this many frames, until SETTLE. */
const BOIL = 4;

type Box = { x: number; y: number; w: number; h: number };

/** Deterministic 0..1 noise. */
const hash = (a: number, b: number) => {
  const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const jit = (seed: number, i: number) => hash(seed, i) - 0.5;
const r2 = (v: number) => Math.round(v * 100) / 100;
const P2 = (p: Pt) => `${r2(p.x)} ${r2(p.y)}`;

/** Average glyph width (em) of the handwriting faces brands use. */
const handEm = (family: string) => (/Caveat/.test(family) ? 0.44 : /Bebas/.test(family) ? 0.44 : 0.58);

/**
 * A hand-drawn rounded box as ONE continuous stroke: sides bow a little, corners
 * wander, and the line runs past its start like a pencil that did not lift in time.
 */
function roughBox(b: Box, r: number, seed: number, amp: number): string {
  const { x, y, w, h } = b;
  let k = 0;
  const j = (p: Pt): Pt => {
    k += 1;
    return { x: p.x + jit(seed, k) * amp, y: p.y + jit(seed + 7, k) * amp };
  };
  const bow = (a: Pt, c: Pt, nx: number, ny: number): Pt => {
    k += 1;
    const m = jit(seed + 13, k) * amp * 3;
    return { x: (a.x + c.x) / 2 + nx * m, y: (a.y + c.y) / 2 + ny * m };
  };
  const a0 = j({ x: x + r, y });
  const a1 = j({ x: x + w - r, y });
  const c1 = j({ x: x + w, y });
  const a2 = j({ x: x + w, y: y + r });
  const a3 = j({ x: x + w, y: y + h - r });
  const c2 = j({ x: x + w, y: y + h });
  const a4 = j({ x: x + w - r, y: y + h });
  const a5 = j({ x: x + r, y: y + h });
  const c3 = j({ x, y: y + h });
  const a6 = j({ x, y: y + h - r });
  const a7 = j({ x, y: y + r });
  const c4 = j({ x, y });
  const end = { x: a0.x + Math.min(w * 0.14, r * 2.4), y: a0.y - amp * 0.7 };
  return [
    `M${P2(a0)}`,
    `Q${P2(bow(a0, a1, 0, -1))} ${P2(a1)}`,
    `Q${P2(c1)} ${P2(a2)}`,
    `Q${P2(bow(a2, a3, 1, 0))} ${P2(a3)}`,
    `Q${P2(c2)} ${P2(a4)}`,
    `Q${P2(bow(a4, a5, 0, 1))} ${P2(a5)}`,
    `Q${P2(c3)} ${P2(a6)}`,
    `Q${P2(bow(a6, a7, -1, 0))} ${P2(a7)}`,
    `Q${P2(c4)} ${P2(end)}`,
  ].join(" ");
}

/**
 * A hand-drawn box as four strokes, one per side: each bows a little and runs
 * past its corners, so the corners cross the way quick pencil boxes do.
 */
function roughSides(b: Box, seed: number, amp: number): string[] {
  const c: Pt[] = [
    { x: b.x, y: b.y },
    { x: b.x + b.w, y: b.y },
    { x: b.x + b.w, y: b.y + b.h },
    { x: b.x, y: b.y + b.h },
  ];
  return c.map((p, i) => {
    const q = c[(i + 1) % 4]!;
    const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
    const ux = (q.x - p.x) / len;
    const uy = (q.y - p.y) / len;
    const o0 = amp * (0.4 + hash(seed, i * 3) * 1.8);
    const o1 = amp * (0.4 + hash(seed, i * 3 + 1) * 1.8);
    const n0 = jit(seed + 1, i) * amp * 1.4;
    const n1 = jit(seed + 2, i) * amp * 1.4;
    const a = { x: p.x - ux * o0 - uy * n0, y: p.y - uy * o0 + ux * n0 };
    const e = { x: q.x + ux * o1 - uy * n1, y: q.y + uy * o1 + ux * n1 };
    const m = jit(seed + 3, i) * amp * 3.2;
    const mid = { x: (a.x + e.x) / 2 - uy * m, y: (a.y + e.y) / 2 + ux * m };
    return `M${P2(a)} Q${P2(mid)} ${P2(e)}`;
  });
}

/** A hand-drawn arrow from a to b: a bowed shaft and a two-stroke head. */
function roughArrow(a: Pt, b: Pt, seed: number, amp: number, head: number): { shaft: string; head: string } {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const bend = jit(seed, 1) * amp * 2 - amp * 1.2;
  const mid = { x: (a.x + b.x) / 2 - uy * bend, y: (a.y + b.y) / 2 + ux * bend };
  const rot = (ang: number): Pt => ({ x: b.x - (ux * Math.cos(ang) - uy * Math.sin(ang)) * head, y: b.y - (ux * Math.sin(ang) + uy * Math.cos(ang)) * head });
  return { shaft: `M${P2(a)} Q${P2(mid)} ${P2(b)}`, head: `M${P2(rot(0.5 + jit(seed, 2) * 0.12))} L${P2(b)} L${P2(rot(-0.48 + jit(seed, 3) * 0.12))}` };
}

/** A stroke that draws itself over t (0..1); fully drawn strokes carry no dash at all. */
const Ink: React.FC<{ d: string; t: number; color: string; width: number; opacity?: number }> = ({ d, t, color, width, opacity = 1 }) =>
  t <= 0 ? null : (
    <path
      d={d}
      pathLength={1}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
      strokeDasharray={t < 1 ? "1 1" : undefined}
      strokeDashoffset={t < 1 ? Math.round((1 - t) * 1000) / 1000 : undefined}
    />
  );

/** Strokes drawn one after another over t. */
const Sides: React.FC<{ sides: string[]; t: number; color: string; width: number; opacity?: number }> = ({ sides, t, color, width, opacity }) => (
  <>
    {sides.map((d, i) => (
      <Ink key={i} d={d} t={clamp01(t * sides.length - i)} color={color} width={width} opacity={opacity} />
    ))}
  </>
);

/** The pencil arrow: the tailed arrow redrawn from its points with a fresh wobble every few frames. */
const SketchArrow: React.FC<{ x: number; y: number; size: number; seed: number; down: number; tilt: number; fill: string; pencil: string; halo: string; shadow: string }> = ({ x, y, size, seed, down, tilt, fill, pencil, halo, shadow }) => {
  const pts = (k: number) =>
    ARROW_TAIL_POINTS.map(([ax, ay], i) => {
      // The hot spot barely moves so the click lands where it should.
      const a = i === 0 ? 0.3 : 0.95;
      return { x: ax + jit(k, i) * a, y: ay + jit(k + 9, i) * a };
    });
  const d = (ps: Pt[]) => `M${ps.map(P2).join(" L")} Z`;
  const body = d(pts(seed + 3));
  return (
    <div
      style={{
        position: "absolute",
        left: px(x - size * ARROW_TAIL_TIP.x),
        top: px(y - size * ARROW_TAIL_TIP.y),
        width: px(size),
        height: px(size),
        transform: `rotate(${px(tilt)}deg) scale(${px(1 - 0.12 * down)})`,
        transformOrigin: `${ARROW_TAIL_TIP.x * 100}% ${ARROW_TAIL_TIP.y * 100}%`,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <svg width={px(size)} height={px(size)} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible" }}>
        <path d={d(pts(seed + 21))} transform="translate(1.1 1.4)" fill={shadow} />
        <path d={body} fill="none" stroke={halo} strokeWidth={3.2} strokeLinejoin="round" />
        <path d={body} fill={fill} />
        <path d={d(pts(seed))} fill="none" stroke={pencil} strokeWidth={1.1} strokeLinejoin="round" strokeLinecap="round" />
        <path d={d(pts(seed + 50))} fill="none" stroke={pencil} strokeWidth={0.6} strokeLinejoin="round" strokeLinecap="round" opacity={0.7} />
      </svg>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ title, steps, label, doneLabel, color, accent, secondary, surfaceColor, background, handFontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const hand = brandFontStack(handFontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const sq = aspect === "1:1";
  const em = handEm(handFontFamily);
  // The pencil: brand text, unless it would vanish into the highlighter fill.
  const lc = luminance(color);
  const ls = luminance(secondary);
  const pencil = (Math.max(lc, ls) + 0.05) / (Math.min(lc, ls) + 0.05) >= 2 ? color : inkOn(secondary);

  // Sketchbook sheet with a spiral binding along the top.
  const sheetW = portrait || sq ? W * 0.88 : W * 0.64;
  const sheetH = portrait ? H * 0.8 : sq ? H * 0.82 : H * 0.78;
  const sheetX = (W - sheetW) / 2;
  const sheetY = (H - sheetH) / 2 + u;
  const P = u * (portrait ? 6.5 : 5.5);
  const innerW = sheetW - P * 2;
  const ringN = Math.max(6, Math.round(sheetW / (u * (portrait ? 7.5 : 6.5))));

  // Title, written in the top-left corner with a squiggle under it.
  const titleChars = Array.from(title).length;
  const titleFs = Math.max(floor, fitFontSize({ chars: titleChars + 1, boxW: innerW * 0.8, boxH: u * 14, charEm: em, lineHeight: 1.2, max: u * (portrait ? 9 : 6.2) }));
  const titleX = sheetX + P;
  const titleY = sheetY + P + u * 1.6;
  const titleH = title ? titleFs * 1.3 : 0;
  const contentTop = titleY + titleH + u * (portrait ? 4 : 2.5);
  const contentBottom = sheetY + sheetH - P;
  const A = contentBottom - contentTop;

  // Flow: three boxes joined by arrows, and the button under them.
  const names = [0, 1, 2].map((i) => steps[i] ?? "");
  const longest = Math.max(1, ...names.map((t) => Array.from(t).length));
  let boxes: Box[];
  let links: { a: Pt; b: Pt }[];
  let btn: Box;
  if (portrait) {
    const bw = sheetW * 0.62;
    const bh = u * 13.5;
    const gap = u * 10;
    const btnH = u * 16;
    const btnGap = u * 12;
    const total = 3 * bh + 2 * gap + btnGap + btnH;
    const y0 = contentTop + Math.max(0, (A - total) / 2 - u * 2);
    boxes = [0, 1, 2].map((i) => ({ x: W / 2 - bw / 2, y: y0 + i * (bh + gap), w: bw, h: bh }));
    links = [0, 1].map((i) => ({ a: { x: W / 2 - u * 0.6, y: boxes[i]!.y + bh + gap * 0.2 }, b: { x: W / 2 + u * 0.4, y: boxes[i + 1]!.y - gap * 0.2 } }));
    btn = { x: W / 2 - sheetW * 0.28, y: y0 + 3 * bh + 2 * gap + btnGap, w: sheetW * 0.56, h: btnH };
  } else {
    const gap = u * (sq ? 7 : 9);
    const bw = (innerW - 2 * gap) / 3;
    const bh = u * (sq ? 14 : 15);
    const rowY = contentTop + A * 0.3;
    boxes = [0, 1, 2].map((i) => ({ x: sheetX + P + i * (bw + gap), y: rowY - bh / 2, w: bw, h: bh }));
    links = [0, 1].map((i) => ({ a: { x: boxes[i]!.x + bw + gap * 0.16, y: rowY + u * 0.4 }, b: { x: boxes[i + 1]!.x - gap * 0.18, y: rowY - u * 0.2 } }));
    const btnW = u * (sq ? 40 : 36);
    const btnH = u * (sq ? 12.5 : 12);
    const btnCy = contentTop + A * 0.76;
    btn = { x: W / 2 - btnW / 2, y: btnCy - btnH / 2, w: btnW, h: btnH };
  }
  const box0 = boxes[0]!;
  const last = boxes[2]!;
  const labelFs = Math.max(floor, fitFontSize({ chars: longest, boxW: box0.w * 0.84, boxH: box0.h * 0.6, charEm: em, lineHeight: 1.15, max: u * (portrait ? 8 : 6) }));
  const btnChars = Math.max(Array.from(label).length, Array.from(doneLabel).length) + 1;
  const btnFs = Math.max(floor, fitFontSize({ chars: btnChars, boxW: btn.w * 0.74, boxH: btn.h * 0.66, charEm: em, lineHeight: 1.15, max: u * (portrait ? 8.6 : 6.4) }));
  const amp = u * 0.72;
  const lineW = Math.max(1.5, u * (portrait ? 0.48 : 0.4));
  const radius = u * 2.2;

  // Drawing order: title, then each box with its label and arrow, then the button.
  const boxAt = (i: number) => 4 + i * 9;
  const titleT = prog(f, 1, 12);
  const underT = prog(f, 8, 16);
  const btnT = prog(f, 26, 38);
  const btnLabelT = prog(f, 33, 41);

  // Cursor route: up from below, a little pencil curl in the air, onto the button, click, rest beside it.
  const S = u * (portrait ? 14.5 : sq ? 12 : 13);
  const B = { x: btn.x + btn.w * 0.8, y: btn.y + btn.h * 0.42 };
  const L0 = { x: btn.x + btn.w + S * (portrait ? 0.55 : 0.7), y: btn.y + btn.h * 0.35 };
  const R = { x: B.x + u * (portrait ? 3 : 2.6), y: B.y + btn.h * 0.36 };
  const start = { x: portrait ? W * 0.86 : sheetX + sheetW * 0.94, y: H + S * 0.3 };
  const curl = S * 0.34;
  const route = (t: number): Pt => {
    if (t <= DOODLE) {
      const k = prog(t, 6, DOODLE);
      return arc(start, L0, 0.6 * decel(k) + 0.4 * k, 0.18);
    }
    if (t <= DOODLE_END) {
      // One turn, bottom -> right -> top -> left -> bottom.
      const k = prog(t, DOODLE, DOODLE_END);
      const th = Math.PI / 2 - Math.PI * 2 * (0.4 * k + 0.6 * easeInOut(k));
      return { x: L0.x + curl * Math.cos(th), y: L0.y - curl + curl * Math.sin(th) };
    }
    if (t <= ARRIVE) return arc(L0, B, 0.35 * prog(t, DOODLE_END, ARRIVE) + 0.65 * easeInOut(prog(t, DOODLE_END, ARRIVE)), 0.14);
    if (t <= LEAVE) return B;
    return arc(B, R, easeInOut(prog(t, LEAVE, REST)), -0.3);
  };
  const cur = route(f);
  const prev = route(Math.max(0, f - 1.5));
  const tilt = Math.max(-14, Math.min(14, ((cur.x - prev.x) / S) * 26));
  const down = press(f, CLICK);
  const seed = Math.floor(Math.min(f, SETTLE) / BOIL);

  // The button: shaded on hover, colored in with marker on the click.
  const hover = prog(f, ARRIVE - 6, ARRIVE + 1) * (1 - prog(f, CLICK + 10, CLICK + 22));
  const shadeT = prog(f, ARRIVE - 6, ARRIVE + 2);
  const marker = expoOut(prog(f, CLICK + 2, CLICK + 12));
  const swap = prog(f, CLICK + 4, CLICK + 10);
  const btnScale = 1 + 0.045 * hover - 0.05 * down;
  const btnTilt = -1.4 * hover;
  const btnInk = swap > 0.5 ? inkOn(accent) : s.ink;
  const tickT = prog(f, CLICK + 10, CLICK + 20);
  const marks = prog(f, CLICK, CLICK + 4) * (1 - prog(f, CLICK + 7, CLICK + 17));

  // Hatching inside the button, one zigzag stroke.
  const hatch = (() => {
    const step = u * (portrait ? 2 : 1.6);
    const m = u * 1.2;
    const pts: string[] = [];
    for (let x = m - btn.h * 0.4, i = 0; x < btn.w - m + step; x += step, i++) {
      pts.push(`${r2(x)} ${r2(btn.h - m)}`, `${r2(x + btn.h * 0.45)} ${r2(m)}`);
    }
    return `M${pts.join(" L")}`;
  })();

  // Tick across the last box's top-right corner.
  const tick = `M${P2({ x: last.x + last.w - u * 5.2, y: last.y + u * 0.6 })} Q${P2({ x: last.x + last.w - u * 3.6, y: last.y + u * 2.6 })} ${P2({ x: last.x + last.w - u * 2.6, y: last.y + u * 3.6 })} Q${P2({ x: last.x + last.w + u * 0.2, y: last.y - u * 1.6 })} ${P2({ x: last.x + last.w + u * 2.8, y: last.y - u * 4.8 })}`;

  // A squiggle under the title, as wide as the handwriting.
  const squiggle = (() => {
    const wide = Math.min(innerW, titleChars * em * titleFs * 0.98);
    const wave = u * (portrait ? 5 : 4);
    const n = Math.max(2, Math.round(wide / wave));
    const step = wide / n;
    return `M${r2(titleX - u * 0.4)} ${r2(titleY + titleFs * 1.16)} q${r2(step / 2)} ${r2(-u * 0.9)} ${r2(step)} 0${` t${r2(step)} 0`.repeat(n - 1)}`;
  })();

  // Launch -> button: one more sketched arrow so the flow ends on the button.
  const toBtn = portrait
    ? roughArrow({ x: W / 2 - u * 0.4, y: last.y + last.h + u * 2.4 }, { x: W / 2 + u * 0.6, y: btn.y - u * 2.4 }, 77, amp, u * 3)
    : roughArrow({ x: last.x + last.w * 0.3, y: last.y + last.h + u * 2.2 }, { x: btn.x + btn.w + u * 1.2, y: btn.y - u * 0.6 }, 79, amp, u * 2.4);

  const enter = expoOut(prog(f, 0, 14));
  const lift = enter < 1 ? `translateY(${px((1 - enter) * u * 3)}px)` : undefined;
  const textStyle: React.CSSProperties = { fontFamily: hand, whiteSpace: "nowrap", lineHeight: 1.15 };
  const reveal = (t: number): React.CSSProperties => ({ opacity: t > 0 ? 1 : 0, clipPath: t < 1 ? `inset(-20% ${px((1 - t) * 100)}% -20% -4%)` : undefined });

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.5} />
      <div style={{ position: "absolute", inset: 0, opacity: prog(f, 0, 8), transform: lift }}>
        {/* Paper */}
        <div
          style={{
            position: "absolute",
            left: px(sheetX),
            top: px(sheetY),
            width: px(sheetW),
            height: px(sheetH),
            borderRadius: u * 1.6,
            background: s.card,
            backgroundImage: `radial-gradient(circle, ${withAlpha(color, s.dark ? 0.14 : 0.12)} ${px(u * 0.16)}px, transparent ${px(u * 0.24)}px)`,
            backgroundSize: `${px(u * 3.4)}px ${px(u * 3.4)}px`,
            backgroundPosition: `${px(u * 1.2)}px ${px(u * 1.2)}px`,
            boxShadow: s.shadow(u),
          }}
        />
        {/* Spiral binding */}
        <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
          {Array.from({ length: ringN }, (_, i) => {
            const cx = sheetX + (sheetW * (i + 0.5)) / ringN;
            const hy = sheetY + u * 1.6;
            const rr = u * 0.62;
            return (
              <g key={i}>
                <circle cx={r2(cx)} cy={r2(hy)} r={r2(rr)} fill={s.dark ? withAlpha(s.deep, 0.9) : withAlpha(color, 0.16)} />
                <path
                  d={`M${r2(cx - rr * 0.1)} ${r2(hy)} C${r2(cx - rr * 0.9)} ${r2(sheetY - u * 2.6)} ${r2(cx + rr * 2.6)} ${r2(sheetY - u * 2.9)} ${r2(cx + rr * 1.9)} ${r2(sheetY + u * 0.15)}`}
                  fill="none"
                  stroke={withAlpha(color, s.dark ? 0.6 : 0.5)}
                  strokeWidth={px(u * 0.5)}
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>
        {/* Pencil drawing: boxes, arrows and the title squiggle */}
        <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
          {title ? (
            <Ink
              d={squiggle}
              t={underT}
              color={withAlpha(color, 0.5)}
              width={lineW * 0.9}
            />
          ) : null}
          {boxes.map((b, i) => (
            <g key={i}>
              <Sides sides={roughSides(b, 11 + i * 5, amp)} t={prog(f, boxAt(i), boxAt(i) + 12)} color={s.ink} width={lineW} />
              <Sides sides={roughSides(b, 41 + i * 5, amp * 1.2)} t={prog(f, boxAt(i) + 3, boxAt(i) + 14)} color={s.ink} width={lineW * 0.5} opacity={0.5} />
            </g>
          ))}
          {links.map((l, i) => {
            const a = roughArrow(l.a, l.b, 70 + i, amp, u * (portrait ? 3 : 2.4));
            return (
              <g key={i}>
                <Ink d={a.shaft} t={prog(f, boxAt(i) + 10, boxAt(i) + 16)} color={s.ink} width={lineW} />
                <Ink d={a.head} t={prog(f, boxAt(i) + 15, boxAt(i) + 18)} color={s.ink} width={lineW} />
              </g>
            );
          })}
          <Ink d={toBtn.shaft} t={prog(f, 24, 31)} color={s.ink} width={lineW} />
          <Ink d={toBtn.head} t={prog(f, 30, 33)} color={s.ink} width={lineW} />
          <Ink d={tick} t={tickT} color={accent} width={lineW * 2} />
        </svg>
        {/* Title and step labels */}
        {title ? (
          <div style={{ position: "absolute", left: px(titleX), top: px(titleY), ...reveal(titleT) }}>
            <span data-21st-slot="title" style={{ ...textStyle, fontSize: titleFs, fontWeight: 700, color: s.ink, display: "block" }}>
              {title}
            </span>
          </div>
        ) : null}
        {boxes.map((b, i) => (
          <div key={i} style={{ position: "absolute", left: px(b.x), top: px(b.y), width: px(b.w), height: px(b.h), display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span data-21st-slot="steps" style={{ ...textStyle, fontSize: labelFs, fontWeight: 600, color: s.ink, transform: `rotate(${[-2, 1.5, -1][i]}deg)`, ...reveal(prog(f, boxAt(i) + 8, boxAt(i) + 15)) }}>
              {names[i]}
            </span>
          </div>
        ))}
        {/* The sketched button */}
        <div
          style={{
            position: "absolute",
            left: px(btn.x),
            top: px(btn.y),
            width: px(btn.w),
            height: px(btn.h),
            transform: `rotate(${px(btnTilt)}deg) scale(${px(btnScale)})`,
          }}
        >
          {shadeT > 0 && marker < 1 ? (
            <svg width={px(btn.w)} height={px(btn.h)} style={{ position: "absolute", left: 0, top: 0, clipPath: `inset(${px(u * 0.8)}px round ${px(radius)}px)` }}>
              <Ink d={hatch} t={shadeT} color={withAlpha(secondary, s.dark ? 0.5 : 0.75)} width={lineW * 0.9} />
            </svg>
          ) : null}
          {marker > 0 ? (
            <div
              style={{
                position: "absolute",
                inset: u * 0.1,
                borderRadius: `${px(radius * 1.5)}px ${px(radius * 1.1)}px ${px(radius * 1.6)}px ${px(radius * 1.2)}px`,
                background: accent,
                transform: "rotate(-0.5deg)",
                clipPath: marker < 1 ? `inset(0 ${px((1 - marker) * 100)}% 0 0)` : undefined,
              }}
            />
          ) : null}
          <svg width={px(btn.w)} height={px(btn.h)} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            <Ink d={roughBox({ x: 0, y: 0, w: btn.w, h: btn.h }, radius * 1.3, 91, amp)} t={btnT} color={s.ink} width={lineW * 1.15} />
            <Ink d={roughBox({ x: 0, y: 0, w: btn.w, h: btn.h }, radius * 1.3, 97, amp * 1.2)} t={prog(f, 29, 40)} color={s.ink} width={lineW * 0.55} opacity={0.55} />
          </svg>
          {[
            { key: "label", text: label, o: 1 - swap },
            { key: "doneLabel", text: doneLabel, o: swap },
          ].map((row) => (
            <div key={row.key} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: row.o }}>
              <span data-21st-slot={row.key} style={{ ...textStyle, fontSize: btnFs, fontWeight: 700, color: btnInk, ...(row.key === "label" ? reveal(btnLabelT) : {}) }}>
                {row.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Click marks: three pencil flicks off the tip */}
      {marks > 0 ? (
        <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none", opacity: px(marks) }}>
          {[200, 245, 290].map((deg, i) => {
            const a = (deg * Math.PI) / 180;
            const r0 = S * 0.24;
            const r1 = S * (i === 1 ? 0.58 : 0.5);
            const d = `M${P2({ x: B.x + Math.cos(a) * r0, y: B.y + Math.sin(a) * r0 })} L${P2({ x: B.x + Math.cos(a) * r1, y: B.y + Math.sin(a) * r1 })}`;
            const t = prog(f, CLICK, CLICK + 4);
            return (
              <g key={deg}>
                <Ink d={d} t={t} color={s.card} width={lineW * 2.6} />
                <Ink d={d} t={t} color={s.ink} width={lineW * 1.2} />
              </g>
            );
          })}
        </svg>
      ) : null}
      {f >= 6 ? (
        <SketchArrow x={cur.x} y={cur.y} size={S} seed={seed} down={down} tilt={tilt} fill={secondary} pencil={pencil} halo={s.card} shadow={withAlpha(s.deep, s.dark ? 0.55 : 0.2)} />
      ) : null}
    </AbsoluteFill>
  );
};
