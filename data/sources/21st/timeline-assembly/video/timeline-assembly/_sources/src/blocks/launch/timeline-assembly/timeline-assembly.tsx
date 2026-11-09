// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, expoOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Stage, opening, useLaunch } from "../shared";
import { meta } from "./timeline-assembly.meta";
import type { schema } from "./timeline-assembly.schema";
export const Component: React.FC<z.infer<typeof schema>> = ({ title, clips, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const bw = w * 0.92, bh = h * 0.66, pad = u * 3.5, labelW = bw * 0.12, contentW = bw - pad * 2 - labelW, trackH = bh * 0.2;
  const play = easeInOut(ramp(frame, [74, 114], [0.04, 0.94]));
  const clipW = contentW / clips.length - u;
  const fs = fitFontSize({ chars: Math.max(...clips.map(s => s.length)), boxW: clipW - u * 2, boxH: trackH * 0.6, max: u * 2.4 });
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: bw }}>
    <div style={{ paddingBottom: u * 4 }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={title} slot="title" width={bw} height={portrait ? nativeFont * 2.6 : u * 8} color={p.ink} max={u * 4.4} /></div>
    <div style={{ position: "relative", width: bw, height: bh, borderRadius: u * 2.4, background: p.surface, boxShadow: p.shadow(u), padding: pad, boxSizing: "border-box" }}>
      <div style={{ marginLeft: labelW, display: "flex", justifyContent: "space-between", color: p.faint, fontSize: u * 1.8, height: bh * 0.12 }}>{[0, 1, 2, 3, 4].map(i => <span key={i}>{`00:0${i * 2}`}</span>)}</div>
      {["Picture", "Titles", "Audio"].map((track, lane) => <div key={track} style={{ position: "relative", display: "flex", alignItems: "center", height: trackH, marginBottom: u * 1.3 }}>
        <div style={{ width: labelW, color: p.muted, fontSize: u * 1.9 }}>{track}</div>
        <div style={{ position: "relative", flex: 1, height: trackH, borderRadius: u, background: p.raised }}>
          {clips.map((clip, i) => { const enter = expoOut(ramp(frame, [12 + i * 8 + lane * 10, 32 + i * 8 + lane * 10], [0, 1])); return <div key={i} style={{ position: "absolute", left: i * (clipW + u), top: u * 0.5, width: clipW, height: trackH - u, borderRadius: u, background: withAlpha(accent, lane === 0 ? 0.25 : lane === 1 ? 0.12 : 0.08), border: `1px solid ${withAlpha(accent, 0.3)}`, opacity: enter, transform: `translateY(${(1 - enter) * (lane % 2 ? -1 : 1) * u * 8}px)`, display: "flex", alignItems: "center", padding: u, boxSizing: "border-box", color: p.ink, fontSize: Math.max(nativeFont, fs), overflowWrap: "anywhere", lineHeight: 1.25 }}>{lane === 0 ? portrait ? i + 1 : <span data-21st-slot="clips">{clip}</span> : lane === 1 ? <div style={{ width: "70%", height: u * 0.6, borderRadius: u, background: withAlpha(accent, 0.6) }} /> : <svg width="100%" height="70%" viewBox="0 0 100 30" preserveAspectRatio="none">{Array.from({ length: 25 }, (_, n) => { const amp = 3 + Math.abs(Math.sin(n * 1.72 + i)) * 11; return <line key={n} x1={n * 4} x2={n * 4} y1={15 - amp} y2={15 + amp} stroke={accent} strokeWidth={1.5} />; })}</svg>}</div>; })}
        </div>
      </div>)}
      <div style={{ position: "absolute", top: pad, bottom: pad, left: pad + labelW + contentW * play, width: u * 0.15, background: p.ink, opacity: ramp(frame, [70, 76], [0, 1]) }}><div style={{ position: "absolute", top: 0, left: -u * 0.55, borderLeft: `${u * 0.65}px solid transparent`, borderRight: `${u * 0.65}px solid transparent`, borderTop: `${u}px solid ${p.ink}` }} /></div>
    </div>
    {portrait ? <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: u * 2, marginTop: u * 3 }}>{clips.map((clip, i) => <div key={i} data-21st-slot="clips" style={{ fontSize: nativeFont, lineHeight: 1.25, color: p.ink, overflowWrap: "anywhere" }}>{i + 1}. {clip}</div>)}</div> : null}
  </div></Stage>;
};
