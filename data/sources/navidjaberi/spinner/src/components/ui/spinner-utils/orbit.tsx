"use client";

import { scaleSize, toCssSize, toPx } from "./size";

export interface OrbitProps {
  size?: number | string;
  color?: string;
  speed?: number;
}

export default function Orbit({ size = 48, color = "currentColor", speed = 1 }: OrbitProps) {
  const ringSize = toCssSize(size);
  const dotSize = scaleSize(size, "*", 0.16);
  const px = toPx(size);
  /** Distance from the center to the dot's center: (ring - dot) / 2. */
  const radius = px != null ? `${(px - px * 0.16) / 2}px` : `calc(${size} * 0.42)`;

  const safeSpeed = Number.isFinite(speed) && speed > 0 ? speed : 1;
  const duration = `${1 / safeSpeed}s`;

  const orbitStyle = {
    width: ringSize,
    height: ringSize,
    color,
    "--vslk-size": ringSize,
    "--vslk-dot-size": dotSize,
    "--vslk-radius": radius,
    "--vslk-color": color,
    "--vslk-duration": duration,
  } as React.CSSProperties;

  return (
    <div className="vslk-orbit" style={orbitStyle}>
      <div className="vslk-orbit-ring" />
      <div className="vslk-orbit-rotator">
        <span className="vslk-orbit-dot" />
      </div>
    </div>
  );
}
