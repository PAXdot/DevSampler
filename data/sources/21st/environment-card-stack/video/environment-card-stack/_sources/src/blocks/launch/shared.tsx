// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { band, brandFontStack, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import type { launchMeta } from "./contract";
import { palette, Media, type MaterialColors, type Palette } from "../ui/shared/theme";
import { SampleScreen } from "../ui/shared/sample-ui";

export function useLaunch(theme: "light" | "dark", fontFamily: string, timing: ReturnType<typeof launchMeta>["timing"], colors?: MaterialColors) {
  const layout = useLayout();
  const { height: nativeHeight } = useVideoConfig();
  return { ...layout, ...useEnterExit(timing), p: palette(theme, colors), font: brandFontStack(fontFamily), nativeFont: nativeHeight * (layout.portrait ? 0.032 : 0.020) };
}

export const Stage: React.FC<{ opacity: number; font: string; children: React.ReactNode }> = ({ opacity, font, children }) => (
  <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity, fontFamily: font }}>{children}</AbsoluteFill>
);

export const Screen: React.FC<{ image: string; width: number; height: number; theme: "light" | "dark"; accent: string; frame: number; p?: Palette; variant?: "dashboard" | "article" | "list" }> = ({ image, width, height, theme, accent, frame, p = palette(theme), variant = "dashboard" }) => (
  <div style={{ position: "relative", width, height, background: p.surface, overflow: "hidden" }}>
    {image ? <Media src={image} fit="cover" position="50% 50%" /> : <SampleScreen kind={variant} w={width} h={height} p={p} accent={accent} frame={frame} seed="launch-original" />}
  </div>
);

export const Label: React.FC<{ text: string; slot?: string; width: number; height: number; color: string; max: number; min?: number; lines?: number; weight?: number }> = ({ text, slot, width, height, color, max, min = 0, lines = 1, weight = 500 }) => (
  <div data-21st-slot={slot} style={{ width, height, display: "flex", alignItems: "center", fontSize: Math.max(min, fitFontSize({ chars: text.length, boxW: width, boxH: height, max, lines, lineHeight: 1.25 })), lineHeight: 1.25, fontWeight: weight, color, whiteSpace: lines > 1 ? "normal" : "nowrap", overflowWrap: lines > 1 ? "anywhere" : undefined, letterSpacing: "-0.025em" }}>{text}</div>
);

export const opening = (frame: number, exit: number) => band(frame, 0, 12) * (1 - exit);
export const border = (accent: string) => `1px solid ${withAlpha(accent, 0.22)}`;
