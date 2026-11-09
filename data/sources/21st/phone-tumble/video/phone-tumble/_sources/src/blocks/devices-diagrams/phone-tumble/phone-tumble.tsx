// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { PhoneSlab, PHONE_RATIO } from "../_shared/device";
import { Media, SampleScreen } from "../_shared/media";
import { meta } from "./phone-tumble.meta";
import { defaults, type schema } from "./phone-tumble.schema";

/**
 * Two phones tumble on X/Y. Each face carries its own screen, so every pass
 * through edge-on is a natural cut to the next screen (research V07).
 * The final face eases into a sharp, legible hold rather than flipping forever.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ headline, subline, screen1, screen2, screen3, screen4, speed, accent, color, background, fontFamily, bodyFontFamily = defaults.bodyFontFamily, frameColor = defaults.frameColor, screenBackground = defaults.screenBackground, screenColor = defaults.screenColor }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const land = aspect === "16:9";
  const tall = aspect === "9:16";

  const ph = height * (land ? 0.66 : tall ? 0.42 : 0.5);
  const pw = ph / PHONE_RATIO;
  const depth = pw * 0.075;
  const stageX = land ? width * 0.66 : width / 2;
  const stageY = land ? height * 0.5 : height * (tall ? 0.36 : 0.38);
  const gapX = land ? pw * 0.78 : pw * 0.72;

  const textW = land ? width * 0.36 : width * 0.84;
  const textLeft = land ? width * 0.08 : (width - textW) / 2;
  const hSize = fitFontSize({ chars: headline.length, boxW: textW, boxH: height * (land ? 0.3 : 0.14), lines: 2, charEm: 0.55, lineHeight: 1.14, max: unit * (land ? 8.4 : 8) });
  const sSize = fitFontSize({ chars: subline.length, boxW: textW, boxH: height * (land ? 0.14 : tall ? 0.14 : 0.08), lines: 2, charEm: 0.5, lineHeight: 1.35, max: Math.max(unit * 2.4, hSize * 0.36, tall ? height * 0.031 : 0) });
  const hIn = springSnap(frame, fps, 8, APPLE);
  const sIn = springSnap(frame, fps, 14, APPLE);
  const t = Math.min(frame, 40) / fps;
  const settle = expoOut(ramp(frame, [24, 40], [0, 1]));
  const screenT = ramp(frame, [0, 40], [0.4, 1]);
  const leave = 1 - exit;

  const phones = [
    { dx: -gapX, dy: ph * 0.05, base: 20, dir: 1, z: -pw * 0.6, front: screen1, back: screen2, v: [0, 1] },
    { dx: gapX, dy: -ph * 0.05, base: -160, dir: -1, z: pw * 0.2, front: screen3, back: screen4, v: [3, 2] },
  ];

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: stageX - ph,
          top: stageY - ph * 0.8,
          width: ph * 2,
          height: ph * 1.6,
          background: `radial-gradient(closest-side, ${withAlpha(accent, 0.28)}, ${withAlpha(accent, 0.06)} 60%, transparent)`,
          opacity: band(frame, 0, 24) * leave,
        }}
      />
      <AbsoluteFill style={{ perspective: unit * 220, perspectiveOrigin: `${stageX}px ${stageY}px` }}>
        {phones.map((p, i) => {
          const enter = expoOut((frame - i * 3) / 18);
          const out = Math.pow(ramp(frame, [outStart + i * 2, durationInFrames], [0, 1]), 2);
          const rawY = p.base + p.dir * (speed * t + (1 - enter) * 220);
          const heldY = Math.round((p.base + p.dir * speed * 40 / fps) / 180) * 180;
          const ry = ramp(settle, [0, 1], [rawY, heldY]);
          const rx = ramp(settle, [0, 1], [16 * Math.sin(t * 1.1 + i * 2) + 10, 8]);
          const rz = ramp(settle, [0, 1], [(i ? 10 : -12) + 6 * Math.sin(t * 0.8 + i), i ? 8 : -8]);
          const y = stageY + p.dy + (1 - enter) * height * 0.75 + out * height * 0.7;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: stageX + p.dx - pw / 2,
                top: y - ph / 2,
                width: pw,
                height: ph,
                transformStyle: "preserve-3d",
                transform: `translateZ(${p.z}px) rotateZ(${rz}deg) rotateX(${rx}deg) rotateY(${ry}deg)`,
                opacity: frame >= i * 3 ? 1 : 0,
              }}
            >
              <PhoneSlab
                w={pw}
                h={ph}
                depth={depth}
                body={frameColor}
                back={<Media src={p.back} fallback={<SampleScreen variant={p.v[1] ?? 1} w={pw * 0.93} h={ph * 0.97} accent={accent} surfaceColor={screenBackground} textColor={screenColor} fontFamily={brandFontStack(bodyFontFamily)} t={screenT} />} />}
              >
                <Media src={p.front} fallback={<SampleScreen variant={p.v[0] ?? 0} w={pw * 0.93} h={ph * 0.97} accent={accent} surfaceColor={screenBackground} textColor={screenColor} fontFamily={brandFontStack(bodyFontFamily)} t={screenT} />} />
              </PhoneSlab>
            </div>
          );
        })}
      </AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: textLeft,
          width: textW,
          top: land ? 0 : undefined,
          bottom: land ? 0 : height * (tall ? 0.1 : 0.07),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: land ? "flex-start" : "center",
          gap: unit * 2,
          opacity: leave,
          transform: `translateY(${-exit * unit * 2}px)`,
        }}
      >
        {headline ? (
          <div
            data-21st-slot="headline"
            style={{ fontFamily: font, fontWeight: 600, fontSize: hSize, lineHeight: 1.14, letterSpacing: "-0.045em", color, textAlign: land ? "left" : "center", textWrap: "balance", opacity: band(frame, 8, 18), transform: `translateY(${(1 - hIn) * unit * 3}px)` }}
          >
            {headline}
          </div>
        ) : null}
        {subline ? (
          <div
            data-21st-slot="subline"
            style={{ fontFamily: font, fontWeight: 400, fontSize: sSize, lineHeight: 1.35, color: withAlpha(color, 0.58), textAlign: land ? "left" : "center", textWrap: "pretty", opacity: band(frame, 14, 24), transform: `translateY(${(1 - sIn) * unit * 2}px)` }}
          >
            {subline}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
