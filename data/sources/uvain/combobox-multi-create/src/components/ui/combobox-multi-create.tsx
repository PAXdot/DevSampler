"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Command as CommandPrimitive } from "cmdk";
import { Check, ChevronsUpDown, Search } from "lucide-react";

/* Layro System · Combobox. Composed from the Layro UI source into one file.
   Themed with shadcn/ui tokens; follows your globals.css in light and dark. */

/* ------------------------------------------------------------ tokens -- */

const SQUIRCLE = "[corner-shape:squircle]";

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

/* =========================================================== popover == */

/* ==========================================================================
   Popover

   A small surface anchored to a trigger, for content that is richer than a
   tooltip and lighter than a dialog: a filter form, a date picker, a colour
   swatch grid, "who can see this". It is not modal — the page stays usable,
   Escape or a click outside closes it, and focus returns to the trigger.

     <Popover>
       <PopoverTrigger asChild><Button variant="outline">Filters</Button></PopoverTrigger>
       <PopoverContent align="start">…</PopoverContent>
     </Popover>
   ========================================================================== */

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(function PopoverContent({ className, align = "center", sideOffset = 6, style, ...props }, ref) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={8}
        style={{ zIndex: LAYER.popover, ...style }}
        className={cn(
          "w-72 rounded-[14px] bg-popover p-3.5 text-popover-foreground shadow-lg ring-1 ring-border outline-none",
          "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=closed]:zoom-out-95",
          "data-[side=top]:[--pop-y:4px]",
          SQUIRCLE,
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});

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

/* ========================================================== combobox == */

/* ==========================================================================
   Combobox

   A Select you can type into — for lists long enough that scrolling to find
   something is slower than typing it: countries, people, time zones, tags.
   Built on cmdk, so matching is fuzzy and ranked, arrows move, Enter picks.

     <Combobox
       options={people}                 // { value, label, hint?, keywords? }[]
       value={owner} onValueChange={setOwner}
       placeholder="Assign an owner" searchPlaceholder="Search people"
     />

   `multiple` keeps the list open and shows the picks as chips on the trigger;
   picking again removes one, and Backspace in an empty search removes the
   last. (The chips carry no × of their own: a button inside the trigger
   button is two controls in one tab stop, which screen readers cannot use.) `onCreate` adds a
   "Create …" row when nothing matches, for tag-like vocabularies.
   ========================================================================== */

export interface ComboboxOption {
  value: string;
  label: string;
  /** A second line, to tell same-named options apart. */
  hint?: string;
  /** Extra words that should match: an email for a person, a code for a country. */
  keywords?: string[];
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface Base {
  options: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  size?: ControlSize;
  disabled?: boolean;
  /** Offer to create the typed text when nothing matches. */
  onCreate?: (text: string) => void;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}

export type ComboboxProps = Base &
  (
    | { multiple?: false; value?: string; defaultValue?: string; onValueChange?: (value: string | undefined) => void }
    | { multiple: true; value?: string[]; defaultValue?: string[]; onValueChange?: (value: string[]) => void }
  );

export function Combobox(props: ComboboxProps) {
  const {
    options,
    placeholder = "Select…",
    searchPlaceholder = "Search",
    emptyText = "Nothing matches.",
    size = "md",
    disabled,
    onCreate,
    className,
    id,
    "aria-label": ariaLabel,
    "aria-describedby": describedBy,
    "aria-invalid": invalid,
  } = props;
  const field = useFieldProps({ id, "aria-describedby": describedBy, "aria-invalid": invalid });
  const multiple = props.multiple === true;
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [inner, setInner] = React.useState<string[]>(() => {
    const d = props.defaultValue;
    return d === undefined ? [] : Array.isArray(d) ? d : [d];
  });
  const selected: string[] =
    props.value === undefined ? inner : Array.isArray(props.value) ? props.value : props.value ? [props.value] : [];

  const commit = (next: string[]) => {
    if (props.value === undefined) setInner(next);
    if (props.multiple) props.onValueChange?.(next);
    else (props.onValueChange as ((v: string | undefined) => void) | undefined)?.(next[0]);
  };

  const pick = (v: string) => {
    if (multiple) {
      commit(selected.includes(v) ? selected.filter((s) => s !== v) : [...selected, v]);
      setQuery("");
    } else {
      commit(selected[0] === v ? [] : [v]);
      setOpen(false);
    }
  };

  const byValue = React.useMemo(() => new Map(options.map((o) => [o.value, o])), [options]);
  const exact = options.some((o) => o.label.toLowerCase() === query.trim().toLowerCase());

  const triggerText = multiple
    ? null
    : selected[0]
      ? (byValue.get(selected[0])?.label ?? selected[0])
      : placeholder;

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setQuery("");
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-label={ariaLabel}
          disabled={disabled}
          className={cn(
            "flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 text-left",
            multiple && selected.length > 0 ? "h-auto! min-h-9 flex-wrap py-1 pl-1.5" : "",
            CONTROL[size],
            FIELD,
            SQUIRCLE,
            !multiple && !selected[0] && "text-muted-foreground",
            className,
          )}
          {...field}
        >
          {multiple ? (
            selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              <span className="flex flex-1 flex-wrap gap-1">
                {selected.map((v) => (
                  <span
                    key={v}
                    className="inline-flex h-6 items-center rounded-[7px] bg-muted px-2 text-[12px] font-medium text-foreground"
                  >
                    {byValue.get(v)?.label ?? v}
                  </span>
                ))}
              </span>
            )
          ) : (
            <span className="truncate">{triggerText}</span>
          )}
          <ChevronsUpDown aria-hidden className="size-4 shrink-0 text-muted-foreground" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" aria-label={ariaLabel ?? searchPlaceholder} className="w-[max(var(--radix-popover-trigger-width),220px)] p-0">
        <CommandPrimitive
          className="flex flex-col"
          filter={(value, search, keywords) => {
            const hay = `${value} ${(keywords ?? []).join(" ")}`.toLowerCase();
            return search
              .toLowerCase()
              .split(/\s+/)
              .every((w) => hay.includes(w))
              ? 1
              : 0;
          }}
        >
          <div className="flex items-center gap-2 border-b border-border px-3">
            <Search aria-hidden className="size-4 shrink-0 text-muted-foreground" />
            <CommandPrimitive.Input
              value={query}
              onValueChange={setQuery}
              placeholder={searchPlaceholder}
              onKeyDown={(e) => {
                if (multiple && e.key === "Backspace" && !query && selected.length) {
                  commit(selected.slice(0, -1));
                }
              }}
              className="h-10 w-full bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
            />
          </div>
          <CommandPrimitive.List className="max-h-64 overflow-y-auto p-1">
            {!(onCreate && query.trim()) && (
              <CommandPrimitive.Empty className="px-3 py-6 text-center text-[12.5px] text-muted-foreground">
                {emptyText}
              </CommandPrimitive.Empty>
            )}
            {options.map((o) => {
              const on = selected.includes(o.value);
              return (
                <CommandPrimitive.Item
                  key={o.value}
                  value={o.label}
                  keywords={[o.value, ...(o.keywords ?? []), o.hint ?? ""]}
                  disabled={o.disabled}
                  onSelect={() => pick(o.value)}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-2.5 rounded-[8px] py-1.5 pr-8 pl-2.5 text-[13px] outline-none select-none",
                    "data-[selected=true]:bg-accent data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
                  )}
                >
                  {o.icon && <span className="flex shrink-0 [&_svg]:size-4">{o.icon}</span>}
                  <span className="grid min-w-0 gap-0.5">
                    <span className="truncate">{o.label}</span>
                    {o.hint && <span className="truncate text-[11.5px] text-foreground/65">{o.hint}</span>}
                  </span>
                  {on && <Check aria-hidden className="absolute right-2.5 size-4" />}
                </CommandPrimitive.Item>
              );
            })}
            {onCreate && query.trim() && !exact && (
              <CommandPrimitive.Item
                value={`__create__${query}`}
                forceMount
                onSelect={() => {
                  onCreate(query.trim());
                  setQuery("");
                }}
                className="flex cursor-pointer items-center gap-2 rounded-[8px] px-2.5 py-1.5 text-[13px] outline-none data-[selected=true]:bg-accent"
              >
                Create <span className="font-medium">“{query.trim()}”</span>
              </CommandPrimitive.Item>
            )}
          </CommandPrimitive.List>
        </CommandPrimitive>
      </PopoverContent>
    </Popover>
  );
}

export { Combobox as Component };
