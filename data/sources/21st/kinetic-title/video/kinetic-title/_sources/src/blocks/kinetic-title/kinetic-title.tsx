// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SNAPPY, APPLE_SOFT, band, brandFontStack, fitFontSize, springSnap, useEnterExit, useLayout } from "../../kit/index";
import { meta } from "./kinetic-title.meta";
import type { schema } from "./kinetic-title.schema";

type Word = { text: string; em: boolean };

/** "Deploy at the *edge*" -> words, with the starred run marked for the serif. */
function words(title: string): Word[] {
  const out: Word[] = [];
  for (const seg of title.split(/(\*[^*]+\*)/g)) {
    if (!seg) continue;
    const em = seg.length > 2 && seg.startsWith("*") && seg.endsWith("*");
    for (const w of (em ? seg.slice(1, -1) : seg).split(/\s+/)) if (w) out.push({ text: w, em });
  }
  return out;
}

const ENERGY = {
  calm: { stagger: 5, config: APPLE_SOFT, rise: 0.5, blur: 0.14, pop: 0, fade: 16 },
  default: { stagger: 3, config: APPLE, rise: 0.42, blur: 0.1, pop: 0, fade: 10 },
  punchy: { stagger: 2, config: APPLE_SNAPPY, rise: 0.18, blur: 0.04, pop: 0.22, fade: 4 },
} as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ title, color, accent, fontFamily, energy, align, serifFontFamily }) => {
  const resolvedSerif = brandFontStack(serifFontFamily ?? "Instrument Serif");
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const e = ENERGY[energy];
  const list = words(title);
  const chars = title.replace(/\*/g, "").length;

  const boxW = width * 0.94;
  const boxH = height * 0.9;
  const max = Math.min(height * 0.36, width * (portrait ? 0.16 : 0.11));
  const size = portrait ? fitFontSize({ chars: Math.max(...list.map(word => word.text.length), 4), boxW: boxW / (list.length > 6 ? 2 : 1), boxH, charEm: 0.56, lineHeight: 1.14, max: Math.min(height * 0.18, height * 0.74 / (Math.max(1, Math.ceil(list.length / (list.length > 6 ? 2 : 1))) * 1.2)), min: height * 0.052 }) : Math.max(
    ...[1, 2, portrait ? 3 : 2].map((lines) => fitFontSize({ chars, boxW, boxH, lines, charEm: 0.56, lineHeight: 1.08, max })),
  );

  return (
    <AbsoluteFill style={{ alignItems: align === "center" ? "center" : "flex-start", justifyContent: "center" }}>
      <div
        data-21st-slot="title"
        style={{
          maxWidth: boxW,
          width: portrait ? boxW : undefined,
          display: portrait && list.length > 6 ? "grid" : "flex",
          gridTemplateColumns: portrait && list.length > 6 ? "repeat(2, minmax(0, 1fr))" : undefined,
          alignContent: portrait && list.length > 6 ? "space-between" : undefined,
          flexWrap: portrait ? "nowrap" : "wrap",
          flexDirection: portrait ? "column" : "row",
          minHeight: portrait ? height * 0.78 : undefined,
          alignItems: align === "center" ? "center" : "flex-start",
          justifyContent: portrait ? "space-between" : align === "center" ? "center" : "flex-start",
          columnGap: size * 0.24,
          rowGap: size * 0.02,
          fontFamily: font,
          fontWeight: 600,
          fontSize: size,
          lineHeight: 1.08,
          letterSpacing: "-0.042em",
          color,
          padding: `0 ${width * 0.03}px`,
        }}
      >
        {list.map((w, i) => {
          const at = 2 + i * e.stagger;
          const s = springSnap(frame, fps, at, e.config);
          const leaveAt = outStart + (list.length - 1 - i) * 2;
          const out = band(frame, leaveAt, leaveAt + 8);
          const blur = ((1 - band(frame, at, at + e.fade + 4)) * e.blur + out * 0.08) * size;
          const scale = 1 + e.pop * (1 - s);
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                maxWidth: "100%",
                width: portrait ? "100%" : undefined,
                textAlign: align,
                borderBottom: portrait && w.em ? `${height * 0.012}px solid ${accent}` : undefined,
                paddingBottom: portrait && w.em ? height * 0.018 : undefined,
                overflowWrap: "anywhere",
                opacity: band(frame, at, at + e.fade) * (1 - out) === 1 ? undefined : band(frame, at, at + e.fade) * (1 - out),
                transform: s === 1 && out === 0 ? undefined : `translateY(${((1 - s) * e.rise - out * 0.28) * size}px) scale(${scale})`,
                filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
                ...(w.em ? { fontFamily: resolvedSerif, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em", color: accent, fontSize: size * 1.08 } : null),
              }}
            >
              {w.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
