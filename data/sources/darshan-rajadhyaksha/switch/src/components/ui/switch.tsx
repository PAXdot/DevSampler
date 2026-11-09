import * as React from "react";
import { tv, cn, type VariantProps } from "tailwind-variants";

// ---------------------------------------------------------------------------
// Default theme tokens, ported from RockSolid's src/components/styles/theme
// (colors.ts, rounded.ts, utilities.ts). RockSolid lets consumers override
// these at runtime via a ThemeProvider context; that runtime override system
// is a separate, app-wide concern and is not part of the Switch component
// itself, so only the DEFAULT token values are inlined here.
// ---------------------------------------------------------------------------

type ThemeColorStateTokens = {
  background: string;
  text: string;
  border: string;
  hover: string;
  active: string;
};

type ThemeColorVariants = {
  solid: ThemeColorStateTokens;
  filled: ThemeColorStateTokens;
  outlined: ThemeColorStateTokens;
  ghost: ThemeColorStateTokens;
};

export type ThemeColors = {
  default: ThemeColorVariants;
  success: ThemeColorVariants;
  warning: ThemeColorVariants;
  info: ThemeColorVariants;
  error: ThemeColorVariants;
};

const themeColors: ThemeColors = {
  default: {
    solid: {
      background: "bg-neutral-900 dark:bg-neutral-100",
      text: "text-neutral-50 dark:text-neutral-950",
      border: "border-transparent",
      hover: "hover:bg-neutral-800 dark:hover:bg-neutral-200",
      active: "active:bg-neutral-950 dark:active:bg-neutral-300",
    },
    filled: {
      background: "bg-neutral-200/70 dark:bg-neutral-800",
      text: "text-neutral-900 dark:text-neutral-100",
      border: "border-transparent",
      hover: "hover:bg-neutral-200 dark:hover:bg-neutral-700",
      active: "active:bg-neutral-300 dark:active:bg-neutral-600",
    },
    outlined: {
      background: "bg-transparent",
      text: "text-neutral-800 dark:text-neutral-200",
      border: "border-neutral-400 dark:border-neutral-500",
      hover: "hover:bg-neutral-100 dark:hover:bg-neutral-800/80",
      active: "active:bg-neutral-200/80 dark:active:bg-neutral-700/80",
    },
    ghost: {
      background: "bg-transparent",
      text: "text-neutral-800 dark:text-neutral-200",
      border: "border-transparent",
      hover: "hover:bg-neutral-100 dark:hover:bg-neutral-800/80",
      active: "active:bg-neutral-200/80 dark:active:bg-neutral-700/80",
    },
  },
  success: {
    solid: {
      background: "bg-emerald-600 dark:bg-emerald-500",
      text: "text-white dark:text-neutral-950",
      border: "border-transparent",
      hover: "hover:bg-emerald-700 dark:hover:bg-emerald-400",
      active: "active:bg-emerald-800 dark:active:bg-emerald-300",
    },
    filled: {
      background: "bg-emerald-100 dark:bg-emerald-950/90",
      text: "text-emerald-900 dark:text-emerald-200",
      border: "border-transparent",
      hover: "hover:bg-emerald-200/80 dark:hover:bg-emerald-900",
      active: "active:bg-emerald-300/80 dark:active:bg-emerald-850",
    },
    outlined: {
      background: "bg-transparent",
      text: "text-emerald-800 dark:text-emerald-300",
      border: "border-emerald-800 dark:border-emerald-300",
      hover: "hover:bg-emerald-50 dark:hover:bg-emerald-950/60",
      active: "active:bg-emerald-100 dark:active:bg-emerald-900/80",
    },
    ghost: {
      background: "bg-transparent",
      text: "text-emerald-800 dark:text-emerald-300",
      border: "border-transparent",
      hover: "hover:bg-emerald-50 dark:hover:bg-emerald-950/60",
      active: "active:bg-emerald-100 dark:active:bg-emerald-900/80",
    },
  },
  warning: {
    solid: {
      background: "bg-amber-500 dark:bg-amber-400",
      text: "text-amber-950 dark:text-amber-950",
      border: "border-transparent",
      hover: "hover:bg-amber-600 dark:hover:bg-amber-300",
      active: "active:bg-amber-700 dark:active:bg-amber-200",
    },
    filled: {
      background: "bg-amber-100 dark:bg-amber-950/90",
      text: "text-amber-950 dark:text-amber-200",
      border: "border-transparent",
      hover: "hover:bg-amber-200/80 dark:hover:bg-amber-900",
      active: "active:bg-amber-300/80 dark:active:bg-amber-850",
    },
    outlined: {
      background: "bg-transparent",
      text: "text-amber-900 dark:text-amber-300",
      border: "border-amber-900 dark:border-amber-300",
      hover: "hover:bg-amber-50 dark:hover:bg-amber-950/60",
      active: "active:bg-amber-100 dark:active:bg-amber-900/80",
    },
    ghost: {
      background: "bg-transparent",
      text: "text-amber-900 dark:text-amber-300",
      border: "border-transparent",
      hover: "hover:bg-amber-50 dark:hover:bg-amber-950/60",
      active: "active:bg-amber-100 dark:active:bg-amber-900/80",
    },
  },
  info: {
    solid: {
      background: "bg-blue-600 dark:bg-blue-500",
      text: "text-white dark:text-neutral-950",
      border: "border-transparent",
      hover: "hover:bg-blue-700 dark:hover:bg-blue-400",
      active: "active:bg-blue-800 dark:active:bg-blue-300",
    },
    filled: {
      background: "bg-blue-100 dark:bg-blue-950/90",
      text: "text-blue-950 dark:text-blue-200",
      border: "border-transparent",
      hover: "hover:bg-blue-200/80 dark:hover:bg-blue-900",
      active: "active:bg-blue-300/80 dark:active:bg-blue-850",
    },
    outlined: {
      background: "bg-transparent",
      text: "text-blue-800 dark:text-blue-300",
      border: "border-blue-800 dark:border-blue-300",
      hover: "hover:bg-blue-50 dark:hover:bg-blue-950/60",
      active: "active:bg-blue-100 dark:active:bg-blue-900/80",
    },
    ghost: {
      background: "bg-transparent",
      text: "text-blue-800 dark:text-blue-300",
      border: "border-transparent",
      hover: "hover:bg-blue-50 dark:hover:bg-blue-950/60",
      active: "active:bg-blue-100 dark:active:bg-blue-900/80",
    },
  },
  error: {
    solid: {
      background: "bg-red-600 dark:bg-red-500",
      text: "text-white dark:text-neutral-950",
      border: "border-transparent",
      hover: "hover:bg-red-700 dark:hover:bg-red-400",
      active: "active:bg-red-800 dark:active:bg-red-300",
    },
    filled: {
      background: "bg-red-100 dark:bg-red-950/90",
      text: "text-red-950 dark:text-red-200",
      border: "border-transparent",
      hover: "hover:bg-red-200/80 dark:hover:bg-red-900",
      active: "active:bg-red-300/80 dark:active:bg-red-850",
    },
    outlined: {
      background: "bg-transparent",
      text: "text-red-800 dark:text-red-300",
      border: "border-red-800 dark:border-red-300",
      hover: "hover:bg-red-50 dark:hover:bg-red-950/60",
      active: "active:bg-red-100 dark:active:bg-red-900/80",
    },
    ghost: {
      background: "bg-transparent",
      text: "text-red-800 dark:text-red-300",
      border: "border-transparent",
      hover: "hover:bg-red-50 dark:hover:bg-red-950/60",
      active: "active:bg-red-100 dark:active:bg-red-900/80",
    },
  },
};

// theme.rounded.full
const roundedFull = "rounded-full";
// theme.focusWithin
const focusWithinClass =
  "focus-within:shadow-[0_0_0_1px_#2563eb,0_0_0_4px_rgba(37,99,235,0.45)] dark:focus-within:shadow-[0_0_0_1px_#60a5fa,0_0_0_4px_rgba(96,165,250,0.45)]";

// ---------------------------------------------------------------------------
// Ported from src/components/Switch/style.ts
// ---------------------------------------------------------------------------
const switchStyles = tv({
  slots: {
    base: ["relative", roundedFull, focusWithinClass],
    handle: [
      "absolute translate-y-[2px]",
      "ltr:translate-x-[2px] rtl:-translate-x-[2px]",
      "bg-white shadow-sm",
      roundedFull,
    ],
    input: "absolute inset-0 w-full h-full opacity-0 outline-none",
  },
  variants: {
    checked: {
      true: {},
      false: {},
    },
    color: {
      default: {},
      success: {},
      warning: {},
      info: {},
      error: {},
    },
    disabled: {
      true: {
        base: ["opacity-50"],
      },
      false: {},
    },
    disableTransition: {
      true: {},
      false: {
        base: "transition-[background] duration-300",
        handle: "transition-[translate] duration-300",
      },
    },
    size: {
      small: {
        base: "w-8 h-5",
        handle: "size-4",
      },
      medium: {
        base: "w-10 h-6",
        handle: "size-5",
      },
      large: {
        base: "w-12 h-7",
        handle: "size-6",
      },
    },
  },
  compoundVariants: [
    ...(Object.keys(themeColors) as Array<keyof ThemeColors>).flatMap(
      (color) => [
        {
          color,
          checked: false,
          class: {
            base: "bg-neutral-300 dark:bg-neutral-700",
          },
        },
        {
          color,
          checked: true,
          class: {
            base: [themeColors[color].solid.background],
          },
        },
      ],
    ),
    {
      checked: true,
      size: "small",
      class: {
        handle: "ltr:translate-x-[14px] rtl:-translate-x-[14px]",
      },
    },
    {
      checked: true,
      size: "medium",
      class: {
        handle: "ltr:translate-x-[18px] rtl:-translate-x-[18px]",
      },
    },
    {
      checked: true,
      size: "large",
      class: {
        handle: "ltr:translate-x-[22px] rtl:-translate-x-[22px]",
      },
    },
    {
      color: "default",
      checked: true,
      class: {
        handle: "dark:bg-neutral-900",
      },
    },
  ],
});

type SwitchVariants = VariantProps<typeof switchStyles>;

// ---------------------------------------------------------------------------
// Ported from src/components/Switch/Switch.tsx (SolidJS -> React)
// ---------------------------------------------------------------------------
export type SwitchProps = {
  checked?: boolean;
  className?: string;
  color?: keyof ThemeColors;
  defaultChecked?: boolean;
  disabled?: boolean;
  disableTransition?: boolean;
  id?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  size?: SwitchVariants["size"];
  slotProps?: {
    base?: React.ComponentProps<"span">;
    handle?: React.ComponentProps<"span">;
  };
} & Omit<
  React.ComponentProps<"input">,
  "type" | "onChange" | "size" | "className"
>;

const Switch = (props: SwitchProps) => {
  const {
    checked,
    className,
    color = "default",
    defaultChecked,
    disabled,
    disableTransition = false,
    id,
    onChange,
    size = "medium",
    slotProps,
    ...rest
  } = props;

  const isControlled = typeof checked === "boolean";

  const [localChecked, setLocalChecked] = React.useState(!!defaultChecked);

  const isChecked = isControlled ? !!checked : localChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = event.currentTarget.checked;
    if (!isControlled) {
      setLocalChecked(nextChecked);
    }
    onChange?.(event, nextChecked);
  };

  const classes = switchStyles({
    checked: isChecked,
    color,
    disabled,
    disableTransition,
    size,
  });

  return (
    <span
      {...slotProps?.base}
      className={cn(classes.base(), slotProps?.base?.className)}
    >
      <span
        {...slotProps?.handle}
        className={cn(classes.handle(), slotProps?.handle?.className)}
      />
      <input
        {...rest}
        id={id}
        role="switch"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={cn(classes.input(), className)}
      />
    </span>
  );
};

export default Switch;
