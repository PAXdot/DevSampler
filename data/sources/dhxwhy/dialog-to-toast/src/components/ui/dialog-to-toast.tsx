"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Check, CircleX, LoaderCircle, RotateCcw, X } from "lucide-react";

type DivProps = React.ComponentProps<"div">;

export type DialogToastPhase = "closed" | "dialog" | "morphing" | "pending" | "success" | "error" | "undone";
export type ToastPosition = "bottom-right" | "bottom-center" | "top-right";

export type DialogToToastProps = {
  trigger?: React.ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  tone?: "default" | "destructive";
  onConfirm: () => unknown;
  onUndo?: () => unknown;
  onPhaseChange?: (phase: DialogToastPhase) => void;
  undoWindow?: number;
  toastPosition?: ToastPosition;
  toastWidth?: number;
  settleMs?: number;
  labels?: { pending?: React.ReactNode; success?: React.ReactNode; error?: React.ReactNode; undone?: React.ReactNode; undo?: React.ReactNode; retry?: React.ReactNode };
  duration?: number;
  width?: number;
  className?: string;
  ref?: DivProps["ref"];
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

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

function toastRect(position: ToastPosition, width: number, height: number) {
  const margin = 16;
  const w = Math.min(width, window.innerWidth - margin * 2);
  const left = position === "bottom-center" ? (window.innerWidth - w) / 2 : window.innerWidth - margin - w;
  const top = position === "top-right" ? margin : window.innerHeight - margin - height;
  return { left, top, width: w, height };
}

export function DialogToToast({
  trigger,
  open,
  defaultOpen = false,
  onOpenChange,
  title,
  description,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  tone = "default",
  onConfirm,
  onUndo,
  onPhaseChange,
  undoWindow = 5000,
  toastPosition = "bottom-right",
  toastWidth = 340,
  settleMs = 2600,
  labels,
  duration = 520,
  width = 420,
  className = "",
  ref,
}: DialogToToastProps) {
  const reduced = useReducedMotion();
  const [localOpen, setLocalOpen] = React.useState(defaultOpen);
  const [mounted, setMounted] = React.useState(false);
  const [phase, setPhaseState] = React.useState("closed" as DialogToastPhase);
  const [secondsLeft, setSecondsLeft] = React.useState(0);
  const isOpen = open ?? localOpen;
  const panelRef = React.useRef(null as HTMLDivElement | null);
  const backdropRef = React.useRef(null as HTMLDivElement | null);
  const barRef = React.useRef(null as HTMLSpanElement | null);
  const triggerRef = React.useRef(null as HTMLElement | null);
  const opener = React.useRef(null as HTMLElement | null);
  const timers = React.useRef([] as number[]);
  const run = React.useRef(0);
  const titleId = React.useId();
  const descriptionId = React.useId();
  const phaseRef = React.useRef(phase);

  const setPhase = (next: DialogToastPhase) => { phaseRef.current = next; setPhaseState(next); onPhaseChange?.(next); };
  const later = (ms: number, callback: () => void) => { const id = window.setTimeout(callback, ms); timers.current.push(id); return id; };
  const clearTimers = () => { for (const id of timers.current) window.clearTimeout(id); timers.current = []; };

  const setOpen = React.useCallback((next: boolean) => {
    if (open === undefined) setLocalOpen(next);
    onOpenChange?.(next);
  }, [open, onOpenChange]);

  React.useEffect(() => { setMounted(true); }, []);

  React.useEffect(() => {
    if (isOpen) {
      if (phaseRef.current === "closed") { opener.current = document.activeElement as HTMLElement | null; setPhase("dialog"); }
      return;
    }
    clearTimers();
    run.current += 1;
    if (phaseRef.current !== "closed") setPhase("closed");
    const panel = panelRef.current;
    if (panel) { panel.style.cssText = ""; }
  }, [isOpen]);

  React.useEffect(() => {
    if (phase !== "dialog") return;
    const panel = panelRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const first = panel?.querySelector(FOCUSABLE) as HTMLElement | null;
    (first ?? panel)?.focus({ preventScroll: true });
    if (panel && !reduced && typeof panel.animate === "function") {
      panel.animate([{ opacity: 0, transform: "translateY(12px) scale(0.98)" }, { opacity: 1, transform: "translateY(0) scale(1)" }], { duration: 260, easing: EASE });
      backdropRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220 });
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); cancel(); }
      if (event.key === "Tab" && panel) {
        const items = [...panel.querySelectorAll(FOCUSABLE)] as HTMLElement[];
        if (!items.length) return;
        const firstItem = items[0]!; const last = items[items.length - 1]!;
        if (event.shiftKey && document.activeElement === firstItem) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); firstItem.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", onKey); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  React.useEffect(() => () => clearTimers(), []);

  React.useLayoutEffect(() => {
    if (phase !== "success" || undoWindow <= 0) return;
    const bar = barRef.current;
    if (!bar || reduced || typeof bar.animate !== "function") return;
    const drain = bar.animate([{ transform: "scaleX(1)" }, { transform: "scaleX(0)" }], { duration: undoWindow, easing: "linear", fill: "forwards" });
    return () => drain.cancel();
  }, [phase, undoWindow, reduced]);

  const restoreFocus = () => { const target = triggerRef.current?.isConnected ? triggerRef.current : opener.current; queueMicrotask(() => target?.focus?.({ preventScroll: true })); };

  const cancel = () => { if (phaseRef.current !== "dialog") return; restoreFocus(); setOpen(false); };

  const finish = (delay: number) => { later(delay, () => { restoreFocus(); setOpen(false); }); };

  // The action starts the moment the user confirms; the morph only decides when the toast may show its result.
  const start = () => { const pending = Promise.resolve().then(() => onConfirm()); pending.catch(() => {}); return pending; };

  const settle = async (token: number, pending: unknown) => {
    try {
      await pending;
      if (token !== run.current) return;
      setPhase("success");
      if (undoWindow > 0) {
        const begin = performance.now();
        setSecondsLeft(Math.ceil(undoWindow / 1000));
        const ticker = window.setInterval(() => setSecondsLeft(Math.max(0, Math.ceil((undoWindow - (performance.now() - begin)) / 1000))), 200);
        timers.current.push(ticker as unknown as number);
        later(undoWindow, () => { window.clearInterval(ticker); if (token === run.current) finish(0); });
      } else finish(settleMs);
    } catch {
      if (token !== run.current) return;
      setPhase("error");
    }
  };

  const confirm = () => {
    if (phaseRef.current !== "dialog") return;
    const panel = panelRef.current;
    const token = ++run.current;
    const pending = start();
    restoreFocus();
    if (!panel || reduced || typeof panel.animate !== "function") {
      if (panel) { const to = toastRect(toastPosition, toastWidth, 64); panel.style.cssText = `position:fixed;left:${to.left}px;top:${to.top}px;width:${to.width}px;`; }
      setPhase("pending");
      void settle(token, pending);
      return;
    }
    const from = panel.getBoundingClientRect();
    const to = toastRect(toastPosition, toastWidth, 64);
    panel.style.cssText = `position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;max-height:none;margin:0;`;
    setPhase("morphing");
    backdropRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: duration * 0.6, fill: "forwards" });
    const toastBody = panel.querySelector("[data-toast-body]");
    if (toastBody instanceof HTMLElement) toastBody.animate([{ opacity: 0 }, { opacity: 0, offset: 0.45 }, { opacity: 1 }], { duration, easing: "ease-out", fill: "forwards" });
    const morph = panel.animate([
      { left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px`, borderRadius: "24px" },
      { left: `${to.left}px`, top: `${to.top}px`, width: `${to.width}px`, height: `${to.height}px`, borderRadius: "16px" },
    ], { duration, easing: EASE, fill: "forwards" });
    morph.onfinish = () => {
      if (token !== run.current) return;
      morph.cancel();
      panel.style.cssText = `position:fixed;left:${to.left}px;top:${to.top}px;width:${to.width}px;`;
      setPhase("pending");
      void settle(token, pending);
    };
  };

  const undo = () => {
    if (phaseRef.current !== "success") return;
    clearTimers();
    run.current += 1;
    setPhase("undone");
    void onUndo?.();
    finish(1400);
  };

  const retry = () => {
    if (phaseRef.current !== "error") return;
    const token = ++run.current;
    setPhase("pending");
    void settle(token, start());
  };

  const forwardedRef = React.useRef(null as unknown);
  forwardedRef.current = trigger ? (trigger.props as { ref?: unknown }).ref : null;
  const attachTrigger = React.useCallback((node: HTMLElement | null) => {
    triggerRef.current = node;
    const forwarded = forwardedRef.current;
    if (typeof forwarded === "function") forwarded(node);
    else if (forwarded && typeof forwarded === "object") (forwarded as { current: HTMLElement | null }).current = node;
  }, []);
  const triggerElement = trigger ? React.cloneElement(trigger, {
    ref: attachTrigger,
    "aria-haspopup": "dialog",
    "aria-expanded": isOpen,
    "data-dialog-trigger": "",
    onClick: (event: React.MouseEvent) => { (trigger.props as { onClick?: (event: React.MouseEvent) => void }).onClick?.(event); if (!event.defaultPrevented) setOpen(true); },
  } as { [key: string]: unknown }) : null;

  const toastMode = phase === "pending" || phase === "success" || phase === "error" || phase === "undone";
  const toastText = phase === "pending" || phase === "morphing" ? labels?.pending ?? "Working…" : phase === "success" ? labels?.success ?? "Done" : phase === "error" ? labels?.error ?? "Something went wrong" : labels?.undone ?? "Restored";
  const positionClass = toastPosition === "bottom-center" ? "items-end justify-center" : toastPosition === "top-right" ? "items-start justify-end" : "items-end justify-end";

  return (
    <>
      {triggerElement}
      {mounted && isOpen && createPortal(
        <div data-slot="dialog-to-toast" data-phase={phase} data-position={toastPosition} className={`fixed inset-0 z-50 ${toastMode || phase === "morphing" ? "pointer-events-none" : ""}`}>
          {(phase === "dialog" || phase === "morphing") && <div ref={backdropRef} data-backdrop aria-hidden="true" onClick={cancel} className={`absolute inset-0 bg-background/60 backdrop-blur-sm ${phase === "morphing" ? "pointer-events-none" : ""}`} />}
          <div className={`pointer-events-none absolute inset-0 flex p-4 ${phase === "dialog" ? "items-center justify-center" : positionClass}`}>
            <div
              ref={(node) => { panelRef.current = node; if (typeof ref === "function") ref(node); else if (ref) (ref as { current: HTMLDivElement | null }).current = node; }}
              role={toastMode ? "status" : "dialog"}
              aria-modal={phase === "dialog" ? "true" : undefined}
              aria-live={toastMode ? "polite" : undefined}
              aria-labelledby={phase === "dialog" ? titleId : undefined}
              aria-describedby={phase === "dialog" && description ? descriptionId : undefined}
              tabIndex={-1}
              data-panel
              style={{ "--dialog-width": `${width}px` } as React.CSSProperties}
              className={`pointer-events-auto relative overflow-hidden border border-border bg-card text-card-foreground shadow-2xl shadow-primary/10 outline-none ${phase === "dialog" ? "w-[min(var(--dialog-width),100%)] rounded-3xl" : "rounded-2xl"} ${className}`}
            >
              <div data-dialog-body className={`transition-opacity duration-200 motion-reduce:transition-none ${phase === "dialog" ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`} aria-hidden={phase !== "dialog"}>
                <div className="px-6 pt-6">
                  <h2 id={titleId} className="text-lg font-semibold tracking-tight">{title}</h2>
                  {description && <p id={descriptionId} className="mt-1 text-sm text-muted-foreground">{description}</p>}
                </div>
                {children && <div className="px-6 py-4">{children}</div>}
                <div className={`flex items-center justify-end gap-2 px-6 pb-6 ${children ? "" : "pt-5"}`}>
                  <button type="button" data-cancel onClick={cancel} className="h-9 rounded-xl px-3 text-sm text-muted-foreground outline-none transition-colors motion-reduce:transition-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">{cancelLabel}</button>
                  <button type="button" data-confirm onClick={confirm} className={`inline-flex h-9 items-center gap-2 rounded-xl px-4 text-sm font-medium outline-none transition-opacity motion-reduce:transition-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card ${tone === "destructive" ? "bg-destructive text-background" : "bg-primary text-primary-foreground"}`}>{confirmLabel}</button>
                </div>
              </div>
              <div data-toast-body className={`flex min-h-16 items-center gap-3 px-4 py-3 transition-opacity duration-200 motion-reduce:transition-none ${toastMode ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`} aria-hidden={!toastMode}>
                <span data-toast-icon className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                  {(phase === "pending" || phase === "morphing") && <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />}
                  {phase === "success" && <Check className="size-4 text-chart-2" aria-hidden="true" />}
                  {phase === "error" && <CircleX className="size-4 text-destructive" aria-hidden="true" />}
                  {phase === "undone" && <RotateCcw className="size-4 text-chart-2" aria-hidden="true" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p data-toast-text className="truncate text-sm font-medium">{toastText}</p>
                  {phase === "success" && undoWindow > 0 && <span data-undo-bar className="mt-1.5 block h-0.5 w-full overflow-hidden rounded-full bg-muted"><span ref={barRef} className="block h-full w-full origin-left bg-chart-2" /></span>}
                </div>
                {phase === "success" && undoWindow > 0 && (
                  <button type="button" data-undo onClick={undo} className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium outline-none transition-colors motion-reduce:transition-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
                    {labels?.undo ?? "Undo"} <span className="font-mono tabular-nums text-muted-foreground">{secondsLeft}s</span>
                  </button>
                )}
                {phase === "error" && (
                  <button type="button" data-retry onClick={retry} className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium outline-none transition-colors motion-reduce:transition-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"><RotateCcw className="size-3" aria-hidden="true" />{labels?.retry ?? "Retry"}</button>
                )}
                {(phase === "error" || phase === "undone") && (
                  <button type="button" data-close aria-label="Close" onClick={() => { restoreFocus(); setOpen(false); }} className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" aria-hidden="true" /></button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export default DialogToToast;
