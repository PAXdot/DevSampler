"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CollapsibleContextValue = {
  open: boolean
  setOpen: (next: boolean) => void
}
const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null)
const useCollapsible = () => {
  const ctx = React.useContext(CollapsibleContext)
  if (!ctx) throw new Error("Collapsible subcomponents must be used inside <Collapsible>")
  return ctx
}

type CollapsibleProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ open, defaultOpen, onOpenChange, className, children, ...props }, ref) => {
    const isControlled = open !== undefined
    const [internal, setInternal] = React.useState<boolean>(!!defaultOpen)
    const value = isControlled ? !!open : internal
    const setOpen = (next: boolean) => {
      if (!isControlled) setInternal(next)
      onOpenChange?.(next)
    }
    return (
      <CollapsibleContext.Provider value={{ open: value, setOpen }}>
        <div
          ref={ref}
          data-slot="collapsible"
          data-state={value ? "open" : "closed"}
          className={className}
          {...props}
        >
          {children}
        </div>
      </CollapsibleContext.Provider>
    )
  },
)
Collapsible.displayName = "Collapsible"

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const { open, setOpen } = useCollapsible()
    return (
      <button
        ref={ref}
        type="button"
        data-slot="collapsible-trigger"
        data-state={open ? "open" : "closed"}
        aria-expanded={open}
        onClick={(e) => {
          setOpen(!open)
          onClick?.(e)
        }}
        className={className}
        {...props}
      />
    )
  },
)
CollapsibleTrigger.displayName = "CollapsibleTrigger"

const CollapsibleContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open } = useCollapsible()
    return (
      <div
        ref={ref}
        data-slot="collapsible-content"
        data-state={open ? "open" : "closed"}
        className={cn(
          "overflow-hidden transition-all",
          open ? "max-h-96" : "max-h-0",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
