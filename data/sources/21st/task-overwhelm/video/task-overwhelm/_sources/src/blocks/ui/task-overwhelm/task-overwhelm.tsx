// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../shared/icons";
import { palette, tint } from "../shared/theme";
import { meta } from "./task-overwhelm.meta";
import type { schema } from "./task-overwhelm.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ title, items, speed, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  const listW = Math.min(w * 0.92, h * 1.1);
  const left = (w - listW) / 2;
  const rowH = portraitLayout ? nativeFont * 2.7 : Math.max(nativeFont * 2.1, Math.min(u * 9, h * 0.1));
  const headerTop = h * 0.05;
  const pitch = rowH * 1.22;
  const hdrH = rowH * 1.1;
  // Rows only live between vTop - rowH and vBottom + rowH, which stays inside the region.
  const vTop = headerTop + hdrH + rowH * 1.2;
  const vBottom = h - rowH * 1.1;
  const fs = Math.max(nativeFont / 0.96, fitFontSize({ chars: Math.max(...items.map((s) => s.length)) + 2, boxW: listW - rowH * 1.6, boxH: rowH * 0.42, charEm: 0.53, max: rowH * 0.36 }));
  const tFs = Math.max(nativeFont, fitFontSize({ chars: title.length + 6, boxW: listW * 0.86, boxH: hdrH * 0.5, charEm: 0.55, max: rowH * 0.42 }));

  // Ease into the scroll, then constant speed.
  const ease = 12;
  const tt = Math.max(0, frame - 4);
  const travel = (tt < ease ? (tt * tt) / (2 * ease) : tt - ease / 2) * speed * u;
  const first = Math.floor(travel / pitch);
  const count = Math.ceil((vBottom - vTop) / pitch) + 3;
  const leave = 1 - exit;
  const hIn = expoOut(frame / 10);
  const n = items.length;

  return (
    <AbsoluteFill style={{ opacity: leave, transform: `scale(${1 - 0.04 * exit})` }}>
      <div
        style={{
          position: "absolute",
          left,
          top: headerTop,
          width: listW,
          height: hdrH,
          display: "flex",
          alignItems: "center",
          gap: tFs * 0.6,
          padding: `0 ${rowH * 0.36}px`,
          borderRadius: hdrH * 0.3,
          background: p.surface,
          boxShadow: p.shadow(u * 0.6),
          opacity: band(frame, 0, 6),
          transform: `translateY(${(1 - hIn) * -u * 2}px)`,
          zIndex: 2,
        }}
      >
        <div style={{ width: tFs * 1.6, height: tFs * 1.6, borderRadius: tFs * 0.45, background: tint(accent, p, 0.14), display: "grid", placeItems: "center" }}>
          <Icon name="list-checks" size={tFs} color={accent} />
        </div>
        <span data-21st-slot="title" style={{ fontFamily: font, fontSize: tFs, fontWeight: 600, letterSpacing: "-0.015em", color: p.ink, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
          {title}
        </span>
      </div>
      {Array.from({ length: count }, (_, k) => {
        const i = first + k;
        const y = vTop + i * pitch - travel;
        if (y < vTop - rowH || y > vBottom) return null;
        // Fade + blur toward both edges of the viewport.
        const edge = Math.min((y - (vTop - rowH)) / (rowH * 2.2), (vBottom - y) / (rowH * 2.2), 1);
        const vis = Math.max(0, edge);
        const blur = (1 - vis) * u * 0.7;
        const t = 2 + i * 2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left,
              top: y,
              width: listW,
              height: rowH,
              display: "flex",
              alignItems: "center",
              gap: fs * 0.7,
              padding: `0 ${rowH * 0.32}px`,
              borderRadius: rowH * 0.26,
              background: p.surface,
              boxShadow: `0 ${u * 0.3}px ${u}px ${withAlpha(p.dark ? p.surface : p.ink, p.dark ? 0.35 : 0.08)}, 0 0 0 1px ${p.line}`,
              opacity: vis * band(frame, t, t + 6),
              filter: blur > 0.15 ? `blur(${blur}px)` : undefined,
              transform: `scale(${0.96 + 0.04 * vis})`,
            }}
          >
            <div style={{ width: rowH * 0.36, height: rowH * 0.36, borderRadius: rowH * 0.1, flexShrink: 0, boxShadow: `inset 0 0 0 ${Math.max(1.5, u * 0.22)}px ${p.faint}` }} />
            <span data-21st-slot="items" style={{ fontFamily: font, fontSize: fs, fontWeight: 500, letterSpacing: "-0.01em", color: p.ink, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
              {items[((i % n) + n) % n]}
            </span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
