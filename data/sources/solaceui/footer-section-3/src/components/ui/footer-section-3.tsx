"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { SocialCloud } from "@/components/ui/footer-section-3-utils/social-cloud";
import { AnimatedGroup } from "@/components/ui/animated-group"; //from motion-primitives

export default function Footer3({
  title = "Build Tastefully Crafted UIs",
}: {
  title?: string;
}) {
  const containerVariants = {
    // ... existing variants ...
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 px-4 [--color-primary:#003AF9]">
      <motion.div
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 1. Upper div with noise and text */}
        <motion.div
          className="relative w-full overflow-hidden rounded-xl bg-(--color-primary) h-[100px] md:h-[300px]"
          variants={itemVariants}
        >
          {/* SVG Noise Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-90 pointer-events-none mix-blend-multiply"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>

          {/* Centered Text */}
          <div
            ref={titleRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {isTitleInView && (
              <AnimatedGroup
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center flex flex-wrap justify-center gap-x-3"
                preset="slide"
              >
                {title.split(" ").map((word) => (
                  <span key={word} className="inline-block">
                    {word}
                  </span>
                ))}
              </AnimatedGroup>
            )}
          </div>
        </motion.div>

        {/* 2 & 3. Bottom Section */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between gap-12 lg:gap-8">
          {/* 2. Below Left Section */}
          <motion.div
            className="flex flex-col justify-between space-y-12 lg:w-1/3"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Newsletter
              </h3>
              <div className="flex items-center gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-transparent dark:bg-neutral-900 text-black dark:text-white"
                />
                <button className="rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                  Submit
                </button>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <SocialCloud className="text-neutral-500 dark:text-neutral-400 gap-4" />
              <p className="text-sm text-neutral-400 dark:text-neutral-600">
                &copy; {new Date().getFullYear()} SolaceUI, All rights reserved
              </p>
            </div>
          </motion.div>

          {/* 3. Below Right Section */}
          <motion.div
            className="flex flex-wrap gap-8 lg:gap-24 lg:w-1/2 lg:justify-end"
            variants={itemVariants}
          >
            {/* Column 1: Product */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-black dark:text-white">
                Product
              </h4>
              <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                {[
                  "Features",
                  "Solution",
                  "Customers",
                  "Pricing",
                  "Help",
                  "Terms",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-black dark:text-white">
                Company
              </h4>
              <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                {[
                  "About",
                  "Careers",
                  "Blogs",
                  "Press",
                  "Contact",
                  "Privacy",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-black dark:text-white">
                Social
              </h4>
              <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                {[
                  "X",
                  "LinkedIn",
                  "Facebook",
                  "Threads",
                  "Instagram",
                  "Youtube",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
