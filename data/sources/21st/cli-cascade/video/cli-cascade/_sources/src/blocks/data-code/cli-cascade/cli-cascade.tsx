// Built with Remotion - https://remotion.pro/license
import React, { useId } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, APPLE, band, springSnap, useEnterExit, useLayout } from "../../../kit/index";
import { CODE_THEMES, codeTheme } from "../_shared/code";
import { CodeCard, codeLayout, codeRegion, codeColumns } from "../_shared/code-card";
import { mix } from "../_shared/num";
import { bannerRows } from "./block-font";
import { meta } from "./cli-cascade.meta";
import type { schema } from "./cli-cascade.schema";

const TYPE_AT = 8;
const LINE_STEP = 4;

export const Component: React.FC<z.infer<typeof schema>> = ({ surfaceColor, textColor, secondaryColor, title, command, banner, lines, cps, theme, accent, monoFontFamily, bodyFontFamily }) => {
  // Preserve the authored fallback for terminal box-drawing glyphs. The
  // selected mono role still loads through the shared brand font mechanism.
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono").split(",")[0]!;
  const resolvedBody = brandFontStack(bodyFontFamily ?? "Geist");
  const { fps } = useVideoConfig();
  const region = useLayout();
  const { width, height, portrait, minFont } = codeRegion(region.width, region.height);
  const { frame, exit } = useEnterExit(meta.timing);
  const th = codeTheme(theme, { surfaceColor, textColor, secondaryColor, accent });
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const rows = banner.trim() ? bannerRows(banner) : [];
  const bannerCols = Math.max(0, ...rows.map((r) => r.length));
  const cmdCols = command.length + 2;
  const lineCols = Math.max(...lines.map((l) => l.length + 3));
  const wrapCols = codeColumns(width, minFont, portrait);
  // The banner is drawn at 70% of the body size, so it counts for less width.
  const cols = Math.min(wrapCols, Math.max(cmdCols, lineCols, Math.ceil(bannerCols * 0.85), 24));
  const cmdRows = Math.max(1, Math.ceil(cmdCols / cols));
  const totalLines = cmdRows + (rows.length ? rows.length * 0.37 + 0.9 : 0) + lines.reduce((n, row) => n + Math.max(1, Math.ceil((row.length + 3) / cols)), 0) + 0.4;
  const { fs, pad, cardW, cardH, lineHeight } = codeLayout({ minFont, portrait, lineHeight: portrait ? 1.25 : 1.6,  cols, lines: Math.ceil(totalLines), width, height, minW: 0.66 });
  const lh = fs * lineHeight;

  const typeEnd = TYPE_AT + Math.ceil((command.length / cps) * fps);
  const bannerAt = typeEnd + 8;
  const firstLine = bannerAt + (rows.length ? 6 : 0);
  const shown = command.slice(0, Math.max(0, Math.floor(((frame - TYPE_AT) / fps) * cps)));
  const typing = frame < typeEnd;
  const lastAt = firstLine + (lines.length - 1) * LINE_STEP;
  const caretAfter = frame >= lastAt + 4;
  const caretOn = typing || Math.floor(frame / 15) % 2 === 0;
  const enter = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;
  const cell = Math.min(fs * 0.5, (cardW - pad * 2) / Math.max(1, bannerCols));
  const bannerH = rows.length * cell * 1.15;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <CodeCard minFont={minFont} headerFont={resolvedBody}
        width={cardW}
        height={cardH}
        theme={th}
        title={title}
        style={{ opacity: band(frame, 0, 8) * leave, transform: `translateY(${(1 - enter) * cardH * 0.05}px) scale(${(0.96 + 0.04 * enter) * (1 - exit * 0.04)})` }}
      >
        <div style={{ position: "absolute", left: pad, right: pad, top: pad, fontFamily: resolvedMono, fontSize: fs, lineHeight, color: th.ink.plain, whiteSpace: portrait ? "pre-wrap" : "pre", overflowWrap: "anywhere" }}>
          <div style={{ minHeight: cmdRows * lh, display: "flex" }}>
            <span style={{ color: accent }}>$ </span>
            <span data-21st-slot="command" style={{ minWidth: 0, flex: 1 }}>
              {shown}
              {!caretAfter && caretOn ? <span style={{ color: th.ink.plain }}>▋</span> : null}
            </span>
          </div>
          {rows.length ? (
            <div data-21st-slot="banner" style={{ margin: `${lh * 0.45}px 0`, height: bannerH, width: bannerCols * cell, opacity: frame >= bannerAt ? 1 : 0 }}>
              <svg width={bannerCols * cell} height={bannerH} style={{ display: "block", overflow: "visible" }}>
                <defs>
                  <linearGradient id={`cc-${uid}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={mix(accent, "#ffffff", theme === "dark" ? 0.45 : 0.1)} />
                    <stop offset="100%" stopColor={accent} />
                  </linearGradient>
                </defs>
                <g fill={`url(#cc-${uid})`}>
                  {rows.flatMap((r, y) =>
                    r.split("").map((c, x) =>
                      c === "█" ? <rect key={`${x}-${y}`} x={x * cell} y={y * cell * 1.15} width={cell * 0.9} height={cell * 1.15 * 0.88} rx={cell * 0.12} /> : null,
                    ),
                  )}
                </g>
              </svg>
            </div>
          ) : null}
          {lines.map((l, i) => {
            const at = firstLine + i * LINE_STEP;
            if (frame < at) return null;
            const ok = l.startsWith("✓");
            const last = i === lines.length - 1;
            return (
              <div key={i} style={{ minHeight: lh, opacity: band(frame, at, at + 3), color: ok ? accent : th.muted }}>
                <span style={{ color: th.lineNo }}>{last ? "└─ " : "├─ "}</span>
                <span data-21st-slot="lines">{l}</span>
                {caretAfter && last && caretOn ? <span style={{ color: th.ink.plain }}> ▋</span> : null}
              </div>
            );
          })}
        </div>
      </CodeCard>
    </AbsoluteFill>
  );
};
