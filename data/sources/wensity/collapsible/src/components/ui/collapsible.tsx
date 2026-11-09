"use client";

import * as React from "react";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─── Types ─────────────────────────────────────────────────── */

export type CollapsibleVariant = "inline" | "card" | "section" | "sidebar" | "preview";

export interface CollapsibleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  variant?: CollapsibleVariant;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  /** preview variant only: visible height while collapsed, in px. Default 96. */
  previewHeight?: number;
  children: React.ReactNode;
}

export interface CollapsibleTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: React.ReactNode | ((state: { open: boolean }) => React.ReactNode);
  /** Hide the chevron indicator (e.g. when the trigger already communicates state, like preview's "Show more"). */
  hideIcon?: boolean;
}

export type CollapsibleContentProps = React.HTMLAttributes<HTMLDivElement>;

/* ─── Context ───────────────────────────────────────────────── */

type CollapsibleContextValue = {
  variant: CollapsibleVariant;
  previewHeight: number;
  open: boolean;
};

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

function useCollapsibleContext() {
  const ctx = React.useContext(CollapsibleContext);
  if (!ctx) throw new Error("Collapsible compound components must be used within <Collapsible>");
  return ctx;
}

/* ─── Variant Styles ────────────────────────────────────────── */

const rootVariantClasses: Record<CollapsibleVariant, string> = {
  inline: "",
  card: cn(
    "overflow-hidden rounded-[var(--primitive-radius-surface,1rem)] border",
    "border-[var(--border)] bg-[color:var(--primitive-surface-elevated,var(--card))]",
    "[box-shadow:var(--primitive-shadow-raised,0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.12))]",
  ),
  section: cn("border-t first:border-t-0", "border-[color:var(--primitive-border-subtle,color-mix(in_srgb,var(--border)_60%,transparent))]"),
  sidebar: "",
  preview: "relative flex flex-col gap-2",
};

const triggerVariantClasses: Record<CollapsibleVariant, string> = {
  inline: "gap-2 text-[14px] font-medium",
  card: "gap-3 px-4 py-3.5 text-[15px] font-medium",
  section: "gap-3 py-5 text-left",
  sidebar: cn(
    "gap-2 rounded-full px-3 py-2 text-[14px] font-medium",
    "data-[panel-open]:bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
  ),
  preview: "gap-1.5 text-[13px] font-medium",
};

const triggerHoverClasses: Record<CollapsibleVariant, string> = {
  inline: "",
  card: "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
  section: "",
  sidebar: "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] data-[panel-open]:hover:bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
  preview: "",
};

const contentPaddingClasses: Record<CollapsibleVariant, string> = {
  inline: "pt-2",
  card: "px-4 pb-4",
  section: "pb-5",
  sidebar: "py-1 pl-6",
  preview: "",
};

const panelMotionClass = cn(
  "h-[var(--collapsible-panel-height)] overflow-hidden",
  "transition-[height,opacity] duration-300 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "data-[starting-style]:h-0 data-[starting-style]:opacity-0",
  "data-[ending-style]:h-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-200",
  "motion-reduce:transition-none motion-reduce:data-[starting-style]:opacity-100 motion-reduce:data-[ending-style]:opacity-100",
);

/* ─── <Collapsible> ─────────────────────────────────────────── */

export const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      variant = "inline",
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
      previewHeight = 96,
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const handleOpenChange = React.useCallback(
      (next: boolean) => {
        if (!isControlled) setUncontrolledOpen(next);
        onOpenChange?.(next);
      },
      [isControlled, onOpenChange],
    );

    const ctx = React.useMemo<CollapsibleContextValue>(
      () => ({ variant, previewHeight, open }),
      [variant, previewHeight, open],
    );

    const rootStyle =
      variant === "preview"
        ? ({
            ...style,
            "--wensity-collapsible-preview-height": `${previewHeight}px`,
          } as React.CSSProperties)
        : style;

    return (
      <CollapsibleContext.Provider value={ctx}>
        <BaseCollapsible.Root data-wensity-primitive=""
          ref={ref}
          open={open}
          onOpenChange={(next) => handleOpenChange(next)}
          disabled={disabled}
          data-slot="collapsible"
          data-variant={variant}
          className={cn(rootVariantClasses[variant], className)}
          style={rootStyle}
          {...props}
        >
          {children}
        </BaseCollapsible.Root>
      </CollapsibleContext.Provider>
    );
  },
);
Collapsible.displayName = "Collapsible";

/* ─── <CollapsibleTrigger> ──────────────────────────────────── */

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ className, children, hideIcon = false, ...props }, ref) => {
    const { variant, open } = useCollapsibleContext();

    return (
      <BaseCollapsible.Trigger
        ref={ref}
        data-slot="collapsible-trigger"
        className={cn(
          "group/collapsible-trigger flex w-full items-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-left outline-none",
          "text-[var(--foreground)]",
          "transition-colors duration-150 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
          "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          "disabled:pointer-events-none disabled:opacity-45",
          triggerVariantClasses[variant],
          triggerHoverClasses[variant],
          className,
        )}
        {...props}
      >
        {variant === "sidebar" && !hideIcon ? (
          <span
            aria-hidden="true"
            className={cn(
              "flex shrink-0 items-center justify-center text-[var(--muted-foreground)]",
              "transition-transform duration-200 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
              "group-data-[panel-open]/collapsible-trigger:rotate-90",
              "motion-reduce:transition-none",
            )}
          >
            <IconChevronRight className="size-4" stroke={1.9} />
          </span>
        ) : null}
        <span className="flex-1">
          {typeof children === "function" ? children({ open }) : children}
        </span>
        {variant !== "sidebar" && !hideIcon ? (
          <span
            aria-hidden="true"
            className={cn(
              "flex shrink-0 items-center justify-center text-[var(--muted-foreground)]",
              "transition-transform duration-200 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
              "group-data-[panel-open]/collapsible-trigger:rotate-180",
              "motion-reduce:transition-none",
            )}
          >
            <IconChevronDown className="size-4" stroke={1.9} />
          </span>
        ) : null}
      </BaseCollapsible.Trigger>
    );
  },
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

/* ─── <CollapsibleContent> ──────────────────────────────────── */

export const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, children, style, ...props }, ref) => {
    const { variant, previewHeight, open } = useCollapsibleContext();
    const isPreview = variant === "preview";
    const innerRef = React.useRef<HTMLDivElement>(null);
    const [overflows, setOverflows] = React.useState(false);
    const [expandedHeight, setExpandedHeight] = React.useState<number | null>(null);

    React.useLayoutEffect(() => {
      if (!isPreview || !innerRef.current) return;
      const el = innerRef.current;
      const measure = () => {
        const nextHeight = el.scrollHeight;
        setExpandedHeight(nextHeight);
        setOverflows(nextHeight > previewHeight + 1);
      };
      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(el);
      return () => observer.disconnect();
    }, [isPreview, previewHeight, children]);

    if (isPreview) {
      const previewStyle = {
        ...style,
        // Drive peek height ourselves, Base UI's closed height is 0 / hidden,
        // which breaks the "show more" preview contract.
        height: open ? (expandedHeight ?? "auto") : previewHeight,
        overflow: "hidden",
      } as React.CSSProperties;

      return (
        <BaseCollapsible.Panel
          ref={ref}
          keepMounted
          // Preview must stay painted while collapsed so the peek remains visible.
          hidden={false}
          data-slot="collapsible-content"
          className={cn(
            "relative",
            "transition-[height] duration-300 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
            "motion-reduce:transition-none",
            className,
          )}
          style={previewStyle}
          {...props}
        >
          <div ref={innerRef} className={contentPaddingClasses[variant]}>
            {children}
          </div>
          {overflows ? (
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 h-12",
                "bg-gradient-to-t from-[var(--background)] to-transparent",
                "transition-opacity duration-200 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
                open && "opacity-0",
                "motion-reduce:transition-none",
              )}
            />
          ) : null}
        </BaseCollapsible.Panel>
      );
    }

    return (
      <BaseCollapsible.Panel
        ref={ref}
        keepMounted
        data-slot="collapsible-content"
        className={cn(panelMotionClass, className)}
        style={style}
        {...props}
      >
        <div className={contentPaddingClasses[variant]}>{children}</div>
      </BaseCollapsible.Panel>
    );
  },
);
CollapsibleContent.displayName = "CollapsibleContent";
