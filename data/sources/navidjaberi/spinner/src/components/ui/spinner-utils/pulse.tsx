"use client";

export interface PulseProps {
  size?: string | number;
  color?: string;
  speed?: number;
}

export default function Pulse({ size = 40, color = "currentColor", speed = 1 }: PulseProps) {
  const formattedSize = typeof size === "number" ? `${size}px` : size;
  const safeSpeed = Number.isFinite(speed) && speed > 0 ? speed : 1;
  const formattedDuration = `${1 / safeSpeed}s`;

  const pulseStyle = {
    width: formattedSize,
    height: formattedSize,
    color,
    "--vslk-pulse-color": color,
    "--vslk-pulse-duration": formattedDuration,
  } as React.CSSProperties;

  return (
    <div className="vslk-spinner-pulse" style={pulseStyle}>
      <span className="vslk-spinner-pulse__wave" />
      <span className="vslk-spinner-pulse__core" />
    </div>
  );
}
