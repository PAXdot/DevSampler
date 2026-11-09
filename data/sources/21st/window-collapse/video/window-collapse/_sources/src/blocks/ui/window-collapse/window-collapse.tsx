// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, pathAt, press } from "../shared/cursor";
import { Icon } from "../shared/icons";
import { Media, palette } from "../shared/theme";
import { WindowFrame, barHeight } from "../shared/window";
import { meta } from "./window-collapse.meta";
import type { schema } from "./window-collapse.schema";



export const Component: React.FC<z.infer<typeof schema>> = ({ image, title, heading, body, collapseAt, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  const ratio = aspect === "16:9" ? 1.55 : aspect === "9:16" ? 0.8 : 1.25;
  let winW = Math.min(w * 0.9, h * 0.9 * ratio);
  let winH = portraitLayout ? h * 0.88 : winW / ratio;
  if (winH > h * 0.9) {
    winH = h * 0.9;
    winW = winH * ratio;
  }
  const wx = (w - winW) / 2;
  const wy = (h - winH) / 2;
  const bar = Math.max(barHeight("window", winW, winH), nativeFont * (Math.max(1, Math.ceil((title.length + 2) * nativeFont * 0.56 / (winW * 0.72))) * 1.25 + 0.7));
  const DOTS = [accent, withAlpha(p.ink, 0.42), withAlpha(accent, 0.45)];
  const dot = Math.min(bar * 0.26, winW * 0.018);
  const dgap = dot * 0.7;
  const dotsX = wx + winW * 0.025;
  const dotsY = wy + bar / 2;
  const close = { x: dotsX + dot / 2, y: dotsY };

  const CLICK = collapseAt;
  const t = ramp(frame, [CLICK + 2, CLICK + 14], [0, 1]);
  const k = t * t * t; // ease-in collapse
  const winIn = expoOut(frame / 12);
  const hoverDots = ramp(frame, [CLICK - 8, CLICK - 4], [0, 1]);
  const dotsOut = 0; // The collapsed three-dot state holds for the rest of its parent clip.
  const leave = 1 - exit;

  const cur = pathAt(frame, [
    { f: CLICK - 22, x: w * 1.04, y: h * 0.7 },
    { f: CLICK - 3, x: close.x + dot * 0.1, y: close.y + dot * 0.15 },
    { f: CLICK + 34, x: close.x + winW * 0.18, y: close.y + winH * 0.22 },
  ]);
  const dip = press(frame, CLICK);

  const pad = winW * 0.07;
  const contentH = winH - bar;
  const hFs = Math.max(nativeFont, fitFontSize({ chars: heading.length, boxW: winW - pad * 2, boxH: contentH * 0.22, lines: 2, charEm: 0.55, lineHeight: 1.1, max: u * 6 }));
  const bFs = Math.max(nativeFont, fitFontSize({ chars: body.length, boxW: winW - pad * 2, boxH: contentH * 0.42, lines: 6, charEm: 0.5, lineHeight: 1.5, max: hFs * 0.5 }));

  return (
    <AbsoluteFill>
      {k < 1 ? (
        <div
          style={{
            position: "absolute",
            left: wx,
            top: wy,
            opacity: band(frame, 0, 6) * leave * (1 - ramp(t, [0.85, 1], [0, 1])),
            transformOrigin: `${close.x - wx + dot * 1.4}px ${close.y - wy}px`,
            transform: `translateY(${(1 - winIn) * u * 3}px) scale(${(0.95 + 0.05 * winIn) * (1 - k)}, ${(0.95 + 0.05 * winIn) * Math.max(0, 1 - k * 1.08)})`,
          }}
        >
          <WindowFrame w={winW} h={winH} chrome="window" title={title} p={p} font={font} radius={u * 1.8} minFontSize={nativeFont} lights={<div style={{ width: dot * 3 + dgap * 2, height: dot }} />}>
            {({ w: cw, h: ch }) =>
              image ? (
                <Media src={image} />
              ) : (
                <div style={{ position: "absolute", inset: 0, padding: pad, display: "flex", flexDirection: "column", gap: pad * 0.35, width: cw, height: ch }}>
                  <div style={{ width: pad * 0.6, height: pad * 0.6, borderRadius: pad * 0.16, background: withAlpha(accent, 0.14), display: "grid", placeItems: "center" }}>
                    <Icon name="file-text" size={pad * 0.34} color={accent} />
                  </div>
                  <span data-21st-slot="heading" style={{ fontFamily: font, fontSize: hFs, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: p.ink }}>
                    {heading}
                  </span>
                  <span data-21st-slot="body" style={{ fontFamily: font, fontSize: bFs, lineHeight: 1.5, color: p.muted }}>
                    {body}
                  </span>
                </div>
              )
            }
          </WindowFrame>
        </div>
      ) : null}
      {/* The three dots stay behind after the window collapses into them. */}
      <div
        style={{
          position: "absolute",
          left: dotsX,
          top: dotsY - dot / 2,
          display: "flex",
          gap: dgap,
          opacity: band(frame, 0, 6) * (1 - dotsOut) * leave,
          transform: `translateY(${(1 - winIn) * u * 3}px) scale(${1 + 0.6 * expoOut(t) - 0.6 * dotsOut})`,
          transformOrigin: "0% 50%",
        }}
      >
        {DOTS.map((c, i) => (
          <div key={c} style={{ width: dot, height: dot, borderRadius: "50%", background: c, display: "grid", placeItems: "center", transform: i === 0 ? `scale(${1 - 0.15 * dip})` : undefined }}>
            {hoverDots > 0 && i === 0 ? <Icon name="x" size={dot * 0.7} color={withAlpha(inkOn(accent), 0.75 * hoverDots)} strokeWidth={3.2} /> : null}
          </div>
        ))}
      </div>
      <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={Math.max(u * 4.2, bar * 0.55)} down={dip} opacity={band(frame, CLICK - 20, CLICK - 16) * leave} />
    </AbsoluteFill>
  );
};
