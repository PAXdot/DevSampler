"use client"

import { useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import "./motion-line-graph-utils/index.css"

function toPath(points: { x: number; y: number }[]) {
  return points.reduce((path, point, index) => {
    return index === 0
      ? `M ${point.x},${point.y}`
      : `${path} L ${point.x},${point.y}`
  }, "")
}

function formatDelta(value: number) {
  return `${new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value)}%`
}

export function LineGraph({ data = [30, 8, 36, 29, 50, 78] }: { data?: number[] } = {}) {
  const points = data.map((value, index) => ({
    x: 50 + index * 100,
    y: 250 - value * 2,
    value,
  }))
  const line = toPath(points)
  const [active, setActive] = useState<number | null>(null)
  const [delta, setDelta] = useState<number | null>(null)

  const onHover = (index: number) => {
    setActive(index)
    if (index > 0) {
      const current = data[index]
      const previous = data[index - 1]
      setDelta(((current - previous) / previous) * 100)
    } else {
      setDelta(null)
    }
  }

  const onLeave = () => {
    setActive(null)
    setDelta(null)
  }

  const negative = delta !== null && delta < 0
  const tooltip = active !== null ? points[active] : null

  return (
    <div className="line-graph" onPointerLeave={onLeave}>
      <svg width="100%" height="300" viewBox="0 0 600 300" className="line-graph-svg">
        <defs>
          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--hue-6)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--hue-6)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[50, 100, 150, 200, 250].map((y) => (
          <motion.line
            key={y}
            x1="50"
            y1={y}
            x2="550"
            y2={y}
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        ))}
        <motion.path
          d={`${line} L 550,250 L 50,250 Z`}
          fill="url(#areaGradient)"
        />
        <motion.path
          d={line}
          fill="none"
          stroke="var(--hue-6)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.g
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { delayChildren: 0.1, staggerChildren: 1.5 / 6 } },
          }}
        >
          {points.map((point, index) => (
            <g key={index}>
              <motion.rect
                x={point.x - 50}
                y={0}
                width={100}
                height={300}
                fill="transparent"
                onHoverStart={() => onHover(index)}
                style={{ cursor: "pointer" }}
              />
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="var(--layer)"
                stroke="var(--hue-6)"
                strokeWidth="1"
                animate={active === index ? { scale: 1.5 } : { scale: 1 }}
                variants={{
                  hidden: { scale: 0.5, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
              />
            </g>
          ))}
        </motion.g>
      </svg>
      <AnimatePresence>
        {delta !== null && tooltip && (
          <motion.div
            className="line-graph-tooltip"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              left: tooltip.x + 20,
              top: tooltip.y + 20,
            }}
          >
            <MotionConfig transition={{ type: "spring", visualDuration: 0.6, bounce: 0.2 }}>
              <motion.div
                initial={{
                  rotate: negative ? 180 : 0,
                  color: negative ? "var(--hue-1)" : "var(--hue-6)",
                }}
                animate={{
                  rotate: negative ? 180 : 0,
                  color: negative ? "var(--hue-1)" : "var(--hue-6)",
                }}
                className="line-graph-arrow"
              >
                ↑
              </motion.div>
              <motion.div
                initial={{ color: negative ? "var(--hue-1)" : "var(--hue-6)" }}
                animate={{ color: negative ? "var(--hue-1)" : "var(--hue-6)" }}
                className="line-graph-delta"
              >
                {formatDelta(delta)}
              </motion.div>
            </MotionConfig>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LineGraph
