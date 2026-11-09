"use client"

import { useState } from "react"
import { motion } from "motion/react"
import "./motion-svg-viewbox-utils/index.css"

const FULL_VIEWBOX = "0 0 200 200"
const FOCUS = { x: 148, y: 58 }
const GRID = [40, 80, 120, 160]

export function SvgViewbox({
  zoomedSize = 64,
  stiffness = 120,
  damping = 18,
}: {
  zoomedSize?: number
  stiffness?: number
  damping?: number
}) {
  const [zoomed, setZoomed] = useState(false)
  const spring = { type: "spring" as const, stiffness, damping }
  const zoomedViewBox = `${FOCUS.x - zoomedSize / 2} ${FOCUS.y - zoomedSize / 2} ${zoomedSize} ${zoomedSize}`

  return (
    <motion.button
      type="button"
      className="viewbox-stage"
      onClick={() => setZoomed(!zoomed)}
      whileTap={{ scale: 0.985 }}
    >
      <motion.svg
        className="viewbox-scene"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={FULL_VIEWBOX}
        animate={{ viewBox: zoomed ? zoomedViewBox : FULL_VIEWBOX }}
        transition={spring}
      >
        <g className="viewbox-grid">
          {GRID.map((n) => (
            <line key={`v${n}`} x1={n} y1={0} x2={n} y2={200} />
          ))}
          {GRID.map((n) => (
            <line key={`h${n}`} x1={0} y1={n} x2={200} y2={n} />
          ))}
        </g>
        <rect className="viewbox-block" x="28" y="30" width="44" height="34" />
        <rect className="viewbox-block" x="36" y="130" width="30" height="44" />
        <rect className="viewbox-block" x="96" y="150" width="60" height="26" />
        <path
          className="viewbox-route"
          d="M20,176 C60,150 66,110 104,96 C132,86 136,70 148,58"
        />
        <circle className="viewbox-halo" cx={FOCUS.x} cy={FOCUS.y} r={16} />
        <circle className="viewbox-beacon" cx={FOCUS.x} cy={FOCUS.y} r={6} />
      </motion.svg>
      <span className="viewbox-caption">
        {zoomed ? "Press to zoom out" : "Press to zoom in"}
      </span>
    </motion.button>
  )
}

export default SvgViewbox
