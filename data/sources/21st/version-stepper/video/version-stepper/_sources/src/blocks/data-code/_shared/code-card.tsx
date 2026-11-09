// Built with Remotion - https://remotion.pro/license
import React from "react";
import { SANS } from "../../../kit/index";
import { MONO_EM, type CodeTheme, type Token } from "./code";

/** Header height for a card of width w (px). */
export const chromeHeight = (w: number, h: number, minFont = 0, right = false) => Math.max(minFont * (right ? 4 : 2.5), 18, Math.min(w * 0.045, h * 0.11, 64));

/**
 * Editor-style window: neutral dots, a centered file name, a body. Pure layout:
 * the caller animates it through `style`.
 */
export const CodeCard: React.FC<{
  width: number;
  height: number;
  theme: CodeTheme;
  title: string;
  /** Slot key for the title text node (data-21st-slot). */
  titleSlot?: string;
  /** Resolved font stack for the window filename. */
  headerFont?: string;
  /** Native readable text size supplied by the actual frame layout. */
  minFont?: number;
  right?: React.ReactNode;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ width, height, theme, title, titleSlot = "title", headerFont = SANS, minFont = 0, right, style, children }) => {
  const chrome = chromeHeight(width, height, minFont, Boolean(right));
  const dot = chrome * 0.22;
  const titleSize = minFont || Math.min(chrome * 0.4, (width * 0.5) / Math.max(4, title.length * 0.56));
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: Math.min(chrome * 0.36, 18),
        background: theme.window,
        border: `1px solid ${theme.border}`,
        boxShadow: `0 ${Math.min(chrome, 64) * 0.4}px ${Math.min(chrome, 64) * 1.4}px ${theme.shadow}`,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: chrome,
          display: "flex",
          alignItems: "center",
          padding: `0 ${chrome * 0.4}px`,
          background: theme.chrome,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        {[0, 1, 2].map((k) => (
          <span key={k} style={{ width: dot, height: dot, borderRadius: 99, background: theme.lineNo, marginRight: dot * 0.75 }} />
        ))}
        <span
          data-21st-slot={titleSlot}
          style={{
            position: "absolute",
            left: minFont ? "10%" : "22%",
            right: minFont ? "8%" : "22%",
            top: minFont ? titleSize * 0.4 : undefined,
            textAlign: "center",
            whiteSpace: minFont ? "normal" : "nowrap",
            overflowWrap: "anywhere",
            lineHeight: 1.18,
            fontFamily: headerFont,
            fontWeight: 500,
            fontSize: titleSize,
            color: theme.muted,
          }}
        >
          {title}
        </span>
        {right ? <div style={{ position: "absolute", right: chrome * 0.15, top: minFont ? titleSize * 2.65 : 0, height: minFont ? titleSize * 1.2 : chrome, display: "flex", alignItems: "center" }}>{right}</div> : null}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: chrome, bottom: 0 }}>{children}</div>
    </div>
  );
};

/** One line of highlighted tokens as inline spans. */
export const TokenLine: React.FC<{ tokens: Token[]; theme: CodeTheme; dim?: number }> = ({ tokens, theme }) => (
  <>
    {tokens.map((t, k) => (
      <span key={k} style={{ color: theme.ink[t.kind], fontStyle: t.kind === "comment" ? "italic" : undefined }}>
        {t.text}
      </span>
    ))}
  </>
);

/** Largest mono font size that fits `cols` x `lines` into w x h (px). */
export function fitMono(cols: number, lines: number, w: number, h: number, lineHeight: number, max: number): number {
  return Math.max(4, Math.min(max, w / (Math.max(1, cols) * MONO_EM * 1.02), h / (Math.max(1, lines) * lineHeight)));
}

/**
 * Size a code card to its content inside a w x h region: the font shrinks until
 * `cols` x `lines` (plus a gutter of `gutterCols`) fits, the card hugs the code
 * but never gets narrower than `minW` of the region.
 */
export function codeLayout(opts: { cols: number; lines: number; width: number; height: number; gutterCols?: number; lineHeight?: number; minW?: number; extraH?: number; minFont?: number; portrait?: boolean; right?: boolean }) {
  const { cols, lines, width, height, gutterCols = 0, lineHeight = 1.6, minW = 0.62, extraH = 0, minFont = 0, portrait = false, right = false } = opts;
  const chromeGuess = chromeHeight(width, height, minFont, right);
  const maxFs = Math.max(minFont, Math.min(height * 0.075, width * 0.034));
  let fs = maxFs;
  for (let i = 0; i < 3; i++) {
    const pad = fs * (portrait ? 0.6 : 1.6);
    fs = Math.max(minFont, fitMono(cols + gutterCols, lines, width - pad * 2, height - chromeGuess - pad * 2 - extraH * fs, lineHeight, maxFs));
  }
  const pad = fs * (portrait ? 0.6 : 1.6);
  const contentW = (cols + gutterCols) * fs * MONO_EM * 1.02 + pad * 2;
  const cardW = Math.min(width, Math.max(width * (portrait ? 1 : minW), contentW));
  const chrome = chromeHeight(cardW, height, minFont, right);
  const cardH = Math.min(height, Math.max(portrait ? height * 0.7 : 0, chrome + pad * 2 + lines * fs * lineHeight + extraH * fs));
  return { fs, pad, cardW, cardH, chrome, lineHeight };
}

/** Full-frame cards retain landscape placement and use the portrait safe area. */
export function codeRegion(width: number, height: number) {
  const portrait = height > width;
  const minFont = Math.ceil(height * (portrait ? 0.03125 : 0.01875));
  return { width: width * (portrait ? 0.9 : 0.8), height: height * (portrait ? 0.88 : 0.6), portrait, minFont };
}
export function codeColumns(width: number, minFont: number, portrait: boolean, gutter = 0) {
  return portrait ? Math.max(8, Math.floor((width - minFont * 1.2) / (minFont * MONO_EM * 1.02)) - gutter) : Infinity;
}

/** Native stage floor for the original center preset (60% of stage height). */
export const dataFontFloor = (height: number, portrait: boolean) => Math.ceil(height * (portrait ? 0.03125 / 0.6 : 0.01875 / 0.6));
