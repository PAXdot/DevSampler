// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../../ui/shared/icons";
import { ARROW_TAIL_PATH, ARROW_TAIL_TIP, ClickRing, Ground, arc, clamp01, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-name-tag.meta";
import type { schema } from "./cursor-name-tag.schema";

const SETTLE = 104;
/** The teammate joins: their avatar pops into the header and their cursor leaves it. */
const JOIN = meta.timing.markers.join ?? 14;
const CHECKS = [meta.timing.markers.check1 ?? 38, meta.timing.markers.check2 ?? 58, meta.timing.markers.check3 ?? 78];
const REST = 100;

/** Ease out with a small overshoot, like a remote cursor catching up and settling. */
const backOut = (t: number, c = 1.15) => {
  const x = clamp01(t) - 1;
  return 1 + (c + 1) * x * x * x + c * x * x;
};

export const Component: React.FC<z.infer<typeof schema>> = ({ title, items, teammate, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { fps } = useVideoConfig();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const sq = aspect === "1:1";
  // Condensed display faces set about 0.72x as wide as a grotesk; text estimates scale by this.
  const n = /Bebas/.test(fontFamily) ? 0.72 : 1;
  const list = [0, 1, 2, 3].map((i) => items[i] ?? "");
  const initial = Array.from(teammate.trim())[0]?.toUpperCase() ?? "";
  const tagInk = inkOn(secondary);

  // Card and header.
  const cardW = portrait ? W * 0.88 : sq ? W * 0.86 : u * 88;
  const P = u * (portrait ? 6.5 : 5);
  const innerW = cardW - P * 2;
  const tile = u * (portrait ? 10 : 7);
  const av = u * (portrait ? 9.5 : 6.2);
  const avStack = av * 1.84;
  const titleBoxW = portrait ? innerW - tile - u * 3 : innerW - tile - u * 3 - avStack - u * 3;
  // 9:16 lets a long title wrap to two lines; elsewhere it shrinks to one.
  const titleFs = Math.max(floor, fitFontSize({ chars: Array.from(title).length + 1, boxW: titleBoxW, boxH: portrait ? tile * 1.9 : tile, lines: portrait ? 2 : 1, charEm: 0.56 * n, lineHeight: 1.15, max: u * (portrait ? 6.6 : 4.8) }));
  const titleLines = portrait && (Array.from(title).length + 1) * 0.56 * n * titleFs > titleBoxW ? 2 : 1;
  const headH = Math.max(tile, titleLines * titleFs * 1.18);
  const avFs = Math.max(floor, av * 0.42);

  // Rows: checkbox, then the item; wraps to two lines only in 9:16.
  const cb = u * (portrait ? 7.4 : 5);
  const gapX = u * (portrait ? 3.6 : 2.8);
  const textW = innerW - cb - gapX;
  const longest = Math.max(1, ...list.map((t) => Array.from(t).length));
  const itemFs = Math.max(floor, fitFontSize({ chars: longest, boxW: textW, boxH: u * 30, lines: portrait ? 2 : 1, charEm: 0.53 * n, lineHeight: 1.22, max: u * (portrait ? 6.2 : 4.3) }));
  const lineH = itemFs * 1.22;
  const lines = list.map((t) => (portrait ? Math.min(2, Math.max(1, Math.ceil((Array.from(t).length * 0.53 * n * itemFs) / textW))) : 1));
  const rowMin = u * (portrait ? 16 : 12);
  const rowH = lines.map((l) => Math.max(rowMin, l * lineH + u * (portrait ? 6 : 4)));
  const footer = portrait ? u * 22 : 0;
  const metaRow = portrait ? av : u * 1;
  const metaGap = u * (portrait ? 4 : 3.6);
  const listGap = u * (portrait ? 4 : 3.2);
  const rowsH = rowH.reduce((a, b) => a + b, 0);
  const cardH = P + headH + metaGap + metaRow + listGap + rowsH + footer + P * (portrait ? 0.6 : 0.7);
  const cardX = (W - cardW) / 2;
  const cardY = (H - cardH) / 2;
  const headY = cardY + P;
  const metaY = headY + headH + metaGap;
  const listY = metaY + metaRow + listGap;
  const rowY = rowH.map((_, i) => listY + rowH.slice(0, i).reduce((a, b) => a + b, 0));
  const textX = cardX + P + cb + gapX;
  const cbX = cardX + P;
  const cbY = rowY.map((y, i) => y + (rowH[i]! - cb) / 2);

  // Presence: you (accent) and the teammate (secondary), who joins at JOIN.
  const youC = portrait ? { x: cardX + P + av / 2, y: metaY + av / 2 } : { x: cardX + cardW - P - av / 2, y: headY + tile / 2 };
  const mateC = portrait ? { x: youC.x + av * 0.84, y: youC.y } : { x: youC.x - av * 0.84, y: youC.y };
  const join = springSnap(f, fps, JOIN - 6);
  const barX = portrait ? cardX + P + avStack + u * 4 : cardX + P;
  const barW = cardX + cardW - P - barX;
  const barH = u * (portrait ? 1.6 : 1);
  const barY = portrait ? metaY + (av - barH) / 2 : metaY;

  // Cursor: leaves the teammate's avatar, checks the first three items, then rests by the third.
  const S = u * (portrait ? 13.5 : 12.5);
  // Name tag: avatar initial and name in a pill hanging off the arrow.
  const tagFs = Math.max(floor, S * 0.3);
  const iniFs = Math.max(floor, tagFs * 0.8);
  const disc = Math.max(tagFs * 1.3, iniFs * 1.32);
  const tagPad = disc * 0.14;
  const tagW = tagPad + disc + tagPad * 1.3 + Array.from(teammate).length * 0.58 * n * tagFs + tagFs * 0.62;
  const tipAt = (i: number): Pt => ({ x: cbX + cb * 0.62, y: cbY[i]! + cb * 0.62 });
  const third = tipAt(2);
  const estText = (t: string) => Array.from(t).length * 0.53 * n * itemFs;
  // The tag stays on the card, except in 16:9 where it may hang past the card's edge.
  const restMax = (aspect === "16:9" ? W - u * 6 : cardX + cardW - u * 1.5) - tagW - S * (0.56 - ARROW_TAIL_TIP.x);
  const R: Pt = portrait
    ? { x: Math.max(textX, Math.min(cardX + cardW * 0.46, restMax)), y: rowY[3]! + rowH[3]! + u * 4 }
    : { x: Math.max(textX, Math.min(Math.max(textX + estText(list[2]!) + u * 4, cardX + cardW * 0.56), restMax)), y: rowY[2]! + rowH[2]! * 0.5 + u * 0.6 };
  const legs: { a: Pt; b: Pt; from: number; to: number; bend: number }[] = [
    { a: mateC, b: tipAt(0), from: JOIN + 6, to: CHECKS[0]! - 4, bend: 0.16 },
    { a: tipAt(0), b: tipAt(1), from: CHECKS[0]! + 5, to: CHECKS[1]! - 4, bend: -0.5 },
    { a: tipAt(1), b: third, from: CHECKS[1]! + 5, to: CHECKS[2]! - 4, bend: -0.5 },
    { a: third, b: R, from: CHECKS[2]! + 6, to: REST, bend: 0.22 },
  ];
  const route = (t: number): Pt => {
    if (t <= legs[0]!.from) return mateC;
    for (const leg of legs) {
      if (t < leg.from) return leg.a;
      if (t <= leg.to) return arc(leg.a, leg.b, backOut(prog(t, leg.from, leg.to)), leg.bend);
    }
    return R;
  };
  const cur = route(f);
  const prev = route(Math.max(0, f - 2));
  // The tag trails the arrow a little while it moves and catches up when it stops.
  const lag = { x: Math.max(-S * 0.3, Math.min(S * 0.3, (prev.x - cur.x) * 0.3)), y: Math.max(-S * 0.3, Math.min(S * 0.3, (prev.y - cur.y) * 0.3)) };
  const appear = prog(f, JOIN, JOIN + 8);
  const down = Math.max(...CHECKS.map((c) => press(f, c)));
  const pop = Math.max(...CHECKS.map((c) => Math.sin(Math.PI * prog(f, c, c + 12))));

  // Per-row state.
  const rows = list.map((text, i) => {
    const c = CHECKS[i];
    const hover = c === undefined ? 0 : prog(f, c - 10, c - 3) * (1 - prog(f, c + 6, c + 16));
    const done = c === undefined ? 0 : prog(f, c, c + 4);
    const tick = c === undefined ? 0 : expoOut(prog(f, c + 1, c + 9));
    const strike = c === undefined ? 0 : expoOut(prog(f, c + 3, c + 15));
    const bump = c === undefined ? 0 : Math.sin(Math.PI * prog(f, c + 1, c + 10));
    return { text, c, hover, done, tick, strike, bump };
  });
  const progress = rows.reduce((a, r) => a + (r.c === undefined ? 0 : expoOut(prog(f, r.c + 2, r.c + 16))), 0) / list.length;

  const tagScale = (0.2 + 0.8 * backOut(appear, 1.6)) * (1 + 0.14 * pop);

  const enter = expoOut(prog(f, 0, 16));
  const lift = enter < 1 ? `translateY(${px((1 - enter) * u * 4)}px)` : undefined;
  const text: React.CSSProperties = { fontFamily: font, lineHeight: 1.2 };
  const strikeInk = withAlpha(color, 0.55);

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.5} />
      <div style={{ position: "absolute", inset: 0, opacity: prog(f, 0, 8), transform: lift }}>
        {/* Document */}
        <div style={{ position: "absolute", left: px(cardX), top: px(cardY), width: px(cardW), height: px(cardH), borderRadius: u * (portrait ? 3.4 : 2.4), background: s.card, boxShadow: s.shadow(u) }} />
        {/* Header: icon, title, presence */}
        <div style={{ position: "absolute", left: px(cardX + P), top: px(headY + (headH - tile) / 2), width: px(tile), height: px(tile), borderRadius: tile * 0.28, background: accent, display: "grid", placeItems: "center" }}>
          <Icon name="list-checks" size={tile * 0.56} color={inkOn(accent)} strokeWidth={2.2} />
        </div>
        <div style={{ position: "absolute", left: px(cardX + P + tile + u * 3), top: px(headY), width: px(titleBoxW), height: px(headH), display: "flex", alignItems: "center" }}>
          <span data-21st-slot="title" style={{ ...text, lineHeight: 1.15, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.02em", color: s.ink, whiteSpace: titleLines > 1 ? "normal" : "nowrap" }}>
            {title}
          </span>
        </div>
        <div style={{ position: "absolute", left: px(youC.x - av / 2), top: px(youC.y - av / 2), width: px(av), height: px(av), borderRadius: "50%", background: accent, display: "grid", placeItems: "center", boxShadow: `0 0 0 ${px(u * 0.5)}px ${s.card}`, zIndex: 1 }}>
          <Icon name="user" size={av * 0.5} color={inkOn(accent)} strokeWidth={2.2} />
        </div>
        {join > 0 ? (
          <div
            style={{
              position: "absolute",
              left: px(mateC.x - av / 2),
              top: px(mateC.y - av / 2),
              width: px(av),
              height: px(av),
              borderRadius: "50%",
              background: secondary,
              display: "grid",
              placeItems: "center",
              boxShadow: `0 0 0 ${px(u * 0.5)}px ${s.card}`,
              transform: join < 1 ? `scale(${px(join)})` : undefined,
              zIndex: 2,
            }}
          >
            <span data-21st-slot="teammate" style={{ ...text, fontSize: avFs, fontWeight: 600, lineHeight: 1, color: tagInk }}>
              {initial}
            </span>
          </div>
        ) : null}
        {/* Progress */}
        <div style={{ position: "absolute", left: px(barX), top: px(barY), width: px(barW), height: px(barH), borderRadius: barH, background: withAlpha(color, s.dark ? 0.1 : 0.08), overflow: "hidden" }}>
          <div style={{ width: px(barW * progress), height: "100%", borderRadius: barH, background: accent }} />
        </div>
        {/* Rows */}
        {rows.map((r, i) => {
          const y = rowY[i]!;
          const h = rowH[i]!;
          const boxBorder = r.done > 0 ? secondary : r.hover > 0 ? `color-mix(in srgb, ${secondary} ${Math.round(r.hover * 100)}%, ${withAlpha(color, 0.3)})` : withAlpha(color, 0.3);
          return (
            <React.Fragment key={i}>
              {i > 0 ? <div style={{ position: "absolute", left: px(textX), width: px(cardX + cardW - P - textX), top: px(y), height: Math.max(1, u * 0.12), background: s.line }} /> : null}
              {r.hover > 0 ? (
                <div
                  style={{
                    position: "absolute",
                    left: px(cardX + P * 0.45),
                    top: px(y + u * 0.6),
                    width: px(cardW - P * 0.9),
                    height: px(h - u * 1.2),
                    borderRadius: u * 1.6,
                    background: withAlpha(secondary, 0.1 * r.hover),
                    boxShadow: `inset 0 0 0 ${px(Math.max(1.5, u * 0.22))}px ${withAlpha(secondary, 0.7 * r.hover)}`,
                  }}
                />
              ) : null}
              <div
                style={{
                  position: "absolute",
                  left: px(cbX),
                  top: px(cbY[i]!),
                  width: px(cb),
                  height: px(cb),
                  borderRadius: cb * 0.28,
                  boxSizing: "border-box",
                  border: `${px(Math.max(2, cb * 0.08))}px solid ${boxBorder}`,
                  background: r.done > 0 ? secondary : "transparent",
                  transform: r.bump > 0 ? `scale(${px(1 + 0.14 * r.bump)})` : undefined,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {r.tick > 0 ? (
                  <svg width={px(cb * 0.72)} height={px(cb * 0.72)} viewBox="0 0 24 24" fill="none" style={{ display: "block", overflow: "visible" }}>
                    <path
                      d="M20 6 9 17l-5-5"
                      pathLength={1}
                      stroke={tagInk}
                      strokeWidth={3.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray={r.tick < 1 ? "1 1" : undefined}
                      strokeDashoffset={r.tick < 1 ? Math.round((1 - r.tick) * 1000) / 1000 : undefined}
                    />
                  </svg>
                ) : null}
              </div>
              <div style={{ position: "absolute", left: px(textX), top: px(y), width: px(textW), height: px(h), display: "flex", alignItems: "center" }}>
                <div style={{ width: "100%" }}>
                  <span
                    data-21st-slot="items"
                    style={{
                      ...text,
                      lineHeight: 1.22,
                      fontSize: itemFs,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      whiteSpace: portrait ? "normal" : "nowrap",
                      color: withAlpha(color, 1 - 0.45 * r.strike),
                      backgroundImage: r.strike > 0 ? `linear-gradient(${strikeInk}, ${strikeInk})` : undefined,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "0 56%",
                      backgroundSize: `${px(r.strike * 100)}% ${px(Math.max(2, itemFs * 0.075))}px`,
                      WebkitBoxDecorationBreak: "clone",
                      boxDecorationBreak: "clone",
                    }}
                  >
                    {r.text}
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {CHECKS.map((c, i) => {
        const p = tipAt(i);
        return <ClickRing key={c} x={p.x} y={p.y} size={cb * 3.2} t={prog(f, c, c + 18)} color={secondary} width={Math.max(2, u * 0.4)} />;
      })}
      {/* The teammate's cursor and name tag */}
      {appear > 0 ? (
        <div
          style={{
            position: "absolute",
            left: px(cur.x - S * ARROW_TAIL_TIP.x),
            top: px(cur.y - S * ARROW_TAIL_TIP.y),
            width: px(S),
            height: px(S),
            opacity: px(clamp01(appear * 2)),
            transform: `scale(${px((0.5 + 0.5 * backOut(appear, 1.4)) * (1 - 0.12 * down))})`,
            transformOrigin: `${ARROW_TAIL_TIP.x * 100}% ${ARROW_TAIL_TIP.y * 100}%`,
            zIndex: 20,
          }}
        >
          <svg width={px(S)} height={px(S)} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible", filter: `drop-shadow(0 ${px(S * 0.05)}px ${px(S * 0.09)}px ${withAlpha(s.deep, s.dark ? 0.6 : 0.3)})` }}>
            <path d={ARROW_TAIL_PATH} fill={secondary} stroke={tagInk} strokeWidth={1.5} strokeLinejoin="round" />
          </svg>
          <div
            data-21st-slot="teammate"
            style={{
              position: "absolute",
              left: px(S * 0.56),
              top: px(S * 0.66),
              display: "flex",
              alignItems: "center",
              gap: px(tagPad * 1.3),
              padding: `${px(tagPad)}px ${px(tagFs * 0.62)}px ${px(tagPad)}px ${px(tagPad)}px`,
              borderRadius: disc,
              background: secondary,
              whiteSpace: "nowrap",
              transform: `translate(${px(lag.x)}px, ${px(lag.y)}px) scale(${px(tagScale)})`,
              transformOrigin: "0 0",
              boxShadow: `0 ${px(S * 0.06)}px ${px(S * 0.16)}px ${withAlpha(secondary, 0.4)}, 0 0 0 ${px(Math.max(1, S * 0.012))}px ${withAlpha(tagInk, 0.25)}`,
            }}
          >
            <div style={{ width: px(disc), height: px(disc), borderRadius: "50%", background: tagInk, display: "grid", placeItems: "center", flexShrink: 0 }}>
              <span style={{ ...text, fontSize: iniFs, fontWeight: 700, lineHeight: 1, color: secondary }}>{initial}</span>
            </div>
            <span style={{ ...text, fontSize: tagFs, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.01em", color: tagInk }}>{teammate}</span>
          </div>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
