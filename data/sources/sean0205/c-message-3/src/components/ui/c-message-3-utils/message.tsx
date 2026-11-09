import * as React from "react"

import { cn } from "@/lib/utils"

type MessageAlign = "start" | "end"

const MessageAlignContext = React.createContext<MessageAlign>("start")

function Message({
  align = "start",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { align?: MessageAlign }) {
  return (
    <MessageAlignContext.Provider value={align}>
      <div
        data-slot="message"
        data-align={align}
        className={cn(
          "flex w-full",
          align === "end" ? "justify-end" : "justify-start",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MessageAlignContext.Provider>
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn("flex max-w-[85%] flex-col gap-1", className)}
      {...props}
    />
  )
}

function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "flex items-center self-start px-1 text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  const align = React.useContext(MessageAlignContext)
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "flex items-center px-1 text-xs text-muted-foreground",
        align === "end" ? "self-end" : "self-start",
        className
      )}
      {...props}
    />
  )
}

export { Message, MessageContent, MessageHeader, MessageFooter }
