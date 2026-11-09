// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation, type TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, inkOn, withAlpha, useLayout } from "../../../kit/index";
import { prog, px } from "../_shared/motion";
import { TransitionPreview } from "../_shared/preview";
import { meta } from "./band-wipe-stack.meta";
import { defaults, type schema } from "./band-wipe-stack.schema";

type Props = z.infer<typeof schema>;
type Dir = Props["direction"];

/**
 * Clip polygon (in %) covering everything behind a slanted front edge. Canonical case:
 * bands enter from the right, `e` is the edge position at mid-height, `s` the slant
 * offset (in % of the travel axis). Other directions mirror / transpose it.
 */
function cover(dir: Dir, e: number, s: number): string {
  const pts: [number, number][] = [
    [e + s, -1],
    [200, -1],
    [200, 101],
    [e - s, 101],
  ];
  const map = ([u, v]: [number, number]): string => {
    if (dir === "right") return `${u.toFixed(3)}% ${v}%`;
    if (dir === "left") return `${(100 - u).toFixed(3)}% ${v}%`;
    if (dir === "bottom") return `${v}% ${u.toFixed(3)}%`;
    return `${v}% ${(100 - u).toFixed(3)}%`;
  };
  return `polygon(${pts.map(map).join(", ")})`;
}

/**
 * Chapter wipe: slanted bands sweep across one after another (accent, then the second
 * color), and the last band carries the next shot in. An optional big numeral rides
 * inside the first band.
 */
const BandWipeStack: React.FC<TransitionPresentationComponentProps<Props>> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const { width, height } = useVideoConfig();
  const p = presentationProgress;
  const { accent, secondary, bands, angle, numeral, direction } = passedProps;
  const horizontal = direction === "right" || direction === "left";
  const along = horizontal ? width : height;
  const across = horizontal ? height : width;
  // Half the slant across the frame, in % of the travel axis.
  const s = ((Math.tan((angle * Math.PI) / 180) * across) / 2 / along) * 100;
  const n = bands + 1; // colored bands + the incoming shot
  const len = 1 / (1 + (n - 1) * 0.6);
  const stagger = len * 0.6;
  const q = (i: number) => easeInOut(prog(p, i * stagger, i * stagger + len));
  const edge = (i: number) => 100 + s - q(i) * (100 + 2 * s);

  if (presentationDirection === "exiting") {
    // The outgoing shot gets nudged away from the incoming bands and dims a touch.
    const push = q(0) * 4 * (direction === "right" || direction === "bottom" ? -1 : 1);
    return (
      <AbsoluteFill style={{ transform: horizontal ? `translateX(${push}%)` : `translateY(${push}%)` }}>
        {children}
        {passedProps.background !== "transparent" ? <AbsoluteFill style={{ background: passedProps.background, opacity: 0.25 * q(0) }} /> : null}
      </AbsoluteFill>
    );
  }

  const colors = [accent, secondary].slice(0, bands);
  const big = Math.min(width, height) * 0.62;
  const ride = (1 - q(0)) * 12 * (direction === "right" || direction === "bottom" ? 1 : -1);
  return (
    <AbsoluteFill>
      {colors.map((c, i) =>
        q(i) > 0 ? (
          <AbsoluteFill key={i} style={{ clipPath: cover(direction, edge(i), s), background: `linear-gradient(${horizontal ? 90 : 180}deg, ${c}, ${withAlpha(c, 0.92)})` }}>
            {i === 0 && numeral ? (
              <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", transform: horizontal ? `translateX(${px(ride * width / 100)}px)` : `translateY(${px(ride * height / 100)}px)` }}>
                <span style={{ fontFamily: brandFontStack(passedProps.numeralFontFamily ?? "Geist"), fontWeight: 600, fontSize: big, lineHeight: 1, letterSpacing: "-0.06em", color: inkOn(c) }}>{numeral}</span>
              </AbsoluteFill>
            ) : null}
          </AbsoluteFill>
        ) : null,
      )}
      {q(n - 1) > 0 ? <AbsoluteFill style={{ clipPath: cover(direction, edge(n - 1), s) }}>{children}</AbsoluteFill> : <AbsoluteFill style={{ opacity: 0 }}>{children}</AbsoluteFill>}
    </AbsoluteFill>
  );
};

export const presentation = (props: Record<string, unknown> = {}): TransitionPresentation<Props> => ({
  component: BandWipeStack,
  props: { ...defaults, ...(props as Partial<Props>) },
});

/** Preview: a dark scene, an accent band with a numeral, a white band, then the light scene. */
export const Component: React.FC<Props> = (props) => (
  <TransitionPreview {...props} accent={props.previewAccent} textColor={props.textColor} presentation={presentation(props)} transitionFrames={meta.timing.duration.default} />
);
