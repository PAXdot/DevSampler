"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

/** `hint` is a dim note at the end of an option, e.g. a code or a shortcut. */
export interface OSelectItem<T extends string = string> {
  value: T;
  label: string;
  hint?: string;
  disabled?: boolean;
}

export interface OSelectProps<T extends string = string> extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "value" | "defaultValue" | "onChange"
> {
  items: readonly OSelectItem<T>[];
  placeholder?: string;
  disabled?: boolean;
  /** A danger ring. Inside an `OField` with an error it is set for you. */
  invalid?: boolean;
  value?: T;
  defaultValue?: T;
  onValueChange?: (value: T) => void;
}

/**
 * React port of oyna-ui's `OSelect` (originally a Vue SFC built on reka-ui's Select,
 * itself the Vue analog of @radix-ui/react-select). Same markup, class names and CSS
 * as the source; the list is not rendered while closed, so the trigger shows the chosen
 * item's label itself rather than relying on the list's own text node.
 */
export default function OSelect<T extends string = string>({
  items,
  placeholder,
  disabled,
  invalid,
  value,
  defaultValue,
  onValueChange,
  id,
  ...attrs
}: OSelectProps<T>) {
  const [internalValue, setInternalValue] = React.useState<T | undefined>(
    defaultValue,
  );
  const current = items.find((item) => item.value === (value ?? internalValue));

  function handleValueChange(next: T) {
    setInternalValue(next);
    onValueChange?.(next);
  }

  return (
    <SelectPrimitive.Root
      value={value ?? internalValue}
      onValueChange={handleValueChange}
      disabled={disabled}
    >
      <SelectPrimitive.Trigger
        id={id}
        className="o-select"
        aria-invalid={invalid || undefined}
        {...attrs}
      >
        <SelectPrimitive.Value>
          {current?.label ?? placeholder}
        </SelectPrimitive.Value>
        <svg
          className="o-select__chevron"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="o-select__list"
          position="popper"
          sideOffset={8}
          collisionPadding={8}
        >
          <SelectPrimitive.Viewport>
            {items.map((item) => (
              <SelectPrimitive.Item
                key={item.value}
                value={item.value}
                disabled={item.disabled}
                className="o-select__option"
              >
                <SelectPrimitive.ItemText>
                  {item.label}
                </SelectPrimitive.ItemText>
                {item.hint ? (
                  <span className="o-select__hint">{item.hint}</span>
                ) : null}
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
