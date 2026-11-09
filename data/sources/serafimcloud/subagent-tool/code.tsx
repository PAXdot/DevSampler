"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SHIMMER_STYLE_ID = "an-subagent-tool-shimmer-styles";
const SHIMMER_STYLES = `
@keyframes an-subagent-shimmer {
  from { background-position: 100% center; }
  to { background-position: 0% center; }
}
.an-subagent-shimmer {
  display: inline-flex;
  align-items: center;
  height: 1rem;
  background-size: 250% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(90deg, #a3a3a3 0%, #a3a3a3 40%, #525252 50%, #a3a3a3 60%, #a3a3a3 100%);
  background-repeat: no-repeat;
  animation: an-subagent-shimmer 1.2s linear infinite;
}
`;

let shimmerStylesInjected = false;
function ensureShimmerStyles() {
  if (typeof document === "undefined") return;
  if (shimmerStylesInjected) return;
  if (document.getElementById(SHIMMER_STYLE_ID)) {
    shimmerStylesInjected = true;
    return;
  }
  const el = document.createElement("style");
  el.id = SHIMMER_STYLE_ID;
  el.textContent = SHIMMER_STYLES;
  document.head.appendChild(el);
  shimmerStylesInjected = true;
}

export type SubagentToolProps = {
  /** "completed" → "Completed Subagent"; "pending" → shimmer "Running Subagent"; "interrupted" → "Subagent interrupted" (no detail/elapsed). */
  state?: "completed" | "pending" | "interrupted";
  /** Detail text — last nested tool name while running, or task description when completed. */
  description?: string;
  /** Trailing elapsed-time label, e.g. "6s" or "1m 24s". Hidden in interrupted state. */
  elapsedTime?: string;
  className?: string;
};

export const SubagentTool = React.memo(function SubagentTool({
  state = "completed",
  description,
  elapsedTime,
  className,
}: SubagentToolProps) {
  React.useEffect(() => {
    ensureShimmerStyles();
  }, []);

  if (state === "interrupted") {
    return (
      <div className={cn("flex items-center max-w-full select-none gap-1", className)}>
        <div className="flex items-center gap-2 min-w-0 text-sm text-neutral-500 dark:text-neutral-400">
          <span className="font-[450] whitespace-nowrap shrink-0">
            Subagent interrupted
          </span>
        </div>
      </div>
    );
  }

  const isPending = state === "pending";
  const label = isPending ? "Running Subagent" : "Completed Subagent";

  return (
    <div className={cn("flex items-center max-w-full select-none gap-1", className)}>
      <div className="flex items-center gap-2 min-w-0 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="font-[450] whitespace-nowrap shrink-0">
          {isPending ? (
            <span className="an-subagent-shimmer">{label}</span>
          ) : (
            label
          )}
        </span>
        {description && (
          <span className="font-normal truncate min-w-0 flex-1 text-neutral-400 dark:text-neutral-500/80">
            {description}
          </span>
        )}
        {elapsedTime && (
          <span className="font-normal tabular-nums shrink-0 text-neutral-400 dark:text-neutral-500/80">
            {elapsedTime}
          </span>
        )}
      </div>
    </div>
  );
});
