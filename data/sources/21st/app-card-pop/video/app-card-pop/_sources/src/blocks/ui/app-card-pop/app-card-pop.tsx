// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { withAlpha, band, brandFontStack, expoOut, ramp, useEnterExit, useLayout } from "../../../kit/index";
import { SampleScreen } from "../shared/sample-ui";
import { Media, palette } from "../shared/theme";
import { WindowFrame, barHeight } from "../shared/window";
import { meta } from "./app-card-pop.meta";
import type { schema } from "./app-card-pop.schema";

const RATIOS = { "16:10": 16 / 10, "4:3": 4 / 3, "1:1": 1, "4:5": 4 / 5 } as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ image, title, chrome, ratio, sample, radius, sheen, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const nativeFont = useVideoConfig().height / (meta.layout.defaultRegion?.h ?? 0.6) * (aspect === "9:16" ? 0.032 : 0.020);

  const r = ratio === "auto" ? (aspect === "16:9" ? RATIOS["16:10"] : aspect === "9:16" ? RATIOS["4:5"] : RATIOS["4:3"]) : RATIOS[ratio];
  // Fit the card (content + chrome bar) inside the region with room for the shadow.
  let cardW = Math.min(w * 0.92, h * 0.9 * r);
  let cardH = cardW / r + barHeight(chrome, cardW, cardW / r);
  if (cardH > h * 0.9) {
    const k = (h * 0.9) / cardH;
    cardW *= k;
    cardH *= k;
  }

  // 12f expo-out: opacity, scale 0.92 -> 1, y 20 -> 0 (in units). Exit: scale 0.95 + fade.
  const e = expoOut(frame / 12);
  const drift = ramp(frame, [12, durationInFrames], [0, 1]);
  const scale = (0.92 + 0.08 * e) * (1 + 0.012 * drift) * (1 - 0.05 * exit);
  const y = (1 - e) * u * 3;
  const sweep = sheen ? ramp(frame, [10, 34], [-0.4, 1.4]) : -1;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ opacity: band(frame, 0, 6) * (1 - exit), transform: `translateY(${y}px) scale(${scale})` }}>
        <WindowFrame w={cardW} h={cardH} chrome={chrome} title={title} p={p} font={font} radius={radius * u} accent={accent} minFontSize={nativeFont}>
          {({ w: cw, h: ch }) => (
            <>
              {image ? <Media src={image} /> : <SampleScreen kind={sample} w={cw} h={ch} p={p} accent={accent} frame={frame} seed="card" />}
              {sweep > -0.4 && sweep < 1.4 ? (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(105deg, transparent ${(sweep - 0.25) * 100}%, ${withAlpha(p.ink, p.dark ? 0.08 : 0.35)} ${sweep * 100}%, transparent ${(sweep + 0.25) * 100}%)`,
                  }}
                />
              ) : null}
            </>
          )}
        </WindowFrame>
      </div>
    </AbsoluteFill>
  );
};
