"use client";

import * as React from "react";
import { Check, ChevronRight, LoaderCircle, Wrench } from "lucide-react";

export interface ToolCallVisualizerProps {
  name: string;
  input: Record<string, unknown>;
  result?: unknown;
  status?: "running" | "complete";
  defaultOpen?: boolean;
  className?: string;
}

export function ToolCallVisualizer({ name, input, result, status = "complete", defaultOpen = false, className }: ToolCallVisualizerProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const summary = Object.values(input)[0];
  return (
    <div className={`w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 ${className ?? ""}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="group flex w-full items-center gap-2.5 px-3.5 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-zinc-400">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"><Wrench className="size-3.5" /></span>
        <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-zinc-700 dark:text-zinc-300">{name}(<span className="text-zinc-400">{JSON.stringify(summary)}</span>)</span>
        {status === "running" ? <LoaderCircle className="size-3.5 animate-spin text-zinc-400" /> : <Check className="size-3.5 text-zinc-400" />}
        <ChevronRight className={`size-3.5 text-zinc-400 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="grid gap-px border-t border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-2">
            <CodePanel label="Input" value={input} />
            <CodePanel label={status === "running" ? "Result · running" : "Result"} value={status === "running" ? "Waiting for response…" : result} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CodePanel({ label, value }: { label: string; value: unknown }) {
  return <div className="min-w-0 bg-zinc-50 p-3.5 dark:bg-zinc-900"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.12em] text-zinc-400">{label}</p><pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-zinc-600 dark:text-zinc-400">{typeof value === "string" ? value : JSON.stringify(value, null, 2)}</pre></div>;
}
