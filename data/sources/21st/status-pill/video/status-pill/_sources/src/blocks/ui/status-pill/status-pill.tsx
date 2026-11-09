// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../shared/icons";
import { palette } from "../shared/theme";
import { meta } from "./status-pill.meta";
import type { schema } from "./status-pill.schema";

const Ring: React.FC<{ t: number; size: number; color: string }> = ({ t, size, color }) =>
  t > 0 && t < 1 ? (
    <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `${Math.max(1.5, size * 0.12)}px solid ${color}`, transform: `scale(${1 + 2.2 * expoOut(t)})`, opacity: 1 - t }} />
  ) : null;

export const Component: React.FC<z.infer<typeof schema>> = ({ label, doneLabel, pendingColor, doneColor, swapAt, theme, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h / (meta.layout.defaultRegion?.h ?? 0.4) > w / (meta.layout.defaultRegion?.w ?? 0.84);
  const nativeFont = useVideoConfig().height / 0.4 * (portraitLayout ? 0.032 : 0.020);
  const swaps = doneLabel.length > 0;

  const pillH = portraitLayout ? h * 0.62 : Math.max(nativeFont * 2.3, Math.min(h * 0.34, w * 0.085));
  const fs = Math.max(nativeFont, fitFontSize({ chars: Math.max(label.length, doneLabel.length) + 5, boxW: w * 0.9, boxH: pillH * 0.45, charEm: 0.55, max: portraitLayout ? nativeFont * 1.1 : pillH * 0.36 }));
  const e = expoOut(frame / 6);
  const s = swaps ? ramp(frame, [swapAt, swapAt + 6], [0, 1]) : 0;
  const dot = fs * (portraitLayout ? 1.1 : 0.62);
  const color = s > 0.5 ? doneColor : pendingColor;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          height: pillH,
          width: portraitLayout ? w * 0.90 : undefined,
          display: "grid",
          gridTemplateColumns: portraitLayout ? "1fr" : "auto auto", justifyItems: portraitLayout ? "center" : undefined, gridTemplateRows: portraitLayout ? "auto auto" : undefined,
          alignItems: "center",
          columnGap: fs * 0.62,
          padding: portraitLayout ? `${nativeFont * 0.7}px ${nativeFont * 0.7}px` : `0 ${pillH * 0.42}px 0 ${pillH * 0.36}px`,
          borderRadius: portraitLayout ? w * 0.09 : 999,
          background: withAlpha(p.surface, 0.96),
          boxShadow: `${p.shadow(pillH / 14)}, 0 0 ${pillH * 0.6}px ${withAlpha(color, 0.18 * (1 - exit))}`,
          opacity: band(frame, 0, 6) * (1 - exit),
          transform: `scale(${(0.95 + 0.05 * e) * (1 - 0.05 * exit)})`,
        }}
      >
        <div style={{ position: "relative", width: dot, height: dot }}>
          {s < 0.5 ? (
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: pendingColor, opacity: 1 - s * 2, transform: `scale(${0.85 + 0.15 * Math.cos(frame / 4)})` }} />
          ) : (
            <div style={{ position: "absolute", inset: -dot * 0.2, borderRadius: "50%", background: doneColor, display: "grid", placeItems: "center", transform: `scale(${0.6 + 0.4 * expoOut((frame - swapAt - 3) / 6)})` }}>
              <Icon name="check" size={dot * 1.05} color={inkOn(color)} strokeWidth={3.4} />
            </div>
          )}
          <Ring t={ramp(frame, [4, 22], [0, 1])} size={dot} color={pendingColor} />
          {swaps ? <Ring t={ramp(frame, [swapAt + 3, swapAt + 21], [0, 1])} size={dot} color={doneColor} /> : null}
        </div>
        <div style={{ display: "grid", overflow: "hidden", height: fs * (portraitLayout ? 2.65 : 1.4), width: portraitLayout ? "100%" : undefined, alignItems: "center" }}>
          {[
            { key: "label", text: label, o: 1 - s, y: -s },
            ...(swaps ? [{ key: "doneLabel", text: doneLabel, o: s, y: 1 - s }] : []),
          ].map((t) => (
            <span
              key={t.key}
              data-21st-slot={t.key}
              style={{ gridArea: "1 / 1", fontFamily: font, fontSize: fs, fontWeight: 500, letterSpacing: "-0.01em", color: p.ink, lineHeight: 1.25, textAlign: "center", whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere", opacity: t.o, transform: `translateY(${t.y * fs * 0.9}px)` }}
            >
              {t.text}
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
