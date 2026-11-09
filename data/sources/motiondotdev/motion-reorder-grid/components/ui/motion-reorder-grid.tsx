"use client"

import { useState } from "react"
import { Reorder } from "motion/react"
import "./motion-reorder-grid-utils/index.css"

const initialItems = Array.from({ length: 16 }, (_, index) => index + 1)

export function ReorderGrid({
  dragScale = 1.08,
  stiffness = 350,
  damping = 30,
}: {
  dragScale?: number
  stiffness?: number
  damping?: number
}) {
  const [items, setItems] = useState(initialItems)

  return (
    <main className="reorder-stage">
      <Reorder.Group
        as="div"
        values={items}
        onReorder={setItems}
        className="reorder-grid"
        aria-label="Reorderable grid"
      >
        {items.map((item) => (
          <Reorder.Item
            as="div"
            key={item}
            value={item}
            className="reorder-item"
            transition={{
              type: "spring",
              stiffness,
              damping,
            }}
            whileDrag={{ scale: dragScale }}
            style={{
              backgroundColor: `var(--hue-${(item % 6) + 1})`,
            }}
          >
            {String(item).padStart(2, "0")}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </main>
  )
}

export default ReorderGrid
