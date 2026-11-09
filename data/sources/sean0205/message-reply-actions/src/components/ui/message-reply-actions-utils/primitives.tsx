"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/* Minimal local stand-ins for the reui `bubble` and `message` primitives,
 * since those aren't part of the shadcn/ui base registry. */

type MessageProps = React.ComponentProps<"div"> & {
  align?: "start" | "end"
}

export function Message({
  align = "start",
  className,
  ...props
}: MessageProps) {
  return (
    <div
      data-align={align}
      className={cn(
        "flex w-full flex-col gap-1",
        align === "end" ? "items-end" : "items-start",
        className
      )}
      {...props}
    />
  )
}

export function MessageContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex max-w-full flex-col gap-1", className)}
      {...props}
    />
  )
}

export function MessageFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

type BubbleProps = React.ComponentProps<"div"> & {
  variant?: "default" | "muted" | "ghost"
}

export function Bubble({
  variant = "default",
  className,
  ...props
}: BubbleProps) {
  return (
    <div
      className={cn(
        "rounded-2xl text-sm",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "muted" && "bg-muted text-foreground",
        variant === "ghost" && "bg-transparent p-0 text-foreground",
        className
      )}
      {...props}
    />
  )
}

export function BubbleContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-4 py-2.5 leading-relaxed", className)}
      {...props}
    />
  )
}
