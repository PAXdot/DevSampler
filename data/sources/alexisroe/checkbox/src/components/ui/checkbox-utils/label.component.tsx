/**
 * e-ink-ui-lib (MIT License) — https://github.com/AlexisRoe/e-ink-ui-lib
 */
import type { HTMLAttributes, LabelHTMLAttributes } from "react";
import { cx } from "./cx.utils";
import "./label.component.css";

/** Props accepted by {@link Label}. */
export type LabelProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Small uppercase label, rendered as a `<span>` in the secondary (Inter) font.
 *
 * @example
 * ```tsx
 * <Label>Battery status</Label>
 * ```
 */
export function Label({ className, children, ...rest }: LabelProps) {
  return (
    <span className={cx("eink-label", [className ?? "", !!className])} {...rest}>
      {children}
    </span>
  );
}

/** Props accepted by {@link Label.Form}. */
export type LabelFormProps = LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Uppercase label for form fields, rendered as a native `<label>` in a
 * slightly larger size than the base {@link Label}.
 *
 * @example
 * ```tsx
 * <Label.Form htmlFor="email">Email</Label.Form>
 * ```
 */
function FormLabel({ className, children, ...rest }: LabelFormProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is forwarded via rest when associating a field
    <label className={cx("eink-label eink-label--form", [className ?? "", !!className])} {...rest}>
      {children}
    </label>
  );
}

Label.Form = FormLabel;
