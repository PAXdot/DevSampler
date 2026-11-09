"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

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
        "flex w-full flex-col gap-1",
        align === "end" ? "items-end" : "items-start",
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
      className={cn("flex max-w-[85%] flex-col gap-2", className)}
      {...props}
    />
  );
}

function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "text-muted-foreground flex items-center text-xs",
        className,
      )}
      {...props}
    />
  );
}

function Bubble({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "muted" | "ghost";
}) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      className={cn(
        "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "muted" && "bg-muted text-foreground",
        variant === "ghost" && "bg-transparent px-0 py-0 text-foreground",
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

function Marker({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="marker"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function MarkerIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      className={cn(
        "text-muted-foreground inline-flex size-4 shrink-0 items-center justify-center",
        className,
      )}
      {...props}
    />
  );
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

const ANSWER =
  "The tax service began retrying every confirm call at 14:05, twice at 400ms each, so p95 on POST /api/checkout/confirm went from 240ms to 3.1s. The database was never the bottleneck: connection wait stayed under 5ms for the whole window. Rolling the tax client back to 1.8.3 at 14:41 returned p95 to 260ms within two minutes.";

const PENDING_MS = 900;
const STEP_MS = 24;
const STEP_CHARS = 4;

/*
 * Announcing every chunk turns the reply into a stutter, so one live region
 * carries the two states worth interrupting for. It is a permanent child, not
 * swapped in with its text: a region inserted with its content is not read.
 */
export function Pattern() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed >= ANSWER.length) return;
    /*
     * Reduced motion gets the whole answer, not a faster crawl. Someone who
     * asked for less movement wants the text, not the same effect rushed.
     */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(ANSWER.length);
      return;
    }
    const id = window.setTimeout(
      () => setRevealed((count) => Math.min(count + STEP_CHARS, ANSWER.length)),
      revealed === 0 ? PENDING_MS : STEP_MS,
    );
    return () => window.clearTimeout(id);
  }, [revealed]);

  const done = revealed >= ANSWER.length;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
      <Message align="end">
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Why did eu-west checkout latency spike at 14:05?
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      <Message>
        <MessageContent>
          <span role="status" className="sr-only">
            {done ? "Reply ready" : revealed === 0 ? "Generating reply" : ""}
          </span>
          {/*
            The bubble is mounted in both states rather than swapped out, so
            aria-busy covers the wait and the footer keeps its ghost padding.
          */}
          <Bubble variant="ghost" aria-busy={!done}>
            <BubbleContent>
              {revealed === 0 ? (
                <Marker>
                  <MarkerIcon>
                    <Spinner />
                  </MarkerIcon>
                  <MarkerContent>
                    <span className="animate-pulse motion-reduce:animate-none">
                      Reading the 14:00 to 14:10 trace...
                    </span>
                  </MarkerContent>
                </Marker>
              ) : (
                <p className="whitespace-pre-wrap">
                  {ANSWER.slice(0, revealed)}
                  {done ? null : (
                    <span
                      aria-hidden="true"
                      className="bg-foreground ms-0.5 inline-block h-[1em] w-0.5 translate-y-0.5"
                    />
                  )}
                </p>
              )}
            </BubbleContent>
          </Bubble>
          {/*
            The footer stays mounted so Replay survives its own click. A button
            that unmounts the moment it is activated drops focus to the body.
          */}
          <MessageFooter className="gap-2">
            <span className="tabular-nums">14:45</span>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={() => setRevealed(0)}
            >
              Replay
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}
export default Pattern;
