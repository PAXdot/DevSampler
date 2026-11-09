// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill, random } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { palette } from "../shared/theme";
import { meta } from "./toast-cloud.meta";
import type { schema } from "./toast-cloud.schema";

const STAGGER = 3;

export const Component: React.FC<z.infer<typeof schema>> = ({ items, count, seed, drift, theme, accent, fontFamily, surfaceColor, textColor, successColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  const cols = aspect === "16:9" ? 4 : aspect === "9:16" ? 1 : 3;
  const rows = Math.ceil(count / cols);
  // Toasts live in the inner 84% x 80% so drift and jitter never leave the region.
  const area = { x: w * 0.06, y: h * 0.14, w: w * 0.88, h: h * 0.76 };
  const cellW = area.w / cols;
  const cellH = portraitLayout ? nativeFont * 8.8 : area.h / rows;
  const toastW = portraitLayout ? w * 0.84 : Math.min(cellW * 0.92, u * 46);
  const toastH = portraitLayout ? nativeFont * 8 : Math.max(nativeFont * 3, Math.min(cellH * 0.62, toastW * 0.27));
  const travel = portraitLayout ? Math.max(0, rows * cellH - area.h) * Math.min(1, Math.max(0, (frame - 12) / Math.max(1, durationInFrames - 24))) : 0;
  const maxDrift = Math.min(h * 0.06, area.y * 0.6);

  const slots = Array.from({ length: count }, (_, i) => i);
  // Seeded arrival order.
  const order = [...slots].sort((a, b) => random(`toast-o-${seed}-${a}`) - random(`toast-o-${seed}-${b}`));
  const leave = 1 - exit;

  return (
    <AbsoluteFill>
      {slots.map((i) => {
        const it = items[i % items.length]!;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const r = (k: string) => random(`toast-${k}-${seed}-${i}`);
        const depth = r("z");
        const s = portraitLayout ? 0.98 + 0.02 * depth : 0.68 + 0.32 * depth;
        const cx = area.x + cellW * (col + 0.5) + (r("x") - 0.5) * (cellW - toastW * s) * 0.9;
        const cy = area.y + cellH * (row + 0.5) + (portraitLayout ? 0 : (r("y") - 0.5) * (cellH - toastH * s) * 0.8) - travel;
        const start = 4 + order.indexOf(i) * STAGGER;
        const e = expoOut((frame - start) / 6);
        const up = portraitLayout ? 0 : Math.min(maxDrift, Math.max(0, frame - start) * (0.3 + 0.5 * depth) * u * 0.06 * drift);
        const blur = !portraitLayout && depth < 0.35 ? (0.35 - depth) * u * 0.9 : 0;
        const fs = Math.max(nativeFont / s, fitFontSize({ chars: it.text.length + (it.amount ? it.amount.length + 3 : 0) + 2, boxW: toastW - toastH * 1.4, boxH: toastH * 0.3, charEm: 0.55, max: toastH * 0.27 }));
        const subFs = Math.max(nativeFont / s, fitFontSize({ chars: it.sub.length + 2, boxW: toastW - toastH * 1.4, boxH: toastH * 0.26, charEm: 0.52, max: fs * 0.84 }));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx - toastW / 2,
              top: cy - toastH / 2 - up,
              width: toastW,
              height: toastH,
              transform: `scale(${s * (0.9 + 0.1 * e) * (1 - 0.05 * exit)})`,
              opacity: band(frame, start, start + 6) * (0.62 + 0.38 * depth) * leave * (portraitLayout ? Math.max(0, Math.min(1, (cy - toastH / 2 - h * 0.04) / (nativeFont * 0.5), (h * 0.96 - cy - toastH / 2) / (nativeFont * 0.5))) : 1),
              filter: blur > 0.2 ? `blur(${blur}px)` : undefined,
              zIndex: Math.round(depth * 100),
              borderRadius: toastH * 0.28,
              background: withAlpha(p.surface, p.dark ? 0.82 : 0.86),
              boxShadow: `0 ${u * 1.4}px ${u * 4}px -${u}px ${withAlpha(p.dark ? p.surface : p.ink, p.dark ? 0.55 : 0.22)}, inset 0 0 0 1px ${p.line}, inset 0 1px 0 ${withAlpha(inkOn(p.surface), p.dark ? 0.08 : 0.9)}`,
              display: "flex",
              alignItems: "center",
              gap: portraitLayout ? nativeFont * 0.5 : toastH * 0.2,
              padding: `0 ${portraitLayout ? nativeFont * 0.5 : toastH * 0.24}px`,
            }}
          >
            <div
              style={{
                width: portraitLayout ? nativeFont * 1.4 : toastH * 0.56,
                height: portraitLayout ? nativeFont * 1.4 : toastH * 0.56,
                borderRadius: "50%",
                flexShrink: 0,
                background: `linear-gradient(135deg, ${accent}, ${withAlpha(accent, 0.8)})`,
                display: "grid",
                placeItems: "center",
                color: inkOn(accent),
                fontFamily: font,
                fontWeight: 600,
                fontSize: portraitLayout ? nativeFont / s : Math.max(nativeFont / s, toastH * 0.24),
              }}
            >
              <span data-21st-slot="items">{it.text.slice(0, 1)}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: toastH * 0.04, minWidth: 0, flex: 1 }}>
              <div style={{ display: "flex", flexDirection: portraitLayout ? "column" : "row", alignItems: portraitLayout ? "flex-start" : "baseline", gap: fs * 0.25 }}>
                <span data-21st-slot="items" style={{ fontFamily: font, fontSize: fs, fontWeight: 600, letterSpacing: "-0.01em", color: p.ink, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                  {it.text}
                </span>
                <div style={{ flex: 1 }} />
                {it.amount ? (
                  <span data-21st-slot="items" style={{ fontFamily: font, fontSize: Math.max(nativeFont / s, fs * 0.92), fontWeight: 600, color: successColor, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                    {it.amount}
                  </span>
                ) : null}
              </div>
              <span data-21st-slot="items" style={{ fontFamily: font, fontSize: subFs, color: p.muted, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                {it.sub}
              </span>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
