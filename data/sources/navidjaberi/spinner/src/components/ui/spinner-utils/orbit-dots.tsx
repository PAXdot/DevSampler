"use client";

import { scaleSize, toCssSize, toPx } from "./size";

export interface OrbitDotsProps {
  size?: number | string;
  color?: string;
  speed?: number;
}

const ANGLE = 120;

export default function OrbitDots({
  size = 40,
  color = "currentColor",
  speed = 1,
}: OrbitDotsProps) {
  const boxSize = toCssSize(size);
  const dotSize = scaleSize(size, "/", 4);
  const duration = 1 / (speed > 0 ? speed : 1);

  /** (size - dot) / 2, i.e. size * 3/8, and 28% of that for the inward pulse. */
  const px = toPx(size);
  const orbitRadius = px != null ? `${(px - px / 4) / 2}px` : `calc(${size} * 0.375)`;
  const inwardOffset =
    px != null ? `${((px - px / 4) / 2) * 0.28}px` : `calc(${size} * 0.105)`;

  return (
    <div
      className="vslk-spinner-orbit-dots"
      style={{ width: boxSize, height: boxSize, color, animationDuration: `${duration}s` }}
    >
      {[1, 2, 3].map((i) => (
        <span key={i} className="holder" style={{ transform: `rotate(${(i - 1) * ANGLE}deg)` }}>
          <span
            className="dot-orbit"
            style={{ transform: `translate(-50%, calc(-50% - ${orbitRadius}))` }}
          >
            <span
              className="dot-core"
              style={
                {
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: color,
                  animationDuration: `${duration}s`,
                  animationDelay: `${(-(i - 1) * duration) / 3}s`,
                  "--orbit-radius": orbitRadius,
                  "--inward-offset": inwardOffset,
                } as React.CSSProperties
              }
            />
          </span>
        </span>
      ))}
    </div>
  );
}
