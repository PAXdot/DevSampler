"use client"

import * as React from "react"
import { cn } from "cn"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "flex h-9 w-full items-center rounded-md border border-input bg-background px-3 text-sm shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
        className
      )}
      {...props}
    />
  )
}

function InputGroupAddon({
  align = "inline-start",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "inline-start" | "inline-end"
}) {
  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(
        "flex items-center",
        align === "inline-start" && "mr-2",
        align === "inline-end" && "ml-2",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input-group-input"
      className={cn(
        "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

const inputGroupButtonSizes = {
  xs: "h-6 px-2 text-xs",
  "icon-xs": "h-6 w-6 p-0",
} as const

function InputGroupButton({
  className,
  variant = "ghost",
  size = "xs",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "ghost" | "outline" | "default"
  size?: keyof typeof inputGroupButtonSizes
}) {
  return (
    <button
      type="button"
      data-slot="input-group-button"
      data-variant={variant}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
        inputGroupButtonSizes[size],
        className
      )}
      {...props}
    />
  )
}

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput }
