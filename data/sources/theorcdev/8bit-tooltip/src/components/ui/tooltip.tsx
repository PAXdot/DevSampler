"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type TooltipContextValue = {
  open: boolean
  setOpen: (next: boolean) => void
  delay: number
  enter: () => void
  leave: () => void
}
const TooltipContext = React.createContext<TooltipContextValue | null>(null)
const useTooltip = () => {
  const ctx = React.useContext(TooltipContext)
  if (!ctx) throw new Error("Tooltip subcomponents must be used inside <Tooltip>")
  return ctx
}

const TooltipProvider = ({ children, delayDuration }: { children: React.ReactNode; delayDuration?: number }) => <>{children}</>

type TooltipProps = {
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
}

const Tooltip = ({ open, defaultOpen, onOpenChange, delayDuration = 200, children }: TooltipProps) => {
  const isControlled = open !== undefined
  const [internal, setInternal] = React.useState<boolean>(!!defaultOpen)
  const value = isControlled ? !!open : internal
  const setOpen = (next: boolean) => {
    if (!isControlled) setInternal(next)
    onOpenChange?.(next)
  }
  // SHARED timers so trigger AND content cooperate.
  const tOpen = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const tClose = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const enter = React.useCallback(() => {
    if (tClose.current) { clearTimeout(tClose.current); tClose.current = null }
    if (tOpen.current) clearTimeout(tOpen.current)
    tOpen.current = setTimeout(() => setOpen(true), delayDuration)
  }, [delayDuration])
  const leave = React.useCallback(() => {
    if (tOpen.current) { clearTimeout(tOpen.current); tOpen.current = null }
    if (tClose.current) clearTimeout(tClose.current)
    tClose.current = setTimeout(() => setOpen(false), 150)
  }, [])
  return (
    <TooltipContext.Provider value={{ open: value, setOpen, delay: delayDuration, enter, leave }}>
      <span data-slot="tooltip" className="relative inline-block">
        {children}
      </span>
    </TooltipContext.Provider>
  )
}

type TooltipTriggerProps = React.HTMLAttributes<HTMLSpanElement> & { asChild?: boolean }
const TooltipTrigger = React.forwardRef<HTMLSpanElement, TooltipTriggerProps>(
  ({ asChild, onMouseEnter, onMouseLeave, onFocus, onBlur, children, className, ...props }, ref) => {
    const { enter, leave } = useTooltip()
    return (
      <span
        ref={ref}
        data-slot="tooltip-trigger"
        className={cn("inline-flex", className)}
        onMouseEnter={(e) => { enter(); onMouseEnter?.(e) }}
        onMouseLeave={(e) => { leave(); onMouseLeave?.(e) }}
        onFocus={(e) => { enter(); onFocus?.(e) }}
        onBlur={(e) => { leave(); onBlur?.(e) }}
        {...props}
      >
        {children}
      </span>
    )
  },
)
TooltipTrigger.displayName = "TooltipTrigger"

type TooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ side = "top", sideOffset = 8, className, children, ...props }, ref) => {
    const { open, enter, leave } = useTooltip()
    if (!open) return null
    const sideClass =
      side === "top" ? "bottom-full left-1/2 -translate-x-1/2" :
      side === "bottom" ? "top-full left-1/2 -translate-x-1/2" :
      side === "left" ? "right-full top-1/2 -translate-y-1/2" :
      "left-full top-1/2 -translate-y-1/2"
    return (
      <div
        ref={ref}
        role="tooltip"
        data-slot="tooltip-content"
        data-state="open"
        onMouseEnter={enter}
        onMouseLeave={leave}
        className={cn(
          "absolute z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 whitespace-nowrap pointer-events-none",
          sideClass,
          className,
        )}
        style={{
          marginBottom: side === "top" ? sideOffset : undefined,
          marginTop: side === "bottom" ? sideOffset : undefined,
          marginLeft: side === "right" ? sideOffset : undefined,
          marginRight: side === "left" ? sideOffset : undefined,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
