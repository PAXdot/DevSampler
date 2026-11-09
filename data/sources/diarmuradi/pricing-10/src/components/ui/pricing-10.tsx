"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { FancyButton } from "@/components/ui/pricing-10-utils/fancy-button";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

const animVariant: Variants = {
  initial: { opacity: 0, y: 24, scale: 0.7 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.04,
      type: "spring",
      damping: 12,
      stiffness: 400,
      mass: 0.8,
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.85,
    transition: { duration: 0.12 },
  },
};

type PriceTier = {
  maxVolume: number;
  label: string;
  price: number;
};

const priceTiers: PriceTier[] = [
  { maxVolume: 10000, label: "10K", price: 49 },
  { maxVolume: 50000, label: "50K", price: 149 },
  { maxVolume: 200000, label: "200K", price: 399 },
  { maxVolume: 500000, label: "500K", price: 699 },
  { maxVolume: 1000000, label: "1M", price: 899 },
];

const features = [
  "Unlimited API endpoints",
  "Real-time event streaming",
  "Global edge deployment",
  "Custom rate limiting",
  "Advanced error tracking",
  "Dedicated support channel",
];

function formatVolume(v: number): string {
  if (v >= 1000000) return (v / 1000000).toFixed(0) + "M";
  if (v >= 1000) return (v / 1000).toFixed(0) + "K";
  return v.toString();
}

function getTierForVolume(volume: number): PriceTier {
  for (const tier of priceTiers) {
    if (volume <= tier.maxVolume) return tier;
  }
  return priceTiers[priceTiers.length - 1]!;
}

export function Pricing() {
  const [volume, setVolume] = useState(50000);

  const currentTier = getTierForVolume(volume);
  const priceChars = currentTier.price.toString().split("");

  return (
    <section aria-label="Pricing" className="mx-auto w-full max-w-5xl">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="w-fit">
            Volume pricing
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Scale without limits
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Pricing that adapts to your traffic. Slide to estimate your monthly
            cost based on API requests.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-4xl bg-muted p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-foreground">
                  Monthly API requests
                </h3>
                <Badge variant="secondary">{currentTier.label}</Badge>
              </div>
              <Slider
                value={[volume]}
                onValueChange={(val) =>
                  setVolume(Array.isArray(val) ? (val[0] ?? 0) : val)
                }
                min={1000}
                max={1000000}
                step={1000}
                className="w-full cursor-grab active:cursor-grabbing **:data-[slot=slider-thumb]:h-6.5 **:data-[slot=slider-thumb]:w-3 **:data-[slot=slider-thumb]:border-[3px] **:data-[slot=slider-thumb]:border-solid **:data-[slot=slider-thumb]:border-card **:data-[slot=slider-thumb]:bg-primary **:data-[slot=slider-thumb]:ring-0 **:data-[slot=slider-thumb]:hover:ring-0 **:data-[slot=slider-thumb]:focus-visible:ring-0 **:data-[slot=slider-thumb]:active:ring-0 **:data-[slot=slider-track]:h-2 **:data-[slot=slider-track]:bg-input/60"
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>1K</span>
                <span className="text-sm font-medium text-foreground">
                  {formatVolume(volume)} requests/mo
                </span>
                <span>1M</span>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-baseline gap-1">
                <span className="text-7xl font-semibold tracking-tight text-foreground">
                  $
                </span>
                <AnimatePresence mode="popLayout">
                  {priceChars.map((char, idx) => (
                    <motion.span
                      key={`${currentTier.price}-${char}-${idx}`}
                      variants={animVariant}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={idx}
                      className="inline-block text-7xl font-semibold tracking-tight text-foreground"
                    >
                      {char}
                    </motion.span>
                  ))}
                </AnimatePresence>
                <span key="period" className="text-xl text-muted-foreground">
                  /month
                </span>
              </div>
            </div>

            <FancyButton size="lg" className="w-full">
              Start free trial
              <ArrowUpRightIcon />
            </FancyButton>
          </div>

          <div className="flex flex-col gap-6 rounded-4xl bg-card p-8 shadow-elevated-lg">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-foreground">
                Every plan includes
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                No matter your volume, you get full access to our complete
                platform with enterprise-grade reliability.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <CheckIcon className="size-3 text-primary-foreground" />
                  </div>
                  <span className="text-base text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
