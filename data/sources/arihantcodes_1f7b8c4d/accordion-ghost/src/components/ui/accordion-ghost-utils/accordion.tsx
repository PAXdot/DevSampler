"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionVariant = "default" | "card" | "filled" | "ghost";
type AccordionIndicator = "chevron" | "plus" | "none";

const AccordionStyleContext = React.createContext<{
  variant: AccordionVariant;
  indicator: AccordionIndicator;
}>({ variant: "default", indicator: "chevron" });

const rootStyles: Record<AccordionVariant, string> = {
  default: "divide-y divide-black/[0.07] dark:divide-white/10",
  card: "space-y-3",
  filled: "space-y-2",
  ghost: "space-y-1",
};

const itemStyles: Record<AccordionVariant, string> = {
  default: "",
  card: "overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-colors data-[state=open]:border-black/[0.14] dark:border-white/10 dark:bg-white/[0.02] dark:data-[state=open]:border-white/20",
  filled:
    "overflow-hidden rounded-xl bg-black/[0.03] transition-colors data-[state=open]:bg-black/[0.05] dark:bg-white/[0.04] dark:data-[state=open]:bg-white/[0.07]",
  ghost: "",
};

const triggerStyles: Record<AccordionVariant, string> = {
  default:
    "gap-4 py-4 text-[15px] hover:text-black dark:hover:text-white [&[data-state=open]]:text-black dark:[&[data-state=open]]:text-white",
  card: "gap-4 px-5 py-4 text-[15px] hover:text-black dark:hover:text-white",
  filled:
    "gap-4 px-4 py-3.5 text-[15px] hover:text-black dark:hover:text-white",
  ghost:
    "gap-3 rounded-lg py-3 text-[15px] hover:text-black dark:hover:text-white",
};

const contentStyles: Record<AccordionVariant, string> = {
  default: "pb-5 pr-8",
  card: "px-5 pb-5 pr-10",
  filled: "px-4 pb-4 pr-10",
  ghost: "pb-4 pr-8",
};

const Accordion = ({
  className,
  variant = "default",
  indicator = "chevron",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant;
  indicator?: AccordionIndicator;
}) => (
  <AccordionStyleContext.Provider value={{ variant, indicator }}>
    <AccordionPrimitive.Root
      className={cn(rootStyles[variant], className)}
      {...props}
    />
  </AccordionStyleContext.Provider>
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(AccordionStyleContext);
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(itemStyles[variant], className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const PlusIndicator = () => (
  <span
    aria-hidden="true"
    className="relative size-4 shrink-0 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
  >
    <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 rounded-full bg-current" />
    <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-out group-data-[state=open]:scale-y-0" />
  </span>
);

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant, indicator } = React.useContext(AccordionStyleContext);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between text-left font-medium text-neutral-700 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-neutral-900/15 dark:text-neutral-200 dark:focus-visible:ring-white/25",
          triggerStyles[variant],
          className,
        )}
        {...props}
      >
        {children}
        {indicator === "chevron" && (
          <ChevronDown
            aria-hidden="true"
            className="size-4 shrink-0 text-neutral-400 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180 dark:text-neutral-500"
            strokeWidth={2}
          />
        )}
        {indicator === "plus" && <PlusIndicator />}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionStyleContext);
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm leading-relaxed text-neutral-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-neutral-400"
      {...props}
    >
      <div className={cn(contentStyles[variant], className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
