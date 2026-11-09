"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type AttachmentState = "idle" | "uploading" | "success" | "error"
type AttachmentSize = "sm" | "default"

type AttachmentContextValue = {
  state: AttachmentState
  size: AttachmentSize
}

const AttachmentContext = React.createContext<AttachmentContextValue>({
  state: "idle",
  size: "default",
})

function useAttachmentContext() {
  return React.useContext(AttachmentContext)
}

function Attachment({
  state = "idle",
  size = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  state?: AttachmentState
  size?: AttachmentSize
}) {
  return (
    <AttachmentContext.Provider value={{ state, size }}>
      <div
        data-slot="attachment"
        data-state={state}
        data-size={size}
        className={cn(
          "relative flex items-center gap-3 rounded-lg border border-dashed border-border bg-background p-3 transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          size === "sm" && "gap-2.5 rounded-md border-solid p-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AttachmentContext.Provider>
  )
}

function AttachmentMedia({
  variant = "icon",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { variant?: "icon" | "image" }) {
  const { size } = useAttachmentContext()
  return (
    <div
      data-slot="attachment-media"
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground",
        size === "sm" ? "size-8" : "size-10",
        variant === "icon" && "[&_svg]:size-4",
        variant === "image" && "[&_img]:size-full [&_img]:object-cover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    />
  )
}

function AttachmentTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="attachment-title"
      className={cn(
        "truncate text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AttachmentDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="attachment-description"
      className={cn("truncate text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function AttachmentTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="attachment-trigger"
      className={cn(
        "absolute inset-0 size-full cursor-pointer rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    />
  )
}

function AttachmentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        "relative z-10 flex shrink-0 items-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentAction({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="attachment-action"
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground [&_svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentTrigger,
  AttachmentActions,
  AttachmentAction,
}
