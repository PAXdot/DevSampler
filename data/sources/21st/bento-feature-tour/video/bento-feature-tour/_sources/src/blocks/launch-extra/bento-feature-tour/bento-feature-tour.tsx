// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../../launch/shared";
import { meta } from "./bento-feature-tour.meta";
import type { schema } from "./bento-feature-tour.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, featureTitles, captions, image1, image2, image3, stepFrames, showProgress, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, durationInFrames, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const f = frame * Math.max(1, 150 / durationInFrames), cw = w * 0.92, ch = h * 0.64, gap = u * 1.7;
  const active = Math.min(2, Math.max(0, Math.floor((f - 20) / stepFrames))), images = [image1, image2, image3];
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: cw }}>
    <Label min={nativeFont} lines={portrait ? 2 : 1} text={headline} slot="headline" width={cw} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} weight={600} />
    <div style={{ position: "relative", width: cw, height: ch, marginTop: u * 3 }}>
      {featureTitles.map((title, i) => {
        const first = i === 0;
        const cardW = portrait ? (first ? cw : (cw - gap) / 2) : (first ? cw * 0.6 : cw * 0.4 - gap);
        const cardH = portrait ? (first ? ch * 0.53 : ch * 0.47 - gap) : (first ? ch : (ch - gap) / 2);
        const x = portrait ? (i === 2 ? (cw + gap) / 2 : 0) : (first ? 0 : cw * 0.6 + gap);
        const y = portrait ? (first ? 0 : ch * 0.53 + gap) : (i === 2 ? (ch + gap) / 2 : 0);
        const t = easeOut(ramp(f, [10 + i * 10, 26 + i * 10], [0, 1]));
        const focus = i === active ? ramp(f, [20 + i * stepFrames, 28 + i * stepFrames], [0, 1]) : 0;
        const titleH = portrait ? nativeFont * 2.6 : u * (first ? 5 : 4), captionH = portrait ? nativeFont * 3.8 : u * 3, mediaH = Math.max(1, cardH - titleH - captionH - u * 7);
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: cardW, height: cardH, background: p.surface, borderRadius: u * 2, border: `${u * 0.12}px solid ${focus ? withAlpha(accent, 0.6) : p.line}`, boxShadow: `0 ${u}px ${u * 4}px ${withAlpha(p.ink, p.dark ? 0.2 : 0.07)}`, opacity: t, transform: `translateY(${(1 - t) * u * 4}px)` }}>
          <div style={{ padding: u * 2, boxSizing: "border-box" }}>
            <div data-21st-slot="featureTitles" style={{ height: titleH, fontSize: Math.max(nativeFont, fitFontSize({ chars: title.length, boxW: cardW - u * 4, boxH: titleH, max: u * (first ? 3.2 : 2.3), lines: portrait ? 2 : 1 })), color: p.ink, fontWeight: 600, whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere" }}>{title}</div>
            <div data-21st-slot="captions" style={{ height: captionH, fontSize: Math.max(nativeFont, fitFontSize({ chars: captions[i]!.length, boxW: cardW - u * 4, boxH: captionH, max: u * 1.8, lines: portrait ? 3 : 1 })), color: p.muted, whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere", marginTop: u * 0.8 }}>{captions[i]}</div>
            <div style={{ height: mediaH, marginTop: u * 1.8, borderRadius: u * 0.8, overflow: "hidden", position: "relative" }}><Screen image={images[i] ?? ""} width={cardW - u * 4} height={mediaH} theme={theme} p={p} accent={accent} frame={0} variant={i === 1 ? "article" : i === 2 ? "list" : "dashboard"} /></div>
          </div>
        </div>;
      })}
    </div>
    {showProgress ? <div style={{ display: "flex", gap: u, marginTop: u * 3 }}>{featureTitles.map((_, i) => <div key={i} style={{ height: u * 0.4, width: u * 4, borderRadius: u, background: i <= active ? accent : p.line }} />)}</div> : null}
  </div></Stage>;
};
