import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const attachmentVariants = cva(
  "group relative flex items-center gap-2.5 rounded-lg border border-border bg-card text-left transition-colors hover:bg-accent/50",
  {
    variants: {
      size: {
        default: "p-3",
        sm: "p-2.5",
        xs: "gap-1.5 rounded-md border-none bg-muted/60 px-2 py-1.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type AttachmentSize = "default" | "sm" | "xs"

const AttachmentSizeContext = React.createContext<AttachmentSize>("default")

function useAttachmentSize() {
  return React.useContext(AttachmentSizeContext)
}

interface AttachmentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof attachmentVariants> {}

function Attachment({ className, size = "default", ...props }: AttachmentProps) {
  const resolvedSize = size ?? "default"
  return (
    <AttachmentSizeContext.Provider value={resolvedSize}>
      <div
        data-slot="attachment"
        data-size={resolvedSize}
        className={cn(attachmentVariants({ size: resolvedSize }), className)}
        {...props}
      />
    </AttachmentSizeContext.Provider>
  )
}

function AttachmentMedia({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const size = useAttachmentSize()
  return (
    <div
      data-slot="attachment-media"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
        size === "xs" ? "size-5" : size === "sm" ? "size-8" : "size-9",
        className
      )}
      {...props}
    />
  )
}

function AttachmentContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="attachment-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    />
  )
}

function AttachmentTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const size = useAttachmentSize()
  return (
    <p
      data-slot="attachment-title"
      className={cn(
        "truncate font-medium text-foreground",
        size === "xs" ? "text-xs" : "text-sm",
        className
      )}
      {...props}
    />
  )
}

function AttachmentDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="attachment-description"
      className={cn(
        "flex items-center text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function AttachmentGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        "flex w-full gap-2 overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

export {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
}
