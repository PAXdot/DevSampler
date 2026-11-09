"use client";

import { useMemo } from "react";
import { resolveTrack } from "./track";

export interface CircleProps {
  size?: number | string;
  color?: string;
  speed?: number;
  thickness?: number;
  track?: boolean | string;
}

export default function Circle({
  size = 40,
  color = "currentColor",
  speed = 1,
  thickness = 4,
  track = true,
}: CircleProps) {
  const trackInfo = useMemo(() => resolveTrack(track), [track]);
  const formattedSize = typeof size === "number" ? `${size}px` : size;
  const duration = speed > 0 ? 1 / speed : 1;
  const formattedDuration = `${duration}s`;

  return (
    <div
      className="vslk-spinner-circle"
      data-vslk-track={trackInfo?.attr}
      style={{
        width: formattedSize,
        height: formattedSize,
        color,
        borderWidth: `${thickness}px`,
        borderColor: trackInfo?.color ?? "transparent",
        borderTopColor: color,
        animationDuration: formattedDuration,
      }}
    />
  );
}
