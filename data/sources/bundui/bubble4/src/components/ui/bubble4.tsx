import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type BubbleContextValue = {
  variant: NonNullable<VariantProps<typeof bubbleContentVariants>["variant"]>;
};

const BubbleContext = React.createContext<BubbleContextValue>({
  variant: "default",
});

const bubbleVariants = cva("relative flex w-fit max-w-[85%] flex-col gap-1", {
  variants: {
    align: {
      start: "self-start items-start",
      end: "self-end items-end",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

const bubbleContentVariants = cva(
  "rounded-2xl px-4 py-2 text-sm leading-relaxed break-words",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-foreground",
        tinted: "bg-primary/10 text-foreground",
        outline: "border border-border bg-background text-foreground",
        ghost: "bg-transparent text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BubbleProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants>,
    VariantProps<typeof bubbleContentVariants> {}

function Bubble({ className, align, variant, ...props }: BubbleProps) {
  return (
    <BubbleContext.Provider value={{ variant: variant ?? "default" }}>
      <div
        data-slot="bubble"
        className={cn(bubbleVariants({ align }), className)}
        {...props}
      />
    </BubbleContext.Provider>
  );
}

export interface BubbleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function BubbleContent({ className, ...props }: BubbleContentProps) {
  const { variant } = React.useContext(BubbleContext);
  return (
    <div
      data-slot="bubble-content"
      className={cn(bubbleContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface BubbleReactionsProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end";
  side?: "top" | "bottom";
}

function BubbleReactions({
  className,
  align = "end",
  side = "bottom",
  ...props
}: BubbleReactionsProps) {
  return (
    <div
      data-slot="bubble-reactions"
      className={cn(
        "flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-xs shadow-sm",
        align === "end" ? "self-end" : "self-start",
        side === "top" ? "-mt-1" : "mt-0",
        className,
      )}
      {...props}
    />
  );
}

export { Bubble, BubbleContent, BubbleReactions };

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble variant="muted">
        <BubbleContent>
          We just crossed 10k downloads on the starter kit!
        </BubbleContent>
        <BubbleReactions aria-label="Reactions: fire and party" role="img">
          <span>🔥</span>
          <span>🎉</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Huge milestone. Drinks are on me on Friday.
        </BubbleContent>
        <BubbleReactions
          align="start"
          aria-label="Reactions: thumbs up and 3 more"
          role="img"
        >
          <span>👍</span>
          <span>+3</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          Counting on that. I will bring the launch checklist so we can plan the
          next release too.
        </BubbleContent>
        <BubbleReactions aria-label="Reaction: eyes" role="img" side="top">
          <span>👀</span>
        </BubbleReactions>
      </Bubble>
    </div>
  );
}
