"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/pricing-13-utils/badge";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/pricing-13-utils/toggle-group";
import { FancyButton } from "@/components/ui/pricing-13-utils/fancy-button";
import { CheckIcon } from "lucide-react";

const animVariant: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)", scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.03,
      type: "spring",
      damping: 22,
      stiffness: 280,
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    scale: 0.98,
    transition: { duration: 0.14 },
  },
};

type ScreenRange = {
  label: string;
  price: number;
};

const screenRanges: ScreenRange[] = [
  { label: "1 - 9", price: 18 },
  { label: "10 - 19", price: 16 },
  { label: "20 - 49", price: 14 },
  { label: "50+", price: 12 },
];

const coreFeatures = [
  "Unlimited workspace seats",
  "Hierarchical permission levels",
  "Uncapped data sources & streams",
  "Automated moderation & curation",
  "Custom branding (Logo & typography)",
  "Priority 24/7 technical support",
];

export function Pricing() {
  const [activeRange, setActiveRange] = useState(0);

  const activeRangeLabel = screenRanges[activeRange]!.label;
  const currentPrice = screenRanges[activeRange]!.price;
  const priceChars = String(currentPrice).split("");

  return (
    <section
      aria-label="Pricing"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 py-4"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Flexible pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Deploying a massive digital signage network with complex needs?{" "}
            <a
              href="#"
              className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
            >
              Inquire here
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-right text-sm font-medium text-foreground">
            How many displays do you manage?
          </span>
          <ToggleGroup
            value={[activeRangeLabel]}
            onValueChange={(value) => {
              if (!value[0]) return;
              const nextIndex = screenRanges.findIndex(
                (range) => range.label === value[0],
              );
              if (nextIndex !== -1) setActiveRange(nextIndex);
            }}
            className="flex flex-nowrap gap-1 rounded-full bg-muted p-1"
            spacing={1}
          >
            {screenRanges.map((range, idx) => (
              <ToggleGroupItem
                key={range.label}
                value={range.label}
                className="h-auto shrink-0 rounded-full bg-transparent px-5 py-2.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-all duration-200 hover:text-foreground data-[state=on]:bg-card data-[state=on]:text-foreground"
              >
                {range.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-4xl bg-card p-8 shadow-elevated-lg md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1.2fr]">
            <div className="flex flex-col gap-6">
              <Badge
                variant="secondary"
                className="w-fit bg-muted/50 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase"
              >
                Dynamic Content
              </Badge>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Elevate and automate your display network with rich,
                auto-updating data feeds.
              </p>
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex items-baseline text-6xl font-bold tracking-tight text-foreground">
                  <span>$</span>
                  <div className="flex">
                    <AnimatePresence mode="popLayout">
                      {priceChars.map((char, idx) => (
                        <motion.span
                          key={`${currentPrice}-${idx}`}
                          variants={animVariant}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          custom={idx}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  / month per display
                </span>
              </div>
              <FancyButton className="mt-4 w-fit rounded-full px-8 text-sm font-medium">
                Start free trial
              </FancyButton>
            </div>

            <div className="hidden w-px bg-border/50 md:block" />

            <div className="flex flex-col justify-center">
              <ul className="flex flex-col gap-3">
                {coreFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <CheckIcon className="size-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 rounded-4xl bg-card p-8 shadow-elevated-lg md:p-10">
          <Badge
            variant="secondary"
            className="w-fit bg-muted/50 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase"
          >
            Integrations - Addons
          </Badge>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-foreground">
                Social Media:
              </span>
              <div className="flex flex-col">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  $5
                </span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">
                  / display per month
                </span>
              </div>
              <span className="mt-1 text-sm leading-snug text-muted-foreground">
                Supported platforms: LinkedIn, Instagram, X (Twitter), Facebook
              </span>
            </div>

            <div className="h-px w-full bg-border/50" />

            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-foreground">
                Internal Comms:
              </span>
              <div className="flex flex-col">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  $3
                </span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">
                  / display per month
                </span>
              </div>
              <span className="mt-1 text-sm leading-snug text-muted-foreground">
                Supported platforms: Microsoft Teams, Slack, Discord, Viva
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
