"use client"

import { useState, type CSSProperties } from "react"
import { LayoutGroup, motion } from "motion/react"
import "./motion-number-counter-utils/index.css"

const pill: CSSProperties = {
  backgroundColor: "var(--layer)",
  borderRadius: 1000,
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  gap: 20,
  fontFamily: '"Geist Mono", monospace',
}

const control: CSSProperties = {
  backgroundColor: "#0cdcf733",
  borderRadius: 50,
  padding: 10,
  display: "flex",
  alignItems: "center",
  gap: 10,
}

const numberStyle: CSSProperties = {
  fontSize: 48,
  fontVariantNumeric: "tabular-nums",
}

const buttonMotion = {
  initial: { boxShadow: "0px 0px 0px 2px #0cdcf700" },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  whileFocus: { boxShadow: "0px 0px 0px 2px #0cdcf7ff" },
  layout: true,
  style: control,
}

const pillSpring = { type: "spring" as const, stiffness: 400, damping: 30 }

function Icon({ type }: { type: "minus" | "plus" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      {type === "plus" ? <path d="M12 5v14" /> : null}
    </svg>
  )
}

export function NumberCounter({
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
}: {
  min?: number
  max?: number
}) {
  const [value, setValue] = useState(0)
  const step = (delta: number) => () => {
    setValue((current) => Math.min(Math.max(current + delta, min), max))
  }

  return (
    <LayoutGroup>
      <motion.div
        className="number-counter"
        layout
        style={pill}
        transition={{ layout: pillSpring }}
      >
        <motion.button
          type="button"
          disabled={value <= min}
          onPointerDown={step(-1)}
          {...buttonMotion}
        >
          <Icon type="minus" />
        </motion.button>
        <motion.span layout style={numberStyle}>
          {value}
        </motion.span>
        <motion.button
          type="button"
          disabled={value >= max}
          onPointerDown={step(1)}
          {...buttonMotion}
        >
          <Icon type="plus" />
        </motion.button>
      </motion.div>
    </LayoutGroup>
  )
}

export default NumberCounter
