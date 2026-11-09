"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Check } from "lucide-react";
import { HexColorPicker } from "react-colorful";

/* Layro System · ColorPicker. Composed from the Layro UI source into one file.
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

/* ====================================================== color-picker == */

/* ==========================================================================
   Color Picker

   A swatch button that opens a saturation/hue picker, a hex field, and your
   brand swatches. react-colorful supplies the picker (2.8 kB, keyboard
   operable: arrows move the handle). The hex field accepts #abc, abc, and
   #aabbcc, and only commits a valid colour — a half-typed hex never turns
   the preview black.

     <ColorPicker value={brand} onValueChange={setBrand}
                  swatches={["#2a78d6", "#1baf7a", "#eb6834"]} />
   ========================================================================== */

const HEX = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
const normalise = (v: string) => {
  const m = v.trim().match(HEX);
  if (!m) return null;
  const h = m[1].length === 3 ? m[1].split("").map((c) => c + c).join("") : m[1];
  return `#${h.toLowerCase()}`;
};

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (hex: string) => void;
  swatches?: string[];
  size?: ControlSize;
  disabled?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

export function ColorPicker({
  value,
  defaultValue = "#2a78d6",
  onValueChange,
  swatches = [],
  size = "md",
  disabled,
  className,
  ...aria
}: ColorPickerProps) {
  const fieldProps = useFieldProps(aria);
  const [inner, setInner] = React.useState(defaultValue);
  const color = value ?? inner;
  const [text, setText] = React.useState(color);
  React.useEffect(() => setText(color), [color]);
  const set = (c: string) => {
    if (value === undefined) setInner(c);
    onValueChange?.(c);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn("flex w-full min-w-0 cursor-pointer items-center gap-2.5 text-left font-mono tabular-nums", CONTROL[size], FIELD, SQUIRCLE, className)}
          {...fieldProps}
        >
          <span className="size-5 shrink-0 rounded-[6px] ring-1 ring-foreground/15 ring-inset" style={{ background: color }} />
          <span className="text-[12.5px] uppercase">{color}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" aria-label="Choose a colour" className="grid w-[244px] gap-3 p-3">
        <div className="layro-colorful [&_.react-colorful]:h-40 [&_.react-colorful]:w-full [&_.react-colorful__hue]:mt-2.5 [&_.react-colorful__hue]:h-3 [&_.react-colorful__hue]:rounded-full [&_.react-colorful__pointer]:h-4 [&_.react-colorful__pointer]:w-4 [&_.react-colorful__saturation]:rounded-[10px] [&_.react-colorful__saturation]:border-b-0">
          <HexColorPicker color={color} onChange={set} />
        </div>
        <label className="flex items-center gap-2">
          <span className="text-[12px] text-muted-foreground">Hex</span>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              const n = normalise(e.target.value);
              if (n) set(n);
            }}
            onBlur={() => setText(color)}
            spellCheck={false}
            aria-invalid={normalise(text) ? undefined : true}
            className={cn("h-8 w-full rounded-[8px] px-2.5 font-mono text-[12.5px] uppercase", FIELD, SQUIRCLE)}
          />
        </label>
        {swatches.length > 0 && (
          <div role="group" aria-label="Swatches" className="flex flex-wrap gap-1.5">
            {swatches.map((s) => {
              const on = normalise(s) === color;
              return (
                <button
                  key={s}
                  type="button"
                  aria-label={s}
                  aria-pressed={on}
                  onClick={() => set(normalise(s) ?? s)}
                  className="grid size-6 cursor-pointer place-items-center rounded-[7px] ring-1 ring-foreground/15 ring-inset focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  style={{ background: s }}
                >
                  {on && <Check className="size-3.5 text-white drop-shadow" strokeWidth={3} aria-hidden />}
                </button>
              );
            })}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export { ColorPicker as Component };
