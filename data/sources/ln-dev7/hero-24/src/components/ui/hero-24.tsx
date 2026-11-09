import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero24() {
  return (
    <section className="relative isolate flex min-h-[700px] flex-col items-center justify-center bg-background px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Production-ready blocks
        </span>

        <h1
          className="text-balance font-semibold tracking-tight text-foreground"
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
          }}
        >
          Build pages.
          <br />
          Not components.
        </h1>

        <p className="max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
          React sections hand-built on shadcn/ui and Tailwind v4. Drop them in,
          swap the copy, ship.
        </p>

        <Button size="lg" className="mt-2 rounded-full px-8">
          Browse the catalog
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
