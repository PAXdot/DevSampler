/**
 * MIT License
 *
 * Copyright (c) 2026 Millai
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Ported to React from the original Vue single-file component `MCheckbox.vue`
 * by MillaiStudio (https://github.com/MillaiStudio/millai-ui). Structure, class
 * names, visual result and behaviour are preserved from the original.
 */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CheckedValue = boolean | Array<string | number>;

export interface MCheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "checked" | "onChange" | "disabled"
> {
  /**
   * Current checked state: a boolean for a standalone checkbox, or the
   * group's selected-values array when this checkbox is part of a group
   * (mirrors the Vue original's `v-model` which accepts either shape).
   */
  checked: CheckedValue;
  /** Called with the next checked state (React equivalent of `update:modelValue`). */
  onCheckedChange: (checked: CheckedValue) => void;
  /** Value registered in the group's array when `checked` is an array. */
  value?: string | number;
  /** Shows the indeterminate visual state. */
  indeterminate?: boolean;
  disabled?: boolean;
  /** Label content (the Vue original's default slot). */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function MCheckbox({
  checked,
  onCheckedChange,
  value,
  indeterminate = false,
  disabled = false,
  children,
  className,
  style,
  ...rest
}: MCheckboxProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const isChecked = Array.isArray(checked)
    ? value !== undefined && checked.includes(value)
    : checked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (Array.isArray(checked)) {
      if (value === undefined) return;
      const next = event.target.checked
        ? [...checked, value]
        : checked.filter((item) => item !== value);
      onCheckedChange(next);
    } else {
      onCheckedChange(event.target.checked);
    }
  };

  return (
    <label
      className={cn("m-choice", disabled && "m-choice--disabled", className)}
      style={style}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className="m-checkbox"
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        {...rest}
      />
      {children ? <span className="m-choice__label">{children}</span> : null}
    </label>
  );
}
