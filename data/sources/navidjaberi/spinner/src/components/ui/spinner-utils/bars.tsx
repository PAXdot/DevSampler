"use client";

import { scaleSize, toCssSize } from "./size";

export interface BarsProps {
  size?: string | number;
  color?: string;
  speed?: number;
}

export default function Bars({ size = 40, color = "currentColor", speed = 1 }: BarsProps) {
  const containerHeight = toCssSize(size);
  const barWidth = scaleSize(size, "/", 8);
  // five bars of size/8 plus four gaps of size*3/32 fill exactly one `size`
  const gapSize = scaleSize(size, "*", 3 / 32);

  const safeSpeed = Number.isFinite(speed) && speed > 0 ? speed : 1;
  const duration = 1 / safeSpeed;
  const formattedDuration = `${duration}s`;
  const getAnimationDelay = (index: number) => `${index * duration * 0.1}s`;

  return (
    <div
      className="v-spinner-bars"
      style={{ width: containerHeight, height: containerHeight, gap: gapSize, color }}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <span
          key={index}
          style={{
            width: barWidth,
            backgroundColor: color,
            animationDuration: formattedDuration,
            animationDelay: getAnimationDelay(index),
          }}
        />
      ))}
    </div>
  );
}
