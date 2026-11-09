// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, APPLE, band, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { CODE_THEMES, codeTheme, wrappedCode, byLine, gridSize, tokenize, type CodeTheme, type Token } from "../_shared/code";
import { CodeCard, TokenLine, codeLayout, codeRegion, codeColumns } from "../_shared/code-card";
import { mix } from "../_shared/num";
import { meta } from "./theme-match-cut.meta";
import type { schema } from "./theme-match-cut.schema";

type Skin = z.infer<typeof schema>["skins"][number];

/** Our own wallpapers: layered gradients, no images. */
function wallpaper(skin: Skin, accent: string): { bg: string; theme: CodeTheme } {
  switch (skin) {
    case "night":
    default:
      return {
        bg: "radial-gradient(ellipse 70% 60% at 15% 10%, #525457 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 90% 90%, #0aa2c0 0%, transparent 60%), linear-gradient(135deg, #0f1013, #1b1c1f)",
        theme: CODE_THEMES.dark,
      };
    case "graphite":
      return {
        bg: "radial-gradient(ellipse 80% 70% at 80% 0%, #5a5a66 0%, transparent 60%), linear-gradient(160deg, #26262c, #0d0d10)",
        theme: { ...CODE_THEMES.dark, window: "#18181c" },
      };
    case "lagoon":
      return {
        bg: "radial-gradient(ellipse 70% 60% at 0% 100%, #00c2a8 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 100% 0%, #2b6cff 0%, transparent 60%), linear-gradient(135deg, #04363f, #0b2b6b)",
        theme: { ...CODE_THEMES.dark, window: "#0c1a24" },
      };
    case "paper":
      return {
        bg: "radial-gradient(ellipse 60% 50% at 85% 15%, #dfe6ff 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 10% 90%, #ffe3ef 0%, transparent 60%), linear-gradient(135deg, #f4f4f2, #ebebe8)",
        theme: CODE_THEMES.light,
      };
    case "peach":
      return {
        bg: "radial-gradient(ellipse 70% 60% at 10% 10%, #ff9a6b 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 95% 95%, #ff5f9e 0%, transparent 60%), linear-gradient(135deg, #ffd6a8, #ffb3c4)",
        theme: { ...CODE_THEMES.light, window: "#fffaf5" },
      };
    case "brand":
      return {
        bg: `radial-gradient(ellipse 70% 60% at 85% 10%, ${mix(accent, "#ffffff", 0.35)} 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 10% 95%, ${mix(accent, "#000000", 0.45)} 0%, transparent 60%), linear-gradient(135deg, ${accent}, ${mix(accent, "#000000", 0.6)})`,
        theme: { ...CODE_THEMES.dark, window: mix(accent, "#000000", 0.86) },
      };
  }
}

const TYPE_AT = 6;

export const Component: React.FC<z.infer<typeof schema>> = ({ surfaceColor, textColor, secondaryColor, title, code, language, skins, beatFrames, cps, accent, background, monoFontFamily, bodyFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const resolvedBody = brandFontStack(bodyFontFamily ?? "Geist");
  const { fps } = useVideoConfig();
  const region = useLayout();
  const { width, height, portrait, minFont } = codeRegion(region.width, region.height);
  const { frame, exit } = useEnterExit(meta.timing);

  const gutter = String(gridSize(code).lines).length + 2;
  const wrapCols = codeColumns(width * (portrait ? 0.9 : 0.84), minFont, portrait, gutter);
  const view = wrappedCode(code, language, wrapCols);
  const rows = byLine(view.tokens);
  const { cols } = view.grid;
  const boxW = width * (portrait ? 0.9 : 0.84);
  const boxH = height * (portrait ? 1 : 0.82);
  const L = codeLayout({ minFont, portrait, lineHeight: portrait ? 1.25 : 1.6,  cols, lines: rows.length, width: boxW, height: boxH, gutterCols: gutter, minW: 1 });
  const cardH = Math.max(L.cardH, Math.min(boxH, L.cardW * 0.5));
  const lh = L.fs * L.lineHeight;

  const beat = Math.floor(frame / beatFrames);
  const skin = skins[beat % skins.length]!;
  const { bg, theme: skinTheme } = wallpaper(skin, accent);
  // Keep the authored light/dark match cuts when explicit brand materials are used.
  const hasRoles = surfaceColor !== undefined || textColor !== undefined || secondaryColor !== undefined;
  const roleSurface = surfaceColor ?? skinTheme.window;
  const roleText = textColor ?? skinTheme.ink.plain;
  const lightSkin = skin === "paper" || skin === "peach";
  const tint = skin === "graphite" ? 0.035 : skin === "lagoon" ? 0.14 : skin === "brand" ? 0.22 : 0;
  const theme = hasRoles ? codeTheme(skinTheme.name === "light" ? "light" : "dark", {
    surfaceColor: lightSkin ? mix(roleSurface, roleText, skin === "peach" ? 0.88 : 0.96) : mix(roleSurface, skin === "lagoon" ? (secondaryColor ?? accent) : accent, tint),
    textColor: lightSkin ? roleSurface : roleText,
    secondaryColor,
    accent,
  }) : skinTheme;
  const local = frame - beat * beatFrames;
  const punch = beat > 0 ? Math.max(0, 1 - local / 4) : 0;

  // Characters typed so far, across all lines (newlines count as one).
  const typed = Math.max(0, Math.floor(((frame - TYPE_AT) / fps) * cps));
  let left = typed;
  let caretLine = 0;
  const visible: Token[][] = rows.map((r, i) => {
    const len = r.reduce((n, t) => n + t.text.length, 0);
    if (left <= 0) return [];
    caretLine = i;
    const take = Math.min(len, left);
    left -= len + 1;
    const out: Token[] = [];
    let n = take;
    for (const t of r) {
      if (n <= 0) break;
      out.push(t.text.length <= n ? t : { ...t, text: t.text.slice(0, n) });
      n -= t.text.length;
    }
    return out;
  });
  const done = left > 0;
  const caretOn = !done || Math.floor(frame / 15) % 2 === 0;
  const enter = springSnap(frame, fps, 0, APPLE);

  return (
    <AbsoluteFill style={{ background: background ?? bg, alignItems: "center", justifyContent: "center" }}>
      <CodeCard minFont={minFont} headerFont={resolvedBody}
        width={L.cardW}
        height={cardH}
        theme={theme}
        title={title}
        style={{
          opacity: band(frame, 0, 6) * (1 - exit),
          transform: `translateY(${(1 - enter) * cardH * 0.05}px) scale(${(0.96 + 0.04 * enter) * (1 + 0.012 * punch) * (1 - exit * 0.04)})`,
          boxShadow: background === "transparent" ? `0 ${lh * 0.25}px ${lh * 0.7}px ${theme.shadow}` : `0 ${lh}px ${lh * 3}px ${theme.shadow}`,
        }}
      >
        <div data-21st-slot="code" style={{ position: "absolute", left: L.pad, top: L.pad, fontFamily: resolvedMono, fontSize: L.fs, lineHeight: L.lineHeight, whiteSpace: "pre" }}>
          {rows.map((_, i) => (
            <div key={i} style={{ height: lh }}>
              <span style={{ color: theme.lineNo, display: "inline-block", width: `${gutter - 1}ch`, textAlign: "right", marginRight: "1ch", opacity: i <= caretLine ? 1 : 0 }}>{i + 1}</span>
              <TokenLine tokens={visible[i]!} theme={theme} />
              {i === caretLine && caretOn ? <span style={{ display: "inline-block", width: L.fs * 0.12, height: lh * 0.7, verticalAlign: "middle", background: accent }} /> : null}
            </div>
          ))}
        </div>
      </CodeCard>
      {background !== "transparent" ? <AbsoluteFill style={{ background: withAlpha("#ffffff", 0.08 * punch), pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
