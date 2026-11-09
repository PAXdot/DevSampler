// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random } from "remotion";
import type { z } from "zod";
import { band, expoOut, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Media, PlaceholderPhoto } from "../_shared/media";
import { meta } from "./photo-grid-explode.meta";
import type { schema } from "./photo-grid-explode.schema";

/** Tiles fly in from a scattered 3D cloud and lock into a tidy grid; on the way out the grid bursts apart from its center. */
export const Component: React.FC<z.infer<typeof schema>> = ({ photo1, photo2, photo3, photo4, chaos, gap, radius, accent, frameColor = accent, background }) => {
  const { unit, width, height } = useLayout();
  const { frame, outStart, durationInFrames } = useEnterExit(meta.timing);
  const photos = [photo1, photo2, photo3, photo4];
  const shadow = `oklch(from ${accent} 0.045 min(c, 0.004) h)`;
  const ratio = width / height;
  const cols = ratio > 1.2 ? 4 : ratio < 0.83 ? 3 : 3;
  const rows = ratio > 1.2 ? 3 : ratio < 0.83 ? 5 : 3;
  const g = unit * gap;
  let cellW = (width * 0.9 - g * (cols - 1)) / cols;
  let cellH = cellW * 0.75;
  if (rows * cellH + g * (rows - 1) > height * 0.9) {
    cellH = (height * 0.9 - g * (rows - 1)) / rows;
    cellW = cellH / 0.75;
  }
  const gridW = cols * cellW + (cols - 1) * g;
  const gridH = rows * cellH + (rows - 1) * g;
  const x0 = (width - gridW) / 2;
  const y0 = (height - gridH) / 2;
  const push = 1 + 0.03 * ramp(frame, [20, durationInFrames], [0, 1]);

  return (
    <AbsoluteFill style={{ background, perspective: unit * 140, overflow: "hidden" }}>
      <AbsoluteFill style={{ transformStyle: "preserve-3d", transform: `scale(${push})` }}>
        {Array.from({ length: cols * rows }, (_, i) => {
          const r = (k: string) => random(`pge-${i}-${k}`);
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = x0 + col * (cellW + g);
          const y = y0 + row * (cellH + g);
          const delay = Math.floor(r("d") * 9);
          const p = expoOut((frame - delay) / 16);
          const outAt = outStart + Math.floor(r("o") * 6);
          const q = Math.pow(ramp(frame, [outAt, outAt + 12], [0, 1]), 2);
          const fromX = (r("x") - 0.5) * width * 1.3 * chaos;
          const fromY = (r("y") - 0.5) * height * 1.3 * chaos;
          const fromZ = (r("z") * 1.6 - 1.1) * unit * 90 * chaos;
          const rx = (r("rx") - 0.5) * 140 * chaos;
          const ry = (r("ry") - 0.5) * 140 * chaos;
          const rz = (r("rz") - 0.5) * 90 * chaos;
          // Exit: away from the grid center and toward the lens.
          const ex = (x + cellW / 2 - width / 2) * 1.6 * q;
          const ey = (y + cellH / 2 - height / 2) * 1.6 * q;
          const k = 1 - p + q;
          const src = photos[i % 4] ?? "";
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: cellW,
                height: cellH,
                borderRadius: unit * radius,
                overflow: "hidden",
                background: frameColor,
                boxShadow: `0 ${unit * 0.8}px ${unit * 2.4}px ${withAlpha(shadow, 0.3)}`,
                transform: `translate3d(${fromX * (1 - p) + ex}px, ${fromY * (1 - p) + ey}px, ${fromZ * (1 - p) + q * unit * 70}px) rotateX(${rx * k}deg) rotateY(${ry * k}deg) rotateZ(${rz * k}deg)`,
                opacity: band(frame, delay, delay + 4) * (1 - ramp(frame, [outAt + 6, outAt + 12], [0, 1])),
              }}
            >
              <div style={{ position: "absolute", inset: unit * 0.8, borderRadius: Math.max(0, unit * (radius - 0.8)), overflow: "hidden" }}><Media src={src} fallback={<PlaceholderPhoto variant={(i * 7 + row) % 6} accent={accent} />} /></div>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
