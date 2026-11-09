"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CheckboxProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, checked, defaultChecked, onCheckedChange, disabled, ...props }, ref) => {
    const isControlled = checked !== undefined
    const [internal, setInternal] = React.useState<boolean>(!!defaultChecked)
    const value = isControlled ? !!checked : internal
    const state = value ? "checked" : "unchecked"
    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={value}
        data-state={state}
        data-slot="checkbox"
        disabled={disabled}
        onClick={(e) => {
          if (disabled) return
          if (!isControlled) setInternal(!value)
          onCheckedChange?.(!value)
          props.onClick?.(e)
        }}
        className={cn(
          "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          className,
        )}
        {...props}
      >
        {value ? <CheckIcon className="h-4 w-4" /> : null}
      </button>
    )
  },
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
