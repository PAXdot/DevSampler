"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  className: string;
  imageBorderColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CEO of DataFlow Technologies",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-five.png",
    quote:
      "SolaceUI transformed our design workflow. What used to take weeks now takes days, and our product consistency has never been better.",
    className:
      "lg:col-span-1 lg:row-span-2 bg-(--color-primary) text-white border-transparent",
    imageBorderColor: "border-black",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO of Quantum Labs",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-one.png",
    quote:
      "We've tried every UI framework out there. SolaceUI is the first that actually delivers. Our time-to-market improved by 40%",
    className:
      "lg:col-span-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-600 text-black dark:text-white",
    imageBorderColor: "border-(--color-primary)",
  },
  {
    name: "Oilivia Koe",
    role: "CEO of Nexus Digital",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1774017708/member-six.png",
    quote:
      "SolaceUI has become non-negotiable in our tech stack. It's elegant, powerful, and scaled beautifully with us from seed to Series B",
    className:
      "lg:col-span-1 lg:row-span-2 bg-black dark:bg-white text-white dark:text-black border-transparent ",
    imageBorderColor: "border-(--color-primary)",
  },
  {
    name: "David Kim",
    role: "CEO of Streamline Software",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-two.png",
    quote:
      "Perfect balance between flexibility and structure. Our design system went from scattered mess to cohesive asset. ROI was evident in Q1.",
    className:
      "lg:col-span-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-600 text-black dark:text-white",
    imageBorderColor: "border-(--color-primary)",
  },
  {
    name: "James Mitchell",
    role: "CEO of Visionary Apps",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-four.png",
    quote:
      "The accessibility features are built-in, not bolted-on. It's rare to find a tool that makes both designers and developers genuinely happy",
    className:
      "lg:col-span-1 bg-black  dark:bg-white text-white dark:text-black border-neutral-800",
    imageBorderColor: "border-(--color-primary)",
  },
  {
    name: "Amara Okonkwo",
    role: "CEO of Horizon Platforms",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-three.png",
    quote:
      "We migrated our entire product in under three months. The performance improvements alone justified the switch. Highly recommend",
    className:
      "lg:col-span-2 bg-(--color-primary) text-white border-transparent",
    imageBorderColor: "border-black",
  },
];

export default function Testimonial1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full py-10 [--color-primary:#003AF9] bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight">
          Trusted By The Best People
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-8 rounded-lg flex flex-col justify-between",
                testimonial.className,
              )}
            >
              <p
                className={cn(
                  "font-medium leading-relaxed mb-8",
                  testimonial.className.includes("lg:row-span-2") ||
                    testimonial.className.includes("col-span-2")
                    ? "text-xl md:text-2xl lg:text-3xl"
                    : "text-base",
                )}
              >
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "relative w-12 h-12 rounded-full overflow-hidden border-[1.5px]",
                    testimonial.imageBorderColor,
                  )}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
