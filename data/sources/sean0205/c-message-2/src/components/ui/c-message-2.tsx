import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function Bubble({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "muted" }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      className={cn(
        "inline-block max-w-full rounded-2xl px-4 py-2 text-sm leading-relaxed",
        variant === "muted"
          ? "bg-muted text-foreground"
          : "bg-primary text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
}

function BubbleContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-content"
      className={cn("whitespace-pre-wrap", className)}
      {...props}
    />
  );
}

function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "flex w-full items-end gap-2",
        align === "end" && "flex-row-reverse",
        className,
      )}
      {...props}
    />
  );
}

function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "shrink-0 self-end overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn("flex max-w-[80%] flex-col gap-1", className)}
      {...props}
    />
  );
}

/*
 * Small enough (and specific to this pattern's avatar+dot layout) that it
 * lives beside the pattern instead of in its own utils file.
 */
function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 block size-2.5 rounded-full ring-2 ring-background",
        className,
      )}
      {...props}
    />
  );
}

/*
 * Hoisted because each person speaks twice. Repeating a 90-character URL per
 * turn is how a thread ends up rendering two crops of one face.
 */
const MICHAEL_AVATAR =
  "https://cdn.21st.dev/assets/mirror/80/80037eb615485428bea8d3554ac30b5c9cad6f234b5c6a6df293e727429bb29e.jpg";
const SARAH_AVATAR =
  "https://cdn.21st.dev/assets/mirror/30/3046299adaf36760e400c8c71d6f738d8dbec09de899c2b15eba88fcaa8d4ef0.jpg";

/*
 * MessageAvatar is self-end, so the third message runs long on purpose: a
 * wrapped turn is the only state in which the bottom anchoring is visible.
 */
export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <Message>
        {/*
          MessageAvatar is a circular clip the size of the portrait, so a badge
          in its square corner loses half of itself. Badged rows opt out of it.
        */}
        <MessageAvatar className="overflow-visible">
          <Avatar>
            <AvatarImage src={MICHAEL_AVATAR} alt="Michael Rodriguez" />
            <AvatarFallback>MR</AvatarFallback>
            {/*
              Presence would be colour-only without the label, so the dot keeps
              its own sr-only text.
            */}
            <AvatarBadge className="bg-green-500">
              <span className="sr-only">Online</span>
            </AvatarBadge>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              eu-west checkout is timing out. It started around 14:05.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src={SARAH_AVATAR} alt="Sarah Chen" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Looking now. Is it every request or one route?
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      <Message>
        <MessageAvatar className="overflow-visible">
          <Avatar>
            <AvatarImage src={MICHAEL_AVATAR} alt="Michael Rodriguez" />
            <AvatarFallback>MR</AvatarFallback>
            <AvatarBadge className="bg-green-500">
              <span className="sr-only">Online</span>
            </AvatarBadge>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Only POST /api/checkout/confirm. p95 went from 240ms to 3.1s and
              the error rate is sitting at 4.2 percent. Every other route in the
              region is flat.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src={SARAH_AVATAR} alt="Sarah Chen" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Pulling the traces for that window now.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
}
export default Pattern;
