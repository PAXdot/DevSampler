// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Media, PlaceholderPhoto } from "../_shared/media";
import { meta } from "./photo-stack.meta";
import type { schema } from "./photo-stack.schema";

/** Photo prints drop onto a pile one by one, each landing at its own slight angle, then get flicked away top first. */
export const Component: React.FC<z.infer<typeof schema>> = ({ photo1, photo2, photo3, photo4, count, spread, caption, border, paperColor, accent, color, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, aspect } = useLayout();
  const tall = aspect === "9:16";
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const paper = paperColor ?? `oklch(from ${accent} 0.988 min(c, 0.004) h)`;
  const shadow = `oklch(from ${paper} 0.045 min(c, 0.004) h)`;
  const photos = [photo1, photo2, photo3, photo4];

  const capH = caption ? height * (tall ? 0.18 : 0.12) : 0;
  const ch = Math.min((height - capH) * 0.8, (width * 0.6) / 0.8);
  const cw = ch * 0.8;
  const pad = border ? cw * 0.035 : 0;
  const cx = width / 2;
  const cy = (height - capH) / 2;
  const capSize = fitFontSize({ chars: caption.length, boxW: width * 0.86, boxH: capH * 0.72, lines: tall ? 2 : 1, charEm: 0.55, max: tall ? height * 0.052 : cw * 0.075 });
  const capIn = springSnap(frame, fps, 6 + count * 7, APPLE);

  return (
    <AbsoluteFill>
      {Array.from({ length: count }, (_, i) => {
        const r = (k: string) => random(`ps-${i}-${k}`);
        const top = i === count - 1;
        const rot = top ? (r("t") - 0.5) * spread * 0.4 : (r("t") - 0.5) * 2 * spread;
        const ox = top ? 0 : (r("x") - 0.5) * cw * 0.12;
        const oy = top ? 0 : (r("y") - 0.5) * ch * 0.06;
        const at = i * 7;
        const p = expoOut((frame - at) / 12);
        // Flick away: top card first, 3f apart.
        const q = Math.pow(ramp(frame, [outStart + (count - 1 - i) * 3, outStart + (count - 1 - i) * 3 + 12], [0, 1]), 2);
        const dir = i % 2 ? -1 : 1;
        const float = top ? Math.sin(((frame - 40) / fps) * 1.2) * ch * 0.006 * band(frame, 40, 60) : 0;
        const landed = band(frame, at + 4, at + 12);
        const src = photos[i % 4] ?? "";
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx - cw / 2 + ox + q * dir * width * 0.75,
              top: cy - ch / 2 + oy - (1 - p) * height * 0.55 + float - q * ch * 0.1,
              width: cw,
              height: ch,
              padding: pad,
              paddingBottom: pad * 3.2,
              background: border ? paper : "transparent",
              borderRadius: border ? cw * 0.012 : cw * 0.03,
              boxShadow: `0 ${ch * 0.02 * landed + ch * 0.06 * (1 - landed)}px ${ch * 0.06 + ch * 0.08 * (1 - landed)}px ${withAlpha(shadow, 0.22 + 0.12 * (1 - landed))}`,
              transform: `rotate(${rot + (1 - p) * (dir * 16) + q * dir * 28}deg) scale(${1 + (1 - p) * 0.16})`,
              opacity: band(frame, at, at + 1),
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: border ? cw * 0.006 : cw * 0.03, overflow: "hidden", background: shadow }}>
              <Media src={src} fallback={<PlaceholderPhoto variant={(i * 5 + 1) % 6} accent={accent} />} />
            </div>
          </div>
        );
      })}
      {caption ? (
        <div style={{ position: "absolute", left: 0, right: 0, top: height - capH, height: capH, display: "flex", alignItems: "center", justifyContent: "center", gap: capSize * 0.5, opacity: band(frame, 6 + count * 7, 14 + count * 7) * (1 - ramp(frame, [outStart, outStart + 8], [0, 1])), transform: `translateY(${(1 - capIn) * capSize}px)` }}>
          <span style={{ width: capSize * 0.4, height: capSize * 0.4, borderRadius: 999, background: accent, flexShrink: 0 }} />
          <span data-21st-slot="caption" style={{ fontFamily: font, fontWeight: 500, fontSize: capSize, color: withAlpha(color, 0.86), whiteSpace: tall ? "normal" : "nowrap", maxWidth: width * 0.82, textAlign: "center", lineHeight: 1.2, textWrap: "balance", padding: `${capSize * 0.24}px ${capSize * 0.44}px`, borderRadius: capSize * 0.25, background: withAlpha(accent, 0.12), letterSpacing: "-0.01em" }}>
            {caption}
          </span>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
