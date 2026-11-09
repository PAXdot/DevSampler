"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type DivProps = React.ComponentProps<"div">;

export type MorphDialogProps = {
  /** The element the dialog grows out of. It receives onClick, aria-haspopup and aria-expanded. */
  trigger: React.ReactElement;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Milliseconds for the grow and shrink transitions. */
  duration?: number;
  easing?: string;
  backdrop?: "blur" | "dim" | "none";
  closeOnOutsideClick?: boolean;
  showClose?: boolean;
  width?: number;
  className?: string;
  ref?: DivProps["ref"];
};

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function radiusOf(node: HTMLElement) {
  const value = Number.parseFloat(getComputedStyle(node).borderTopLeftRadius || "0");
  return Number.isFinite(value) ? value : 0;
}

export function MorphDialog({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  defaultOpen = false,
  onOpenChange,
  duration = 420,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  backdrop = "blur",
  closeOnOutsideClick = true,
  showClose = true,
  width = 440,
  className = "",
  ref,
}: MorphDialogProps) {
  const [localOpen, setLocalOpen] = React.useState(defaultOpen);
  const [mounted, setMounted] = React.useState(false);
  const [phase, setPhase] = React.useState("closed" as "closed" | "opening" | "open" | "closing");
  const [reduced, setReduced] = React.useState(true);
  const triggerRef = React.useRef(null as HTMLElement | null);
  const panelRef = React.useRef(null as HTMLDivElement | null);
  const backdropRef = React.useRef(null as HTMLDivElement | null);
  const origin = React.useRef(null as DOMRect | null);
  const originRadius = React.useRef(16);
  const animations = React.useRef([] as Animation[]);
  const titleId = React.useId();
  const descriptionId = React.useId();
  const isOpen = open ?? localOpen;

  const setOpen = React.useCallback((next: boolean) => {
    if (open === undefined) setLocalOpen(next);
    onOpenChange?.(next);
  }, [open, onOpenChange]);

  React.useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const cancelAll = () => { for (const animation of animations.current) animation.cancel(); animations.current = []; };

  // The trigger fades out while the dialog grows out of it and fades back in as the dialog shrinks home.
  const triggerFade = React.useRef(null as Animation | null);
  const hideTrigger = () => {
    const trigger = triggerRef.current;
    if (!trigger || typeof trigger.animate !== "function") return;
    triggerFade.current?.cancel();
    triggerFade.current = trigger.animate([{ opacity: 1 }, { opacity: 0 }], { duration: duration * 0.3, fill: "forwards" });
  };
  const revealTrigger = (delay: number, length: number) => {
    const hide = triggerFade.current;
    triggerFade.current = null;
    if (!hide) return;
    hide.cancel();
    const trigger = triggerRef.current;
    if (length > 0 && trigger && typeof trigger.animate === "function") trigger.animate([{ opacity: 0 }, { opacity: 1 }], { duration: length, delay, fill: "backwards" });
  };

  React.useLayoutEffect(() => {
    if (!isOpen) { revealTrigger(0, 0); return; }
    const panel = panelRef.current;
    const veil = backdropRef.current;
    const from = origin.current ?? triggerRef.current?.getBoundingClientRect() ?? null;
    if (!panel) return;
    setPhase("opening");
    cancelAll();
    const to = panel.getBoundingClientRect();
    const previous = document.activeElement as HTMLElement | null;
    const restoreFocus = () => { queueMicrotask(() => { const target = triggerRef.current?.isConnected ? triggerRef.current : previous; target?.focus?.({ preventScroll: true }); }); };
    const cx = from ? from.left + from.width / 2 : innerWidth / 2;
    const cy = from ? from.top + from.height / 2 : innerHeight / 2;
    const finish = () => {
      setPhase("open");
      const focusables = [...panel.querySelectorAll(FOCUSABLE)] as HTMLElement[];
      (focusables.find((node) => !node.hasAttribute("data-morph-close")) ?? focusables[0])?.focus({ preventScroll: true });
      if (!panel.contains(document.activeElement)) panel.focus({ preventScroll: true });
    };
    if (reduced || !from || typeof panel.animate !== "function") {
      if (!reduced && typeof panel.animate === "function") animations.current.push(panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, fill: "both" }));
      finish();
      return restoreFocus;
    }
    // The panel is pinned to the trigger's box and its box grows into place; the content keeps its final width, so nothing stretches.
    const content = panel.querySelector("[data-morph-content]");
    panel.style.cssText = `position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;max-height:none;margin:0;`;
    if (content instanceof HTMLElement) content.style.width = `${to.width}px`;
    const grow = panel.animate([
      { left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px`, borderRadius: `${originRadius.current}px` },
      { left: `${to.left}px`, top: `${to.top}px`, width: `${to.width}px`, height: `${to.height}px`, borderRadius: "24px" },
    ], { duration, easing, fill: "forwards" });
    animations.current.push(grow);
    if (content instanceof HTMLElement) animations.current.push(content.animate([{ opacity: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 1 }], { duration, easing: "ease-out", fill: "both" }));
    if (veil) animations.current.push(veil.animate([{ clipPath: `circle(0px at ${cx}px ${cy}px)` }, { clipPath: `circle(${Math.hypot(innerWidth, innerHeight)}px at ${cx}px ${cy}px)` }], { duration: duration * 1.1, easing, fill: "both" }));
    hideTrigger();
    grow.onfinish = () => { grow.cancel(); panel.style.cssText = ""; if (content instanceof HTMLElement) content.style.width = ""; finish(); };
    return restoreFocus;
    // origin, radius and reduced are read when the dialog opens; re-running on their change would restart the animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key === "Tab" && panelRef.current) {
        const items = [...panelRef.current.querySelectorAll(FOCUSABLE)] as HTMLElement[];
        if (!items.length) return;
        const first = items[0]!; const last = items[items.length - 1]!;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", onKey); };
    // close is recreated per render but only reads refs and the latest setOpen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const openFrom = (node: HTMLElement | null) => {
    if (node) { origin.current = node.getBoundingClientRect(); originRadius.current = radiusOf(node); }
    setOpen(true);
  };

  const close = () => {
    if (!isOpen || phase === "closing") return;
    const panel = panelRef.current;
    const veil = backdropRef.current;
    const from = triggerRef.current?.isConnected ? triggerRef.current.getBoundingClientRect() : origin.current;
    if (!panel || !from || reduced || typeof panel.animate !== "function") { revealTrigger(0, 0); setPhase("closed"); setOpen(false); return; }
    setPhase("closing");
    cancelAll();
    const to = panel.getBoundingClientRect();
    const cx = from.left + from.width / 2;
    const cy = from.top + from.height / 2;
    const length = duration * 0.8;
    const content = panel.querySelector("[data-morph-content]");
    panel.style.cssText = `position:fixed;left:${to.left}px;top:${to.top}px;width:${to.width}px;height:${to.height}px;max-height:none;margin:0;`;
    if (content instanceof HTMLElement) { content.style.width = `${to.width}px`; animations.current.push(content.animate([{ opacity: 1 }, { opacity: 0 }], { duration: duration * 0.35, fill: "both" })); }
    const shrink = panel.animate([
      { left: `${to.left}px`, top: `${to.top}px`, width: `${to.width}px`, height: `${to.height}px`, borderRadius: "24px" },
      { left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px`, borderRadius: `${originRadius.current}px` },
    ], { duration: length, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" });
    if (veil) animations.current.push(veil.animate([{ clipPath: `circle(${Math.hypot(innerWidth, innerHeight)}px at ${cx}px ${cy}px)` }, { clipPath: `circle(0px at ${cx}px ${cy}px)` }], { duration: length, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "both" }));
    animations.current.push(shrink);
    revealTrigger(length * 0.55, length * 0.45);
    shrink.onfinish = () => { setPhase("closed"); setOpen(false); };
  };

  React.useEffect(() => () => { cancelAll(); triggerFade.current?.cancel(); }, []);

  const forwardedRef = React.useRef(null as unknown);
  forwardedRef.current = (trigger.props as { ref?: unknown }).ref;
  const attachTrigger = React.useCallback((node: HTMLElement | null) => {
    triggerRef.current = node;
    const forwarded = forwardedRef.current;
    if (typeof forwarded === "function") forwarded(node);
    else if (forwarded && typeof forwarded === "object") (forwarded as { current: HTMLElement | null }).current = node;
  }, []);
  const triggerElement = React.cloneElement(trigger, {
    ref: attachTrigger,
    "aria-haspopup": "dialog",
    "aria-expanded": isOpen,
    "data-morph-trigger": "",
    onClick: (event: React.MouseEvent) => {
      (trigger.props as { onClick?: (event: React.MouseEvent) => void }).onClick?.(event);
      if (!event.defaultPrevented) openFrom(event.currentTarget as HTMLElement);
    },
  } as { [key: string]: unknown });

  const veilClass = backdrop === "blur" ? "bg-background/60 backdrop-blur-sm" : backdrop === "dim" ? "bg-background/70" : "";

  return (
    <>
      {triggerElement}
      {mounted && isOpen && createPortal(
        <div data-slot="morph-dialog" data-phase={phase} className="fixed inset-0 z-50">
          {backdrop !== "none" && <div ref={backdropRef} data-morph-backdrop aria-hidden="true" onClick={() => closeOnOutsideClick && close()} className={`absolute inset-0 ${veilClass}`} />}
          {backdrop === "none" && closeOnOutsideClick && <div aria-hidden="true" onClick={close} className="absolute inset-0" />}
          <div style={{ "--morph-width": `${width}px` } as React.CSSProperties} className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
            <div
              ref={(node) => { panelRef.current = node; if (typeof ref === "function") ref(node); else if (ref) (ref as { current: HTMLDivElement | null }).current = node; }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? titleId : undefined}
              aria-describedby={description ? descriptionId : undefined}
              tabIndex={-1}
              data-morph-panel
              className={`pointer-events-auto relative w-[min(var(--morph-width),100%)] max-h-[90vh] overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-2xl shadow-primary/10 outline-none ${className}`}
            >
              <div data-morph-content className="flex max-h-[90vh] flex-col">
                {(title || showClose) && (
                  <div className="flex items-start justify-between gap-4 px-6 pt-6">
                    <div className="min-w-0">
                      {title && <h2 id={titleId} className="text-lg font-semibold tracking-tight">{title}</h2>}
                      {description && <p id={descriptionId} className="mt-1 text-sm text-muted-foreground">{description}</p>}
                    </div>
                    {showClose && <button type="button" data-morph-close aria-label="Close" onClick={close} className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors motion-reduce:transition-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" aria-hidden="true" /></button>}
                  </div>
                )}
                <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">{children}</div>
                {footer && <div className="flex items-center justify-end gap-2 border-t border-border bg-muted/30 px-6 py-4">{footer}</div>}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export function useMorphDialog() {
  const [open, setOpen] = React.useState(false);
  return { open, setOpen, close: () => setOpen(false) };
}

export default MorphDialog;
