"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  IconChevronsDown,
  IconChevronsUp,
  IconFileDescription,
} from "@tabler/icons-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="28"
        strokeDashoffset="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type Plan = {
  id?: string;
  title: string;
  summary?: string;
};

export type PlanToolProps = {
  /** "pending" shows spinner; "idle" shows file icon. */
  state?: "idle" | "pending";
  plan: Plan;
  /** Hides the approve button when true (renders post-approval state). */
  approved?: boolean;
  approveLabel?: string;
  onApprove?: () => void;
  className?: string;
};

function getPlanFileName(plan: Plan) {
  const rawId = plan.id?.trim();
  if (!rawId) return "plan-working.md";
  if (rawId.endsWith(".md")) return rawId;
  return `plan-${rawId}.md`;
}

export const PlanTool = React.memo(function PlanTool({
  state = "idle",
  plan,
  approved = false,
  approveLabel = "Approve",
  onApprove,
  className,
}: PlanToolProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [localApproved, setLocalApproved] = React.useState(false);

  const isPending = state === "pending";
  const fileName = getPlanFileName(plan);
  const summary = plan.summary?.trim() ?? "";
  const hasSummary = summary.length > 0;
  const isAlreadyApproved = approved || localApproved;
  const approveText = isAlreadyApproved ? "Approved" : approveLabel;

  const handleApprove = () => {
    if (isAlreadyApproved) return;
    setLocalApproved(true);
    onApprove?.();
  };

  return (
    <div
      className={cn(
        "rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 overflow-hidden",
        className,
      )}
    >
      <div className="h-7 pl-3 pr-2.5 flex items-center justify-between">
        <div className="min-w-0 flex items-center gap-1">
          {isPending ? (
            <Spinner className="w-3 h-3 text-neutral-500 dark:text-neutral-400 shrink-0" />
          ) : (
            <IconFileDescription className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
          )}
          <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
            {fileName}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? "Collapse plan" : "Expand plan"}
          className="size-5 inline-flex items-center justify-center text-neutral-500 dark:text-neutral-400"
        >
          {isExpanded ? (
            <IconChevronsUp className="w-3.5 h-3.5" />
          ) : (
            <IconChevronsDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 pt-2">
        <div className="space-y-1.5">
          <div className="text-sm text-neutral-900 dark:text-neutral-100 px-3">
            {plan.title}
          </div>

          {hasSummary ? (
            <div className="relative">
              <div
                className={cn(
                  "px-3 text-sm text-neutral-500 dark:text-neutral-400 whitespace-pre-wrap",
                  !isExpanded && "max-h-[94px] overflow-hidden",
                )}
              >
                {summary}
              </div>
              {!isExpanded && (
                <div className="absolute inset-x-0 bottom-0 h-16 pb-2 pl-3.5 pr-2">
                  <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-b from-transparent to-white dark:to-neutral-950" />
                  <div className="h-full flex items-end justify-between relative">
                    <button
                      type="button"
                      onClick={() => setIsExpanded(true)}
                      className="-mx-2 h-5 px-1.5 rounded-[4px] text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                      Read detailed plan
                    </button>
                    {!isAlreadyApproved && (
                      <button
                        type="button"
                        onClick={handleApprove}
                        className="h-5 px-1.5 rounded-[4px] text-xs font-medium bg-blue-500 dark:bg-blue-400 text-white dark:text-neutral-950 hover:bg-blue-500/90 dark:hover:bg-blue-400/90 active:scale-[0.98] transition-[background-color,transform] duration-150"
                      >
                        {approveText}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-xs text-neutral-500 dark:text-neutral-400 px-3 pb-2">
              No plan summary provided.
            </div>
          )}
        </div>

        {(isExpanded || !hasSummary) && (
          <div className="mt-2 flex items-center justify-between pt-1.5 pb-2 pl-3.5 pr-2 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="-mx-2 h-5 px-1.5 rounded-[4px] text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {isExpanded ? "Hide detailed plan" : "Read detailed plan"}
            </button>
            {!isAlreadyApproved && (
              <button
                type="button"
                onClick={handleApprove}
                className="h-5 px-1.5 rounded-[4px] text-xs font-medium bg-blue-500 dark:bg-blue-400 text-white dark:text-neutral-950 hover:bg-blue-500/90 dark:hover:bg-blue-400/90 active:scale-[0.98] transition-[background-color,transform] duration-150"
              >
                {approveText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
