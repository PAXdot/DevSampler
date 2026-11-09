// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, APPLE, band, easeInOut, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { CodeCard, TokenLine, codeLayout, codeRegion, codeColumns } from "../_shared/code-card";
import { CODE_THEMES, codeTheme, wrappedCode, byLine, gridSize, tokenize } from "../_shared/code";
import { prog } from "../_shared/num";
import { meta } from "./line-spotlight.meta";
import type { schema } from "./line-spotlight.schema";

const FIRST_AT = 14;
const MOVE = 10;

export const Component: React.FC<z.infer<typeof schema>> = ({ surfaceColor, textColor, secondaryColor, title, code, language, lines, holdFrames, theme, lineNumbers, accent, monoFontFamily, bodyFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const resolvedBody = brandFontStack(bodyFontFamily ?? "Geist");
  const { fps } = useVideoConfig();
  const region = useLayout();
  const { width, height, portrait, minFont } = codeRegion(region.width, region.height);
  const { frame, exit } = useEnterExit(meta.timing);
  const th = codeTheme(theme, { surfaceColor, textColor, secondaryColor, accent });

  const gutter = lineNumbers ? String(gridSize(code).lines).length + 2 : 0;
  const wrapCols = codeColumns(width, minFont, portrait, gutter);
  const view = wrappedCode(code, language, wrapCols);
  const rows = byLine(view.tokens);
  const { cols } = view.grid;
  const { fs, pad, cardW, cardH, lineHeight } = codeLayout({ minFont, portrait, lineHeight: portrait ? 1.25 : 1.6,  cols, lines: rows.length, width, height, gutterCols: gutter });
  const lh = fs * lineHeight;

  // Spotlight position (line index, fractional while moving).
  const originalRows = code.replace(/\t/g, "  ").split("\n");
  const visualLine = (line: number) => originalRows.slice(0, Math.max(0, line - 1)).reduce((n, row) => n + Math.max(1, Math.ceil(row.length / wrapCols)), 0);
  const targets = lines.map((l) => Math.min(rows.length - 1, visualLine(l)));
  let pos = targets[0]!;
  for (let k = 1; k < targets.length; k++) {
    const at = FIRST_AT + k * (holdFrames + MOVE) - MOVE;
    pos += (targets[k]! - targets[k - 1]!) * easeInOut(prog(frame, at, at + MOVE));
  }
  const on = band(frame, FIRST_AT, FIRST_AT + 8);
  const enter = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <CodeCard minFont={minFont} headerFont={resolvedBody}
        width={cardW}
        height={cardH}
        theme={th}
        title={title}
        style={{ opacity: band(frame, 0, 8) * leave, transform: `translateY(${(1 - enter) * cardH * 0.04}px) scale(${(0.96 + 0.04 * enter) * (1 - exit * 0.04)})` }}
      >
        <div style={{ position: "absolute", left: 0, right: 0, top: pad + pos * lh, height: lh, opacity: on }}>
          <div style={{ position: "absolute", inset: `0 ${pad * 0.35}px`, borderRadius: lh * 0.18, background: withAlpha(accent, theme === "dark" ? 0.16 : 0.1) }} />
          <div style={{ position: "absolute", left: pad * 0.35, top: lh * 0.12, bottom: lh * 0.12, width: Math.max(2, fs * 0.16), borderRadius: 99, background: accent }} />
        </div>
        <div data-21st-slot="code" style={{ position: "absolute", left: pad, top: pad, fontFamily: resolvedMono, fontSize: fs, lineHeight, whiteSpace: "pre" }}>
          {rows.map((r, i) => {
            const d = Math.min(1, Math.abs(i - pos));
            const dim = 1 - 0.55 * on * d;
            return (
              <div key={i} style={{ height: lh, opacity: dim }}>
                {lineNumbers ? <span style={{ color: i === Math.round(pos) && on > 0.5 ? accent : th.lineNo, display: "inline-block", width: `${gutter - 1}ch`, textAlign: "right", marginRight: "1ch" }}>{i + 1}</span> : null}
                <TokenLine tokens={r} theme={th} />
              </div>
            );
          })}
        </div>
      </CodeCard>
    </AbsoluteFill>
  );
};
