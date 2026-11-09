"use client";

import type { CSSProperties } from "react";

export interface StrikethroughReplaceProps {
  from: string;
  to: string;
  lineColor?: string;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  speed?: number;
  fps?: number;
  durationInFrames?: number;
  background?: string;
  className?: string;
}

const FONT_FAMILY =
  "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

export const StrikethroughReplace = ({
  from,
  to,
  lineColor = "#ff5e3a",
  fontSize = 48,
  color = "#171717",
  fontWeight = 600,
  speed = 1,
  fps = 30,
  durationInFrames = 90,
  background = "white",
  className,
}: StrikethroughReplaceProps) => {
  const safeSpeed = Math.max(0.01, speed);
  const durationMs = ((durationInFrames / fps) * 1000) / safeSpeed;
  const strikeDurationMs = 0.4 * durationMs;
  const fadeDurationMs = 0.2 * durationMs;
  const fadeDelayMs = 0.4 * durationMs;

  const containerStyle = {
    alignItems: "center",
    background,
    display: "flex",
    inset: 0,
    justifyContent: "center",
    position: "absolute",
  } as CSSProperties;

  const textStyle: CSSProperties = {
    color,
    fontFamily: FONT_FAMILY,
    fontSize,
    fontWeight,
    letterSpacing: "-0.03em",
    whiteSpace: "nowrap",
  };

  return (
    <div className={className} style={containerStyle}>
      <>
        <style>{`
          @keyframes framecn-strike-line {
            from { width: 0%; }
            to { width: 100%; }
          }
          @keyframes framecn-strike-from-fade {
            0%, 40% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }
          @keyframes framecn-strike-to-enter {
            0%, 40% { opacity: 0; transform: translateY(8px); }
            60%, 100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes framecn-strike-line-loop {
            0% { width: 0%; }
            40%, 100% { width: 100%; }
          }
        `}</style>
        <div
          style={{
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* From text with strikethrough */}
          <span
            style={{
              ...textStyle,
              animation: `framecn-strike-from-fade ${durationMs}ms ease-out infinite`,
              position: "absolute",
            }}
          >
            {from}
            <span
              aria-hidden
              style={{
                animation: `framecn-strike-line-loop ${durationMs}ms linear infinite`,
                background: lineColor,
                borderRadius: 2,
                height: Math.max(2, Math.round(fontSize * 0.08)),
                left: 0,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "100%",
              }}
            />
          </span>

          {/* To text */}
          <span
            style={{
              ...textStyle,
              animation: `framecn-strike-to-enter ${durationMs}ms ease-out infinite`,
            }}
          >
            {to}
          </span>
        </div>
      </>
    </div>
  );
};

export default StrikethroughReplace;
