// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, useLayout, withAlpha } from "../../../kit/index";
import { defaults, type schema } from "./blur-dissolve.schema";

type Props = z.infer<typeof schema>;

/** Abstract light fields make the cut itself the subject. Named demo labels
 * stay outside the presentation so the blur never makes them illegible. */
const Field: React.FC<Props & { incoming: boolean }> = (props) => (
  <AbsoluteFill
    style={{
      background: props.incoming ? props.nextBackground : props.background,
      overflow: "hidden",
    }}
  >
    <AbsoluteFill
      style={{
        background: props.incoming
          ? `radial-gradient(ellipse 34% 90% at 75% 55%, ${withAlpha(props.previewAccent, .9)}, transparent 85%), radial-gradient(ellipse 45% 45% at 20% 25%, ${withAlpha(props.textColor, .55)}, transparent 90%)`
          : `radial-gradient(ellipse 45% 55% at 20% 75%, ${withAlpha(props.previewAccent, .9)}, transparent 85%), radial-gradient(ellipse 32% 90% at 80% 30%, ${withAlpha(props.textColor, .55)}, transparent 90%)`,
      }}
    />
  </AbsoluteFill>
);

export const BlurDissolvePreview: React.FC<Props & { presentation: TransitionPresentation<Props>; transitionFrames: number }> = ({ presentation, transitionFrames, ...props }) => {
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
