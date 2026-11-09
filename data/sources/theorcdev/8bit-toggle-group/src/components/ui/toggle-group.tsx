"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ToggleGroupContextValue =
  | { type: "single"; value: string; setValue: (next: string) => void }
  | { type: "multiple"; value: string[]; setValue: (next: string[]) => void }

const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null)
const useToggleGroup = () => {
  const ctx = React.useContext(ToggleGroupContext)
  if (!ctx) throw new Error("ToggleGroupItem must be used inside <ToggleGroup>")
  return ctx
}

type ToggleGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: any) => void
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    { className, type = "single", value, defaultValue, onValueChange, children, variant, size, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState<any>(
      defaultValue ?? (type === "multiple" ? [] : ""),
    )
    const current = isControlled ? value! : internal
    const ctx: ToggleGroupContextValue =
      type === "multiple"
        ? {
            type: "multiple",
            value: (Array.isArray(current) ? current : []) as string[],
            setValue: (next) => {
              if (!isControlled) setInternal(next)
              onValueChange?.(next)
            },
          }
        : {
            type: "single",
            value: (current as string) ?? "",
            setValue: (next) => {
              if (!isControlled) setInternal(next)
              onValueChange?.(next)
            },
          }
    return (
      <ToggleGroupContext.Provider value={ctx}>
        <div
          ref={ref}
          role="group"
          data-slot="toggle-group"
          className={cn("inline-flex items-center justify-center gap-1", className)}
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    )
  },
)
ToggleGroup.displayName = "ToggleGroup"

type ToggleGroupItemProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value"> & {
  value: string
  variant?: "default" | "outline"
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, value, onClick, disabled, variant, ...props }, ref) => {
    const ctx = useToggleGroup()
    const active =
      ctx.type === "single" ? ctx.value === value : ctx.value.includes(value)
    const state = active ? "on" : "off"
    const toggle = () => {
      if (ctx.type === "single") {
        ctx.setValue(active ? "" : value)
      } else {
        const next = active ? ctx.value.filter((v) => v !== value) : [...ctx.value, value]
        ctx.setValue(next)
      }
    }
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={active}
        data-state={state}
        data-slot="toggle-group-item"
        disabled={disabled}
        onClick={(e) => {
          if (disabled) return
          toggle()
          onClick?.(e)
        }}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-3 min-w-9",
          className,
        )}
        {...props}
      />
    )
  },
)
ToggleGroupItem.displayName = "ToggleGroupItem"

export { ToggleGroup, ToggleGroupItem }
