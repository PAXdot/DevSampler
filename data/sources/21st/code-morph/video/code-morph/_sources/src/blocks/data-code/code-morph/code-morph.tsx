// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, APPLE, band, easeInOut, expoOut, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { CODE_THEMES, codeTheme, wrappedCode, MONO_EM, gridSize, place, tokenize, type PlacedToken } from "../_shared/code";
import { CodeCard, codeLayout, codeRegion, codeColumns } from "../_shared/code-card";
import { prog } from "../_shared/num";
import { meta } from "./code-morph.meta";
import type { schema } from "./code-morph.schema";

type Move = { from?: PlacedToken; to?: PlacedToken; order: number };

/** Match tokens of two states by longest common subsequence of their text. */
function diffTokens(a: PlacedToken[], b: PlacedToken[]): Move[] {
  const n = a.length;
  const m = b.length;
  const dp: Uint16Array[] = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) dp[i]![j] = a[i]!.text === b[j]!.text ? dp[i + 1]![j + 1]! + 1 : Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!);
  const out: Move[] = [];
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && a[i]!.text === b[j]!.text) out.push({ from: a[i++], to: b[j++], order: out.length });
    else if (j >= m || (i < n && dp[i + 1]![j]! >= dp[i]![j + 1]!)) out.push({ from: a[i++], order: out.length });
    else out.push({ to: b[j++], order: out.length });
  }
  return out;
}

export const Component: React.FC<z.infer<typeof schema>> = ({ surfaceColor, textColor, secondaryColor, title, before, after, language, theme, morphAt, morphFrames, accent, monoFontFamily, bodyFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const resolvedBody = brandFontStack(bodyFontFamily ?? "Geist");
  const { fps } = useVideoConfig();
  const region = useLayout();
  const { width, height, portrait, minFont } = codeRegion(region.width, region.height);
  const { frame, exit } = useEnterExit(meta.timing);
  const th = codeTheme(theme, { surfaceColor, textColor, secondaryColor, accent });

  const wrapCols = codeColumns(width, minFont, portrait);
  const beforeView = wrappedCode(before, language, wrapCols);
  const afterView = wrappedCode(after, language, wrapCols);
  const moves = useMemo(() => {
    const a = place(beforeView.tokens).filter((t) => t.kind !== "space");
    const b = place(afterView.tokens).filter((t) => t.kind !== "space");
    return diffTokens(a, b);
  }, [before, after, language, wrapCols]);
  const ga = beforeView.grid;
  const gb = afterView.grid;
  const { fs, pad, cardW, cardH, lineHeight } = codeLayout({ minFont, portrait, lineHeight: portrait ? 1.25 : 1.6,  cols: Math.max(ga.cols, gb.cols), lines: Math.max(ga.lines, gb.lines), width, height });
  const cw = fs * MONO_EM;
  const lh = fs * lineHeight;

  const enter = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;
  const swarm = Math.min(6, morphFrames * 0.25);
  const moveLen = morphFrames - swarm;
  const N = Math.max(1, moves.length);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <CodeCard minFont={minFont} headerFont={resolvedBody}
        width={cardW}
        height={cardH}
        theme={th}
        title={title}
        style={{ opacity: band(frame, 0, 8) * leave, transform: `translateY(${(1 - enter) * cardH * 0.04}px) scale(${(0.96 + 0.04 * enter) * (1 - exit * 0.04)})` }}
      >
        <div
          data-21st-slot={frame < morphAt + morphFrames / 2 ? "before" : "after"}
          style={{ position: "absolute", left: pad, top: pad, width: Math.max(ga.cols, gb.cols) * cw, height: Math.max(ga.lines, gb.lines) * lh, fontFamily: resolvedMono, fontSize: fs, lineHeight: `${lh}px` }}
        >
          {moves.map((mv, k) => {
            const delay = (mv.order / N) * swarm;
            const t = mv.from && mv.to ? easeInOut(prog(frame, morphAt + delay, morphAt + delay + moveLen)) : 0;
            let x = 0;
            let y = 0;
            let opacity = 1;
            let scale = 1;
            let glow = 0;
            const tok = (mv.to ?? mv.from)!;
            if (mv.from && mv.to) {
              x = mv.from.col + (mv.to.col - mv.from.col) * t;
              y = mv.from.line + (mv.to.line - mv.from.line) * t;
            } else if (mv.from) {
              x = mv.from.col;
              y = mv.from.line;
              opacity = 1 - prog(frame, morphAt, morphAt + 8);
              if (opacity <= 0) return null;
            } else if (mv.to) {
              x = mv.to.col;
              y = mv.to.line;
              const a = morphAt + morphFrames - 10;
              const s = expoOut(prog(frame, a, morphAt + morphFrames));
              opacity = prog(frame, a, a + 6);
              scale = 0.9 + 0.1 * s;
              glow = band(frame, a, a + 4, morphAt + morphFrames - 2, morphAt + morphFrames + 8);
              if (opacity <= 0) return null;
            }
            return (
              <span
                key={k}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  whiteSpace: "pre",
                  color: th.ink[tok.kind],
                  fontStyle: tok.kind === "comment" ? "italic" : undefined,
                  opacity,
                  transform: `translate(${(x * cw).toFixed(2)}px, ${(y * lh).toFixed(2)}px)${scale !== 1 ? ` scale(${scale})` : ""}`,
                  transformOrigin: "0% 50%",
                  borderRadius: fs * 0.18,
                  background: glow > 0 ? withAlpha(accent, 0.18 * glow) : undefined,
                }}
              >
                {tok.text}
              </span>
            );
          })}
        </div>
      </CodeCard>
    </AbsoluteFill>
  );
};
