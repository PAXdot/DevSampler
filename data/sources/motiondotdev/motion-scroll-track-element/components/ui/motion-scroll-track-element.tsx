"use client"

import { useRef, type CSSProperties, type RefObject } from "react"
import { motion, useScroll } from "motion/react"
import "./motion-scroll-track-element-utils/index.css"

function Item({
  container,
}: {
  container: RefObject<HTMLDivElement | null>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    container,
  })

  return (
    <section style={itemContainer}>
      <div ref={ref} style={item}>
        <figure style={progressIconContainer}>
          <svg style={progressIcon} width="75" height="75" viewBox="0 0 100 100">
            <circle
              style={progressIconBg}
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="bg"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              style={{
                ...progressIconIndicator,
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </figure>
      </div>
    </section>
  )
}

export function TrackElementWithinViewport() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={scrollerRef} className="scroll-track-scroller">
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
      <Item container={scrollerRef} />
    </div>
  )
}

const itemContainer: CSSProperties = {
  height: 280,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 80,
  boxSizing: "border-box",
}

const progressIconContainer: CSSProperties = {
  position: "sticky",
  top: 0,
  width: 80,
  height: 80,
  margin: 0,
  padding: 0,
}

const processCircle: CSSProperties = {
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
}

const progressIcon: CSSProperties = {
  ...processCircle,
  transform: "translateX(-100px) rotate(-90deg)",
  stroke: "var(--hue-1)",
}

const progressIconIndicator: CSSProperties = {
  ...processCircle,
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
}

const progressIconBg: CSSProperties = {
  opacity: 0.2,
}

const item: CSSProperties = {
  width: 200,
  height: 250,
  border: "2px dotted var(--hue-1)",
  position: "relative",
}

export default TrackElementWithinViewport
