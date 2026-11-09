// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ClickRing, Cursor, Glyph, type GlyphName, Ground, clamp01, decel, press, prog, px, ShapeCursor, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./select-and-ask.meta";
import type { schema } from "./select-and-ask.schema";

const SETTLE = 120;
const MARK = meta.timing.markers;
const SELECT = MARK.select ?? 32;
const TOOLBAR = MARK.toolbar ?? 62;
const CLICK = MARK.click ?? 98;
/** I-beam turns into the arrow and heads for the action. */
const MORPH = 70;
const ARRIVE = 92;

/** Line height of the paragraph, in em. */
const LH = 1.32;
/** Conservative glyph width (em) for keeping the first line on one line; real fonts run 0.5-0.56. */
const FIT_EM = 0.6;
/** Typical glyph width (em) for estimating where the phrase sits on that line. */
const AVG_EM = 0.52;
/** Skeleton lines under the paragraph: the rest of the document, faded. */
const SKELETON = [0.94, 0.86, 0.91, 0.62, 0.88, 0.8, 0.93, 0.7, 0.84, 0.9, 0.58];

const chars = (s: string) => Array.from(s).length;
const sc = (v: number) => Math.round(v * 10000) / 10000;

/** A point inside the phrase box: `p` percent of the phrase's width plus `x` px, `y` px from its top. */
type Anchor = { p: number; x: number; y: number };
const at = (a: Anchor): React.CSSProperties => ({ position: "absolute", left: `calc(${px(a.p)}% + ${px(a.x)}px)`, top: px(a.y), width: 0, height: 0 });

export const Component: React.FC<z.infer<typeof schema>> = ({ lead, phrase, rest, askLabel, color, accent, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const land = aspect === "16:9";

  // ---- Text layout -----------------------------------------------------------------
  // The DOM can't be measured, so the geometry is built from the copy: the first line
  // holds lead + phrase (sized to fit with a conservative glyph width); the highlight
  // and the I-beam live inside the phrase box and use percentages of its real width.
  const leadText = lead.trim();
  const head = /^[,.;:!?)\]]+/.exec(rest)?.[0] ?? "";
  const tail = rest.slice(head.length);
  const leadChars = chars(leadText);
  const phraseChars = Math.max(1, chars(phrase));
  const cardW = land ? W * 0.7 : portrait ? W * 0.9 : W * 0.86;
  const padX = u * (portrait ? 4.6 : land ? 7 : 6);
  const padTop = u * (portrait ? 6 : land ? 6.4 : 5.6);
  const textW = cardW - padX * 2;
  const fsMax = land ? u * 5.6 : portrait ? u * 7.2 : u * 5.4;
  const line1 = (leadChars ? leadChars + 1 : 0) + phraseChars + chars(head);
  const fsLine1 = textW / (line1 * FIT_EM);
  // If lead + phrase can't share the first line at a readable size, the phrase opens line two
  // and the toolbar still floats above the card, never over a line of text.
  const sameLine = !leadChars || fsLine1 >= floor;
  const fs = Math.max(floor, Math.min(fsMax, sameLine ? fsLine1 : textW / ((phraseChars + chars(head)) * FIT_EM)));
  const lineH = fs * LH;
  const skPitch = lineH * 0.6;
  const phraseW = phraseChars * fs * AVG_EM;
  const phraseLeft = padX + (sameLine && leadChars ? (leadChars + 1) * fs * AVG_EM : 0);

  // ---- Toolbar geometry (relative to the phrase box) ---------------------------------
  const askFs = Math.max(floor, land ? u * 2.5 : portrait ? u * 5.6 : u * 2.6);
  const b = askFs * (portrait ? 1.95 : 2.3);
  const tbPad = b * 0.12;
  const gapI = b * 0.06;
  const tools: GlyphName[] = portrait ? ["bold", "italic", "link"] : ["bold", "italic", "link", "message-square"];
  const divW = Math.max(1.5, u * 0.18);
  const divSpace = b * 0.2 + divW;
  const askIcon = askFs * 0.95;
  const askPadX = b * 0.32;
  const askW = askPadX * 2 + askIcon + askFs * 0.42 + chars(askLabel) * askFs * 0.6;
  const askLeftInTb = tbPad + tools.length * b + (tools.length - 1) * gapI + divSpace;
  const tbW = askLeftInTb + askW + tbPad;
  const tbH = b + tbPad * 2;
  const tbGap = u * (portrait ? 2.2 : 1.6);
  const tbTop = -(tbGap + tbH) - (sameLine ? 0 : lineH);
  const inset = u * 1.2;
  const lo = -phraseLeft + inset;
  const hi = cardW - phraseLeft - inset - tbW;
  const tbDx = lo <= hi ? Math.max(lo, Math.min(hi, phraseW / 2 - tbW / 2)) : (lo + hi) / 2;
  const overhang = Math.max(0, tbGap + tbH - padTop + (sameLine ? 0 : lineH));

  // ---- Timeline --------------------------------------------------------------------
  const enter = expoOut(prog(f, 0, 16));
  const sel = easeInOut(prog(f, SELECT, SELECT + 28));
  const tbIn = springSnap(f, fps, TOOLBAR, { damping: 14, stiffness: 160, mass: 0.75 });
  const morph = prog(f, MORPH, MORPH + 6);
  const mid = lineH / 2;
  const beamSize = fs * 1.05;
  const arrowSize = Math.max(u * (portrait ? 7 : 4.6), 24);

  // I-beam: glides in from below the phrase, then rides the selection's growing edge.
  const start = { x: phraseW * 0.7 + u * 10, y: mid + lineH * 2.4 + u * 4 };
  const glide = decel(prog(f, 6, SELECT - 2));
  const beam: Anchor = f < SELECT ? { p: 0, x: start.x * (1 - glide), y: start.y + (mid - start.y) * glide } : { p: sel * 100, x: 0, y: mid };

  // Arrow: from the selection's end to the action button.
  const askLeft = tbDx + askLeftInTb;
  const hit = { x: askLeft + askW * 0.9, y: tbTop + tbPad + b * 0.62 };
  const travel = easeInOut(prog(f, MORPH, ARRIVE));
  const arrow: Anchor = { p: 100 * (1 - travel), x: hit.x * travel + Math.sin(travel * Math.PI) * u * 2, y: mid + (hit.y - mid) * travel - Math.sin(travel * Math.PI) * u * 3 };
  const down = press(f, CLICK);
  const hover = prog(f, ARRIVE - 6, ARRIVE);
  const fill = expoOut(prog(f, CLICK, CLICK + 14));
  const swap = prog(f, CLICK + 1, CLICK + 6);
  const fillR = fill * Math.hypot(askW, b) * 1.05;
  const hitInAsk = { x: hit.x - askLeft, y: b * 0.62 };

  const bodyInk = withAlpha(color, s.dark ? 0.78 : 0.8);
  const askInk = `color-mix(in srgb, ${accent} ${s.dark ? 72 : 82}%, ${color})`;
  const pressedInk = inkOn(accent);
  const labelInk = swap >= 1 ? pressedInk : swap > 0 ? `color-mix(in srgb, ${pressedInk} ${px(swap * 100)}%, ${askInk})` : askInk;

  const textBase: React.CSSProperties = { fontFamily: font, fontWeight: 500, letterSpacing: "-0.02em" };

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.46} portrait={portrait} glow={0.55 + 0.45 * fill} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", paddingTop: overhang }}>
        <div
          style={{
            position: "relative",
            width: cardW,
            height: portrait ? H * 0.5 : undefined,
            boxSizing: "border-box",
            padding: `${px(padTop)}px ${px(padX)}px ${px(padTop * 0.85)}px`,
            borderRadius: u * (portrait ? 4 : 3),
            background: s.card,
            boxShadow: s.shadow(u),
            display: "flex",
            flexDirection: "column",
            opacity: prog(f, 0, 8),
            transform: enter < 1 ? `translateY(${px((1 - enter) * u * 4)}px)` : undefined,
          }}
        >
          <div style={{ ...textBase, fontSize: fs, lineHeight: LH, color: bodyInk, flexShrink: 0 }}>
            {leadChars ? (
              <>
                <span data-21st-slot="lead">{leadText}</span>
                {sameLine ? " " : <br />}
              </>
            ) : null}
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {/* The phrase box: every overlay below is positioned against its real width. */}
              <span style={{ position: "relative", display: "inline-block" }}>
                {f >= SELECT ? (
                  <span
                    style={{
                      position: "absolute",
                      left: -fs * 0.06,
                      top: (lineH - fs * 1.16) / 2,
                      height: fs * 1.16,
                      width: `calc(${px(sel * 100)}% + ${px(fs * 0.12 * Math.min(1, sel * 8))}px)`,
                      borderRadius: fs * 0.12,
                      background: withAlpha(accent, s.dark ? 0.42 : 0.26),
                    }}
                  />
                ) : null}
                <span data-21st-slot="phrase" style={{ position: "relative", color: sel > 0 ? s.ink : bodyInk }}>
                  {phrase}
                </span>

                {/* Floating format toolbar above the selection */}
                {f >= TOOLBAR ? (
                  <div
                    style={{
                      position: "absolute",
                      left: tbDx,
                      top: tbTop,
                      width: tbW,
                      height: tbH,
                      borderRadius: tbH * 0.3,
                      background: s.dark ? s.raised : s.card,
                      boxShadow: s.shadow(u),
                      opacity: clamp01(tbIn * 1.6),
                      transform: tbIn < 1 ? `translateY(${px((1 - tbIn) * u * 1.6)}px) scale(${sc(0.9 + 0.1 * tbIn)})` : undefined,
                      transformOrigin: `${px(Math.max(0, Math.min(tbW, phraseW / 2 - tbDx)))}px 100%`,
                      zIndex: 10,
                    }}
                  >
                    {tools.map((name, i) => (
                      <div key={name} style={{ position: "absolute", left: tbPad + i * (b + gapI), top: tbPad, width: b, height: b, borderRadius: b * 0.24, display: "grid", placeItems: "center" }}>
                        <Glyph name={name} size={b * 0.42} color={s.muted} strokeWidth={2.1} />
                      </div>
                    ))}
                    <div style={{ position: "absolute", left: askLeftInTb - divSpace / 2 - divW / 2, top: tbPad + b * 0.24, width: divW, height: b * 0.52, borderRadius: divW, background: s.line }} />
                    <div
                      style={{
                        position: "absolute",
                        left: askLeftInTb,
                        top: tbPad,
                        width: askW,
                        height: b,
                        borderRadius: b * 0.24,
                        overflow: "hidden",
                        background: withAlpha(accent, (s.dark ? 0.16 : 0.1) * hover),
                        transform: down > 0 ? `scale(${sc(1 - 0.06 * down)})` : undefined,
                      }}
                    >
                      {fill > 0 ? <div style={{ position: "absolute", left: hitInAsk.x - fillR, top: hitInAsk.y - fillR, width: fillR * 2, height: fillR * 2, borderRadius: "50%", background: accent }} /> : null}
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: askFs * 0.42 }}>
                        <Glyph name="sparkles" size={askIcon} color={labelInk} strokeWidth={2} />
                        <span data-21st-slot="askLabel" style={{ fontFamily: font, fontWeight: 600, fontSize: askFs, lineHeight: 1.2, letterSpacing: "-0.01em", whiteSpace: "nowrap", color: labelInk }}>
                          {askLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Cursors, positioned in the phrase box so the drag tracks the real text */}
                {f >= 6 && morph < 1 ? (
                  <div style={at(beam)}>
                    <ShapeCursor x={0} y={0} size={beamSize} kind="text-cursor" ink={s.ink} opacity={prog(f, 6, 12) * (1 - morph)} />
                  </div>
                ) : null}
                {morph > 0 ? (
                  <div style={{ ...at(arrow), zIndex: 30 }}>
                    <Cursor x={0} y={0} size={arrowSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} opacity={morph} />
                  </div>
                ) : null}
                <div style={{ ...at({ p: 0, x: hit.x, y: hit.y }), zIndex: 25 }}>
                  <ClickRing x={0} y={0} size={b * 2.2} t={prog(f, CLICK, CLICK + 20)} color={accent} width={Math.max(2, u * 0.4)} />
                </div>
              </span>
              {head ? <span data-21st-slot="rest">{head}</span> : null}
            </span>
            {tail ? <span data-21st-slot="rest">{tail}</span> : null}
          </div>

          {/* The rest of the document in smaller body text, faded out */}
          <div
            style={{
              position: "relative",
              flex: portrait ? "1 1 0" : undefined,
              minHeight: 0,
              height: portrait ? undefined : skPitch * 3,
              marginTop: lineH * 0.5,
              overflow: "hidden",
              WebkitMaskImage: `linear-gradient(to bottom, ${withAlpha(color, 1)} 20%, ${withAlpha(color, 0)})`,
              maskImage: `linear-gradient(to bottom, ${withAlpha(color, 1)} 20%, ${withAlpha(color, 0)})`,
              opacity: prog(f, 4, 14),
            }}
          >
            {SKELETON.map((w, i) => (
              <div key={i} style={{ height: skPitch, display: "flex", alignItems: "center" }}>
                <div style={{ width: `${w * 100}%`, height: skPitch * 0.36, borderRadius: skPitch, background: withAlpha(color, s.dark ? 0.09 : 0.07) }} />
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
