"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import "./motion-reorder-items-utils/index.css"

const initialItems = [
  "var(--hue-1)",
  "var(--hue-2)",
  "var(--hue-3)",
  "var(--hue-4)",
]

function shuffle([...items]: string[]) {
  return items.sort(() => Math.random() - 0.5)
}

const spring = {
  type: "spring" as const,
  damping: 20,
  stiffness: 300,
}

const list = {
  listStyle: "none" as const,
  padding: 0,
  margin: 0,
  position: "relative" as const,
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 10,
  width: 300,
  flexDirection: "row" as const,
  justifyContent: "center",
  alignItems: "center",
}

const item = {
  width: 100,
  height: 100,
  borderRadius: "10px",
}

export function ReorderItems() {
  const [items, setItems] = useState(initialItems)

  useEffect(() => {
    const timeout = setTimeout(() => setItems(shuffle(items)), 1000)
    return () => clearTimeout(timeout)
  }, [items])

  return (
    <ul style={list}>
      {items.map((color) => (
        <motion.div
          key={color}
          layout
          transition={spring}
          style={{ ...item, backgroundColor: color }}
        />
      ))}
    </ul>
  )
}

export default ReorderItems
