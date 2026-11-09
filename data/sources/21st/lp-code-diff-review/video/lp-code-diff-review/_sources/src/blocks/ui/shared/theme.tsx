// Built with Remotion - https://remotion.pro/license
// Neutral light/dark surfaces for the "ui" block group, plus a media slot renderer.
import React from "react";
import { Img, OffthreadVideo } from "remotion";
import { inkOn, luminance, withAlpha } from "../../../kit/index";

export type Theme = "light" | "dark";

export type Palette = {
  dark: boolean;
  /** Card / window fill. */
  surface: string;
  /** Inset fields, rows, hover fills. */
  raised: string;
  ink: string;
  muted: string;
  faint: string;
  line: string;
  /** Skeleton bars. */
  bone: string;
  shadow: (u: number) => string;
};

export type MaterialColors = { surfaceColor?: string; textColor?: string };

export function palette(theme: Theme, colors?: MaterialColors): Palette {
  if (colors?.surfaceColor || colors?.textColor) {
    const surface = colors.surfaceColor ?? inkOn(colors.textColor!);
    const ink = colors.textColor ?? inkOn(surface);
    const dark = luminance(surface) < 0.4;
    return {
      dark, surface, ink,
      raised: `color-mix(in srgb, ${ink} 6%, ${surface})`,
      muted: withAlpha(ink, 0.68), faint: withAlpha(ink, 0.42),
      line: withAlpha(ink, 0.13), bone: withAlpha(ink, 0.1),
      // Shadows fall dark on any surface; a light shadow under a dark card reads as a glow.
      shadow: (u) => `0 ${u * 2.4}px ${u * 7}px -${u * 1.2}px rgba(0,0,0,${dark ? 0.6 : 0.2}), 0 0 0 1px ${withAlpha(ink, 0.1)}`,
    };
  }
  if (theme === "dark") {
    return {
      dark: true,
      surface: "#141417",
      raised: "#1D1D21",
      ink: "#F4F4F5",
      muted: "rgba(244,244,245,0.58)",
      faint: "rgba(244,244,245,0.34)",
      line: "rgba(255,255,255,0.09)",
      bone: "rgba(255,255,255,0.08)",
      shadow: (u) => `0 ${u * 2.4}px ${u * 7}px -${u * 1.2}px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)`,
    };
  }
  return {
    dark: false,
    surface: "#FFFFFF",
    raised: "#F4F4F5",
    ink: "#0A0A0B",
    muted: "rgba(10,10,11,0.56)",
    faint: "rgba(10,10,11,0.36)",
    line: "rgba(10,10,11,0.08)",
    bone: "rgba(10,10,11,0.07)",
    shadow: (u) => `0 ${u * 2.4}px ${u * 7}px -${u * 1.2}px rgba(0,0,0,0.38), 0 0 0 1px rgba(10,10,11,0.06)`,
  };
}

/** A soft accent-tinted fill on the palette's surface. */
export const tint = (accent: string, p: Palette, a = 0.12) => withAlpha(accent, p.dark ? a * 1.5 : a);

const isVideo = (src: string) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);

/** Renders a user image or video slot, cover-fit. */
export const Media: React.FC<{ src: string; fit?: "cover" | "contain"; position?: string }> = ({ src, fit = "cover", position = "50% 0%" }) =>
  isVideo(src) ? (
    <OffthreadVideo src={src} muted style={{ width: "100%", height: "100%", objectFit: fit, objectPosition: position }} />
  ) : (
    <Img src={src} style={{ width: "100%", height: "100%", objectFit: fit, objectPosition: position }} />
  );

/** Grid-row height trick: 0..1 grows an item to its own content height, no measuring. */
export const Grow: React.FC<{ p: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ p, children, style }) => (
  <div style={{ display: "grid", gridTemplateRows: `${Math.max(0, Math.min(1, p))}fr`, ...style }}>
    <div style={{ minHeight: 0, overflow: "hidden" }}>{children}</div>
  </div>
);

/** Three window dots. */
export const TrafficLights: React.FC<{ size: number; gap?: number; mono?: string }> = ({ size, gap, mono }) => (
  <div style={{ display: "flex", gap: gap ?? size * 0.7 }}>
    {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
      <div key={c} style={{ width: size, height: size, borderRadius: "50%", background: mono ?? c, boxShadow: `inset 0 0 0 0.5px ${withAlpha(inkOn(mono ?? c), 0.18)}` }} />
    ))}
  </div>
);
