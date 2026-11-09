"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as MenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, type ColumnDef, type RowSelectionState, type SortingState, type VisibilityState, useReactTable } from "@tanstack/react-table";
import { AlertTriangle, ArrowDown, ArrowUp, Check, CheckCircle2, ChevronLeft, ChevronRight, ChevronsUpDown, Columns3, Eye, EyeOff, Inbox, Loader2, Minus, Search, X } from "lucide-react";

/* Layro System · DataTable. Composed from the Layro UI source into one file.
   Themed with shadcn/ui tokens; follows your globals.css in light and dark. */

/* ------------------------------------------------------------ tokens -- */

const SQUIRCLE = "[corner-shape:squircle]";

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CONTROL = {
  sm: "h-8 rounded-[9px] px-2.5 text-[12.5px]",
  md: "h-9 rounded-[10px] px-3 text-[13px]",
  lg: "h-10 rounded-[11px] px-3.5 text-[13.5px]",
} as const;

type ControlSize = keyof typeof CONTROL;

const FIELD =
  "bg-card text-foreground ring-1 ring-inset ring-input outline-none transition-[box-shadow,background-color] " +
  "placeholder:text-muted-foreground hover:ring-foreground/25 " +
  "focus-visible:ring-2 focus-visible:ring-ring " +
  "aria-invalid:ring-destructive/60 aria-invalid:focus-visible:ring-destructive/50 " +
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:ring-input";

const LAYER = {
  /** Dropdowns and popovers anchored to a trigger. */
  popover: 60,
  /** Dialog scrim and panel. */
  dialog: 70,
  /** Toasts, which must clear an open dialog. */
  toast: 80,
} as const;

/* ============================================================= field == */

/* ==========================================================================
   Field and Label

   The wiring every form control needs and most forms get wrong: the label
   points at the control, the hint and the error are announced with it, and an
   error marks the control invalid. Field does all three through context, so a
   control inside it needs no ids:

     <Field label="Work email" hint="We send the receipt here" error={err}>
       <Input type="email" />
     </Field>

   The error replaces the hint rather than stacking under it — two lines of
   grey-and-red text under one input is where people stop reading.
   ========================================================================== */

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(function Label({ className, ...props }, ref) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-[12.5px] leading-none font-medium text-foreground select-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});

interface FieldContextValue {
  id: string;
  describedBy?: string;
  invalid: boolean;
  required: boolean;
}

const FieldContext = React.createContext<FieldContextValue | null>(null);

/**
 * The props a control inside a Field should carry. Every Layro control calls
 * this; call it too if you put your own control in a Field.
 */
export function useFieldProps<T extends { id?: string; "aria-describedby"?: string; "aria-invalid"?: unknown; required?: boolean }>(
  props: T,
): T {
  const field = React.useContext(FieldContext);
  if (!field) return props;
  return {
    ...props,
    id: props.id ?? field.id,
    "aria-describedby": [field.describedBy, props["aria-describedby"]].filter(Boolean).join(" ") || undefined,
    "aria-invalid": props["aria-invalid"] ?? (field.invalid || undefined),
    required: props.required ?? (field.required || undefined),
  };
}

export interface FieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  label: React.ReactNode;
  /** One line under the control. Replaced by `error` when there is one. */
  hint?: React.ReactNode;
  /** Marks the control invalid and is announced with it. */
  error?: React.ReactNode;
  /** Adds "Optional" beside the label; the rarer case gets the mark. */
  optional?: boolean;
  required?: boolean;
  /** Put the label beside the control instead of above — for checkboxes and switches. */
  inline?: boolean;
  children: React.ReactNode;
}

export function Field({
  label,
  hint,
  error,
  optional,
  required = false,
  inline = false,
  className,
  children,
  ...rest
}: FieldProps) {
  const id = React.useId();
  const msgId = `${id}-msg`;
  const message = error ?? hint;
  const value = React.useMemo<FieldContextValue>(
    () => ({ id, describedBy: message ? msgId : undefined, invalid: Boolean(error), required }),
    [id, msgId, message, error, required],
  );

  const labelEl = (
    <Label htmlFor={id} className="flex items-center gap-1.5">
      {label}
      {optional && <span className="font-normal text-muted-foreground">Optional</span>}
    </Label>
  );

  return (
    <FieldContext.Provider value={value}>
      {inline ? (
        /* Two columns: the control, then the label with its hint under it.
           The hint starts where the label starts, whatever the control's
           width: a checkbox, a switch or a large switch. */
        <div className={cn("grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2.5 gap-y-1", className)} {...rest}>
          {children}
          {labelEl}
          {message && (
            <p id={msgId} className={cn("col-start-2 text-[12px] leading-snug", error ? "text-red-700 dark:text-red-400" : "text-muted-foreground")}>
              {message}
            </p>
          )}
        </div>
      ) : (
        <div className={cn("grid gap-1.5", className)} {...rest}>
          {labelEl}
          {children}
          {message && (
            <p id={msgId} className={cn("text-[12px] leading-snug", error ? "text-red-700 dark:text-red-400" : "text-muted-foreground")}>
              {message}
            </p>
          )}
        </div>
      )}
    </FieldContext.Provider>
  );
}

/* ========================================================== checkbox == */

/* ==========================================================================
   Checkbox

   On, off, or indeterminate — the third state is for a "select all" whose
   children disagree, and it is a state the box reports, not one a person can
   click into. Clicking an indeterminate box turns everything on.

   A checkbox commits nothing on its own. If toggling it acts immediately
   ("Email me when…"), that is a Switch.
   ========================================================================== */

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  function Checkbox({ className, ...props }, ref) {
    const fieldProps = useFieldProps(props);
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer grid size-4 shrink-0 cursor-pointer place-items-center rounded-[5px] bg-card ring-1 ring-inset ring-input transition-colors",
          "hover:ring-foreground/35",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:ring-primary",
          "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:ring-primary",
          "aria-invalid:ring-destructive/70 disabled:cursor-not-allowed disabled:opacity-50",
          FOCUS,
          "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        {...fieldProps}
      >
        <CheckboxPrimitive.Indicator className="grid place-items-center">
          {fieldProps.checked === "indeterminate" ? (
            <Minus className="size-3" strokeWidth={3} aria-hidden />
          ) : (
            <Check className="size-3" strokeWidth={3} aria-hidden />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

/* ============================================================= input == */

/* ==========================================================================
   Input

   A text field, plus the three that differ in behaviour rather than looks:

     <Input />                 any text type — email, url, number, tel…
     <PasswordInput />         reveal toggle, and it says what it will do
     <SearchInput />           leading search icon, clear button, Escape clears

   Adornments (`leading`, `trailing`) sit inside the ring, so an icon or a unit
   ("USD", "%", ".com") reads as part of the field rather than stuck to it.
   Clicking an adornment focuses the input — the whole well is the target.
   ========================================================================== */

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Matches Button and Select of the same size. Default `md`. */
  size?: ControlSize;
  /** Inside the well, before the text: an icon or a prefix like "$". */
  leading?: React.ReactNode;
  /** Inside the well, after the text: a unit, a shortcut hint, a button. */
  trailing?: React.ReactNode;
  /** Classes for the well when adornments are used; `className` goes on the input. */
  wrapperClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", leading, trailing, className, wrapperClassName, type = "text", ...props },
  ref,
) {
  const fieldProps = useFieldProps(props);
  const inner = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => inner.current as HTMLInputElement);

  if (!leading && !trailing) {
    return (
      <input
        ref={inner}
        type={type}
        className={cn("w-full min-w-0", CONTROL[size], FIELD, SQUIRCLE, "file:mr-2 file:border-0 file:bg-transparent file:font-medium", className)}
        {...fieldProps}
      />
    );
  }

  /* With adornments the ring moves to the wrapper, and follows the input's
     state through :has() — hover, focus-visible, invalid and disabled. */
  return (
    <div
      onPointerDown={(e) => {
        if (e.target !== inner.current && !(e.target as HTMLElement).closest("button")) {
          e.preventDefault();
          inner.current?.focus();
        }
      }}
      className={cn(
        "flex w-full min-w-0 cursor-text items-center gap-2 bg-card text-foreground ring-1 ring-inset ring-input transition-[box-shadow]",
        "hover:ring-foreground/25 has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-ring",
        "has-[input[aria-invalid=true]]:ring-destructive/60 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50",
        "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        CONTROL[size],
        SQUIRCLE,
        wrapperClassName,
      )}
    >
      {leading && <span className="flex shrink-0 items-center text-muted-foreground">{leading}</span>}
      <input
        ref={inner}
        type={type}
        className={cn(
          "h-full w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
          className,
        )}
        {...fieldProps}
      />
      {trailing && <span className="flex shrink-0 items-center text-muted-foreground">{trailing}</span>}
    </div>
  );
});

/* ------------------------------------------------------------ password -- */

export interface PasswordInputProps extends Omit<InputProps, "type" | "trailing"> {}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(function PasswordInput(props, ref) {
  const [shown, setShown] = React.useState(false);
  return (
    <Input
      ref={ref}
      type={shown ? "text" : "password"}
      autoComplete={props.autoComplete ?? "current-password"}
      trailing={
        <button
          type="button"
          onClick={() => setShown((s) => !s)}
          aria-label={shown ? "Hide password" : "Show password"}
          aria-pressed={shown}
          className="-mr-1 grid size-6 cursor-pointer place-items-center rounded-[6px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {shown ? <EyeOff /> : <Eye />}
        </button>
      }
      {...props}
    />
  );
});

/* -------------------------------------------------------------- search -- */

export interface SearchInputProps extends Omit<InputProps, "type" | "leading" | "value" | "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  /** Called with the text on every keystroke, and with "" when cleared. */
  onValueChange?: (value: string) => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { value, defaultValue = "", onValueChange, onKeyDown, placeholder = "Search", ...props },
  ref,
) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value ?? inner;
  const set = (v: string) => {
    if (value === undefined) setInner(v);
    onValueChange?.(v);
  };
  const local = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => local.current as HTMLInputElement);

  return (
    <Input
      ref={local}
      type="search"
      role="searchbox"
      placeholder={placeholder}
      value={current}
      onChange={(e) => set(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Escape" && current) {
          e.preventDefault();
          set("");
        }
        onKeyDown?.(e);
      }}
      leading={<Search />}
      trailing={
        current ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              set("");
              local.current?.focus();
            }}
            className="-mr-1 grid size-6 cursor-pointer place-items-center rounded-[6px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <X />
          </button>
        ) : undefined
      }
      className="[&::-webkit-search-cancel-button]:hidden"
      {...props}
    />
  );
});

/* ============================================================ button == */

/* ==========================================================================
   Button

   One action. Six variants, and the rule for choosing is how much of the
   screen's attention the action deserves, not how it should look:

     primary      the one thing this surface exists to do — one per view
     secondary    a real alternative to the primary ("Save draft")
     outline      tertiary; sits beside the others without competing
     ghost        in toolbars and rows, where a filled button is noise
     destructive  cannot be undone from here
     link         navigation dressed as an action, inline in text

   `loading` keeps the button's width, swaps the icon for a spinner and marks
   it busy — the label stays, because "Saving…" in place of "Save" makes the
   button jump. A loading button is disabled for clicks but stays focusable,
   so a keyboard user does not lose their place when the request starts.
   ========================================================================== */

const VARIANT = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary/70",
  outline: "bg-card text-foreground ring-1 ring-inset ring-input hover:bg-accent",
  ghost: "text-foreground hover:bg-accent",
  destructive: "bg-red-600 text-white hover:bg-red-600/90 dark:bg-red-600/60 dark:hover:bg-red-600/70",
  link: "h-auto! px-0! text-foreground underline-offset-4 hover:underline",
} as const;

export type ButtonVariant = keyof typeof VARIANT;

const ICON_SIZE: Record<ControlSize, string> = {
  sm: "size-8 rounded-[9px]",
  md: "size-9 rounded-[10px]",
  lg: "size-10 rounded-[11px]",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** How much attention the action deserves. Default `primary`. */
  variant?: ButtonVariant;
  /** Matches Input and Select of the same size. Default `md`. */
  size?: ControlSize;
  /** Square, for a single icon. Give it an `aria-label` — or use IconButton, which requires one. */
  icon?: boolean;
  /** Shows a spinner in place of the leading icon and marks the button busy. */
  loading?: boolean;
  /** Render the child element (a link, say) with the button's styling instead of a `<button>`. */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    icon = false,
    loading = false,
    asChild = false,
    disabled,
    className,
    children,
    onClick,
    type,
    ...rest
  },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  const busy = loading && !asChild;

  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : (type ?? "button")}
      data-variant={variant}
      aria-busy={busy || undefined}
      aria-disabled={busy || undefined}
      disabled={disabled}
      onClick={busy ? (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault() : onClick}
      className={cn(
        "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 font-medium whitespace-nowrap select-none",
        "transition-[background-color,color,box-shadow,opacity] duration-150",
        "disabled:pointer-events-none disabled:opacity-50 aria-disabled:cursor-progress",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        icon ? ICON_SIZE[size] : CONTROL[size],
        VARIANT[variant],
        FOCUS,
        SQUIRCLE,
        className,
      )}
      {...rest}
    >
      {asChild ? (
        children
      ) : (
        <>
          {busy && <Loader2 aria-hidden className="motion-safe:animate-spin" />}
          {busy && icon ? null : children}
        </>
      )}
    </Comp>
  );
});

export interface IconButtonProps extends Omit<ButtonProps, "icon" | "aria-label"> {
  /** Required: an icon-only button has no other name. Also shown as the tooltip text by callers. */
  label: string;
}

/** A square Button for a single icon, which cannot be created without an accessible name. */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, variant = "ghost", ...rest },
  ref,
) {
  return <Button ref={ref} icon variant={variant} aria-label={label} {...rest} />;
});

/* ======================================================== pagination == */

/* ==========================================================================
   Pagination

   Where you are in a long list, and how to move. The page numbers keep the
   first and last page and the neighbours of the current one, with an ellipsis
   for the gap, so the control never changes width as you page — a pager that
   grows and shrinks moves the Next button out from under the cursor.

     <Pagination page={page} pageCount={24} onPageChange={setPage} />
     <Pagination page={page} pageCount={24} onPageChange={setPage}
                 total={473} pageSize={20} />        // adds "41–60 of 473"

   It is a <nav> with a name, the current page is `aria-current="page"`, and
   Previous / Next are real buttons that disable at the ends. Below 640px the
   numbers give way to "Page 6 of 24" so the row never overflows a phone.
   ========================================================================== */

/** Page numbers to show, with "gap" for an ellipsis. Always 7 slots when pageCount > 7. */
export function pageItems(page: number, pageCount: number, siblings = 1): Array<number | "gap"> {
  const slots = siblings * 2 + 5;
  if (pageCount <= slots) return Array.from({ length: pageCount }, (_, i) => i + 1);
  const left = Math.max(page - siblings, 1);
  const right = Math.min(page + siblings, pageCount);
  const showLeftGap = left > 3;
  const showRightGap = right < pageCount - 2;
  if (!showLeftGap) {
    const count = siblings * 2 + 3;
    return [...Array.from({ length: count }, (_, i) => i + 1), "gap", pageCount];
  }
  if (!showRightGap) {
    const count = siblings * 2 + 3;
    return [1, "gap", ...Array.from({ length: count }, (_, i) => pageCount - count + i + 1)];
  }
  return [1, "gap", ...Array.from({ length: right - left + 1 }, (_, i) => left + i), "gap", pageCount];
}

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /** 1-based. */
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Total rows — with `pageSize`, shows "41–60 of 473". */
  total?: number;
  pageSize?: number;
  /** Pages either side of the current one. Default 1. */
  siblings?: number;
  /** Hide the numbers and show "Page 3 of 24" — for narrow spaces. */
  compact?: boolean;
  /** What is being paged, for the nav's name: "Invoices". */
  label?: string;
}

const CELL = cn(
  "inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-[9px] px-2 text-[12.5px] font-medium tabular-nums transition-colors",
  "text-foreground/80 hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40",
  FOCUS,
  SQUIRCLE,
);

export function Pagination({
  page,
  pageCount,
  onPageChange,
  total,
  pageSize,
  siblings = 1,
  compact = false,
  label = "Pagination",
  className,
  ...rest
}: PaginationProps) {
  const go = (p: number) => onPageChange(Math.min(Math.max(1, p), Math.max(1, pageCount)));
  const from = total !== undefined && pageSize ? Math.min((page - 1) * pageSize + 1, total) : null;
  const to = total !== undefined && pageSize ? Math.min(page * pageSize, total) : null;

  return (
    <nav aria-label={label} className={cn("flex flex-wrap items-center justify-between gap-3", className)} {...rest}>
      {from !== null ? (
        <p className="text-[12.5px] text-muted-foreground tabular-nums" aria-live="polite">
          {total === 0 ? "No results" : <><span className="text-foreground">{from}–{to}</span> of {total!.toLocaleString()}</>}
        </p>
      ) : (
        <span />
      )}
      <div className="flex items-center gap-1">
        <button type="button" className={cn(CELL, "gap-1 pl-1.5")} onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous page">
          <ChevronLeft className="size-4" aria-hidden />
          <span className="max-sm:sr-only">Previous</span>
        </button>
        <span className={cn("px-2 text-[12.5px] text-muted-foreground tabular-nums", !compact && "sm:hidden")}>
          Page <span className="text-foreground">{page}</span> of {pageCount}
        </span>
        {!compact && (
          <ul className="flex items-center gap-1 max-sm:hidden">
            {pageItems(page, pageCount, siblings).map((it, i) =>
              it === "gap" ? (
                <li key={`gap-${i}`} aria-hidden className="grid h-8 w-6 place-items-center text-[12.5px] text-muted-foreground">
                  …
                </li>
              ) : (
                <li key={it}>
                  <button
                    type="button"
                    onClick={() => go(it)}
                    aria-current={it === page ? "page" : undefined}
                    aria-label={`Page ${it}`}
                    className={cn(CELL, it === page && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground")}
                  >
                    {it}
                  </button>
                </li>
              ),
            )}
          </ul>
        )}
        <button type="button" className={cn(CELL, "gap-1 pr-1.5")} onClick={() => go(page + 1)} disabled={page >= pageCount} aria-label="Next page">
          <span className="max-sm:sr-only">Next</span>
          <ChevronRight className="size-4" aria-hidden />
        </button>
      </div>
    </nav>
  );
}

/* ============================================================= state == */

/* ==========================================================================
   State — empty, error, success, loading — and Skeleton

   The screens nobody designs until they ship broken. One component, four
   kinds, and one rule each:

     empty     say what goes here and give the one action that fills it
     error     say what failed in plain words, and offer Retry — never a code alone
     success   say what happened and what now; do not make them hunt for "Next"
     loading   for waits you cannot shape; prefer Skeleton when you can

     <State kind="empty" title="No invoices yet"
            description="Your first one appears after the trial ends on 14 Oct."
            action={<Button>Add payment method</Button>} />

   Errors are announced (role="alert"); loading is announced once, politely.
   ========================================================================== */

const ICON = {
  empty: Inbox,
  error: AlertTriangle,
  success: CheckCircle2,
  loading: Loader2,
} as const;

const TINT = {
  empty: "bg-muted text-muted-foreground",
  error: "bg-destructive/10 text-red-700 dark:text-red-400",
  success: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
  loading: "bg-muted text-muted-foreground",
} as const;

export type StateKind = keyof typeof ICON;

export interface StateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  kind?: StateKind;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Replace the default icon. */
  icon?: React.ReactNode;
  /** The primary action — one. */
  action?: React.ReactNode;
  /** A quieter second action, a link to docs. */
  secondaryAction?: React.ReactNode;
  /** Draw a dashed frame — for an empty region inside a page. */
  framed?: boolean;
  size?: "sm" | "md";
}

export function State({
  kind = "empty",
  title,
  description,
  icon,
  action,
  secondaryAction,
  framed = false,
  size = "md",
  className,
  ...rest
}: StateProps) {
  const Icon = ICON[kind];
  const live = kind === "error" ? { role: "alert" as const } : kind === "loading" ? { role: "status" as const, "aria-live": "polite" as const } : {};
  return (
    <div
      data-state-kind={kind}
      {...live}
      className={cn(
        "flex flex-col items-center text-center",
        size === "sm" ? "gap-2 px-4 py-6" : "gap-3 px-6 py-10",
        framed && cn("rounded-[14px] border border-dashed border-input", SQUIRCLE),
        className,
      )}
      {...rest}
    >
      <span className={cn("grid place-items-center rounded-[12px]", size === "sm" ? "size-9" : "size-11", TINT[kind], SQUIRCLE)}>
        {icon ?? <Icon aria-hidden className={cn(size === "sm" ? "size-4" : "size-5", kind === "loading" && "motion-safe:animate-spin")} />}
      </span>
      <div className="grid max-w-[40ch] gap-1">
        <p className={cn("font-semibold text-foreground", size === "sm" ? "text-[13px]" : "text-[14.5px]")}>{title}</p>
        {description && <p className="text-[12.5px] leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {(action || secondaryAction) && (
        <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------- skeleton -- */

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render lines of text-shaped bars. */
  lines?: number;
}

/**
 * A grey shape where content is about to be. Match the layout it replaces —
 * a skeleton shaped like the real thing is what makes a load feel short.
 * Hidden from screen readers; announce the loading on the region instead.
 */
export function Skeleton({ className, lines, ...rest }: SkeletonProps) {
  if (lines) {
    return (
      <div aria-hidden className={cn("grid gap-2", className)} {...rest}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className="h-3 rounded-full bg-foreground/[0.07] motion-safe:animate-pulse"
            style={{ width: i === lines - 1 && lines > 1 ? "62%" : "100%" }}
          />
        ))}
      </div>
    );
  }
  return <div aria-hidden className={cn("rounded-[8px] bg-foreground/[0.07] motion-safe:animate-pulse", className)} {...rest} />;
}

/* ===================================================== dropdown-menu == */

/* ==========================================================================
   Dropdown Menu

   Actions on one thing, behind one button. The composable, shadcn-shaped
   version of Menu: use Menu when you have a list of items, this when you need
   groups, checkable items, radio items or submenus.

     <DropdownMenu>
       <DropdownMenuTrigger asChild><IconButton label="More"><MoreHorizontal /></IconButton></DropdownMenuTrigger>
       <DropdownMenuContent align="end">
         <DropdownMenuItem shortcut="⌘D">Duplicate</DropdownMenuItem>
         <DropdownMenuSeparator />
         <DropdownMenuItem danger>Delete</DropdownMenuItem>
       </DropdownMenuContent>
     </DropdownMenu>

   Destructive items go last, after a separator. "Delete" directly under
   "Copy link" is how things get deleted by a slipped click.
   ========================================================================== */

export const DropdownMenu = MenuPrimitive.Root;
export const DropdownMenuTrigger = MenuPrimitive.Trigger;
export const DropdownMenuGroup = MenuPrimitive.Group;
export const DropdownMenuSub = MenuPrimitive.Sub;
export const DropdownMenuRadioGroup = MenuPrimitive.RadioGroup;

const SURFACE = cn(
  "min-w-[180px] overflow-hidden rounded-[12px] bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border",
  "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=closed]:zoom-out-95",
  "data-[side=top]:[--pop-y:4px]",
  SQUIRCLE,
);

const ITEM =
  "relative flex cursor-pointer items-center gap-2 rounded-[8px] px-2.5 py-1.5 text-[13px] outline-none select-none " +
  "data-[highlighted]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " +
  "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground";

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
>(function DropdownMenuContent({ className, sideOffset = 6, style, ...props }, ref) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        collisionPadding={8}
        style={{ zIndex: LAYER.popover, ...style }}
        className={cn(SURFACE, className)}
        {...props}
      />
    </MenuPrimitive.Portal>
  );
});

export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> {
  /** Red text and icon. For actions that cannot be undone from here. */
  danger?: boolean;
  /** Shown dimmed on the right. Display only — wire the key yourself. */
  shortcut?: string;
  inset?: boolean;
}

export const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof MenuPrimitive.Item>, DropdownMenuItemProps>(
  function DropdownMenuItem({ className, danger, shortcut, inset, children, ...props }, ref) {
    return (
      <MenuPrimitive.Item
        ref={ref}
        className={cn(
          ITEM,
          inset && "pl-8",
          danger && "text-red-700 dark:text-red-400 data-[highlighted]:bg-destructive/10 [&_svg]:text-red-700 [&_svg]:dark:text-red-400",
          className,
        )}
        {...props}
      >
        {children}
        {shortcut && <span className="ml-auto pl-4 text-[11.5px] tracking-wide text-muted-foreground">{shortcut}</span>}
      </MenuPrimitive.Item>
    );
  },
);

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem({ className, children, ...props }, ref) {
  return (
    <MenuPrimitive.CheckboxItem ref={ref} className={cn(ITEM, "pl-8", className)} {...props}>
      <span className="absolute left-2.5 flex size-4 items-center justify-center">
        <MenuPrimitive.ItemIndicator>
          <Check className="text-foreground!" />
        </MenuPrimitive.ItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
});

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>
>(function DropdownMenuRadioItem({ className, children, ...props }, ref) {
  return (
    <MenuPrimitive.RadioItem ref={ref} className={cn(ITEM, "pl-8", className)} {...props}>
      <span className="absolute left-2.5 flex size-4 items-center justify-center">
        <MenuPrimitive.ItemIndicator>
          <span className="block size-1.5 rounded-full bg-foreground" />
        </MenuPrimitive.ItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
});

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Label> & { inset?: boolean }
>(function DropdownMenuLabel({ className, inset, ...props }, ref) {
  return (
    <MenuPrimitive.Label
      ref={ref}
      className={cn("px-2.5 pt-2 pb-1 text-[10.5px] font-semibold tracking-[0.08em] text-muted-foreground uppercase", inset && "pl-8", className)}
      {...props}
    />
  );
});

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return <MenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />;
});

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger>
>(function DropdownMenuSubTrigger({ className, children, ...props }, ref) {
  return (
    <MenuPrimitive.SubTrigger ref={ref} className={cn(ITEM, "data-[state=open]:bg-accent", className)} {...props}>
      {children}
      <ChevronRight className="ml-auto" aria-hidden />
    </MenuPrimitive.SubTrigger>
  );
});

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent>
>(function DropdownMenuSubContent({ className, style, ...props }, ref) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.SubContent
        ref={ref}
        style={{ zIndex: LAYER.popover, ...style }}
        className={cn(SURFACE, "[--pop-y:0px]", className)}
        {...props}
      />
    </MenuPrimitive.Portal>
  );
});

/* ======================================================== data-table == */

/* ==========================================================================
   Data Table

   TanStack Table underneath — the headless engine for sorting, filtering,
   selection and paging — with the Layro surface on top. You describe columns;
   the table does the rest:

     <DataTable
       data={invoices}
       columns={[
         { accessorKey: "number", header: "Invoice" },
         { accessorKey: "amount", header: "Amount", meta: { align: "right" },
           cell: ({ getValue }) => formatMoney(getValue<number>()) },
       ]}
       searchPlaceholder="Search invoices"
       selectable
       bulkActions={(rows) => <Button size="sm">Export {rows.length}</Button>}
     />

   Sortable headers are buttons that announce their direction through
   `aria-sort`. Selection adds a checkbox column whose header selects the page.
   The toolbar hides until it has something to offer.
   ========================================================================== */

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData, TValue> {
    /** Right-align numbers so the digits line up. */
    align?: "left" | "right" | "center";
    /** Fixed width in px. */
    width?: number;
    /** Name for the columns menu when the header is not a string. */
    label?: string;
  }
}

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  /** Show a search box that filters across every column. */
  searchPlaceholder?: string;
  /** Adds a checkbox column. */
  selectable?: boolean;
  /** Rendered in the toolbar while rows are selected. */
  bulkActions?: (rows: T[]) => React.ReactNode;
  onSelectionChange?: (rows: T[]) => void;
  /** Rows per page. 0 turns paging off. Default 10. */
  pageSize?: number;
  /** Adds a columns menu for hiding and showing columns. */
  columnToggle?: boolean;
  /** Stable row ids; defaults to the index. */
  getRowId?: (row: T, index: number) => string;
  onRowClick?: (row: T) => void;
  density?: "compact" | "comfortable";
  empty?: React.ReactNode;
  /** What the rows are, for the table's accessible name: "Invoices". */
  label?: string;
  className?: string;
}

export function DataTable<T>({
  data,
  columns: userColumns,
  searchPlaceholder,
  selectable = false,
  bulkActions,
  onSelectionChange,
  pageSize = 10,
  columnToggle = false,
  getRowId,
  onRowClick,
  density = "comfortable",
  empty,
  label = "Table",
  className,
}: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [visibility, setVisibility] = React.useState<VisibilityState>({});

  const columns = React.useMemo<ColumnDef<T, any>[]>(() => {
    if (!selectable) return userColumns;
    const select: ColumnDef<T, any> = {
      id: "__select",
      enableSorting: false,
      enableHiding: false,
      meta: { width: 44 },
      header: ({ table }) => (
        <Checkbox
          aria-label="Select all rows on this page"
          checked={table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? "indeterminate" : false}
          onCheckedChange={(v) => table.toggleAllPageRowsSelected(v === true)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          aria-label="Select row"
          checked={row.getIsSelected()}
          onCheckedChange={(v) => row.toggleSelected(v === true)}
          onClick={(e) => e.stopPropagation()}
        />
      ),
    };
    return [select, ...userColumns];
  }, [selectable, userColumns]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, rowSelection, columnVisibility: visibility },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setVisibility,
    getRowId,
    enableRowSelection: selectable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(pageSize > 0 ? { getPaginationRowModel: getPaginationRowModel(), initialState: { pagination: { pageSize, pageIndex: 0 } } } : {}),
  });

  const selectedRows = table.getSelectedRowModel().rows.map((r) => r.original);
  const selectedKey = Object.keys(rowSelection).join(",");
  React.useEffect(() => {
    onSelectionChange?.(selectedRows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKey]);

  const rows = table.getRowModel().rows;
  const filteredCount = table.getFilteredRowModel().rows.length;
  const cellPad = density === "compact" ? "px-3 py-1.5" : "px-3 py-2.5";
  const hasToolbar = !!searchPlaceholder || columnToggle || (selectable && selectedRows.length > 0);

  return (
    <div className={cn("grid min-w-0 gap-3", className)}>
      {hasToolbar && (
        <div className="flex flex-wrap items-center gap-2">
          {searchPlaceholder && (
            <SearchInput
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              value={globalFilter}
              onValueChange={(v) => {
                setGlobalFilter(v);
                table.setPageIndex(0);
              }}
              wrapperClassName="w-full max-w-[260px]"
            />
          )}
          {selectable && selectedRows.length > 0 && (
            <div className="flex items-center gap-2" aria-live="polite">
              <span className="text-[12.5px] text-muted-foreground tabular-nums">{selectedRows.length} selected</span>
              {bulkActions?.(selectedRows)}
            </div>
          )}
          {columnToggle && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <Columns3 /> Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Show columns</DropdownMenuLabel>
                {table
                  .getAllLeafColumns()
                  .filter((c) => c.getCanHide())
                  .map((c) => (
                    <DropdownMenuCheckboxItem
                      key={c.id}
                      checked={c.getIsVisible()}
                      onCheckedChange={(v) => c.toggleVisibility(v === true)}
                      onSelect={(e) => e.preventDefault()}
                    >
                      {c.columnDef.meta?.label ?? (typeof c.columnDef.header === "string" ? c.columnDef.header : c.id)}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}

      <div className={cn("min-w-0 overflow-x-auto rounded-[14px] bg-card ring-1 ring-border", SQUIRCLE)}>
        <table aria-label={label} className="w-full border-collapse text-[13px]">
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="border-b border-border">
                {hg.headers.map((h) => {
                  const meta = h.column.columnDef.meta;
                  const sorted = h.column.getIsSorted();
                  const canSort = h.column.getCanSort();
                  const align = meta?.align ?? "left";
                  return (
                    <th
                      key={h.id}
                      scope="col"
                      style={meta?.width ? { width: meta.width } : undefined}
                      aria-sort={sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : canSort ? "none" : undefined}
                      className={cn(
                        "h-10 px-3 text-[11.5px] font-medium whitespace-nowrap text-muted-foreground",
                        align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left",
                      )}
                    >
                      {h.isPlaceholder ? null : canSort ? (
                        <button
                          type="button"
                          onClick={h.column.getToggleSortingHandler()}
                          className={cn(
                            "-mx-1.5 inline-flex cursor-pointer items-center gap-1 rounded-[6px] px-1.5 py-0.5 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                            sorted && "text-foreground",
                            align === "right" && "flex-row-reverse",
                          )}
                        >
                          {flexRender(h.column.columnDef.header, h.getContext())}
                          {sorted === "asc" ? (
                            <ArrowUp className="size-3.5" aria-hidden />
                          ) : sorted === "desc" ? (
                            <ArrowDown className="size-3.5" aria-hidden />
                          ) : (
                            <ChevronsUpDown className="size-3.5 opacity-50" aria-hidden />
                          )}
                        </button>
                      ) : (
                        flexRender(h.column.columnDef.header, h.getContext())
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={table.getVisibleLeafColumns().length}>
                  {empty ?? (
                    <State
                      size="sm"
                      title={globalFilter ? "No matches" : "Nothing here yet"}
                      description={globalFilter ? `Nothing matches “${globalFilter}”.` : undefined}
                      action={
                        globalFilter ? (
                          <Button size="sm" variant="outline" onClick={() => setGlobalFilter("")}>
                            Show everything
                          </Button>
                        ) : undefined
                      }
                    />
                  )}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                  className={cn(
                    "border-b border-border/60 transition-colors last:border-b-0 hover:bg-muted/50 data-[state=selected]:bg-accent/70",
                    onRowClick && "cursor-pointer",
                  )}
                >
                  {row.getVisibleCells().map((cell) => {
                    const align = cell.column.columnDef.meta?.align ?? "left";
                    return (
                      <td
                        key={cell.id}
                        className={cn(
                          cellPad,
                          "align-middle text-foreground",
                          align === "right" ? "text-right tabular-nums" : align === "center" ? "text-center" : "",
                        )}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pageSize > 0 && table.getPageCount() > 1 && (
        <Pagination
          label={`${label} pages`}
          page={table.getState().pagination.pageIndex + 1}
          pageCount={table.getPageCount()}
          onPageChange={(p) => table.setPageIndex(p - 1)}
          total={filteredCount}
          pageSize={table.getState().pagination.pageSize}
        />
      )}
    </div>
  );
}

export type { ColumnDef };

export { DataTable as Component };
