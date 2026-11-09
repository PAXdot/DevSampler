import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";

type IconNode = ComponentProps<typeof HugeiconsIcon>["icon"];

interface IconProps {
  /** Any icon from @hugeicons/core-free-icons. */
  icon: IconNode;
  size?: number | string;
  /** Accessible name. Without it the icon is decorative and hidden from screen readers. */
  label?: string;
  /** Overrides the icon's stroke width (Hugeicons default 1.5). */
  strokeWidth?: number;
  className?: string;
}

export default function Icon({ icon, size = 18, label, strokeWidth, className }: IconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
