// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, useLayout, withAlpha } from "../../../kit/index";
import { defaults, type schema } from "./zoom-through.schema";

type Props = z.infer<typeof schema>;

/** Two flat graphic fields show the camera push itself. All named labels
 * remain outside the presentation and retain their native readable size. */
const Field: React.FC<Props & { incoming: boolean }> = (props) => (
  <AbsoluteFill style={{ background: props.incoming ? props.nextBackground : props.background, overflow: "hidden" }}>
    {props.incoming ? <>
      <div style={{ position: "absolute", left: "-8%", top: "16%", width: "116%", height: "36%", background: props.previewAccent, transform: "rotate(-14deg)" }} />
      <div style={{ position: "absolute", left: "67%", top: "-25%", width: "18%", height: "150%", background: withAlpha(props.textColor, .65), transform: "rotate(-14deg)" }} />
      <div style={{ position: "absolute", left: "-8%", top: "74%", width: "116%", height: "9%", background: withAlpha(props.previewAccent, .5), transform: "rotate(-14deg)" }} />
    </> : <>
      <div style={{ position: "absolute", left: "8%", top: "-15%", width: "34%", height: "130%", background: props.previewAccent, transform: "rotate(18deg)" }} />
      <div style={{ position: "absolute", left: "65%", top: "-15%", width: "12%", height: "130%", background: withAlpha(props.textColor, .65), transform: "rotate(18deg)" }} />
      <div style={{ position: "absolute", left: "88%", top: "-15%", width: "5%", height: "130%", background: withAlpha(props.previewAccent, .5), transform: "rotate(18deg)" }} />
    </>}
  </AbsoluteFill>
);

export const ZoomThroughPreview: React.FC<Props & { presentation: TransitionPresentation<Props>; transitionFrames: number }> = ({ presentation, transitionFrames, ...props }) => {
  const { durationInFrames } = useVideoConfig();
  const { width, height, aspect } = useLayout();
  const d = Math.max(1, Math.min(Math.round(transitionFrames), durationInFrames - 2));
  const lead = Math.max(1, Math.floor((durationInFrames - d) / 2));
  const tail = Math.max(1, durationInFrames - lead - d);
  const font = brandFontStack(props.fontFamily ?? defaults.fontFamily);
  const bodyFont = brandFontStack(props.bodyFontFamily ?? defaults.bodyFontFamily);
  const labelSize = height * (aspect === "9:16" ? .035 : .032);
  const labelStyle: React.CSSProperties = {
    fontFamily: font,
    fontSize: labelSize,
    fontWeight: 600,
    lineHeight: 1.2,
    color: props.textColor,
    overflowWrap: "anywhere",
    maxWidth: "100%",
  };

  return (
    <AbsoluteFill style={{ left: "4%", top: "4%", width: "92%", height: "92%", right: "auto", bottom: "auto" }}>
      <div style={{ position: "absolute", top: 0, width: "100%", height: "16%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: width * .04, alignItems: "center" }}>
        <div data-21st-slot="beforeTitle" style={labelStyle}>{props.beforeTitle}</div>
        <div data-21st-slot="afterTitle" style={{ ...labelStyle, textAlign: "right" }}>{props.afterTitle}</div>
      </div>
      <AbsoluteFill style={{ top: "18%", height: "62%", bottom: "auto", overflow: "hidden" }}>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={lead + d}><Field {...props} incoming={false} /></TransitionSeries.Sequence>
          <TransitionSeries.Transition presentation={presentation} timing={linearTiming({ durationInFrames: d })} />
          <TransitionSeries.Sequence durationInFrames={tail + d}><Field {...props} incoming /></TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
      <div data-21st-slot="nextLabel" style={{ ...labelStyle, fontFamily: bodyFont, position: "absolute", bottom: 0, width: "100%", height: "16%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>{props.nextLabel}</div>
    </AbsoluteFill>
  );
};
