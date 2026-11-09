/*
 * Ported from Millai UI (Vue) to React.
 * Original: src/lib/components/form/MSegmentedControl.vue
 * Source: https://github.com/MillaiStudio/millai-ui
 * Original author: Millai (MillaiStudio)
 *
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
 */

import * as React from "react";

export interface ChoiceOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface MSegmentedControlProps {
  /** The list of selectable options. */
  options: ChoiceOption[];
  /** The currently selected value (controlled, equivalent to the original v-model). */
  value: string | number;
  /** Called with the newly selected value. */
  onChange: (value: string | number) => void;
  /** Accessible label for the radiogroup. */
  label?: string;
  /** Disables every option. */
  disabled?: boolean;
  /** Equivalent of the original `#option` scoped slot: customize how an option renders. */
  renderOption?: (option: ChoiceOption, selected: boolean) => React.ReactNode;
  className?: string;
}

export default function MSegmentedControl({
  options,
  value,
  onChange,
  label,
  disabled = false,
  renderOption,
  className,
}: MSegmentedControlProps) {
  const name = React.useId();

  return (
    <div
      className={["m-segmented", className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-label={label}
    >
      {options.map((option) => {
        const isDisabled = disabled || option.disabled;
        const isSelected = value === option.value;

        return (
          <label
            key={option.value}
            className={[
              "m-segmented__option",
              isDisabled && "m-segmented__option--disabled",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <input
              type="radio"
              className="m-segmented__input"
              name={name}
              value={option.value}
              checked={isSelected}
              disabled={isDisabled}
              onChange={() => onChange(option.value)}
            />
            <span className="m-segmented__label">
              {renderOption ? renderOption(option, isSelected) : option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}
