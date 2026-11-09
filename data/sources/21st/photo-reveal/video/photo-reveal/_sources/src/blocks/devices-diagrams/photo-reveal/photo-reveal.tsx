// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, easeInOut, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Media, PlaceholderPhoto } from "../_shared/media";
import { meta } from "./photo-reveal.meta";
import { PHOTO_REVEALS, type schema } from "./photo-reveal.schema";

/** One photo, four ways in: slanted mask wipe, scale-in with shadow, 3D tilt settle, Ken Burns. */
export const Component: React.FC<z.infer<typeof schema>> = ({ image, reveal, caption, radius, captionColor, captionBackground, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const tall = aspect === "9:16";
  const { frame, exit, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const shadow = `oklch(from ${accent} 0.045 min(c, 0.004) h)`;
  const highlight = `oklch(from ${accent} 0.995 min(c, 0.001) h)`;
  const labelInk = captionColor ?? highlight;
  const labelSurface = withAlpha(captionBackground ?? shadow, 0.62);

  const fw = Math.min(width * 0.92, height * 0.9 * 1.5);
  const fh = tall ? height * 0.68 : fw / 1.5;
  const r = unit * radius;
  const kind = PHOTO_REVEALS.indexOf(reveal);
  const art = [4, 0, 1, 2][kind] ?? 0;
  const capSize = fitFontSize({ chars: caption.length + 2, boxW: fw * 0.88, boxH: tall ? height * 0.2 : fh * 0.14, lines: tall ? 2 : 1, charEm: 0.55, max: tall ? height * 0.052 : fw * 0.05 });
  const capIn = springSnap(frame, fps, 12, APPLE);

  let outer: React.CSSProperties = {};
  let inner: React.CSSProperties = {};
  let edge: React.ReactNode = null;
  let wrapPerspective: number | undefined;

  if (reveal === "mask-wipe") {
    const s = 0.22;
    const pIn = easeInOut(frame / 14);
    const pOut = easeInOut((frame - outStart) / Math.max(1, durationInFrames - outStart));
    const right = (pIn * (1 + s)) * 100;
    const left = (pOut * (1 + s)) * 100;
    outer = { clipPath: `polygon(${left}% 0%, ${right}% 0%, ${right - s * 100}% 100%, ${left - s * 100}% 100%)` };
    inner = { transform: `scale(${1.14 - 0.14 * expoOut(frame / 24)})` };
    const show = pIn > 0 && pIn < 1 ? 1 : pOut > 0 && pOut < 1 ? 1 : 0;
    const at = pIn < 1 ? right : left;
    edge = (
      <div
        style={{
          position: "absolute",
          top: -fh * 0.05,
          height: fh * 1.1,
          left: `calc(${at - (s * 100) / 2}% - ${unit * 0.3}px)`,
          width: unit * 0.6,
          background: accent,
          boxShadow: `0 0 ${unit * 2}px ${withAlpha(accent, 0.8)}`,
          transform: `skewX(${-Math.atan((s * fw) / fh) * (180 / Math.PI)}deg)`,
          opacity: show,
        }}
      />
    );
  } else if (reveal === "scale-shadow") {
    const p = expoOut(frame / 14);
    const sh = p * (1 - exit);
    outer = {
      transform: `translateY(${(1 - p) * fh * 0.06}px) scale(${(0.84 + 0.16 * p) * (1 - exit * 0.05)})`,
      opacity: band(frame, 0, 6) * (1 - exit),
      boxShadow: `0 ${fh * 0.05 * sh}px ${fh * 0.12 * sh}px ${withAlpha(shadow, 0.45 * sh)}, 0 ${fh * 0.01 * sh}px ${fh * 0.02 * sh}px ${withAlpha(shadow, 0.25 * sh)}`,
    };
  } else if (reveal === "tilt-3d") {
    const p = expoOut(frame / 18);
    const drift = Math.sin((frame / fps) * 0.6) * 1.4;
    wrapPerspective = fw * 2.2;
    outer = {
      transform: `translateZ(${-(1 - p) * fw * 0.3}px) rotateX(${6 + 22 * (1 - p) - drift * 0.4}deg) rotateY(${-10 - 16 * (1 - p) + drift}deg) scale(${1 - exit * 0.05})`,
      opacity: band(frame, 0, 8) * (1 - exit),
      boxShadow: `0 ${fh * 0.06}px ${fh * 0.14}px ${withAlpha(shadow, 0.42)}`,
    };
    const sheen = ramp(frame, [10, 32], [-0.3, 1.3]);
    edge = <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, transparent ${sheen * 100 - 16}%, ${withAlpha(highlight, 0.28)} ${sheen * 100}%, transparent ${sheen * 100 + 16}%)` }} />;
  } else {
    const k = ramp(frame, [0, durationInFrames], [0, 1]);
    outer = { opacity: band(frame, 0, 10) * (1 - exit) };
    inner = { transform: `scale(${1.02 + 0.12 * k}) translateX(${(k - 0.5) * 4}%)` };
  }

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", perspective: wrapPerspective }}>
      <div style={{ position: "relative", width: fw, height: fh, borderRadius: r, ...outer }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: r, overflow: "hidden", background: shadow }}>
          <div style={{ position: "absolute", inset: 0, ...inner }}>
            <Media src={image} fallback={<PlaceholderPhoto variant={art} accent={accent} />} />
          </div>
          {caption ? (
            <div
              style={{
                position: "absolute",
                left: fw * 0.03,
                bottom: fw * 0.03,
                display: "flex",
                alignItems: "center",
                gap: capSize * 0.5,
                padding: `${capSize * 0.45}px ${capSize * 0.85}px`,
                borderRadius: 999,
                background: labelSurface,
                border: `1px solid ${withAlpha(labelInk, 0.14)}`,
                opacity: band(frame, 12, 20),
                transform: `translateY(${(1 - capIn) * capSize}px)`,
              }}
            >
              <span style={{ width: capSize * 0.42, height: capSize * 0.42, borderRadius: 999, background: accent, flexShrink: 0 }} />
              <span data-21st-slot="caption" style={{ fontFamily: font, fontWeight: 500, fontSize: capSize, color: labelInk, whiteSpace: tall ? "normal" : "nowrap", maxWidth: fw * 0.74, lineHeight: 1.2, textWrap: "balance", letterSpacing: "-0.01em" }}>
                {caption}
              </span>
            </div>
          ) : null}
        </div>
        {edge}
      </div>
    </AbsoluteFill>
  );
};
