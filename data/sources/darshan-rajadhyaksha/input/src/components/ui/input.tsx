import * as React from "react";
import { cn } from "tailwind-variants";
import inputDefaultStyles, {
  type InputVariants,
  type ThemeColors,
} from "@/components/ui/input-utils/style";

type ExtendedComponentProps = {
  "data-testId"?: string;
  "data-testid"?: string;
};

type InputSlotProps = {
  base?: React.ComponentProps<"div"> & ExtendedComponentProps;
  prefix?: React.ComponentProps<"span"> & ExtendedComponentProps;
  suffix?: React.ComponentProps<"span"> & ExtendedComponentProps;
};

type InputTypes =
  | "number"
  | "search"
  | "time"
  | "image"
  | "text"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "password"
  | "tel"
  | "url"
  | "week";

export type InputProps = {
  className?: string;
  color?: keyof ThemeColors;
  disabled?: boolean;
  fullWidth?: boolean;
  inputSize?: number;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  prefix?: React.ReactNode;
  size?: InputVariants["size"];
  slotProps?: InputSlotProps;
  suffix?: React.ReactNode;
  type?: InputTypes;
  variant?: InputVariants["variant"];
} & Omit<
  React.ComponentProps<"input">,
  "type" | "onInput" | "prefix" | "size" | "className"
>;

/**
 * Ported from rocksolidjs.com's SolidJS <Input /> (src/components/Input/Input.tsx)
 * by Darshan Rajadhyaksha, MIT licensed. Same props, DOM structure and styling
 * logic; Solid's reactive primitives (createMemo/mergeProps/splitProps/Show) are
 * replaced with plain React equivalents, and the optional runtime ThemeProvider
 * override is not included (the component always renders with the library's
 * default theme tokens, same as using the original without a ThemeProvider).
 */
const Input = ({
  className,
  color = "default",
  disabled = false,
  fullWidth,
  inputSize,
  prefix,
  size = "medium",
  slotProps,
  suffix,
  type = "text",
  variant = "outlined",
  ...rest
}: InputProps) => {
  const classes = inputDefaultStyles({
    color,
    disabled,
    variant,
    size,
    fullWidth,
  });

  return (
    <div
      {...slotProps?.base}
      className={cn(classes.base(), slotProps?.base?.className)}
    >
      {prefix ? (
        <span
          {...slotProps?.prefix}
          className={cn(classes.prefix(), slotProps?.prefix?.className)}
        >
          {prefix}
        </span>
      ) : null}
      <input
        {...rest}
        type={type}
        disabled={disabled}
        size={inputSize}
        className={cn(classes.input(), className)}
      />
      {suffix ? (
        <span
          {...slotProps?.suffix}
          className={cn(classes.suffix(), slotProps?.suffix?.className)}
        >
          {suffix}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
