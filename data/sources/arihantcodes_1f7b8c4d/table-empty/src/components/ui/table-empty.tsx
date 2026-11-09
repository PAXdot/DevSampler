"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ── Inlined empty-state kit (trimmed to what this block needs) ───────────── */

const SPRING_FLUID: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
const SPRING_ENTRANCE: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

const EMPTY_FONT =
  '[font-family:var(--font-inter),Inter,system-ui,sans-serif] antialiased [font-feature-settings:"cv05","ss01"]';

type IconProps = React.SVGProps<SVGSVGElement>;

function Bold({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

function IconDocument(props: IconProps) {
  return (
    <Bold {...props}>
      <path
        transform="translate(3, 2)"
        d="M13.191,0 C16.28,0 18,1.78 18,4.83 L18,15.16 C18,18.26 16.28,20 13.191,20 L4.81,20 C1.77,20 0,18.26 0,15.16 L0,4.83 C0,1.78 1.77,0 4.81,0 Z M5.08,13.74 C4.78,13.71 4.49,13.85 4.33,14.11 C4.17,14.36 4.17,14.69 4.33,14.95 C4.49,15.2 4.78,15.35 5.08,15.31 L12.92,15.31 C13.319,15.27 13.62,14.929 13.62,14.53 C13.62,14.12 13.319,13.78 12.92,13.74 Z M12.92,9.179 L5.08,9.179 C4.649,9.179 4.3,9.53 4.3,9.96 C4.3,10.39 4.649,10.74 5.08,10.74 L12.92,10.74 C13.35,10.74 13.7,10.39 13.7,9.96 C13.7,9.53 13.35,9.179 12.92,9.179 Z M8.069,4.65 L5.08,4.65 L5.08,4.66 C4.649,4.66 4.3,5.01 4.3,5.44 C4.3,5.87 4.649,6.22 5.08,6.22 L8.069,6.22 C8.5,6.22 8.85,5.87 8.85,5.429 C8.85,5 8.5,4.65 8.069,4.65 Z"
      />
    </Bold>
  );
}

function IconPlus(props: IconProps) {
  return (
    <Bold {...props}>
      <path
        transform="translate(2, 2)"
        d="M14.66,0 C18.06,0 20,1.92 20,5.33 L20,14.67 C20,18.06 18.07,20 14.67,20 L5.33,20 C1.92,20 0,18.06 0,14.67 L0,5.33 C0,1.92 1.92,0 5.33,0 Z M9.99,5.51 C9.53,5.51 9.16,5.88 9.16,6.34 L9.16,9.16 L6.33,9.16 C6.11,9.16 5.9,9.25 5.74,9.4 C5.59,9.56 5.5,9.769 5.5,9.99 C5.5,10.45 5.87,10.82 6.33,10.83 L9.16,10.83 L9.16,13.66 C9.16,14.12 9.53,14.49 9.99,14.49 C10.45,14.49 10.82,14.12 10.82,13.66 L10.82,10.83 L13.66,10.83 C14.12,10.82 14.49,10.45 14.49,9.99 C14.49,9.53 14.12,9.16 13.66,9.16 L10.82,9.16 L10.82,6.34 C10.82,5.88 10.45,5.51 9.99,5.51 Z"
      />
    </Bold>
  );
}

function IconUpload(props: IconProps) {
  return (
    <Bold {...props}>
      <path
        transform="translate(2, 2)"
        d="M0,11.287 C0,8.876 1.878,6.896 4.231,6.785 L4.44,6.78 L9.23,6.78 L9.23,12.885 C9.23,13.322 9.57,13.668 10,13.668 C10.385,13.668 10.711,13.378 10.763,12.992 L10.77,12.885 L10.77,6.78 L15.55,6.78 C17.93,6.78 19.885,8.691 19.995,11.094 L20,11.308 L20,16.263 C20,18.684 18.122,20.664 15.769,20.775 L15.56,20.78 L4.45,20.78 C2.06,20.78 0.114,18.86 0.005,16.465 L0,16.253 Z M6.55,4.24 C6.268,3.967 6.243,3.538 6.466,3.236 L6.54,3.15 L9.45,0.23 C9.6,0.08 9.79,0 10,0 C10.16,0 10.32,0.051 10.449,0.148 L10.54,0.23 L13.45,3.15 C13.6,3.3 13.68,3.5 13.68,3.69 C13.68,3.89 13.6,4.09 13.45,4.24 C13.177,4.513 12.748,4.538 12.446,4.314 L12.36,4.24 L10.77,2.64 L10.77,6.78 L9.23,6.78 L9.23,2.64 L7.64,4.24 C7.34,4.54 6.85,4.54 6.55,4.24 Z"
      />
    </Bold>
  );
}

interface EmptyActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  emphasis?: "primary" | "secondary" | "quiet";
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
}

function EmptyAction({
  emphasis = "primary",
  icon,
  trailing,
  className,
  children,
  ...props
}: EmptyActionProps) {
  return (
    <Button
      type="button"
      variant={
        emphasis === "primary"
          ? "default"
          : emphasis === "secondary"
            ? "outline"
            : "ghost"
      }
      size="sm"
      className={cn("gap-1.5 [&_svg]:size-3.5", className)}
      {...props}
    >
      {icon}
      {children}
      {trailing}
    </Button>
  );
}

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  footnote?: React.ReactNode;
  medallionSize?: "sm" | "md";
  backdrop?: "none" | (string & {});
  tone?: "neutral" | "positive" | "caution" | "critical";
  children?: React.ReactNode;
}

const TONE_GLYPH: Record<string, string> = {
  neutral: "text-neutral-800 dark:text-neutral-100",
  positive: "text-emerald-600 dark:text-emerald-400",
  caution: "text-amber-600 dark:text-amber-400",
  critical: "text-red-600 dark:text-red-400",
};

function EmptyState({
  icon,
  title,
  description,
  actions,
  footnote,
  medallionSize = "md",
  tone = "neutral",
  children,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_ENTRANCE}
      className="flex max-w-[420px] flex-col items-center gap-3 py-6 text-center"
    >
      <div
        className={cn(
          "grid place-items-center rounded-2xl border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/[0.1] dark:bg-neutral-900",
          medallionSize === "sm"
            ? "size-11 [&_svg]:size-5"
            : "size-14 [&_svg]:size-6",
          TONE_GLYPH[tone],
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[14.5px] font-semibold tracking-[-0.1px] text-neutral-900 dark:text-neutral-50">
          {title}
        </p>
        {description && (
          <p className="text-[13px] leading-5 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>
      {children}
      {actions && <div className="flex items-center gap-2 pt-1">{actions}</div>}
      {footnote && (
        <p className="text-[12px] text-neutral-500 dark:text-neutral-500">
          {footnote}
        </p>
      )}
    </motion.div>
  );
}

/**
 * Re-seeds a piece of local state when a prop changes.
 *
 * This block keeps state of its own (rows that were added, a loading flag)
 * that is driven by the `variant` prop on the specimen page. Resetting that
 * state in an effect costs a second render with the stale value painted in
 * between; comparing the key during render settles before paint.
 */
function usePropState<T>(
  seed: T,
  key: unknown,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(seed);
  const [seen, setSeen] = React.useState(key);

  if (!Object.is(seen, key)) {
    setSeen(key);
    setValue(seed);
  }

  return [value, setValue];
}

export type TableEmptyVariant = "Overlay" | "Inline" | "Loading";

export interface TableColumn {
  id: string;
  label: string;
  align?: "left" | "right";
  width?: string;
}

export interface TableRowSeed {
  id: string;
  cells: string[];
}

export interface TableEmptyProps {
  panelTitle?: string;
  title?: string;
  description?: string;
  columns?: TableColumn[];
  /** Rows the demo inserts, one per press, so the empty state can be left. */
  seedRows?: TableRowSeed[];
  addLabel?: string;
  importLabel?: string;
  onAdd?: () => void;
  variant?: TableEmptyVariant;
  className?: string;
}

const COLUMNS: TableColumn[] = [
  { id: "customer", label: "Customer" },
  { id: "plan", label: "Plan", width: "22%" },
  { id: "seats", label: "Seats", align: "right", width: "14%" },
  { id: "mrr", label: "MRR", align: "right", width: "18%" },
];

const SEED: TableRowSeed[] = [
  { id: "r1", cells: ["Northbend Labs", "Team", "12", "$708"] },
  { id: "r2", cells: ["Harbour Freight", "Pro", "4", "$96"] },
  { id: "r3", cells: ["Ostrom & Co", "Enterprise", "86", "$4,300"] },
];

export function TableEmpty({
  panelTitle = "Accounts",
  title = "No accounts yet",
  description = "The table keeps its columns so you can see the shape of what goes here. Add a row by hand or import the ones you already have.",
  columns = COLUMNS,
  seedRows = SEED,
  addLabel = "Add row",
  importLabel = "Import CSV",
  onAdd,
  variant = "Overlay",
  className,
}: TableEmptyProps) {
  const [rows, setRows] = usePropState<TableRowSeed[]>([], variant);
  const [loading, setLoading] = usePropState(variant === "Loading", variant);
  const reduced = useReducedMotion();

  /* The skeleton resolves on a timer; the effect ends the loading state rather
     than starting it, so nothing is set synchronously on mount. */
  React.useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), reduced ? 250 : 1400);
    return () => clearTimeout(timer);
  }, [loading, reduced, setLoading]);

  function addRow() {
    const next = seedRows[rows.length];
    if (!next) return;
    setRows((current) => [...current, next]);
    onAdd?.();
  }

  const empty = rows.length === 0;

  return (
    <section
      className={cn(
        EMPTY_FONT,
        "w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white",
        "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_40px_-28px_rgba(0,0,0,0.35)]",
        "dark:border-white/[0.09] dark:bg-neutral-950 dark:shadow-none",
        className,
      )}
    >
      <header className="flex items-center justify-between gap-3 border-b border-black/[0.06] px-4 py-3 dark:border-white/[0.07]">
        <div className="min-w-0">
          <p className="truncate text-[14px] font-semibold tracking-[-0.1px] text-neutral-800 dark:text-neutral-100">
            {panelTitle}
          </p>
          <p className="mt-0.5 font-mono text-[12.5px] tabular-nums text-neutral-600 dark:text-neutral-400">
            {loading ? "loading…" : `${rows.length} rows`}
          </p>
        </div>
        <EmptyAction
          emphasis="secondary"
          icon={<IconPlus />}
          onClick={addRow}
          disabled={rows.length >= seedRows.length}
          className="h-8 px-3 text-[13.5px]"
        >
          {addLabel}
        </EmptyAction>
      </header>

      <div className="relative">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b border-black/[0.06] dark:border-white/[0.07]">
              {columns.map((column) => (
                <th
                  key={column.id}
                  scope="col"
                  style={{ width: column.width }}
                  className={cn(
                    "px-4 py-2.5 text-[12.5px] font-medium uppercase tracking-[0.06em] text-neutral-600 dark:text-neutral-400",
                    column.align === "right" ? "text-right" : "text-left",
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {rows.map((row) => (
                <motion.tr
                  key={row.id}
                  layout
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={SPRING_ENTRANCE}
                  className="border-b border-black/[0.04] last:border-0 dark:border-white/[0.05]"
                >
                  {row.cells.map((cell, index) => (
                    <td
                      key={columns[index]?.id ?? index}
                      className={cn(
                        "truncate px-4 py-3 text-[14px] text-neutral-700 dark:text-neutral-200",
                        columns[index]?.align === "right" &&
                          "text-right font-mono tabular-nums",
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>

            {/* Ghost rows hold the table's height so the overlay never floats in
                a 40px strip, and so adding the first row does not jolt the page. */}
            {empty &&
              Array.from({ length: 6 }).map((_, index) => (
                <tr
                  key={index}
                  className="border-b border-black/[0.04] last:border-0 dark:border-white/[0.05]"
                >
                  {columns.map((column) => (
                    <td key={column.id} className="px-4 py-3.5">
                      <motion.span
                        aria-hidden
                        initial={{ opacity: 0 }}
                        animate={
                          loading && !reduced
                            ? { opacity: [0.18, 0.4, 0.18] }
                            : { opacity: Math.max(0.08, 0.28 - index * 0.06) }
                        }
                        transition={
                          loading && !reduced
                            ? {
                                duration: 1.2,
                                repeat: Infinity,
                                delay: index * 0.1,
                              }
                            : SPRING_FLUID
                        }
                        className={cn(
                          "block h-2 rounded-full bg-neutral-400 dark:bg-white/40",
                          column.align === "right" ? "ml-auto w-10" : "w-[70%]",
                        )}
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>

        <AnimatePresence>
          {empty && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={SPRING_FLUID}
              className={cn(
                "inset-x-0 bottom-0 flex items-center justify-center px-6",
                variant === "Inline"
                  ? "relative py-10"
                  : /* Starts below the header row: the column labels are the
                       one thing an empty table still has to say. */
                    "absolute top-10 bg-gradient-to-b from-white/85 via-white/98 to-white dark:from-neutral-950/85 dark:via-neutral-950/98 dark:to-neutral-950",
              )}
            >
              <EmptyState
                icon={<IconDocument />}
                medallionSize="sm"
                backdrop="none"
                title={title}
                description={description}
                actions={
                  <>
                    <EmptyAction icon={<IconPlus />} onClick={addRow}>
                      {addLabel}
                    </EmptyAction>
                    <EmptyAction emphasis="secondary" icon={<IconUpload />}>
                      {importLabel}
                    </EmptyAction>
                  </>
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TableEmpty;
