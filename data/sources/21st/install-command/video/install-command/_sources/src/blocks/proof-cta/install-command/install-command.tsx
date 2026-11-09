// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, pathAt, press as pressAt } from "../../ui/shared/cursor";
import { Glyph, Ground, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./install-command.meta";
import type { schema } from "./install-command.schema";

const SETTLE = 80;
const TYPE_AT = 12;

export const Component: React.FC<z.infer<typeof schema>> = ({ eyebrow, tabs, command, copiedLabel, hint, color, accent, surfaceColor, background, fontFamily, monoFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const head = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);

  // Timeline.
  const chars = Array.from(command);
  const per = Math.min(1.3, 24 / Math.max(1, chars.length));
  const typedEnd = TYPE_AT + chars.length * per;
  const CLICK = Math.round(typedEnd + 14);
  const typed = chars.slice(0, Math.max(0, Math.min(chars.length, Math.floor((f - TYPE_AT) / per) + 1))).join("");
  const copied = f >= CLICK;

  // Geometry: the box is centered; the label sits above it and the hint below.
  const boxW = aspect === "16:9" ? W * 0.62 : aspect === "1:1" ? W * 0.84 : W * 0.9;
  const pad = u * (portrait ? 4.4 : 3);
  const btn = Math.max(floor * 1.8, u * (portrait ? 11 : 7.2));
  const textW = boxW - pad * 2 - btn - pad * 0.8;
  const cmdFs = Math.max(floor, fitFontSize({ chars: chars.length + 2, boxW: textW, boxH: u * 20, charEm: 0.62, max: u * (portrait ? 6.6 : 5.2) }));
  const perLine = Math.max(1, Math.floor(textW / (cmdFs * 0.62)));
  const cmdLines = Math.ceil((chars.length + 2) / perLine);
  const rowH = Math.max(btn, cmdLines * cmdFs * 1.3) + pad * 2;
  const tabFs = Math.max(floor, cmdFs * 0.72);
  const tabH = tabs.length ? tabFs * 1.25 + pad * 1.3 : 0;
  const boxH = tabH + rowH;
  const boxLeft = (W - boxW) / 2;
  const boxTop = H / 2 - boxH / 2 + (portrait ? 0 : u * 1.5);
  const eyebrowFs = Math.max(floor, u * (portrait ? 6.6 : 4.6));
  const hintFs = Math.max(floor, cmdFs * 0.78);
  const gapOut = portrait ? H * 0.12 : u * 5;

  // Copy button and cursor.
  const bx = boxLeft + boxW - pad - btn / 2;
  const by = boxTop + tabH + rowH / 2;
  const cursorSize = Math.max(u * (portrait ? 7 : 4.6), 24);
  const keys = [
    { f: CLICK - 22, x: W * 0.96, y: H * 1.05 },
    { f: CLICK - 2, x: bx + btn * 0.05, y: by + btn * 0.08 },
    { f: CLICK + 10, x: bx + btn * 0.05, y: by + btn * 0.08 },
    { f: CLICK + 28, x: bx + btn * 0.7, y: by + btn * 1.1 },
  ];
  const cur = pathAt(f, keys);
  const down = pressAt(f, CLICK);
  const box = springSnap(f, fps, 0, { damping: 16, stiffness: 120, mass: 0.9 });
  const check = springSnap(f, fps, CLICK, { damping: 10, stiffness: 200, mass: 0.6 });
  const tip = springSnap(f, fps, CLICK + 1, { damping: 12, stiffness: 180, mass: 0.7 });
  const select = expoOut(prog(f, CLICK, CLICK + 8)) * (1 - prog(f, CLICK + 18, CLICK + 30));
  const tipFs = Math.max(floor, cmdFs * 0.7);

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} />
      {eyebrow ? (
        <div
          style={{
            position: "absolute",
            left: boxLeft,
            width: boxW,
            bottom: H - boxTop + gapOut,
            display: "flex",
            justifyContent: portrait ? "center" : "flex-start",
            opacity: prog(f, 2, 10),
            transform: `translateY(${px((1 - expoOut(prog(f, 2, 14))) * u * 2)}px)`,
          }}
        >
          <span data-21st-slot="eyebrow" style={{ fontFamily: head, fontWeight: 600, fontSize: eyebrowFs, lineHeight: 1.15, letterSpacing: "-0.03em", color: s.ink, textAlign: portrait ? "center" : "left" }}>
            {eyebrow}
          </span>
        </div>
      ) : null}
      <div
        style={{
          position: "absolute",
          left: boxLeft,
          top: boxTop,
          width: boxW,
          height: boxH,
          borderRadius: u * (portrait ? 3 : 2),
          background: s.card,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 6),
          transform: box < 1 ? `translateY(${px((1 - box) * u * 5)}px) scale(${px(0.96 + 0.04 * box)})` : undefined,
        }}
      >
        {tabs.length ? (
          <div style={{ height: tabH, display: "flex", alignItems: "flex-end", gap: tabFs * 1.1, padding: `0 ${pad}px`, borderBottom: `1px solid ${s.line}`, boxSizing: "border-box" }}>
            {tabs.map((t, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: pad * 0.55 }}>
                <span data-21st-slot="tabs" style={{ fontFamily: mono, fontSize: tabFs, lineHeight: 1.25, color: i === 0 ? s.ink : s.faint, fontWeight: i === 0 ? 600 : 400 }}>
                  {t}
                </span>
                {i === 0 ? <div style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: Math.max(2, u * 0.3), borderRadius: 99, background: accent, transform: `scaleX(${px(expoOut(prog(f, 6, 16)))})` }} /> : null}
              </div>
            ))}
          </div>
        ) : null}
        <div style={{ height: rowH, display: "flex", alignItems: "center", gap: pad * 0.8, padding: `0 ${pad}px`, boxSizing: "border-box" }}>
          <div style={{ flex: 1, minWidth: 0, fontFamily: mono, fontSize: cmdFs, lineHeight: 1.3, color: s.ink, display: "flex", gap: cmdFs * 0.6 }}>
            <span style={{ color: accent, flexShrink: 0 }}>$</span>
            <span style={{ position: "relative", minWidth: 0 }}>
              <span
                style={{
                  position: "absolute",
                  left: -cmdFs * 0.12,
                  top: 0,
                  bottom: 0,
                  width: `calc(${px(select * 100)}% + ${px(cmdFs * 0.24)}px)`,
                  borderRadius: cmdFs * 0.14,
                  background: withAlpha(accent, s.dark ? 0.32 : 0.2),
                  opacity: select > 0 ? 1 : 0,
                }}
              />
              <span data-21st-slot="command" style={{ position: "relative", overflowWrap: "anywhere" }}>
                {copied ? command : typed}
              </span>
              {!copied ? <span style={{ position: "relative", display: "inline-block", width: cmdFs * 0.56, height: cmdFs * 1.1, verticalAlign: "middle", marginLeft: cmdFs * 0.04, background: withAlpha(color, 0.8), opacity: f < typedEnd || Math.floor(f / 8) % 2 === 0 ? 1 : 0 }} /> : null}
            </span>
          </div>
          <div
            style={{
              position: "relative",
              width: btn,
              height: btn,
              flexShrink: 0,
              borderRadius: btn * 0.26,
              display: "grid",
              placeItems: "center",
              background: copied ? accent : s.raised,
              boxShadow: `0 0 0 1px ${copied ? withAlpha(accent, 0.6) : s.line}${copied ? `, 0 ${px(btn * 0.1)}px ${px(btn * 0.5)}px ${withAlpha(accent, 0.35)}` : ""}`,
              transform: `scale(${px(1 - 0.08 * down)})`,
            }}
          >
            {copied ? (
              <div style={{ transform: `scale(${px(Math.max(0, check))})` }}>
                <Glyph name="check" size={btn * 0.46} color={inkOn(accent)} strokeWidth={2.8} />
              </div>
            ) : (
              <Glyph name="copy" size={btn * 0.42} color={s.muted} strokeWidth={2} />
            )}
            {copied ? (
              <div
                style={{
                  position: "absolute",
                  bottom: btn + u * 1.2,
                  right: portrait ? 0 : "50%",
                  transform: `translateX(${portrait ? 0 : "50%"}) translateY(${px((1 - tip) * u * 1.5)}px) scale(${px(0.6 + 0.4 * Math.max(0, tip))})`,
                  transformOrigin: portrait ? "100% 100%" : "50% 100%",
                  opacity: prog(f, CLICK + 1, CLICK + 4),
                  display: "flex",
                  alignItems: "center",
                  gap: tipFs * 0.35,
                  padding: `${px(tipFs * 0.35)}px ${px(tipFs * 0.7)}px`,
                  borderRadius: tipFs,
                  background: s.ink,
                  whiteSpace: "nowrap",
                }}
              >
                <Glyph name="check" size={tipFs * 0.9} color={accent} strokeWidth={3} />
                <span data-21st-slot="copiedLabel" style={{ fontFamily: head, fontWeight: 600, fontSize: tipFs, lineHeight: 1.2, color: surfaceColor }}>
                  {copiedLabel}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {hint ? (
        <div
          style={{
            position: "absolute",
            left: boxLeft,
            width: boxW,
            top: boxTop + boxH + gapOut * (portrait ? 1 : 0.7),
            display: "flex",
            justifyContent: portrait ? "center" : "flex-start",
            opacity: prog(f, CLICK + 12, CLICK + 20),
            transform: `translateY(${px((1 - expoOut(prog(f, CLICK + 12, CLICK + 24))) * u * 1.5)}px)`,
          }}
        >
          <span data-21st-slot="hint" style={{ fontFamily: mono, fontSize: hintFs, lineHeight: 1.3, color: s.muted, textAlign: portrait ? "center" : "left" }}>
            {hint}
          </span>
        </div>
      ) : null}
      {f >= keys[0]!.f ? <Cursor x={cur.x} y={cur.y} size={cursorSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
