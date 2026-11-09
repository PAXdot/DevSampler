"use client"

import { motion } from "motion/react"
import "./motion-path-drawing-utils/index.css"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (index: number) => {
    const delay = index * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring" as const, duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export function PathDrawing() {
  return (
    <motion.svg
      className="path-drawing"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        className="circle-path"
        cx="100"
        cy="100"
        r="80"
        stroke="var(--hue-1)"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="var(--hue-6)"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="var(--hue-6)"
        variants={draw}
        custom={2.5}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        stroke="var(--hue-4)"
        variants={draw}
        custom={3}
      />
      <motion.circle
        cx="100"
        cy="300"
        r="80"
        stroke="var(--hue-4)"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="var(--hue-1)"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="var(--hue-1)"
        custom={3.5}
        variants={draw}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="230"
        rx="20"
        stroke="var(--hue-6)"
        custom={4}
        variants={draw}
      />
      <motion.circle
        cx="100"
        cy="500"
        r="80"
        stroke="var(--hue-6)"
        variants={draw}
        custom={3}
      />
      <motion.line
        x1="220"
        y1="430"
        x2="360"
        y2="570"
        stroke="var(--hue-4)"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        stroke="var(--hue-4)"
        variants={draw}
        custom={4.5}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="430"
        rx="20"
        stroke="var(--hue-1)"
        variants={draw}
        custom={5}
      />
    </motion.svg>
  )
}

export default PathDrawing
