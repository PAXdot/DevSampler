/*
MIT License

Copyright (c) 2026 Isaiah Bjork

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
"use client";

// Shared demo controls for the chart pages. Not part of any installable component.

import type { ReactNode } from "react";
import { cn } from "./lib-utils";
import { BjorkButton } from "./components-bjork-ui-primitives-button";
import { BjorkButtonGroup } from "./components-bjork-ui-primitives-button-group";

export function OptionGroup<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { label: string; value: T }[];
  onChange: (v: T) => void;
}) {
  return (
    <BjorkButtonGroup aria-label={label}>
      {options.map((o) => (
        <BjorkButton
          key={String(o.value)}
          size="sm"
          variant={value === o.value ? "secondary" : "ghost"}
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className="tabular-nums"
        >
          {o.label}
        </BjorkButton>
      ))}
    </BjorkButtonGroup>
  );
}

export function ToggleButton({ pressed, onClick, children }: { pressed?: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <BjorkButton size="sm" variant="outline" aria-pressed={pressed} onClick={onClick}>
      {children}
    </BjorkButton>
  );
}

export function ControlRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center justify-center gap-3">{children}</div>;
}

// Demo column: a fixed max width that shrinks with the phone viewport instead of collapsing.
// Below lg the shell's toolbar floats over the top of the stage, so the column starts under it.
export function DemoColumn({ width, children, className }: { width: number; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-5 max-lg:pt-16", className)} style={{ width: `min(${width}px, calc(100vw - 56px))` }}>
      {children}
    </div>
  );
}
