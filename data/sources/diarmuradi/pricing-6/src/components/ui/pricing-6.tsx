"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/pricing-6-utils/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FancyButton } from "@/components/ui/pricing-6-utils/fancy-button";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

const features = [
  "Lifetime access to all features",
  "All future updates included",
  "Unlimited projects & team seats",
  "Priority support forever",
  "No recurring fees",
  "Full API & webhook access",
  "Custom domain support",
  "Advanced analytics dashboard",
];

export function Pricing() {
  return (
    <section aria-label="Pricing" className="mx-auto w-full max-w-5xl">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge
            variant="secondary"
            className="w-fit bg-primary/10 text-primary"
          >
            Limited time offer
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            One price. Lifetime access.
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Pay once, use forever. No subscriptions, no renewals, just permanent
            access to every feature we build.
          </p>
        </div>

        <div className="w-full max-w-2xl rounded-4xl bg-muted p-1.5">
          <div className="flex flex-col gap-8 rounded-3xl bg-card p-8 shadow-elevated-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-4">
                <span className="text-3xl text-muted-foreground line-through">
                  $588
                </span>
                <span className="text-7xl font-semibold tracking-tight text-foreground">
                  $199
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                One-time payment · Lifetime access
              </p>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Save $389 (66% off)
              </Badge>
            </div>

            <FancyButton size="lg" className="w-full">
              Get lifetime access
              <ArrowUpRightIcon />
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

            <Separator className="bg-border/50" />

            <div className="flex items-center justify-center gap-3">
              <AvatarGroup className="grayscale">
                <Avatar>
                  <AvatarImage
                    src="https://cdn.21st.dev/assets/localized/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg"
                    alt="User 1"
                  />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://cdn.21st.dev/assets/localized/b881fc6e5d91d95f912abd2f45508332c7a398d9dd53c136c6c0a2d500c8fc7e.png"
                    alt="User 2"
                  />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://cdn.21st.dev/assets/localized/ef407ec862dd072b8624fad7a331df80f56694e98bc1d89b0feb0ea0185e8954.png"
                    alt="User 3"
                  />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </AvatarGroup>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">847</span> people
                grabbed this deal
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          30-day money-back guarantee · Secure payment via Stripe
        </p>
      </div>
    </section>
  );
}
export default Pricing;
