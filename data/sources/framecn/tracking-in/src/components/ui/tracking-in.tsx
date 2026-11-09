"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface TrackingInProps {
  text?: string;
  startTracking?: number;
  startBlur?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  speed?: number;
  fps?: number;
  durationInFrames?: number;
  background?: string;
  className?: string;
}

export const TrackingIn = ({
  text = "Tracking In",
  startTracking = 0.5,
  startBlur = 12,
  fontSize = 96,
  color = "#171717",
  fontWeight = 700,
  speed = 1,
  fps = 30,
  durationInFrames = 90,
  background = "white",
  className,
}: TrackingInProps) => {
  const durationMs = (durationInFrames / fps) * 1000;
  const mainAnimationDurationMs = durationMs / speed;

  const [play, setPlay] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  // Replay the intro animation on mount, then settle on the final
  // (visible) resting state so a static capture always shows the text.
  useEffect(() => {
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const style = {
    background,
    display: "block",
    height: "100%",
    position: "relative",
    width: "100%",
    overflow: "hidden",
  } as CSSProperties;

  return (
    <div style={style}>
      <style>{`
        @keyframes framecn-tracking-in {
          0% {
            letter-spacing: ${startTracking}em;
            filter: blur(${startBlur}px);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            letter-spacing: -0.03em;
            filter: blur(0px);
            opacity: 1;
          }
        }
      `}</style>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          inset: 0,
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <span
          ref={spanRef}
          className={className}
          style={{
            // Resting / final state — always visible.
            letterSpacing: "-0.03em",
            filter: "blur(0px)",
            opacity: 1,
            animation: play
              ? `framecn-tracking-in ${mainAnimationDurationMs}ms cubic-bezier(0.16, 1, 0.3, 1) both`
              : undefined,
            color,
            fontFamily:
              "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize,
            fontWeight,
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default TrackingIn;
