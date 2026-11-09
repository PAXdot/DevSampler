"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { FancyButton } from "@/components/ui/fancy-button";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

const animVariant: Variants = {
  hidden: { opacity: 0, scaleY: 0.8, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      type: "spring",
      damping: 20,
      stiffness: 350,
    },
  }),
};

type Tier = {
  max: number;
  price: number;
  label: string;
};

const tiers: Tier[] = [
  { max: 5, price: 19, label: "Starter" },
  { max: 15, price: 59, label: "Growth" },
  { max: 30, price: 119, label: "Scale" },
  { max: 50, price: 199, label: "Studio" },
];

const features = [
  "Unlimited video uploads",
  "4K transcoding & delivery",
  "Custom video player",
  "Analytics & heatmaps",
  "DRM content protection",
  "Live streaming support",
  "API & SDK access",
  "Priority support (4h SLA)",
];

export function Pricing() {
  const [seats, setSeats] = useState([10]);

  const currentTier =
    tiers.find((t) => seats[0] <= t.max) ?? tiers[tiers.length - 1];

  const priceChars = currentTier.price.toString().split("");

  return (
    <section aria-label="Pricing" className="mx-auto w-full max-w-2xl">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="secondary" className="h-7 w-fit">
            Video platform
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Stream, host, and scale video
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Slide to match your team size. Pricing adjusts in real-time, with no
            overpaying, no hidden bandwidth fees.
          </p>
        </div>

        <div className="w-full max-w-xl rounded-4xl bg-muted p-1">
          <div className="flex flex-col gap-8 rounded-3xl bg-card p-8 shadow-elevated-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-foreground">
                  Team members
                </h3>
                <Badge variant="secondary">{currentTier.label}</Badge>
              </div>

              <Slider
                value={seats}
                onValueChange={(val) =>
                  setSeats(Array.isArray(val) ? val : [val])
                }
                min={1}
                max={50}
                step={1}
                className="w-full cursor-grab active:cursor-grabbing **:data-[slot=slider-thumb]:h-6.5 **:data-[slot=slider-thumb]:w-3 **:data-[slot=slider-thumb]:border-[3px] **:data-[slot=slider-thumb]:border-solid **:data-[slot=slider-thumb]:border-card **:data-[slot=slider-thumb]:bg-primary **:data-[slot=slider-thumb]:ring-0 **:data-[slot=slider-thumb]:hover:ring-0 **:data-[slot=slider-thumb]:focus-visible:ring-0 **:data-[slot=slider-thumb]:active:ring-0 **:data-[slot=slider-track]:h-2 **:data-[slot=slider-track]:bg-input/60"
              />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>1 seat</span>
                <span className="font-medium text-foreground">
                  {seats[0]} {seats[0] === 1 ? "seat" : "seats"}
                </span>
                <span>50 seats</span>
              </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-baseline gap-1">
                <AnimatePresence mode="popLayout">
                  <span
                    key="currency"
                    className="text-7xl font-semibold tracking-tight text-foreground"
                  >
                    $
                  </span>
                  {priceChars.map((char, idx) => (
                    <motion.span
                      key={`${currentTier.price}-${idx}`}
                      variants={animVariant}
                      initial="hidden"
                      animate="visible"
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
              <p className="text-sm text-muted-foreground">
                ${(currentTier.price / seats[0]).toFixed(2)} per seat · billed
                monthly
              </p>
            </div>

            <FancyButton size="lg" className="group w-full">
              Start free trial
              <ArrowUpRightIcon className="transition-transform duration-300 group-hover:scale-110" />
            </FancyButton>

            <Separator className="bg-border/50" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
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
