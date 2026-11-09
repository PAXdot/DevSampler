// Built with Remotion - https://remotion.pro/license
import React from "react";
import { fitFontSize, withAlpha } from "../../../kit/index";
import type { StyledProps } from "../contract";
import { Canvas, Panel, Screen, Text, useScene, type Design, type PatternComponent } from "../runtime";

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const at = (labels: string[], i: number) => labels[i % labels.length] ?? "";
type Scene = ReturnType<typeof useScene>;

function useProduct(props: StyledProps) {
  const scene = useScene(props);
  return { ...scene, x: scene.width * 0.08, y: scene.height * scene.bodyY, w: scene.width * 0.84, h: scene.height * scene.bodyH };
}

const Body: React.FC<{ s: ReturnType<typeof useProduct>; children: React.ReactNode }> = ({ s, children }) => <div style={{ position: "absolute", left: s.x, top: s.y, width: s.w, height: s.h }}>{children}</div>;

/** Canonical UI captions use the full native stage to set their reading size.
 * Longer labels occupy additional real rows; historical skins keep their fit. */
const captionMetrics = (text: string, d: Design, w: number, h: number) => {
  const legacy = fitFontSize({ chars: text.length, boxW: w, boxH: h, max: h * 0.6, charEm: d.bodyFont === "Menlo" ? 0.68 : 0.65 });
  if (!d.brandDriven) return { font: legacy, height: h, lines: 1 };
  const font = Math.max(d.minLabelFont ?? 0, legacy);
  const lines = Math.max(1, Math.ceil(text.length * font * 0.65 / Math.max(1, w)));
  return { font, height: Math.max(h, lines * font * 1.25), lines };
};
const Caption: React.FC<{ text: string; d: Design; w: number; h: number; muted?: boolean; style?: React.CSSProperties }> = ({ text, d, w, h, muted, style }) => {
  const fit = captionMetrics(text, d, w, h);
  return <Text text={text} width={w} height={fit.height} d={d} slot={d.brandDriven ? "items" : "labels"} max={fit.font} lines={fit.lines} style={{ color: muted ? d.muted : d.ink, fontFamily: d.bodyFont, fontSize: fit.font, whiteSpace: d.brandDriven ? "normal" : "nowrap", ...style }} />;
};

const Pill: React.FC<{ text: string; d: Design; w: number; h: number; active?: boolean; style?: React.CSSProperties }> = ({ text, d, w, h, active, style }) => {
  const pad = d.brandDriven ? (d.minLabelFont ?? 0) * 0.3 : h * 0.16;
  const padX = d.brandDriven ? pad : h * 0.24, contentW = w - padX * 2;
  const fit = captionMetrics(text, d, contentW, h * 0.7);
  const actualH = d.brandDriven ? Math.max(h, fit.height + pad * 2) : h;
  return <Panel d={d} style={{ width: w, height: actualH, padding: `${pad}px ${padX}px`, background: active ? d.accent : d.surface, color: active ? d.bg : d.ink, borderRadius: Math.min(d.radius, h * 0.5), boxShadow: "none", ...style }}><Caption text={text} d={{ ...d, ink: active ? d.bg : d.ink }} w={contentW} h={fit.height} /></Panel>;
};

const Window: React.FC<{ s: Scene; title: string; w: number; h: number; image?: string; kind?: "dashboard" | "article" | "list"; textScale?: number; children?: React.ReactNode; style?: React.CSSProperties }> = ({ s, title, w, h, image, kind = "dashboard", textScale = 1, children, style }) => {
  const captionDesign = s.d.brandDriven ? { ...s.d, minLabelFont: (s.d.minLabelFont ?? 0) / textScale } : s.d;
  const oldBar = Math.min(h * 0.12, s.unit * 4.4);
  const readingSize = captionDesign.minLabelFont ?? 0;
  const dot = s.d.brandDriven ? readingSize * 0.1 : oldBar * 0.13;
  const dotGap = s.d.brandDriven ? dot * 0.75 : oldBar * 0.1;
  const padding = s.d.brandDriven ? readingSize * 0.3 : oldBar * 0.32;
  const gap = s.d.brandDriven ? readingSize * 0.2 : oldBar * 0.18;
  const titleW = s.d.brandDriven ? Math.max(1, w - padding * 2 - gap - dot * 3 - dotGap * 2) : w - oldBar * 1.6;
  const bar = s.d.brandDriven ? Math.max(oldBar, captionMetrics(title, captionDesign, titleW, oldBar * 0.7).height + readingSize * 0.35) : oldBar;
  return <Panel d={s.d} style={{ width: w, height: h, overflow: "hidden", ...style }}>
    <div style={{ height: bar, display: "flex", alignItems: "center", gap, padding: `0 ${padding}px`, borderBottom: `1px solid ${s.d.line}`, background: withAlpha(s.d.accent, s.d.dark ? 0.07 : 0.025), boxSizing: "border-box" }}>
      <div style={{ display: "flex", gap: dotGap }}>{[0, 1, 2].map(i => <div key={i} style={{ width: dot, height: dot, background: i === 0 ? s.d.accent : s.d.line, borderRadius: s.d.radius > 4 ? "50%" : 0 }} />)}</div>
      <Caption text={title} d={captionDesign} w={titleW} h={bar * 0.7} muted />
    </div>
    <div style={{ position: "relative", width: w - 2, height: h - bar - 2, overflow: "hidden" }}>{children ?? <Screen image={image} w={w - 2} h={h - bar - 2} d={s.d} kind={kind} seed={title} />}</div>
  </Panel>;
};

const Pointer: React.FC<{ x: number; y: number; u: number; d: Design; pulse?: number; style?: React.CSSProperties }> = ({ x, y, u, d, pulse = 0, style }) => <div style={{ position: "absolute", left: x, top: y, width: u * 3.6, height: u * 4.4, pointerEvents: "none", zIndex: 20, ...style }}>
  {pulse > 0 && <div style={{ position: "absolute", left: -u * 3 * pulse, top: -u * 3 * pulse, width: u * 6 * pulse, height: u * 6 * pulse, border: `${u * 0.14}px solid ${d.accent}`, borderRadius: "50%", opacity: 1 - pulse }} />}
  <svg viewBox="0 0 24 30" style={{ width: "100%", height: "100%", overflow: "visible" }}><path d="M2 2 L2 24 L8 18 L13 28 L18 25 L13 16 L22 16 Z" fill={d.ink} stroke={d.bg} strokeWidth="1.7" strokeLinejoin="round" /></svg>
</div>;

const Device: React.FC<{ s: Scene; w: number; h: number; tablet?: boolean; image?: string; children?: React.ReactNode; style?: React.CSSProperties }> = ({ s, w, h, tablet, image, children, style }) => {
  const edge = Math.min(w, h) * (tablet ? 0.03 : 0.045), radius = Math.min(w, h) * (tablet ? 0.075 : 0.145);
  return <div style={{ width: w, height: h, borderRadius: radius, background: s.d.ink, padding: edge, boxSizing: "border-box", border: `1px solid ${s.d.line}`, boxShadow: s.d.shadow, position: "relative", ...style }}>
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: radius - edge, background: s.d.surface, overflow: "hidden" }}>{children ?? <Screen image={image} w={w - edge * 2} h={h - edge * 2} d={s.d} seed="owned-device-screen" />}</div>
    {!tablet && <div style={{ position: "absolute", left: w * 0.37, top: edge * 1.65, width: w * 0.26, height: edge * 0.7, borderRadius: edge, background: s.d.ink }} />}
    <div style={{ position: "absolute", bottom: edge * 1.6, left: w * 0.38, width: w * 0.24, height: edge * 0.32, background: withAlpha(s.d.ink, 0.28), borderRadius: edge }} />
  </div>;
};

const LoupeInspection: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s;
  const r = Math.min(w * 0.18, h * 0.34), move = s.reveal(22, 76), lens = s.reveal(14, 30);
  const cx = mix(w * 0.25, w * 0.64, move), cy = mix(h * 0.66, h * 0.38, move), zoom = 1.85;
  return <Canvas {...props}><Body s={s}>
    <Window s={s} title={at(props.labels, 0)} w={w} h={h * 0.88} image={props.image} />
    <div style={{ position: "absolute", left: cx - r, top: cy - r, width: r * 2, height: r * 2, borderRadius: "50%", overflow: "hidden", boxShadow: `0 ${u}px ${u * 5}px ${withAlpha(d.bg, 0.6)}, 0 0 0 ${u * 0.36}px ${d.accent}`, transform: `scale(${lens})` }}>
      <div style={{ position: "absolute", left: r - cx * zoom, top: r - cy * zoom, transformOrigin: "0 0", transform: `scale(${zoom})` }}><Window s={s} title={at(props.labels, 0)} w={w} h={h * 0.88} image={props.image} /></div>
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", boxShadow: `inset 0 2px 6px ${withAlpha(d.ink, 0.2)}` }} />
    </div>
    <Pointer x={cx + r * 0.6} y={cy + r * 0.58} u={u} d={d} />
    <Caption text={at(props.labels, 1)} d={d} w={w * 0.7} h={h * 0.08} style={{ position: "absolute", bottom: 0 }} />
  </Body></Canvas>;
};

const ScrollToHighlight: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s;
  const docW = w * 0.84, rowH = h * 0.15, scroll = s.reveal(24, 82), highlight = s.reveal(82, 105);
  return <Canvas {...props}><Body s={s}>
    <Panel d={d} style={{ position: "absolute", left: w * 0.08, width: docW, height: h * (d.brandDriven ? 0.9 : 0.93), overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -rowH * (d.brandDriven ? 4 : 4.5) * scroll, left: docW * 0.08, width: docW * 0.8 }}>
        {Array.from({ length: 11 }, (_, i) => <div key={i} style={{ height: rowH, padding: `${rowH * 0.2}px 0`, boxSizing: "border-box", position: "relative" }}>
          {i === 6 && <div style={{ position: "absolute", inset: `${rowH * 0.1}px -${u}px`, background: withAlpha(d.accent, 0.2), borderLeft: `${u * 0.35}px solid ${d.accent}`, transform: `scaleX(${highlight})`, transformOrigin: "left" }} />}
          <Caption text={at(props.labels, i === 6 ? 2 : i)} d={d} w={docW * 0.76} h={rowH * 0.33} />
          <div style={{ width: `${68 + i % 3 * 9}%`, height: rowH * 0.06, background: d.line, marginTop: rowH * 0.09 }} /><div style={{ width: `${52 + i % 4 * 8}%`, height: rowH * 0.06, background: d.line, marginTop: rowH * 0.06 }} />
        </div>)}
      </div>
      <div style={{ position: "absolute", top: h * 0.08, bottom: h * 0.08, right: docW * 0.03, width: u * 0.5, background: d.line }}><div style={{ position: "absolute", top: `${scroll * 60}%`, width: "100%", height: "25%", background: d.accent }} /></div>
    </Panel>
    <Pill text={at(props.labels, 2)} d={d} w={w * 0.39} h={h * 0.09} active style={{ position: "absolute", left: w * 0.56, bottom: 0, opacity: highlight, transform: `translateY(${(1 - highlight) * u * 3}px)` }} />
  </Body></Canvas>;
};

const InspectorParameterEdit: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u, portrait } = s, edit = s.reveal(42, 104);
  const canvasW = portrait ? w : w * 0.66, canvasH = portrait ? h * 0.62 : h;
  const inspectorW = portrait ? w : w * 0.3, inspectorH = portrait ? h * 0.31 : h;
  const cardW = canvasW * mix(0.5, 0.72, edit), cardH = canvasH * 0.53, radius = mix(d.radius, Math.min(64, props.value ?? 48), edit);
  return <Canvas {...props}><Body s={s}>
    <Panel d={d} style={{ width: canvasW, height: canvasH, position: "absolute", backgroundImage: `radial-gradient(${d.line} 1px, transparent 1px)`, backgroundSize: `${u * 2}px ${u * 2}px` }}>
      <Panel d={d} style={{ position: "absolute", width: cardW, height: cardH, left: (canvasW - cardW) / 2, top: (canvasH - cardH) / 2, borderRadius: radius, background: withAlpha(d.accent, 0.12), outline: `1px solid ${d.accent}`, outlineOffset: u * 0.55, display: "flex", alignItems: "center", justifyContent: "center" }}><Caption text={at(props.labels, 0)} d={d} w={cardW * 0.76} h={cardH * 0.24} /></Panel>
      {[0, 1, 2, 3].map(i => <div key={i} style={{ position: "absolute", left: (canvasW - cardW) / 2 + (i % 2) * cardW - u * 0.45, top: (canvasH - cardH) / 2 + Math.floor(i / 2) * cardH - u * 0.45, width: u * 0.9, height: u * 0.9, background: d.surface, border: `1px solid ${d.accent}` }} />)}
    </Panel>
    <Panel d={d} style={{ position: "absolute", right: 0, bottom: 0, width: inspectorW, height: inspectorH, padding: u * 1.8 }}>
      <Caption text={at(props.labels, 1)} d={d} w={inspectorW - u * 4} h={inspectorH * 0.18} />
      <div style={{ marginTop: inspectorH * 0.08, width: inspectorW - u * 4, height: u * 0.65, background: d.line, position: "relative" }}><div style={{ width: `${mix(20, 76, edit)}%`, height: "100%", background: d.accent }} /><div style={{ position: "absolute", left: `${mix(20, 76, edit)}%`, top: -u * 0.48, width: u * 1.6, height: u * 1.6, borderRadius: "50%", background: d.accent, border: `2px solid ${d.surface}` }} /></div>
      <Caption text={`${Math.round(mix(8, props.value ?? 48, edit))}${props.suffix ?? "px"}`} d={d} w={inspectorW - u * 4} h={inspectorH * 0.2} style={{ marginTop: inspectorH * 0.1, color: d.accent }} />
      {!portrait && <><div style={{ borderTop: `1px solid ${d.line}`, margin: `${u * 2}px 0` }} /><Caption text={at(props.labels, 2)} d={d} w={inspectorW - u * 4} h={inspectorH * 0.1} /><Caption text={`${Math.round(mix(50, 72, edit))}%`} d={d} w={inspectorW - u * 4} h={inspectorH * 0.14} style={{ marginTop: u, color: d.accent }} /></>}
    </Panel>
    <Pointer x={portrait ? w * mix(0.25, 0.77, edit) : w * mix(0.77, 0.93, edit)} y={portrait ? h * 0.8 : h * 0.3} u={u} d={d} />
  </Body></Canvas>;
};

const DesktopWindowOrbit: PatternComponent = props => {
  const s = useProduct(props), { w, h, d } = s, wall = s.reveal(72, 124), enter = s.reveal(12, 40);
  const cw = w * 0.43, ch = h * 0.4, orbit = Math.min(s.frame, 72) / 72 * Math.PI * 0.9;
  return <Canvas {...props}><Body s={s}><div style={{ width: w, height: h, perspective: w * 2 }}>
    {[0, 1, 2, 3].map(i => {
      const angle = orbit + i * Math.PI / 2, depth = Math.cos(angle);
      const ox = w * 0.5 + Math.sin(angle) * w * 0.26 - cw / 2, oy = h * 0.5 + depth * h * 0.17 - ch / 2;
      const wx = (i % 2) * w * 0.54, wy = Math.floor(i / 2) * h * 0.52;
      return <Window key={i} s={s} title={at(props.labels, i)} w={cw} h={ch} image={i % 2 ? props.secondaryImage : props.image} style={{ position: "absolute", left: mix(ox, wx, wall), top: mix(oy, wy, wall), opacity: enter, transform: `rotateY(${(1 - wall) * Math.sin(angle) * -24}deg) scale(${mix(0.82 + (depth + 1) * 0.13, 1, wall)})`, zIndex: wall > 0.5 ? 1 : Math.round((depth + 1) * 10) }} />;
    })}
    <div style={{ position: "absolute", left: w * 0.49, top: 0, height: h * 0.94, borderLeft: `1px solid ${d.line}`, opacity: wall * 0.6 }} />
  </div></Body></Canvas>;
};

const DeviceHandoff: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u, portrait } = s;
  const handoff = s.reveal(40, 100), appear = s.reveal(24, 74), pw = Math.min(w * (portrait ? 0.34 : 0.23), h * 0.43), ph = h * (portrait ? 0.72 : 0.86);
  const tw = w * (portrait ? 0.63 : 0.6), th = h * (portrait ? 0.66 : 0.78), tx = w - tw, ty = h - th;
  const chipW = w * (portrait && d.brandDriven ? 0.64 : portrait ? 0.31 : 0.25), chipH = h * (portrait && d.brandDriven ? 0.14 : 0.08);
  return <Canvas {...props}><Body s={s}>
    <Device s={s} w={pw} h={ph} image={props.image} style={{ position: "absolute", left: 0, top: 0, transform: `rotate(${mix(-5, 0, handoff)}deg)` }} />
    <Device s={s} tablet w={tw} h={th} image={props.secondaryImage || props.image} style={{ position: "absolute", left: tx, top: ty, transformOrigin: "left center", transform: `scaleX(${mix(0.08, 1, appear)})`, opacity: appear }} />
    <svg width={w} height={h} style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none" }}><path d={`M ${pw * 0.5} ${ph * 0.44} Q ${w * 0.55} ${h * 0.15}, ${tx + tw * 0.55} ${ty + th * 0.5}`} fill="none" stroke={d.accent} strokeWidth={u * 0.15} strokeDasharray={`${u * 0.5} ${u * 0.5}`} opacity={0.5 * handoff} /></svg>
    <Pill text={at(props.labels, 2)} d={d} w={chipW} h={chipH} active style={{ position: "absolute", left: d.brandDriven ? Math.max(0, Math.min(w - chipW, mix(pw * 0.5, tx + tw * 0.55, handoff) - chipW / 2)) : mix(pw * 0.5, tx + tw * 0.55, handoff) - chipW / 2, top: mix(ph * 0.44, ty + th * 0.5, handoff) - Math.sin(handoff * Math.PI) * h * 0.2, zIndex: 5 }} />
    <Caption text={handoff < 0.5 ? at(props.labels, 0) : at(props.labels, 3)} d={d} w={w * (portrait && d.brandDriven ? 0.84 : 0.4)} h={h * (portrait && d.brandDriven ? 0.1 : 0.07)} style={{ position: "absolute", bottom: 0, left: 0 }} />
  </Body></Canvas>;
};

const ResponsiveViewportResize: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s, narrow = s.reveal(22, 104);
  const vw = w * mix(1, s.portrait ? 0.72 : 0.42, narrow), vh = h * 0.85, mobile = narrow > 0.7;
  return <Canvas {...props}><Body s={s}>
    <Window s={s} title={at(props.labels, mobile ? 2 : narrow > 0.3 ? 1 : 0)} w={vw} h={vh} style={{ position: "absolute", left: (w - vw) / 2, top: 0 }}>
      {props.image ? <Screen image={props.image} w={vw - 2} h={vh - Math.min(vh * 0.12, u * 4.4) - 2} d={d} /> : <div style={{ padding: vw * 0.06 }}>
        <div style={{ width: "62%", height: h * 0.055, background: d.accent, marginBottom: h * 0.055 }} />
        <div style={{ display: "flex", flexDirection: mobile ? "column" : "row", gap: u * 1.2 }}>
          {[0, 1, 2].map(i => <Panel key={i} d={d} style={{ flex: 1, minWidth: 0, height: mobile ? h * 0.15 : h * 0.4, padding: u * 1.2, boxShadow: "none" }}><Caption text={at(props.labels, i)} d={d} w={mobile ? vw * 0.72 : (vw - vw * 0.12 - u * 5) / 3} h={h * 0.055} /><div style={{ marginTop: u, height: mobile ? h * 0.05 : h * 0.24, background: withAlpha(d.accent, 0.13), borderRadius: d.radius * 0.3 }} /></Panel>)}
        </div>
      </div>}
    </Window>
    {[0, 1].map(i => <div key={i} style={{ position: "absolute", left: (w - vw) / 2 + i * vw - u * 0.5, top: vh * 0.43, width: u, height: u * 4, borderRadius: u, background: d.accent }} />)}
    <div style={{ position: "absolute", bottom: h * 0.025, left: (w - vw) / 2, width: vw, borderTop: `1px solid ${d.accent}`, display: "flex", justifyContent: "center", paddingTop: u }}><Caption text={`${Math.round(mix(1440, 390, narrow))} px`} d={d} w={vw * 0.5} h={h * 0.075} style={{ textAlign: "center", color: d.accent, fontFamily: d.monoFont }} /></div>
  </Body></Canvas>;
};

const ContextualToolbarAnchor: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s, select = s.reveal(18, 42), shift = s.reveal(66, 102), tools = s.reveal(40, 58), done = s.reveal(108, 126);
  const sx = mix(w * 0.14, w * 0.24, shift), sy = mix(h * 0.3, h * 0.52, shift), sw = w * 0.6, barW = w * (s.portrait && d.brandDriven ? 0.84 : 0.59);
  const pillW = (barW - u * 3) / 2, pillH = h * 0.09 - u * 1.5;
  const pad = (d.minLabelFont ?? 0) * 0.3;
  const realPillH = d.brandDriven ? Math.max(pillH, ...[1, 2].map(n => captionMetrics(at(props.labels, n), d, pillW - pad * 2, pillH * 0.7).height + pad * 2)) : pillH;
  const barH = d.brandDriven ? Math.max(h * 0.09, realPillH + u * 1.5) : h * 0.09;
  const barX = d.brandDriven ? Math.max(0, Math.min(w - barW, sx)) : sx;
  const phrase = at(props.labels, done > 0.5 ? 3 : 0);
  const phraseH = d.brandDriven ? Math.max(h * 0.082, captionMetrics(phrase, d, sw, h * 0.064).height + (d.minLabelFont ?? 0) * 0.24) : h * 0.082;
  return <Canvas {...props}><Body s={s}>
    <Panel d={d} style={{ position: "absolute", width: w, height: h * 0.94, padding: `${h * 0.08}px ${w * 0.08}px` }}><div style={{ width: "48%", height: h * 0.055, background: d.ink, marginBottom: h * 0.08 }} />{[0, 1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: `${82 - i % 3 * 12}%`, height: h * 0.018, background: d.line, marginBottom: h * 0.066 }} />)}</Panel>
    <div style={{ position: "absolute", left: sx, top: sy, width: sw, height: phraseH, background: withAlpha(d.accent, 0.17), borderBottom: `${u * 0.16}px solid ${d.accent}`, opacity: select, display: "flex", alignItems: "center" }}><Caption text={phrase} d={d} w={sw} h={h * 0.064} /></div>
    <Panel d={d} style={{ position: "absolute", left: barX, top: sy - barH - u * 2, width: barW, height: barH, opacity: tools, transform: `translateY(${(1 - tools) * u * 2}px)`, display: "flex", alignItems: "center", padding: u * 0.75, gap: u }}>
      {[1, 2].map((n, i) => <Pill key={n} text={at(props.labels, n)} d={d} w={pillW} h={barH - u * 1.5} active={i === 0 && shift > 0.8} />)}
    </Panel>
    <div style={{ position: "absolute", left: barX + barW * 0.5, top: sy - u * 2, width: u * 0.14, height: u * 2, background: d.accent, opacity: tools }} />
    <Pointer x={barX + barW * 0.2} y={sy - barH * 0.5 - u * 2} u={u} d={d} pulse={clamp((s.frame - 108) / 18)} />
  </Body></Canvas>;
};

const CursorPathProof: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u, portrait } = s;
  const points = portrait ? [{ x: w * 0.15, y: h * 0.18 }, { x: w * 0.56, y: h * 0.5 }, { x: w * 0.23, y: h * 0.82 }] : [{ x: w * 0.18, y: h * 0.25 }, { x: w * 0.5, y: h * 0.68 }, { x: w * 0.82, y: h * 0.25 }];
  const progress = s.reveal(18, 118) * 2, stop = Math.min(1, Math.floor(progress)), tween = progress - stop;
  const from = points[stop]!, to = points[stop + 1]!;
  const px = mix(from.x, to.x, tween), py = mix(from.y, to.y, tween);
  const cw = w * (portrait ? 0.72 : 0.29), ch = h * (portrait ? 0.22 : 0.39);
  return <Canvas {...props}><Body s={s}>
    <svg width={w} height={h} style={{ position: "absolute", inset: 0 }}><polyline points={points.map(p => `${p.x},${p.y}`).join(" ")} fill="none" stroke={d.line} strokeWidth={u * 0.25} strokeDasharray={`${u * 0.8} ${u * 0.8}`} /></svg>
    {points.map((p, i) => <Panel key={i} d={d} style={{ position: "absolute", left: Math.min(w - cw, Math.max(0, p.x - cw / 2)), top: Math.min(h - ch, Math.max(0, p.y - ch / 2)), width: cw, height: ch, padding: u * 1.5, opacity: mix(0.35, 1, s.stagger(i, 16, 24)), borderColor: progress >= i ? d.accent : d.line }}><div style={{ width: u * 3, height: u * 3, background: progress >= i ? d.accent : d.line, color: d.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: u * 1.8, borderRadius: d.radius > 0 ? "50%" : 0 }}>{i + 1}</div><Caption text={at(props.labels, i)} d={d} w={cw - u * 3} h={ch * 0.25} style={{ marginTop: u }} />{i === 2 && props.image ? <Screen image={props.image} w={cw - u * 3} h={ch * 0.31} d={d} /> : <div style={{ width: `${progress >= i ? 90 : 35}%`, height: u * 0.6, background: progress >= i ? d.accent : d.line, marginTop: u }} />}</Panel>)}
    <Pointer x={px} y={py} u={u} d={d} pulse={clamp((s.frame - ([35, 70, 118][Math.round(progress)] ?? 118)) / 12)} />
  </Body></Canvas>;
};

const TwoWindowDeepFocus: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, portrait, unit: u } = s, focus = s.reveal(38, 100), detail = s.reveal(103, 124);
  const aw = w * (portrait ? 0.84 : 0.67), ah = h * 0.68, bw = w * (portrait ? 0.84 : 0.64), bh = h * 0.69;
  return <Canvas {...props}><Body s={s}>
    <Window s={s} textScale={mix(1, 0.9, focus)} title={at(props.labels, 0)} w={aw} h={ah} image={props.image} style={{ position: "absolute", left: 0, top: 0, opacity: mix(1, 0.44, focus), transform: `scale(${mix(1, 0.9, focus)})`, transformOrigin: "left top", filter: `blur(${focus * u * 0.1}px)` }} />
    <Window s={s} title={at(props.labels, 1)} w={bw} h={bh} image={props.secondaryImage} kind="article" style={{ position: "absolute", right: 0, bottom: h * 0.03, opacity: s.reveal(16, 40), transform: `translate(${mix(u * 3, 0, focus)}px, ${mix(u * 3, 0, focus)}px) scale(${mix(0.9, 1, focus)})`, transformOrigin: "right bottom", borderColor: focus > 0.5 ? d.accent : d.line }} />
    <Pill text={at(props.labels, 2)} d={d} w={w * 0.48} h={h * 0.085} active style={{ position: "absolute", right: bw * 0.08, bottom: bh * 0.19, opacity: detail, transform: `translateY(${(1 - detail) * u * 2}px)` }} />
  </Body></Canvas>;
};

const TerminalBrowserProof: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u, portrait } = s, open = s.reveal(64, 116), typed = s.reveal(16, 60);
  const termW = portrait ? w : mix(w, w * 0.31, open), termH = portrait ? mix(h * 0.94, h * 0.28, open) : h * 0.94, browserW = portrait ? w : w * 0.65, browserH = portrait ? h * (d.brandDriven ? 0.58 : 0.61) : h * 0.94;
  return <Canvas {...props}><Body s={s}>
    <Window s={s} title="terminal" w={termW} h={termH} style={{ position: "absolute", left: 0, top: 0 }}><div style={{ padding: u * 2, fontFamily: d.monoFont, color: d.ink, fontSize: d.brandDriven ? Math.max(d.minLabelFont ?? 0, Math.min(u * 1.8, termW / 22)) : Math.min(u * 1.8, termW / 22), lineHeight: 1.65, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}><span style={{ color: d.accent }}>{at(props.labels, 0).slice(0, Math.floor(at(props.labels, 0).length * typed))}</span><div style={{ opacity: s.reveal(40, 58), marginTop: u }}>building preview...</div><div style={{ opacity: s.reveal(52, 68), color: d.accent }}>{at(props.labels, 1)}</div></div></Window>
    <Window s={s} title={at(props.labels, 2)} w={browserW} h={browserH} image={props.image} style={{ position: "absolute", right: 0, bottom: h * 0.06, opacity: open, transform: portrait ? `translateY(${(1 - open) * browserH}px)` : `translateX(${(1 - open) * browserW}px)` }} />
    <div style={{ position: "absolute", top: portrait ? h * 0.288 : h * 0.16, left: portrait ? w * 0.08 : w * 0.36, width: w * (portrait && d.brandDriven ? 0.84 : 0.48), height: h * (portrait && d.brandDriven ? 0.055 : portrait ? 0.04 : 0.055), background: withAlpha(d.accent, 0.16), borderLeft: `${u * 0.2}px solid ${d.accent}`, opacity: s.reveal(106, 124) }}><Caption text={at(props.labels, 3)} d={d} w={w * (portrait && d.brandDriven ? 0.8 : 0.44)} h={h * (portrait && d.brandDriven ? 0.05 : portrait ? 0.034 : 0.048)} style={{ paddingLeft: u }} /></div>
  </Body></Canvas>;
};

const CodeDiffReview: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s, diff = s.reveal(26, 66), review = s.reveal(70, 102), merge = s.reveal(106, 128);
  const gutter = w * 0.075, lineH = h * 0.1;
  return <Canvas {...props}><Body s={s}><Window s={s} title="change.review" w={w} h={h * 0.94}>
    <div style={{ fontFamily: d.monoFont, paddingTop: h * 0.06 }}>
      {["function configure() {", "  return {", "", "", "  };", "}"].map((line, i) => <div key={i} style={{ position: "relative", display: "flex", width: w, height: lineH, alignItems: "center", background: i === 2 ? withAlpha(d.ink, 0.13 * diff) : i === 3 ? withAlpha(d.accent, 0.2 * diff) : undefined }}>
        <span style={{ width: gutter, textAlign: "center", color: d.muted, fontSize: u * 1.5 }}>{i + 1}</span>
        <Caption text={i === 2 ? `− ${at(props.labels, 0)}` : i === 3 ? `+ ${at(props.labels, 1)}` : line || " "} d={d} w={w - gutter * 1.5} h={lineH * 0.68} style={{ fontFamily: d.monoFont, color: i === 2 ? d.muted : i === 3 ? d.accent : d.ink, opacity: i === 2 || i === 3 ? diff : 1, textDecoration: i === 2 && merge > 0.5 ? "line-through" : undefined }} />
        {i === 3 && <div style={{ position: "absolute", left: gutter, right: gutter * 0.5, bottom: 0, borderBottom: `1px solid ${d.accent}`, transformOrigin: "left", transform: `scaleX(${review})` }} />}
      </div>)}
    </div>
    <Pill text={merge > 0.5 ? at(props.labels, 3) : at(props.labels, 2)} d={d} w={w * 0.42} h={h * 0.08} active={merge > 0.5} style={{ position: "absolute", right: w * 0.04, bottom: h * 0.04, opacity: review }} />
  </Window></Body></Canvas>;
};

const ModelPickerStack: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s, open = s.reveal(22, 46) * (1 - s.reveal(106, 128)), chosen = s.reveal(68, 104), menuW = w * (s.portrait ? 0.86 : 0.64), rowH = h * 0.12;
  const x = (w - menuW) / 2, y = h * 0.14;
  return <Canvas {...props}><Body s={s}>
    <Panel d={d} style={{ width: w, height: h * 0.94, padding: w * 0.07 }}><div style={{ width: "76%", height: h * 0.05, background: d.line, marginBottom: h * 0.07 }} /><div style={{ width: "55%", height: h * 0.025, background: d.line }} /><div style={{ position: "absolute", left: w * 0.08, bottom: h * 0.13, right: w * 0.08, height: h * 0.14, border: `1px solid ${d.line}`, borderRadius: d.radius * 0.5 }} /></Panel>
    <Pill text={at(props.labels, chosen > 0.5 ? 1 : 0)} d={d} w={menuW * 0.6} h={rowH * 0.65} active={chosen > 0.5} style={{ position: "absolute", left: x, top: y }} />
    {[2, 1, 0].map(i => <Panel key={i} d={d} style={{ position: "absolute", left: x + (1 - open) * i * u * 2, top: y + rowH * 0.85 + i * u * 0.7 * open, width: menuW, height: rowH * 3.7, opacity: open * (i === 0 ? 1 : 0.35), transformOrigin: "top center", transform: `scale(${mix(0.75, 1 - i * 0.035, open)}) rotate(${i * (1 - open) * 5}deg)`, zIndex: 3 - i }}>
      {i === 0 && [0, 1, 2].map(n => <div key={n} style={{ height: rowH, display: "flex", alignItems: "center", padding: `0 ${u * 2}px`, background: n === 1 && chosen > 0 ? withAlpha(d.accent, 0.18 * chosen) : undefined, borderBottom: `1px solid ${d.line}` }}><div style={{ width: u * 2.2, height: u * 2.2, border: `1px solid ${n === 1 ? d.accent : d.line}`, borderRadius: "50%", background: n === 1 ? withAlpha(d.accent, chosen) : undefined, marginRight: u * 2 }} /><Caption text={at(props.labels, n)} d={d} w={menuW - u * 9} h={rowH * 0.6} /></div>)}
    </Panel>)}
    <Pointer x={x + menuW * 0.7} y={y + rowH * mix(1.4, 2.3, chosen)} u={u} d={d} style={{ opacity: open }} />
  </Body></Canvas>;
};

const MultiAgentParallelWindows: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u, portrait } = s, combine = s.reveal(100, 128), cw = w * (portrait ? 0.73 : 0.3), ch = h * (portrait ? 0.27 : 0.67);
  return <Canvas {...props}><Body s={s}>
    {[0, 1, 2].map(i => {
      const startX = portrait ? (i % 2 ? w * 0.27 : 0) : i * w * 0.35, startY = portrait ? i * h * 0.32 : h * (i === 1 ? 0.16 : 0);
      const ready = s.reveal(34 + i * 15, 85 + i * 12);
      return <Window key={i} s={s} title={at(props.labels, i)} w={cw} h={ch} image={props.image} style={{ position: "absolute", left: mix(startX, (w - cw) / 2, combine), top: mix(startY, (h - ch) / 2, combine), transform: `scale(${mix(1, 0.7, combine)})`, opacity: s.stagger(i, 12, 20) * (1 - combine), zIndex: 3 - i }}><div style={{ padding: u * 1.2 }}><Screen w={cw - u * 2.4} h={ch * 0.53} d={d} kind={i === 1 ? "article" : "list"} seed={`parallel-${i}`} /><div style={{ width: cw - u * 2.4, height: u * 0.7, background: d.line, marginTop: u }}><div style={{ width: `${ready * 100}%`, height: "100%", background: d.accent }} /></div></div></Window>;
    })}
    <Window s={s} title={at(props.labels, 3)} w={w * 0.9} h={h * 0.9} image={props.secondaryImage || props.image} style={{ position: "absolute", left: w * 0.05, top: h * 0.05, opacity: combine, transform: `scale(${mix(0.68, 1, combine)})`, borderColor: d.accent }} />
  </Body></Canvas>;
};

const PhoneNotificationCapture: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s, arrive = s.reveal(20, 44), expand = s.reveal(66, 114), pw = Math.min(w * 0.66, h * 0.5), ph = h * 0.98;
  const cardW = pw * 0.83, canonicalPortrait = s.portrait && d.brandDriven;
  const finalCardH = ph * (canonicalPortrait ? 0.8 : 0.66);
  const cardH = mix(ph * 0.16, finalCardH, expand), cy = mix(ph * 0.4, ph * (canonicalPortrait ? 0.12 : 0.2), expand);
  const notificationW = cardW - pw * 0.08, actionH = ph * 0.065;
  const actionPadding = canonicalPortrait ? (d.minLabelFont ?? 0) * 0.3 : actionH * 0.16;
  const actionText = captionMetrics(at(props.labels, 2), d, notificationW - actionPadding * 2, actionH * 0.7);
  const reserved = captionMetrics(at(props.labels, 0), d, notificationW, ph * 0.04).height + captionMetrics(at(props.labels, 1), d, notificationW, ph * 0.07).height + Math.max(actionH, actionText.height + actionPadding * 2) + pw * 0.08 + ph * 0.065;
  const screenH = canonicalPortrait ? Math.max(ph * 0.08, Math.min(ph * 0.35, finalCardH - reserved)) : ph * 0.35;
  return <Canvas {...props}><Body s={s}>
    <Device s={s} w={pw} h={ph} style={{ position: "absolute", left: (w - pw) / 2, top: 0 }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(155deg,${d.surface},${withAlpha(d.accent, 0.45)},${d.bg})` }} />
      <div style={{ position: "absolute", top: ph * 0.11, left: 0, width: "100%", textAlign: "center", fontSize: pw * 0.18, color: d.ink, fontWeight: 500, letterSpacing: "-0.04em", opacity: 1 - expand }}>09:41</div>
      <Panel d={d} style={{ position: "absolute", left: (pw - cardW) / 2 - pw * 0.04, top: cy + (1 - arrive) * u * 5, width: cardW, height: cardH, opacity: arrive, padding: pw * 0.04, overflow: "hidden", boxSizing: "border-box" }}>
        <Caption text={at(props.labels, 0)} d={d} w={cardW - pw * 0.08} h={ph * 0.04} />
        <Caption text={at(props.labels, 1)} d={d} w={cardW - pw * 0.08} h={ph * 0.07} muted style={{ marginTop: ph * 0.015 }} />
        <div style={{ marginTop: ph * 0.03, opacity: expand }}><Screen image={props.image} w={cardW - pw * 0.08} h={screenH} d={d} kind="list" /></div>
        <Pill text={at(props.labels, 2)} d={d} w={cardW - pw * 0.08} h={ph * 0.065} active style={{ marginTop: ph * 0.02, opacity: expand }} />
      </Panel>
    </Device>
  </Body></Canvas>;
};

const DeviceExplodedUiLayers: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u } = s;
  // Canonical clips assemble the already separated layers, then hold the UI.
  // Historical skins retain their original expand-and-collapse choreography.
  const split = d.brandDriven ? 1 - s.reveal(22, 118) : s.reveal(22, 70) * (1 - s.reveal(98, 130));
  const cw = w * (s.portrait && d.brandDriven ? 0.78 : 0.61), ch = h * (s.portrait && d.brandDriven ? 0.9 : 0.72), baseX = (w - cw) / 2, baseY = (h - ch) / 2;
  return <Canvas {...props}><Body s={s}><div style={{ position: "absolute", width: w, height: h, perspective: w * 2 }}>
    {[0, 1, 2, 3].map(i => <Panel key={i} d={d} style={{ position: "absolute", width: cw, height: ch, left: baseX + (i - 1.5) * w * 0.095 * split, top: baseY - (i - 1.5) * h * 0.11 * split, transform: `rotateX(${12 * split}deg) rotateY(${-18 * split}deg)`, background: i === 0 ? d.ink : i === 1 ? d.surface : withAlpha(d.surface, 0.35 * split), borderColor: i > 1 ? withAlpha(d.accent, 0.5) : d.line, zIndex: i, overflow: "hidden", boxShadow: split > 0.1 ? d.shadow : "none" }}>
      {i === 1 && <Screen image={props.image} w={cw} h={ch} d={d} />}
      {i === 2 && <div style={{ position: "absolute", left: cw * 0.14, top: ch * 0.28, width: cw * 0.72, height: ch * 0.32, border: `1px solid ${d.accent}`, background: withAlpha(d.accent, 0.1) }} />}
      {i === 3 && <><div style={{ position: "absolute", left: cw * 0.18, right: cw * 0.18, bottom: ch * 0.08, height: ch * 0.09, display: "flex", gap: u }}>{[0, 1, 2].map(n => <div key={n} style={{ flex: 1, background: d.accent, borderRadius: d.radius * 0.3 }} />)}</div></>}
      <Pill text={at(props.labels, i)} d={d} w={cw * 0.64} h={ch * 0.085} active={i === 3} style={{ position: "absolute", left: cw * 0.07, top: ch * 0.065, opacity: d.brandDriven && i === 3 ? 1 : split }} />
    </Panel>)}
  </div></Body></Canvas>;
};

const PanelDocumentExport: PatternComponent = props => {
  const s = useProduct(props), { w, h, d, unit: u, portrait } = s, extract = s.reveal(30, 74), file = s.reveal(82, 118), saved = s.reveal(118, 132);
  const panelW = w * (portrait ? 0.91 : 0.62), panelH = h * 0.83, docW = mix(panelW * 0.53, w * (portrait && d.brandDriven ? 0.44 : 0.31), file), docH = mix(panelH * 0.72, h * (portrait && d.brandDriven ? 0.36 : 0.27), file);
  const dx = mix(panelW * 0.18, w * 0.68 - docW / 2, extract), dy = mix(panelH * 0.16, h * 0.58 - docH / 2, file);
  return <Canvas {...props}><Body s={s}>
    <Window s={s} textScale={mix(1, 0.94, extract)} title={at(props.labels, 0)} w={panelW} h={panelH} image={props.image} kind="article" style={{ position: "absolute", left: 0, top: 0, opacity: mix(1, 0.33, extract), transform: `scale(${mix(1, 0.94, extract)})`, transformOrigin: "left top" }} />
    <Panel d={d} style={{ position: "absolute", left: portrait ? w * 0.28 : w * 0.67, bottom: 0, width: w * (portrait ? 0.66 : 0.33), height: h * 0.2, borderStyle: "dashed", background: withAlpha(d.accent, 0.06), boxShadow: "none", opacity: s.reveal(52, 76), padding: u * 1.2 }}><Caption text={at(props.labels, 2)} d={d} w={w * (portrait ? 0.59 : 0.26)} h={h * 0.07} muted /></Panel>
    <Panel d={d} style={{ position: "absolute", left: dx, top: dy, width: docW, height: docH, padding: u * 1.5, transform: `rotate(${Math.sin(extract * Math.PI) * -7}deg)`, borderColor: d.accent, opacity: s.reveal(20, 34), overflow: "hidden" }}>
      <Caption text={at(props.labels, 1)} d={d} w={docW - u * 3} h={docH * 0.15} />
      {[0, 1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: `${83 - i % 3 * 16}%`, height: docH * 0.022, background: d.line, marginTop: docH * 0.065, opacity: 1 - file * 0.7 }} />)}
      <div style={{ position: "absolute", right: 0, top: 0, width: docW * 0.13, height: docW * 0.13, background: d.accent, clipPath: "polygon(0 0,100% 100%,0 100%)", opacity: file }} />
    </Panel>
    <Pill text={at(props.labels, 3)} d={d} w={w * 0.38} h={h * 0.075} active style={{ position: "absolute", bottom: h * 0.02, right: w * 0.02, opacity: saved, transform: `translateY(${(1 - saved) * u * 2}px)` }} />
  </Body></Canvas>;
};

export const COMPONENTS: Record<string, PatternComponent> = {
  "loupe-inspection": LoupeInspection,
  "scroll-to-highlight": ScrollToHighlight,
  "inspector-parameter-edit": InspectorParameterEdit,
  "desktop-window-orbit": DesktopWindowOrbit,
  "device-handoff": DeviceHandoff,
  "responsive-viewport-resize": ResponsiveViewportResize,
  "contextual-toolbar-anchor": ContextualToolbarAnchor,
  "cursor-path-proof": CursorPathProof,
  "two-window-deep-focus": TwoWindowDeepFocus,
  "terminal-browser-proof": TerminalBrowserProof,
  "code-diff-review": CodeDiffReview,
  "model-picker-stack": ModelPickerStack,
  "multi-agent-parallel-windows": MultiAgentParallelWindows,
  "phone-notification-capture": PhoneNotificationCapture,
  "device-exploded-ui-layers": DeviceExplodedUiLayers,
  "panel-document-export": PanelDocumentExport,
};
