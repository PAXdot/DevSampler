"use client";

import { scaleSize, toCssSize } from "./size";

export interface DotsProps {
  size?: string | number;
  color?: string;
  speed?: number;
}

export default function Dots({ size = 40, color = "currentColor", speed = 1 }: DotsProps) {
  const dotSize = scaleSize(size, "/", 4);
  const boxSize = toCssSize(size);
  // three dots of size/4 plus two gaps of size/8 fill exactly one `size`
  const gapSize = scaleSize(size, "/", 8);

  const duration = speed > 0 ? 1 / speed : 1;
  const formattedDuration = `${duration}s`;
  const getAnimationDelay = (index: number) => `${index * duration * 0.15}s`;

  return (
    <div
      className="vslk-spinner-dots"
      style={{ width: boxSize, height: boxSize, gap: gapSize, color }}
    >
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            animationDuration: formattedDuration,
            animationDelay: getAnimationDelay(index),
          }}
        />
      ))}
    </div>
  );
}
