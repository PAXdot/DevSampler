"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { FancyButton } from "@/components/ui/pricing-8-utils/fancy-button";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

const animVariant: Variants = {
  initial: { opacity: 0, y: 24, scale: 0.6 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.04,
      type: "spring",
      damping: 10,
      stiffness: 400,
      mass: 0.5,
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.8,
    transition: { duration: 0.12 },
  },
};

type PricingPlan = {
  label: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
};

const plan: PricingPlan = {
  label: "Professional",
  description:
    "All-in-one platform for teams building, deploying, and scaling web applications.",
  monthlyPrice: 99,
  yearlyPrice: 79,
  features: [
    "Unlimited team members",
    "Advanced CI/CD pipelines",
    "Real-time error monitoring",
    "Custom domain management",
    "Edge network deployment",
    "Priority support (2h SLA)",
  ],
};

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const price = annual ? plan.yearlyPrice : plan.monthlyPrice;
  const priceChars = price.toString().split("");

  return (
    <section aria-label="Pricing" className="mx-auto w-full max-w-xl">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="secondary" className="w-fit">
            Transparent pricing
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple pricing
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Everything you need in one powerful plan.
          </p>

          <div className="flex items-center gap-3">
            <Checkbox
              id="annual"
              checked={annual}
              onCheckedChange={(checked) => setAnnual(checked as boolean)}
            />
            <label
              htmlFor="annual"
              className="text-sm font-medium text-foreground"
            >
              Annual billing (save 20%)
            </label>
          </div>
        </div>

        <div className="w-full rounded-4xl bg-muted p-1">
          <div className="flex flex-col gap-8 rounded-3xl bg-card p-8 shadow-elevated-lg">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-foreground">
                {plan.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <div className="flex items-baseline justify-center gap-1">
              <span className="text-7xl font-semibold tracking-tight text-foreground">
                $
              </span>
              <AnimatePresence mode="popLayout">
                {priceChars.map((char, idx) => (
                  <motion.span
                    key={`${price}-${char}-${idx}`}
                    variants={animVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={idx}
                    className="inline-block origin-bottom text-7xl font-semibold tracking-tight text-foreground"
                  >
                    {char}
                  </motion.span>
                ))}
              </AnimatePresence>
              <span key="period" className="text-xl text-muted-foreground">
                /month
              </span>
            </div>

            <FancyButton size="lg" className="w-full">
              Start free trial
              <ArrowUpRightIcon />
            </FancyButton>

            <Separator className="bg-border/50" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary">
                    <CheckIcon className="size-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
