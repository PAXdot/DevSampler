"use client"

import { useRef } from "react"
import { motion, useSpring } from "motion/react"
import "./motion-tilt-card-utils/index.css"

const styles = {
  card: {
    position: "relative" as const,
    width: 340,
    height: 340,
    borderRadius: 20,
    overflow: "hidden",
    background: "var(--layer)",
    border: "1px solid var(--border)",
    willChange: "transform",
    transformPerspective: 500,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    WebkitTouchCallout: "none" as const,
    WebkitUserSelect: "none" as const,
    userSelect: "none" as const,
    touchAction: "none" as const,
  },
  gradientOverlay: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 1,
    background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  },
  caption: {
    position: "absolute" as const,
    zIndex: 2,
    bottom: 20,
    left: 20,
    right: 20,
    color: "var(--white)",
    fontSize: 16,
    lineHeight: 1.5,
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
  },
}

export function TiltCard({ maxTilt = 15 }: { maxTilt?: number } = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const spring = { stiffness: 200, damping: 20 }
  const z = useSpring(0, spring)
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)

  const tiltFromPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return { rotateX: 0, rotateY: 0 }
    const box = ref.current.getBoundingClientRect()
    const x = event.clientX - box.left
    const y = event.clientY - box.top
    return {
      rotateX: maxTilt * (0.5 - y / box.height),
      rotateY: maxTilt * (x / box.width - 0.5),
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ ...styles.card, z, rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onPointerMove={(event) => {
        const next = tiltFromPointer(event)
        rotateX.set(next.rotateX)
        rotateY.set(next.rotateY)
      }}
      onPointerLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
        z.set(0)
      }}
      onPointerEnter={() => {
        z.set(-10)
      }}
    >
      <img
        src="https://cdn.21st.dev/assets/mirror/46/463daea8dc88e3f8421a0ef51fa652ac8c6f69d68751b82ccc6763772e8d7f5d.jpg"
        alt="Amsterdam cityscape"
        style={styles.image}
      />
      <div style={styles.gradientOverlay} />
      <div style={styles.caption}>A high-rise in Amsterdam Zuid</div>
    </motion.div>
  )
}

export default TiltCard
