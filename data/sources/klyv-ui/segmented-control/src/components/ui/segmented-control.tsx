/**
 * SegmentedControl
 * Adapted from Klyv (https://github.com/Klyv-UI/klyv), © 2026 Klyv contributors.
 * Licensed under the MIT License:
 *
 * MIT License
 *
 * Copyright (c) 2026 Klyv contributors
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
"use client";

import {
  useRef,
  type ComponentType,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Structural type for an icon component. Matches `lucide-react`'s `LucideIcon`
 * without importing it, so the library stays icon-library agnostic.
 */
export type IconComponent = ComponentType<{
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

/**
 * Keeps text in the accessibility tree while removing it visually — the
 * mechanism behind every icon-only control's label.
 */
function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

export interface SegmentedOption<T extends string = string> {
  value: T;
  label: string;
  icon?: IconComponent;
  /**
   * Show the icon alone. The label is still required and still announced — an
   * icon-only control without one is a control nobody can name.
   */
  iconOnly?: boolean;
  disabled?: boolean;
}

export type SegmentedControlSize = "sm" | "md";
export type SegmentedControlOrientation = "horizontal" | "vertical";

const SIZES: Record<SegmentedControlSize, string> = {
  sm: "h-7 px-3 text-[12px]",
  md: "h-8 px-3.5 text-[13px]",
};

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentedOption<T>[];
  value: T;
  onValueChange: (value: T) => void;
  /** Accessible name for the set. */
  label: string;
  /** Control height: 28px or 32px. */
  size?: SegmentedControlSize;
  /** vertical is the stacked form the mobile drawer uses. */
  orientation?: SegmentedControlOrientation;
  /** Drop the lifted track, for use inside an already-filled surface. */
  bare?: boolean;
  /** Stretch the control to the container width. */
  fullWidth?: boolean;
  /** Merged last, so it wins. */
  className?: string;
}

/**
 * Single-select from a small set of options — the primary nav pill track.
 * Implemented as a radiogroup with roving focus, so arrow keys move between
 * options and only the selected one is a tab stop.
 */
export function SegmentedControl<T extends string = string>({
  options,
  value,
  onValueChange,
  label,
  size = "md",
  orientation = "horizontal",
  bare = false,
  fullWidth = false,
  className,
}: SegmentedControlProps<T>) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (event: KeyboardEvent, index: number) => {
    const forward = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    const back = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    if (event.key !== forward && event.key !== back) return;

    event.preventDefault();
    const step = event.key === forward ? 1 : -1;
    const total = options.length;
    for (let offset = 1; offset <= total; offset += 1) {
      const next = (index + step * offset + total * offset) % total;
      if (!options[next].disabled) {
        onValueChange(options[next].value);
        refs.current[next]?.focus();
        return;
      }
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      aria-orientation={orientation}
      className={cn(
        "inline-flex",
        orientation === "vertical"
          ? "flex-col items-stretch gap-1"
          : "items-center gap-0.5",
        !bare &&
          orientation === "horizontal" &&
          "rounded-full bg-surface p-1 shadow-[var(--shadow-tile)]",
        fullWidth && "flex w-full",
        className,
      )}
    >
      {options.map((option, index) => {
        const selected = option.value === value;
        const Icon = option.icon;
        return (
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={option.disabled}
            tabIndex={selected ? 0 : -1}
            onClick={() => onValueChange(option.value)}
            onKeyDown={(event) => move(event, index)}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full leading-none transition-colors",
              "disabled:pointer-events-none disabled:opacity-40",
              SIZES[size],
              // A square cell for a lone glyph: the horizontal padding of a
              // text segment leaves an icon adrift in the middle of it.
              option.iconOnly && (size === "sm" ? "w-7 px-0" : "w-8 px-0"),
              orientation === "vertical" &&
                "h-10 justify-start px-4 text-[14px]",
              fullWidth && "flex-1",
              selected
                ? "bg-accent font-bold tracking-[-0.01em] text-accent-ink"
                : "font-medium text-ink-soft hover:text-ink",
            )}
          >
            {Icon && <Icon size={15} strokeWidth={2} aria-hidden="true" />}
            {option.iconOnly ? (
              <VisuallyHidden>{option.label}</VisuallyHidden>
            ) : (
              option.label
            )}
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedControl;
