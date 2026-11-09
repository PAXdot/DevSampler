"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "motion/react"
import "./motion-conic-gradient-pointer-utils/index.css"

function useElementDimensions(
  ref: React.RefObject<HTMLDivElement | null>,
): [{ width: number; height: number; top: number; left: number }, () => void] {
  const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

  function measure() {
    if (!ref.current) return
    setSize(ref.current.getBoundingClientRect())
  }

  useEffect(() => {
    measure()
  }, [])

  return [size, measure]
}

export function ConicGradientPointer() {
  const ref = useRef<HTMLDivElement>(null)
  const [{ width, height, top, left }, measure] = useElementDimensions(ref)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const background = useTransform(
    () =>
      `conic-gradient(from 0deg at calc(${x.get() * 100}% - ${left}px) calc(${y.get() * 100}% - ${top}px), var(--hue-5), var(--hue-1), var(--yellow), var(--hue-5))`,
  )

  return (
    <div
      className="conic-stage"
      onPointerMove={(e) => {
        x.set(e.clientX / width)
        y.set(e.clientY / height)
      }}
    >
      <motion.div
        ref={ref}
        style={{
          background,
          width: 400,
          height: 400,
          borderRadius: 50,
          cursor: "none",
        }}
        onPointerEnter={() => measure()}
      />
    </div>
  )
}

export default ConicGradientPointer
