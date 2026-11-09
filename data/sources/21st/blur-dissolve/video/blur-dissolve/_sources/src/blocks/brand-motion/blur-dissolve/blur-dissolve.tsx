// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation, type TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, inkOn, useLayout, withAlpha } from "../../../kit/index";
import { prog, sineInOut } from "../_shared/motion";
import { BlurDissolvePreview } from "./blur-dissolve.preview";
import { meta } from "./blur-dissolve.meta";
import { defaults, type schema } from "./blur-dissolve.schema";

type Props = z.infer<typeof schema>;

/**
 * The calm default cut: the outgoing shot blurs away while the next one comes into
 * focus over it, settling from a hair larger. No overshoot, no hard edges.
 */
const BlurDissolve: React.FC<TransitionPresentationComponentProps<Props>> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const { width, height } = useVideoConfig();
  const k = Math.min(width, height) / 1080;
  const p = presentationProgress;
  const { blur, scale, overlap } = passedProps;
  const outEnd = 0.5 + overlap / 2;
  const inStart = 0.5 - overlap / 2;

  if (presentationDirection === "exiting") {
    const q = sineInOut(prog(p, 0, outEnd));
    // Whole-pixel radii: fractional GPU blur kernels are not bit-identical between renders.
    const b = Math.round(q * blur * k);
    return (
      <AbsoluteFill style={{ filter: b >= 1 ? `blur(${b}px)` : undefined, transform: `scale(${(1 + scale * 0.5 * q).toFixed(4)})` }}>{children}</AbsoluteFill>
    );
  }
  const q = sineInOut(prog(p, inStart, 1));
  const b = Math.round((1 - q) * blur * k);
  return (
    <AbsoluteFill style={{ opacity: q, filter: b >= 1 ? `blur(${b}px)` : undefined, transform: `scale(${(1 + scale * (1 - q)).toFixed(4)})` }}>{children}</AbsoluteFill>
  );
};

export const presentation = (props: Record<string, unknown> = {}): TransitionPresentation<Props> => ({
  component: BlurDissolve,
  props: { ...defaults, ...(props as Partial<Props>) },
});

/** Preview: a dark scene blur-dissolves into a light one. */
export const Component: React.FC<Props> = (props) => (
  <BlurDissolvePreview {...props} presentation={presentation(props)} transitionFrames={meta.timing.duration.default} />
);
