import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Ported from the Vue 3 component Switch.vue in Oyna UI (https://oyna-ui.org) by azabroflovski.
 * Original source: https://github.com/azabroflovski/oyna-ui/blob/master/src/components/Switch/Switch.vue
 * License: MIT (see repository LICENSE).
 *
 * v-model -> checked/defaultChecked + onCheckedChange.
 * useSplitAttrs (class/style -> wrapping label, everything else -> the input) -> className/style props
 * on the label plus a rest-spread onto the input.
 */

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "defaultChecked" | "onChange" | "className" | "style"
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className,
  style,
  children,
  ...control
}: SwitchProps) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const value = isControlled ? checked : internal;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.checked;
    if (!isControlled) setInternal(next);
    onCheckedChange?.(next);
  }

  return (
    <label className={cn("o-switch", className)} style={style}>
      {children ? <span className="o-switch__label">{children}</span> : null}
      <input
        type="checkbox"
        role="switch"
        className="o-switch__input"
        checked={value}
        disabled={disabled}
        onChange={handleChange}
        {...control}
      />
      <span className="o-switch__track" aria-hidden="true">
        <span className="o-switch__thumb" />
      </span>
    </label>
  );
}
