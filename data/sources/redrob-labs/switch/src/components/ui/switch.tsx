/*
 * Switch — adapted from Redrob UI (https://github.com/redrob-labs/redrob-ui)
 * Original source: src/components/Switch/Switch.tsx
 * Original author: Janghoon Lee (Redrob) and contributors
 *
 * MIT License
 *
 * Copyright (c) 2026 Janghoon Lee (Redrob) and contributors
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
 * MODIFICATIONS (prominently noted, as required above and beyond the MIT terms):
 * - Inlined the `cx` and `omit` helpers (originally imported from the package's
 *   `internal/` module) so this file has no cross-package import, since this
 *   build ships components as single self-contained files. Behavior is identical.
 * - No other behavioral or visual changes: same props, same class names
 *   (`rr-switch`, `rr-switch__track`, `rr-switch__thumb`, `rr-switch__input`),
 *   same DOM structure, same `role="switch"` semantics.
 */
import * as React from "react";

function cx(
  ...parts: Array<
    string | false | null | undefined | Record<string, boolean | undefined>
  >
): string {
  const out: string[] = [];
  for (const part of parts) {
    if (!part) continue;
    if (typeof part === "string") {
      out.push(part);
    } else {
      for (const key of Object.keys(part)) {
        if (part[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}

function omit<T extends object, K extends keyof T>(
  props: T,
  keys: readonly K[],
): Omit<T, K> {
  const out = {} as Omit<T, K>;
  for (const key of Object.keys(props) as Array<keyof T>) {
    if ((keys as readonly (keyof T)[]).indexOf(key) === -1) {
      (out as Record<string, unknown>)[key as string] = props[key];
    }
  }
  return out;
}

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "type" | "size"
> {
  label?: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Turns something on or off, and it takes effect immediately.
 *
 * That is the whole difference from `Checkbox`: a checkbox states an intention that a Save button
 * later commits, a switch acts now. A switch inside a form with a submit button is the wrong control.
 *
 * Carries `role="switch"` so it is announced as on/off rather than checked/unchecked.
 */
export function Switch(props: SwitchProps): React.ReactElement {
  const size = props.size || "md";
  const rest = omit(props, ["label", "size", "className", "children"]);

  return React.createElement(
    "label",
    {
      className: cx(
        "rr-switch",
        size === "sm" && "rr-switch--sm",
        props.disabled && "rr-switch--disabled",
        props.className,
      ),
      style: { position: "relative" },
    },
    [
      React.createElement("input", {
        type: "checkbox",
        role: "switch",
        className: "rr-switch__input",
        key: "i",
        ...rest,
      }),
      React.createElement(
        "span",
        { className: "rr-switch__track", key: "t" },
        React.createElement("span", { className: "rr-switch__thumb" }),
      ),
      props.label
        ? React.createElement("span", { key: "l" }, props.label)
        : null,
    ],
  );
}

export default Switch;
