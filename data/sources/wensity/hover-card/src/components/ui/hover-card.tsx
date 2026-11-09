"use client";

/**
 * HoverCard, Base UI Preview Card wrapped with HoverCard* export names (Phase 4B).
 * Solid overlay surface; openDelay/closeDelay map to Trigger delay/closeDelay.
 * D-17: onOpenChange → (open: boolean) => void; asChild → render.
 */

import * as React from "react";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const overlaySurfaceClass = cn(
  "border border-[var(--border)] bg-[color:var(--primitive-surface-overlay,var(--popover))] text-[var(--foreground)]",
  "[box-shadow:var(--primitive-shadow-overlay,0_1px_2px_rgba(0,0,0,0.08),0_18px_48px_-24px_rgba(0,0,0,0.4))]",
);

const popupMotionClass = cn(
  "origin-[var(--transform-origin)] transform-gpu outline-none",
  "transition-[opacity,scale] duration-[180ms] ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "data-[ending-style]:duration-[120ms]",
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
  "data-[starting-style]:scale-[0.96] data-[ending-style]:scale-[0.96]",
  "motion-reduce:transition-none motion-reduce:data-[starting-style]:scale-100 motion-reduce:data-[ending-style]:scale-100",
);

function adaptOpenChange(
  onOpenChange?: (open: boolean) => void,
): ((open: boolean, details: unknown) => void) | undefined {
  if (!onOpenChange) return undefined;
  return (open) => onOpenChange(open);
}

type HoverCardDelayContextValue = {
  openDelay: number;
  closeDelay: number;
};

const HoverCardDelayContext =
  React.createContext<HoverCardDelayContextValue>({
    openDelay: 600,
    closeDelay: 300,
  });

export interface HoverCardProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Root>,
    "onOpenChange"
  > {
  onOpenChange?: (open: boolean) => void;
  /** Mapped to Trigger `delay`. */
  openDelay?: number;
  /** Mapped to Trigger `closeDelay`. */
  closeDelay?: number;
}

export function HoverCard({
  onOpenChange,
  openDelay = 600,
  closeDelay = 300,
  children,
  ...props
}: HoverCardProps) {
  return (
    <HoverCardDelayContext.Provider value={{ openDelay, closeDelay }}>
      <BasePreviewCard.Root
        onOpenChange={adaptOpenChange(onOpenChange)}
        {...props}
      >
        {children}
      </BasePreviewCard.Root>
    </HoverCardDelayContext.Provider>
  );
}

export interface HoverCardTriggerProps
  extends React.ComponentPropsWithoutRef<typeof BasePreviewCard.Trigger> {
  asChild?: boolean;
}

export function HoverCardTrigger({
  asChild = false,
  children,
  delay,
  closeDelay,
  ...props
}: HoverCardTriggerProps) {
  const delays = React.useContext(HoverCardDelayContext);
  const resolvedDelay = delay ?? delays.openDelay;
  const resolvedCloseDelay = closeDelay ?? delays.closeDelay;

  if (asChild && React.isValidElement(children)) {
    return (
      <BasePreviewCard.Trigger
        delay={resolvedDelay}
        closeDelay={resolvedCloseDelay}
        render={children as React.ReactElement}
        {...props}
      />
    );
  }
  return (
    <BasePreviewCard.Trigger
      delay={resolvedDelay}
      closeDelay={resolvedCloseDelay}
      {...props}
    >
      {children}
    </BasePreviewCard.Trigger>
  );
}

export const HoverCardPortal = BasePreviewCard.Portal;

export interface HoverCardContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Popup>,
    "title"
  > {
  width?: "auto" | "sm" | "md" | "lg";
  side?: React.ComponentPropsWithoutRef<
    typeof BasePreviewCard.Positioner
  >["side"];
  align?: React.ComponentPropsWithoutRef<
    typeof BasePreviewCard.Positioner
  >["align"];
  sideOffset?: number;
  collisionPadding?: number;
  container?: React.ComponentPropsWithoutRef<
    typeof BasePreviewCard.Portal
  >["container"];
}

const widthClasses: Record<
  NonNullable<HoverCardContentProps["width"]>,
  string
> = {
  auto: "w-auto min-w-[12rem]",
  sm: "w-[14rem]",
  md: "w-[18rem]",
  lg: "w-[22rem]",
};

export function HoverCardContent({
  className,
  width = "auto",
  side = "bottom",
  align = "center",
  sideOffset = 6,
  collisionPadding = 12,
  container,
  children,
  ...props
}: HoverCardContentProps) {
  return (
    <BasePreviewCard.Portal container={container}>
      <BasePreviewCard.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        className="z-[var(--primitive-z-popover,130)] outline-none"
      >
        <BasePreviewCard.Popup data-wensity-primitive=""
          className={cn(
            overlaySurfaceClass,
            "rounded-[var(--primitive-radius-surface,1rem)] p-4",
            popupMotionClass,
            widthClasses[width],
            className,
          )}
          {...props}
        >
          {children}
        </BasePreviewCard.Popup>
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  );
}

export function HoverCardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-3 border-b border-[var(--border)] pb-3", className)}
      {...props}
    />
  );
}

export function HoverCardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

export function HoverCardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-3 flex items-center justify-end gap-2 border-t border-[var(--border)] pt-3",
        className,
      )}
      {...props}
    />
  );
}

export function HoverCardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-[family-name:var(--primitive-font-display,inherit)] text-sm font-semibold tracking-[-0.01em] text-[var(--foreground)]",
        className,
      )}
      {...props}
    />
  );
}

export function HoverCardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mt-1 text-[12px] leading-[1.5] text-[var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}
