// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation, type TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { easeInOut, withAlpha } from "../../kit/index";
import { TransitionPreview } from "../brand-motion/_shared/preview";
import { meta } from "./diagonal-wipe.meta";
import { defaults, type schema } from "./diagonal-wipe.schema";

type Props = z.infer<typeof schema>;

/** Map a point from the canonical down-right wipe into the requested direction. */
function orient(dir: Props["direction"], x: number, y: number): string {
  const fx = dir === "down-left" || dir === "up-left" ? 100 - x : x;
  const fy = dir === "up-right" || dir === "up-left" ? 100 - y : y;
  return `${fx}% ${fy}%`;
}

/** Half-plane x + y <= s, as a triangle that covers the whole frame's share of it. */
const halfPlane = (dir: Props["direction"], s: number) =>
  `polygon(${orient(dir, -100, -100)}, ${orient(dir, s + 100, -100)}, ${orient(dir, -100, s + 100)})`;

/** Band s - e <= x + y <= s. */
const band = (dir: Props["direction"], s: number, e: number) =>
  `polygon(${orient(dir, -100, s + 100)}, ${orient(dir, s + 100, -100)}, ${orient(dir, s - e + 100, -100)}, ${orient(dir, -100, s - e + 100)})`;

const DiagonalWipe: React.FC<TransitionPresentationComponentProps<Props>> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const p = easeInOut(presentationProgress);
  const e = passedProps.edge * 200;
  // The front travels a little past both corners so the edge fully enters and clears.
  const s = -e + p * (200 + 2 * e);
  if (presentationDirection === "exiting") {
    return (
      <AbsoluteFill style={{ transform: `scale(${1 - 0.03 * p})` }}>
        {children}
        {passedProps.background !== "transparent" ? <AbsoluteFill style={{ background: passedProps.background, opacity: 0.35 * p }} /> : null}
      </AbsoluteFill>
    );
  }
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ clipPath: halfPlane(passedProps.direction, s - e) }}>{children}</AbsoluteFill>
      {e > 0 ? (
        <AbsoluteFill
          style={{
            clipPath: band(passedProps.direction, s, e),
            background: `linear-gradient(135deg, ${withAlpha(passedProps.accent, 0.9)}, ${passedProps.accent})`,
          }}
        />
      ) : null}
    </AbsoluteFill>
  );
};

export const presentation = (props: Record<string, unknown> = {}): TransitionPresentation<Props> => ({
  component: DiagonalWipe,
  props: { ...defaults, ...(props as Partial<Props>) },
});

/** Preview: a dark scene wiped into a light one, so posters and loops show the transition itself. */
export const Component: React.FC<Props> = (props) => (
  <TransitionPreview {...props} textColor={props.textColor} presentation={presentation(props)} transitionFrames={meta.timing.duration.default} />
);
