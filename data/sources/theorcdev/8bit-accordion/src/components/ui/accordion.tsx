"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type AccordionContextValue = {
  type: "single" | "multiple"
  value: string[]
  toggle: (v: string) => void
  collapsible: boolean
}
const AccordionContext = React.createContext<AccordionContextValue | null>(null)
const useAccordion = () => {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion subcomponents must be used inside <Accordion>")
  return ctx
}

const ItemContext = React.createContext<{ value: string } | null>(null)
const useItem = () => {
  const ctx = React.useContext(ItemContext)
  if (!ctx) throw new Error("AccordionTrigger/Content must be used inside <AccordionItem>")
  return ctx
}

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: any) => void
  collapsible?: boolean
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    { type = "single", value, defaultValue, onValueChange, collapsible = false, className, children, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined
    const initial = defaultValue ?? (type === "multiple" ? [] : "")
    const [internal, setInternal] = React.useState<string | string[]>(initial)
    const current = isControlled ? value! : internal
    const arr = Array.isArray(current) ? current : current ? [current] : []
    const toggle = (v: string) => {
      let next: string | string[]
      if (type === "multiple") {
        next = arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]
      } else {
        const isOpen = arr.includes(v)
        next = isOpen ? (collapsible ? "" : v) : v
      }
      if (!isControlled) setInternal(next)
      onValueChange?.(next)
    }
    return (
      <AccordionContext.Provider value={{ type, value: arr, toggle, collapsible }}>
        <div ref={ref} data-slot="accordion" className={className} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)
Accordion.displayName = "Accordion"

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & { value: string }

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => (
    <ItemContext.Provider value={{ value }}>
      <div ref={ref} data-slot="accordion-item" className={cn("border-b", className)} {...props}>
        {children}
      </div>
    </ItemContext.Provider>
  ),
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, onClick, ...props }, ref) => {
    const { value, toggle } = useAccordion()
    const { value: itemValue } = useItem()
    const open = value.includes(itemValue)
    return (
      <div className="flex">
        <button
          ref={ref}
          type="button"
          data-state={open ? "open" : "closed"}
          data-slot="accordion-trigger"
          aria-expanded={open}
          onClick={(e) => {
            toggle(itemValue)
            onClick?.(e)
          }}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className,
          )}
          {...props}
        >
          {children}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    )
  },
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { value } = useAccordion()
    const { value: itemValue } = useItem()
    const open = value.includes(itemValue)
    return (
      <div
        ref={ref}
        data-state={open ? "open" : "closed"}
        data-slot="accordion-content"
        className={cn(
          "overflow-hidden text-sm transition-all",
          open ? "max-h-96" : "max-h-0",
        )}
        {...props}
      >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    )
  },
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
