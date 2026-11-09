"use client";

import { useMemo } from "react";
import { toCssSize, toPx } from "./size";
import { resolveTrack } from "./track";
import { clampProgress } from "./progress";

export interface ArcProps {
  size?: number | string;
  color?: string;
  speed?: number;
  thickness?: number;
  track?: boolean | string;
  /** 0–100; anything non-finite keeps the arc indeterminate. */
  value?: number;
}

/* The viewBox is 44 units wide. `thickness` is in px (like circle/ring),
   so convert it to viewBox units when the size is known in px; for other
   units (rem, %) fall back to 1 unit = 1px of a 44px box. The radius
   shrinks by half the stroke so a thick stroke never clips at the edge. */
const VIEWBOX = 44;

export default function Arc({
  size = 40,
  color = "currentColor",
  speed = 1,
  thickness = 4,
  track = false,
  value,
}: ArcProps) {
  const box = toCssSize(size);
  const trackInfo = useMemo(() => resolveTrack(track), [track]);
  // The bar uses pathLength="100", so dash lengths are percentages of the
  // circle and `value` maps straight onto stroke-dasharray.
  const progress = clampProgress(value);
  const safeSpeed = speed > 0 ? speed : 1;

  const strokeWidth = useMemo(() => {
    const px = toPx(size);
    return px ? (thickness * VIEWBOX) / px : thickness;
  }, [size, thickness]);
  const radius = Math.max(1, VIEWBOX / 2 - strokeWidth / 2);

  return (
    <svg
      className={`vslk-spinner-arc${progress === null ? " vslk-spinner-arc--indeterminate" : ""}`}
      viewBox="0 0 44 44"
      style={
        {
          width: box,
          height: box,
          color,
          "--vslk-arc-rotate": `${2 / safeSpeed}s`,
          "--vslk-arc-dash": `${1.5 / safeSpeed}s`,
        } as React.CSSProperties
      }
    >
      {trackInfo ? (
        <circle
          className="vslk-spinner-arc__track"
          data-vslk-track={trackInfo.attr}
          cx={22}
          cy={22}
          r={radius}
          fill="none"
          stroke={trackInfo.color}
          strokeWidth={strokeWidth}
        />
      ) : null}
      <circle
        className="vslk-spinner-arc__bar"
        cx={22}
        cy={22}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap={progress === 0 ? "butt" : "round"}
        pathLength={100}
        style={progress === null ? undefined : { strokeDasharray: `${progress} 100` }}
      />
    </svg>
  );
}
