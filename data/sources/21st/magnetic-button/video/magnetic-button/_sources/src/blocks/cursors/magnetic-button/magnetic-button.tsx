// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ClickRing, Cursor, Glyph, Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./magnetic-button.meta";
import type { schema } from "./magnetic-button.schema";

const SETTLE = 70;
const CLICK = meta.timing.markers.click ?? 44;

export const Component: React.FC<z.infer<typeof schema>> = ({ kicker, label, doneLabel, hint, color, accent, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);

  // Geometry: the button sits in the middle, the kicker above and the hint below.
  const btnW = aspect === "16:9" ? W * 0.3 : aspect === "1:1" ? W * 0.62 : W * 0.86;
  const btnH = portrait ? u * 19 : u * 12.5;
  const longest = Math.max(Array.from(label).length, Array.from(doneLabel).length) + 2;
  const labelFs = Math.max(floor, fitFontSize({ chars: longest, boxW: btnW - btnH * 1.1, boxH: btnH * 0.6, charEm: 0.58, max: portrait ? u * 8.4 : u * 5 }));
  const kickerFs = Math.max(floor, labelFs * 0.62);
  const hintFs = Math.max(floor, labelFs * 0.56);
  const cx = W / 2;
  const cy = portrait ? H * 0.5 : H / 2;
  const left = cx - btnW / 2;
  const top = cy - btnH / 2;
  const kickerBottom = portrait ? H * 0.31 : top - u * 5;
  const hintTop = portrait ? H * 0.68 : top + btnH + u * 4.5;

  // The cursor arrives from the corner, rests on the button for the click, then backs off.
  const rest = { x: cx + btnW * 0.2, y: cy + btnH * 0.16 };
  const cur = pathAt(f, [
    { f: 4, x: W * 0.98, y: H * 1.06 },
    { f: 38, x: rest.x, y: rest.y },
    { f: 52, x: rest.x, y: rest.y },
    { f: 68, x: cx + btnW * (portrait ? 0.3 : 0.62), y: cy + btnH * (portrait ? 2.6 : 2.1) },
  ]);
  const cursorSize = Math.max(u * (portrait ? 8 : 5.2), 24);

  // Magnet: the button leans toward the cursor and grows a little as it gets close.
  const dx = cur.x - cx;
  const dy = cur.y - cy;
  const reach = Math.max(btnW * 0.85, btnH * 2.6);
  const pull = Math.pow(clamp01(1 - Math.hypot(dx, dy) / reach), 1.4) * 0.34;
  const down = press(f, CLICK);
  const scale = (1 + pull * 0.12) * (1 - 0.06 * down);
  const shift = { x: dx * pull, y: dy * pull };

  // The click fills the button from the cursor outward and swaps the label.
  const fill = expoOut(prog(f, CLICK, CLICK + 16));
  const swap = expoOut(prog(f, CLICK + 2, CLICK + 10));
  const hit = { x: rest.x - left, y: rest.y - top };
  const radius = fill * Math.hypot(btnW, btnH) * 1.05;
  const ink = inkOn(accent);
  const labelInk = swap > 0.5 ? ink : s.dark ? surfaceColor : inkOn(color);
  const arrowNudge = (pull / 0.34) * labelFs * 0.18 + expoOut(prog(f, CLICK + 4, CLICK + 18)) * labelFs * 0.28;

  const textStyle: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.2 };

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.6 + 0.4 * fill} />
      {kicker ? (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: H - kickerBottom, display: "flex", justifyContent: "center", opacity: prog(f, 0, 10), transform: `translateY(${px((1 - expoOut(prog(f, 0, 14))) * u * 2)}px)` }}>
          <span data-21st-slot="kicker" style={{ ...textStyle, fontSize: kickerFs, fontWeight: 500, color: s.muted, letterSpacing: "-0.01em" }}>
            {kicker}
          </span>
        </div>
      ) : null}
      <div
        style={{
          position: "absolute",
          left,
          top,
          width: btnW,
          height: btnH,
          transform: `translate(${px(shift.x)}px, ${px(shift.y)}px) scale(${px(scale)})`,
          opacity: prog(f, 0, 8),
        }}
      >
        <div style={{ position: "absolute", inset: -btnH * 0.4, borderRadius: btnH, background: withAlpha(accent, 0.22 * (pull / 0.34) + 0.3 * fill), filter: `blur(${px(btnH * 0.45)}px)` }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: btnH / 2,
            overflow: "hidden",
            background: color,
            boxShadow: `0 ${px(btnH * 0.16)}px ${px(btnH * 0.5)}px ${withAlpha(s.deep, s.dark ? 0.6 : 0.22)}`,
          }}
        >
          <div style={{ position: "absolute", left: hit.x - radius, top: hit.y - radius, width: radius * 2, height: radius * 2, borderRadius: "50%", background: accent }} />
          {[
            { key: "label", text: label, o: 1 - swap, y: -swap },
            { key: "doneLabel", text: doneLabel, o: swap, y: 1 - swap },
          ].map((row) => (
            <div key={row.key} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: labelFs * 0.4, opacity: row.o, transform: `translateY(${px(row.y * labelFs * 0.7)}px)` }}>
              <span data-21st-slot={row.key} style={{ ...textStyle, fontSize: labelFs, fontWeight: 600, letterSpacing: "-0.02em", color: labelInk }}>
                {row.text}
              </span>
              <div style={{ transform: `translateX(${px(arrowNudge)}px)` }}>
                <Glyph name="arrow-right" size={labelFs * 0.95} color={labelInk} strokeWidth={2.4} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ClickRing x={rest.x + shift.x} y={rest.y + shift.y} size={btnH * 3.2} t={prog(f, CLICK, CLICK + 24)} color={accent} width={Math.max(2, u * 0.45)} />
      {hint ? (
        <div style={{ position: "absolute", left: W * 0.08, right: W * 0.08, top: hintTop, display: "flex", justifyContent: "center", opacity: prog(f, 4, 14) }}>
          <span data-21st-slot="hint" style={{ ...textStyle, whiteSpace: portrait ? "normal" : "nowrap", textAlign: "center", fontSize: hintFs, fontWeight: 400, color: s.faint }}>
            {hint}
          </span>
        </div>
      ) : null}
      {f >= 4 ? <Cursor x={cur.x} y={cur.y} size={cursorSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
