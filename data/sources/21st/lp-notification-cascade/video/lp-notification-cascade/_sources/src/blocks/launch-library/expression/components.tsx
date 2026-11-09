// Built with Remotion - https://remotion.pro/license
import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { continueRender, delayRender, Img } from "remotion";
import { fitFontSize, withAlpha } from "../../../kit/index";
import { waitForBrandFonts } from "../../../kit/brand-fonts";
import type { StyledProps } from "../contract";
import { Canvas, Panel, Screen, Text, useScene as useLibraryScene, type Design, type PatternComponent } from "../runtime";

const clamp = (n: number) => Math.max(0, Math.min(1, n));
const mix = (a: number, b: number, p: number) => a + (b - a) * p;
const noWrap: React.CSSProperties = { whiteSpace: "nowrap", letterSpacing: "-0.05em" };
// Font loaders hold the render while files arrive. Product line allocation
// must also rerender after those files arrive instead of retaining fallback
// font measurements from the first React pass.
const useScene = (p: StyledProps) => {
  const scene = useLibraryScene(p);
  const key = `${scene.font}|${scene.d.bodyFont}|${scene.d.weight}`;
  const [measuredFont, setMeasuredFont] = useState("");
  const handle = useRef<number | null>(null);
  useLayoutEffect(() => {
    if (p.style !== "product") return;
    const pending = delayRender("expression font layout", { timeoutInMilliseconds: 60000 });
    handle.current = pending;
    let active = true;
    waitForBrandFonts().then(() => document.fonts.ready).then(() => { if (active) setMeasuredFont(key); });
    return () => { active = false; if (handle.current === pending) { continueRender(pending); handle.current = null; } };

  }, [key, p.style]);
  useLayoutEffect(() => {
    if (measuredFont === key && handle.current !== null) { continueRender(handle.current); handle.current = null; }
  }, [key, measuredFont]);
  return scene;
};
type Scene = ReturnType<typeof useScene>;
// Product copy uses the selected font's actual advances so editable words
// wrap without shrinking below their native readable size. The estimate is
// used only when the component is evaluated outside a rendering document.
const advance = (char: string, mono = false) => mono ? 0.68 : /[MW@%&#]/.test(char) ? 1.02 : /[A-Z]/.test(char) ? 0.76 : /[ilI.,:;'!|]/.test(char) ? 0.35 : /\s/.test(char) ? 0.36 : 0.64;
let copyContext: CanvasRenderingContext2D | null = null;
const copyWidth = (text: string, font: number, mono: boolean, family?: string, weight = 400) => {
  if (family && typeof document !== "undefined") {
    copyContext ??= document.createElement("canvas").getContext("2d");
    if (copyContext) { copyContext.font = `${weight} ${font}px ${family}`; return copyContext.measureText(text).width * 1.04; }
  }
  return [...text].reduce((n, c) => n + advance(c, mono) * font, 0);
};
const wrapCopy = (text: string, width: number, font: number, mono = false, family?: string, weight = 400) => {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (line && copyWidth(`${line} ${word}`, font, mono, family, weight) <= width) { line += ` ${word}`; continue; }
    if (line) { lines.push(line); line = ""; }
    for (const char of word) {
      if (line && copyWidth(line + char, font, mono, family, weight) > width) { lines.push(line); line = ""; }
      line += char;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
};
const labelSize = (s: Scene) => Math.ceil(s.d.minLabelFont ?? s.height * (s.portrait ? 0.03125 : 0.01875));
const labelLayout = (p: StyledProps, s: Scene) => {
  const w = s.width * 0.84, font = labelSize(s), gap = font * 0.6;
  const preferred = s.portrait ? (p.labels.length === 3 && p.labels.every(x => x.length <= 12) ? 3 : 2) : p.labels.length;
  // Fewer columns before any label word would break inside itself.
  const cellFor = (n: number) => (w - gap * (n - 1)) / n;
  const wholeWords = (n: number) => p.labels.every(x => x.split(/\s+/).every(word => copyWidth(word, font, s.d.monospace, s.d.bodyFont) <= cellFor(n)));
  const cols = Array.from({ length: Math.max(1, preferred) }, (_, i) => Math.max(1, preferred) - i).find(wholeWords) ?? 1;
  const cellW = cellFor(cols);
  const copy = p.labels.map(x => wrapCopy(x, cellW, font, s.d.monospace, s.d.bodyFont));
  const rows = Array.from({ length: Math.ceil(copy.length / cols) }, (_, i) => Math.max(...copy.slice(i * cols, (i + 1) * cols).map(x => x.length)) * font * 1.22 + font * 0.12);
  const h = rows.reduce((n, row) => n + row, 0) + gap * (rows.length - 1);
  return { w, font, gap, cols, cellW, copy, rows, h, y: s.height * 0.94 - h };
};
const footerLayout = (p: StyledProps, s: Scene) => {
  const labels = labelLayout(p, s), font = Math.max(labels.font, s.unit * 2.3);
  const copy = wrapCopy(p.subtitle, labels.w, font, s.d.monospace, s.d.bodyFont), h = copy.length * font * 1.25 + font * 0.12;
  return { labels, font, copy, h, y: labels.y - labels.gap - h };
};
const titleLayout = (p: StyledProps, s: Scene, legacyY: number, legacyH: number) => {
  if (p.style !== "product") return { y: s.height * legacyY, h: s.height * legacyH };
  const top = s.height * 0.1, bottom = footerLayout(p, s).y - labelSize(s) * 0.8;
  return { y: top, h: Math.min(s.height * 0.55, Math.max(labelSize(s) * 2.5, bottom - top)) };
};
const headlineCopy = (p: StyledProps, s: Scene, w: number, h: number, max: number, weight = s.d.weight) => {
  const mono = /mono|menlo|consolas/i.test(p.fontFamily);
  // A headline never breaks inside a word: the widest word caps the size.
  const wordCap = Math.min(...p.title.split(/\s+/).filter(Boolean).map(word => w / Math.max(1e-3, copyWidth(word, 100, mono, s.font, weight) / 100)));
  let lo = Math.min(labelSize(s), wordCap), hi = Math.max(lo, Math.min(max, wordCap));
  for (let i = 0; i < 12; i++) {
    const mid = (lo + hi) / 2;
    if (wrapCopy(p.title, w, mid, mono, s.font, weight).length * mid * 1.2 <= h) lo = mid; else hi = mid;
  }
  const font = Math.floor(lo), lines = wrapCopy(p.title, w, font, mono, s.font, weight);
  return { font, lines, text: lines.join("\n"), line: font * 1.2 };
};
const body = (s: Scene, p?: StyledProps) => {
  const b = { x: s.width * 0.08, y: s.height * s.bodyY, w: s.width * 0.84, h: s.height * s.bodyH };
  if (p?.style === "product") b.h = Math.min(b.h, labelLayout(p, s).y - labelSize(s) * 0.8 - b.y);
  return b;
};

const Body: React.FC<{ s: Scene; p?: StyledProps; children: React.ReactNode; style?: React.CSSProperties }> = ({ s, p, children, style }) => {
  const b = body(s, p);
  return <div style={{ position: "absolute", left: b.x, top: b.y, width: b.w, height: b.h, ...style }}>{children}</div>;
};

const ProductLabels: React.FC<{ p: StyledProps; s: Scene; focus?: number }> = ({ p, s, focus }) => {
  const l = labelLayout(p, s);
  return <div data-21st-slot="items" style={{ position: "absolute", left: s.width * 0.08, top: l.y, width: l.w, height: l.h, display: "grid", gridTemplateColumns: `repeat(${l.cols}, minmax(0,1fr))`, gridTemplateRows: l.rows.map(h => `${h}px`).join(" "), gap: l.gap, fontFamily: s.d.bodyFont, color: s.d.muted }}>
    {focus !== undefined && (() => {
      const index = Math.min(l.copy.length - 1, Math.floor(focus)), next = Math.min(l.copy.length - 1, index + 1), q = focus - index;
      const position = (i: number) => ({ x: (i % l.cols) * (l.cellW + l.gap), y: l.rows.slice(0, Math.floor(i / l.cols)).reduce((n, row) => n + row + l.gap, 0), h: l.rows[Math.floor(i / l.cols)]! });
      const a = position(index), b = position(next);
      return <div style={{ position: "absolute", pointerEvents: "none", left: mix(a.x, b.x, q) - l.font * 0.13, top: mix(a.y, b.y, q) - l.font * 0.05, width: l.cellW + l.font * 0.26, height: mix(a.h, b.h, q) + l.font * 0.1, border: `${Math.max(1, s.unit * 0.2)}px solid ${s.d.accent}`, borderRadius: s.d.radius, boxSizing: "border-box" }} />;
    })()}
    {l.copy.map((lines, i) => <span key={i} style={{ fontSize: l.font, lineHeight: 1.22, paddingBottom: l.font * 0.12, boxSizing: "border-box", whiteSpace: "pre-wrap", overflowWrap: "anywhere", color: focus === undefined ? undefined : i === Math.round(focus) ? s.d.ink : s.d.muted }}>{lines.join("\n")}</span>)}
  </div>;
};

/** Dedicated typography scenes still expose real visible text slots. */
const Footer: React.FC<{ p: StyledProps; s: Scene; y?: number; focus?: number }> = ({ p, s, y = 0.79, focus }) => {
  if (p.style === "product") {
    const f = footerLayout(p, s);
    return <><div data-21st-slot="subtitle" style={{ position: "absolute", left: s.width * 0.08, top: f.y, width: f.labels.w, height: f.h, fontSize: f.font, lineHeight: 1.25, paddingBottom: f.font * 0.12, boxSizing: "border-box", whiteSpace: "pre-wrap", overflowWrap: "anywhere", color: s.d.muted, fontFamily: s.d.bodyFont }}>{f.copy.join("\n")}</div><ProductLabels p={p} s={s} focus={focus} /></>;
  }
  const w = s.width * 0.84;
  return <>
    <div style={{ position: "absolute", left: s.width * 0.08, top: s.height * y }}><Text text={p.subtitle} width={w} height={s.height * 0.075} d={s.d} slot="subtitle" max={s.unit * 2.3} lines={s.portrait ? 3 : 2} style={{ color: s.d.muted, fontFamily: s.d.bodyFont }} /></div>
    <div data-21st-slot={"labels"} style={{ position: "absolute", left: s.width * 0.08, top: s.height * 0.905, width: w, height: s.unit * 3, display: "flex", gap: s.unit * 2, justifyContent: "space-between" }}>
      {p.labels.map((label, i) => <span key={i} style={{ fontSize: fitFontSize({ chars: label.length, boxW: w / p.labels.length - s.unit * 2, boxH: s.unit * 3, max: s.unit * 1.7 }), color: s.d.muted, fontFamily: s.d.bodyFont }}>{label}</span>)}
    </div>
  </>;
};

const Labels: React.FC<{ p: StyledProps; s: Scene; y?: number }> = ({ p, s, y = 0.92 }) => {
  if (p.style === "product") return <ProductLabels p={p} s={s} />;
  return <div data-21st-slot={"labels"} style={{ position: "absolute", left: s.width * 0.08, top: s.height * y, width: s.width * 0.84, display: "flex", gap: s.unit * 2, fontFamily: s.d.bodyFont, color: s.d.muted }}>{p.labels.map((x, i) => <span key={i} style={{ flex: 1, fontSize: fitFontSize({ chars: x.length, boxW: s.width * 0.84 / p.labels.length - s.unit * 2, boxH: s.unit * 3, max: s.unit * 1.6 }) }}>{x}</span>)}</div>;
};

/** Owned procedural artwork. Five systems change composition and materials. */
const Art: React.FC<{ d: Design; style: StyledProps["style"]; index: number; image?: string }> = ({ d, style, index, image }) => {
  const id = useId().replace(/:/g, "");
  if (image) return <Img src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  return <svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor={d.accent} /><stop offset="1" stopColor={style === "glass" ? d.secondary : d.surface} /></linearGradient></defs>
    <rect width="160" height="120" fill={d.surface} />
    {style === "swiss" || style === "product" ? <><rect x="10" y="10" width={42 + index * 4} height="100" fill={d.accent} /><circle cx="116" cy={38 + index % 3 * 15} r="26" fill={d.ink} /><path d="M78 96H150M78 103H150" stroke={d.line} strokeWidth="2" /></> :
      style === "editorial" ? <><rect x="9" y="9" width="142" height="102" fill={d.line} /><circle cx={44 + index % 4 * 20} cy="38" r="27" fill={d.accent} opacity=".75" /><path d="M8 102L58 54L96 87L122 63L152 104Z" fill={d.ink} /><path d="M12 16H148M12 106H148" stroke={d.bg} strokeWidth="1" /></> :
      style === "terminal" ? <><path d="M0 30H160M0 60H160M0 90H160M40 0V120M80 0V120M120 0V120" stroke={d.line} /><path d={`M20 92L43 ${24 + index % 3 * 10}L80 86L113 32L144 71`} stroke={d.accent} strokeWidth="2" fill="none" /><circle cx="113" cy="32" r="5" fill={d.accent} /></> :
      style === "studio" ? <><rect width="160" height="120" fill={d.line} /><circle cx="52" cy="56" r="39" fill={d.accent} /><rect x="88" y="20" width="54" height="80" rx="22" fill={d.secondary} transform={`rotate(${index % 2 ? 12 : -12} 115 60)`} /><path d="M26 103L65 70L98 105Z" fill={d.ink} /></> :
      <><rect width="160" height="120" fill={`url(#${id})`} /><ellipse cx={65 + index % 3 * 15} cy="57" rx="49" ry="39" fill={withAlpha(d.ink, 0.13)} stroke={withAlpha(d.ink, 0.4)} /><ellipse cx="104" cy="82" rx="40" ry="18" fill={withAlpha(d.ink, 0.08)} stroke={withAlpha(d.ink, 0.27)} /></>}
  </svg>;
};

const SerifChapter: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(20, 92);
  const wide = !s.portrait, titleW = b.w * (wide ? 0.67 : 0.92), t = titleLayout(p, s, 0.34, 0.37);
  const copy = p.style === "product" ? headlineCopy(p, s, titleW, t.h - labelSize(s) * 1.8, s.unit * 10) : null;
  return <Canvas {...p} noHeading>
    <div style={{ position: "absolute", left: b.x, top: p.style === "product" ? t.y - labelSize(s) * 0.3 : s.height * 0.21, width: b.w, borderTop: `1px solid ${s.d.line}`, paddingTop: s.unit * 2, color: s.d.muted, fontSize: p.style === "product" ? labelSize(s) : s.unit * 1.8, fontFamily: s.d.bodyFont }}>CHAPTER / 01</div>
    <div style={{ position: "absolute", left: b.x, top: p.style === "product" ? t.y + labelSize(s) * 1.8 : s.height * 0.34, width: b.w, height: p.style === "product" ? t.h - labelSize(s) * 1.8 : s.height * 0.37, display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", left: wide ? b.w * 0.72 : b.w * 0.55, top: -s.unit * 6, fontSize: p.style === "product" ? Math.min(t.h * 0.75, s.unit * (wide ? 36 : 30)) : s.unit * (wide ? 36 : 30), color: withAlpha(s.d.accent, p.style === "glass" ? 0.32 : 0.17), fontFamily: s.font, lineHeight: 1 }}>01</div>
      <div style={{ position: "relative", transform: `translateY(${(1 - q) * s.unit * 7}px)`, opacity: q }}><Text text={copy?.text ?? p.title} slot="title" width={titleW} height={copy ? t.h - labelSize(s) * 1.8 : s.height * 0.3} lines={s.portrait ? 3 : 2} d={s.d} max={s.unit * 10} style={{ fontFamily: s.font, lineHeight: 1.04, letterSpacing: "-0.055em", ...(copy ? { fontSize: copy.font, whiteSpace: "pre-wrap", lineHeight: 1.2 } : {}) }} /></div>
      {wide && <div style={{ position: "absolute", left: b.w * 0.7, top: 0, height: s.height * 0.32 * q, borderLeft: `1px solid ${s.d.line}` }} />}
    </div><Footer p={p} s={s} />
  </Canvas>;
};

const SlicedWord: PatternComponent = p => {
  const s = useScene(p), w = s.width * 0.84, t = titleLayout(p, s, 0.35, 0.32), h = t.h;
  const copy = p.style === "product" ? headlineCopy(p, s, w, h * 0.9, s.unit * 18) : null;
  const fs = copy?.font ?? Math.floor(fitFontSize({ chars: p.title.length, boxW: w, boxH: h, max: s.unit * 18, charEm: p.style === "editorial" ? 0.72 : 0.65 }));
  return <Canvas {...p} noHeading>
    <div data-21st-slot="title" style={{ position: "absolute", left: s.width * 0.08, top: t.y, width: w, height: h }}>
      {p.style === "product" && s.stagger(5, 12, 35) === 1 ? (
        // Once the strips align, keep one continuous readable headline.
        <div style={{ position: "absolute", top: 0, width: w, height: h, display: "flex", alignItems: "center", fontSize: fs, fontWeight: s.d.weight, ...noWrap, whiteSpace: "pre-wrap", lineHeight: 1.2 }}>{copy?.text ?? p.title}</div>
      ) : Array.from({ length: 6 }, (_, i) => {
        const q = s.stagger(i, 12, 35), y = Math.round(h * i / 6), nextY = Math.round(h * (i + 1) / 6);
        return <div key={i} style={{ position: "absolute", top: y, width: w, height: nextY - y, overflow: "hidden" }}><div style={{ position: "absolute", top: -y, width: w, height: h, display: "flex", alignItems: "center", fontSize: fs, fontWeight: s.d.weight, ...noWrap, ...(copy ? { whiteSpace: "pre-wrap", lineHeight: 1.2 } : {}), transform: q === 1 ? undefined : `translateX(${Math.round((1 - q) * (i % 2 ? -w : w))}px)`, opacity: q === 1 ? undefined : q }}>{copy?.text ?? p.title}</div></div>;
      })}
    </div><div style={{ position: "absolute", left: s.width * 0.08, top: p.style === "product" ? t.y + t.h + s.unit * 0.8 : s.height * 0.7, width: w * s.reveal(80, 114), height: s.unit * (p.style === "studio" ? 1.2 : 0.18), background: s.d.accent }} /><Footer p={p} s={s} />
  </Canvas>;
};

const OutlineSolid: PatternComponent = p => {
  const s = useScene(p), w = s.width * 0.84, t = titleLayout(p, s, 0.34, 0.36), h = t.h, q = s.reveal(18, 80), fill = s.reveal(80, 122);
  const copy = p.style === "product" ? headlineCopy(p, s, w, h * 0.9, s.unit * 18) : null;
  const fs = copy?.font ?? Math.floor(fitFontSize({ chars: p.title.length, boxW: w, boxH: h, max: s.unit * 18, charEm: p.style === "editorial" ? 0.72 : 0.65 }));
  const id = useId().replace(/:/g, "");
  return <Canvas {...p} noHeading>
    <svg viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", left: s.width * 0.08, top: t.y, width: w, height: h, overflow: "visible", fontFamily: s.font }}>
      <defs><clipPath id={id}><rect width={w * fill} height={h} /></clipPath></defs>
      {[2, 1, 0].map(i => <text key={i} data-21st-slot="title" x={w / 2 + (1 - q) * i * s.unit * 8} y={h * 0.62 + (1 - q) * i * s.unit * 4} textAnchor="middle" fontSize={fs} fontWeight={s.d.weight} fill="none" stroke={i ? withAlpha(s.d.accent, 0.28) : s.d.accent} strokeWidth={p.style === "studio" ? s.unit * 0.5 : s.unit * 0.14}>{copy ? copy.lines.map((line, j) => <tspan key={j} x={w / 2 + (1 - q) * i * s.unit * 8} y={(h - copy.lines.length * copy.line) / 2 + copy.font * 0.85 + j * copy.line + (1 - q) * i * s.unit * 4}>{line}</tspan>) : p.title}</text>)}
      <text data-21st-slot="title" x={w / 2} y={h * 0.62} textAnchor="middle" fontSize={fs} fontWeight={s.d.weight} fill={s.d.ink} clipPath={`url(#${id})`}>{copy ? copy.lines.map((line, j) => <tspan key={j} x={w / 2} y={(h - copy.lines.length * copy.line) / 2 + copy.font * 0.85 + j * copy.line}>{line}</tspan>) : p.title}</text>
      <line x1={w * fill} x2={w * fill} y1={h * 0.08} y2={h * 0.95} stroke={s.d.accent} opacity={fill < 1 ? 0.6 : 0} />
    </svg><Footer p={p} s={s} />
  </Canvas>;
};

const WordRail: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), row = Math.min(b.h * 0.37, s.unit * 15);
  const progress = s.reveal(22, 120) * (p.labels.length - 1), index = Math.floor(progress);
  if (p.style === "product") {
    const font = labelSize(s), available = footerLayout(p, s).y - b.y - font * 0.8;
    const title = headlineCopy(p, s, b.w, available * 0.42, s.unit * 8);
    const titleH = title.lines.length * title.line + 2, panelY = b.y + titleH + font * 0.5, panelH = available - titleH - font * 0.5;
    const word = p.labels[Math.min(p.labels.length - 1, Math.round(progress))]!;
    const wordCopy = headlineCopy({ ...p, title: word }, s, b.w - font * 1.5, panelH - font * 0.6, s.unit * 9);
    const phase = progress - Math.floor(progress), travel = Math.sin(phase * Math.PI) * font * 0.15;
    const compact = wordCopy.lines.length * wordCopy.line + wordCopy.font * 0.12 + font * 0.4 > panelH;
    // Long edits keep all words readable. The same moving aperture travels
    // through their visible grid when a second enlarged word cannot fit.
    if (compact) return <Canvas {...p} noHeading>
      <div data-21st-slot="title" style={{ position: "absolute", left: b.x, top: b.y, width: b.w, height: titleH, whiteSpace: "pre-wrap", fontSize: title.font, lineHeight: 1.2, fontWeight: s.d.weight }}>{title.text}</div>
      <Footer p={p} s={s} focus={progress} />
    </Canvas>;
    return <Canvas {...p} noHeading>
      <div data-21st-slot="title" style={{ position: "absolute", left: b.x, top: b.y, width: b.w, height: titleH, whiteSpace: "pre-wrap", fontSize: title.font, lineHeight: 1.2, fontWeight: s.d.weight }}>{title.text}</div>
      <Panel d={s.d} style={{ position: "absolute", left: b.x, top: panelY, width: b.w, height: panelH, borderLeft: `${s.unit * 0.55}px solid ${s.d.accent}`, padding: font * 0.2, display: "flex", alignItems: "center" }}>
        <div data-21st-slot="items" style={{ width: b.w - font * 1.5, fontSize: wordCopy.font, lineHeight: 1.2, paddingBottom: wordCopy.font * 0.12, whiteSpace: "pre-wrap", fontWeight: s.d.weight, transform: `translateY(${travel}px)`, opacity: 1 - Math.sin(phase * Math.PI) * 0.3 }}>{wordCopy.text}</div>
      </Panel>
      <div style={{ position: "absolute", left: b.x, top: b.y + available + font * 0.25, display: "flex", gap: s.unit * 1.5 }}>{p.labels.map((_, i) => <div key={i} style={{ width: i === Math.round(progress) ? s.unit * 8 : s.unit * 2.4, height: s.unit * 0.45, background: i === Math.round(progress) ? s.d.accent : s.d.line }} />)}</div>
      <Footer p={p} s={s} />
    </Canvas>;
  }
  return <Canvas {...p}><Body s={s} p={p}>
    <div style={{ height: b.h, display: "flex", flexDirection: "column", justifyContent: "center", gap: s.unit * 3 }}>
      <div style={{ color: s.d.muted, fontSize: s.unit * 3, fontFamily: s.d.bodyFont }}>A different rhythm for</div>
      <Panel d={s.d} style={{ position: "relative", height: row * 1.35, overflow: "hidden", borderLeft: `${s.unit * 0.55}px solid ${s.d.accent}`, paddingLeft: s.unit * 3 }}>
        <div data-21st-slot={"labels"} style={{ position: "absolute", left: s.unit * 3, right: s.unit * 3, top: row * 0.175, transform: `translateY(${-progress * row}px)` }}>{p.labels.map((x, i) => <div key={i} style={{ height: row, fontSize: fitFontSize({ chars: x.length, boxW: b.w - s.unit * 8, boxH: row, max: s.unit * 11 }), fontWeight: s.d.weight, color: i === index || i === index + 1 ? s.d.ink : s.d.muted, display: "flex", alignItems: "center", ...noWrap }}>{x}</div>)}</div>
      </Panel><div style={{ display: "flex", gap: s.unit * 1.5 }}>{p.labels.map((_, i) => <div key={i} style={{ width: i === Math.round(progress) ? s.unit * 8 : s.unit * 2.4, height: s.unit * 0.45, background: i === Math.round(progress) ? s.d.accent : s.d.line }} />)}</div>
    </div>
  </Body></Canvas>;
};

const PosterGrid: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), chars = p.title.replace(/\s+/g, "").slice(0, 9).split(""), gap = s.unit * 0.7;
  // The native paper serif's glyph bounds are taller than a one-em line.
  // Allocate against the actual grid cell, including its gaps and ink height.
  const cellFont = p.style === "product" ? Math.min((b.h - gap * 2) / 3 / 1.35, (b.w - gap * 2) / 3 * 0.8) : Math.min(b.h / 3 * 0.77, b.w / 3 * 0.8);
  return <Canvas {...p}><Body s={s} p={p} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)", gap, overflow: "hidden" }}>
    {Array.from({ length: 9 }, (_, i) => <Panel key={i} d={s.d} style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: i === 4 ? s.d.accent : s.d.surface, transform: `translateY(${(1 - s.stagger(i, 14, 23)) * b.h * (i % 2 ? -0.4 : 0.4)}px)`, opacity: s.stagger(i, 14, 23) }}><span data-21st-slot="title" style={{ fontSize: cellFont, lineHeight: p.style === "product" ? 1.25 : 1, fontWeight: s.d.weight, color: i === 4 ? s.d.bg : s.d.ink }}>{chars[i] ?? "·"}</span></Panel>)}
  </Body><Labels p={p} s={s} /></Canvas>;
};

const DotTitle: PatternComponent = p => {
  const s = useScene(p), w = s.width * 0.84, t = titleLayout(p, s, 0.34, 0.34), h = t.h, id = useId().replace(/:/g, "");
  const copy = p.style === "product" ? headlineCopy(p, s, w, h * 0.9, s.unit * 17) : null;
  const fs = copy?.font ?? fitFontSize({ chars: p.title.length, boxW: w, boxH: h, max: s.unit * 17, charEm: p.style === "editorial" ? 0.72 : p.style === "terminal" ? 0.65 : 0.6 }), cols = 92;
  // Square sampling cells preserve the glyph silhouette in tall aspect ratios.
  const rows = Math.ceil(h / (w / cols));
  return <Canvas {...p} noHeading>
    <svg viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", left: s.width * 0.08, top: t.y, width: w, height: h, fontFamily: s.font }}>
      <defs><clipPath id={id}><text x={w / 2} y={h * 0.62} textAnchor="middle" fontSize={fs} fontWeight="900">{copy ? copy.lines.map((line, j) => <tspan key={j} x={w / 2} y={(h - copy.lines.length * copy.line) / 2 + copy.font * 0.85 + j * copy.line}>{line}</tspan>) : p.title}</text></clipPath></defs>
      <g data-21st-slot="title" clipPath={`url(#${id})`}>{Array.from({ length: cols * rows }, (_, i) => { const col = i % cols, row = Math.floor(i / cols), q = clamp((s.frame - 12 - col * 0.72 - row / Math.max(1, rows - 1) * 16.8) / 18); return <circle key={i} cx={(col + 0.5) * w / cols} cy={(row + 0.5) * h / rows} r={Math.min(w / cols, h / rows) * (p.style === "studio" ? 0.44 : 0.35)} fill={p.style === "terminal" ? s.d.accent : s.d.ink} opacity={q} />; })}</g>
    </svg><Footer p={p} s={s} />
  </Canvas>;
};

const PartnerBraid: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(18, 110), cardW = b.w * (s.portrait ? (p.style === "product" ? 0.9 : 0.73) : 0.35);
  const font = p.style === "product" ? Math.max(labelSize(s), s.unit * 4.5) : 0;
  const copies = p.style === "product" ? p.labels.slice(0, 2).map(x => wrapCopy(x, cardW * 0.85, font, s.d.monospace, s.font, s.d.weight)) : [];
  const copyH = p.style === "product" ? Math.max(...copies.map(x => x.length)) * font * 1.25 : 0;
  const cardH = p.style === "product" ? Math.max(b.h * 0.25, copyH + font * 0.6) : b.h * 0.25;
  return <Canvas {...p}><Body s={s} p={p}>
    <svg width={b.w} height={b.h} style={{ position: "absolute", inset: 0 }}><path d={`M${b.w * 0.08} ${b.h * 0.22} C${b.w * 0.88} ${b.h * 0.08},${b.w * 0.12} ${b.h * 0.93},${b.w * 0.9} ${b.h * 0.7}`} fill="none" stroke={s.d.accent} strokeWidth={s.unit * (p.style === "studio" ? 0.7 : 0.2)} strokeDasharray="10 7" opacity={1 - q * 0.75} /><path d={`M${b.w * 0.08} ${b.h * 0.75} C${b.w * 0.9} ${b.h * 0.85},${b.w * 0.1} ${b.h * 0.05},${b.w * 0.9} ${b.h * 0.24}`} fill="none" stroke={s.d.line} strokeWidth={s.unit * 0.22} /></svg>
    <div data-21st-slot={p.style === "product" ? "items" : "labels"} style={{ position: "absolute", inset: 0 }}>{p.labels.slice(0, 2).map((x, i) => {
      const finalX = s.portrait ? (b.w - cardW) / 2 : b.w * (i ? 0.55 : 0.1), finalY = s.portrait ? (p.style === "product" ? (b.h - cardH * 2 - font) / 2 + i * (cardH + font) : b.h * (i ? 0.53 : 0.13)) : b.h * 0.35;
      return <Panel key={i} d={s.d} style={{ position: "absolute", width: cardW, height: cardH, left: mix(i ? b.w - cardW : 0, finalX, q), top: finalY + Math.sin(q * Math.PI * 2 + i * Math.PI) * b.h * 0.19 * (1 - q), display: "grid", placeItems: "center", transform: `rotate(${(1 - q) * (i ? 12 : -12)}deg)`, backdropFilter: p.style === "glass" ? "blur(18px)" : undefined }}><Text text={p.style === "product" ? copies[i]!.join("\n") : x} width={cardW * 0.85} height={p.style === "product" ? copyH : cardH * 0.5} d={s.d} max={s.unit * 4.5} style={{ textAlign: "center", ...noWrap, ...(p.style === "product" ? { whiteSpace: "pre-wrap", fontSize: font, letterSpacing: 0 } : {}) }} /></Panel>;
    })}</div><div style={{ position: "absolute", left: b.w * 0.47, top: p.style === "product" && s.portrait ? b.h * 0.5 - font * 0.65 : b.h * (s.portrait ? 0.39 : 0.4), fontSize: p.style === "product" ? font : s.unit * 4, color: s.d.accent, opacity: s.reveal(90, 122) }}>×</div>
  </Body><Labels p={p} s={s} /></Canvas>;
};

const StrokeMark: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(14, 74), repeat = s.reveal(80, 128), size = Math.min(b.w * 0.45, b.h * 0.85);
  const paths = ["M20 50L50 20L80 50", "M20 50L50 80L80 50", "M35 50L50 35L65 50", "M35 50L50 65L65 50", "M50 8V20", "M8 50H20", "M80 50H92", "M50 80V92"];
  const mark = (opacity: number, progress: number) => <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ opacity }}>{paths.map((d, i) => <path key={i} d={d} pathLength="1" fill="none" stroke={s.d.accent} strokeWidth={p.style === "studio" ? 7 : p.style === "terminal" ? 2 : 4} strokeLinejoin={p.style === "glass" ? "round" : "miter"} strokeDasharray="1" strokeDashoffset={1 - clamp(progress * 1.35 - i * 0.045)} />)}</svg>;
  return <Canvas {...p}><Body s={s} p={p}>
    <div style={{ position: "absolute", left: (b.w - size) / 2, top: (b.h - size) / 2, width: size, height: size, transform: `scale(${mix(1.15, 0.75, repeat)})` }}>{mark(1, q)}</div>
    {Array.from({ length: 6 }, (_, i) => <div key={i} style={{ position: "absolute", width: size * 0.2, height: size * 0.2, left: b.w * [0.07, 0.77, 0.14, 0.69, 0.25, 0.6][i]!, top: b.h * [0.04, 0.1, 0.43, 0.5, 0.76, 0.79][i]!, opacity: repeat * 0.45, transform: `scale(${repeat})` }}>{mark(1, 1)}</div>)}
  </Body><Labels p={p} s={s} /></Canvas>;
};

const PrismWord: PatternComponent = p => {
  const s = useScene(p), w = s.width * 0.84, t = titleLayout(p, s, 0.34, 0.35), h = t.h, q = s.reveal(18, 120);
  const depthX = Math.ceil(s.unit * 3.6), depthY = Math.ceil(s.unit * 2.24);
  const innerW = w - depthX - s.unit * 4, innerH = h - depthY;
  const copy = p.style === "product" ? headlineCopy(p, s, innerW * 0.9, innerH * 0.85, s.unit * 22, Math.max(650, s.d.weight)) : null;
  const fs = copy?.font ?? Math.floor(fitFontSize({ chars: p.title.length, boxW: innerW * 0.9, boxH: innerH * 0.85, max: s.unit * 22, charEm: p.style === "editorial" ? 0.85 : p.style === "terminal" ? 0.72 : 0.67 }));
  return <Canvas {...p} noHeading>
    <div data-21st-slot="title" style={{ position: "absolute", left: s.width * 0.08, top: t.y, width: w, height: h }}>
      <div style={{ position: "absolute", left: s.unit * 2, top: 0, width: innerW, height: innerH, transform: `skewY(${mix(-7, 0, q)}deg) scaleX(${mix(0.84, 1, q)})` }}>{Array.from({ length: 9 }, (_, i) => <div key={i} style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: fs, lineHeight: 1.05, fontWeight: Math.max(650, s.d.weight), color: i === 8 ? s.d.ink : withAlpha(s.d.accent, 0.22 + i * 0.06), transform: `translate(${Math.round((8 - i) * s.unit * 0.45)}px,${Math.round((8 - i) * s.unit * 0.28)}px)`, textShadow: p.style === "glass" && i === 8 ? `0 0 ${s.unit * 2}px ${withAlpha(s.d.accent, 0.5)}` : undefined, ...noWrap, ...(copy ? { whiteSpace: "pre-wrap", lineHeight: 1.2, textAlign: "center" } : {}) }}>{copy?.text ?? p.title}</div>)}</div>
    </div><Footer p={p} s={s} />
  </Canvas>;
};

const SwatchOrbit: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(16, 118), radiusX = b.w * 0.31, radiusY = b.h * 0.27, sw = Math.min(b.w * 0.22, b.h * 0.3);
  return <Canvas {...p}><Body s={s} p={p}>
    <svg width={b.w} height={b.h} style={{ position: "absolute", inset: 0 }}><ellipse cx={b.w / 2} cy={b.h * 0.46} rx={radiusX} ry={radiusY} fill="none" stroke={s.d.line} strokeDasharray={p.style === "terminal" ? "5 5" : undefined} /></svg>
    <div data-21st-slot={p.style === "product" ? "items" : "labels"} style={{ position: "absolute", inset: 0 }}>{p.labels.map((x, i) => {
      const a = i * Math.PI * 2 / p.labels.length + mix(-1.6, 0.25, q), depth = Math.sin(a), scale = 0.73 + (depth + 1) * 0.18;
      return <Panel key={i} d={s.d} style={{ position: "absolute", width: sw, height: sw * 1.2, left: b.w / 2 + Math.cos(a) * radiusX - sw / 2, top: b.h * 0.46 + depth * radiusY - sw * 0.6, zIndex: Math.round(depth * 10 + 20), padding: sw * 0.08, transform: `scale(${scale}) rotate(${p.style === "studio" ? (i % 2 ? 8 : -8) : 0}deg)`, backdropFilter: p.style === "glass" ? "blur(16px)" : undefined }}>
        <div style={{ height: "75%", borderRadius: s.d.radius * 0.4, background: i % 3 === 0 ? `linear-gradient(135deg,${s.d.accent},${withAlpha(s.d.accent, 0.16)})` : i % 3 === 1 ? `repeating-linear-gradient(100deg,${s.d.surface} 0px,${s.d.line} 2px,${s.d.surface} 4px)` : `radial-gradient(ellipse at 30% 20%,${s.d.ink},${s.d.accent})`, border: `1px solid ${s.d.line}` }} /><Text text={x} width={sw * 0.82} height={sw * 0.18} d={s.d} max={s.unit * 2} style={{ marginTop: sw * 0.045, textAlign: "center", ...noWrap }} />
      </Panel>;
    })}</div>
  </Body><Labels p={p} s={s} /></Canvas>;
};

const LineTitle: PatternComponent = p => {
  const s = useScene(p), w = s.width * 0.84, t = titleLayout(p, s, 0.24, 0.5), h = t.h, q = s.reveal(12, 94), open = s.reveal(94, 128);
  const copy = p.style === "product" ? headlineCopy(p, s, w * 0.65, h * 0.65, s.unit * 8) : null;
  const fs = copy?.font ?? fitFontSize({ chars: p.title.length, boxW: w * 0.65, boxH: h * 0.2, max: s.unit * 8 });
  return <Canvas {...p} noHeading>
    <svg viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", left: s.width * 0.08, top: t.y, width: w, height: h, fontFamily: s.font }}>{Array.from({ length: 8 }, (_, i) => {
      const insetX = w * (0.018 + i * 0.04), insetY = h * (0.035 + i * 0.042), spread = open * i * s.unit * 0.35;
      return <rect key={i} x={insetX - spread} y={insetY} width={w - insetX * 2 + spread * 2} height={h - insetY * 2} rx={p.style === "terminal" || p.style === "swiss" ? 0 : Math.min(w, h) * 0.17} fill="none" stroke={i % 2 ? s.d.line : s.d.accent} strokeWidth={p.style === "studio" ? s.unit * 0.4 : s.unit * 0.12} pathLength="1" strokeDasharray="1" strokeDashoffset={1 - clamp(q * 1.5 - i * 0.07)} />;
    })}<rect x={w * 0.15} y={h * (copy ? 0.16 : 0.37)} width={w * 0.7} height={h * (copy ? 0.7 : 0.28)} fill={s.d.bg} /><text data-21st-slot="title" x={w / 2} y={h * 0.55} textAnchor="middle" fontSize={fs} fontWeight={s.d.weight} fill={s.d.ink}>{copy ? copy.lines.map((line, j) => <tspan key={j} x={w / 2} y={(h - copy.lines.length * copy.line) / 2 + copy.font * 0.85 + j * copy.line}>{line}</tspan>) : p.title}</text></svg><Footer p={p} s={s} />
  </Canvas>;
};

const VoiceInstrument: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), size = Math.min(b.w, b.h) * (p.style === "product" && s.portrait ? 0.96 : 0.83), q = s.reveal(18, 116), held = Math.min(s.frame, 132), r = size * 0.3;
  return <Canvas {...p}><Body s={s} p={p}>
    <svg viewBox={`0 0 ${size} ${size}`} style={{ position: "absolute", width: size, height: size, left: (b.w - size) / 2, top: (b.h - size) / 2 }}>{Array.from({ length: 72 }, (_, i) => {
      const angle = i * Math.PI * 2 / 72, energy = 0.45 + 0.35 * Math.sin(i * 0.72 + held * 0.085), outer = r + energy * size * 0.16 * q;
      return <g key={i}><line x1={size / 2 + Math.cos(angle) * r} y1={size / 2 + Math.sin(angle) * r} x2={size / 2 + Math.cos(angle) * outer} y2={size / 2 + Math.sin(angle) * outer} stroke={s.d.accent} strokeWidth={p.style === "studio" ? size * 0.016 : size * 0.006} opacity={0.3 + q * 0.6} /><circle cx={size / 2 + Math.cos(angle) * (outer + (1 - q) * size * 0.15)} cy={size / 2 + Math.sin(angle) * (outer + (1 - q) * size * 0.15)} r={size * (p.style === "glass" ? 0.007 : 0.004)} fill={s.d.ink} opacity={q} /></g>;
    })}<circle cx={size / 2} cy={size / 2} r={size * 0.22} fill={s.d.surface} stroke={s.d.line} /><path d={`M${size * 0.36} ${size * 0.5}Q${size * 0.4} ${size * 0.38} ${size * 0.44} ${size * 0.5}T${size * 0.52} ${size * 0.5}T${size * 0.6} ${size * 0.5}T${size * 0.68} ${size * 0.5}`} fill="none" stroke={s.d.accent} strokeWidth={size * 0.012} /></svg>
  </Body><Labels p={p} s={s} /></Canvas>;
};

const MacroSweep: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(20, 122), held = Math.min(s.frame, 132);
  return <Canvas {...p}><Body s={s} p={p}><Panel d={s.d} style={{ height: b.h, overflow: "hidden", position: "relative" }}>
    <div style={{ position: "absolute", inset: "12%", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridTemplateRows: "repeat(3,1fr)", gap: s.unit * 0.8, transform: `scale(${mix(2.35, 1, q)}) rotate(${mix(-12, 0, q)}deg)` }}>{Array.from({ length: 15 }, (_, i) => <div key={i} style={{ borderRadius: p.style === "swiss" || p.style === "terminal" ? 0 : s.unit * 1.4, border: `1px solid ${s.d.line}`, background: p.style === "terminal" ? `linear-gradient(135deg,${s.d.surface},${withAlpha(s.d.accent, 0.18)})` : `linear-gradient(135deg,${s.d.line},${s.d.surface} 35%,${withAlpha(s.d.accent, 0.55)})`, boxShadow: p.style === "studio" ? `${s.unit * 0.8}px ${s.unit * 0.8}px 0 ${s.d.bg}` : `inset 0 1px ${withAlpha(s.d.ink, 0.3)},0 ${s.unit * 0.8}px ${s.unit * 1.5}px ${withAlpha(s.d.shade, 0.16)}` }} />)}</div>
    <div style={{ position: "absolute", inset: "-50%", background: `linear-gradient(110deg,transparent 42%,${withAlpha(s.d.ink, p.style === "glass" ? 0.45 : 0.22)} 49%,transparent 56%)`, transform: `translateX(${mix(-60, 60, clamp(held / 122))}%)`, mixBlendMode: "screen" }} />
    <div style={{ position: "absolute", left: "5%", bottom: "5%", color: s.d.accent, fontFamily: s.d.bodyFont, fontSize: s.unit * 1.5 }}>MATERIAL STUDY / 01</div>
  </Panel></Body><Labels p={p} s={s} /></Canvas>;
};

const ImageConstellation: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(18, 126), tileW = b.w * (s.portrait ? 0.23 : 0.17), tileH = tileW * 0.82;
  const points = [[0.08, 0.1], [0.33, 0.02], [0.68, 0.05], [0.82, 0.24], [0.05, 0.49], [0.34, 0.34], [0.59, 0.41], [0.78, 0.67], [0.16, 0.74], [0.43, 0.74], [0.65, 0.82]];
  return <Canvas {...p}><Body s={s} p={p} style={{ overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, transform: `scale(${mix(2.5, 1, q)})`, transformOrigin: "50% 50%" }}>{points.map(([x, y], i) => <Panel key={i} d={s.d} style={{ position: "absolute", left: x! * (b.w - tileW), top: y! * (b.h - tileH), width: tileW, height: tileH, padding: s.unit * 0.35, transform: `rotate(${(i % 3 - 1) * mix(11, 5, q)}deg) translateY(${(1 - s.stagger(i, 16, 24)) * s.unit * 3}px)`, opacity: s.stagger(i, 16, 24) }}><div style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: s.d.radius * 0.6 }}><Art d={s.d} style={p.style} index={i} image={i % 2 ? p.secondaryImage || p.image : p.image} /></div></Panel>)}</div></Body><Labels p={p} s={s} /></Canvas>;
};

const ContactWall: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), cols = s.portrait ? 3 : 4, rows = s.portrait ? 4 : 3, gap = s.unit * 0.8, q = s.reveal(18, 128), count = cols * rows;
  return <Canvas {...p}><Body s={s} p={p} style={{ overflow: "hidden" }}><div style={{ position: "absolute", inset: s.unit * 1, display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gridTemplateRows: `repeat(${rows},1fr)`, gap, transform: `scale(${mix(1.35, 1, q)}) translate(${mix(-s.unit * 7, 0, q)}px,${mix(s.unit * 4, 0, q)}px)` }}>{Array.from({ length: count }, (_, i) => <Panel key={i} d={s.d} style={{ overflow: "hidden", padding: s.unit * 0.5, display: "flex", flexDirection: "column", opacity: s.stagger(i, 10, 18), transform: `translateX(${(1 - s.stagger(i, 10, 18)) * (i % 2 ? 1 : -1) * s.unit * 6}px)` }}><div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}><Art d={s.d} style={p.style} index={i} image={i % 2 ? p.secondaryImage || p.image : p.image} /></div><div style={{ height: s.unit * 2.3, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: s.unit * 1.05, color: s.d.muted, fontFamily: s.d.bodyFont }}><span>{String(i + 1).padStart(2, "0")}</span><span>CONTACT / {String(Math.floor(i / cols) + 1).padStart(2, "0")}</span></div></Panel>)}</div></Body><Labels p={p} s={s} /></Canvas>;
};

const DeviceEditorial: PatternComponent = p => {
  const s = useScene(p), b = body(s, p), q = s.reveal(18, 126), dw = b.w * (s.portrait ? 0.68 : 0.48), dh = b.h * 0.87;
  const label = p.title.toUpperCase(), fs = fitFontSize({ chars: label.length, boxW: b.w * 0.98, boxH: b.h * 0.6, max: s.unit * 22 });
  return <Canvas {...p}><Body s={s} p={p} style={{ perspective: b.w * 1.7 }}>
    <div aria-hidden style={{ position: "absolute", left: 0, top: b.h * 0.18, width: b.w, fontSize: fs, fontWeight: s.d.weight, color: p.style === "terminal" ? s.d.muted : withAlpha(s.d.accent, p.style === "glass" ? 0.45 : 0.62), textAlign: "center", ...noWrap }}>{label}</div>
    <Panel d={s.d} style={{ position: "absolute", left: (b.w - dw) / 2, top: b.h * 0.035, width: dw, height: dh, padding: s.unit * 0.8, borderRadius: p.style === "terminal" || p.style === "swiss" ? s.unit : s.unit * 3, transform: `rotateY(${mix(-27, -3, q)}deg) rotateX(${mix(12, 2, q)}deg) translateY(${(1 - q) * s.unit * 7}px)`, transformStyle: "preserve-3d" }}>
      <div style={{ height: s.unit * 2.4, display: "flex", gap: s.unit * 0.6, paddingLeft: s.unit * 0.6 }}>{[0, 1, 2].map(i => <span key={i} style={{ width: s.unit * 0.65, height: s.unit * 0.65, borderRadius: "50%", background: i === 0 ? s.d.accent : s.d.line }} />)}</div><Screen image={p.image} w={dw - s.unit * 1.6} h={dh - s.unit * 4} d={s.d} seed="expression-device" />
    </Panel><div style={{ position: "absolute", left: b.w * 0.08, right: b.w * 0.08, bottom: 0, height: s.unit * 0.18, background: s.d.line, transform: `scaleX(${q})` }} />
  </Body><Labels p={p} s={s} /></Canvas>;
};

export const COMPONENTS: Record<string, PatternComponent> = {
  "ex-serif-chapter": SerifChapter,
  "ex-sliced-word": SlicedWord,
  "ex-outline-solid": OutlineSolid,
  "ex-word-rail": WordRail,
  "ex-poster-grid": PosterGrid,
  "ex-dot-title": DotTitle,
  "ex-partner-braid": PartnerBraid,
  "ex-stroke-mark": StrokeMark,
  "ex-prism-word": PrismWord,
  "ex-swatch-orbit": SwatchOrbit,
  "ex-line-title": LineTitle,
  "ex-voice-instrument": VoiceInstrument,
  "ex-macro-sweep": MacroSweep,
  "ex-image-constellation": ImageConstellation,
  "ex-contact-wall": ContactWall,
  "ex-device-editorial": DeviceEditorial,
};
