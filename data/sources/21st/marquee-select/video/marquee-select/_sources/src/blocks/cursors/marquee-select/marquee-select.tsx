// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Glyph, Ground, clamp01, pathAt, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./marquee-select.meta";
import type { schema } from "./marquee-select.schema";

const SETTLE = meta.timing.markers.settled ?? 104;
const GRAB = meta.timing.markers.grab ?? 18;
const RELEASE = meta.timing.markers.release ?? 62;
const BAR = meta.timing.markers.bar ?? 68;
/** The box starts growing two frames after the press. */
const DRAG = GRAB + 2;
/** The cursor comes to rest over the first action. */
const HOVER = 94;

/** Progress at which easeInOut reaches y, so each card's select frame is solved exactly. */
const easeInOutInverse = (y: number) => (y <= 0 ? 0 : y >= 1 ? 1 : y < 0.5 ? Math.cbrt(y / 4) : 1 - Math.cbrt(2 * (1 - y)) / 2);

/** How much of the accent (vs the secondary) tints each thumbnail. */
const TONE = [100, 0, 64, 28, 84, 44];
const ANGLE = [155, 205, 135, 180, 160, 120];

/** Abstract file previews (photo, video, vector, document, chart, archive) in brand tints. */
const Thumb: React.FC<{ i: number; tone: string; card: string; hi: string }> = ({ i, tone, card, hi }) => {
  const deep = `color-mix(in srgb, ${tone} 86%, ${card})`;
  const mid = `color-mix(in srgb, ${tone} 50%, ${card})`;
  const soft = `color-mix(in srgb, ${tone} 20%, ${card})`;
  const k = i % 6;
  return (
    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${ANGLE[k]}deg, ${mid}, ${soft})` }}>
      <svg width="100%" height="100%" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
        {k === 0 ? (
          <>
            <circle cx={116} cy={32} r={12} fill={hi} />
            <path d="M0 100 V70 Q32 48 66 68 T126 60 Q146 56 160 64 V100 Z" fill={mid} />
            <path d="M0 100 V84 Q44 66 92 82 T160 78 V100 Z" fill={deep} />
          </>
        ) : k === 1 ? (
          <>
            <circle cx={80} cy={50} r={19} fill={soft} />
            <path d="M74 39 L92 50 L74 61 Z" fill={deep} strokeLinejoin="round" />
            <rect x={22} y={84} width={116} height={4} rx={2} fill={soft} />
            <rect x={22} y={84} width={46} height={4} rx={2} fill={deep} />
          </>
        ) : k === 2 ? (
          <>
            <rect x={58} y={28} width={44} height={44} rx={11} fill={deep} transform="rotate(45 80 50)" />
            <circle cx={80} cy={50} r={10} fill={soft} />
          </>
        ) : k === 3 ? (
          <>
            <rect x={48} y={14} width={64} height={92} rx={6} fill={soft} />
            {[44, 36, 42, 26, 38, 32].map((w, j) => (
              <rect key={j} x={58} y={28 + j * 10} width={w} height={4.5} rx={2.25} fill={j === 0 ? deep : mid} />
            ))}
          </>
        ) : k === 4 ? (
          <>
            {[22, 36, 28, 46, 58].map((h, j) => (
              <rect key={j} x={34 + j * 20} y={84 - h} width={13} height={h} rx={3} fill={j === 4 ? deep : mid} />
            ))}
            <rect x={28} y={84} width={104} height={2.5} rx={1.25} fill={deep} />
          </>
        ) : (
          <>
            <rect x={60} y={18} width={58} height={42} rx={8} fill={soft} />
            <rect x={51} y={29} width={58} height={42} rx={8} fill={mid} />
            <rect x={42} y={40} width={58} height={42} rx={8} fill={deep} />
            <circle cx={56} cy={53} r={5} fill={hi} />
          </>
        )}
      </svg>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ fileNames, selectionLabel, actions, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const names = Array.from({ length: 6 }, (_, i) => fileNames[i] ?? "");
  const acts = actions.length ? actions : [""];

  // Grid: 3x2 in landscape and square, 2x3 filling the height in portrait.
  const cols = portrait ? 2 : 3;
  const rows = portrait ? 3 : 2;
  const gridW = W * (portrait ? 0.9 : aspect === "1:1" ? 0.86 : 0.64);
  const gap = u * (portrait ? 3.2 : aspect === "1:1" ? 2.6 : 3);
  const cardW = (gridW - gap * (cols - 1)) / cols;
  const pad = portrait ? u * 2 : cardW * 0.04;
  const longest = Math.max(4, ...names.map((n) => Array.from(n).length));
  // Portrait names sit on the type floor; a name too long for the card shrinks instead of spilling.
  const nameFs = fitFontSize({ chars: longest, boxW: cardW - pad * 2.4, boxH: u * 10, charEm: 0.56, max: portrait ? floor : u * 2.8 });
  const labelH = nameFs * 1.25 + pad * 1.9;

  // Selection bar (one pill row) or, in portrait, a two-row sheet with full-width buttons.
  // The landscape bar's width in units of its font size, so long copy shrinks it to fit the frame.
  const barEm = 0.575 + 1.53 + 0.5 + Array.from(selectionLabel).length * 0.56 + 1.6 + acts.reduce((sum, t) => sum + Array.from(t).length * 0.56 + 1.6, 0) + 0.35;
  const barFs = portrait ? Math.max(floor, u * 5.6) : Math.min(Math.max(floor, u * 2.7), (W * 0.94) / barEm);
  const barH = barFs * 2.6;
  const sheetPad = u * 4;
  const pillH = barFs * (portrait ? 1.3 : 1.45);
  const btnH = barFs * 1.9;
  const btnGap = u * 2;
  const sheetH = sheetPad * 2 + pillH + u * 3 + btnH;
  const barGap = u * (portrait ? 4 : 4.4);

  let cardH: number;
  let thumbH: number;
  if (portrait) {
    const gridH = H * 0.9 - barGap - sheetH;
    cardH = (gridH - gap * (rows - 1)) / rows;
    thumbH = cardH - pad - labelH;
  } else {
    thumbH = (cardW - pad * 2) * (aspect === "1:1" ? 0.68 : 0.6);
    cardH = pad + thumbH + labelH;
  }
  const gridH = cardH * rows + gap * (rows - 1);
  const total = gridH + barGap + (portrait ? sheetH : barH);
  const gridTop = (H - total) / 2;
  const gridLeft = (W - gridW) / 2;
  const barTop = gridTop + gridH + barGap;
  const cardX = (c: number) => gridLeft + c * (cardW + gap);
  const cardY = (r: number) => gridTop + r * (cardH + gap);

  // The marquee: from just outside the grid's top-left past the centers of the 2x2 top-left cards.
  const A = { x: gridLeft - gap * 0.9, y: gridTop - gap * 0.9 };
  const B = { x: cardX(1) + cardW * 0.78, y: cardY(1) + cardH * 0.76 };
  const drag = easeInOut(prog(f, DRAG, RELEASE));
  const corner = { x: A.x + (B.x - A.x) * drag, y: A.y + (B.y - A.y) * drag };
  const cards = names.map((name, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const x = cardX(c);
    const y = cardY(r);
    const cx = x + cardW / 2;
    const cy = y + cardH / 2;
    const covered = cx <= B.x && cy <= B.y;
    // The frame the box corner passes the card's center, solved from the drag's easing.
    const at = covered ? DRAG + easeInOutInverse(Math.max((cx - A.x) / (B.x - A.x), (cy - A.y) / (B.y - A.y))) * (RELEASE - DRAG) : Infinity;
    return { name, i, x, y, at };
  });
  const count = cards.filter((k) => f >= k.at).length;
  const finalCount = cards.filter((k) => Number.isFinite(k.at)).length;
  const boxO = prog(f, DRAG, DRAG + 2) * (1 - prog(f, RELEASE + 2, RELEASE + 10));

  // Bar geometry, laid out explicitly so the cursor knows where the first action sits.
  const est = (t: string, fs: number) => Array.from(t).length * fs * 0.56;
  const countText = String(count);
  const pillW = Math.max(pillH * 1.05, est(String(finalCount), barFs) + barFs * 0.9);
  const labelW = est(selectionLabel, barFs);
  const chipPad = barFs * 0.8;
  const chipH = barFs * 1.9;
  const chipW = acts.map((a) => est(a, barFs) + chipPad * 2);
  const inGap = barFs * 0.5;
  const divGap = barFs * 0.8;
  const divW = Math.max(1, u * 0.16);
  const barPadL = (barH - pillH) / 2;
  const barPadR = (barH - chipH) / 2;
  const barW = portrait ? gridW : barPadL + pillW + inGap + labelW + divGap * 2 + divW + chipW.reduce((a, b) => a + b, 0) + barPadR;
  const barLeft = (W - barW) / 2;
  const btnW = (gridW - sheetPad * 2 - btnGap * (acts.length - 1)) / acts.length;
  const btnFs = Math.min(barFs, fitFontSize({ chars: Math.max(...acts.map((a) => Array.from(a).length)) + 1, boxW: btnW - u * 2.4, boxH: btnH, charEm: 0.58, max: barFs }));
  const firstAction = portrait
    ? { x: barLeft + sheetPad + btnW / 2, y: barTop + sheetPad + pillH + u * 3 + btnH / 2, w: btnW, h: btnH }
    : { x: barLeft + barPadL + pillW + inGap + labelW + divGap * 2 + divW + chipW[0]! / 2, y: barTop + barH / 2, w: chipW[0]!, h: chipH };
  const rise = springSnap(f, fps, BAR, { damping: 16, stiffness: 150, mass: 0.9 });
  const barShift = (1 - rise) * (portrait ? sheetH : barH) * 1.4;
  const hover = prog(f, HOVER - 5, HOVER + 1);

  // Cursor: in from the left, presses at A, drags the corner to B, lets go, then rests on the first action.
  const rest = { x: firstAction.x + firstAction.w * (portrait ? 0.3 : 0.4), y: firstAction.y + firstAction.h * 0.3 };
  const cur =
    f < DRAG
      ? pathAt(f, [
          { f: 0, x: -W * 0.06, y: A.y + H * (portrait ? 0.22 : 0.34) },
          { f: GRAB, x: A.x, y: A.y },
        ])
      : f <= RELEASE
        ? corner
        : pathAt(f, [
            { f: RELEASE, x: B.x, y: B.y },
            { f: RELEASE + 6, x: B.x, y: B.y },
            { f: HOVER, x: rest.x, y: rest.y },
          ]);
  const down = clamp01((f - GRAB) / 2) * (1 - clamp01((f - RELEASE) / 3));
  const cursorSize = Math.max(u * (portrait ? 7 : 4.4), 24);

  const ringW = Math.max(2, u * (portrait ? 0.5 : 0.3));
  const badge = portrait ? u * 6.4 : Math.max(u * 3, cardW * 0.09);
  const radius = portrait ? u * 3 : cardW * 0.055;
  const text: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.25 };
  const ink = inkOn(accent);

  const pill = (
    <div data-21st-slot="selectionLabel" style={{ display: "flex", alignItems: "center", gap: inGap, flexShrink: 0 }}>
      <span
        style={{
          ...text,
          width: pillW,
          height: pillH,
          lineHeight: `${px(pillH)}px`,
          textAlign: "center",
          borderRadius: pillH * 0.32,
          background: accent,
          color: ink,
          fontSize: barFs,
          fontWeight: 600,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {countText}
      </span>
      <span style={{ ...text, width: portrait ? undefined : labelW, fontSize: barFs, fontWeight: 500, color: s.ink, letterSpacing: "-0.01em" }}>{selectionLabel}</span>
    </div>
  );
  const actionInk = (i: number) => (acts.length > 1 && i === acts.length - 1 ? s.muted : s.ink);
  const hoverFill = (i: number, base: string) => (i === 0 && hover > 0 ? `linear-gradient(${withAlpha(color, 0.08 * hover)}, ${withAlpha(color, 0.08 * hover)}), ${base}` : base);

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={portrait ? 0.4 : 0.44} portrait={portrait} />
      {cards.map((k) => {
        const enter = prog(f, k.i * 1.6, k.i * 1.6 + 10);
        const on = Number.isFinite(k.at) ? springSnap(f, fps, k.at, { damping: 11, stiffness: 260, mass: 0.6 }) : 0;
        const ring = Number.isFinite(k.at) ? expoOut(prog(f, k.at, k.at + 6)) : 0;
        const tone = `color-mix(in srgb, ${accent} ${TONE[k.i % 6]}%, ${secondary})`;
        // A quick press-in as the card checks, back to rest so the grid stays aligned.
        const scale = Number.isFinite(k.at) ? 1 - 0.03 * Math.sin(Math.PI * prog(f, k.at, k.at + 9)) : 1;
        return (
          <div
            key={k.i}
            style={{
              position: "absolute",
              left: k.x,
              top: k.y,
              width: cardW,
              height: cardH,
              borderRadius: radius,
              background: s.card,
              boxShadow: `0 0 0 ${px(ringW * ring)}px ${withAlpha(accent, ring)}, 0 0 0 ${px((ringW + u * 0.9) * ring)}px ${withAlpha(accent, 0.16 * ring)}, ${s.shadow(u)}`,
              opacity: enter,
              transform: `translateY(${px((1 - expoOut(enter)) * u * 2.4)}px) scale(${px(scale * 1000) / 1000})`,
            }}
          >
            <div style={{ position: "absolute", left: pad, top: pad, width: cardW - pad * 2, height: thumbH, borderRadius: radius * 0.62, overflow: "hidden" }}>
              <Thumb i={k.i} tone={tone} card={s.card} hi={`color-mix(in srgb, ${tone} 45%, ${s.dark ? color : s.card})`} />
              <div style={{ position: "absolute", inset: 0, background: withAlpha(accent, 0.16 * ring) }} />
            </div>
            <div style={{ position: "absolute", left: cardW - pad - badge * 1.32, top: pad + badge * 0.32, width: badge, height: badge }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `${px(Math.max(1.5, badge * 0.07))}px solid ${withAlpha(color, s.dark ? 0.7 : 0.42)}`, background: withAlpha(s.card, 0.3), opacity: 1 - clamp01(on) }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: accent,
                  boxShadow: `0 0 0 ${px(Math.max(1.5, badge * 0.07))}px ${s.card}, 0 ${px(badge * 0.1)}px ${px(badge * 0.3)}px ${withAlpha(s.deep, 0.35)}`,
                  display: "grid",
                  placeItems: "center",
                  transform: `scale(${px(on * 1000) / 1000})`,
                }}
              >
                <Glyph name="check" size={badge * 0.58} color={ink} strokeWidth={3.2} />
              </div>
            </div>
            <div style={{ position: "absolute", left: pad * 1.2, right: pad * 1.2, top: pad + thumbH, height: labelH, display: "flex", alignItems: "center" }}>
              <span data-21st-slot="fileNames" style={{ ...text, fontSize: nameFs, fontWeight: 500, letterSpacing: "-0.01em", color: s.ink }}>
                {k.name}
              </span>
            </div>
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          left: px(A.x),
          top: px(A.y),
          width: px(Math.max(0, corner.x - A.x)),
          height: px(Math.max(0, corner.y - A.y)),
          borderRadius: u * 0.5,
          border: `${px(Math.max(1.5, u * (portrait ? 0.3 : 0.22)))}px solid ${withAlpha(accent, 0.95)}`,
          background: withAlpha(accent, 0.13),
          opacity: boxO,
        }}
      />
      {f >= BAR ? (
        portrait ? (
          <div
            style={{
              position: "absolute",
              left: barLeft,
              top: barTop,
              width: barW,
              height: sheetH,
              borderRadius: u * 4.4,
              background: s.card,
              boxShadow: s.shadow(u),
              opacity: clamp01(rise * 1.6),
              transform: `translateY(${px(barShift)}px)`,
            }}
          >
            <div style={{ position: "absolute", left: sheetPad, top: sheetPad, height: pillH, display: "flex", alignItems: "center" }}>{pill}</div>
            <div style={{ position: "absolute", left: sheetPad, right: sheetPad, top: sheetPad + pillH + u * 3, height: btnH, display: "flex", gap: btnGap }}>
              {acts.map((a, i) => (
                <div key={i} style={{ width: btnW, height: btnH, borderRadius: btnH * 0.3, background: hoverFill(i, s.raised), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span data-21st-slot="actions" style={{ ...text, fontSize: btnFs, fontWeight: 500, color: actionInk(i), letterSpacing: "-0.01em" }}>
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              left: barLeft,
              top: barTop,
              width: barW,
              height: barH,
              borderRadius: barH * 0.36,
              background: s.card,
              boxShadow: s.shadow(u),
              display: "flex",
              alignItems: "center",
              paddingLeft: barPadL,
              boxSizing: "border-box",
              opacity: clamp01(rise * 1.6),
              transform: `translateY(${px(barShift)}px)`,
            }}
          >
            {pill}
            <div style={{ width: divW, height: barH * 0.42, background: s.line, marginLeft: divGap, marginRight: divGap, flexShrink: 0 }} />
            {acts.map((a, i) => (
              <div key={i} style={{ width: chipW[i], height: chipH, borderRadius: chipH * 0.3, background: hoverFill(i, withAlpha(color, 0)), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span data-21st-slot="actions" style={{ ...text, fontSize: barFs, fontWeight: 500, color: actionInk(i), letterSpacing: "-0.01em" }}>
                  {a}
                </span>
              </div>
            ))}
          </div>
        )
      ) : null}
      {f >= 1 ? <Cursor x={px(cur.x)} y={px(cur.y)} size={cursorSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
