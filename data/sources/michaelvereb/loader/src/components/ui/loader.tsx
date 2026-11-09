import * as React from "react";

export interface LoaderProps {
  variant?: "spinner" | "progress" | "dots" | "pulse";
  size?: "sm" | "md" | "lg";
  label?: string;
  progress?: number;
  className?: string;
}

/**
 * Ported from Astro to React.
 * Original: @michaelvereb/ai-ui — Loader.astro (MIT License, Copyright (c) 2026 Michael Vereb)
 * https://github.com/michaelvereb/ai-ui/blob/main/src/components/ai-ui/Loader.astro
 */
export default function Loader({
  variant = "spinner",
  size = "md",
  label = "",
  progress,
  className = "",
}: LoaderProps) {
  const isDeterminate = typeof progress === "number";

  return (
    <div className={`ai-loader ai-loader-${variant} size-${size} ${className}`}>
      {variant === "spinner" && (
        <div className="ai-loader-spinner-wrapper">
          <svg
            className="ai-spinner-svg animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle
              className="ai-spinner-track"
              cx="12"
              cy="12"
              r="10"
              strokeWidth={3}
            />
            <path
              className="ai-spinner-head"
              d="M12 2a10 10 0 0 1 10 10"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </svg>
          {label && <span className="ai-loader-label">{label}</span>}
        </div>
      )}

      {variant === "progress" && (
        <div className="ai-loader-progress-wrapper">
          {label && (
            <div className="ai-progress-meta">
              <span className="ai-loader-label">{label}</span>
              {isDeterminate && (
                <span className="ai-progress-pct">
                  {Math.round(progress!)}%
                </span>
              )}
            </div>
          )}
          <div className="ai-progress-track">
            {isDeterminate ? (
              <div
                className="ai-progress-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress!))}%` }}
              />
            ) : (
              <div className="ai-progress-indeterminate" />
            )}
          </div>
        </div>
      )}

      {variant === "dots" && (
        <div className="ai-loader-dots-wrapper">
          <div className="ai-dot-pulse">
            <span className="ai-dot" />
            <span className="ai-dot" />
            <span className="ai-dot" />
          </div>
          {label && <span className="ai-loader-label">{label}</span>}
        </div>
      )}

      {variant === "pulse" && (
        <div className="ai-loader-pulse-wrapper">
          <span className="ai-pulse-ring" />
          <span className="ai-pulse-core" />
          {label && <span className="ai-loader-label">{label}</span>}
        </div>
      )}
    </div>
  );
}
