"use client"

import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import "./motion-scroll-hide-header-utils/index.css"

function MotionLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1260 454"
      className={className}
      fill="currentColor"
    >
      <path d="M475.753 0L226.8 453.6L0 453.6L194.392 99.4116C224.526 44.5081 299.724 0 362.353 0L475.753 0Z" />
      <path d="M1031.93 113.4C1031.93 50.7709 1082.7 0 1145.33 0C1207.96 0 1258.73 50.7709 1258.73 113.4C1258.73 176.029 1207.96 226.8 1145.33 226.8C1082.7 226.8 1031.93 176.029 1031.93 113.4Z" />
      <path d="M518.278 0L745.078 0L496.125 453.6L269.325 453.6L518.278 0Z" />
      <path d="M786.147 0L1012.95 0L818.555 354.188C788.422 409.092 713.223 453.6 650.594 453.6L537.194 453.6L786.147 0Z" />
    </svg>
  )
}

export function ScrollHideHeader() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: scrollerRef })
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current > previous && current > 80) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <div ref={scrollerRef} id="example" className="hide-header-scroller">
      <motion.header
        className="header"
        animate={{
          y: hidden ? -80 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="header-content">
          <div className="logo">
            <MotionLogo className="logo-icon" />
          </div>
          <nav>
            <a href="#">Docs</a>
            <a href="#">Examples</a>
            <a href="#">Blog</a>
          </nav>
        </div>
      </motion.header>

      <main className="content">
        <section className="hero">
          <p>
            Scroll down to hide header.
            <br />
            Scroll up to reveal header.
          </p>
        </section>

        {Array.from({ length: 6 }).map((_, i) => (
          <section key={i} className="placeholder-section">
            <MotionLogo className="placeholder-logo" />
          </section>
        ))}
      </main>
    </div>
  )
}

export default ScrollHideHeader
