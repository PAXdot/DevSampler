import * as React from "react"

import { cn } from "@/lib/utils"

function Bubble({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "muted" }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      className={cn(
        "inline-flex max-w-full rounded-2xl",
        variant === "muted"
          ? "bg-muted text-foreground"
          : "bg-primary text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

function BubbleContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-content"
      className={cn("px-3.5 py-2 text-sm leading-relaxed", className)}
      {...props}
    />
  )
}

export { Bubble, BubbleContent }
