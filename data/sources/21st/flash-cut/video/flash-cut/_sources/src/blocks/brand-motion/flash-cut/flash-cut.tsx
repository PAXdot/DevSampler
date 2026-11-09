// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation, type TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, withAlpha, inkOn, useLayout } from "../../../kit/index";
import { easeIn, mix, prog } from "../_shared/motion";
import { TransitionPreview } from "../_shared/preview";
import { meta } from "./flash-cut.meta";
import { defaults, type schema } from "./flash-cut.schema";

type Props = z.infer<typeof schema>;

const Flash: React.FC<{ color: string; alpha: number; vignette: number }> = ({ color, alpha, vignette }) =>
  alpha > 0.002 ? (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 75% 75% at 50% 50%, ${withAlpha(color, alpha)}, ${withAlpha(mix(color, inkOn(color), vignette * 0.8), alpha)} 100%)`,
      }}
    />
  ) : null;

/** Hard cut on a flash frame: the outgoing shot brightens, cuts, and the next one surfaces as the flash decays. */
const FlashCut: React.FC<TransitionPresentationComponentProps<Props>> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const p = presentationProgress;
  const { color, strength, vignette, cutAt } = passedProps;
  if (presentationDirection === "exiting") {
    // A quick swell into the cut (anticipation), then the hard cut.
    const swell = 0.35 * strength * easeIn(prog(p, 0, cutAt));
    return (
      <AbsoluteFill>
        {children}
        <Flash color={color} alpha={swell} vignette={vignette} />
      </AbsoluteFill>
    );
  }
  if (p < cutAt) return <AbsoluteFill style={{ opacity: 0 }}>{children}</AbsoluteFill>;
  const decay = strength * (1 - expoOut(prog(p, cutAt, 1)));
  return (
    <AbsoluteFill>
      {children}
      <Flash color={color} alpha={decay} vignette={vignette} />
    </AbsoluteFill>
  );
};

export const presentation = (props: Record<string, unknown> = {}): TransitionPresentation<Props> => ({
  component: FlashCut,
  props: { ...defaults, ...(props as Partial<Props>) },
});

/** Preview: a dark scene cut into a light one on a white flash frame. */
export const Component: React.FC<Props> = (props) => (
  <TransitionPreview {...props} accent={props.previewAccent} textColor={props.textColor} presentation={presentation(props)} transitionFrames={meta.timing.duration.default} />
);
