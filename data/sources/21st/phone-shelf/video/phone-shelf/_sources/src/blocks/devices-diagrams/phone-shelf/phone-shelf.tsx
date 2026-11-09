// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { PhoneSlab, PHONE_RATIO } from "../_shared/device";
import { Media, SampleScreen } from "../_shared/media";
import { meta } from "./phone-shelf.meta";
import { defaults, type schema } from "./phone-shelf.schema";

/** A row of turned phones panning past at a constant speed (research V07 shelf carousel). */
export const Component: React.FC<z.infer<typeof schema>> = ({ headline, screen1, screen2, screen3, speed, angle, accent, color, background, fontFamily, bodyFontFamily = defaults.bodyFontFamily, frameColor = defaults.frameColor, screenBackground = defaults.screenBackground, screenColor = defaults.screenColor }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const land = aspect === "16:9";
  const tall = aspect === "9:16";
  const screens = [screen1, screen2, screen3];

  const ph = height * (land ? 0.58 : tall ? 0.38 : 0.52);
  const pw = ph / PHONE_RATIO;
  const depth = pw * 0.07;
  // Turned phones overlap a little, like books on a shelf.
  const step = pw * (0.55 + 0.45 * Math.cos((angle * Math.PI) / 180));
  const rowY = height * (land ? 0.6 : tall ? 0.6 : 0.6);
  const pan = (unit * speed * frame) / fps;
  const panTotal = (unit * speed * durationInFrames) / fps;
  const n = Math.ceil((width + panTotal + pw * 2) / step) + 1;
  const startX = -pw;

  const textW = width * (land ? 0.7 : 0.84);
  const hSize = fitFontSize({ chars: headline.length, boxW: textW, boxH: height * (land ? 0.16 : 0.15), lines: 2, charEm: 0.55, lineHeight: 1.14, max: unit * 7.6 });
  const hIn = springSnap(frame, fps, 10, APPLE);
  const screenT = ramp(frame, [0, durationInFrames], [0.4, 1]);
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: rowY + ph * 0.42,
          height: ph * 0.3,
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${withAlpha(color, 0.12)}, transparent 70%)`,
          opacity: band(frame, 8, 26) * leave,
        }}
      />
      <AbsoluteFill style={{ perspective: unit * 120, perspectiveOrigin: `50% ${rowY}px` }}>
        {Array.from({ length: n }, (_, i) => {
          const x = startX + i * step - pan;
          if (x < -pw * 2 || x > width + pw) return null;
          // Stagger by screen position so the row fills left to right whatever the pan.
          const order = Math.max(0, Math.floor((x + pw) / step));
          const enter = expoOut((frame - order * 2) / 16);
          const out = Math.pow(ramp(frame, [outStart + order * 1.2, durationInFrames], [0, 1]), 2);
          const y = rowY + (1 - enter) * height * 0.7 + out * height * 0.6;
          const src = screens[i % 3] ?? "";
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y - ph / 2,
                width: pw,
                height: ph,
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle + (1 - enter) * -30}deg)`,
              }}
            >
              <PhoneSlab w={pw} h={ph} depth={depth} body={frameColor}>
                <Media src={src} fallback={<SampleScreen variant={i} w={pw * 0.93} h={ph * 0.97} accent={accent} surfaceColor={screenBackground} textColor={screenColor} fontFamily={brandFontStack(bodyFontFamily)} t={screenT} />} />
              </PhoneSlab>
            </div>
          );
        })}
      </AbsoluteFill>
      {headline ? (
        <div
          data-21st-slot="headline"
          style={{
            position: "absolute",
            left: (width - textW) / 2,
            width: textW,
            top: height * (land ? 0.08 : tall ? 0.12 : 0.08),
            fontFamily: font,
            fontWeight: 600,
            fontSize: hSize,
            lineHeight: 1.14,
            letterSpacing: "-0.045em",
            color,
            textAlign: "center",
            textWrap: "balance",
            opacity: band(frame, 10, 20) * leave,
            transform: `translateY(${(1 - hIn) * unit * 3 - exit * unit * 2}px)`,
          }}
        >
          {headline}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
