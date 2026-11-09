// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Ripple, pathAt, press, type Key } from "../shared/cursor";
import { Icon } from "../shared/icons";
import { Media, palette } from "../shared/theme";
import { meta } from "./multi-cursor.meta";
import type { schema } from "./multi-cursor.schema";


export const Component: React.FC<z.infer<typeof schema>> = ({ names, headline, cta, image, theme, accent, fontFamily, selectColor, clickColor, resizeColor, wanderColor, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);
  const COLORS = [selectColor, clickColor, resizeColor, wanderColor];
  const portrait = aspect === "9:16";

  const boardW = Math.min(w * 0.94, h * 0.94 * (portrait ? 0.8 : 1.55));
  const boardH = Math.min(h * 0.94, boardW / (portrait ? 0.8 : 1.55));
  const bx = (w - boardW) / 2;
  const by = (h - boardH) / 2;
  const B = (x: number, y: number) => ({ x: bx + boardW * x, y: by + boardH * y });
  const pad = boardW * 0.07;

  // Canvas objects (board fractions). Portrait stacks the image under the text.
  const head = portrait ? { x: 0.08, y: 0.08, w: 0.84, h: 0.24 } : { x: 0.07, y: 0.18, w: 0.5, h: 0.24 };
  const btn = portrait ? { x: 0.08, y: 0.36, w: 0.65, h: 0.13 } : { x: 0.07, y: 0.54, w: 0.24, h: 0.11 };
  const img0 = portrait ? { x: 0.3, y: 0.52, w: 0.62, h: 0.32 } : { x: 0.64, y: 0.12, w: 0.29, h: 0.44 };
  const grow = easeInOut((frame - 34) / 18);
  const img = { x: img0.x - (portrait ? 0.18 : 0.025) * grow, y: img0.y, w: img0.w + (portrait ? 0.18 : 0.025) * grow, h: img0.h + (portrait ? 0.08 : 0.2) * grow };

  const hFs = Math.max(nativeFont, fitFontSize({ chars: headline.length, boxW: boardW * head.w, boxH: boardH * head.h, lines: 2, charEm: 0.55, lineHeight: 1.05, max: u * 7 }));
  const cFs = Math.max(nativeFont, fitFontSize({ chars: cta.length + 4, boxW: boardW * btn.w * 0.8, boxH: boardH * btn.h * 0.4, charEm: 0.55, max: boardH * btn.h * 0.34 }));
  const cursorSize = Math.max(u * 3.6, boardH * 0.05);

  // A: marquee-selects the headline.
  const hs = B(head.x - 0.02, head.y - 0.03);
  const he = B(head.x + head.w + 0.01, head.y + head.h + 0.02);
  const aKeys: Key[] = [
    { f: 4, x: bx - u * 4, y: B(0, 0.5).y },
    { f: 20, ...hs },
    { f: 22, ...hs },
    { f: 38, ...he },
    { f: 70, x: he.x - boardW * 0.04, y: he.y + boardH * 0.04 },
  ];
  const marquee = ramp(frame, [22, 38], [0, 1]);
  const selected = frame >= 38;
  // B: clicks the button.
  const bt = B(btn.x + btn.w * 0.66, btn.y + btn.h * 0.6);
  const bKeys: Key[] = [
    { f: 10, x: B(0.4, 0).x, y: h + u * 4 },
    { f: 40, ...bt },
    { f: 76, x: bt.x + boardW * 0.05, y: bt.y + boardH * 0.06 },
  ];
  const CLICK_B = 44;
  const btnOn = ramp(frame, [CLICK_B + 1, CLICK_B + 5], [0, 1]);
  // C: drags the image corner outward.
  const corner = (g: number) => {
    const x0 = img0.x - (portrait ? 0.18 : 0.025) * g;
    const y1 = img0.y + img0.h + (portrait ? 0.08 : 0.2) * g;
    return B(x0, y1);
  };
  const cKeys: Key[] = [
    { f: 6, x: w + u * 4, y: B(0, 0.85).y },
    { f: 32, ...corner(0) },
  ];
  const cPos = frame < 34 ? pathAt(frame, cKeys) : frame < 54 ? corner(grow) : pathAt(frame, [{ f: 54, ...corner(1) }, { f: 84, x: corner(1).x + boardW * 0.05, y: corner(1).y - boardH * 0.06 }]);
  // D: wanders.
  const dPos = pathAt(frame, [
    { f: 14, x: B(0.5, 0).x, y: -u * 4 },
    { f: 36, ...B(0.42, 0.72) },
    { f: 60, ...B(0.5, 0.86) },
    { f: 90, ...B(0.36, 0.78) },
  ]);

  const cursors = [
    { pos: pathAt(frame, aKeys), down: frame >= 22 && frame < 38 ? 0.6 : press(frame, 21) },
    { pos: pathAt(frame, bKeys), down: press(frame, CLICK_B) },
    { pos: cPos, down: frame >= 33 && frame < 53 ? 0.6 : press(frame, 32) },
    { pos: dPos, down: 0 },
  ].slice(0, names.length);

  const bIn = expoOut(frame / 10);
  const leave = 1 - exit;
  const cA = COLORS[0]!;
  const cB = COLORS[1]!;
  const cC = COLORS[2]!;
  const rect = (r: { x: number; y: number; w: number; h: number }) => ({ left: boardW * r.x, top: boardH * r.y, width: boardW * r.w, height: boardH * r.h });
  const handle = (x: number, y: number, c: string, k: string) => (
    <div key={k} style={{ position: "absolute", left: x - u * 0.6, top: y - u * 0.6, width: u * 1.2, height: u * 1.2, background: p.surface, border: `${Math.max(1.5, u * 0.2)}px solid ${c}`, borderRadius: u * 0.2 }} />
  );
  const sx0 = Math.min(hs.x, hs.x + (he.x - hs.x) * marquee) - bx;
  const sy0 = Math.min(hs.y, hs.y + (he.y - hs.y) * marquee) - by;
  const sw = Math.abs(he.x - hs.x) * marquee;
  const sh = Math.abs(he.y - hs.y) * marquee;

  return (
    <AbsoluteFill style={{ opacity: leave }}>
      <div
        style={{
          position: "absolute",
          left: bx,
          top: by,
          width: boardW,
          height: boardH,
          borderRadius: u * 2,
          background: p.surface,
          boxShadow: p.shadow(u),
          overflow: "hidden",
          opacity: band(frame, 0, 6),
          transform: `translateY(${(1 - bIn) * u * 3}px) scale(${(0.96 + 0.04 * bIn) * (1 - 0.04 * exit)})`,
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${p.bone} ${Math.max(1, u * 0.18)}px, transparent ${Math.max(1, u * 0.18)}px)`, backgroundSize: `${u * 3}px ${u * 3}px` }} />
        <div style={{ position: "absolute", ...rect(head), display: "flex", alignItems: "center" }}>
          <span data-21st-slot="headline" style={{ fontFamily: font, fontSize: hFs, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.035em", color: p.ink }}>
            {headline}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            ...rect(btn),
            borderRadius: boardH * btn.h * 0.3,
            background: btnOn > 0 ? `linear-gradient(0deg, ${withAlpha(cB, btnOn)}, ${withAlpha(cB, btnOn)}), ${p.ink}` : p.ink,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: cFs * 0.4,
            transform: `scale(${1 - 0.05 * press(frame, CLICK_B)})`,
          }}
        >
          <span data-21st-slot="cta" style={{ fontFamily: font, fontSize: cFs, fontWeight: 600, color: btnOn > 0.5 ? inkOn(cB) : p.surface, lineHeight: 1.25, maxWidth: boardW * btn.w * 0.78, textAlign: "center", whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
            {cta}
          </span>
          <Icon name="arrow-right" size={cFs} color={btnOn > 0.5 ? inkOn(cB) : p.surface} />
        </div>
        <div style={{ position: "absolute", ...rect(img), borderRadius: u * 1.2, overflow: "hidden", background: `linear-gradient(135deg, ${withAlpha(accent, 0.9)}, ${withAlpha(wanderColor, 0.7)} 55%, ${withAlpha(selectColor, 0.65)})` }}>
          {image ? <Media src={image} position="50% 50%" /> : <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 25%, ${withAlpha(p.ink, 0.45)}, transparent 50%)` }} />}
        </div>
        {/* C's resize frame */}
        {frame >= 32 ? (
          <div style={{ position: "absolute", ...rect(img), border: `${Math.max(1.5, u * 0.22)}px solid ${cC}`, borderRadius: u * 1.2, opacity: 1 - ramp(frame, [70, 80], [0, 1]) }}>
            {handle(0, boardH * img.h, cC, "c1")}
          </div>
        ) : null}
        {/* A's marquee, then a committed selection */}
        {frame >= 22 ? (
          <div
            style={{
              position: "absolute",
              left: sx0,
              top: sy0,
              width: sw,
              height: sh,
              border: `${Math.max(1.5, u * 0.2)}px ${selected ? "solid" : "dashed"} ${cA}`,
              background: withAlpha(cA, selected ? 0.04 : 0.08),
            }}
          >
            {selected ? [handle(0, 0, cA, "a1"), handle(sw, 0, cA, "a2"), handle(0, sh, cA, "a3"), handle(sw, sh, cA, "a4")] : null}
          </div>
        ) : null}
        <Ripple x={bt.x - bx} y={bt.y - by} t={ramp(frame, [CLICK_B, CLICK_B + 12], [0, 1])} radius={boardH * btn.h} color={cB} />
      </div>
      {cursors.map((c, i) => (
        <React.Fragment key={i}><Cursor
          key={i}
          x={c.pos.x}
          y={c.pos.y}
          size={cursorSize}
          fill={COLORS[i]!}
          stroke={inkOn(COLORS[i]!)}
          
          font={font}
          down={c.down}
          opacity={band(frame, 4 + i * 3, 8 + i * 3)}
        /><div data-21st-slot="names" style={{ position: "absolute", left: Math.max(u * 3, Math.min(w - nativeFont * (names[i]!.length * 0.65 + 1.2) - u * 3, c.pos.x + cursorSize * 0.8)), top: Math.max(u * 3, Math.min(h - nativeFont * 1.9 - u * 3, c.pos.y + cursorSize * 0.9)), fontFamily: font, fontSize: nativeFont, fontWeight: 600, lineHeight: 1.25, padding: `${nativeFont * 0.2}px ${nativeFont * 0.5}px`, borderRadius: nativeFont * 0.35, color: inkOn(COLORS[i]!), background: COLORS[i], opacity: band(frame, 4 + i * 3, 8 + i * 3), zIndex: 21 }}>{names[i]}</div></React.Fragment>
      ))}
    </AbsoluteFill>
  );
};
