// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, inkOn, brandFontStack, easeInOut, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { PhoneSlab, PHONE_RATIO } from "../_shared/device";
import { Icon, type IconName } from "../_shared/icons";
import { contrastInk, Media, SampleScreen } from "../_shared/media";
import { meta } from "./big-bang.meta";
import type { schema } from "./big-bang.schema";

const ICONS: IconName[] = ["heart", "star", "zap", "music", "message", "image", "play", "globe", "chart", "mail"];
const WORDS = ["wow", "new", "yes", "ship it", "10x", "nice", "hello", "live"];

type Sticker = { x: number; y: number; size: number; rot: number; kind: number; color: string; icon: IconName; word: string; drift: number };

/** Center phone and a cloud of stickers burst out of a point, then a slow push-in while the phone turns to face you (research V07). */
export const Component: React.FC<z.infer<typeof schema>> = ({ label, screen, stickers, seed, secondary, frameColor, screenBackground, screenColor, accent, color, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const ph = Math.min(height * 0.62, width * 1.0);
  const pw = ph / PHONE_RATIO;
  const cx = width / 2;
  const cy = height * 0.47;
  const palette = [accent, secondary ?? accent, ...[85, 70, 55, 40, 25, 10].map((p) => `color-mix(in oklch, ${accent} ${p}%, #A1A1AA)`)];
  const paper = `oklch(from ${screenBackground ?? accent} 0.992 min(c, 0.004) h)`;
  const shadow = `oklch(from ${accent} 0.045 min(c, 0.004) h)`;

  // Stickers on a jittered spiral, kept clear of the phone.
  const list: Sticker[] = Array.from({ length: stickers }, (_, i) => {
    const r = (k: string) => random(`bb-${seed}-${i}-${k}`);
    const a = i * 2.39996 + r("a") * 0.5;
    const ring = 0.36 + 0.64 * Math.sqrt((i + 0.5) / stickers) + (r("r") - 0.5) * 0.12;
    const rx = Math.max(width, pw * 3) * 0.5;
    const ry = Math.max(height, ph * 1.3) * 0.5;
    let x = Math.cos(a) * rx * ring;
    let y = Math.sin(a) * ry * ring;
    // Push out of the phone's box.
    if (Math.abs(x) < pw * 0.85 && Math.abs(y) < ph * 0.62) x = Math.sign(x || 1) * (pw * 0.85 + r("p") * unit * 6);
    y = Math.max(-height * 0.47, Math.min(height * 0.5, y));
    return {
      x,
      y,
      size: unit * (7 + r("s") * 6),
      rot: (r("t") - 0.5) * 40,
      kind: Math.floor(r("k") * 4),
      color: palette[Math.floor(r("c") * palette.length)] ?? accent,
      icon: ICONS[Math.floor(r("i") * ICONS.length)] ?? "star",
      word: WORDS[Math.floor(r("w") * WORDS.length)] ?? "wow",
      drift: 0.6 + r("d") * 0.8,
    };
  });

  // Burst: 0.02 -> 1.06 in 9f expo-out, settle to 1 by f18; then push-in to 1.08.
  const burst = 0.02 + 1.04 * expoOut((frame - 2) / 9) - 0.06 * easeInOut((frame - 10) / 8);
  const push = 1 + 0.08 * ramp(frame, [18, durationInFrames], [0, 1]);
  const turn = -40 + 30 * easeInOut((frame - 6) / 40);
  const out = Math.pow(exit, 2);
  const labelIn = springSnap(frame, fps, 20, APPLE);
  const labelSize = fitFontSize({ chars: label.length + 2, boxW: width * 0.7, boxH: aspect === "9:16" ? height * 0.06 : unit * 5, charEm: 0.55, max: aspect === "9:16" ? height * 0.031 : unit * 3.6 });

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 50% 47%, ${withAlpha(accent, 0.14)}, transparent 45%)`, opacity: band(frame, 2, 16) * (1 - exit) }} />
      <div style={{ position: "absolute", left: cx, top: cy, transform: `scale(${Math.max(0.02, burst) * push * (1 + out * 0.6)})`, opacity: 1 - out }}>
        {list.map((s, i) => {
          const d = s.drift * ramp(frame, [10, durationInFrames], [0, 1]) * unit * 3;
          const len = Math.hypot(s.x, s.y) || 1;
          const common: React.CSSProperties = {
            position: "absolute",
            left: s.x + (s.x / len) * d,
            top: s.y + (s.y / len) * d,
            transform: `translate(-50%, -50%) rotate(${s.rot}deg)`,
            boxShadow: `0 ${unit * 0.6}px ${unit * 1.6}px ${withAlpha(shadow, 0.16)}`,
            border: `${unit * 0.5}px solid ${paper}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          };
          if (s.kind === 0)
            return (
              <div key={i} style={{ ...common, width: s.size, height: s.size, borderRadius: s.size * 0.28, background: s.color }}>
                <Icon name={s.icon} size={s.size * 0.5} color={contrastInk(s.color)} strokeWidth={2.4} />
              </div>
            );
          if (s.kind === 1)
            return (
              <div key={i} style={{ ...common, width: s.size * 0.86, height: s.size * 0.86, borderRadius: 999, background: paper, border: `${unit * 0.5}px solid ${s.color}` }}>
                <Icon name={s.icon} size={s.size * 0.42} color={s.color} fill={s.icon === "heart" || s.icon === "star" ? s.color : "none"} />
              </div>
            );
          if (s.kind === 2)
            return (
              <div key={i} style={{ ...common, height: s.size * 0.62, padding: `0 ${s.size * 0.32}px`, borderRadius: 999, background: s.color, color: contrastInk(s.color), fontFamily: font, fontWeight: 700, fontSize: s.size * 0.3, whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
                {s.word}
              </div>
            );
          return (
            <div key={i} style={{ ...common, border: "none", boxShadow: "none", filter: `drop-shadow(0 ${unit * 0.5}px ${unit * 0.8}px ${withAlpha(shadow, 0.18)})` }}>
              <Icon name="star" size={s.size * 0.9} color={contrastInk(s.color)} fill={s.color} strokeWidth={1.6} />
            </div>
          );
        })}
        <div style={{ position: "absolute", left: -pw / 2, top: -ph / 2, width: pw, height: ph, perspective: unit * 160 }}>
          <div style={{ transformStyle: "preserve-3d", transform: `rotateY(${turn}deg) rotateX(6deg) rotateZ(4deg)` }}>
            <PhoneSlab w={pw} h={ph} depth={pw * 0.075} body={frameColor}>
              <Media src={screen} fallback={<SampleScreen variant={0} w={pw * 0.93} h={ph * 0.97} accent={accent} surfaceColor={screenBackground} textColor={screenColor} fontFamily={font} t={ramp(frame, [0, durationInFrames], [0.1, 0.8])} />} />
            </PhoneSlab>
          </div>
        </div>
      </div>
      {label ? (
        <div style={{ position: "absolute", left: 0, right: 0, top: cy + ph * 0.56, display: "flex", justifyContent: "center", opacity: band(frame, 20, 28) * (1 - exit), transform: `translateY(${(1 - labelIn) * unit * 3}px)` }}>
          <div
            data-21st-slot="label"
            style={{ padding: `${labelSize * 0.5}px ${labelSize * 1}px`, borderRadius: 999, background: color, color: background === "transparent" ? inkOn(color) : background, fontFamily: font, fontWeight: 600, fontSize: labelSize, letterSpacing: "-0.02em", whiteSpace: "nowrap", boxShadow: `0 ${unit}px ${unit * 3}px ${withAlpha(shadow, 0.18)}` }}
          >
            {label}
          </div>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
