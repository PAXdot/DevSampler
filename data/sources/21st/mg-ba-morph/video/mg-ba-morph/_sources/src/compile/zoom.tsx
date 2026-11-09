// Built with Remotion - https://remotion.pro/license
import type { TransitionPresentation, TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill } from "remotion";

type ZoomProps = Record<string, never>;

/** Outgoing scene scales up and fades, incoming scales in from 0.9. */
const ZoomPresentation: React.FC<TransitionPresentationComponentProps<ZoomProps>> = ({ children, presentationDirection, presentationProgress }) => {
  const p = presentationProgress;
  const style: React.CSSProperties =
    presentationDirection === "exiting"
      ? { transform: `scale(${1 + 0.15 * p})`, opacity: 1 - p }
      : { transform: `scale(${0.9 + 0.1 * p})`, opacity: p };
  return <AbsoluteFill style={style}>{children}</AbsoluteFill>;
};

export const zoom = (): TransitionPresentation<ZoomProps> => ({ component: ZoomPresentation, props: {} });
