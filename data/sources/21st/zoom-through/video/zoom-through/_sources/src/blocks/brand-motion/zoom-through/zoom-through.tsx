// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation, type TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, inkOn, useLayout, withAlpha } from "../../../kit/index";
import { easeIn, prog, px } from "../_shared/motion";
import { ZoomThroughPreview } from "./zoom-through.preview";
import { meta } from "./zoom-through.meta";
import { defaults, type schema } from "./zoom-through.schema";

type Props = z.infer<typeof schema>;

/** The push takes the first 80%; the last 20% is a short crossfade into the next shot. */
const PUSH_END = 0.8;

/**
 * Camera push cut: the outgoing shot accelerates toward the lens (scale up, drift,
 * optional pitch, motion blur), then a 2-frame crossfade lands on the next shot.
 */
const ZoomThrough: React.FC<TransitionPresentationComponentProps<Props>> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const { width, height } = useVideoConfig();
  const k = Math.min(width, height) / 1080;
  const p = presentationProgress;
  const { scale, lift, tilt, blur } = passedProps;

  if (presentationDirection === "exiting") {
    const q = easeIn(prog(p, 0, PUSH_END));
    const s = 1 + (scale - 1) * q;
    const b = px(blur * 18 * k * q);
    return (
      <AbsoluteFill style={{ perspective: height * 1.6, overflow: "hidden" }}>
        <AbsoluteFill
          style={{
            transform: `translateY(${px(lift * height * q)}px) rotateX(${(tilt * q).toFixed(3)}deg) scale(${s.toFixed(4)})`,
            filter: b > 0.05 ? `blur(${b}px)` : undefined,
          }}
        >
          {children}
        </AbsoluteFill>
      </AbsoluteFill>
    );
  }
  const q = expoOut(prog(p, PUSH_END - 0.06, 1));
  return <AbsoluteFill style={{ opacity: q, transform: `scale(${(0.94 + 0.06 * q).toFixed(4)})` }}>{children}</AbsoluteFill>;
};

export const presentation = (props: Record<string, unknown> = {}): TransitionPresentation<Props> => ({
  component: ZoomThrough,
  props: { ...defaults, ...(props as Partial<Props>) },
});

/** Preview: the camera pushes between two authored abstract graphic fields. */
export const Component: React.FC<Props> = (props) => (
  <ZoomThroughPreview {...props} presentation={presentation(props)} transitionFrames={meta.timing.duration.default} />
);
