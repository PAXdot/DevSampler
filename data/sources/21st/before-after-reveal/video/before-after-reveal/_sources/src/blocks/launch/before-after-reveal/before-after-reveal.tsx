// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, ramp } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../shared";
import { meta } from "./before-after-reveal.meta";
import type { schema } from "./before-after-reveal.schema";
export const Component: React.FC<z.infer<typeof schema>> = ({ beforeImage, afterImage, beforeLabel, afterLabel, direction, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const cw = w * 0.9, ch = h * 0.72;
  const reveal = easeInOut(ramp(frame, [24, 84], [0.04, 0.92]));
  const vertical = direction === "vertical";
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: cw }}>
    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: u * 3 }}>
      <Label min={nativeFont} lines={portrait ? 2 : 1} text={beforeLabel} slot="beforeLabel" width={cw * 0.46} height={portrait ? nativeFont * 2.6 : u * 5} max={u * 2.8} color={p.muted} />
      <Label min={nativeFont} lines={portrait ? 2 : 1} text={afterLabel} slot="afterLabel" width={cw * 0.46} height={portrait ? nativeFont * 2.6 : u * 5} max={u * 2.8} color={accent} />
    </div>
    <div style={{ position: "relative", width: cw, height: ch, overflow: "hidden", borderRadius: u * 2.4, boxShadow: p.shadow(u) }}>
      <Screen image={beforeImage} width={cw} height={ch} theme={theme} p={p} accent={p.muted} frame={0} variant="article" />
      <div style={{ position: "absolute", inset: 0, clipPath: vertical ? `inset(0 0 ${(1 - reveal) * 100}% 0)` : `inset(0 ${(1 - reveal) * 100}% 0 0)` }}><Screen image={afterImage} width={cw} height={ch} theme={theme} p={p} accent={accent} frame={100} /></div>
      <div style={{ position: "absolute", ...(vertical ? { left: 0, top: ch * reveal, width: cw, height: u * 0.24 } : { left: cw * reveal, top: 0, width: u * 0.24, height: ch }), background: accent }}>
        <div style={{ position: "absolute", left: vertical ? "50%" : "0%", top: vertical ? "0%" : "50%", transform: "translate(-50%, -50%)", width: u * 5, height: u * 5, borderRadius: "50%", background: p.surface, border: `${u * 0.2}px solid ${accent}`, display: "grid", placeItems: "center", color: accent, fontSize: u * 2.6 }}>↔</div>
      </div>
    </div>
  </div></Stage>;
};
