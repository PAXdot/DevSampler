"use client";

import * as React from "react";
import { Check, RotateCcw } from "lucide-react";

type DivProps = React.ComponentProps<"div">;

export type ProgressStage = { id: string; label: React.ReactNode; weight?: number };
export type ProgressStatus = "running" | "error" | "done";

export type StagedProgressBarProps = {
  stages: ProgressStage[];
  value?: number;
  status?: ProgressStatus;
  errorStageId?: string;
  collapseOnComplete?: boolean;
  onRetry?: (stageId: string) => void;
  onComplete?: () => void;
  size?: "sm" | "md" | "lg";
  showPercent?: boolean;
  doneLabel?: React.ReactNode;
  retryLabel?: React.ReactNode;
  errorLabel?: React.ReactNode;
  label?: string;
  duration?: number;
  className?: string;
  ref?: DivProps["ref"];
};

const TRACK = { sm: "h-1.5", md: "h-2.5", lg: "h-3.5" } as const;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(true);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function RollingLabel({ text, reduced }: { text: React.ReactNode; reduced: boolean }) {
  const ref = React.useRef(null as HTMLSpanElement | null);
  const key = typeof text === "string" || typeof text === "number" ? String(text) : "";
  React.useLayoutEffect(() => {
    const node = ref.current;
    if (!node || reduced || typeof node.animate !== "function") return;
    node.animate([{ transform: "translateY(110%)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }], { duration: 320, easing: EASE });
  }, [key]);
  return <span className="inline-block overflow-hidden align-bottom"><span ref={ref} data-stage-label className="inline-block">{text}</span></span>;
}

export function StagedProgressBar({
  stages,
  value,
  status,
  errorStageId,
  collapseOnComplete = true,
  onRetry,
  onComplete,
  size = "md",
  showPercent = true,
  doneLabel = "Done",
  retryLabel = "Retry",
  errorLabel = "Failed",
  label = "Progress",
  duration = 500,
  className = "",
  ref,
}: StagedProgressBarProps) {
  const reduced = useReducedMotion();
  const indeterminate = value === undefined;
  const clamped = Math.max(0, Math.min(100, value ?? 0));
  const resolved: ProgressStatus = status ?? (clamped >= 100 ? "done" : "running");
  const totalWeight = stages.reduce((sum, stage) => sum + (stage.weight ?? 1), 0) || 1;
  let cursor = 0;
  const segments = stages.map((stage) => { const start = cursor; const width = ((stage.weight ?? 1) / totalWeight) * 100; cursor += width; return { stage, start, width, end: cursor }; });
  const current = resolved === "error" && errorStageId ? segments.find((s) => s.stage.id === errorStageId) : resolved === "done" ? segments[segments.length - 1] : segments.find((s) => clamped < s.end - 0.0001) ?? segments[segments.length - 1];
  const [collapsed, setCollapsed] = React.useState(false);
  const fillRef = React.useRef(null as HTMLDivElement | null);
  const headRef = React.useRef(null as HTMLDivElement | null);
  const trackRef = React.useRef(null as HTMLDivElement | null);
  const doneRef = React.useRef(null as HTMLDivElement | null);
  const previous = React.useRef(clamped);
  const completed = React.useRef(false);
  const flip = clamped < 14;

  React.useLayoutEffect(() => {
    const fill = fillRef.current;
    const head = headRef.current;
    const from = previous.current;
    previous.current = clamped;
    if (!fill || indeterminate) return;
    if (from === clamped || reduced || typeof fill.animate !== "function") return;
    fill.animate([{ width: `${from}%` }, { width: `${clamped}%` }], { duration, easing: EASE });
    head?.animate([{ left: `${from}%` }, { left: `${clamped}%` }], { duration, easing: EASE });
  }, [clamped]);

  React.useEffect(() => {
    if (resolved !== "done") { completed.current = false; setCollapsed(false); return; }
    if (completed.current) return;
    completed.current = true;
    onComplete?.();
    if (!collapseOnComplete) return;
    const track = trackRef.current;
    const timer = window.setTimeout(() => {
      if (!track || reduced || typeof track.animate !== "function") { setCollapsed(true); return; }
      const animation = track.animate([{ opacity: 1, transform: "scaleX(1)" }, { opacity: 0, transform: "scaleX(0.96)" }], { duration: 280, easing: "ease-in", fill: "forwards" });
      animation.onfinish = () => { animation.cancel(); setCollapsed(true); };
    }, 400);
    return () => window.clearTimeout(timer);
  }, [resolved, collapseOnComplete]);

  React.useLayoutEffect(() => {
    const pill = doneRef.current;
    if (!collapsed || !pill || reduced || typeof pill.animate !== "function") return;
    pill.animate([{ transform: "scale(0.85)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 320, easing: EASE });
  }, [collapsed]);

  React.useLayoutEffect(() => {
    const fill = fillRef.current;
    if (!fill || !indeterminate || reduced || typeof fill.animate !== "function") return;
    const animation = fill.animate([{ transform: "translateX(-100%)" }, { transform: "translateX(400%)" }], { duration: 1400, iterations: Infinity, easing: "cubic-bezier(0.4, 0, 0.2, 1)" });
    return () => animation.cancel();
  }, [indeterminate, reduced]);

  const percent = Math.round(clamped);

  return (
    <div ref={ref} data-slot="staged-progress-bar" data-status={resolved} data-stage={current?.stage.id} data-collapsed={collapsed ? "true" : "false"} data-value={indeterminate ? "indeterminate" : percent} className={`w-full ${className}`}>
      {collapsed ? (
        <div key="done" ref={doneRef} data-done className="inline-flex h-7 items-center gap-1.5 rounded-full bg-chart-2/15 pl-2 pr-3 text-xs font-medium text-foreground">
          <span className="flex size-4 items-center justify-center rounded-full bg-chart-2 text-background"><Check className="size-3" strokeWidth={3} aria-hidden="true" /></span>
          {doneLabel}
        </div>
      ) : (
        <div key="track" ref={trackRef} className="origin-left">
          <div className="relative mb-1.5 h-7">
            {!indeterminate && (
              <div ref={headRef} data-head style={{ left: `${clamped}%` }} className={`absolute top-0 flex h-7 items-center ${flip ? "translate-x-0" : "-translate-x-full"}`}>
                {resolved === "error" ? (
                  <button type="button" data-retry onClick={() => current && onRetry?.(current.stage.id)} className="inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full bg-destructive/10 px-2.5 text-xs font-medium text-destructive outline-none transition-colors motion-reduce:transition-none hover:bg-destructive/15 focus-visible:ring-2 focus-visible:ring-ring">
                    <RotateCcw className="size-3" aria-hidden="true" />{retryLabel}
                  </button>
                ) : (
                  <span data-pill className={`inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-xs font-medium ${resolved === "done" ? "bg-chart-2/15 text-foreground" : "bg-foreground text-background"}`}>
                    {resolved === "done" ? <Check className="size-3 text-chart-2" strokeWidth={3} aria-hidden="true" /> : null}
                    <RollingLabel text={resolved === "done" ? doneLabel : current?.stage.label} reduced={reduced} />
                    {showPercent && resolved !== "done" && <span data-percent className="font-mono tabular-nums opacity-70">{percent}%</span>}
                  </span>
                )}
              </div>
            )}
          </div>
          <div
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={indeterminate ? undefined : percent}
            aria-valuetext={indeterminate ? "Working" : resolved === "error" ? `${errorLabel} at ${typeof current?.stage.label === "string" ? current.stage.label : "stage"}` : `${percent}%, ${typeof current?.stage.label === "string" ? current.stage.label : "stage"}`}
            className={`relative w-full overflow-hidden rounded-full bg-muted ${TRACK[size]}`}
          >
            <div className="absolute inset-0 flex gap-0.5" aria-hidden="true">
              {segments.map((segment) => (
                <span key={segment.stage.id} data-segment={segment.stage.id} data-current={segment.stage.id === current?.stage.id ? "true" : "false"} style={{ width: `${segment.width}%` }} className={`h-full rounded-full ${resolved === "error" && segment.stage.id === errorStageId ? "bg-destructive/25" : "bg-foreground/10"}`} />
              ))}
            </div>
            <div
              ref={fillRef}
              data-fill
              style={{ width: indeterminate ? "25%" : `${clamped}%` }}
              className={`absolute inset-y-0 left-0 rounded-full ${resolved === "error" ? "bg-destructive" : resolved === "done" ? "bg-chart-2" : "bg-foreground"}`}
            />
          </div>
          <ol data-stages className="mt-1.5 flex" aria-hidden="true">
            {segments.map((segment) => (
              <li key={segment.stage.id} style={{ width: `${segment.width}%` }} className={`truncate pr-2 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 motion-reduce:transition-none ${segment.stage.id === current?.stage.id ? (resolved === "error" ? "text-destructive" : "text-foreground") : clamped >= segment.end - 0.0001 && !indeterminate ? "text-chart-2" : "text-muted-foreground/70"}`}>{segment.stage.label}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default StagedProgressBar;
