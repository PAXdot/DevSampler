"use client";

import React from "react";

// shadcn
import { Badge } from "@/components/ui/badge";

// third-party
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";

// project-imports
import { cn } from "@/lib/utils";

// assets
import { TrendingUp, Sliders, Globe } from "lucide-react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  spotlightColor?: string;
  borderColor?: string;
}

function SpotlightCard({
  children,
  className = "",
  innerClassName = "",
  spotlightColor = "rgba(37, 99, 235, 0.06)",
  borderColor = "rgba(37, 99, 235, 0.6)",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-[16px] p-0.5 transition-all duration-300 hover:shadow-xl",
        className,
      )}
      {...props}
    >
      {/* Default Static Base Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[16px] border border-slate-200/80 dark:border-slate-800/80" />

      {/* Dynamic Mouse Cursor Spotlight Glowing Border */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              ${borderColor},
              transparent 70%
            )
          `,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />

      {/* Inner Card Container */}
      <div
        className={cn(
          "relative z-10 h-full w-full overflow-hidden rounded-[14px] bg-white p-6 transition-colors duration-300 sm:p-8 dark:bg-slate-900",
          innerClassName,
        )}
      >
        {/* Soft Ambient Inner Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                ${spotlightColor},
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  );
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Feature32() {
  return (
    <section
      id="features"
      className="relative bg-[#f8fafc] py-20 transition-colors duration-300 md:py-28 dark:bg-slate-950/50"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-600 dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-blue-400"
          >
            THE ONLY PLATFORM YOU NEED
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            Designed to Power Modern Financial Operations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-normal text-slate-600 sm:text-base dark:text-slate-400">
            Eliminate manual spreadsheets and gain complete visibility into cash
            flows, budgets, and automated reporting.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 grid grid-cols-1 gap-6 text-center md:grid-cols-3"
        >
          {[
            {
              icon: TrendingUp,
              title: "Real-Time Insights",
              desc: "Monitor cash flows, revenue streaks, and expense velocity with automated live telemetry.",
              color:
                "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-100/80 dark:border-purple-900/50 group-hover:bg-purple-500 group-hover:text-white",
              spotlightColor: "rgba(168, 85, 247, 0.08)",
              borderColor: "rgba(168, 85, 247, 0.8)",
            },
            {
              icon: Sliders,
              title: "Expense Automation",
              desc: "Smart AI rules automatically tag and categorize incoming invoices and vendor receipts.",
              color:
                "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100/80 dark:border-blue-900/50 group-hover:bg-blue-500 group-hover:text-white",
              spotlightColor: "rgba(37, 99, 235, 0.08)",
              borderColor: "rgba(37, 99, 235, 0.8)",
            },
            {
              icon: Globe,
              title: "Multi-Currency Hub",
              desc: "Hold, exchange, and send 40+ global currencies at real-time interbank conversion rates.",
              color:
                "bg-lime-50 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 border border-lime-100/80 dark:border-lime-900/50 group-hover:bg-lime-500 group-hover:text-white",
              spotlightColor: "rgba(132, 204, 22, 0.08)",
              borderColor: "rgba(132, 204, 22, 0.8)",
            },
          ].map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div variants={fadeIn} key={idx} className="h-full">
                <SpotlightCard
                  spotlightColor={card.spotlightColor}
                  borderColor={card.borderColor}
                  innerClassName="p-8 sm:p-10 text-center flex flex-col items-center justify-start h-full"
                  className="h-full"
                >
                  <div
                    className={`h-14 w-14 rounded-lg ${card.color} mx-auto mb-6 flex items-center justify-center transition-all group-hover:scale-110`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2.5 text-center text-xl font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-center text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-slate-400">
                    {card.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
