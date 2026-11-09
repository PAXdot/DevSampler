// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../../launch/shared";
import type { Palette } from "../../ui/shared/theme";
import { meta } from "./document-transform.meta";
import type { schema } from "./document-transform.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, sourceTitle, resultTitle, lines, sourceImage, resultImage, transformFrame, resultVariant, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, durationInFrames, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const f = frame * Math.max(1, 150 / durationInFrames), t = easeInOut(ramp(f, [transformFrame, transformFrame + 28], [0, 1]));
  const finalW = w * 0.92, initialW = w * (portrait ? 0.77 : 0.57), cw = initialW + (finalW - initialW) * t, ch = h * 0.6;
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: finalW }}>
    <Label min={nativeFont} lines={portrait ? 2 : 1} text={headline} slot="headline" width={finalW} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} weight={600} />
    <div style={{ width: cw, height: ch, margin: `${u * 3}px auto 0`, position: "relative", borderRadius: u * 2.4, boxShadow: p.shadow(u), overflow: "hidden", background: p.surface }}>
      <div style={{ position: "absolute", inset: 0, opacity: 1 - t, transform: `scale(${1 - t * 0.08})`, filter: `blur(${t * u * 0.8}px)` }}>
        {sourceImage ? <Screen image={sourceImage} width={cw} height={ch} theme={theme} p={p} accent={accent} frame={0} /> : <div style={{ padding: u * 3.4 }}>
          <Label min={nativeFont} lines={portrait ? 2 : 1} text={sourceTitle} slot="sourceTitle" width={cw - u * 6.8} height={portrait ? nativeFont * 2.6 : u * 6} color={p.ink} max={u * 3.3} weight={600} />
          <div style={{ height: 1, background: p.line, margin: `${u * 2}px 0` }} />
          {lines.map((line, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 1.5, marginTop: u * 2, opacity: ramp(f, [12 + i * 5, 20 + i * 5], [0, 1]), transform: `translateY(${u * (1 - ramp(f, [12 + i * 5, 20 + i * 5], [0, 1]))}px)` }}><div style={{ width: u * 1.2, height: u * 1.2, borderRadius: u * 0.3, background: withAlpha(accent, 0.3), flexShrink: 0 }} /><div data-21st-slot="lines" style={{ whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere", color: p.muted, fontSize: Math.max(nativeFont, fitFontSize({ chars: line.length, boxW: cw - u * 10, boxH: u * 4, max: u * 2.4, lines: portrait ? 2 : 1 })) }}>{line}</div></div>)}
        </div>}
      </div>
      <div style={{ position: "absolute", inset: 0, opacity: t, transform: `scale(${0.94 + t * 0.06})` }}>{resultImage ? <Screen image={resultImage} width={cw} height={ch} theme={theme} p={p} accent={accent} frame={0} variant={resultVariant} /> : <Workspace title={sourceTitle} lines={lines} variant={resultVariant} width={cw} height={ch} u={u} font={nativeFont} portrait={portrait} p={p} accent={accent} f={f - transformFrame - 10} />}</div>
    </div>
    <div style={{ marginTop: u * 3, opacity: t }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={resultTitle} slot="resultTitle" width={finalW} height={portrait ? nativeFont * 2.6 : u * 5} color={p.muted} max={u * 2.8} /></div>
  </div></Stage>;
};

const BARS = [0.42, 0.58, 0.5, 0.72, 0.64, 0.86, 0.78];
const STATUS = [1, 1, 0.6, 0.25, 0, 0];

/** The brief's own lines, organized: a workspace page with the brief title, progress and a task table. */
const Workspace: React.FC<{ title: string; lines: string[]; variant: "dashboard" | "article" | "list"; width: number; height: number; u: number; font: number; portrait: boolean; p: Palette; accent: string; f: number }> = ({ title, lines, variant, width, height, u, font, portrait, p, accent, f }) => {
  const pad = u * (portrait ? 3.4 : 2.6), side = portrait ? 0 : width * 0.19;
  const done = lines.filter((_, i) => (STATUS[i] ?? 0) >= 1).length;
  const grow = (i: number) => easeInOut(ramp(f, [i * 2, 14 + i * 2], [0, 1]));
  const rowIn = (i: number) => ramp(f, [6 + i * 3, 14 + i * 3], [0, 1]);
  const chart = variant !== "list";
  const card: React.CSSProperties = { background: p.raised, border: `1px solid ${p.line}`, borderRadius: u * 1.4, padding: pad * 0.7, boxSizing: "border-box" };
  return <div style={{ position: "absolute", inset: 0, display: "flex", background: p.surface, color: p.ink, fontSize: font, lineHeight: 1.25 }}>
    {side ? <div style={{ width: side, flexShrink: 0, borderRight: `1px solid ${p.line}`, padding: pad * 0.8, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: u * 1.6 }}>
      <div style={{ display: "flex", gap: u * 0.6, marginBottom: u }}>{[0, 1, 2].map(i => <div key={i} style={{ width: u * 0.9, height: u * 0.9, borderRadius: "50%", background: p.line }} />)}</div>
      {lines.map((_, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: u, padding: `${u * 0.7}px ${u * 0.8}px`, borderRadius: u * 0.8, background: i === 0 ? withAlpha(accent, 0.16) : undefined }}>
        <div style={{ width: u * 1.3, height: u * 1.3, borderRadius: u * 0.35, background: i === 0 ? accent : p.faint, flexShrink: 0 }} />
        <div style={{ height: u * 0.8, borderRadius: u, width: `${[70, 52, 62, 46, 58, 40][i] ?? 50}%`, background: i === 0 ? withAlpha(accent, 0.6) : p.bone }} />
      </div>)}
    </div> : null}
    <div style={{ flex: 1, minWidth: 0, padding: pad, display: "flex", flexDirection: "column", gap: pad * 0.7, boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u * 2 }}>
        <div style={{ fontSize: font * 1.35, fontWeight: 600, letterSpacing: "-0.02em", minWidth: 0 }}>{title}</div>
        <div style={{ display: "flex", flexShrink: 0 }}>{[0.9, 0.6, 0.35].map((a, i) => <div key={i} style={{ width: font * 1.2, height: font * 1.2, borderRadius: "50%", marginLeft: i ? -font * 0.35 : 0, background: withAlpha(accent, a), border: `${Math.max(1, u * 0.25)}px solid ${p.surface}` }} />)}</div>
      </div>
      {chart ? <div style={{ display: "flex", gap: pad * 0.6, height: portrait ? height * 0.24 : height * 0.4, flexShrink: 0 }}>
        <div style={{ ...card, width: portrait ? "38%" : "28%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: font * 2.1, fontWeight: 600, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{Math.round(done * easeInOut(ramp(f, [0, 20], [0, 1])))}<span style={{ color: p.faint }}>/{lines.length}</span></div>
          <div style={{ height: u * 0.9, borderRadius: u, background: p.bone, overflow: "hidden" }}><div style={{ width: `${(done / lines.length) * 100 * grow(0)}%`, height: "100%", background: accent }} /></div>
        </div>
        <div style={{ ...card, flex: 1, display: "flex", alignItems: "flex-end", gap: u * (portrait ? 1.6 : 1.2), backgroundImage: `linear-gradient(${p.line} 1px, transparent 1px)`, backgroundSize: `100% ${u * 3.2}px`, backgroundPosition: `0 ${pad * 0.7}px` }}>
          {BARS.map((b, i) => <div key={i} style={{ flex: 1, height: `${b * 100 * grow(i)}%`, borderRadius: `${u * 0.6}px ${u * 0.6}px 0 0`, background: i === BARS.length - 1 ? accent : withAlpha(accent, 0.35 + i * 0.06) }} />)}
        </div>
      </div> : null}
      <div style={{ ...card, padding: 0, flex: chart ? undefined : 1, minHeight: 0, overflow: "hidden" }}>
        {lines.map((line, i) => { const st = STATUS[i] ?? 0; return <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 1.4, padding: `${pad * (portrait ? 0.42 : 0.36)}px ${pad * 0.7}px`, borderTop: i ? `1px solid ${p.line}` : undefined, opacity: rowIn(i) }}>
          <div style={{ width: font * 0.85, height: font * 0.85, borderRadius: font * 0.22, flexShrink: 0, boxSizing: "border-box", border: st >= 1 ? undefined : `${Math.max(1, u * 0.22)}px solid ${p.faint}`, background: st >= 1 ? accent : undefined }} />
          <div style={{ flex: 1, minWidth: 0, color: st >= 1 ? p.muted : p.ink, textDecoration: st >= 1 ? "line-through" : undefined, textDecorationColor: p.faint }}>{line}</div>
          {portrait ? null : <div style={{ width: width * 0.12, height: u * 0.8, borderRadius: u, background: p.bone, overflow: "hidden", flexShrink: 0 }}><div style={{ width: `${st * 100 * grow(i)}%`, height: "100%", background: accent }} /></div>}
        </div>; })}
      </div>
    </div>
  </div>;
};
