"use client";

import type * as React from "react";
import {
  ArrowDown,
  ArrowUp,
  ChevronRight,
  GripHorizontal,
  GripVertical,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* Item drag family: 5 list rows carrying the VISUAL AFFORDANCE of reordering.
   IMPORTANT: there is NO real drag and drop here. No dnd library is wired up and
   the rows never swap places. This file only offers the visual language that gives
   the feeling "this row can be moved": a handle, grip dots, up/down buttons, a
   ghost surface, an edge rail. The consumer wires the actual ordering up with their
   own dnd solution; no broken or half-done drag imitation is performed. The
   up/down buttons are deliberately no-ops too (the order lives in the consumer's
   state). Color comes ONLY from tokens; alpha via color-mix. Every export renders
   with no props too. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const box: Record<StyledSize, string> = {
  sm: "gap-2.5 rounded-lg p-2 text-sm",
  md: "gap-3 rounded-lg p-3 text-sm",
  lg: "gap-3.5 rounded-xl p-4 text-base",
  xl: "gap-4 rounded-xl p-5 text-base",
};

const base =
  "flex w-full items-center [&_svg]:shrink-0 [&_i]:not-italic [&_i]:leading-none";

const titleCls = "truncate font-medium text-foreground";
const descCls = "truncate text-muted-foreground text-[0.85em]";

/* Tutamac: 24px altinda kalan kontrol, gorunmez hit alani ile buyutulur. */
const handleCls =
  "relative inline-flex size-5 shrink-0 cursor-grab items-center justify-center rounded-md text-muted-foreground outline-none transition-colors duration-(--motion-fast) ease-(--motion-ease) after:absolute after:-inset-1.5 hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 active:cursor-grabbing [&_svg]:size-4 [&_i]:text-base";

const stepBtn =
  "relative inline-flex size-5 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors duration-(--motion-fast) ease-(--motion-ease) after:absolute after:-inset-1.5 hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-3.5 [&_i]:text-sm";

type Props = React.ComponentProps<"div"> & {
  size?: StyledSize;
  title?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
};

function Body({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <span className={titleCls}>{title}</span>
      {description ? <span className={descCls}>{description}</span> : null}
    </div>
  );
}

/* Handle: bastaki dikey grip tutamaci (gorsel affordance, gercek surukleme yok). */
export function HandleItem({
  className,
  size = "md",
  title = "Overview section",
  description = "Appears first on the page",
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(
        base,
        box[size],
        "border border-border bg-card text-card-foreground",
        className,
      )}
      {...props}
    >
      <button type="button" aria-label="Drag handle" className={handleCls}>
        <GripVertical />
      </button>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

/* Grip: the whole row reads as movable - the cursor is grab and a horizontal grip appears on hover. */
export function GripItem({
  className,
  size = "md",
  title = "Pricing table",
  description = "Drag the row to reorder",
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(
        base,
        box[size],
        "group cursor-grab border border-border bg-card text-card-foreground transition-colors duration-(--motion-fast) ease-(--motion-ease) hover:bg-accent active:cursor-grabbing",
        className,
      )}
      {...props}
    >
      <Body title={title} description={description} />
      <span
        aria-hidden="true"
        className="shrink-0 text-muted-foreground opacity-0 transition-opacity duration-(--motion-fast) ease-(--motion-ease) group-hover:opacity-100 [&_svg]:size-4 [&_i]:text-base"
      >
        {trailing ?? <GripHorizontal />}
      </span>
    </div>
  );
}

/* Reorder: keyboard-accessible up/down buttons. The buttons are deliberately no-ops -
   the consumer keeps the order in their own state. */
export function ReorderItem({
  className,
  size = "md",
  title = "Testimonials",
  description = "Position 3 of 8",
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(
        base,
        box[size],
        "border border-border bg-card text-card-foreground",
        className,
      )}
      {...props}
    >
      <Body title={title} description={description} />
      {trailing ?? (
        <span className="flex shrink-0 items-center gap-1">
          <button type="button" aria-label="Move up" className={stepBtn}>
            <ArrowUp />
          </button>
          <button type="button" aria-label="Move down" className={stepBtn}>
            <ArrowDown />
          </button>
        </span>
      )}
    </div>
  );
}

/* Ghost: a frozen version of the "how it looks while being moved" state - a dashed
   border, a slightly transparent surface, a small tilt. It is used as a
   placeholder. */
export function GhostItem({
  className,
  size = "md",
  title = "FAQ section",
  description = "Drop target preview",
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(
        base,
        box[size],
        "rotate-[-1deg] border border-dashed border-[color-mix(in_oklab,var(--color-brand)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-brand)_6%,transparent)] opacity-80 shadow-lg",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="shrink-0 text-muted-foreground [&_svg]:size-4"
      >
        <GripVertical />
      </span>
      <Body title={title} description={description} />
      {trailing}
    </div>
  );
}

/* Rail: sol kenarda dikey ray + nokta dokusu; tutamac satirin kendisidir. */
export function RailItem({
  className,
  size = "md",
  title = "Changelog",
  description = "Grab the left rail",
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(
        base,
        box[size],
        "group relative overflow-hidden border border-border bg-card pl-5 text-card-foreground",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 flex w-4 cursor-grab items-center justify-center bg-[color-mix(in_oklab,var(--color-foreground)_5%,transparent)] text-muted-foreground transition-colors duration-(--motion-fast) ease-(--motion-ease) group-hover:bg-[color-mix(in_oklab,var(--color-brand)_14%,transparent)] group-hover:text-brand [&_svg]:size-3.5"
      >
        <GripVertical />
      </span>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

export default GripItem;
