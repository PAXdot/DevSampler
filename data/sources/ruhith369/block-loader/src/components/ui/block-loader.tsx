"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BlockLoaderProps {
  blockColor?: string; // Tailwind bg color
  borderColor?: string; // Tailwind border color
  size?: number; // block width/height in px
  gap?: number; // gap between blocks in px
  speed?: number; // animation duration in seconds
  className?: string;
}

const BlockLoader: React.FC<BlockLoaderProps> = ({
  blockColor = "bg-blue-600",
  borderColor = "border-blue-600",
  size = 75,
  gap = 4,
  speed = 1,
  className,
}) => {
  const blocks = [0, 1, 2, 3];

  return (
    <div
      className={cn(
        `flex flex-wrap max-w-[${size * 2 + gap * 3}px] p-1 border-2 rounded-md ${borderColor} gap-[${gap}px] justify-center`,
        className,
      )}
    >
      {blocks.map((_, i) => (
        <div
          key={i}
          className={cn(`${blockColor} rounded-sm mx-1`)}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animation: `blockLoading ${speed}s infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes blockLoading {
          0%, 100% { flex: 1; }
          50% { flex: 4; }
        }
      `}</style>
    </div>
  );
};

export default BlockLoader;
