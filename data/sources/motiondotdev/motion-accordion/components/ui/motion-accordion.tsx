"use client"

import { useId, useState, type FocusEvent, type ReactNode } from "react"
import { motion, MotionConfig } from "motion/react"
import "./motion-accordion-utils/index.css"

function onFocusVisible(callback: () => void) {
  return (event: FocusEvent<HTMLButtonElement>) => {
    if (event.type === "focus" && event.target.matches(":focus-visible")) {
      callback()
    }
  }
}

function Chevron() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  )
}

function AccordionItem({
  header,
  children,
}: {
  header: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const id = useId()

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <motion.section initial={false} animate={open ? "open" : "closed"}>
        <h3>
          <motion.button
            id={`${id}-button`}
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(!open)}
            onFocus={onFocusVisible(() => setFocused(true))}
            onBlur={() => setFocused(false)}
          >
            <span>{header}</span> <Chevron />
            {focused && (
              <motion.div layoutId="focus-ring" className="focus-ring" />
            )}
          </motion.button>
        </h3>
        <motion.div
          variants={{
            open: {
              height: "auto",
              maskImage: "linear-gradient(to bottom, black 100%, transparent 100%)",
            },
            closed: {
              height: 0,
              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            },
          }}
          id={id}
          aria-labelledby={`${id}-button`}
          className="accordion-content"
        >
          <motion.div
            variants={{
              open: { filter: "blur(0px)", opacity: 1 },
              closed: { filter: "blur(2px)", opacity: 0 },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
        <hr />
      </motion.section>
    </MotionConfig>
  )
}

export function Accordion() {
  return (
    <div className="accordion">
      <AccordionItem header="What is Motion+?">
        <p>
          Motion+ is a one-time fee, lifetime access membership that unlocks the
          source code for all Motion examples, early access features, premium
          components, and an exclusive Discord community.
        </p>
      </AccordionItem>
      <AccordionItem header={'What does "lifetime access" mean?'}>
        <p>Just that! No one needs another subscription in their life.</p>
        <p>
          Lifetime access means you'll receive all updates to Motion+ as they're
          released.
        </p>
      </AccordionItem>
      <AccordionItem header="How does the team package work?">
        <p>After purchase, you can nominate up to 10 team members to join Motion+.</p>
      </AccordionItem>
    </div>
  )
}

export default Accordion
