import {
  attachRef,
  isAriaInvalid,
  useFormControl,
} from "@/components/ui/select-utils/use-form-control";
import { useCallback, useId, useRef } from "react";
import cn, { joinTokens } from "@/components/ui/select-utils/cn";
import { isControlTarget } from "@/components/ui/select-utils/control-target";
import FormDescription from "@/components/ui/select-utils/form-description";
import FormError from "@/components/ui/select-utils/form-error";
import RequiredMark from "@/components/ui/select-utils/required-mark";
import { useMessages } from "@/components/ui/select-utils/ui-context";

export interface SelectOption<T = string | number> {
  disabled?: boolean;
  label: string;
  value: T;
}

export interface SelectOptionGroup<T = string | number> {
  disabled?: boolean;
  label: string;
  options: SelectOption<T>[];
}

export interface SelectProps extends Omit<
  React.ComponentProps<"select">,
  "prefix"
> {
  className?: string;
  description?: React.ReactNode;
  dim?: "xs" | "sm" | "md" | "lg";
  error?: string;
  hasEmpty?: boolean;
  label?: React.ReactNode;
  options: (SelectOption | SelectOptionGroup)[];
  prefix?: React.ReactNode;
  readOnly?: boolean;
  suffix?: React.ReactNode;
}

const dimStyles = {
  xs: "px-1 py-0 text-sm",
  sm: "px-1 py-0.5 text-sm",
  md: "px-2 py-1 text-base",
  lg: "px-3 py-2 text-lg",
};

const adornmentStyles = {
  xs: "text-sm",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};
const prefixPaddings = { xs: "ps-1", sm: "ps-1", md: "ps-2", lg: "ps-3" };
const suffixPaddings = { xs: "pe-1", sm: "pe-1", md: "pe-2", lg: "pe-3" };

const OPERATING_KEYS = new Set([
  " ",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Enter",
  "F4",
  "Home",
  "PageDown",
  "PageUp",
]);

const operatesSelect = (event: React.KeyboardEvent) =>
  OPERATING_KEYS.has(event.key) ||
  (event.key.length === 1 && !event.ctrlKey && !event.metaKey);

const hasContent = (node: React.ReactNode) =>
  node !== undefined && node !== null && node !== false && node !== "";

function showPicker(select: HTMLSelectElement) {
  try {
    select.showPicker();
  } catch {
    // Not there (an older browser) or not allowed here (a cross-origin
    // frame) - the select has the focus at least
  }
}

const isGroup = (
  item: SelectOption | SelectOptionGroup,
): item is SelectOptionGroup => "options" in item;

const renderOption = (option: SelectOption) => (
  <option disabled={option.disabled} key={option.value} value={option.value}>
    {option.label}
  </option>
);

/** A native `<select>` styled like the other fields. */
export default function Select({
  className,
  defaultValue,
  description,
  dim = "md",
  disabled,
  error,
  hasEmpty,
  id,
  label,
  name,
  onKeyDown,
  onMouseDown,
  options,
  prefix,
  readOnly = false,
  ref,
  required,
  suffix,
  ...props
}: SelectProps) {
  const messages = useMessages().ui;
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const ownRef = useCallback(
    (element: HTMLSelectElement | null) => {
      selectRef.current = element;
      const detachRef = attachRef(ref, element);

      return () => {
        selectRef.current = null;
        detachRef();
      };
    },
    [ref],
  );

  const { fieldRef, handleChange, value } = useFormControl({
    ...props,
    ref: ownRef,
    defaultValue: defaultValue ?? (props.multiple ? [] : undefined),
    followScriptWrites: true,
  });

  const generatedId = useId();
  const selectId = id ?? generatedId;
  const errorId = error ? `${selectId}-error` : undefined;
  const descriptionId = description ? `${selectId}-description` : undefined;
  const invalid = !!error || isAriaInvalid(props["aria-invalid"]);

  const isListBox = !!props.multiple || Number(props.size) > 1;
  const hasArrow = !isListBox && !readOnly;
  const hasPrefix = hasContent(prefix);
  const hasSuffix = hasContent(suffix);
  const isFramed = hasPrefix || hasSuffix;

  const select = (
    <select
      {...props}
      aria-describedby={joinTokens(
        errorId,
        descriptionId,
        props["aria-describedby"],
      )}
      aria-invalid={error ? "true" : props["aria-invalid"]}
      aria-readonly={readOnly ? "true" : props["aria-readonly"]}
      aria-required={readOnly && required ? "true" : props["aria-required"]}
      className={cn(
        isFramed
          ? "min-w-0 flex-1 appearance-none self-stretch bg-transparent focus:outline-hidden"
          : "form-control appearance-none",
        hasArrow && "cui-select-arrow",
        dimStyles[dim],
        disabled && "cursor-not-allowed",
        disabled && !isFramed && "opacity-50",
        error &&
          !isFramed &&
          "border-danger-500! focus:ring-danger-500! forced-colors:outline-1",
        readOnly && !isListBox && "pointer-events-none",
        className,
        hasArrow && "pe-8",
      )}
      data-disabled={disabled ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      data-readonly={readOnly ? "" : undefined}
      disabled={disabled}
      id={selectId}
      name={name}
      onChange={(event) => {
        if (readOnly) return;
        handleChange(event);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (readOnly && !event.defaultPrevented && operatesSelect(event)) {
          event.preventDefault();
        }
      }}
      onMouseDown={(event) => {
        onMouseDown?.(event);
        if (readOnly && !event.defaultPrevented) {
          event.preventDefault();
          event.currentTarget.focus();
        }
      }}
      ref={fieldRef}
      required={required && !readOnly}
      value={value}
    >
      {hasEmpty && <option aria-label={messages.select.emptyOption} value="" />}
      {options.map((item, index) =>
        isGroup(item) ? (
          <optgroup
            disabled={item.disabled}
            key={`${index}\u0000${item.label}`}
            label={item.label}
          >
            {item.options.map(renderOption)}
          </optgroup>
        ) : (
          renderOption(item)
        ),
      )}
    </select>
  );

  return (
    <div
      className="flex flex-col gap-1.5"
      onMouseDown={(event) => {
        if (readOnly && event.target === event.currentTarget) {
          event.preventDefault();
          selectRef.current?.focus();
        }
      }}
    >
      {hasContent(label) && (
        <label
          className="block truncate text-sm font-medium"
          htmlFor={selectId}
        >
          {label}
          {messages.form.labelSuffix} {required && <RequiredMark />}
        </label>
      )}

      <div
        className={cn(
          isFramed
            ? "relative flex w-full items-center rounded-md border border-neutral-300 bg-surface transition-colors focus-within:ring-2 focus-within:ring-primary-500 dark:border-neutral-700 dark:bg-surface-dark"
            : "contents",
          isFramed &&
            error &&
            "border-danger-500! focus-within:ring-danger-500! forced-colors:outline-1",
          isFramed &&
            "has-[>select:disabled]:cursor-not-allowed has-[>select:disabled]:opacity-50",
        )}
        onClick={(event) => {
          const select = selectRef.current;
          if (
            !isFramed ||
            !select ||
            isControlTarget(event.target, event.currentTarget)
          ) {
            return;
          }
          select.focus();
          if (!select.disabled && !readOnly && !isListBox) {
            showPicker(select);
          }
        }}
        onMouseDown={(event) => {
          if (isFramed && !isControlTarget(event.target, event.currentTarget)) {
            event.preventDefault();
          }
        }}
      >
        {hasPrefix && (
          <span
            className={cn(
              "flex shrink-0 items-center text-neutral-500 select-none dark:text-neutral-400",
              adornmentStyles[dim],
              prefixPaddings[dim],
            )}
          >
            {prefix}
          </span>
        )}
        {select}
        {hasSuffix && (
          <span
            className={cn(
              "flex shrink-0 items-center text-neutral-500 select-none dark:text-neutral-400",
              adornmentStyles[dim],
              suffixPaddings[dim],
            )}
          >
            {suffix}
          </span>
        )}
      </div>

      <FormDescription id={descriptionId}>{description}</FormDescription>
      <FormError id={errorId}>{error}</FormError>
    </div>
  );
}
