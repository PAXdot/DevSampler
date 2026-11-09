"use client";

import React, { useState } from "react";

import { Check } from "lucide-react";

import { motion } from "motion/react";

import NumberFlow from "@number-flow/react";

import { useId } from "react";

import { cn } from "@/lib/utils";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Basic Plan",

    description: "Ideal for small businesses",

    monthly: 29,

    yearly: 23,

    features: [
      "Unified dashboard",

      "Finance management module",

      "Inventory control",

      "Basic reporting and analytics",

      "10 user accounts",
    ],

    variant: "outline" as const,
  },

  {
    name: "Business Plan",

    description: "For growing businesses",

    monthly: 59,

    yearly: 47,

    features: [
      "Everything in basic plan",

      "HR & payroll module",

      "Sales & CRM module",

      "Workflow automation",

      "Advanced analytics & reporting",
    ],

    variant: "secondary" as const,

    featured: true,
  },

  {
    name: "Premium Plan",

    description: "Ideal for enterprises seeking",

    monthly: 99,

    yearly: 79,

    features: [
      "Everything in business plan",

      "Custom integrations",

      "AI-Driven recommendations",

      "Role based access control",

      "Unlimited user accounts",
    ],

    variant: "outline" as const,
  },
];

export const GrowthPlans = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const id = useId();

  return (
    <section className="py-24 bg-background font-dmSans text-foreground">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-2 text-balance">
          Plans that grow your SASS.
        </h2>

        <p className="text-muted-foreground mb-5 text-pretty">
          Unlock potential with plans designed to fuel growth.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 bg-muted border border-border rounded-md w-fit p-3 mx-auto">
          <span
            className={cn(
              "text-sm transition-colors",

              billing === "monthly"
                ? "text-foreground font-medium"
                : "text-muted-foreground",
            )}
          >
            Monthly
          </span>

          <Switch
            id={id}
            checked={billing === "yearly"}
            onCheckedChange={(checked) =>
              setBilling(checked ? "yearly" : "monthly")
            }
          />

          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-sm transition-colors",

                billing === "yearly"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
              )}
            >
              Yearly
            </span>

            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full uppercase">
              Save 20%
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-lg p-8 flex flex-col border transition-all",

                plan.featured
                  ? "bg-foreground text-background scale-105 shadow-2xl z-10 border-transparent"
                  : "bg-muted border-border",
              )}
            >
              <div className="text-left mb-8">
                <h4 className="font-bold text-lg">{plan.name}</h4>

                <p
                  className={cn(
                    "text-sm",

                    plan.featured
                      ? "text-background/60"
                      : "text-muted-foreground",
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 text-left">
                <span
                  className={cn(
                    "text-2xl font-medium",

                    plan.featured
                      ? "text-background/60"
                      : "text-muted-foreground",
                  )}
                >
                  $
                </span>

                <span
                  className={cn(
                    "text-5xl font-bold",

                    plan.featured ? "text-background" : "text-foreground",
                  )}
                >
                  <NumberFlow
                    value={billing === "monthly" ? plan.monthly : plan.yearly}
                  />
                </span>

                <span
                  className={cn(
                    "text-sm",
                    plan.featured
                      ? "text-background/60"
                      : "text-muted-foreground",
                  )}
                >
                  /monthly
                </span>
              </div>

              <Button
                variant={plan.variant}
                className={cn(
                  "w-full mb-10 rounded-lg h-14",

                  plan.featured
                    ? "py-4 bg-background/10 border border-background/20 text-background hover:bg-background/20"
                    : "bg-background border-border hover:shadow-lg hover:bg-background",
                )}
              >
                Select Plan
              </Button>

              <div
                className={cn(
                  "space-y-4 pt-8 border-t text-left",

                  plan.featured ? "border-background/20" : "border-border",
                )}
              >
                {plan.features.map((f, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center gap-3 text-sm",

                      plan.featured
                        ? "text-background/80"
                        : "text-muted-foreground",
                    )}
                  >
                    <Check className="size-4 shrink-0" />

                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPlans;
