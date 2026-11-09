"use client";

import * as React from "react";
import { RotateCcw, Square } from "lucide-react";

export interface StreamingChatBubbleProps {
  text: string;
  speed?: number;
  onRegenerate?: () => void;
  className?: string;
}

export function StreamingChatBubble({ text, speed = 22, onRegenerate, className }: StreamingChatBubbleProps) {
  const [shown, setShown] = React.useState(0);
  const [streaming, setStreaming] = React.useState(true);

  React.useEffect(() => {
    if (!streaming || shown >= text.length) return;
    const timer = window.setTimeout(() => setShown((value) => Math.min(value + 2, text.length)), speed);
    return () => window.clearTimeout(timer);
  }, [shown, speed, streaming, text.length]);

  React.useEffect(() => {
    if (shown >= text.length) setStreaming(false);
  }, [shown, text.length]);

  const regenerate = () => {
    setShown(0);
    setStreaming(true);
    onRegenerate?.();
  };

  return (
    <article aria-live="polite" aria-busy={streaming} className={`w-full max-w-2xl ${className ?? ""}`}>
      <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,.03)] dark:border-zinc-800 dark:bg-zinc-950">
        <p className="min-h-20 whitespace-pre-wrap text-[14px] leading-7 text-zinc-700 dark:text-zinc-300">
          {text.slice(0, shown)}
          {streaming ? <span aria-hidden className="ml-0.5 inline-block h-[1.05em] w-px translate-y-0.5 animate-pulse bg-zinc-700 dark:bg-zinc-300" /> : null}
        </p>
      </div>
      <div className="mt-2 flex h-8 items-center">
        {streaming ? (
          <button type="button" onClick={() => setStreaming(false)} className="inline-flex h-8 items-center gap-2 rounded-lg px-2.5 text-[12px] font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100">
            <Square className="size-3 fill-current" /> Stop generating
          </button>
        ) : (
          <button type="button" onClick={regenerate} className="group inline-flex h-8 items-center gap-2 rounded-lg px-2.5 text-[12px] font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100">
            <RotateCcw className="size-3.5 transition-transform duration-300 group-hover:-rotate-45" /> Regenerate
          </button>
        )}
      </div>
    </article>
  );
}
