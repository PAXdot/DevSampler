"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Underline accordion family: 5 minimal accordions. When a row opens an
   animated underline sweeps in below the header; the variants change how the
   line enters and how it looks. Every export is a complete accordion: internal
   single-open state, a button header with aria-expanded, framer height auto
   animation. Colour comes ONLY from tokens. Alpha via color-mix. Under
   reduced-motion the line appears instantly instead of transforming and the
   panel opens instantly. Size = padding + text scale. Renders without props
   too. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

export interface StyledAccordionItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface StyledAccordionProps {
  className?: string;
  size?: StyledSize;
  items?: StyledAccordionItem[];
  defaultOpen?: string;
}

const headerPad: Record<StyledSize, string> = {
  sm: "px-1 py-2.5 text-sm",
  md: "px-1 py-3 text-sm",
  lg: "px-1 py-4 text-base",
  xl: "px-1 py-5 text-lg",
};

const bodyPad: Record<StyledSize, string> = {
  sm: "px-1 pb-2.5 text-sm",
  md: "px-1 pb-3 text-sm",
  lg: "px-1 pb-4 text-base",
  xl: "px-1 pb-5 text-base",
};

const iconSize: Record<StyledSize, string> = {
  sm: "size-4",
  md: "size-4",
  lg: "size-5",
  xl: "size-5",
};

const defaultItems: StyledAccordionItem[] = [
  {
    value: "item-1",
    title: "What is included?",
    content:
      "Every plan ships the full component library, semantic tokens, and lifetime updates for the tier you own.",
  },
  {
    value: "item-2",
    title: "How does installation work?",
    content:
      "Add any component with a single CLI command. Files land in your project and stay fully editable.",
  },
  {
    value: "item-3",
    title: "Can I use it in production?",
    content:
      "Yes. The system is framework agnostic, self contained, and safe to ship to any number of projects.",
  },
];

function useSingleOpen(defaultOpen?: string) {
  const [open, setOpen] = React.useState<string | null>(defaultOpen ?? null);
  const toggle = React.useCallback(
    (value: string) => setOpen((cur) => (cur === value ? null : value)),
    [],
  );
  return { open, toggle };
}

const headerBase =
  "relative flex w-full items-center justify-between gap-3 text-left font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50";

function Panel({
  isOpen,
  size,
  children,
}: {
  isOpen: boolean;
  size: StyledSize;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="panel"
          initial={reduce ? false : { height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
          }
          className="overflow-hidden"
        >
          <div className={cn(bodyPad[size], "text-muted-foreground")}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Chevron({ isOpen, size }: { isOpen: boolean; size: StyledSize }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className="shrink-0 text-muted-foreground"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.2 }}
    >
      <ChevronDown className={iconSize[size]} />
    </motion.span>
  );
}

interface LineStyle {
  /* cizginin origin/giris yonu */
  mode: "left" | "center" | "grow";
  /* line thickness plus extra styling (e.g. double, dashed) */
  lineClass: string;
}

/* Shared underline shell: an animated underline below the header. Rows are
   divided by a token line; the open row gets a primary line sweeping in.
   lineStyle is each variant. */
function UnderlineShell({
  props,
  lineStyle,
}: {
  props: StyledAccordionProps;
  lineStyle: LineStyle;
}) {
  const { className, size = "md", items = defaultItems, defaultOpen } = props;
  const { open, toggle } = useSingleOpen(defaultOpen);
  const reduce = useReducedMotion();
  return (
    <div
      data-slot="styled-accordion"
      className={cn("flex flex-col", className)}
    >
      {items.map((item, i) => {
        const isOpen = open === item.value;
        const originClass =
          lineStyle.mode === "left"
            ? "origin-left"
            : lineStyle.mode === "center"
              ? "origin-center"
              : "origin-left";
        return (
          <div
            key={item.value}
            className={cn(i > 0 && "border-t border-border")}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(item.value)}
              className={cn(headerBase, headerPad[size])}
            >
              <span className="min-w-0">{item.title}</span>
              <Chevron isOpen={isOpen} size={size} />
              <motion.span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0",
                  originClass,
                  lineStyle.lineClass,
                )}
                initial={false}
                animate={
                  reduce
                    ? { opacity: isOpen ? 1 : 0 }
                    : { scaleX: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }
                }
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.28, ease: [0.4, 0, 0.2, 1] }
                }
              />
            </button>
            <Panel isOpen={isOpen} size={size}>
              {item.content}
            </Panel>
          </div>
        );
      })}
    </div>
  );
}

/* Sweep: a single primary line sweeping in from the left. */
export function SweepAccordion(props: StyledAccordionProps) {
  return (
    <UnderlineShell
      props={props}
      lineStyle={{ mode: "left", lineClass: "h-0.5 bg-primary" }}
    />
  );
}

/* Center: a primary line opening outwards from the centre. */
export function CenterAccordion(props: StyledAccordionProps) {
  return (
    <UnderlineShell
      props={props}
      lineStyle={{ mode: "center", lineClass: "h-0.5 bg-primary" }}
    />
  );
}

/* Grow: a thicker line growing from the left. */
export function GrowAccordion(props: StyledAccordionProps) {
  return (
    <UnderlineShell
      props={props}
      lineStyle={{ mode: "grow", lineClass: "h-1 rounded-full bg-primary" }}
    />
  );
}

/* Double: a two-layer double line (primary plus a soft one below). */
export function DoubleAccordion(props: StyledAccordionProps) {
  return (
    <UnderlineShell
      props={props}
      lineStyle={{
        mode: "left",
        lineClass:
          "h-0.5 bg-primary shadow-[0_3px_0_0_color-mix(in_oklab,var(--color-primary)_35%,transparent)]",
      }}
    />
  );
}

/* Dashed: a dashed primary underline sweeping in from the left. */
export function DashedAccordion(props: StyledAccordionProps) {
  return (
    <UnderlineShell
      props={props}
      lineStyle={{
        mode: "left",
        lineClass: "h-0 border-b-2 border-dashed border-primary",
      }}
    />
  );
}

export default SweepAccordion;
