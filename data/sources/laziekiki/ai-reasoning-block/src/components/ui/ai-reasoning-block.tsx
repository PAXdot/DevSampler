"use client";

import * as React from "react";
import { Brain, ChevronDown } from "lucide-react";

export interface ReasoningBlockProps {
  children: React.ReactNode;
  answerStreaming?: boolean;
  defaultOpen?: boolean;
  label?: string;
  className?: string;
}

export function ReasoningBlock({ children, answerStreaming = false, defaultOpen = true, label = "Thinking", className }: ReasoningBlockProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  React.useEffect(() => { if (answerStreaming) setOpen(false); }, [answerStreaming]);
  return (
    <div className={`w-full max-w-2xl border-l border-zinc-300 pl-3 dark:border-zinc-700 ${className ?? ""}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="group flex h-8 items-center gap-2 rounded-md px-1.5 text-[12px] font-medium text-zinc-500 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-200">
        <Brain className="size-3.5" /><span>{label}{!answerStreaming && open ? "…" : ""}</span><ChevronDown className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden"><div className="pb-2 pl-1 pt-1 text-[13px] italic leading-6 text-zinc-500 dark:text-zinc-400">{children}</div></div>
      </div>
    </div>
  );
}
