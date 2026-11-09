// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, random, spring, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, luminance, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { prog, px, sineInOut } from "../_shared/motion";
import { meta } from "./logo-cloud-burst.meta";
import type { schema } from "./logo-cloud-burst.schema";

type Props = z.infer<typeof schema>;

const PER_WORD = 4;
const P1_START = 4;
const TILES_START = 12;
const TILE_STAGGER = 4;
const SWAP = 78;
const P2_START = 84;
const POP = { damping: 12, mass: 0.6, stiffness: 140 } as const;

/** Neutral glyphs for tiles without a logo (abstract shapes, no real brands). 24 x 24 box. */
const GLYPHS: ((c: string) => React.ReactNode)[] = [
  (c) => <circle cx={12} cy={12} r={7} fill={c} />,
  (c) => <circle cx={12} cy={12} r={6.5} fill="none" stroke={c} strokeWidth={3} />,
  (c) => <rect x={5} y={5} width={14} height={14} rx={4} fill={c} />,
  (c) => <path d="M12 4.5 L20 18.5 H4 Z" fill={c} strokeLinejoin="round" stroke={c} strokeWidth={1.5} />,
  (c) => (
    <g fill={c}>
      <rect x={4.5} y={12} width={4} height={7} rx={1.5} />
      <rect x={10} y={8} width={4} height={11} rx={1.5} />
      <rect x={15.5} y={4.5} width={4} height={14.5} rx={1.5} />
    </g>
  ),
  (c) => <path d="M3.5 13 C 6.5 7, 9 7, 12 12 S 17.5 17, 20.5 11" fill="none" stroke={c} strokeWidth={3} strokeLinecap="round" />,
  (c) => <path d="M12 5 V19 M5 12 H19" stroke={c} strokeWidth={3.4} strokeLinecap="round" />,
  (c) => <path d="M5 14 A 7 7 0 0 1 19 14 Z" fill={c} />,
  (c) => <path d="M12 3.5 L20.5 12 L12 20.5 L3.5 12 Z" fill={c} />,
  (c) => (
    <g fill={c}>
      <circle cx={8} cy={8} r={2.6} />
      <circle cx={16} cy={8} r={2.6} />
      <circle cx={8} cy={16} r={2.6} />
      <circle cx={16} cy={16} r={2.6} opacity={0.45} />
    </g>
  ),
  (c) => <path d="M6 8 L12 14 L18 8 M6 13 L12 19 L18 13" fill="none" stroke={c} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />,
  (c) => <path d="M12 3 C 12.8 9, 15 11.2, 21 12 C 15 12.8, 12.8 15, 12 21 C 11.2 15, 9 12.8, 3 12 C 9 11.2, 11.2 9, 12 3 Z" fill={c} />,
];
const PALETTE = ["#3D63FF", "#FF6A3D", "#12B886", "#F5A524", "#547CFF", "#0EA5E9", "#EF4444", "#22C55E", "#4B73FF", "#EC4899", "#14B8A6", "#F97316"];

type Word = { text: string; accent: boolean };
const parse = (s: string): Word[] =>
  s
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => (/^\*.+\*[.,!?]?$/.test(t) ? { text: t.replace(/\*/g, ""), accent: true } : { text: t.replace(/\*/g, ""), accent: false }));

const Phrase: React.FC<{
  slot: string;
  words: Word[];
  frame: number;
  start: number;
  size: number;
  maxW: number;
  font: string;
  color: string;
  accent: string;
  dark: boolean;
  out: number;
}> = ({ slot, words, frame, start, size, maxW, font, color, accent, dark, out }) => (
  <div
    data-21st-slot={slot}
    style={{
      position: "absolute",
      maxWidth: maxW,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      columnGap: size * 0.26,
      rowGap: size * 0.12,
      fontFamily: font,
      fontWeight: 500,
      fontSize: size,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color,
      opacity: 1 - out,
      filter: out > 0.01 ? `blur(${px(out * size * 0.3)}px)` : undefined,
    }}
  >
    {words.map((wd, i) => {
      const t0 = start + i * PER_WORD;
      const a = expoOut(prog(frame, t0, t0 + 6));
      const hi = expoOut(prog(frame, t0 + 4, t0 + 12));
      return (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: a,
            transform: `translateY(${px((1 - a) * size * 0.3)}px)`,
            padding: wd.accent ? `0 ${size * 0.12}px` : undefined,
            margin: wd.accent ? `0 ${-size * 0.06}px` : undefined,
            borderRadius: size * 0.16,
            backgroundImage: wd.accent ? `linear-gradient(${withAlpha(accent, dark ? 0.42 : 0.18)}, ${withAlpha(accent, dark ? 0.42 : 0.18)})` : undefined,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${(hi * 100).toFixed(2)}% 100%`,
          }}
        >
          {wd.text}
        </span>
      );
    })}
  </div>
);

/**
 * Integrations moment: a phrase types word by word at center while logo tiles pop in
 * around it and drift outward; a second phrase takes over and the tiles pull closer.
 */
export const Component: React.FC<Props> = ({ phrase, phrase2, logos, tiles, accent, color, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h, unit, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const dark = luminance(background) < 0.4;
  const w1 = parse(phrase);
  const w2 = parse(phrase2);
  const hasSwap = w2.length > 0;

  const textW = w * (portrait ? 0.82 : 0.6);
  const textH = h * (portrait ? 0.2 : 0.24);
  const longest = Math.max(phrase.length, phrase2.length);
  const size = fitFontSize({ chars: longest, boxW: textW, boxH: textH, lines: 2, charEm: 0.52, lineHeight: 1.12, max: unit * (portrait ? 7.2 : 6.4) });
  const out1 = hasSwap ? sineInOut(prog(frame, SWAP, SWAP + 6)) : 0;
  const pull = hasSwap ? 1 - 0.15 * sineInOut(prog(frame, SWAP, SWAP + 16)) : 1;
  const leave = 1 - exit;

  const tileBase = unit * (portrait ? 13 : 11);
  const cx = w / 2;
  const cy = h / 2;
  const exclW = textW / 2 + tileBase * 0.6;
  const exclH = textH / 2 + tileBase * 0.6;

  const items = Array.from({ length: tiles }, (_, i) => {
    const r1 = random(`lcb-a-${i}`);
    const r2 = random(`lcb-r-${i}`);
    const r3 = random(`lcb-s-${i}`);
    const ang = ((i + 0.5) / tiles) * Math.PI * 2 + (r1 - 0.5) * 0.22 - Math.PI / 2;
    const rad = 0.84 + 0.16 * r2;
    let x = Math.cos(ang) * w * (portrait ? 0.38 : 0.4) * rad;
    let y = Math.sin(ang) * h * (portrait ? 0.36 : 0.36) * rad;
    // Keep the phrase clear: push tiles that land in its box out vertically.
    if (Math.abs(x) < exclW && Math.abs(y) < exclH) y = Math.sign(y || 1) * (exclH + tileBase * 0.2 * r3);
    const size = tileBase * (0.78 + 0.4 * r3);
    const t0 = TILES_START + i * TILE_STAGGER;
    const s = spring({ frame: frame - t0, fps, config: POP });
    const pop = Math.abs(1 - s) < 1e-3 ? 1 : s;
    // Slow outward drift after landing (about 0.2 px/frame at 1080p).
    const drift = 1 + Math.max(0, frame - t0) * 0.0006 + exit * 0.12;
    x *= drift * pull;
    y *= drift * pull;
    return { i, x, y, size, pop, rot: (r1 - 0.5) * 10, depth: r3 };
  });

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${withAlpha(accent, dark ? 0.16 : 0.07)}, transparent 70%)`,
          opacity: leave,
        }}
      />
      {items.map((t) => {
        const logo = logos[t.i];
        const tileBg = dark ? "#18181B" : "#FFFFFF";
        return (
          <div
            key={t.i}
            style={{
              position: "absolute",
              left: px(cx + t.x - t.size / 2),
              top: px(cy + t.y - t.size / 2),
              width: px(t.size),
              height: px(t.size),
              borderRadius: t.size * 0.26,
              background: tileBg,
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"}`,
              boxShadow: `0 ${px(t.size * 0.08)}px ${px(t.size * 0.28)}px ${withAlpha("#000000", dark ? 0.45 : 0.1)}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: Math.min(1, t.pop * 2) * leave,
              transform: `rotate(${t.rot.toFixed(2)}deg) scale(${(0.6 + 0.4 * t.pop).toFixed(4)})`,
            }}
          >
            {logo ? (
              <Img src={logo} style={{ width: t.size * 0.56, height: t.size * 0.56, objectFit: "contain" }} />
            ) : (
              <svg viewBox="0 0 24 24" width={t.size * 0.5} height={t.size * 0.5}>
                {GLYPHS[t.i % GLYPHS.length]!(PALETTE[t.i % PALETTE.length]!)}
              </svg>
            )}
          </div>
        );
      })}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: leave, transform: `scale(${1 - 0.03 * exit})` }}>
        <Phrase slot="phrase" words={w1} frame={frame} start={P1_START} size={size} maxW={textW} font={font} color={color} accent={accent} dark={dark} out={out1} />
        {hasSwap ? <Phrase slot="phrase2" words={w2} frame={frame} start={P2_START} size={size} maxW={textW} font={font} color={color} accent={accent} dark={dark} out={0} /> : null}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
