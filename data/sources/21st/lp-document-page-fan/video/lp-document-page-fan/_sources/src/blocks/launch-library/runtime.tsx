// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, luminance, ramp, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { SampleScreen } from "../ui/shared/sample-ui";
import { Media, palette } from "../ui/shared/theme";
import { STYLE_IDS, slugFor, canonicalSlugFor, isCuratedPattern, type SceneProps, type StyledProps } from "./contract";
import type { BlockModules } from "../types";

export type PatternComponent = React.FC<StyledProps>;
export type Design = ReturnType<typeof designFor> & { stageWidth?: number; stageHeight?: number; portrait?: boolean; minLabelFont?: number };
export function libraryFontStack(family: string) {
  if (family === "Georgia") return 'Georgia, "Times New Roman", serif';
  if (family === "Menlo") return 'Menlo, "SFMono-Regular", Consolas, monospace';
  return brandFontStack(family);
}
export function designFor(style: StyledProps["style"], accent: string, props?: StyledProps) {
  if (style === "product") {
    const bg = props?.background ?? inkOn(accent), ink = props?.foreground ?? inkOn(bg);
    const bodyFamily = props?.bodyFontFamily ?? props?.fontFamily ?? "Inter", dark = luminance(bg) <= 0.45;
    return { brandDriven: true, bg, ink, muted: withAlpha(ink, 0.64), surface: bg, line: withAlpha(ink, 0.18), radius: 12, weight: 600, bodyFont: libraryFontStack(bodyFamily), monoFont: libraryFontStack(props?.monoFontFamily ?? props?.fontFamily ?? bodyFamily), monospace: /mono|menlo|consolas/i.test(bodyFamily), secondary: props?.secondary ?? accent, shade: dark ? bg : ink, shadow: `0 12px 32px ${withAlpha(dark ? bg : ink, 0.12)}`, dark, accent };
  }
  // These intrinsic palette presets are only the historical compatibility
  // skins. Canonical modules select product and bind every material to props.
  const skin = {
    swiss: { bg: "#F2F3EF", ink: "#161817", muted: "#686D69", surface: "#FFFFFF", line: "#C9CCC6", radius: 0, weight: 650, bodyFamily: "Geist", dark: false, accent },
    editorial: { bg: "#EFE8DA", ink: "#322920", muted: "#817565", surface: "#FAF6EE", line: "#CFC3AF", radius: 3, weight: 400, bodyFamily: "Georgia", dark: false, accent },
    glass: { bg: "#0D1124", ink: "#EEF0FF", muted: "#9BA5CD", surface: "#202944D9", line: "#879BC644", radius: 24, weight: 500, bodyFamily: "Geist", dark: true, accent },
    terminal: { bg: "#080E0B", ink: "#CCF5D6", muted: "#64876D", surface: "#0F1912", line: "#2A4B34", radius: 0, weight: 500, bodyFamily: "Menlo", dark: true, accent },
    studio: { bg: "#253FD0", ink: "#FFF8E3", muted: "#CFD1D5", surface: "#13228C", line: "#8EADFF", radius: 32, weight: 850, bodyFamily: "Geist", dark: true, accent },
  }[style];
  const bodyFamily = props?.bodyFontFamily ?? props?.fontFamily ?? skin.bodyFamily;
  const shade = skin.dark ? skin.bg : skin.ink;
  const shadow = style === "editorial" ? `0 14px 32px ${withAlpha(shade, 0.05)}` : style === "glass" ? `0 24px 64px ${withAlpha(shade, 0.4)}, inset 0 1px ${withAlpha(skin.ink, 0.21)}` : style === "studio" ? `12px 12px 0 ${shade}` : "none";
  return { ...skin, bodyFont: libraryFontStack(bodyFamily), monoFont: libraryFontStack(props?.monoFontFamily ?? props?.fontFamily ?? bodyFamily), monospace: /mono|menlo|consolas/i.test(bodyFamily), secondary: props?.secondary ?? accent, shade, shadow, brandDriven: false };
}
export function useScene(props: StyledProps) {
  const layout = useLayout();
  const frame = useCurrentFrame();
  const shape = (t: number) => props.style === "terminal" ? Math.floor(t * 12) / 12 : props.style === "swiss" ? expoOut(t) : easeInOut(t);
  const hasHeading = props.style !== "product" || props.showHeading;
  const d: Design = { ...designFor(props.style, props.accent, props), stageWidth: layout.width, stageHeight: layout.height, portrait: layout.portrait, minLabelFont: layout.height * (layout.portrait ? 0.03125 : 0.01875) };
  const heading = d.brandDriven ? headingLayout(props, layout.width, layout.height, layout.portrait) : undefined;
  const bodyY = hasHeading ? heading?.bodyY ?? 0.34 : 0.1;
  return { ...layout, frame, hasHeading, heading, bodyY, bodyH: hasHeading ? heading ? 0.9 - bodyY : 0.55 : 0.8, d, font: libraryFontStack(props.fontFamily), reveal: (start = 14, end = 50) => shape(ramp(frame, [start, end], [0, 1])), stagger: (i: number, start = 18, length = 20) => shape(ramp(frame, [start + i * 8, start + i * 8 + length], [0, 1])) };
}

/** Optional context headings reserve real rows before the animated body. */
function headingLayout(props: StyledProps, w: number, h: number, portrait: boolean) {
  const width = w * 0.84, min = h * (portrait ? 0.03125 : 0.01875);
  const titleFont = Math.max(min, fitFontSize({ chars: props.title.length, boxW: width, boxH: h * 0.16, lines: portrait ? 3 : 2, charEm: 0.72, max: h * (portrait ? 0.044 : 0.06), lineHeight: 1.25 }));
  const subtitleFont = min;
  const rows = (text: string, size: number) => Math.max(1, Math.ceil(text.length * size * 0.72 / width));
  const titleH = rows(props.title, titleFont) * titleFont * 1.25;
  const subtitleH = rows(props.subtitle, subtitleFont) * subtitleFont * 1.25;
  const top = h * 0.05, gap = min * 0.4;
  return { top, titleFont, subtitleFont, titleH, subtitleH, gap, bodyY: Math.max(0.34, (top + titleH + gap + subtitleH + min * 0.65) / h) };
}

/** Compatibility skins stay available to old documents; canonical refs use product material. */
export const Canvas: React.FC<StyledProps & { children: React.ReactNode; noHeading?: boolean }> = (props) => {
  const { width: w, height: h, unit: u, portrait, frame, d, font, heading } = useScene(props);
  const entrance = easeInOut(ramp(frame, [0, 14], [0, 1]));
  const { exit: exitProgress } = useEnterExit({ phases: { in: 16, out: 12 } });
  const exit = props.style === "product" ? 1 : 1 - exitProgress;
  const headingW = w * (props.style === "editorial" && !portrait ? 0.68 : 0.84);
  const titleSize = fitFontSize({ chars: props.title.length, boxW: headingW, boxH: h * 0.125, lines: portrait ? 2 : 1, charEm: props.style === "terminal" ? 0.65 : props.style === "studio" ? 0.68 : 0.58, max: u * (props.style === "studio" ? 7.6 : props.style === "editorial" ? 7 : 5.5) });
  return <AbsoluteFill style={{ background: props.style === "product" && !props.showBackground ? undefined : d.bg, color: d.ink, fontFamily: font, overflow: "hidden" }}>
    {props.style === "swiss" && <><div style={{ position: "absolute", left: w * 0.045, top: h * 0.065, width: w * 0.015, height: h * 0.87, background: props.accent }} /><div style={{ position: "absolute", left: w * 0.08, right: w * 0.08, top: h * 0.285, borderTop: `1px solid ${d.line}` }} /></>}
    {props.style === "editorial" && <><div style={{ position: "absolute", inset: "4%", border: `1px solid ${d.line}` }} /><div style={{ position: "absolute", left: "8%", top: "5.5%", fontSize: u * 1.45, fontFamily: d.bodyFont, fontStyle: "italic", color: d.muted }}>Notes on a new possibility</div></>}
    {props.style === "glass" && <><div style={{ position: "absolute", width: w * 0.7, height: h * 0.7, left: -w * 0.2, top: h * 0.15, background: `radial-gradient(ellipse, ${withAlpha(props.accent, 0.23)}, transparent 68%)`, transform: `translateX(${Math.min(frame, 132) * u * 0.01}px)` }} /><div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 90% 20%,${withAlpha(d.secondary, 0.13)},transparent 65%)` }} /></>}
    {props.style === "terminal" && <><div style={{ position: "absolute", inset: "3%", border: `1px solid ${d.line}`, backgroundImage: `linear-gradient(${withAlpha(d.line, 0.2)} 1px,transparent 1px),linear-gradient(90deg,${withAlpha(d.line, 0.2)} 1px,transparent 1px)`, backgroundSize: `${u * 4}px ${u * 4}px` }} /><div style={{ position: "absolute", left: "6%", top: "4%", fontSize: u * 1.4, color: props.accent, fontFamily: d.monoFont }}>~/launch / {Math.min(100, Math.round(frame / 1.16))}%</div></>}
    {props.style === "studio" && <><div style={{ position: "absolute", right: -u * 14, top: -u * 27, width: u * 34, height: u * 34, border: `${u * 7}px solid ${props.accent}`, borderRadius: "50%" }} /><div style={{ position: "absolute", bottom: "1.5%", left: "5%", width: u * 14, height: u * 2.5, background: props.accent, transform: "rotate(-12deg)" }} /></>}
    <AbsoluteFill style={{ opacity: entrance * exit }}>
      {!props.noHeading && (props.style !== "product" || props.showHeading) && <div style={{ position: "absolute", left: w * 0.08, top: heading?.top ?? h * (props.style === "editorial" ? 0.09 : 0.08), width: headingW }}>
        <div data-21st-slot="title" style={{ width: headingW, height: heading?.titleH, fontSize: heading?.titleFont ?? titleSize, fontWeight: d.weight, lineHeight: 1.25, letterSpacing: props.style === "terminal" ? "-0.025em" : "-0.045em", textTransform: props.style === "studio" ? "uppercase" : "none", whiteSpace: d.brandDriven || portrait ? "normal" : "nowrap", overflowWrap: d.brandDriven ? "anywhere" : undefined }}>{props.title}</div>
        <div data-21st-slot="subtitle" style={{ width: headingW, height: heading?.subtitleH, marginTop: heading?.gap ?? u * 1.5, fontFamily: d.bodyFont, color: d.muted, fontSize: heading?.subtitleFont ?? fitFontSize({ chars: props.subtitle.length, boxW: headingW, boxH: h * 0.065, lines: portrait ? 3 : 2, max: u * 2.25 }), lineHeight: d.brandDriven ? 1.25 : 1.35, overflowWrap: d.brandDriven ? "anywhere" : undefined }}>{props.subtitle}</div>
      </div>}
      {props.children}
    </AbsoluteFill>
  </AbsoluteFill>;
};

export const Panel: React.FC<{ d: Design; style?: React.CSSProperties; children?: React.ReactNode }> = ({ d, style, children }) => <div style={{ background: d.surface, color: d.ink, border: `1px solid ${d.line}`, borderRadius: d.radius, boxShadow: d.shadow, boxSizing: "border-box", ...style }}>{children}</div>;
export const Text: React.FC<{ text: string; width: number; height: number; d: Design; max?: number; slot?: string; lines?: number; style?: React.CSSProperties }> = ({ text, width, height, d, max = height * 0.68, slot, lines = 1, style }) => <div data-21st-slot={slot === "labels" && d.brandDriven ? "items" : slot} style={{ width, height, fontSize: fitFontSize({ chars: text.length, boxW: width, boxH: height, max, lines, charEm: d.monospace ? 0.66 : 0.6, lineHeight: 1.25 }), color: d.ink, fontWeight: d.weight, lineHeight: 1.25, overflowWrap: "anywhere", ...style }}>{text}</div>;
export const Screen: React.FC<{ image?: string; w: number; h: number; d: Design; kind?: "dashboard" | "list" | "article"; seed?: string }> = ({ image = "", w, h, d, kind = "dashboard", seed = "library" }) => {
  const p = palette(d.dark ? "dark" : "light");
  const themed = d.brandDriven ? { ...p, surface: d.surface, raised: withAlpha(d.ink, 0.05), ink: d.ink, muted: d.muted, faint: withAlpha(d.ink, 0.38), line: d.line, bone: withAlpha(d.ink, 0.12), shadow: () => d.shadow } : p;
  return <div data-21st-slot={d.brandDriven ? "screenshot" : "image"} style={{ position: "relative", width: w, height: h, overflow: "hidden", borderRadius: Math.max(0, d.radius * 0.65), background: d.surface }}>{image ? <Media src={image} fit="cover" position="50% 50%" /> : <SampleScreen kind={kind} w={w} h={h} p={themed} accent={d.accent} frame={60} seed={seed} />}</div>;
};
export function modulesFor(components: Record<string, PatternComponent>): BlockModules {
  return Object.fromEntries(Object.entries(components).flatMap(([id, Component]) => STYLE_IDS.map(style => [slugFor(id, style), { Component: (props: SceneProps) => <Component {...props} style={style} /> }])));
}
/** Canonical refs use a brand-derived material. Legacy style refs retain their original rendering. */
export function canonicalModulesFor(components: Record<string, PatternComponent>): BlockModules {
  return Object.fromEntries(Object.entries(components).filter(([id]) => isCuratedPattern(id)).map(([id, Component]) => [canonicalSlugFor(id), { Component: (props: Record<string, unknown>) => <Component {...props as SceneProps} labels={props.items as string[]} image={props.screenshot as string | undefined} secondaryImage={props.from as string | undefined} style="product" /> }]));
}
