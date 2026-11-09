"use client";

import { toCssSize } from "./size";
import { resolveTrack } from "./track";

export interface RingProps {
  size?: number | string;
  color?: string;
  speed?: number;
  thickness?: number;
  track?: boolean | string;
}

/* Each segment starts a fixed FRACTION of the cycle behind the next;
   that ordering is what makes the arcs gather and chase. (Delays in
   absolute seconds only lined up at one speed.) */
const PHASES = [0.45, 0.3, 0.15, 0];

export default function Ring({
  size = 40,
  color = "currentColor",
  speed = 1,
  thickness = 4,
  track = false,
}: RingProps) {
  const trackInfo = resolveTrack(track);
  const duration = 1 / (speed > 0 ? speed : 1);
  const delayOf = (i: number) => `${-PHASES[i - 1]! * duration}s`;

  return (
    <div
      className="spinner-ring"
      style={{ width: toCssSize(size), height: toCssSize(size), color }}
    >
      {trackInfo ? (
        <div
          className="vslk-ring-track"
          data-vslk-track={trackInfo.attr}
          style={{ borderWidth: `${thickness}px`, borderColor: trackInfo.color }}
        />
      ) : null}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="segment"
          style={{
            borderWidth: `${thickness}px`,
            borderColor: `${color} transparent transparent transparent`,
            animationDuration: `${duration}s`,
            animationDelay: delayOf(i),
          }}
        />
      ))}
    </div>
  );
}
