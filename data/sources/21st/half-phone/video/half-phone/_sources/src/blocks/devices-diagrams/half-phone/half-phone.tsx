// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, easeInOut, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { PHONE_RATIO } from "../_shared/device";
import { Media, SampleScreen } from "../_shared/media";
import { meta } from "./half-phone.meta";
import type { schema } from "./half-phone.schema";

/**
 * A minimal phone rises from the bottom edge, cropped by it, with a touch dot
 * that taps and swipes the screen (research V09).
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ screen, label, touch, screenBackground, screenColor, accent, color, frameColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, unit, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const glass = `oklch(from ${frameColor} 0.045 min(c, 0.004) h)`;
  const highlight = `oklch(from ${frameColor} 0.995 min(c, 0.001) h)`;

  // Show ~72% of the phone; keep at least 16% headroom for the label.
  const visible = 0.72;
  const pw = Math.min(width * (height > width ? 0.66 : 0.46), (height * 0.84) / visible / PHONE_RATIO);
  const ph = pw * PHONE_RATIO;
  const top = height - ph * visible;
  const left = (width - pw) / 2;
  const rise = expoOut(frame / 9);
  const y = (1 - rise) * (height - top + unit * 4) + Math.pow(exit, 2) * (height - top + unit * 4);
  const pad = pw * 0.035;
  const r = pw * 0.15;

  // Gesture: tap at f26, then swipe up f40 -> f62, twice over a long hold.
  const g = (f: number) => {
    const tap = ramp(f, [26, 28], [0, 1]) - ramp(f, [28, 32], [0, 1]);
    const swipe = easeInOut((f - 40) / 22);
    const show = band(f, 22, 27, 64, 70);
    return { tap, swipe, show };
  };
  const g1 = g(frame);
  const g2 = g(frame - 60);
  const cur = frame < 74 ? g1 : g2;
  const scroll = 0.5 * g1.swipe + 0.5 * g2.swipe;
  const screenH = ph - pad * 2;
  const dotY = top + pad + screenH * (0.6 - 0.36 * cur.swipe);
  const dot = pw * 0.15;

  const labelSize = fitFontSize({ chars: label.length + 2, boxW: width * 0.8, boxH: Math.max(unit * 3, top * 0.32), charEm: 0.55, max: aspect === "9:16" ? height * 0.031 : unit * 3.4 });
  const lIn = springSnap(frame, fps, 10, APPLE);

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      {label ? (
        <div style={{ position: "absolute", left: 0, right: 0, top: Math.max(unit, top - labelSize * 4.2), display: "flex", justifyContent: "center", opacity: band(frame, 10, 18) * (1 - exit), transform: `translateY(${(1 - lIn) * unit * 2}px)` }}>
          <div
            data-21st-slot="label"
            style={{
              display: "flex",
              alignItems: "center",
              gap: labelSize * 0.5,
              padding: `${labelSize * 0.45}px ${labelSize * 0.9}px`,
              borderRadius: 999,
              background: withAlpha(color, 0.08),
              border: `1px solid ${withAlpha(color, 0.14)}`,
              color,
              fontFamily: font,
              fontWeight: 500,
              fontSize: labelSize,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: labelSize * 0.45, height: labelSize * 0.45, borderRadius: 999, background: accent, flexShrink: 0 }} />
            {label}
          </div>
        </div>
      ) : null}
      <div
        style={{
          position: "absolute",
          left,
          top: top + y,
          width: pw,
          height: ph,
          borderRadius: r,
          padding: pad,
          background: frameColor,
          boxShadow: `0 -${unit}px ${unit * 6}px ${withAlpha(glass, 0.35)}, inset 0 0 0 ${Math.max(1, pw * 0.004)}px ${withAlpha(highlight, 0.16)}`,
          opacity: band(frame, 0, 4),
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: r - pad, overflow: "hidden", background: glass }}>
          <Media src={screen} position={`50% ${scroll * 100}%`} fallback={<SampleScreen variant={0} w={pw - pad * 2} h={screenH} accent={accent} surfaceColor={screenBackground} textColor={screenColor} fontFamily={font} t={scroll * 1.6} />} />
          <div style={{ position: "absolute", top: pw * 0.03, left: "50%", width: pw * 0.28, height: pw * 0.08, marginLeft: -pw * 0.14, borderRadius: 999, background: glass }} />
        </div>
      </div>
      {touch ? (
        <div
          style={{
            position: "absolute",
            left: width / 2 - dot / 2,
            top: dotY - dot / 2 + y,
            width: dot,
            height: dot,
            borderRadius: 999,
            background: withAlpha(accent, 0.35),
            border: `${Math.max(1.5, dot * 0.04)}px solid ${withAlpha(color, 0.85)}`,
            boxShadow: `0 0 ${dot * 0.4}px ${withAlpha(accent, 0.5)}`,
            opacity: cur.show * (1 - exit),
            transform: `scale(${1 - 0.15 * cur.tap})`,
          }}
        />
      ) : null}
    </AbsoluteFill>
  );
};
