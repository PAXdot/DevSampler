// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { brandFontStack, easeInOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../../launch/shared";
import { meta } from "./code-output-split.meta";
import type { schema } from "./code-output-split.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, codeTitle, outputTitle, code, output, codeImage, outputImage, highlightLine, split, theme, accent, fontFamily, surfaceColor, textColor, monoFontFamily }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, durationInFrames, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const f = frame * Math.max(1, 150 / durationInFrames), t = easeInOut(ramp(f, [36, 60], [0, 1]));
  const cw = w * 0.92, ch = h * (portrait ? 0.8 : 0.69), leftW = portrait ? cw : cw * (1 - (1 - split) * t), leftH = portrait ? ch * (1 - 0.5 * t) : ch;
  const rightW = portrait ? cw : cw * (1 - split), rightH = portrait ? ch * 0.5 : ch;
  const codeLines = code.split("\n"), outLines = output.split("\n");
  const codeFont = Math.max(nativeFont, fitFontSize({ chars: Math.max(...codeLines.map((line) => line.length)), boxW: leftW - u * 8, boxH: leftH - u * 12, lines: 1, max: Math.min(u * 2.2, (leftH - u * 12) / (codeLines.length * 1.5)), charEm: 0.62 }));
  const outFont = Math.max(nativeFont, fitFontSize({ chars: Math.max(...outLines.map((line) => line.length)), boxW: rightW - u * 6, boxH: rightH - u * 12, lines: 1, max: Math.min(u * 2.1, (rightH - u * 12) / (outLines.length * 1.5)), charEm: 0.62 }));
  const typedCode = code.slice(0, Math.floor(code.length * ramp(f, [8, 34], [0, 1]))), typedOutput = output.slice(0, Math.floor(output.length * ramp(f, [62, 102], [0, 1])));
  const mono = brandFontStack(monoFontFamily), outputSurface = `color-mix(in srgb, ${accent} 8%, ${p.surface})`;
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: cw }}>
    <Label min={nativeFont} lines={portrait ? 2 : 1} text={headline} slot="headline" width={cw} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} weight={600} />
    <div style={{ position: "relative", width: cw, height: ch, marginTop: u * 3, borderRadius: u * 2.3, boxShadow: p.shadow(u), overflow: "hidden", background: p.surface }}>
      <div style={{ width: leftW, height: leftH, position: "relative" }}>
        {codeImage ? <Screen image={codeImage} width={leftW} height={leftH} theme={theme} p={p} accent={accent} frame={0} /> : <div style={{ padding: u * 3 }}>
          <Label min={nativeFont} lines={portrait ? 2 : 1} text={codeTitle} slot="codeTitle" width={leftW - u * 6} height={portrait ? nativeFont * 1.5 : u * 4} color={p.muted} max={u * 2.1} />
          <div data-21st-slot="code" style={{ marginTop: u * 2, fontFamily: mono, fontSize: codeFont, lineHeight: portrait ? 1.25 : 1.5, color: p.ink, whiteSpace: "pre-wrap", overflowWrap: "anywhere", wordBreak: "break-word" }}>
            {typedCode.split("\n").map((line, i) => <div key={i} style={{ display: "flex", background: i === highlightLine ? withAlpha(accent, 0.11 * ramp(f, [26, 34], [0, 1])) : undefined }}><span style={{ color: p.faint, width: codeFont * 2.6, flexShrink: 0 }}>{i + 1}</span><span style={{ minWidth: 0, flex: 1 }}>{line || " "}</span></div>)}
          </div>
        </div>}
      </div>
      <div style={{ position: "absolute", right: 0, bottom: 0, width: rightW, height: rightH, opacity: t, transform: portrait ? `translateY(${(1 - t) * rightH}px)` : `translateX(${(1 - t) * rightW}px)`, background: outputSurface, overflow: "hidden" }}>
        {outputImage ? <Screen image={outputImage} width={rightW} height={rightH} theme={theme} p={p} accent={accent} frame={0} /> : <div style={{ padding: u * 3 }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={outputTitle} slot="outputTitle" width={rightW - u * 6} height={portrait ? nativeFont * 1.5 : u * 4} color={p.muted} max={u * 2.1} /><div data-21st-slot="output" style={{ marginTop: u * 2, color: p.ink, fontFamily: mono, fontSize: outFont, lineHeight: portrait ? 1.25 : 1.5, whiteSpace: "pre-wrap", overflowWrap: "anywhere", wordBreak: "break-word" }}>{typedOutput}</div></div>}
      </div>
    </div>
  </div></Stage>;
};
