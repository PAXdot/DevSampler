"use client";

import * as React from "react";
import { ChevronRight, Pencil, Sparkles, Star, Trash2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Item motion family: 5 list rows carrying motion. There are two kinds: a hover reaction (Hover, Reveal) and an entry animation (Slide, Fade, Pop). All motion is turned off with useReducedMotion() - in that case the row sits in its correct final state with no transform and no delay. The timing is deterministic (no random delays). Colour comes ONLY from tokens; alpha via color-mix. Every export renders without props too. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const box: Record<StyledSize, string> = {
  sm: "gap-2.5 rounded-lg p-2 text-sm",
  md: "gap-3 rounded-lg p-3 text-sm",
  lg: "gap-3.5 rounded-xl p-4 text-base",
  xl: "gap-4 rounded-xl p-5 text-base",
};

const tile: Record<StyledSize, string> = {
  sm: "size-8 rounded-md [&_svg]:size-4 [&_i]:text-base",
  md: "size-9 rounded-md [&_svg]:size-4 [&_i]:text-base",
  lg: "size-10 rounded-lg [&_svg]:size-5 [&_i]:text-lg",
  xl: "size-12 rounded-lg [&_svg]:size-5 [&_i]:text-lg",
};

const base =
  "flex w-full items-center [&_svg]:shrink-0 [&_i]:not-italic [&_i]:leading-none";

const shell = "border border-border bg-card text-card-foreground";

const titleCls = "truncate font-medium text-foreground";
const descCls = "truncate text-muted-foreground text-[0.85em]";

const springy = { type: "spring" as const, stiffness: 420, damping: 28 };

interface Props {
  className?: string;
  size?: StyledSize;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

function Body({
  title,
  description,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <span className={titleCls}>{title}</span>
      {description ? <span className={descCls}>{description}</span> : null}
    </div>
  );
}

/* Ikon karesi: brand tonlu token yuzey. */
function Tile({
  size,
  children,
}: {
  size: StyledSize;
  children: React.ReactNode;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-brand",
        tile[size],
        "bg-[color-mix(in_oklab,var(--color-brand)_12%,transparent)]",
      )}
    >
      {children}
    </span>
  );
}

/* Hover: the row rises slightly under the cursor and the chevron slides right. */
export function HoverItem({
  className,
  size = "md",
  title = "Workspace settings",
  description = "Hover the row to lift it",
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-slot="styled-item"
      className={cn(
        base,
        box[size],
        shell,
        "group transition-shadow duration-(--motion-fast) ease-(--motion-ease) hover:shadow-md motion-reduce:transition-none",
        className,
      )}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={springy}
    >
      <Tile size={size}>
        <Sparkles />
      </Tile>
      <Body title={title} description={description} />
      <ChevronRight className="size-4 text-muted-foreground transition-transform duration-(--motion-fast) ease-(--motion-ease) group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
    </motion.div>
  );
}

/* Slide: the row enters sliding from the left. */
export function SlideItem({
  className,
  size = "md",
  title = "Invite teammates",
  description = "The row slides in from the left",
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-slot="styled-item"
      className={cn(base, box[size], shell, className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <Tile size={size}>
        <Star />
      </Tile>
      <Body title={title} description={description} />
      <ChevronRight className="size-4 text-muted-foreground" />
    </motion.div>
  );
}

/* Fade: the row enters in place with opacity only - the calmest entry. */
export function FadeItem({
  className,
  size = "md",
  title = "Usage report",
  description = "The row fades in on mount",
}: Props) {
  return (
    <motion.div
      data-slot="styled-item"
      className={cn(base, box[size], shell, className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <Tile size={size}>
        <Sparkles />
      </Tile>
      <Body title={title} description={description} />
      <ChevronRight className="size-4 text-muted-foreground" />
    </motion.div>
  );
}

/* Pop: yay (spring) ile buyuyerek girer, tiklamada hafifce basilir. */
export function PopItem({
  className,
  size = "md",
  title = "New achievement",
  description = "Springs in and reacts to a tap",
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-slot="styled-item"
      className={cn(base, box[size], shell, className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={springy}
    >
      <Tile size={size}>
        <Star />
      </Tile>
      <Body title={title} description={description} />
      <ChevronRight className="size-4 text-muted-foreground" />
    </motion.div>
  );
}

/* Reveal: the trailing actions open on hover and focus. The hover state is held at the ROOT of the row and the actions always stay in the DOM (only their appearance changes) - so they are keyboard reachable too and the state does not live in an unmounting subtree. */
export function RevealItem({
  className,
  size = "md",
  title = "Landing page copy",
  description = "Hover or focus to reveal actions",
}: Props) {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(false);
  const shown = reduce || active;

  const actionBtn =
    "relative inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors duration-(--motion-fast) ease-(--motion-ease) hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-3.5 [&_i]:text-sm";

  return (
    <div
      data-slot="styled-item"
      className={cn(base, box[size], shell, className)}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          setActive(false);
      }}
    >
      <Tile size={size}>
        <Pencil />
      </Tile>
      <Body title={title} description={description} />
      <motion.span
        className="flex shrink-0 items-center gap-1"
        animate={shown ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
        transition={
          reduce ? { duration: 0 } : { duration: 0.18, ease: "easeOut" }
        }
      >
        <button type="button" aria-label="Edit" className={actionBtn}>
          <Pencil />
        </button>
        <button type="button" aria-label="Delete" className={actionBtn}>
          <Trash2 />
        </button>
      </motion.span>
    </div>
  );
}

export default HoverItem;
