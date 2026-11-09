// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { useLayout, withAlpha } from "../../../kit/index";
import { px } from "../_shared/motion";
import type { schema } from "./speed-lines.schema";

/** Target lifetime of one streak, in frames. Rounded so a whole number of lifetimes fits the clip. */
const LIFE = 72;

/**
 * Thin diagonal streaks drifting along their angle over a dark frame. Each streak lives
 * a whole fraction of the clip (fades in, travels, fades out, respawns on a new lane),
 * and lanes are seeded by lifetime index modulo the lifetime count, so the last frame
 * flows straight into the first.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ angle, density, speed, color, accent, background, vignette }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { width, height, unit } = useLayout();
  const D = Math.hypot(width, height);
  const k = Math.max(1, Math.round(durationInFrames / LIFE));
  const life = durationInFrames / k;
  const travel = speed * (unit / 10.8) * life;
  const thin = Math.max(2, unit * 0.7);

  const lines = Array.from({ length: density }, (_, i) => {
    const raw = (frame / durationInFrames) * k + random(`sl-o-${i}`) * k;
    const c = Math.floor(raw);
    const u = raw - c;
    const lap = ((c % k) + k) % k;
    const y = (random(`sl-y-${i}-${lap}`) - 0.5) * D * 0.92;
    const x0 = (random(`sl-x-${i}-${lap}`) - 0.5) * D * 0.8;
    const len = D * (0.06 + 0.16 * random(`sl-l-${i}-${lap}`));
    const glow = i % 7 === 3;
    const env = Math.sin(Math.PI * u);
    const alpha = (glow ? 0.75 : 0.14 + 0.2 * random(`sl-a-${i}`)) * env;
    const x = x0 + (u - 0.5) * travel;
    const col = glow ? accent : color;
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: px(D / 2 + x - len / 2),
          top: px(D / 2 + y),
          width: px(len),
          height: glow ? thin * 1.5 : thin,
          borderRadius: thin,
          background: `linear-gradient(90deg, transparent, ${withAlpha(col, alpha * 0.6)} 70%, ${withAlpha(col, alpha)} 94%, transparent)`,
          boxShadow: glow ? `0 0 ${px(unit * 0.8)}px ${withAlpha(accent, alpha * 0.6)}` : undefined,
        }}
      />
    );
  });

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: background === "transparent" ? undefined : [
            `radial-gradient(ellipse 55% 50% at 50% 50%, ${withAlpha("#ffffff", 0.09)}, transparent 80%)`,
            `radial-gradient(ellipse 60% 55% at 12% 8%, ${withAlpha(accent, 0.34)}, transparent 70%)`,
            `radial-gradient(ellipse 55% 50% at 92% 96%, ${withAlpha(accent, 0.2)}, transparent 70%)`,
          ].join(", "),
        }}
      />
      <div
        style={{
          position: "absolute",
          left: (width - D) / 2,
          top: (height - D) / 2,
          width: D,
          height: D,
          transform: `rotate(${angle}deg)`,
        }}
      >
        {lines}
      </div>
      {background !== "transparent" && vignette > 0 ? (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse 75% 70% at 50% 50%, transparent 35%, ${withAlpha("#000000", Math.min(1, vignette) * 0.75)} 100%)` }} />
      ) : null}
    </AbsoluteFill>
  );
};
