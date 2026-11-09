"use client";

import * as React from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

/* Validation field family: 5 form-field wrappers that share the same layout but
   each carry a different validation state (valid, invalid, warning, hint, live).
   Each export is a complete field: a label + a real input + a state message; the
   ids are produced with useId, the message is bound to the control with
   aria-describedby, and in the invalid state aria-invalid is written ONTO THE
   CONTROL. Color comes ONLY from tokens: success/danger/warning/muted. A static
   layout - no animation. Renders with no props too. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const gap: Record<StyledSize, string> = {
  sm: "gap-1",
  md: "gap-1.5",
  lg: "gap-2",
  xl: "gap-2.5",
};

const labelText: Record<StyledSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
  xl: "text-base",
};

const helpText: Record<StyledSize, string> = {
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm",
  xl: "text-sm",
};

const controlHeight: Record<StyledSize, string> = {
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-base",
  xl: "h-12 text-base",
};

/* Ortak kontrol stili. Gecersiz gorunum TEK standart: aria-invalid utility'leri. */
const controlBase =
  "w-full rounded-md border border-field-border bg-transparent px-3 py-1 text-foreground outline-none transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40";

/* Message row: icon plus text. Both svg and i are targeted for icon compatibility. */
const messageRow =
  "flex items-center gap-1.5 leading-snug [&>svg]:size-3.5 [&>svg]:shrink-0 [&>i]:text-xs [&>i]:leading-none";

const DEFAULT_LABEL = "Email";
const DEFAULT_PLACEHOLDER = "you@example.com";

interface FieldProps {
  className?: string;
  size?: StyledSize;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
}

/* Shared shell: label plus control plus message; the ids and aria are wired here. */
function ValidationShell({
  className,
  size = "md",
  label = DEFAULT_LABEL,
  description,
  placeholder = DEFAULT_PLACEHOLDER,
  invalid,
  message,
  messageTone,
  borderClass,
  value,
  onValueChange,
}: FieldProps & {
  invalid?: boolean;
  message?: React.ReactNode;
  messageTone: string;
  borderClass?: string;
  value?: string;
  onValueChange?: (v: string) => void;
}) {
  const base = React.useId();
  const controlId = `${base}-control`;
  const descId =
    description != null && description !== false ? `${base}-desc` : undefined;
  const msgId =
    message != null && message !== false ? `${base}-msg` : undefined;
  const describedBy = [descId, msgId].filter(Boolean).join(" ") || undefined;

  return (
    <div
      data-slot="styled-field"
      className={cn("flex w-full max-w-xs flex-col", gap[size], className)}
    >
      <label
        htmlFor={controlId}
        data-slot="styled-field-label"
        className={cn(
          "w-fit font-medium leading-none text-foreground select-none",
          labelText[size],
        )}
      >
        {label}
      </label>
      <input
        id={controlId}
        placeholder={placeholder}
        aria-describedby={describedBy}
        aria-invalid={invalid ? true : undefined}
        value={value}
        onChange={
          onValueChange ? (e) => onValueChange(e.target.value) : undefined
        }
        className={cn(controlBase, controlHeight[size], borderClass)}
      />
      {description != null && description !== false ? (
        <p
          id={descId}
          data-slot="styled-field-description"
          className={cn("leading-snug text-muted-foreground", helpText[size])}
        >
          {description}
        </p>
      ) : null}
      {message != null && message !== false ? (
        <p
          id={msgId}
          data-slot="styled-field-message"
          className={cn(messageRow, helpText[size], messageTone)}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}

/* Valid: dogrulanmis alan, success tonlu kenar + onay mesaji. */
export function ValidField({
  className,
  size = "md",
  label = DEFAULT_LABEL,
  description,
  placeholder,
}: FieldProps) {
  return (
    <ValidationShell
      className={className}
      size={size}
      label={label}
      description={description}
      placeholder={placeholder}
      borderClass="border-success focus-visible:border-success focus-visible:ring-success/30"
      messageTone="font-medium text-success"
      message={
        <>
          <CheckCircle2 />
          <span>This address looks good.</span>
        </>
      }
    />
  );
}

/* Invalid: aria-invalid on the control, with the danger message below. */
export function InvalidField({
  className,
  size = "md",
  label = DEFAULT_LABEL,
  description,
  placeholder,
}: FieldProps) {
  return (
    <ValidationShell
      className={className}
      size={size}
      label={label}
      description={description}
      placeholder={placeholder}
      invalid
      messageTone="font-medium text-danger"
      message={
        <>
          <XCircle />
          <span>Enter a valid email address.</span>
        </>
      }
    />
  );
}

/* Warning: a valid entry that still needs attention; the warning tone, NO aria-invalid. */
export function WarningField({
  className,
  size = "md",
  label = DEFAULT_LABEL,
  description,
  placeholder,
}: FieldProps) {
  return (
    <ValidationShell
      className={className}
      size={size}
      label={label}
      description={description}
      placeholder={placeholder}
      borderClass="border-warning focus-visible:border-warning focus-visible:ring-warning/30"
      messageTone="font-medium text-warning"
      message={
        <>
          <AlertTriangle />
          <span>This domain is not usually allowed.</span>
        </>
      }
    />
  );
}

/* Hint: a neutral help message, carrying no state color at all. */
export function HintField({
  className,
  size = "md",
  label = DEFAULT_LABEL,
  description,
  placeholder,
}: FieldProps) {
  return (
    <ValidationShell
      className={className}
      size={size}
      label={label}
      description={description}
      placeholder={placeholder}
      messageTone="text-muted-foreground"
      message={
        <>
          <Info />
          <span>We only use this to send receipts.</span>
        </>
      }
    />
  );
}

/* Basit, deterministik email kontrolu. */
function isEmail(v: string) {
  const at = v.indexOf("@");
  if (at <= 0) return false;
  const dot = v.indexOf(".", at + 2);
  return dot > at + 1 && dot < v.length - 1;
}

/* Live: validates as you type. State is held at the top, not in the unmounting subtree. */
export function LiveField({
  className,
  size = "md",
  label = DEFAULT_LABEL,
  description,
  placeholder,
}: FieldProps) {
  const [value, setValue] = React.useState("");
  const touched = value.length > 0;
  const valid = isEmail(value);

  return (
    <ValidationShell
      className={className}
      size={size}
      label={label}
      description={description}
      placeholder={placeholder}
      value={value}
      onValueChange={setValue}
      invalid={touched && !valid}
      borderClass={
        touched && valid
          ? "border-success focus-visible:border-success focus-visible:ring-success/30"
          : undefined
      }
      messageTone={
        touched
          ? valid
            ? "font-medium text-success"
            : "font-medium text-danger"
          : "text-muted-foreground"
      }
      message={
        touched ? (
          valid ? (
            <>
              <CheckCircle2 />
              <span>Looks like a valid address.</span>
            </>
          ) : (
            <>
              <XCircle />
              <span>Keep typing a full email address.</span>
            </>
          )
        ) : (
          <>
            <Info />
            <span>Validation runs as you type.</span>
          </>
        )
      }
    />
  );
}

export default LiveField;
