// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { loopPhase, useLayout, withAlpha } from "../../../kit/index";
import { px } from "../_shared/motion";
import type { schema } from "./grid-leak.schema";

const TAU = Math.PI * 2;

/**
 * Explainer backdrop: a faint grid on charcoal with a soft diagonal light leak that
 * drifts slowly across it. The leak path and the grid pan are whole cycles of the clip,
 * so the loop is seamless.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ gridSize, lineColor, leak, leakIntensity, background, pan, cycles }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { width, height, unit, portrait } = useLayout();
  const cell = Math.max(8, Math.round(unit * 100 * gridSize));
  const p = loopPhase(frame, durationInFrames, cycles) * TAU;
  const shift = pan ? px(loopPhase(frame, durationInFrames, 1) * cell) : 0;
  const line = Math.max(1, Math.round(unit * 0.1));
  const D = Math.hypot(width, height);

  // The leak slides along the diagonal and breathes; the second, dimmer one counter-moves.
  const along = Math.sin(p);
  const breathe = 0.85 + 0.15 * Math.cos(p);
  const lx = 0.3 + 0.09 * along;
  const ly = (portrait ? 0.24 : 0.2) + 0.06 * along;
  const l2x = 0.78 - 0.06 * along;
  const l2y = 0.86 - 0.04 * along;
  const a = leakIntensity;

  return (
    <AbsoluteFill style={{ background, overflow: "hidden", maskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined, WebkitMaskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${withAlpha(lineColor, 0.07)} ${line}px, transparent ${line}px), linear-gradient(90deg, ${withAlpha(lineColor, 0.07)} ${line}px, transparent ${line}px)`,
          backgroundSize: `${cell}px ${cell}px`,
          backgroundPosition: `${(width / 2) % cell + shift}px ${(height / 2) % cell + shift}px`,
          WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 45%, #000 30%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 75% at 50% 45%, #000 30%, transparent 100%)",
        }}
      />
      {/* Light leak: an elongated soft beam laid along the diagonal. */}
      <div
        style={{
          position: "absolute",
          left: px(width * lx - D * 0.5),
          top: px(height * ly - D * 0.16),
          width: D,
          height: D * 0.32,
          transform: "rotate(-32deg)",
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${withAlpha(leak, 0.5 * a * breathe)}, ${withAlpha(leak, 0.18 * a * breathe)} 45%, transparent 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: px(width * l2x - D * 0.3),
          top: px(height * l2y - D * 0.1),
          width: D * 0.6,
          height: D * 0.2,
          transform: "rotate(-32deg)",
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${withAlpha(leak, 0.26 * a * (1.7 - breathe))}, transparent 100%)`,
        }}
      />
      {background !== "transparent" ? <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 80% at 50% 45%, transparent 45%, ${withAlpha("#000000", 0.6)} 100%)` }} /> : null}
    </AbsoluteFill>
  );
};
