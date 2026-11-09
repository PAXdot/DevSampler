"use client";

/**
 * Context Menu, Base UI Context Menu foundation (Phase 5).
 * Identical menu-item/surface tokens as DropdownMenu (files stay independent).
 * D-17: onOpenChange → (open: boolean) => void; asChild → render.
 * No custom overlay helper, Base UI owns portal/positioning/dismissal.
 */

import * as React from "react";
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { IconCheck, IconChevronRight } from "@tabler/icons-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function adaptOpenChange(
  onOpenChange?: (open: boolean) => void,
): ((open: boolean, details: unknown) => void) | undefined {
  if (!onOpenChange) return undefined;
  return (open) => onOpenChange(open);
}

const menuSurfaceClass = cn(
  "border border-[var(--border)] bg-[color:var(--primitive-surface-overlay,var(--popover))] text-[var(--foreground)]",
  "[box-shadow:var(--primitive-shadow-overlay,0_1px_2px_rgba(0,0,0,0.08),0_18px_48px_-24px_rgba(0,0,0,0.4))]",
);

/** Menu family: 180ms open / 120ms close (aligned with DropdownMenu). */
const popupMotionClass = cn(
  "origin-[var(--transform-origin)] transform-gpu outline-none",
  "transition-[opacity,scale] duration-[180ms] ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "data-[ending-style]:duration-[120ms]",
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
  "data-[starting-style]:scale-[0.96] data-[ending-style]:scale-[0.96]",
  "motion-reduce:transition-none motion-reduce:data-[starting-style]:scale-100 motion-reduce:data-[ending-style]:scale-100",
);

/** Canonical menu-item metrics, must match DropdownMenu. */
const itemBaseClass = cn(
  "group/menu-item relative flex min-h-9 w-full cursor-default select-none items-center gap-2.5 rounded-[var(--primitive-radius-item,0.625rem)] px-2.5 py-2 text-left text-sm outline-none",
  "transition-colors duration-100 ease-out",
  "data-disabled:pointer-events-none data-disabled:opacity-45",
  "data-highlighted:bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))] data-highlighted:text-[var(--foreground)]",
);

const itemDestructiveClass = cn(
  "text-[color:var(--primitive-destructive,var(--destructive))]",
  "data-highlighted:bg-[color:var(--primitive-destructive-surface,color-mix(in_srgb,var(--destructive)_10%,transparent))] data-highlighted:text-[color:var(--primitive-destructive,var(--destructive))]",
);

export interface ContextMenuProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BaseContextMenu.Root>,
    "onOpenChange"
  > {
  onOpenChange?: (open: boolean) => void;
}

export function ContextMenu({
  onOpenChange,
  ...props
}: ContextMenuProps) {
  return (
    <BaseContextMenu.Root
      onOpenChange={adaptOpenChange(onOpenChange)}
      {...props}
    />
  );
}

export interface ContextMenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof BaseContextMenu.Trigger> {
  asChild?: boolean;
}

export function ContextMenuTrigger({
  asChild = false,
  children,
  className,
  ...props
}: ContextMenuTriggerProps) {
  if (asChild && React.isValidElement(children)) {
    return (
      <BaseContextMenu.Trigger
        render={children as React.ReactElement}
        className={className}
        {...props}
      />
    );
  }
  return (
    <BaseContextMenu.Trigger className={className} {...props}>
      {children}
    </BaseContextMenu.Trigger>
  );
}

export const ContextMenuGroup = BaseContextMenu.Group;
export const ContextMenuRadioGroup = BaseContextMenu.RadioGroup;
export const ContextMenuSub = BaseContextMenu.SubmenuRoot;

export interface ContextMenuContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>,
    "align" | "sideOffset" | "side"
  > {
  align?: "start" | "center" | "end";
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
  collisionPadding?: number;
  container?: React.ComponentProps<typeof BaseContextMenu.Portal>["container"];
}

export function ContextMenuContent({
  className,
  align,
  sideOffset = 4,
  side,
  collisionPadding = 12,
  container,
  ...props
}: ContextMenuContentProps) {
  return (
    <BaseContextMenu.Portal container={container}>
      <BaseContextMenu.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        className="z-[var(--primitive-z-popover,130)] outline-none"
      >
        <BaseContextMenu.Popup data-wensity-primitive=""
          className={cn(
            popupMotionClass,
            menuSurfaceClass,
            "min-w-[12rem] rounded-[var(--primitive-radius-surface,1rem)] p-1",
            className,
          )}
          {...props}
        />
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  );
}

export interface ContextMenuSubContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>,
    "align" | "sideOffset" | "side"
  > {
  align?: "start" | "center" | "end";
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
  collisionPadding?: number;
  container?: React.ComponentProps<typeof BaseContextMenu.Portal>["container"];
}

export function ContextMenuSubContent({
  className,
  align = "start",
  sideOffset = 2,
  side = "right",
  collisionPadding = 12,
  container,
  ...props
}: ContextMenuSubContentProps) {
  return (
    <BaseContextMenu.Portal container={container}>
      <BaseContextMenu.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        className="z-[var(--primitive-z-popover,130)] outline-none"
      >
        <BaseContextMenu.Popup data-wensity-primitive=""
          className={cn(
            popupMotionClass,
            menuSurfaceClass,
            "min-w-[10rem] rounded-[var(--primitive-radius-surface,1rem)] p-1",
            className,
          )}
          {...props}
        />
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  );
}

export interface ContextMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseContextMenu.Item> {
  inset?: boolean;
  destructive?: boolean;
}

export function ContextMenuItem({
  className,
  inset,
  destructive,
  ...props
}: ContextMenuItemProps) {
  return (
    <BaseContextMenu.Item
      className={cn(
        itemBaseClass,
        destructive ? itemDestructiveClass : "text-[var(--foreground)]",
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  );
}

export type ContextMenuCheckboxItemProps = React.ComponentPropsWithoutRef<typeof BaseContextMenu.CheckboxItem>;

export function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: ContextMenuCheckboxItemProps) {
  return (
    <BaseContextMenu.CheckboxItem
      className={cn(itemBaseClass, "pr-8 text-[var(--foreground)]", className)}
      {...props}
    >
      {children}
      <BaseContextMenu.CheckboxItemIndicator className="absolute right-2.5 inline-flex size-4 items-center justify-center text-[var(--foreground)]">
        <IconCheck stroke={2.25} className="size-3.5" />
      </BaseContextMenu.CheckboxItemIndicator>
    </BaseContextMenu.CheckboxItem>
  );
}

export type ContextMenuRadioItemProps = React.ComponentPropsWithoutRef<typeof BaseContextMenu.RadioItem>;

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  return (
    <BaseContextMenu.RadioItem
      className={cn(itemBaseClass, "pr-8 text-[var(--foreground)]", className)}
      {...props}
    >
      {children}
      <BaseContextMenu.RadioItemIndicator className="absolute right-2.5 inline-flex size-4 items-center justify-center text-[var(--foreground)]">
        {/* Internal selection geometry, not a pack icon (U-3 / A-19). */}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-2.5"
        >
          <circle cx="8" cy="8" r="4.5" />
        </svg>
      </BaseContextMenu.RadioItemIndicator>
    </BaseContextMenu.RadioItem>
  );
}

export interface ContextMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof BaseContextMenu.SubmenuTrigger> {
  inset?: boolean;
}

export function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  return (
    <BaseContextMenu.SubmenuTrigger
      className={cn(
        itemBaseClass,
        "text-[var(--foreground)] data-popup-open:bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
        inset && "pl-8",
        className,
      )}
      {...props}
    >
      <span className="flex min-w-0 flex-1 items-center gap-2.5">{children}</span>
      <IconChevronRight
        stroke={1.75}
        className="size-3.5 shrink-0 text-[var(--muted-foreground)]"
      />
    </BaseContextMenu.SubmenuTrigger>
  );
}

export function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div
      className={cn(
        "px-2.5 py-1.5 text-[11px] font-medium tracking-[0.02em] text-[var(--muted-foreground)]",
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  );
}

export function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof BaseContextMenu.Separator>) {
  return (
    <BaseContextMenu.Separator
      className={cn("my-1 h-px bg-[var(--border)]", className)}
      {...props}
    />
  );
}

export function ContextMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "ml-auto pl-4 text-[11px] tracking-[0.02em] text-[var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}
