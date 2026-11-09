"use client";

import * as React from "react";

export interface MSwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "onChange" | "children"
> {
  /** Controlled checked state. Omit to use the component uncontrolled. */
  checked?: boolean;
  /** Initial checked state when uncontrolled. */
  defaultChecked?: boolean;
  /** Fired with the new checked value whenever the switch is toggled. */
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  /** Optional label rendered next to the switch. */
  children?: React.ReactNode;
}

/**
 * Ported from Millai UI's `MSwitch.vue`.
 * A native checkbox (role="switch") styled as an iOS-style toggle, wrapped in a
 * <label> so clicking the optional label text also toggles the switch.
 */
const MSwitch = React.forwardRef<HTMLInputElement, MSwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      className,
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] =
      React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = event.target.checked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <label
        className={`m-choice${disabled ? " m-choice--disabled" : ""}${className ? ` ${className}` : ""}`}
        style={style}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="m-switch"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
        {children ? <span className="m-choice__label">{children}</span> : null}
      </label>
    );
  },
);

MSwitch.displayName = "MSwitch";

export default MSwitch;
