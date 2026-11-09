"use client";

import { scaleSize, toCssSize } from "./size";

export interface PulseDotsProps {
  size?: number | string;
  color?: string;
  speed?: number;
}

export default function PulseDots({
  size = 40,
  color = "currentColor",
  speed = 1,
}: PulseDotsProps) {
  const boxSize = toCssSize(size);
  const dotSize = scaleSize(size, "/", 5);
  const duration = 1 / (speed > 0 ? speed : 1);

  return (
    <div className="vslk-pulse-orbit" style={{ width: boxSize, height: boxSize, color }}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="dot"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            animationDuration: `${duration}s`,
            animationDelay: `${((i - 1) * duration) / 3}s`,
          }}
        />
      ))}
    </div>
  );
}
