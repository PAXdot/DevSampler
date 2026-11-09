"use client"

import { animate } from "motion"
import { motion, useMotionValue } from "motion/react"
import "./motion-collision-hover-events-only-utils/index.css"

function Cell({
  cellSize,
  fadeDuration,
  restOpacity = 0.04,
}: {
  cellSize: number
  fadeDuration: number
  restOpacity?: number
}) {
  const opacity = useMotionValue(restOpacity)

  function onPointerEnter() {
    animate(opacity, [1, restOpacity], { duration: fadeDuration, ease: "easeOut" })
  }

  return (
    <motion.div
      className="light"
      style={{ width: cellSize, height: cellSize, opacity }}
      onPointerEnter={onPointerEnter}
    />
  )
}

export function CollisionHoverEventsOnly({
  gridSize = 20,
  cellSize = 26,
  fadeDuration = 0.6,
}: {
  gridSize?: number
  cellSize?: number
  fadeDuration?: number
}) {
  const count = gridSize * gridSize

  return (
    <div className="stage">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)` }}
      >
        {Array.from({ length: count }, (_, i) => (
          <Cell key={i} cellSize={cellSize} fadeDuration={fadeDuration} />
        ))}
      </div>
    </div>
  )
}

export default CollisionHoverEventsOnly
