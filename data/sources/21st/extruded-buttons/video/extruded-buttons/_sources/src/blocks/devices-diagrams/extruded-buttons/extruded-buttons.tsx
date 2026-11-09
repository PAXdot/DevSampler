// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE_SNAPPY, band, brandFontStack, fitFontSize, ramp, springSnap, useEnterExit, useLayout } from "../../../kit/index";
import { Icon } from "../_shared/icons";
import { meta } from "./extruded-buttons.meta";
import type { schema } from "./extruded-buttons.schema";

/** A slab with a solid extrusion (stacked layers) and a face on top, raised by `lift` px. */
const Slab: React.FC<{ x: number; y: number; w: number; h: number; lift: number; radius: number; side: string; face: string; ink: string; line: number; children?: React.ReactNode; opacity: number }> = ({
  x,
  y,
  w,
  h,
  lift,
  radius,
  side,
  face,
  ink,
  line,
  children,
  opacity,
}) => {
  const n = 7;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, height: h, transformStyle: "preserve-3d", opacity }}>
      {Array.from({ length: n }, (_, i) => (
        <div key={i} style={{ position: "absolute", inset: 0, borderRadius: radius, background: side, border: `${line}px solid ${ink}`, transform: `translateZ(${(lift * i) / n}px)` }} />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: radius,
          background: face,
          border: `${line}px solid ${ink}`,
          transform: `translateZ(${lift + 0.5}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

/** Chunky extruded tiles rise from the plane, then get pressed one after another (research V11 end card). */
export const Component: React.FC<z.infer<typeof schema>> = ({ icons, handle, iso, faceColor, ink, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height } = useLayout();
  const { frame, exit, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const n = icons.length;
  const cols = n <= 3 ? n : n === 4 ? 2 : 3;
  const rows = Math.ceil(n / cols);
  const pill = handle ? 1 : 0;
  // Tilted planes read ~25% wider and ~35% shorter than flat; size the tile so the whole thing fits.
  const kx = iso ? 1.3 : 1;
  const ky = iso ? 0.82 : 0.96;
  const T = Math.min((width * 0.9) / (kx * (cols + (cols - 1) * 0.22)), (height * 0.88) / (ky * (rows + (rows - 1) * 0.22 + pill * 0.78)));
  const gap = T * 0.22;
  const gridW = cols * T + (cols - 1) * gap;
  const gridH = rows * T + (rows - 1) * gap + pill * (gap + T * 0.56);
  const D = T * 0.16;
  const line = Math.max(2, T * 0.035);
  const plane = iso ? "rotateX(52deg) rotateZ(-34deg)" : "rotateX(16deg)";

  const pressOf = (at: number) => ramp(frame, [at, at + 3], [0, 1]) - ramp(frame, [at + 3, at + 7], [0, 1]);
  const riseOf = (i: number) => springSnap(frame, fps, 4 + i * 3, APPLE_SNAPPY);
  const pillSize = fitFontSize({ chars: handle.length, boxW: gridW * 0.8, boxH: T * 0.26, charEm: 0.56, max: T * 0.24 });
  const pillAt = 30 + n * 4 + 2;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: 1 - exit }}>
      <div style={{ position: "relative", width: gridW, height: gridH, transformStyle: "preserve-3d", transform: plane }}>
        {icons.map((ic, i) => {
          const press = pressOf(30 + i * 4);
          const rise = riseOf(i);
          const col = i % cols;
          const row = Math.floor(i / cols);
          return (
            <Slab
              key={i}
              x={col * (T + gap)}
              y={row * (T + gap)}
              w={T}
              h={T}
              lift={D * rise * (1 - 0.75 * press)}
              radius={T * 0.22}
              side={`color-mix(in srgb, ${ink} 72%, ${faceColor})`}
              face={faceColor}
              ink={ink}
              line={line}
              opacity={band(frame, 4 + i * 3, 8 + i * 3)}
            >
              <Icon name={ic} size={T * 0.44} color={press > 0.05 ? accent : ink} strokeWidth={2.3} />
            </Slab>
          );
        })}
        {pill ? (
          <Slab
            x={0}
            y={rows * (T + gap)}
            w={gridW}
            h={T * 0.56}
            lift={D * 0.8 * riseOf(n) * (1 - 0.75 * pressOf(pillAt))}
            radius={T}
            side={accent}
            face={ink}
            ink={ink}
            line={line}
            opacity={band(frame, 4 + n * 3, 8 + n * 3)}
          >
            <span data-21st-slot="handle" style={{ fontFamily: font, fontWeight: 600, fontSize: pillSize, letterSpacing: "-0.01em", color: faceColor, whiteSpace: "nowrap" }}>
              {handle}
            </span>
          </Slab>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
