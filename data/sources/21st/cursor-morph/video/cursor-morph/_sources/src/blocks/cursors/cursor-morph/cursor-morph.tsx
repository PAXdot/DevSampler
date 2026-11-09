// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../../ui/shared/icons";
import { ClickRing, Cursor, Glyph, Ground, ShapeCursor, clamp01, pathAt, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./cursor-morph.meta";
import type { schema } from "./cursor-morph.schema";

const SETTLE = 144;
const LINK = meta.timing.markers.link ?? 20;
const TEXT = meta.timing.markers.text ?? 54;
const BUTTON = meta.timing.markers.button ?? 90;
const CANVAS = meta.timing.markers.canvas ?? 124;
/** Frames a shape change takes: the cursor shows each shape by the share of these frames it spent over that element. */
const BLEND = 5;
const LH = 1.36;

type Rect = { x: number; y: number; w: number; h: number };
type Zone = "none" | "link" | "text" | "button" | "canvas";
const inside = (p: Pt, r: Rect, pad = 0) => p.x >= r.x - pad && p.x <= r.x + r.w + pad && p.y >= r.y - pad && p.y <= r.y + r.h + pad;
const mix = (a: string, pct: number, b: string) => `color-mix(in srgb, ${a} ${Math.round(clamp01(pct) * 100)}%, ${b})`;

export const Component: React.FC<z.infer<typeof schema>> = ({ linkLabel, paragraph, buttonLabel, cursorNames, color, accent, surfaceColor, background, fontFamily, monoFontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  // Condensed display faces set about 0.72x as wide as a grotesk; text estimates scale by this.
  const n = /Bebas/.test(fontFamily) ? 0.72 : 1;

  // Four zones: a row in 16:9, a column in 9:16 (the cursor travels down), 2x2 in 1:1.
  const gap = u * (portrait ? 2.6 : 2.2);
  let tiles: Rect[];
  if (aspect === "16:9") {
    const mx = W * 0.055;
    const weights = [1, 1.35, 0.95, 1.3];
    const sum = weights.reduce((a, b) => a + b, 0);
    const avail = W - mx * 2 - gap * 3;
    const th = H * 0.42;
    let x = mx;
    tiles = weights.map((k) => {
      const r = { x, y: (H - th) / 2, w: (avail * k) / sum, h: th };
      x += r.w + gap;
      return r;
    });
  } else if (portrait) {
    const tw = W * 0.86;
    const total = H * 0.8;
    const weights = [0.6, 1.05, 0.75, 1.5];
    const sum = weights.reduce((a, b) => a + b, 0);
    const avail = total - gap * 3;
    let y = (H - total) / 2;
    tiles = weights.map((k) => {
      const r = { x: (W - tw) / 2, y, w: tw, h: (avail * k) / sum };
      y += r.h + gap;
      return r;
    });
  } else {
    const gw = W * 0.86;
    const gh = H * 0.82;
    const cw = (gw - gap) / 2;
    const rows = [(gh - gap) * 0.42, (gh - gap) * 0.58];
    const x0 = (W - gw) / 2;
    const y0 = (H - gh) / 2;
    tiles = [
      { x: x0, y: y0, w: cw, h: rows[0]! },
      { x: x0 + cw + gap, y: y0, w: cw, h: rows[0]! },
      { x: x0, y: y0 + rows[0]! + gap, w: cw, h: rows[1]! },
      { x: x0 + cw + gap, y: y0 + rows[0]! + gap, w: cw, h: rows[1]! },
    ];
  }
  const [tLink, tText, tBtn, tCanvas] = tiles as [Rect, Rect, Rect, Rect];
  const radius = u * (portrait ? 3 : 2.2);

  // Each zone carries a badge with the cursor it asks for: beside the content in 9:16, above it otherwise.
  const bs = u * (portrait ? 7.2 : 4.4);
  const bp = u * (portrait ? 3.2 : 2.2);
  const content = (t: Rect): Rect =>
    portrait ? { x: t.x + bp * 2 + bs, y: t.y + bp, w: t.w - bp * 3 - bs, h: t.h - bp * 2 } : { x: t.x + bp, y: t.y + bp * 2 + bs, w: t.w - bp * 2, h: t.h - bp * 3 - bs };
  const lift = portrait ? 0 : bs * 0.3;

  // Link.
  const cl = content(tLink);
  const linkChars = Array.from(linkLabel).length;
  const linkFs = Math.max(floor, fitFontSize({ chars: linkChars + 2, boxW: cl.w, boxH: cl.h * 0.6, charEm: 0.56 * n, max: u * (portrait ? 7 : aspect === "1:1" ? 3.9 : 3.7) }));
  const linkW = Math.min(cl.w, (linkChars * 0.54 * n + 1.1) * linkFs);
  const linkCy = tLink.y + tLink.h / 2 + lift;
  const linkX = portrait ? cl.x : cl.x + (cl.w - linkW) / 2;
  const linkZone = { x: linkX, y: linkCy - linkFs * 0.75, w: linkW, h: linkFs * 1.5 };
  const linkRest = { x: linkX + linkW * 0.56, y: linkCy + linkFs * 0.1 };

  // Paragraph: placed from its estimated line count so the caret lands on the first line.
  const ct = content(tText);
  const paraChars = Array.from(paragraph).length;
  const paraFs = Math.max(floor, fitFontSize({ chars: paraChars, boxW: ct.w, boxH: ct.h * 0.94, lines: 3, charEm: 0.52 * n, lineHeight: LH, max: u * (portrait ? 5.6 : 2.65) }));
  const perLine = Math.max(1, Math.floor(ct.w / (paraFs * 0.52 * n)));
  const paraLines = Math.max(1, Math.ceil((paraChars * 1.12) / perLine));
  const paraH = paraLines * paraFs * LH;
  const paraTop = portrait ? tText.y + (tText.h - paraH) / 2 : Math.max(ct.y - bp * 0.3, tText.y + (tText.h - paraH) / 2 + lift);
  const textZone = { x: ct.x, y: paraTop, w: ct.w, h: paraH };
  // The caret sits in the text flow after a word near the middle of the first line; the I-beam clicks where that word should end.
  let caretAt = 0;
  {
    const target = Math.min(paraChars, perLine) * 0.5;
    let pos = 0;
    let best = Infinity;
    for (const word of paragraph.split(" ")) {
      pos += word.length;
      if (pos <= perLine * 0.9 && Math.abs(pos - target) < best) {
        best = Math.abs(pos - target);
        caretAt = pos;
      }
      pos += 1;
    }
  }
  const caret = { x: ct.x + Math.min(ct.w * 0.9, caretAt * 0.5 * n * paraFs), y: paraTop + paraFs * LH * 0.5 };

  // Button.
  const cb = content(tBtn);
  const btnChars = Array.from(buttonLabel).length;
  const btnFs = Math.max(floor, fitFontSize({ chars: btnChars + 1, boxW: cb.w * 0.78, boxH: cb.h * 0.4, charEm: 0.58 * n, max: u * (portrait ? 6.2 : 3.3) }));
  const btnH = btnFs * 2.2;
  const btnW = portrait ? cb.w : Math.min(cb.w, btnChars * 0.6 * n * btnFs + btnFs * 3);
  const btnX = portrait ? cb.x : cb.x + (cb.w - btnW) / 2;
  const btnY = tBtn.y + tBtn.h / 2 - btnH / 2 + lift;
  const btnZone = { x: btnX, y: btnY, w: btnW, h: btnH };
  const btnRest = { x: btnX + btnW * 0.6, y: btnY + btnH * 0.6 };

  // Canvas: the crosshair drags a frame from A to B.
  const canvasZone = { x: tCanvas.x + bp * 0.4, y: tCanvas.y + bp * 0.4, w: tCanvas.w - bp * 0.8, h: tCanvas.h - bp * 0.8 };
  const A = { x: tCanvas.x + tCanvas.w * (portrait ? 0.14 : 0.17), y: tCanvas.y + tCanvas.h * (portrait ? 0.22 : 0.3) };
  const B = { x: tCanvas.x + tCanvas.w * (portrait ? 0.46 : 0.5), y: tCanvas.y + tCanvas.h * (portrait ? 0.6 : 0.64) };

  // Path: in from the left edge, a rest on each element, a drag on the canvas.
  const cursorSize = Math.max(u * (portrait ? 8.4 : 5.2), 24);
  const keys = [
    { f: 0, x: -cursorSize * 1.6, y: linkRest.y + H * 0.14 },
    { f: LINK, ...linkRest },
    { f: LINK + 16, ...linkRest },
    { f: TEXT, ...caret },
    { f: TEXT + 14, ...caret },
    { f: BUTTON, ...btnRest },
    { f: BUTTON + 16, ...btnRest },
    { f: CANVAS, ...A },
    { f: CANVAS + 3, ...A },
    { f: CANVAS + 17, ...B },
  ];
  const cur = pathAt(f, keys);
  const zoneOf = (p: Pt): Zone =>
    inside(p, linkZone, u * 0.6) ? "link" : inside(p, textZone, u * 0.4) ? "text" : inside(p, btnZone) ? "button" : inside(p, canvasZone) ? "canvas" : "none";
  const count: Record<Zone, number> = { none: 0, link: 0, text: 0, button: 0, canvas: 0 };
  for (let i = 0; i < BLEND; i++) count[zoneOf(pathAt(Math.max(0, f - i), keys))] += 1;
  const w = (z: Zone) => count[z] / BLEND;
  const shapes = { arrow: w("none"), hand: w("link") + w("button"), text: w("text"), cross: w("canvas") };

  // Element states. Each keeps its after-state, so the settled frame shows every stop.
  const underline = expoOut(prog(f, LINK - 2, LINK + 12));
  const linkInk = mix(accent, 0.72 * underline, s.ink);
  const clickAt = TEXT + 4;
  const caretOn = f >= clickAt && (f >= SETTLE - 18 || Math.floor((f - clickAt) / 9) % 2 === 0) ? 1 : 0;
  const hover = w("button");
  const fill = expoOut(prog(f, BUTTON - 3, BUTTON + 9));
  const btnLift = hover * u * (portrait ? 1.4 : 0.9);
  const pressAt = CANVAS + 3;
  const D = f < pressAt ? A : f >= CANVAS + 17 ? B : cur;
  const frameOn = f >= pressAt ? 1 : 0;
  const handles = expoOut(prog(f, CANVAS + 15, CANVAS + 20));
  const guides = w("canvas");

  // Name chip: the four names stacked in one row, each shown by the weight of its shape.
  const names = [0, 1, 2, 3].map((i) => cursorNames[i] ?? "");
  const nameShare = [shapes.arrow, shapes.hand, shapes.text, shapes.cross];
  const chipFs = Math.max(floor, u * 2.2);
  const rowH = chipFs * 1.55;
  // Width follows the name it shows; mono glyphs are 0.6em, so 0.63em never clips.
  const nameW = (i: number) => Math.max(3, Array.from(names[i]!).length) * 0.63 * chipFs + chipFs * 1.3;
  const chipW = nameShare.reduce((a, k, i) => a + k * nameW(i), 0);
  const chipX = Math.min(W - u * 3 - chipW, Math.max(u * 3, cur.x + cursorSize * 0.62));
  const chipY = Math.min(H - u * 3 - rowH, cur.y + cursorSize * 0.86);

  const enter = (i: number) => expoOut(prog(f, i * 3, i * 3 + 14));
  const badgeOf = [
    { at: LINK, z: "link" as Zone },
    { at: TEXT, z: "text" as Zone },
    { at: BUTTON, z: "button" as Zone },
    { at: CANVAS, z: "canvas" as Zone },
  ];
  const dotR = Math.max(1.2, u * 0.16);
  const grid = u * (portrait ? 4.2 : 3.2);
  const lineW = Math.max(1.5, u * 0.18);

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.7} />
      {tiles.map((t, i) => {
        const e = enter(i);
        const b = badgeOf[i]!;
        const active = w(b.z);
        const visited = prog(f, b.at - 2, b.at + 6);
        const iconInk = active > 0.5 ? inkOn(accent) : mix(accent, visited, s.faint);
        const iconSize = bs * 0.56;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px(t.x),
              top: px(t.y),
              width: px(t.w),
              height: px(t.h),
              borderRadius: radius,
              background: i === 3 ? `radial-gradient(circle, ${withAlpha(color, s.dark ? 0.2 : 0.16)} ${px(dotR)}px, transparent ${px(dotR + 0.6)}px) ${px(grid / 2)}px ${px(grid / 2)}px / ${px(grid)}px ${px(grid)}px, ${s.raised}` : s.card,
              boxShadow: s.shadow(u),
              overflow: "hidden",
              opacity: e,
              transform: e < 1 ? `translateY(${px((1 - e) * u * 3)}px)` : undefined,
            }}
          >
            {i === 3 ? (
              <>
                <div style={{ position: "absolute", left: px(cur.x - t.x - lineW / 2), top: 0, width: lineW, height: "100%", background: withAlpha(accent, 0.7), opacity: guides }} />
                <div style={{ position: "absolute", top: px(cur.y - t.y - lineW / 2), left: 0, height: lineW, width: "100%", background: withAlpha(accent, 0.7), opacity: guides }} />
                {frameOn ? (
                  <div
                    style={{
                      position: "absolute",
                      left: px(A.x - t.x),
                      top: px(A.y - t.y),
                      width: px(Math.max(0, D.x - A.x)),
                      height: px(Math.max(0, D.y - A.y)),
                      borderRadius: u * 0.6,
                      border: `${px(Math.max(2, u * 0.28))}px solid ${accent}`,
                      background: withAlpha(accent, 0.16),
                      boxSizing: "border-box",
                    }}
                  >
                    {[
                      [0, 0],
                      [1, 0],
                      [0, 1],
                      [1, 1],
                    ].map(([hx, hy], k) => {
                      const hs = u * (portrait ? 2 : 1.4) * handles;
                      return (
                        <div
                          key={k}
                          style={{
                            position: "absolute",
                            left: `calc(${hx! * 100}% - ${px(hs / 2)}px)`,
                            top: `calc(${hy! * 100}% - ${px(hs / 2)}px)`,
                            width: px(hs),
                            height: px(hs),
                            borderRadius: hs * 0.2,
                            background: s.card,
                            border: `${px(Math.max(1.5, u * 0.22) * handles)}px solid ${accent}`,
                            boxSizing: "border-box",
                          }}
                        />
                      );
                    })}
                  </div>
                ) : null}
              </>
            ) : null}
            <div
              style={{
                position: "absolute",
                left: bp,
                top: bp,
                width: bs,
                height: bs,
                borderRadius: bs * 0.3,
                display: "grid",
                placeItems: "center",
                background: mix(accent, active, s.raised),
                boxShadow: `0 0 0 1px ${mix(accent, Math.max(active, visited * 0.5), s.line)}`,
              }}
            >
              {i === 0 || i === 2 ? (
                <Icon name="pointer" size={iconSize} color={iconInk} strokeWidth={2} />
              ) : (
                <Glyph name={i === 1 ? "text-cursor" : "crosshair"} size={iconSize} color={iconInk} strokeWidth={2} />
              )}
            </div>
          </div>
        );
      })}

      {/* Link */}
      <div style={{ position: "absolute", left: px(cl.x), width: px(cl.w), top: px(linkCy - linkFs * 0.8), height: px(linkFs * 1.6), display: "flex", alignItems: "center", justifyContent: portrait ? "flex-start" : "center", opacity: enter(0) }}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: linkFs * 0.28 }}>
          <span data-21st-slot="linkLabel" style={{ fontFamily: font, fontSize: linkFs, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, whiteSpace: "nowrap", color: linkInk }}>
            {linkLabel}
          </span>
          <div style={{ transform: `translateX(${px(underline * linkFs * 0.14)}px)` }}>
            <Glyph name="arrow-right" size={linkFs * 0.78} color={linkInk} strokeWidth={2.4} />
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: -linkFs * 0.16, height: px(Math.max(2, linkFs * 0.08)), borderRadius: 99, background: accent, transform: `scaleX(${px(underline)})`, transformOrigin: "0 50%" }} />
        </div>
      </div>

      {/* Paragraph and caret */}
      <div style={{ position: "absolute", left: px(ct.x), top: px(paraTop), width: px(ct.w), opacity: enter(1) }}>
        <span data-21st-slot="paragraph" style={{ display: "block", fontFamily: font, fontSize: paraFs, fontWeight: 500, lineHeight: LH, letterSpacing: "-0.01em", color: s.muted }}>
          {paragraph.slice(0, caretAt)}
          <span style={{ position: "relative", display: "inline-block", width: 0, height: "1em" }}>
            <span style={{ position: "absolute", left: px(-Math.max(2, u * 0.3) / 2), top: "0.06em", width: px(Math.max(2, u * 0.3)), height: "1.16em", borderRadius: 99, background: accent, opacity: caretOn }} />
          </span>
          {paragraph.slice(caretAt)}
        </span>
      </div>
      <ClickRing x={caret.x} y={caret.y} size={cursorSize * 1.8} t={prog(f, clickAt, clickAt + 18)} color={accent} width={Math.max(2, u * 0.35)} />

      {/* Button */}
      <div
        style={{
          position: "absolute",
          left: px(btnX),
          top: px(btnY),
          width: px(btnW),
          height: px(btnH),
          borderRadius: btnH * 0.3,
          display: "grid",
          placeItems: "center",
          background: mix(accent, fill, s.raised),
          boxShadow: `0 0 0 1px ${mix(accent, fill, s.line)}, 0 ${px(btnLift * 1.6 + u * 0.4)}px ${px(btnH * (0.3 + 0.5 * hover))}px ${withAlpha(accent, 0.12 + 0.36 * hover)}`,
          transform: `translateY(${px(-btnLift)}px)`,
          opacity: enter(2),
        }}
      >
        <span data-21st-slot="buttonLabel" style={{ fontFamily: font, fontSize: btnFs, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2, whiteSpace: "nowrap", color: mix(inkOn(accent), fill, s.ink) }}>
          {buttonLabel}
        </span>
      </div>

      {/* Name chip */}
      <div
        style={{
          position: "absolute",
          left: px(chipX),
          top: px(chipY),
          width: px(chipW),
          height: px(rowH),
          borderRadius: rowH * 0.3,
          overflow: "hidden",
          background: mix(accent, 0.14, s.card),
          boxShadow: `0 0 0 1px ${withAlpha(accent, 0.45)}, 0 ${px(u * 0.8)}px ${px(u * 2.4)}px ${withAlpha(s.deep, s.dark ? 0.5 : 0.16)}`,
          opacity: prog(f, 6, 12),
          zIndex: 19,
        }}
      >
        {names.map((n, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: nameShare[i]!,
              transform: nameShare[i]! < 1 ? `translateY(${px((1 - nameShare[i]!) * rowH * 0.45)}px)` : undefined,
            }}
          >
            <span data-21st-slot="cursorNames" style={{ fontFamily: mono, fontSize: chipFs, fontWeight: 500, lineHeight: 1.2, whiteSpace: "nowrap", color: s.ink }}>
              {n}
            </span>
          </div>
        ))}
      </div>

      {/* The cursor: four shapes at one hot spot, cross-faded by where it has just been. */}
      {(
        [
          ["arrow", shapes.arrow],
          ["hand", shapes.hand],
          ["text", shapes.text],
          ["cross", shapes.cross],
        ] as const
      ).map(([k, o]) =>
        o > 0 ? (
          <AbsoluteFill key={k} style={{ transform: `scale(${px(0.8 + 0.2 * o)})`, transformOrigin: `${px(cur.x)}px ${px(cur.y)}px`, zIndex: 20 }}>
            {k === "arrow" || k === "hand" ? (
              <Cursor x={px(cur.x)} y={px(cur.y)} size={cursorSize} kind={k} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} opacity={o} />
            ) : (
              <ShapeCursor x={px(cur.x)} y={px(cur.y)} size={cursorSize * (k === "text" ? 0.92 : 1)} kind={k === "text" ? "text-cursor" : "crosshair"} ink={s.ink} halo={s.dark ? s.deep : inkOn(color)} opacity={o} />
            )}
          </AbsoluteFill>
        ) : null,
      )}
    </AbsoluteFill>
  );
};
