// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, spring, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { mix, prog, px } from "../_shared/motion";
import { meta } from "./icon-bloom.meta";
import type { schema } from "./icon-bloom.schema";

/** Petal pivot in the 100 x 100 icon box. */
const PX = 50;
const PY = 72;
const PETAL = `M ${PX} ${PY} C 39 60 40 38 ${PX} 24 C 60 38 61 60 ${PX} ${PY} Z`;
/** The one place this kit allows overshoot: icon pops (about 5%). */
const POP = { damping: 12, mass: 0.6, stiffness: 120 } as const;

/**
 * App-icon micro animation: the tile pops, the center petal grows from a drop, then
 * petal pairs unfold outward with a small overshoot and settle.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ name, petals, tile, petal, tip, color, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const id = React.useId().replace(/:/g, "");

  const T = Math.min(w * 0.7, h * (name ? 0.62 : 0.84));
  const top = name ? (h - T * 1.32) / 2 : (h - T) / 2;
  const tileIn = expoOut(prog(frame, 0, 8));
  const drop = expoOut(prog(frame, 5, 15));
  const pairs = Math.floor((petals - 1) / 2);
  const hasCenter = petals % 2 === 1;
  const spread = Math.min(78, 22 + pairs * 16);
  const leave = 1 - exit;
  const nameIn = prog(frame, 20, 30);
  const nameSize = fitFontSize({ chars: name.length, boxW: w * 0.9, boxH: T * 0.2, charEm: 0.56, lineHeight: 1, max: T * 0.15 });

  const leaves: React.ReactNode[] = [];
  const leaf = (key: string, angle: number, k: number, open: number, depth: number) => {
    const len = 1 - 0.1 * depth;
    leaves.push(
      <path
        key={key}
        d={PETAL}
        fill={`url(#${id}-p)`}
        stroke={withAlpha(tip, 0.9)}
        strokeWidth={0.6}
        opacity={Math.min(1, open * 3) * (0.94 - depth * 0.04)}
        transform={`rotate(${(angle * open).toFixed(3)} ${PX} ${PY}) translate(${PX} ${PY}) scale(${(0.82 + 0.18 * Math.min(1, open)).toFixed(4)} ${(len * Math.max(0, open)).toFixed(4)}) translate(${-PX} ${-PY})`}
        data-k={k}
      />,
    );
  };
  // Outer pairs sit behind inner ones; the center petal goes on top.
  for (let k = pairs; k >= 1; k--) {
    const s = spring({ frame: frame - (15 + (k - 1) * 3), fps, config: POP });
    const open = Math.abs(1 - s) < 1e-3 ? 1 : s;
    const a = (spread * k) / pairs;
    leaf(`l${k}`, -a, k, open, k);
    leaf(`r${k}`, a, k, open, k);
  }
  if (hasCenter) {
    // The drop: a dot at the pivot that stretches upward into the center petal.
    leaves.push(
      <path
        key="c"
        d={PETAL}
        fill={`url(#${id}-p)`}
        stroke={withAlpha(tip, 0.9)}
        strokeWidth={0.6}
        opacity={Math.min(1, drop * 4)}
        transform={`translate(${PX} ${PY}) scale(${(0.55 + 0.45 * drop).toFixed(4)} ${(0.08 + 0.92 * drop).toFixed(4)}) translate(${-PX} ${-PY})`}
      />,
    );
  }

  return (
    <AbsoluteFill style={{ opacity: leave, transform: `scale(${1 - 0.08 * exit})` }}>
      <div
        style={{
          position: "absolute",
          left: (w - T) / 2,
          top,
          width: T,
          height: T,
          borderRadius: T * 0.23,
          background: `linear-gradient(180deg, ${mix(tile, "#ffffff", 0.18)}, ${tile} 55%, ${mix(tile, "#000000", 0.25)})`,
          boxShadow: `0 ${px(T * 0.06)}px ${px(T * 0.18)}px ${withAlpha("#000000", 0.3)}, inset 0 ${px(T * 0.012)}px 0 ${withAlpha("#ffffff", 0.25)}`,
          opacity: tileIn,
          transform: `scale(${0.86 + 0.14 * tileIn})`,
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 100 100" width={T} height={T} style={{ display: "block" }}>
          <defs>
            <linearGradient id={`${id}-p`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor={petal} />
              <stop offset="1" stopColor={tip} />
            </linearGradient>
            <radialGradient id={`${id}-g`} cx="0.5" cy="0.62" r="0.5">
              <stop offset="0" stopColor={withAlpha(tip, 0.55)} />
              <stop offset="1" stopColor={withAlpha(tip, 0)} />
            </radialGradient>
          </defs>
          <circle cx={PX} cy={PY - 14} r={40} fill={`url(#${id}-g)`} opacity={drop} />
          {leaves}
          <path d={`M 26 ${PY + 6} Q ${PX} ${PY + 14} 74 ${PY + 6}`} fill="none" stroke={withAlpha(petal, 0.5)} strokeWidth={1.4} strokeLinecap="round" opacity={prog(frame, 12, 22)} />
        </svg>
      </div>
      {name ? (
        <div
          data-21st-slot="name"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: top + T * 1.12,
            textAlign: "center",
            fontFamily: font,
            fontWeight: 500,
            fontSize: nameSize,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            color,
            whiteSpace: "nowrap",
            opacity: nameIn,
            transform: `translateY(${px((1 - nameIn) * T * 0.04)}px)`,
          }}
        >
          {name}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
