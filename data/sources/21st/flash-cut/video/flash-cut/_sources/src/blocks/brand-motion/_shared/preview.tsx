// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { brandFontStack, useLayout, withAlpha } from "../../../kit/index";

type SceneProps = {
  accent: string; textColor: string; background: string; nextBackground: string;
  fontFamily?: string; bodyFontFamily?: string;
  beforeTitle: string; afterTitle: string; nextLabel: string;
};

const Scene: React.FC<SceneProps & { incoming: boolean }> = (props) => {
  const { unit } = useLayout();
  const background = props.incoming ? props.nextBackground : props.background;
  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: props.incoming ? "center" : "flex-start", gap: unit * 3, width: "76%" }}>
        <div style={{ width: unit * 18, height: unit * 18, borderRadius: props.incoming ? "50%" : unit * 4, background: `linear-gradient(145deg, ${props.accent}, ${withAlpha(props.textColor, 0.55)})`, transform: props.incoming ? "rotate(12deg)" : undefined }} />
        <div data-21st-slot={props.incoming ? "afterTitle" : "beforeTitle"} style={{ fontFamily: brandFontStack(props.fontFamily ?? "Geist"), fontWeight: 600, fontSize: unit * 9, letterSpacing: "-0.045em", lineHeight: 1.14, color: props.textColor, overflowWrap: "anywhere", maxWidth: "100%" }}>{props.incoming ? props.afterTitle : props.beforeTitle}</div>
        {props.incoming ? <div data-21st-slot="nextLabel" style={{ padding: `${unit * 1.2}px ${unit * 3}px`, borderRadius: unit * 5, background: withAlpha(props.accent, 0.2), color: props.textColor, fontFamily: brandFontStack(props.bodyFontFamily ?? "Geist"), fontWeight: 500, fontSize: unit * 6, lineHeight: 1.14, maxWidth: "100%", overflowWrap: "anywhere" }}>{props.nextLabel}</div> : <><div style={{ width: "76%", height: unit * 2, borderRadius: unit, background: withAlpha(props.textColor, 0.5) }} /><div style={{ width: "50%", height: unit * 2, borderRadius: unit, background: withAlpha(props.textColor, 0.3) }} /></>}
      </div>
    </AbsoluteFill>
  );
};

/** Demo timing follows its actual clip duration; the exported presentation
 * continues to operate on the caller's full scene. */
export const TransitionPreview: React.FC<SceneProps & { presentation: TransitionPresentation<any>; transitionFrames: number }> = ({ presentation, transitionFrames, ...props }) => {
  const { durationInFrames } = useVideoConfig();
  const { unit } = useLayout();
  const d = Math.max(1, Math.min(Math.round(transitionFrames), durationInFrames - 2));
  const lead = Math.max(1, Math.floor((durationInFrames - d) / 2));
  const tail = Math.max(1, durationInFrames - lead - d);
  return (
    <AbsoluteFill style={{ left: "4%", top: "4%", width: "92%", height: "92%", right: "auto", bottom: "auto", overflow: "hidden", borderRadius: unit * 3 }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={lead + d}><Scene {...props} incoming={false} /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={linearTiming({ durationInFrames: d })} />
        <TransitionSeries.Sequence durationInFrames={tail + d}><Scene {...props} incoming /></TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
