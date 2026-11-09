"use client";
import { useState } from "react";

// Ported from Astro: michaelvereb/ai-ui — FeedbackBar.astro
// Source: https://github.com/michaelvereb/ai-ui (MIT License)
// Copyright (c) Michael Vereb

interface FeedbackBarProps {
  onFeedback?: string;
  className?: string;
}

export default function FeedbackBar({
  onFeedback,
  className = "",
}: FeedbackBarProps) {
  const [active, setActive] = useState<"up" | "down" | null>(null);

  const handleFeedback = (action: "up" | "down") => {
    setActive(action);
    if (typeof (window as any).aiToast === "function") {
      (window as any).aiToast(
        action === "up"
          ? "Feedback: Marked as helpful"
          : "Feedback: Marked as unhelpful",
      );
    }
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(
      "Autonomous Agent Diagnostic Report - 30 Checkpoints Verified",
    );
    if (typeof (window as any).aiToast === "function") {
      (window as any).aiToast("Report copied to clipboard");
    }
  };

  const handleRetry = () => {
    if (typeof (window as any).aiToast === "function") {
      (window as any).aiToast("Re-running diagnostic probe...");
    }
  };

  const btnBase =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-transparent border-0 cursor-pointer text-[13.5px] font-medium leading-none transition-colors duration-150 text-muted-foreground hover:bg-accent hover:text-foreground";

  const activeClasses =
    "text-[#ED5F45] bg-[#ED5F45]/10 hover:bg-[#ED5F45]/10 hover:text-[#ED5F45]";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-sans tracking-[-0.02em] shadow-none ${className}`}
      data-feedback-bar
    >
      <div className="flex items-center gap-1">
        <button
          type="button"
          className={`${btnBase} ${active === "up" ? activeClasses : ""}`}
          onClick={() => handleFeedback("up")}
          title="Helpful audit report"
          aria-label="Helpful"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </button>
        <button
          type="button"
          className={`${btnBase} ${active === "down" ? activeClasses : ""}`}
          onClick={() => handleFeedback("down")}
          title="Report inaccurate or unhelpful"
          aria-label="Unhelpful"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
          </svg>
        </button>
      </div>

      <div className="w-px h-[18px] bg-border mx-1" />

      <div className="flex items-center gap-1">
        <button
          type="button"
          className={btnBase}
          onClick={handleCopy}
          title="Copy report markdown"
          aria-label="Copy markdown"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          <span className="ai-feedback-text">Copy</span>
        </button>
        <button
          type="button"
          className={btnBase}
          onClick={handleRetry}
          title="Re-run diagnostic probe"
          aria-label="Re-run probe"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M8 16H3v5"></path>
          </svg>
          <span className="ai-feedback-text">Re-run</span>
        </button>
      </div>
    </div>
  );
}
