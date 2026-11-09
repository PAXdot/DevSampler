"use client";

import type { ButtonHTMLAttributes } from "react";
import Icon from "./icon";
import { cn } from "@/lib/utils";

interface InputButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Always named: it's an icon with no visible text. */
  "aria-label": string;
  icon: Parameters<typeof Icon>[0]["icon"];
}

// A small square button inside a field's box: show password, clear, copy.
export default function InputButton({ icon, className, ...rest }: InputButtonProps) {
  return (
    <button type="button" className={cn("ib-input-button", className)} {...rest}>
      <Icon icon={icon} size={16} />
    </button>
  );
}
