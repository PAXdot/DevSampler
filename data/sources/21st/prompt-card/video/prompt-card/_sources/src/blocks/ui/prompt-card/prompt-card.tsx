// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill, interpolate } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Ripple, pathAt, press } from "../shared/cursor";
import { Icon } from "../shared/icons";
import { palette } from "../shared/theme";
import { meta } from "./prompt-card.meta";
import type { schema } from "./prompt-card.schema";

const T0 = meta.timing.markers.typing ?? 16;

export const Component: React.FC<z.infer<typeof schema>> = ({ title, placeholder, prompt, typingSpeed, caretCam, cursor, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  // Geometry: one card, sized by the region.
  const cardW = Math.min(w * 0.92, h * 1.7);
  const cardH = portraitLayout ? h * 0.76 : Math.min(h * 0.86, cardW * 0.38);
  const pad = portraitLayout ? u * 5 : cardH * 0.11;
  const headH = portraitLayout ? nativeFont * 2.7 : cardH * 0.16;
  const footH = portraitLayout ? nativeFont * 2.5 : cardH * 0.2;
  const fieldH = cardH - pad * 2 - headH - footH - pad * 0.6;
  const textW = cardW - pad * 2;
  const fs = Math.max(nativeFont, fitFontSize({ chars: Math.max(prompt.length, placeholder.length) + 2, boxW: textW, boxH: fieldH * 0.92, lines: 3, charEm: 0.52, lineHeight: 1.32, max: u * 4.4 }));
  const titleFs = Math.max(nativeFont, fitFontSize({ chars: title.length + 4, boxW: cardW - pad * 2, boxH: headH, charEm: 0.55, max: fs * 0.82 }));

  // Typing timeline.
  const typeLen = Math.ceil(prompt.length / typingSpeed);
  const typeEnd = T0 + typeLen;
  const typed = Math.max(0, Math.min(prompt.length, Math.floor((frame - T0) * typingSpeed)));
  const done = ramp(frame, [typeEnd, typeEnd + 4], [0, 1]);
  const sendAt = Math.max(typeEnd + 14, meta.timing.markers.send ?? 70);

  // Entrance: hairline grows wide, then opens into a pill and the full card.
  const wLine = expoOut(frame / 6);
  const open = expoOut((frame - 3) / 12);
  const curH = interpolate(open, [0, 0.35, 1], [2, cardH * 0.34, cardH]);
  const inner = band(frame, 9, 15);
  const focus = ramp(frame, [T0 - 2, T0 + 3], [0, 1]);

  // Caret: estimated position (chars per line from the measured box) for the camera.
  const perLine = Math.max(1, Math.floor(textW / (fs * 0.52)));
  const caretAt = (n: number) => ({
    x: pad + (n % perLine) * fs * 0.52,
    y: pad + headH + pad * 0.5 + (Math.floor(n / perLine) + 0.5) * fs * 1.32,
  });
  let cx = 0;
  let cy = 0;
  for (let k = 0; k < 6; k++) {
    const n = Math.max(0, Math.min(prompt.length, Math.floor((frame - k - T0) * typingSpeed)));
    const c = caretAt(n);
    cx += c.x / 6;
    cy += c.y / 6;
  }
  const zoom = caretCam ? Math.min(expoOut((frame - T0 + 6) / 12), 1 - expoOut((frame - typeEnd) / 12)) : 0;
  const S = 1 + 1.15 * zoom;
  // Card-local caret -> region coords (card is centered), then keep it near the center while zoomed.
  const cardX = (w - cardW) / 2;
  const cardY = (h - cardH) / 2;
  const caret = { x: cardX + cx, y: cardY + cy };
  const goal = { x: caret.x + (w / 2 - caret.x) * zoom, y: caret.y + (h / 2 - caret.y) * zoom };
  const tx = goal.x - S * caret.x;
  const ty = goal.y - S * caret.y;

  // Cursor arrives once typing is done, clicks send.
  const sendR = footH * 0.36;
  const send = { x: cardX + cardW - pad - sendR, y: cardY + cardH - pad - sendR };
  const keys = [
    { f: sendAt - 22, x: w * 1.04, y: h * 1.08 },
    { f: sendAt - 3, x: send.x + sendR * 0.15, y: send.y + sendR * 0.2 },
    { f: sendAt + 26, x: send.x + sendR * 1.6, y: send.y + sendR * 1.4 },
  ];
  const cur = pathAt(frame, keys, 0.16);
  const dip = cursor ? press(frame, sendAt) : 0;
  const sent = cursor ? ramp(frame, [sendAt + 1, sendAt + 4], [0, 1]) : 0;
  const leave = 1 - exit;
  const blink = frame < typeEnd + 2 ? 1 : Math.floor((frame - typeEnd) / 14) % 2 === 0 ? 1 : 0.15;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transformOrigin: "0 0", transform: `translate(${tx}px, ${ty}px) scale(${S})` }}>
        <div
          style={{
            position: "absolute",
            left: cardX + (cardW * (1 - wLine)) / 2,
            top: cardY + (cardH - curH) / 2,
            width: cardW * wLine,
            height: curH,
            borderRadius: Math.min(curH / 2, u * 2.6),
            background: p.surface,
            boxShadow: `${p.shadow(u)}, 0 0 0 ${Math.max(1, u * 0.2) * focus}px ${withAlpha(accent, 0.85 * focus)}, 0 0 0 ${u * 0.9 * focus}px ${withAlpha(accent, 0.14 * focus)}`,
            overflow: "hidden",
            opacity: band(frame, 0, 3) * leave,
            transform: `scale(${1 - exit * 0.05})`,
          }}
        >
          <div style={{ position: "absolute", left: 0, top: (curH - cardH) / 2, width: cardW, height: cardH, padding: pad, opacity: inner, display: "flex", flexDirection: "column", gap: pad * 0.3 }}>
            <div style={{ height: headH, display: "flex", alignItems: "center", gap: titleFs * 0.5 }}>
              <Icon name="sparkles" size={titleFs * 1.1} color={accent} strokeWidth={2} />
              <span data-21st-slot="title" style={{ fontFamily: font, fontWeight: 500, fontSize: titleFs, letterSpacing: "-0.01em", color: p.muted, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                {title}
              </span>
            </div>
            <div
              style={{
                position: "relative",
                height: fieldH + pad * 0.6,
                padding: `${pad * 0.2}px 0`,
              }}
            >
              <div style={{ position: "relative", fontFamily: font, fontSize: fs, lineHeight: 1.32, letterSpacing: "-0.01em", fontWeight: 400 }}>
                <span data-21st-slot="placeholder" style={{ position: "absolute", left: 0, top: 0, right: 0, color: p.faint, opacity: typed > 0 ? 0 : 1, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                  {placeholder}
                </span>
                <span data-21st-slot="prompt" style={{ color: p.ink, overflowWrap: "break-word" }}>
                  {prompt.slice(0, typed)}
                  <span
                    style={{
                      display: "inline-block",
                      width: Math.max(1.5, fs * 0.08),
                      height: fs * 1.15,
                      marginLeft: fs * 0.04,
                      verticalAlign: "text-bottom",
                      background: accent,
                      borderRadius: 2,
                      opacity: frame >= T0 - 2 && sent < 1 ? blink : 0,
                    }}
                  />
                </span>
              </div>
            </div>
            <div style={{ height: footH, display: "flex", alignItems: "center", gap: footH * 0.22 }}>
              {(["paperclip", "image", "globe"] as const).map((n) => (
                <div key={n} style={{ width: footH * 0.66, height: footH * 0.66, borderRadius: footH * 0.2, display: "grid", placeItems: "center", background: p.raised }}>
                  <Icon name={n} size={footH * 0.3} color={p.muted} />
                </div>
              ))}
              <div style={{ flex: 1 }} />
              <div
                style={{
                  width: sendR * 2,
                  height: sendR * 2,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: done > 0 ? withAlpha(accent, 0.25 + 0.75 * done) : p.bone,
                  transform: `scale(${1 - 0.08 * dip})`,
                }}
              >
                {sent > 0.5 ? (
                  <div style={{ transform: `rotate(${(frame - sendAt) * 22}deg)` }}>
                    <Icon name="loader-circle" size={sendR} color={inkOn(accent)} strokeWidth={2.6} />
                  </div>
                ) : (
                  <Icon name="arrow-up" size={sendR} color={done > 0.5 ? inkOn(accent) : p.faint} strokeWidth={2.4} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {cursor ? (
        <>
          <Ripple x={send.x} y={send.y} t={ramp(frame, [sendAt, sendAt + 12], [0, 1])} radius={sendR * 2.2} color={accent} />
          <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={u * 5.2} down={dip} opacity={band(frame, keys[0]!.f + 2, keys[0]!.f + 6) * leave} />
        </>
      ) : null}
    </AbsoluteFill>
  );
};
