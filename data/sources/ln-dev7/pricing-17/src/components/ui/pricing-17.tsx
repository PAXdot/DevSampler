import { ArrowRight, Check, Shield, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "Every block in the catalog",
  "All future blocks, forever",
  "Full TypeScript source",
  "Commercial license, unlimited projects",
  "Priority support via email",
  "shadcn registry endpoint",
];

const badges = [
  { icon: Shield, label: "Lifetime access" },
  { icon: Zap, label: "Instant delivery" },
];

export default function Pricing17() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-lg px-6">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card shadow-2xl shadow-black/5">
          <div className="w-full border-b border-border px-8 py-8 text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              blockus · pro
            </span>
            <h2 className="mt-5 text-balance font-semibold text-3xl tracking-tight">
              Full catalog access
            </h2>
            <p className="mt-2 text-pretty text-sm text-muted-foreground">
              One transaction. Every block we&apos;ve shipped and every block we
              will.
            </p>
          </div>

          <div className="w-full px-8 py-8">
            <div className="mb-8 flex items-baseline justify-center gap-2">
              <span className="font-semibold text-6xl tracking-tight tabular-nums">
                $119
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-muted-foreground line-through">$199</span>
                <span className="text-xs text-muted-foreground">one-time</span>
              </div>
            </div>

            <Button size="lg" className="w-full rounded-full">
              Get full access
              <ArrowRight />
            </Button>

            <div className="mt-5 flex items-center justify-center gap-4">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <Icon className="size-3 shrink-0" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-border px-8 py-8">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              What&apos;s included
            </p>
            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-foreground/10">
                    <Check
                      className="size-2.5 text-foreground"
                      strokeWidth={3}
                    />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full border-t border-border px-8 py-5 text-center">
            <p className="text-xs text-muted-foreground">
              All sales final. No refunds, no chargebacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
