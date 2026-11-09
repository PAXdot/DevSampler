// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { inkOn, APPLE, APPLE_SNAPPY, brandFontStack, band, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { CODE_THEMES, codeTheme, wrappedCode, byLine, gridSize, tokenize } from "../_shared/code";
import { CodeCard, TokenLine, codeLayout, codeRegion, codeColumns } from "../_shared/code-card";
import { meta } from "./diff-card.meta";
import type { schema } from "./diff-card.schema";

const REMOVED_AT = 12;
const ADDED_AT = 18;
const LINE_STAGGER = 2;

const TONES = {
  dark: { del: "#FF7B7B", delBg: "rgba(255,90,90,0.10)", add: "#5FD38D", addBg: "rgba(70,205,125,0.10)" },
  light: { del: "#D23C3C", delBg: "rgba(220,50,50,0.07)", add: "#1E8E4E", addBg: "rgba(30,150,80,0.08)" },
} as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ surfaceColor, textColor, secondaryColor, title, action, removed, added, language, runningLabel, doneLabel, theme, accent, fontFamily, monoFontFamily }) => {
  const { fps } = useVideoConfig();
  const region = useLayout();
  const { width, height, portrait, minFont } = codeRegion(region.width, region.height);
  const { frame, exit } = useEnterExit(meta.timing);
  const th = codeTheme(theme, { surfaceColor, textColor, secondaryColor, accent });
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);
  const tone = secondaryColor !== undefined ? { del: secondaryColor, delBg: withAlpha(secondaryColor, 0.1), add: accent, addBg: withAlpha(accent, 0.1) } : TONES[theme];
  const wrapCols = codeColumns(width, minFont, portrait, 3);
  const removedView = wrappedCode(removed, language, wrapCols);
  const addedView = wrappedCode(added, language, wrapCols);

  const del = useMemo(() => (removed ? byLine(removedView.tokens) : []), [removed, language, wrapCols]);
  const add = useMemo(() => (added ? byLine(addedView.tokens) : []), [added, language, wrapCols]);
  const cols = Math.max(removedView.grid.cols, addedView.grid.cols, 20);
  const nLines = del.length + add.length;
  const { fs, pad, cardW, cardH, chrome, lineHeight } = codeLayout({ minFont, portrait, right: true, lineHeight: portrait ? 1.25 : 1.6,  cols, lines: nLines, width, height, gutterCols: 3, extraH: 2.8, minW: 0.7 });
  const lh = fs * lineHeight;

  const doneAt = ADDED_AT + add.length * LINE_STAGGER + 14;
  const swap = springSnap(frame, fps, doneAt, APPLE_SNAPPY);
  const enter = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;
  const pillSize = Math.max(minFont, Math.min(chrome * 0.36, (cardW * 0.18) / Math.max(6, Math.max(runningLabel.length, doneLabel.length) * 0.6)));
  // Spinner: a dot that orbits, frame-pure.
  const ang = (frame / fps) * Math.PI * 4;
  const done = frame >= doneAt;

  const pill = (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: pillSize * 0.45,
        height: pillSize * 2,
        padding: `0 ${pillSize * 0.75}px`,
        borderRadius: 99,
        fontFamily: font,
        fontSize: pillSize,
        fontWeight: 500,
        whiteSpace: "nowrap",
        color: done ? accent : th.muted,
        background: done ? withAlpha(accent, 0.14 * swap) : withAlpha(th.muted, 0.12),
        border: `1px solid ${done ? withAlpha(accent, 0.4) : "transparent"}`,
        opacity: band(frame, 6, 12),
      }}
    >
      <span style={{ position: "relative", width: pillSize * 0.9, height: pillSize * 0.9, display: "inline-block" }}>
        {done ? (
          <svg viewBox="0 0 16 16" width={pillSize * 0.9} height={pillSize * 0.9} style={{ position: "absolute", inset: 0, transform: `scale(${0.6 + 0.4 * swap})` }}>
            <circle cx="8" cy="8" r="8" fill={accent} />
            <path d="M4.6 8.3l2.2 2.2 4.6-4.8" stroke={inkOn(accent)} strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" width={pillSize * 0.9} height={pillSize * 0.9} style={{ position: "absolute", inset: 0 }}>
            <circle cx="8" cy="8" r="6" stroke={withAlpha(th.muted, 0.35)} strokeWidth={2} fill="none" />
            <circle cx={8 + 6 * Math.cos(ang)} cy={8 + 6 * Math.sin(ang)} r={2} fill={th.muted} />
          </svg>
        )}
      </span>
      <span data-21st-slot={done ? "doneLabel" : "runningLabel"}>{done ? doneLabel : runningLabel}</span>
    </span>
  );

  const block = (rows: (typeof del)[number][], kind: "del" | "add") => (
    <div style={{ background: kind === "del" ? tone.delBg : tone.addBg, borderRadius: lh * 0.2, padding: `${lh * 0.1}px 0`, opacity: band(frame, (kind === "del" ? REMOVED_AT : ADDED_AT) - 2, (kind === "del" ? REMOVED_AT : ADDED_AT) + 4) }}>
      {rows.map((r, i) => {
        const at = kind === "del" ? REMOVED_AT : ADDED_AT + i * LINE_STAGGER;
        const o = frame < at ? 0 : 0.3 + 0.7 * band(frame, at, at + 6);
        return (
          <div key={i} style={{ height: lh, display: "flex", opacity: o, whiteSpace: "pre" }}>
            <span style={{ width: `${3}ch`, flex: "0 0 auto", textAlign: "center", color: kind === "del" ? tone.del : tone.add }}>{kind === "del" ? "−" : "+"}</span>
            <span style={{ opacity: kind === "del" ? 0.7 : 1 }}>
              <TokenLine tokens={r} theme={th} />
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <CodeCard
        minFont={minFont}
        headerFont={font}
        width={cardW}
        height={cardH}
        theme={th}
        title={title}
        right={pill}
        style={{ opacity: band(frame, 0, 8) * leave, transform: `translateY(${(1 - enter) * cardH * 0.04}px) scale(${(0.96 + 0.04 * enter) * (1 - exit * 0.04)})` }}
      >
        <div style={{ position: "absolute", left: pad, right: pad, top: pad * 0.8, fontFamily: mono, fontSize: fs, lineHeight }}>
          <div style={{ display: "flex", alignItems: "center", gap: fs * 0.6, height: fs * 1.2, marginBottom: fs * 0.5, fontFamily: font, fontSize: Math.max(minFont, fs * 0.85), color: th.muted, opacity: band(frame, 4, 10) }}>
            <span data-21st-slot="action" style={{ color: th.ink.plain, fontWeight: 600 }}>
              {action}
            </span>
            <span style={{ color: tone.add }}>+{add.length}</span>
            <span style={{ color: tone.del }}>−{del.length}</span>
          </div>
          <div data-21st-slot="removed">{del.length ? block(del, "del") : null}</div>
          <div style={{ height: lh * 0.2 }} />
          <div data-21st-slot="added">{add.length ? block(add, "add") : null}</div>
        </div>
      </CodeCard>
    </AbsoluteFill>
  );
};
