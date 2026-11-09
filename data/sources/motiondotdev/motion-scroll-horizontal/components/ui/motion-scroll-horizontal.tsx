"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "./motion-scroll-horizontal-utils/index.css"

const items = [
  {
    id: 1,
    color: "var(--hue-1)",
    label: "Night One",
    image: "https://cdn.21st.dev/assets/mirror/a8/a876db8fbedc677280ad850472aedaf0966b24cc8764f666a9b1287db7ee3213.jpg",
  },
  {
    id: 2,
    color: "var(--hue-2)",
    label: "Night Two",
    image: "https://cdn.21st.dev/assets/mirror/f3/f31b6c369920d14573652a43f16ee62c8666e00530c251ea2293d2c86a21f1af.jpg",
  },
  {
    id: 3,
    color: "var(--hue-3)",
    label: "Night Three",
    image: "https://cdn.21st.dev/assets/mirror/01/01bc115eb806b764aa965d94fa829cbc9bb7a823d2eb3083e4579b09446256cd.jpg",
  },
  {
    id: 4,
    color: "var(--hue-4)",
    label: "Night Four",
    image: "https://cdn.21st.dev/assets/mirror/2d/2d3ec49c50f4537de9b0c3326b56f08998fd15085dc22cd582cdf8962fb0820f.jpg",
  },
  {
    id: 5,
    color: "var(--hue-5)",
    label: "Night Five",
    image: "https://cdn.21st.dev/assets/mirror/8e/8ec52e42893790966f4400a47164c63b7a042fcc427cf4b3f2a86bc13768942d.jpg",
  },
]

const ITEM_WIDTH = 220
const GAP = 16

export function ScrollHorizontal() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    container: scrollerRef,
  })

  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <div ref={scrollerRef} id="example" className="horizontal-scroller">
      <section className="intro-section">
        <h1 className="impact">Tokyo Nights</h1>
      </section>

      <div ref={targetRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={
                  {
                    "--item-color": item.color,
                    "--item-image": `url(${item.image})`,
                  } as React.CSSProperties
                }
              >
                <div className="item-content">
                  <span className="item-number">0{item.id}</span>
                  <h2>{item.label}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="outro-section">
        <p className="big">Fin</p>
      </section>
    </div>
  )
}

export default ScrollHorizontal
