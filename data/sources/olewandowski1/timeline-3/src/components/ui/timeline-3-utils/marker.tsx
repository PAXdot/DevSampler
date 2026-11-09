import * as React from "react"
import { cn } from "@/lib/utils"

type MarkerVariant = "separator"

function Marker({
  variant = "separator",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { variant?: MarkerVariant }) {
  return (
    <div
      data-slot="marker"
      data-variant={variant}
      className={cn(
        "relative flex items-center gap-3 text-xs font-medium text-muted-foreground",
        "before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function MarkerContent({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn("shrink-0 px-1 uppercase tracking-wide", className)}
      {...props}
    />
  )
}

export { Marker, MarkerContent }
export default Marker
