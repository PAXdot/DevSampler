"use client";

/**
 * Dropdown Menu, Base UI Menu foundation (Phase 5).
 * Canonical menu-item recipe for the menu family.
 * D-17: onOpenChange → (open: boolean) => void; asChild → render.
 */

import * as React from "react";
import { Menu } from "@base-ui/react/menu";
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

/** Menu family: 180ms open / 120ms close, origin-aware scale/fade. */
const popupMotionClass = cn(
  "origin-[var(--transform-origin)] transform-gpu outline-none",
  "transition-[opacity,scale] duration-[180ms] ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "data-[ending-style]:duration-[120ms]",
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
  "data-[starting-style]:scale-[0.96] data-[ending-style]:scale-[0.96]",
  "motion-reduce:transition-none motion-reduce:data-[starting-style]:scale-100 motion-reduce:data-[ending-style]:scale-100",
);

/** Canonical menu-item metrics (PRIM-SPACE-002). */
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

/* ─── Root ──────────────────────────────────────────────────── */

export interface DropdownMenuProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Menu.Root>, "onOpenChange"> {
  onOpenChange?: (open: boolean) => void;
}

/**
 * Dropdown menus open on click. `modal={false}` keeps page scroll/layout
 * intact (sticky nav/sidebar safe), matching prior Radix behavior.
 */
export function DropdownMenu({
  onOpenChange,
  modal = false,
  ...props
}: DropdownMenuProps) {
  return (
    <Menu.Root
      modal={modal}
      onOpenChange={adaptOpenChange(onOpenChange)}
      {...props}
    />
  );
}

/* ─── Trigger ───────────────────────────────────────────────── */

export interface DropdownMenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Menu.Trigger> {
  asChild?: boolean;
}

export function DropdownMenuTrigger({
  asChild = false,
  children,
  className,
  ...props
}: DropdownMenuTriggerProps) {
  if (asChild && React.isValidElement(children)) {
    const nativeButton =
      typeof children.type === "string" ? children.type === "button" : true;
    return (
      <Menu.Trigger
        nativeButton={nativeButton}
        render={children as React.ReactElement}
        className={className}
        {...props}
      />
    );
  }
  return (
    <Menu.Trigger className={className} {...props}>
      {children}
    </Menu.Trigger>
  );
}

/* ─── Content ───────────────────────────────────────────────── */

export interface DropdownMenuContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Menu.Popup>,
    "align" | "sideOffset" | "side"
  > {
  align?: "start" | "center" | "end";
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
  alignOffset?: number;
  collisionPadding?: number;
  container?: React.ComponentProps<typeof Menu.Portal>["container"];
}

export function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  side,
  alignOffset,
  collisionPadding = 12,
  container,
  ...props
}: DropdownMenuContentProps) {
  return (
    <Menu.Portal container={container}>
      <Menu.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        className="z-[var(--primitive-z-popover,130)] outline-none"
      >
        <Menu.Popup data-wensity-primitive=""
          className={cn(
            popupMotionClass,
            menuSurfaceClass,
            "min-w-[12rem] rounded-[var(--primitive-radius-surface,1rem)] p-1",
            className,
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  );
}

/* ─── Item ──────────────────────────────────────────────────── */

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof Menu.Item> {
  /** Render with destructive styling: red text and red highlight. */
  destructive?: boolean;
  /** When true, adds a checkmark indicator on the left. */
  selected?: boolean;
}

export function DropdownMenuItem({
  className,
  destructive = false,
  selected = false,
  children,
  ...props
}: DropdownMenuItemProps) {
  return (
    <Menu.Item
      className={cn(
        itemBaseClass,
        destructive ? itemDestructiveClass : "text-[var(--foreground)]",
        className,
      )}
      {...props}
    >
      {selected ? (
        <span className="flex size-4 shrink-0 items-center justify-center">
          <IconCheck size={14} stroke={2.5} />
        </span>
      ) : null}
      {children}
    </Menu.Item>
  );
}

/* ─── Separator ─────────────────────────────────────────────── */

export type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof Menu.Separator
>;

export function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <Menu.Separator
      className={cn("-mx-0.5 my-1 h-px bg-[var(--border)]", className)}
      {...props}
    />
  );
}

/* ─── Label ─────────────────────────────────────────────────── */

/**
 * Visual section label. Plain element for Radix-compatible sibling API
 * (Label may sit outside Group). Use Menu.Group + GroupLabel when needed.
 */
export type DropdownMenuLabelProps = React.HTMLAttributes<HTMLDivElement>;

export function DropdownMenuLabel({
  className,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <div
      className={cn(
        "px-2.5 py-1.5 text-[11px] font-medium tracking-[0.02em] text-[var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}

/* ─── Group ─────────────────────────────────────────────────── */

export const DropdownMenuGroup = Menu.Group;

/* ─── Shortcut ──────────────────────────────────────────────── */

export interface DropdownMenuShortcutProps {
  /** One or more key labels (e.g. ["⌘", "K"]). */
  keys: string[];
  className?: string;
}

export function DropdownMenuShortcut({
  keys,
  className,
}: DropdownMenuShortcutProps) {
  return (
    <span
      className={cn(
        "ml-auto flex items-center gap-0.5 text-[11px] tracking-[0.02em] text-[var(--muted-foreground)]",
        className,
      )}
    >
      {keys.map((key, i) => (
        <kbd
          key={i}
          className="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] border border-[var(--border)] bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] px-1 font-medium leading-none"
        >
          {key}
        </kbd>
      ))}
    </span>
  );
}

/* ─── Sub (Nested) ─────────────────────────────────────────── */

export const DropdownMenuSub = Menu.SubmenuRoot;

export type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>;

export function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <Menu.SubmenuTrigger
      className={cn(itemBaseClass, "pr-2 text-[var(--foreground)]", className)}
      {...props}
    >
      {children}
      <span className="ml-auto flex items-center">
        <IconChevronRight
          size={14}
          stroke={2}
          className="text-[var(--muted-foreground)]"
        />
      </span>
    </Menu.SubmenuTrigger>
  );
}

export interface DropdownMenuSubContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Menu.Popup>,
    "align" | "sideOffset" | "side"
  > {
  align?: "start" | "center" | "end";
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
  alignOffset?: number;
  collisionPadding?: number;
  container?: React.ComponentProps<typeof Menu.Portal>["container"];
}

export function DropdownMenuSubContent({
  className,
  align = "start",
  sideOffset = 2,
  side = "right",
  alignOffset,
  collisionPadding = 8,
  container,
  ...props
}: DropdownMenuSubContentProps) {
  return (
    <Menu.Portal container={container}>
      <Menu.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        className="z-[var(--primitive-z-popover,130)] outline-none"
      >
        <Menu.Popup data-wensity-primitive=""
          className={cn(
            popupMotionClass,
            menuSurfaceClass,
            "min-w-[12rem] rounded-[var(--primitive-radius-surface,1rem)] p-1",
            className,
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  );
}

/* ─── Checkbox Item ─────────────────────────────────────────── */

export type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>;

export function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <Menu.CheckboxItem
      className={cn(itemBaseClass, "pl-8 text-[var(--foreground)]", className)}
      {...props}
    >
      <span className="absolute left-2.5 flex size-3.5 items-center justify-center">
        <Menu.CheckboxItemIndicator>
          <IconCheck size={14} stroke={2.5} />
        </Menu.CheckboxItemIndicator>
      </span>
      {children}
    </Menu.CheckboxItem>
  );
}

/* ─── Radio Group & Radio Item ──────────────────────────────── */

export const DropdownMenuRadioGroup = Menu.RadioGroup;

export type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<typeof Menu.RadioItem>;

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <Menu.RadioItem
      className={cn(itemBaseClass, "pl-8 text-[var(--foreground)]", className)}
      {...props}
    >
      <span className="absolute left-2.5 flex size-3.5 items-center justify-center">
        <Menu.RadioItemIndicator>
          {/* Internal selection geometry, not a pack icon (U-3 / A-19). */}
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="currentColor"
            width={12}
            height={12}
          >
            <circle cx="8" cy="8" r="4.5" />
          </svg>
        </Menu.RadioItemIndicator>
      </span>
      {children}
    </Menu.RadioItem>
  );
}
