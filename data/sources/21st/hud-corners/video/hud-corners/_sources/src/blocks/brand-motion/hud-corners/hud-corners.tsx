// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { prog, px, typed } from "../_shared/motion";
import { meta } from "./hud-corners.meta";
import type { schema } from "./hud-corners.schema";

type Corner = "tl" | "tr" | "bl" | "br";

const timecode = (frame: number, fps: number) => {
  const s = Math.floor(frame / fps);
  const f = frame % fps;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}:${pad(f)}`;
};

/**
 * Techy framing: micro mono labels pinned in the four corners with corner brackets and
 * a hairline. Labels type on fast, a live dot pulses, an optional timecode runs.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ topLeft, topRight, bottomLeft, bottomRight, tick, hairline, brackets, reticle, color, accent, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { fps } = useVideoConfig();
  const { width: w, height: h, unit } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const leave = 1 - exit;

  const m = unit * 4.6;
  const arm = unit * 3.4;
  const stroke = Math.max(1.5, unit * 0.22);
  const tc = tick ? ` ${timecode(frame, fps)}` : "";
  const longest = Math.max(topLeft.length + 2, topRight.length, bottomLeft.length, bottomRight.length + tc.length);
  const size = fitFontSize({ chars: longest, boxW: w * 0.4 - unit * 3, boxH: unit * 3, charEm: 0.62 * 1.22, lineHeight: 1, max: unit * 1.9, min: 6 });
  const bracketIn = expoOut(prog(frame, 0, 8));

  const corner = (c: Corner, text: string, slot: string, i: number) => {
    const top = c[0] === "t";
    const left = c[1] === "l";
    const start = 4 + i * 3;
    const a = prog(frame, start, start + 6);
    const shown = typed(text, frame, start, 0.5);
    const extra = c === "br" && tick ? tc : "";
    if (!text && !extra) return null;
    return (
      <div
        key={c}
        data-21st-slot={slot}
        style={{
          position: "absolute",
          [top ? "top" : "bottom"]: m + unit * 0.9,
          [left ? "left" : "right"]: m + unit * 1.2,
          maxWidth: w * 0.4,
          display: "flex",
          alignItems: "center",
          gap: size * 0.6,
          fontFamily: resolvedMono,
          fontWeight: 500,
          fontSize: size,
          lineHeight: 1,
          letterSpacing: "0.22em",
          color: withAlpha(color, 0.88),
          whiteSpace: "nowrap",
          opacity: a,
          transform: `translateY(${px((1 - a) * (top ? -1 : 1) * unit * 0.6)}px)`,
        }}
      >
        {c === "tl" ? (
          <span
            style={{
              width: size * 0.62,
              height: size * 0.62,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 ${px(size * 0.7)}px ${withAlpha(accent, 0.8)}`,
              opacity: 0.45 + 0.55 * (0.5 + 0.5 * Math.cos((frame / fps) * Math.PI * 2)),
              flex: "none",
            }}
          />
        ) : null}
        <span>
          {shown}
          <span style={{ opacity: 0 }}>{text.slice(shown.length)}</span>
          {extra ? <span style={{ color: withAlpha(color, 0.45) }}>{extra}</span> : null}
        </span>
      </div>
    );
  };

  const bracket = (c: Corner) => {
    const top = c[0] === "t";
    const left = c[1] === "l";
    const a = arm * (0.4 + 0.6 * bracketIn);
    return (
      <div
        key={`b-${c}`}
        style={{
          position: "absolute",
          [top ? "top" : "bottom"]: m,
          [left ? "left" : "right"]: m,
          width: a,
          height: a,
          [top ? "borderTop" : "borderBottom"]: `${stroke}px solid ${withAlpha(color, 0.75)}`,
          [left ? "borderLeft" : "borderRight"]: `${stroke}px solid ${withAlpha(color, 0.75)}`,
          opacity: bracketIn,
        }}
      />
    );
  };

  const hair = expoOut(prog(frame, 8, 20));
  const hairY = m + unit * 0.9 + size + unit * 1.3;

  return (
    <AbsoluteFill style={{ opacity: leave }}>
      {brackets ? (["tl", "tr", "bl", "br"] as Corner[]).map(bracket) : null}
      {hairline ? (
        <div
          style={{
            position: "absolute",
            top: hairY,
            left: m + unit * 1.2,
            width: px((w - 2 * (m + unit * 1.2)) * hair),
            height: Math.max(1, unit * 0.08),
            background: `linear-gradient(90deg, ${withAlpha(accent, 0.7)}, ${withAlpha(color, 0.18)} 40%, ${withAlpha(color, 0.06)})`,
          }}
        />
      ) : null}
      {reticle ? (
        <svg
          width={unit * 9}
          height={unit * 9}
          viewBox="-50 -50 100 100"
          style={{ position: "absolute", left: w / 2 - unit * 4.5, top: h / 2 - unit * 4.5, opacity: bracketIn * 0.6, transform: `scale(${(1.25 - 0.25 * bracketIn).toFixed(4)})` }}
        >
          <circle r={26} fill="none" stroke={color} strokeWidth={2.2} strokeDasharray="10 7.4" />
          <path d="M -48 0 H -32 M 32 0 H 48 M 0 -48 V -32 M 0 32 V 48" stroke={color} strokeWidth={2.4} strokeLinecap="round" />
          <circle r={3.2} fill={accent} />
        </svg>
      ) : null}
      {corner("tl", topLeft, "topLeft", 0)}
      {corner("tr", topRight, "topRight", 1)}
      {corner("bl", bottomLeft, "bottomLeft", 2)}
      {corner("br", bottomRight, "bottomRight", 3)}
    </AbsoluteFill>
  );
};
