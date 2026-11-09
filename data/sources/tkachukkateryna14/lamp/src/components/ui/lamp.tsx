"use client"

import React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
  reverse = false,
  color = "#9EFF96",
}: {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  color?: string
}) => {
  const glowStyle = {
    "--lamp-color": color,
    "--lamp-color-strong": `color-mix(in oklab, ${color} 85%, transparent)`,
    "--lamp-color-soft": `color-mix(in oklab, ${color} 80%, transparent)`,
  } as React.CSSProperties

  return (
    <div
      style={glowStyle}
      className={cn(
        "relative flex h-screen w-full flex-row items-center overflow-hidden bg-slate-950 rounded-md z-0",
        reverse && "flex-row-reverse",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-full flex-1 items-center justify-center isolate z-0",
          reverse ? "-scale-x-125" : "scale-x-125"
        )}
      >
        <motion.div
          initial={{ opacity: 0.5, height: "15rem" }}
          whileInView={{ opacity: 1, height: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto top-1/2 w-96 overflow-visible h-[30rem] bg-gradient-conic from-[var(--lamp-color-soft)] via-transparent to-transparent text-white [--conic-position:from_340deg_at_left_center]"
        >
          <div className="absolute h-[100%] bottom-0 bg-slate-950 w-40 right-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute h-40 w-[100%] bottom-0 bg-slate-950 right-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, height: "15rem" }}
          whileInView={{ opacity: 1, height: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto bottom-1/2 w-96 h-[30rem] bg-gradient-conic from-transparent via-transparent to-[var(--lamp-color-soft)] text-white [--conic-position:from_200deg_at_left_center]"
        >
          <div className="absolute h-40 w-[100%] top-0 bg-slate-950 right-0 z-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <div className="absolute h-[100%] top-0 bg-slate-950 w-40 right-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        </motion.div>
        <div className="absolute left-1/2 w-48 h-full translate-x-12 scale-y-150 bg-slate-950 blur-2xl" />
        <div className="absolute left-1/2 z-50 w-48 h-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 w-56 h-[28rem] -translate-x-1/2 rounded-full bg-[var(--lamp-color)] opacity-40 blur-3xl" />
        <motion.div
          initial={{ height: "8rem" }}
          whileInView={{ height: "16rem" }}
          transition={{
            delay: 0.2,
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-auto z-30 w-36 -translate-x-[6rem] rounded-full bg-[var(--lamp-color-strong)] blur-2xl"
        />
        <motion.div
          initial={{ height: "15rem" }}
          whileInView={{ height: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-auto z-50 w-0.5 -translate-x-[7rem] bg-[var(--lamp-color-strong)]"
        />
        <div className="absolute inset-auto z-[60] w-44 h-full -translate-x-[12.5rem] bg-slate-950" />
      </div>

      <div
        className={cn(
          "relative z-50 flex flex-1 flex-col justify-center px-5",
          reverse ? "translate-x-[274px] items-end" : "-translate-x-[274px] items-start"
        )}
      >
        {children}
      </div>
    </div>
  )
}
