// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../../launch/shared";
import { meta } from "./context-split-panel.meta";
import type { schema } from "./context-split-panel.schema";
import { PRICING_COMPONENT_PREVIEW } from "../../catalog-expansion/assets";

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, context, question, answer, mainImage, sideImage, sideWidth, revealFrame, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, durationInFrames, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const f = frame * Math.max(1, 150 / durationInFrames), t = easeInOut(ramp(f, [revealFrame, revealFrame + 22], [0, 1]));
  const cw = w * 0.92, ch = h * (portrait ? 0.76 : 0.68), side = (portrait ? ch * 0.42 : cw * sideWidth) * t;
  const mainW = portrait ? cw : cw - side, mainH = portrait ? ch - side : ch;
  const pw = portrait ? cw : Math.max(1, side), ph = portrait ? Math.max(1, side) : ch;
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: cw }}>
    <Label min={nativeFont} lines={portrait ? 2 : 1} text={headline} slot="headline" width={cw} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} weight={600} />
    <div style={{ position: "relative", width: cw, height: ch, marginTop: u * 3, borderRadius: u * 2.5, boxShadow: p.shadow(u), overflow: "hidden", background: p.surface }}>
      <Screen image={mainImage || PRICING_COMPONENT_PREVIEW} width={mainW} height={mainH} theme={theme} p={p} accent={accent} frame={0} variant="article" />
      <div style={{ position: "absolute", left: mainW * 0.17, top: mainH * 0.28, width: mainW * 0.65, padding: u, background: withAlpha(accent, ramp(f, [16, 24], [0, 0.22])), borderRadius: u * 0.6 }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={context} slot="context" width={mainW * 0.65} height={portrait ? nativeFont * 3.8 : u * 3.6} color={p.ink} max={u * 2.4} /></div>
      <div style={{ position: "absolute", right: 0, bottom: 0, width: pw, height: ph, background: p.raised, borderLeft: portrait ? undefined : `1px solid ${p.line}`, borderTop: portrait ? `1px solid ${p.line}` : undefined, opacity: t, overflow: "hidden" }}>
        {sideImage ? <Screen image={sideImage} width={pw} height={ph} theme={theme} p={p} accent={accent} frame={0} /> : <div style={{ padding: u * 2.6, width: portrait ? cw : cw * sideWidth, boxSizing: "border-box" }}>
          <div data-21st-slot="question" style={{ color: p.ink, fontSize: Math.max(nativeFont, fitFontSize({ chars: question.length, boxW: (portrait ? cw : cw * sideWidth) - u * 5.2, boxH: ph * 0.26, lines: 3, max: u * 2.5 })), lineHeight: 1.25, height: ph * 0.33 }}>{question}</div>
          <div style={{ width: u * 3, height: u * 0.35, background: accent, margin: `${u * 2}px 0` }} />
          <div data-21st-slot="answer" style={{ color: p.muted, fontSize: Math.max(nativeFont, fitFontSize({ chars: answer.length, boxW: (portrait ? cw : cw * sideWidth) - u * 5.2, boxH: ph * 0.45, lines: 5, max: u * 2.1 })), lineHeight: 1.25, opacity: ramp(f, [revealFrame + 24, revealFrame + 36], [0, 1]) }}>{answer}</div>
        </div>}
      </div>
    </div>
  </div></Stage>;
};
