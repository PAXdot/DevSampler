"use client"

import { useState } from "react"
import { motion } from "motion/react"
import "./motion-drag-lock-direction-utils/index.css"

const box = {
  width: 52,
  height: 52,
  border: "1px solid var(--white)",
  position: "absolute" as const,
}

const axis = {
  width: 300,
  height: 1,
  borderTop: "1px dashed var(--white)",
  position: "absolute" as const,
}

function AxisLine({
  direction,
  activeDirection,
}: {
  direction: "x" | "y"
  activeDirection: "x" | "y" | null
}) {
  return (
    <motion.div
      className="drag-lock-axis"
      initial={false}
      animate={{ opacity: activeDirection === direction ? 1 : 0.3 }}
      transition={{ duration: 0.1 }}
      style={{ ...axis, rotate: direction === "y" ? 90 : 0 }}
    />
  )
}

export function DragLockDirection() {
  const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(null)

  return (
    <div className="drag-lock-stage">
      <AxisLine direction="x" activeDirection={activeDirection} />
      <AxisLine direction="y" activeDirection={activeDirection} />
      <motion.div
        className="drag-lock-box"
        drag
        dragDirectionLock
        onDirectionLock={(direction) => setActiveDirection(direction)}
        onDragEnd={() => setActiveDirection(null)}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        dragElastic={0.2}
        whileDrag={{ cursor: "grabbing" }}
        style={box}
      />
    </div>
  )
}

export default DragLockDirection
