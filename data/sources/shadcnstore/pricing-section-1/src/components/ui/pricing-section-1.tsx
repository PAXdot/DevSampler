import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  frequency: string;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for individuals getting started with our products",
    price: "$29",
    frequency: "/month",
    features: [
      "Up to 5 products",
      "Basic analytics",
      "Email support",
      "Access to community forum",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$79",
    frequency: "/month",
    features: [
      "Up to 50 products",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "Custom domain",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large scale businesses with advanced needs",
    price: "$199",
    frequency: "/month",
    features: [
      "Unlimited products",
      "Advanced analytics dashboard",
      "24/7 priority support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

const PricingSection1 = () => {
  return (
    <section className="py-16" id="pricing">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <p className="text-muted-foreground mb-2 text-sm font-medium">
            Our Pricing
          </p>
          <h2 className="text-3xl font-bold text-balance lg:text-5xl">
            Find the perfect plan for your business
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn("overflow-hidden py-6", {
                "shadow-lg": tier.popular,
              })}
            >
              <CardHeader className="px-6">
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-xl font-bold lg:text-2xl">
                    {tier.name}
                  </CardTitle>
                  {tier.popular ? (
                    <Badge className="px-2.5 py-0.5 font-semibold rounded-full">
                      Popular
                    </Badge>
                  ) : null}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 px-6">
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-3xl font-bold lg:text-5xl">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {tier.frequency}
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-0 bg-transparent px-6 pb-6">
                <Button
                  className="h-10 px-8 w-full cursor-pointer gap-2"
                  size="lg"
                  variant={tier.popular ? "default" : "outline"}
                  aria-label={`Get started with ${tier.name} plan`}
                >
                  Get Started <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection1;
