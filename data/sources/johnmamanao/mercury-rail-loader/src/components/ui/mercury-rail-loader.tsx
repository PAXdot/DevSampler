"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type MercuryRailStyle = React.CSSProperties & {
  "--mercury-accent": string;
  "--mercury-duration": string;
  "--mercury-shape-duration": string;
  "--mercury-width": string;
};

export type MercuryRailLoaderProps =
  React.OutputHTMLAttributes<HTMLOutputElement> & {
    accent?: string;
    label?: string;
    showLabel?: boolean;
    speed?: number;
    width?: number;
  };

function MercuryRailLoader({
  accent = "currentColor",
  className,
  label = "Loading",
  showLabel = true,
  speed = 2100,
  style,
  width = 220,
  ...props
}: MercuryRailLoaderProps) {
  const duration = Math.min(Math.max(speed, 1200), 3600);
  const loaderStyle = {
    ...style,
    "--mercury-accent": accent,
    "--mercury-duration": `${duration}ms`,
    "--mercury-shape-duration": `${duration / 2}ms`,
    "--mercury-width": `${Math.min(Math.max(width, 140), 360)}px`,
  } as MercuryRailStyle;

  return (
    <output
      data-slot="mercury-rail-loader"
      aria-live="polite"
      aria-label={showLabel ? undefined : label}
      className={cn("mercury-rail-loader-root", className)}
      style={loaderStyle}
      {...props}
    >
      <span className="mercury-rail-loader-rail" aria-hidden="true">
        <span className="mercury-rail-loader-traveler">
          <span className="mercury-rail-loader-trail" />
          <span className="mercury-rail-loader-mercury" />
        </span>
      </span>
      {showLabel ? (
        <span className="mercury-rail-loader-label">{label}</span>
      ) : null}
    </output>
  );
}

export default MercuryRailLoader;
export { MercuryRailLoader };
