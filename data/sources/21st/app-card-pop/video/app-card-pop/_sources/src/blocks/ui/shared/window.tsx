// Built with Remotion - https://remotion.pro/license
// Window / browser chrome around a content area of known size.
import React from "react";
import { fitFontSize, withAlpha } from "../../../kit/index";
import { Icon } from "./icons";
import { type Palette, TrafficLights } from "./theme";

export type Chrome = "window" | "browser" | "none";

/** Height of the chrome bar for a card of this width. */
export const barHeight = (chrome: Chrome, cardW: number, cardH: number) => (chrome === "none" ? 0 : Math.min(cardW * 0.05, cardH * 0.1));

export const WindowFrame: React.FC<{
  w: number;
  h: number;
  chrome: Chrome;
  title: string;
  titleSlot?: string;
  p: Palette;
  font: string;
  radius: number;
  /** Address bar text typed so far (browser), shown instead of title when set. */
  children: (content: { w: number; h: number }) => React.ReactNode;
  /** Focus ring on the address field (browser). 0..1 */
  focus?: number;
  accent?: string;
  /** Extra node rendered at the end of the address field (caret). */
  addressTail?: React.ReactNode;
  /** Replaces the traffic lights (window-collapse animates its own). */
  lights?: React.ReactNode;
  /** Selection fill behind the address text (select-all before retyping). */
  titleBg?: string;
  style?: React.CSSProperties;
  /** Native caption floor; chrome grows to hold the complete title. */
  minFontSize?: number;
}> = ({ w, h, chrome, title, titleSlot = "title", p, font, radius, children, focus = 0, accent = "#3D63FF", addressTail, lights, titleBg, style, minFontSize = 0 }) => {
  const fieldW = minFontSize ? w * 0.72 : chrome === "browser" ? w * 0.84 - barHeight(chrome, w, h) * 3 : w * 0.6;
  const lines = minFontSize ? Math.max(1, Math.ceil((title.length + 2) * minFontSize * 0.56 / fieldW)) : 1;
  const bar = chrome === "none" ? 0 : Math.max(barHeight(chrome, w, h), minFontSize * (lines * 1.25 + 0.7));
  const dot = Math.min(bar * 0.26, w * 0.018);
  const fs = Math.max(minFontSize, fitFontSize({ chars: title.length + 5, boxW: fieldW, boxH: bar * 0.75, lines, charEm: 0.55, max: minFontSize || bar * 0.36 }));
  return (
    <div style={{ position: "relative", width: w, height: h, borderRadius: radius, background: p.surface, boxShadow: p.shadow(Math.min(w, h) / 100), overflow: "hidden", ...style }}>
      {chrome !== "none" ? (
        <div
          style={{
            position: "relative",
            height: bar,
            display: "flex",
            alignItems: "center",
            padding: `0 ${minFontSize ? w * 0.025 : bar * 0.42}px`,
            gap: minFontSize ? w * 0.02 : bar * 0.4,
            borderBottom: `1px solid ${p.line}`,
            background: p.raised,
          }}
        >
          {lights ?? <TrafficLights size={dot} mono={p.muted} />}
          {chrome === "browser" ? (
            <div
              style={{
                flex: 1,
                height: bar * (minFontSize ? 0.86 : 0.62),
                margin: minFontSize ? 0 : `0 ${w * 0.12}px 0 ${w * 0.04}px`,
                borderRadius: bar * 0.31,
                background: p.raised,
                display: "flex",
                alignItems: "center",
                gap: fs * 0.5,
                padding: `0 ${minFontSize ? w * 0.025 : fs * 0.8}px`,
                minWidth: 0,
                boxShadow: focus > 0 ? `inset 0 0 0 ${Math.max(1, bar * 0.03)}px ${withAlpha(accent, focus)}, 0 0 0 ${bar * 0.08 * focus}px ${withAlpha(accent, 0.18 * focus)}` : undefined,
              }}
            >
              <Icon name="lock" size={fs * 0.85} color={p.faint} />
              <span data-21st-slot={titleSlot} style={{ fontFamily: font, fontSize: fs, color: p.muted, maxWidth: fieldW, lineHeight: 1.25, whiteSpace: minFontSize ? "normal" : "nowrap", overflowWrap: minFontSize ? "anywhere" : undefined, letterSpacing: "-0.005em", background: titleBg, borderRadius: fs * 0.15 }}>
                {title}
              </span>
              {addressTail}
            </div>
          ) : (
            <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", pointerEvents: "none" }}>
              <span data-21st-slot={titleSlot} style={{ fontFamily: font, fontSize: fs, fontWeight: 500, color: p.muted, display: "inline-block", maxWidth: fieldW, lineHeight: 1.25, whiteSpace: minFontSize ? "normal" : "nowrap", overflowWrap: minFontSize ? "anywhere" : undefined }}>
                {title}
              </span>
            </div>
          )}
        </div>
      ) : null}
      <div style={{ position: "relative", width: w, height: h - bar, overflow: "hidden" }}>{children({ w, h: h - bar })}</div>
    </div>
  );
};
