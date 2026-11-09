// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ClickRing, Cursor, Ground, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-chat.meta";
import type { schema } from "./cursor-chat.schema";

const SETTLE = 150;
/** The first teammate sends: the bubble folds back into the tag and the pin drops. */
const SEND = meta.timing.markers.comment ?? 92;
/** The second teammate arrives at the pin and starts the reply. */
const REPLY = meta.timing.markers.reply ?? 128;
/** Generous glyph width of bubble text in em, for picking a side and the bubble's room. */
const CHAR_EM = 0.54;
/** Typical glyph width in em, for folding the typed line back without a pause. */
const FOLD_EM = 0.45;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** `text` typed from frame `at`, one character every `per` frames. */
function typedAt(f: number, text: string, at: number, per: number): string {
  if (f < at) return "";
  const chars = Array.from(text);
  return chars.slice(0, Math.min(chars.length, Math.floor((f - at) / per) + 1)).join("");
}

type Side = "right" | "left";

/**
 * Where a cursor's bubble hangs: under the arrow on the right like a name tag,
 * wrapping to two lines if it must, and on the left only when the right would
 * need more lines than that. Decided from the layout and the copy, so it never
 * flips mid-shot and never runs off the frame.
 */
function bubbleSide(tip: Pt, size: number, text: string, name: string, fs: number, tagFs: number, W: number, margin: number): { side: Side; room: number } {
  const pad = fs * 1.2;
  const textW = Array.from(text).length * fs * CHAR_EM + fs * 0.25;
  const floorW = Math.max(fs * 4, Array.from(name).length * tagFs * 0.62);
  const right = W - margin - (tip.x + size * 0.6);
  const left = tip.x - size * 0.1 - margin;
  const lines = (room: number) => (room - pad < floorW ? Infinity : Math.ceil(textW / (room - pad)));
  const r = lines(right);
  return r <= 2 || r <= lines(left) ? { side: "right", room: right } : { side: "left", room: left };
}

/**
 * Planned size of an open bubble: lines balanced inside the room, so a wrapped
 * bubble has no ragged empty tail. Drives the width cap, the fold and the spacing.
 */
function planBubble(full: string, name: string, room: number, msgFs: number, tagFs: number) {
  const lineH = msgFs * 1.25;
  const caretW = Math.max(2, msgFs * 0.07);
  const padOpen = msgFs * 1.2;
  const textW = Array.from(full).length * msgFs * CHAR_EM + caretW * 2;
  const lines = Math.max(1, Math.ceil(textW / Math.max(msgFs * 4, room - padOpen)));
  const textRoom = lines > 1 ? Math.min(room - padOpen, (textW / lines) * 1.16) : room - padOpen;
  const boxW = Math.min(room, Math.max(textRoom + padOpen, Array.from(name).length * tagFs * 0.62 + padOpen));
  const height = msgFs * 0.76 + (name ? tagFs * 1.2 + msgFs * 0.1 : 0) + lines * lineH;
  const foldW = Math.min(textRoom, (textW * FOLD_EM) / CHAR_EM);
  return { lineH, caretW, boxW, foldW, fullH: lines * lineH, height };
}

/** Top edge of a cursor's chip: under the arrow on the right, below the button on the left. */
const chipTop = (tip: Pt, size: number, side: Side, clearY: number) => (side === "right" ? tip.y + size * 0.68 : Math.max(tip.y + size * 0.26, clearY));

/**
 * A multiplayer name tag that opens into a chat bubble under the name and folds
 * back. Closed it matches the kit cursor's label; the anchor corner points at
 * the cursor tip on whichever side it hangs.
 */
const Chip: React.FC<{
  tip: Pt;
  size: number;
  side: Side;
  room: number;
  W: number;
  fill: string;
  font: string;
  shadow: string;
  name: string;
  nameSlot: string;
  tagFs: number;
  text: string;
  /** The whole message, for planning the bubble's size while it is typed. */
  full: string;
  textSlot: string;
  msgFs: number;
  open: number;
  fold: number;
  caret: number;
  down: number;
  /** A left-hanging bubble drops below this line so it never covers the button. */
  clearY: number;
}> = ({ tip, size, side, room, W, fill, font, shadow, name, nameSlot, tagFs, text, full, textSlot, msgFs, open, fold, caret, down, clearY }) => {
  const ink = inkOn(fill);
  const t = open * (1 - fold);
  const right = side === "right";
  const ox = right ? size * 0.6 : -size * 0.1;
  const top = chipTop(tip, size, side, clearY);
  const padX = lerp(size * 0.32, msgFs * 0.6, t);
  const padY = lerp(size * 0.1, msgFs * 0.38, t);
  const round = lerp(size * 0.34, msgFs * 0.8, t);
  const nub = lerp(size * 0.34, size * 0.1, t);
  const { lineH, caretW, boxW, foldW, fullH } = planBubble(full, name, room, msgFs, tagFs);
  const row = open > 0 && fold < 1;
  const scale = 1 - 0.12 * down;
  const radius = right ? `${px(nub)}px ${px(round)}px ${px(round)}px ${px(round)}px` : `${px(round)}px ${px(nub)}px ${px(round)}px ${px(round)}px`;
  return (
    <div
      style={{
        position: "absolute",
        ...(right ? { left: px(tip.x + ox) } : { right: px(W - (tip.x + ox)) }),
        top: px(top),
        maxWidth: px(boxW),
        boxSizing: "border-box",
        padding: `${px(padY)}px ${px(padX)}px`,
        borderRadius: radius,
        background: fill,
        color: ink,
        fontFamily: font,
        boxShadow: shadow,
        display: "flex",
        flexDirection: "column",
        alignItems: right ? "flex-start" : "flex-end",
        transform: scale !== 1 ? `scale(${px(scale)})` : undefined,
        transformOrigin: right ? `${px(-ox)}px ${px(tip.y - top)}px` : `calc(100% + ${px(-ox)}px) ${px(tip.y - top)}px`,
        pointerEvents: "none",
        zIndex: 21,
      }}
    >
      {name ? (
        <span data-21st-slot={nameSlot} style={{ fontSize: tagFs, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em", whiteSpace: "nowrap", opacity: px(1 - 0.3 * t) }}>
          {name}
        </span>
      ) : null}
      {row ? (
        <div
          style={{
            marginTop: px((name ? msgFs * 0.1 : 0) * t),
            fontSize: msgFs,
            lineHeight: 1.25,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            overflowWrap: "anywhere",
            alignSelf: "flex-start",
            ...(open < 1 ? { maxHeight: px(open * lineH), overflow: "hidden" } : null),
            ...(fold > 0 ? { maxHeight: px((1 - fold) * fullH), maxWidth: px((1 - fold) * (1 - fold) * foldW), overflow: "hidden", opacity: px(1 - prog(fold, 0, 0.5)) } : null),
          }}
        >
          <span data-21st-slot={textSlot}>{text}</span>
          <span style={{ display: "inline-block", width: px(caretW), height: px(msgFs * 1.04), marginLeft: px(msgFs * 0.05), verticalAlign: "-0.2em", borderRadius: caretW, background: ink, opacity: caret }} />
        </div>
      ) : null}
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, subline, ctaLabel, firstName, firstMessage, secondName, secondReply, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const margin = W * 0.04;

  // Layout per format: a hero card with the copy over a button; the cursors work around the button.
  const L =
    aspect === "16:9"
      ? { cw: W * 0.64, ch: H * 0.72, pad: 0.072, col: 0.6, sub: 0.52, ctaTop: 0.58, hlLines: 2, hlMax: u * 8.2, subFs: u * 2.9, subLines: 2, gap1: u * 2.6, gap2: u * 4.6, ctaH: u * 8.4, ctaFull: false, ctaMax: 0.34, cursor: u * 5.2, msgFs: u * 3, pinD: u * 6.9, orb: { x: 0.84, y: 0.46, d: 1.05 } }
      : aspect === "1:1"
        ? { cw: W * 0.84, ch: H * 0.78, pad: 0.08, col: 0.8, sub: 0.74, ctaTop: 0.6, hlLines: 2, hlMax: u * 7.4, subFs: u * 3.3, subLines: 2, gap1: u * 2.4, gap2: u * 4.6, ctaH: u * 9.4, ctaFull: false, ctaMax: 0.48, cursor: u * 5.8, msgFs: u * 3.2, pinD: u * 7.6, orb: { x: 0.9, y: 0.12, d: 0.9 } }
        : { cw: W * 0.88, ch: H * 0.68, pad: 0.08, col: 0.84, sub: 0.84, ctaTop: 0.49, hlLines: 3, hlMax: u * 10, subFs: u * 5.6, subLines: 3, gap1: u * 3, gap2: u * 6, ctaH: u * 14.5, ctaFull: true, ctaMax: 1, cursor: u * 12.2, msgFs: u * 5.8, pinD: u * 12.6, orb: { x: 0.9, y: 0.06, d: 0.75 } };
  const cw = L.cw;
  const ch = L.ch;
  const cardX = (W - cw) / 2;
  const cardY = (H - ch) / 2;
  const pad = cw * L.pad;
  const colW = cw * L.col;

  // Type sizes, each at or above the format's floor.
  const cursor = Math.max(L.cursor, (floor + 0.5) / 0.46);
  const tagFs = cursor * 0.46;
  const msgFs = Math.max(floor + 0.5, L.msgFs);
  const pinD = Math.max(L.pinD, (floor + 0.5) / 0.44);
  const pinFs = pinD * 0.44;
  const subFs = Math.max(floor, L.subFs);
  const subLinesEst = subline ? Math.min(L.subLines, Math.max(1, Math.ceil((Array.from(subline).length * subFs * 0.52 * 1.12) / (cw * L.sub)))) : 0;
  const subH = subLinesEst * subFs * 1.34;
  const ctaH = L.ctaH;
  const ctaTop = ch * L.ctaTop;
  const textRoom = ctaTop - L.gap2 - pad - (subline ? L.gap1 + subH : 0);
  const hlChars = Array.from(headline).length + 1;
  const hlFs = Math.max(floor, fitFontSize({ chars: hlChars, boxW: colW, boxH: textRoom, lines: L.hlLines, charEm: 0.47, lineHeight: 1.06, max: L.hlMax }));
  const ctaChars = Array.from(ctaLabel).length + 1;
  const ctaPadX = ctaH * 0.6;
  const ctaW = L.ctaFull ? colW : Math.min(cw * L.ctaMax, Math.max(ctaH * 2.6, ctaChars * ctaH * 0.42 * 0.52 + ctaPadX * 2));
  // A full-width button keeps its left cap for the pin: the label is fitted to the
  // rest and only slides right when a long label would run under the pin.
  const pinInset = ctaH * 0.32;
  const pinZone = L.ctaFull ? pinInset + pinD * 1.04 : 0;
  const labelBox = L.ctaFull ? ctaW - pinZone - ctaH * 0.4 : ctaW - ctaPadX * 1.4;
  const ctaFs = Math.max(floor, fitFontSize({ chars: ctaChars, boxW: labelBox, boxH: ctaH * 0.5, charEm: 0.52, lineHeight: 1, max: ctaH * 0.42 }));
  const labelShift = L.ctaFull ? Math.max(0, pinZone - (ctaW - ctaChars * 0.52 * ctaFs) / 2) : 0;
  const ctaR = ctaH * 0.26;
  const orbD = Math.min(cw, ch) * L.orb.d;
  const glowCore = `color-mix(in srgb, ${accent} 58%, ${inkOn(accent)})`;
  const cta = { x: cardX + pad, y: cardY + ctaTop };
  const ctaInk = s.dark ? s.deep : inkOn(color);

  // Where the first teammate comments (the pin's point), the reply spot and the rest spot.
  const P: Pt = L.ctaFull ? { x: cta.x + pinInset, y: cta.y + ctaH * 0.62 } : { x: cta.x + ctaW - ctaH * 0.26, y: cta.y + ctaH * 0.3 };
  const Lp: Pt = { x: P.x + pinD * 0.78, y: P.y + pinD * 0.08 };
  const first = bubbleSide(P, cursor, firstMessage, firstName, msgFs, tagFs, W, margin);
  const second = bubbleSide(Lp, cursor, secondReply, secondName, msgFs, tagFs, W, margin);
  // The first cursor rests clear of the reply, with its whole name tag inside the frame.
  const tagW = Array.from(firstName).length * tagFs * 0.62 + cursor * 0.64;
  const restX = portrait ? cardX + cw * 0.58 : cta.x + ctaW * 0.3;
  const clearY = cta.y + ctaH + u * 1.2;
  const restXc = first.side === "right" ? Math.min(restX, W - margin - cursor * 0.6 - tagW) : Math.max(restX, margin + cursor * 0.1 + tagW);
  const reply = planBubble(secondReply, secondName, second.room, msgFs, tagFs);
  const replyX0 = second.side === "right" ? Lp.x + cursor * 0.6 : Lp.x - cursor * 0.1 - reply.boxW;
  const tagX0 = first.side === "right" ? restXc : restXc - cursor * 0.1 - tagW;
  const underReply = tagX0 < replyX0 + reply.boxW && tagX0 + tagW + cursor * 0.6 > replyX0;
  const replyBottom = chipTop(Lp, cursor, second.side, clearY) + reply.height;
  const R1: Pt = { x: restXc, y: Math.max(cta.y + ctaH + u * (portrait ? 22 : 6.5), underReply ? replyBottom + u * 3.5 : 0) };

  // Timeline.
  const card = springSnap(f, fps, 0);
  const mayaAt = pathAt(f, [
    { f: 6, x: W * 1.06, y: H * 0.8 },
    { f: 36, x: P.x, y: P.y },
    { f: SEND + 6, x: P.x, y: P.y },
    { f: 122, x: R1.x, y: R1.y },
  ]);
  const leoAt = pathAt(f, [
    // In portrait the second cursor comes in under the button so it never crosses the label.
    { f: 100, x: W * 1.06, y: portrait ? cta.y + ctaH * 2.4 : cardY + ch * 0.3 },
    { f: REPLY, x: Lp.x, y: Lp.y },
  ]);
  const open1 = expoOut(prog(f, 37, 50));
  const fold1 = easeInOut(prog(f, SEND, SEND + 9));
  const len1 = Array.from(firstMessage).length;
  const per1 = Math.min(1.5, 30 / Math.max(1, len1));
  const end1 = 42 + (len1 - 1) * per1;
  const caret1 = f < 39 || f >= SEND ? 0 : f < end1 + 4 ? 1 : Math.floor((f - end1 - 4) / 8) % 2 === 0 ? 0 : 1;
  const open2 = expoOut(prog(f, REPLY - 1, REPLY + 12));
  const len2 = Array.from(secondReply).length;
  const per2 = Math.min(1.4, 13 / Math.max(1, len2));
  const end2 = REPLY + 3 + (len2 - 1) * per2;
  const caret2 = f >= REPLY + 1 && f < end2 + 3 ? 1 : 0;
  const down1 = press(f, SEND);
  const pin = f >= SEND ? springSnap(f, fps, SEND + 1, { damping: 11, stiffness: 190, mass: 0.6 }) : 0;
  const ring = prog(f, 31, 39) * (1 - prog(f, SEND + 2, SEND + 12));
  const ringGrow = expoOut(prog(f, 31, 44));
  const initial = (Array.from(firstName.trim())[0] ?? "").toUpperCase();
  const chipShadow = `0 ${px(u * 0.5)}px ${px(u * 1.6)}px ${withAlpha(s.deep, s.dark ? 0.5 : 0.2)}`;
  const ringW = Math.max(2, u * 0.36);
  const ringOff = u * (portrait ? 1.1 : 0.75);

  const rise = (a: number) => ({ opacity: prog(f, a, a + 10), transform: `translateY(${px((1 - expoOut(prog(f, a, a + 16))) * u * 2.2)}px)` });

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} />
      <div
        style={{
          position: "absolute",
          left: cardX,
          top: cardY,
          width: cw,
          height: ch,
          borderRadius: u * (portrait ? 4.4 : 3.4),
          overflow: "hidden",
          background: `linear-gradient(160deg, ${s.raised}, ${s.card} 62%)`,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 8),
          transform: card < 1 ? `translateY(${px((1 - card) * u * 5)}px) scale(${px(0.97 + 0.03 * card)})` : undefined,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: px(cw * L.orb.x - orbD / 2),
            top: px(ch * L.orb.y - orbD / 2),
            width: px(orbD),
            height: px(orbD),
            background: [
              `radial-gradient(closest-side at 40% 36%, ${withAlpha(glowCore, 0.9)}, ${withAlpha(glowCore, 0)} 58%)`,
              `radial-gradient(closest-side at 28% 72%, ${withAlpha(secondary, s.dark ? 0.45 : 0.3)}, ${withAlpha(secondary, 0)} 70%)`,
              `radial-gradient(closest-side, ${accent}, ${withAlpha(accent, 0.85)} 32%, ${withAlpha(accent, 0.4)} 58%, ${withAlpha(accent, 0.1)} 82%, ${withAlpha(accent, 0)})`,
            ].join(", "),
            opacity: (s.dark ? 0.9 : 0.72) * prog(f, 2, 24),
          }}
        />
        <div style={{ position: "absolute", left: pad, width: colW, bottom: ch - (ctaTop - L.gap2), display: "flex", flexDirection: "column", gap: L.gap1 }}>
          <div
            data-21st-slot="headline"
            style={{ fontFamily: font, fontWeight: 600, fontSize: hlFs, lineHeight: 1.06, letterSpacing: "-0.035em", color: s.ink, textWrap: "balance", ...rise(3) }}
          >
            {headline}
          </div>
          {subline ? (
            <div data-21st-slot="subline" style={{ fontFamily: font, fontWeight: 400, fontSize: subFs, lineHeight: 1.34, color: s.muted, maxWidth: cw * L.sub, textWrap: "pretty", ...rise(7) }}>
              {subline}
            </div>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: pad, top: ctaTop, width: ctaW, height: ctaH, ...rise(10) }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: ctaR,
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: px(labelShift * 2),
              boxSizing: "border-box",
              boxShadow: `0 ${px(u * 0.8)}px ${px(u * 2.4)}px ${withAlpha(s.deep, s.dark ? 0.45 : 0.18)}`,
            }}
          >
            <span data-21st-slot="ctaLabel" style={{ fontFamily: font, fontWeight: 600, fontSize: ctaFs, lineHeight: 1.1, letterSpacing: "-0.015em", color: ctaInk, whiteSpace: "nowrap" }}>
              {ctaLabel}
            </span>
          </div>
          {ring > 0 ? (
            <div
              style={{
                position: "absolute",
                inset: -ringOff,
                borderRadius: ctaR + ringOff,
                border: `${px(ringW)}px solid ${accent}`,
                boxShadow: `0 0 0 ${px(u * 0.9)}px ${withAlpha(accent, 0.14)}`,
                opacity: px(ring),
                transform: `scale(${px(1.04 - 0.04 * ringGrow)})`,
              }}
            />
          ) : null}
        </div>
      </div>

      {pin > 0 ? (
        <div
          style={{
            position: "absolute",
            left: px(P.x),
            top: px(P.y - pinD),
            width: pinD,
            height: pinD,
            boxSizing: "border-box",
            borderRadius: `${px(pinD / 2)}px ${px(pinD / 2)}px ${px(pinD / 2)}px ${px(pinD * 0.1)}px`,
            border: `${px(Math.max(2, pinD * 0.06))}px solid ${s.card}`,
            background: accent,
            boxShadow: `0 ${px(u * 0.7)}px ${px(u * 2)}px ${withAlpha(s.deep, s.dark ? 0.55 : 0.22)}`,
            display: "grid",
            placeItems: "center",
            transform: pin < 1 ? `scale(${px(pin)})` : undefined,
            transformOrigin: "0% 100%",
            zIndex: 15,
          }}
        >
          <span data-21st-slot="firstName" style={{ fontFamily: font, fontWeight: 600, fontSize: pinFs, lineHeight: 1, color: inkOn(accent) }}>
            {initial}
          </span>
        </div>
      ) : null}
      <ClickRing x={P.x} y={P.y} size={pinD * 2.3} t={prog(f, SEND, SEND + 20)} color={accent} width={Math.max(2, u * 0.4)} />

      {f >= 6 ? (
        <>
          <Cursor x={mayaAt.x} y={mayaAt.y} size={cursor} down={down1} fill={accent} stroke={inkOn(accent)} />
          <Chip
            tip={mayaAt}
            size={cursor}
            side={first.side}
            room={first.room}
            W={W}
            fill={accent}
            font={font}
            shadow={chipShadow}
            name={firstName}
            nameSlot="firstName"
            tagFs={tagFs}
            text={typedAt(f, firstMessage, 42, per1)}
            full={firstMessage}
            textSlot="firstMessage"
            msgFs={msgFs}
            open={open1}
            fold={fold1}
            caret={caret1}
            down={down1}
            clearY={clearY}
          />
        </>
      ) : null}
      {f >= 100 ? (
        <>
          <Cursor x={leoAt.x} y={leoAt.y} size={cursor} fill={secondary} stroke={inkOn(secondary)} />
          <Chip
            tip={leoAt}
            size={cursor}
            side={second.side}
            room={second.room}
            W={W}
            fill={secondary}
            font={font}
            shadow={chipShadow}
            name={secondName}
            nameSlot="secondName"
            tagFs={tagFs}
            text={typedAt(f, secondReply, REPLY + 3, per2)}
            full={secondReply}
            textSlot="secondReply"
            msgFs={msgFs}
            open={open2}
            fold={0}
            caret={caret2}
            down={0}
            clearY={clearY}
          />
        </>
      ) : null}
    </AbsoluteFill>
  );
};
