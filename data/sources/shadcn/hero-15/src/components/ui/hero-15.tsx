"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import {
  ContentRail,
  SectionShell,
} from "@/components/ui/hero-15-utils/layout-contract";
import { buttonVariants } from "@/components/ui/hero-15-utils/button";
import {
  SeraStagger,
  SeraStaggerItem,
  SeraWordReveal,
} from "@/components/ui/hero-15-utils/sera-motion";

const heroStats = [
  { label: "Teams on Sera", value: "2,400+" },
  { label: "Workflows tracked", value: "18k" },
  { label: "Median setup", value: "4 min" },
] as const;

export function HeroSeraSection() {
  return (
    <SectionShell spacingMode="section">
      <ContentRail maxWidth="max-w-5xl">
        <SeraStagger>
          <SeraStaggerItem>
            <div className="flex items-center justify-between gap-4 border-border border-b pb-4">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
                Sera — Monochrome workspace
              </p>
              <span className="font-mono text-[11px] text-muted-foreground">
                01
              </span>
            </div>
          </SeraStaggerItem>

          <SeraStaggerItem>
            <h1 className="mt-10 max-w-3xl font-medium text-4xl tracking-tight md:text-6xl">
              <SeraWordReveal text="Every workflow, measured in monochrome." />
            </h1>
          </SeraStaggerItem>

          <SeraStaggerItem>
            <p className="mt-5 max-w-xl text-pretty text-muted-foreground text-sm leading-relaxed md:text-base">
              Sera folds analytics, hand-offs, and reporting into one flat
              workspace. No dashboards to decorate — just the numbers your team
              ships against.
            </p>
          </SeraStaggerItem>

          <SeraStaggerItem>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className={buttonVariants()} href="/signup">
                Start free
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="/demo"
              >
                View demo
              </Link>
            </div>
          </SeraStaggerItem>

          <SeraStaggerItem>
            <dl className="mt-14 grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {heroStats.map((stat, index) => (
                <div className="min-w-0 p-6" key={stat.label}>
                  <dt className="flex items-baseline justify-between gap-3 text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
                    {stat.label}
                    <span className="font-mono normal-case tracking-normal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </dt>
                  <dd className="mt-3 font-medium text-2xl tracking-tight tabular-nums md:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SeraStaggerItem>
        </SeraStagger>
      </ContentRail>
    </SectionShell>
  );
}

export default HeroSeraSection;
