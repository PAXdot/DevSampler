// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { PhoneSlab, PHONE_RATIO } from "../_shared/device";
import { Media, SampleScreen } from "../_shared/media";
import { meta } from "./phone-ring.meta";
import { defaults, type schema } from "./phone-ring.schema";

/**
 * Phones reveal their screens and land on one shared, parallel-projected
 * ring plane. The assembled screen set holds after its declared settlement.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ headline, screen1, screen2, screen3, count, spin, accent, color, background, fontFamily, bodyFontFamily = defaults.bodyFontFamily, frameColor = defaults.frameColor, screenBackground = defaults.screenBackground, screenColor = defaults.screenColor }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height } = useLayout();
  const { frame, exit, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const screens = [screen1, screen2, screen3];

  const cx = width / 2;
  const cy = height / 2;
  const rx = Math.min(width, height * 1.4) * 0.37;
  const ry = Math.min(height, width * 1.4) * 0.35;
  const pw = unit * 14.5;
  const ph = pw * PHONE_RATIO;
  const depth = pw * 0.07;
  const n = Math.max(5, Math.min(10, Math.round(count)));
  const rot = (Math.min(frame, 34) / fps) * spin;

  const textW = Math.min(rx, ry) * 1.15;
  const hSize = fitFontSize({ chars: headline.length, boxW: textW, boxH: Math.min(rx, ry) * 0.7, lines: 2, charEm: 0.55, lineHeight: 1.14, max: unit * 8 });
  const hIn = springSnap(frame, fps, 14, APPLE);
  const screenT = ramp(frame, [0, 34], [0.45, 1]);

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse ${rx * 1.1}px ${ry * 1.1}px at 50% 50%, ${withAlpha(accent, 0.16)}, transparent 75%)`,
          opacity: band(frame, 6, 30) * (1 - exit),
        }}
      />
      <AbsoluteFill style={{ transformStyle: "preserve-3d", transform: "rotateX(8deg) rotateY(-12deg)" }}>
        {Array.from({ length: n }, (_, i) => {
          // One projection is shared by every phone; each screen flips on
          // entry without inventing a separate camera angle for each card.
          const p = expoOut((frame - i) / 12);
          const q = Math.pow(ramp(frame, [outStart + i * 0.6, durationInFrames], [0, 1]), 2);
          const theta = (i / n) * 360 + rot - 90;
          const rad = (theta * Math.PI) / 180;
          const spread = 1 + (1 - p) * 1.7 + q * 1.8;
          const x = cx + Math.cos(rad) * rx * spread;
          const y = cy + Math.sin(rad) * ry * spread;
          const scale = 1 + (1 - p) * 0.06 + q * 0.06;
          const flip = (1 - p) * 170;
          const src = screens[i % 3] ?? "";
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x - pw / 2,
                top: y - ph / 2,
                width: pw,
                height: ph,
                transformStyle: "preserve-3d",
                transform: `scale(${scale}) rotateZ(${theta + 90}deg) rotateY(${flip}deg)`,
                opacity: frame >= i ? 1 - exit : 0,
              }}
            >
              <PhoneSlab w={pw} h={ph} depth={depth} body={frameColor}>
                <Media src={src} fallback={<SampleScreen variant={i} w={pw * 0.93} h={ph * 0.95} accent={accent} surfaceColor={screenBackground} textColor={screenColor} fontFamily={brandFontStack(bodyFontFamily)} t={screenT} />} />
              </PhoneSlab>
            </div>
          );
        })}
      </AbsoluteFill>
      {headline ? (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <div
            data-21st-slot="headline"
            style={{
              width: textW,
              fontFamily: font,
              fontWeight: 600,
              fontSize: hSize,
              lineHeight: 1.14,
              letterSpacing: "-0.045em",
              color,
              textAlign: "center",
              textWrap: "balance",
              opacity: band(frame, 14, 24) * (1 - exit),
              transform: `scale(${(0.94 + 0.06 * hIn) * (1 - exit * 0.05)})`,
            }}
          >
            {headline}
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
