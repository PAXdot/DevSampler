// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, random, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, APPLE, band, expoOut, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { CODE_THEMES, codeTheme, wrappedCode, MONO_EM, gridSize, place, tokenize, type TokenKind } from "../_shared/code";
import { CodeCard, codeLayout, codeRegion, codeColumns } from "../_shared/code-card";
import { easeIn, prog } from "../_shared/num";
import { meta } from "./glyph-scatter.meta";
import type { schema } from "./glyph-scatter.schema";

const OUT = 12;
const IN = 14;
const GAP = 14;
const JITTER = 5;

type Glyph = { ch: string; kind: TokenKind; line: number; col: number };

function glyphs(src: string, lang: Parameters<typeof tokenize>[1], columns: number): Glyph[] {
  const out: Glyph[] = [];
  for (const t of place(wrappedCode(src, lang, columns).tokens)) {
    if (t.kind === "space") continue;
    t.text.split("").forEach((ch, k) => ch !== " " && out.push({ ch, kind: t.kind, line: t.line, col: t.col + k }));
  }
  return out;
}

const CLUSTER = { "top-left": [0.14, 0.2], "top-right": [0.86, 0.2], center: [0.5, 0.5], "bottom-left": [0.14, 0.8] } as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ surfaceColor, textColor, secondaryColor, title, from, to, language, theme, card, cluster, scatterAt, seed, accent, monoFontFamily, bodyFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const resolvedBody = brandFontStack(bodyFontFamily ?? "Geist");
  const { fps, durationInFrames } = useVideoConfig();
  const region = useLayout();
  const { width, height, portrait, minFont } = codeRegion(region.width, region.height);
  const wrapCols = codeColumns(width, minFont, portrait);
  const { frame: clipFrame, exit } = useEnterExit(meta.timing);
  const tempo = Math.max(1, (scatterAt + GAP + IN + JITTER + 3) / Math.max(1, durationInFrames - 8));
  const frame = clipFrame * tempo;
  const th = codeTheme(theme, { surfaceColor, textColor, secondaryColor, accent });

  const a = useMemo(() => glyphs(from, language, wrapCols), [from, language, wrapCols]);
  const b = useMemo(() => glyphs(to, language, wrapCols), [to, language, wrapCols]);
  const ga = wrappedCode(from, language, wrapCols).grid;
  const gb = wrappedCode(to, language, wrapCols).grid;
  const cols = Math.max(ga.cols, gb.cols);
  const lines = Math.max(ga.lines, gb.lines);
  const L = codeLayout({ cols, lines, width, height, minFont, portrait, lineHeight: portrait ? 1.25 : 1.6 });
  const fs = L.fs;
  const cw = fs * MONO_EM;
  const lh = !card && portrait ? Math.max(fs * L.lineHeight, (height - L.pad * 2 - L.chrome) * .84 / Math.max(1, lines)) : fs * L.lineHeight;
  const areaW = cols * cw;
  const areaH = lines * lh;
  const cardH = card ? L.cardH : Math.min(height, L.chrome + L.pad * 2 + areaH);
  const [cx0, cy0] = CLUSTER[cluster];
  const cx = cx0 * areaW;
  const cy = cy0 * areaH;
  const R = Math.min(areaW, card ? areaH : height * 0.6) * (card ? 0.16 : 0.24) + fs;

  const scatter = (i: number, tag: string) => {
    const ang = random(`gs-${seed}-${tag}-${i}-a`) * Math.PI * 2;
    const r = Math.sqrt(random(`gs-${seed}-${tag}-${i}-r`)) * R;
    return {
      x: cx + Math.cos(ang) * r * 1.4,
      y: cy + Math.sin(ang) * r,
      rot: (random(`gs-${seed}-${tag}-${i}-t`) - 0.5) * 120,
      d: random(`gs-${seed}-${tag}-${i}-d`) * JITTER,
    };
  };

  const enter = springSnap(frame, fps * tempo, 0, APPLE);
  const leave = 1 - exit;
  const S = scatterAt;
  const mid = S + OUT + JITTER;
  const pulse = band(frame, S + OUT - 2, S + OUT + 2, S + GAP + 2, S + GAP + 10);

  const glyphEls: React.ReactNode[] = [];
  a.forEach((g, i) => {
    const p = scatter(i, "o");
    const t = easeIn(prog(frame, S + p.d, S + p.d + OUT));
    const o = 1 - prog(frame, S + p.d + OUT - 2, S + p.d + OUT + 4);
    if (o <= 0) return;
    const x = g.col * cw + (p.x - g.col * cw) * t;
    const y = g.line * lh + (p.y - g.line * lh) * t;
    glyphEls.push(
      <span key={`o${i}`} style={{ position: "absolute", left: 0, top: 0, color: th.ink[g.kind], opacity: o, transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${(p.rot * t).toFixed(2)}deg)` }}>
        {g.ch}
      </span>,
    );
  });
  b.forEach((g, i) => {
    const p = scatter(i, "i");
    const start = S + GAP + p.d;
    if (frame < start - 2) return;
    const t = expoOut(prog(frame, start, start + IN));
    const x = p.x + (g.col * cw - p.x) * t;
    const y = p.y + (g.line * lh - p.y) * t;
    const rot = p.rot * (1 - t);
    glyphEls.push(
      <span
        key={`i${i}`}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          color: th.ink[g.kind],
          opacity: prog(frame, start - 2, start + 2),
          transform: t >= 1 ? `translate(${(g.col * cw).toFixed(2)}px, ${(g.line * lh).toFixed(2)}px)` : `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rot.toFixed(2)}deg)`,
        }}
      >
        {g.ch}
      </span>,
    );
  });

  const body = (
    <div
      data-21st-slot={frame < mid ? "from" : "to"}
      style={{ position: "absolute", left: L.pad, top: L.pad + (card ? 0 : L.chrome), width: areaW, height: areaH, fontFamily: resolvedMono, fontSize: fs, lineHeight: `${lh}px`, whiteSpace: "pre" }}
    >
      <div
        style={{
          position: "absolute",
          left: cx - R * 1.6,
          top: cy - R * 1.2,
          width: R * 3.2,
          height: R * 2.4,
          borderRadius: "50%",
          background: `radial-gradient(closest-side, ${withAlpha(accent, 0.35)}, transparent)`,
          opacity: pulse,
        }}
      />
      {glyphEls}
    </div>
  );

  const style: React.CSSProperties = { opacity: band(frame, 0, 8) * leave, transform: `translateY(${(1 - enter) * L.cardH * 0.04}px) scale(${(0.96 + 0.04 * enter) * (1 - exit * 0.04)})` };
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {card ? (
        <CodeCard minFont={minFont} headerFont={resolvedBody} width={L.cardW} height={L.cardH} theme={th} title={title} style={style}>
          {body}
        </CodeCard>
      ) : (
        <div style={{ position: "relative", width: L.cardW, height: cardH, ...style }}>
          <span data-21st-slot="title" style={{ position: "absolute", left: L.pad, top: L.pad, color: th.ink.plain, fontFamily: resolvedBody, fontSize: minFont, lineHeight: 1.3 }}>
            {title}
          </span>
          <div style={{ position: "absolute", left: L.pad, top: L.pad + minFont * 1.6, width: Math.min(areaW, width * 0.2), height: Math.max(2, minFont * 0.05), background: accent }} />
          {body}
        </div>
      )}
    </AbsoluteFill>
  );
};
