import * as React from "react";

/**
 * Ported from oyna-ui (Vue) Checkbox.vue by azabroflovski — https://github.com/azabroflovski/oyna-ui
 * MIT License. Copyright (c) 2026 azabroflovski.
 */
export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "onChange" | "className" | "style"
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Checkbox({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className,
  style,
  children,
  ...rest
}: CheckboxProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internal;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.checked;
    if (!isControlled) setInternal(next);
    onCheckedChange?.(next);
  }

  return (
    <label
      className={["o-checkbox", className].filter(Boolean).join(" ")}
      style={style}
    >
      <input
        checked={value}
        onChange={handleChange}
        type="checkbox"
        className="o-checkbox__input"
        disabled={disabled}
        {...rest}
      />
      <span className="o-checkbox__box" aria-hidden="true">
        <svg viewBox="0 0 12 12">
          <path d="M2.5 6.5 5 9l4.5-5.5" />
        </svg>
      </span>
      {children ? <span className="o-checkbox__label">{children}</span> : null}
    </label>
  );
}
