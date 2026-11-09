// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { brandFontStack, fitFontSize, useLayout, withAlpha } from "../../../kit/index";
import type { schema } from "./hex-dump-decode.schema";

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
export const Component: React.FC<z.infer<typeof schema>> = ({ code, caption, primary, secondary, color, background, fontFamily }) => {
  const f = Math.min(135, useCurrentFrame());
  const { width: w, height: h, portrait } = useLayout();
  const family = brandFontStack(fontFamily), font = h * (portrait ? .032 : .037);
  const columns = Math.max(8, Math.floor(w * .74 / (font * .64)));
  const lines = code.split("\n").flatMap(line => line.length ? Array.from({ length: Math.ceil(line.length / columns) }, (_, i) => line.slice(i * columns, (i + 1) * columns)) : [""]);
  const top = Math.max(h * .235, h * .46 - lines.length * font * 1.28 / 2);
  const enter = smooth(f / 16), decode = smooth((f - 36) / 70);
  const bytes = Array.from(new TextEncoder().encode(code)).slice(0, portrait ? 96 : 144);
  const byteCols = portrait ? 8 : 16;
  const byteFont = h * (portrait ? .031 : .025);
  const captionFont = fitFontSize({ chars: caption.length, boxW: w * .78, boxH: h * .12, lines: portrait ? 2 : 1, max: h * (portrait ? .036 : .035), min: h * (portrait ? .031 : .019), lineHeight: 1.25 });
  let offset = 0;
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background, color, fontFamily: family }}>
    <div style={{ position: "absolute", left: w * .075, top: h * .12, width: w * .85, height: h * .66, border: `${Math.max(1, w * .001)}px solid ${withAlpha(primary, .35)}`, background: withAlpha(primary, .035), opacity: enter, boxShadow: `inset 0 0 ${w * .04}px ${withAlpha(primary, .035)}` }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg, ${withAlpha(color, .028)} 0px, ${withAlpha(color, .028)} 1px, ${withAlpha(color, 0)} 1px, ${withAlpha(color, 0)} 5px)`, pointerEvents: "none" }} />
      {[0, 1, 2, 3].map(i => <div key={i} style={{ position: "absolute", width: w * .018, height: w * .018, left: i % 2 ? undefined : -w * .001, right: i % 2 ? -w * .001 : undefined, top: i < 2 ? -w * .001 : undefined, bottom: i >= 2 ? -w * .001 : undefined, borderTop: i < 2 ? `${w * .002}px solid ${primary}` : undefined, borderBottom: i >= 2 ? `${w * .002}px solid ${primary}` : undefined, borderLeft: i % 2 ? undefined : `${w * .002}px solid ${primary}`, borderRight: i % 2 ? `${w * .002}px solid ${primary}` : undefined }} />)}
    </div>
    <div style={{ position: "absolute", left: w * .14, top: h * .18, width: w * .72, display: "grid", gridTemplateColumns: `repeat(${byteCols}, minmax(0, 1fr))`, rowGap: byteFont * .26, opacity: enter * (1 - smooth((f - 64) / 42)) }}>
      {bytes.map((byte, i) => {
        const cycling = f < 64 ? (byte + Math.floor(f / 3) * (i % 7 + 1)) % 256 : byte;
        const on = smooth((f - i * .12) / 10);
        return <span key={i} data-21st-slot="code" style={{ fontSize: byteFont, lineHeight: 1.25, color: (i + Math.floor(f / 8)) % 11 === 0 ? secondary : primary, opacity: on * (.35 + .65 * ((i * 7) % 9) / 8), textAlign: "center" }}>{cycling.toString(16).padStart(2, "0").toUpperCase()}</span>;
      })}
    </div>
    <div data-21st-slot="code" style={{ position: "absolute", left: w * .13, top, width: w * .74, fontSize: font, lineHeight: 1.28, whiteSpace: "pre-wrap", overflowWrap: "anywhere", opacity: smooth((f - 40) / 24), textShadow: `0 0 ${h * .008}px ${withAlpha(primary, .3)}` }}>
      {lines.map((line, row) => {
        const start = offset; offset += line.length + 1;
        return <React.Fragment key={row}>{row > 0 && <br />}{Array.from(line).map((char, i) => {
          const rank = (start + i) / Math.max(1, code.length);
          const done = decode >= rank;
          const transient = String.fromCharCode(33 + ((start + i) * 17 + Math.floor(f * 1.7)) % 90);
          return <span key={i} style={{ color: done ? color : secondary, opacity: done ? 1 : .55 }}>{done ? char : char === " " ? " " : transient}</span>;
        })}</React.Fragment>;
      })}
      <span style={{ display: "inline-block", width: font * .6, height: font, marginLeft: font * .3, verticalAlign: "text-bottom", background: primary, opacity: f >= 106 ? 1 : Math.floor(f / 8) % 2 }} />
    </div>
    {f > 18 && f < 112 && <div style={{ position: "absolute", left: w * .08, top: h * (.14 + .60 * smooth((f - 18) / 94)), width: w * .84, height: h * .003, background: secondary, opacity: .65, boxShadow: `0 0 ${h * .024}px ${withAlpha(secondary, .4)}` }} />}
    {caption && <div data-21st-slot="caption" style={{ position: "absolute", left: w * .11, top: h * .84, width: w * .78, textAlign: "center", fontSize: captionFont, lineHeight: 1.25, color, opacity: smooth((f - 108) / 26) }}>{caption}</div>}
  </AbsoluteFill>;
};
