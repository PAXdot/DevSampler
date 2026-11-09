"use client"

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Onboarding Checklist — the setup register: click a step to complete it; the
 *  check draws in, the label settles to ink, the thin progress bar and counter
 *  keep the derivable score (done / total). Light and dark via shadcn tokens. */

const EASE = [0.22, 1, 0.36, 1] as const
const SANS = 'inherit'
const GREEN = 'var(--chart-2, #4dbe95)'

const STEPS = [
  { id: 'domain', label: 'Verify your domain' },
  { id: 'key', label: 'Create an API key' },
  { id: 'send', label: 'Send your first email' },
  { id: 'webhook', label: 'Add a delivery webhook' },
]

export default function OnboardingChecklist() {
  const reduced = useReducedMotion()
  const [done, setDone] = useState<Set<string>>(new Set(['domain']))

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const share = done.size / STEPS.length

  return (
    <div className="w-[320px]" style={{ fontFamily: SANS }}>
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] tracking-[0.1em] text-muted-foreground">Get set up</span>
        <span className="tabular-nums text-[11px] text-muted-foreground">
          {done.size} / {STEPS.length}
        </span>
      </div>

      <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-foreground/[0.06]">
        <motion.div
          className="h-full origin-left rounded-full"
          style={{ background: GREEN, opacity: 0.85 }}
          animate={{ scaleX: share }}
          initial={false}
          transition={reduced ? { duration: 0 } : { duration: 0.6, ease: EASE }}
        />
      </div>

      <div className="mt-4 flex flex-col">
        {STEPS.map((s) => {
          const on = done.has(s.id)
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => toggle(s.id)}
              aria-pressed={on}
              className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors duration-150 hover:bg-foreground/[0.02]"
            >
              <span
                className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border transition-colors duration-150"
                style={{
                  borderColor: on ? 'color-mix(in srgb, var(--chart-2, #4dbe95) 60%, transparent)' : 'color-mix(in srgb, var(--foreground) 14%, transparent)',
                  background: on ? 'color-mix(in srgb, var(--chart-2, #4dbe95) 12%, transparent)' : 'transparent',
                }}
              >
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <motion.path
                    d="M1.5 5.2 4 7.6 8.5 2.4"
                    stroke={GREEN}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
                    transition={reduced ? { duration: 0 } : { duration: 0.35, ease: EASE, delay: on ? 0.12 : 0 }}
                  />
                </svg>
              </span>
              <span
                className={`text-[13px] transition-colors duration-300 ${
                  on ? 'text-muted-foreground line-through decoration-foreground/20' : 'text-foreground/75 group-hover:text-foreground/90'
                }`}
              >
                {s.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function Demo() {
  return (
    <div className="flex min-h-[260px] w-full items-center justify-center p-6">
      <OnboardingChecklist />
    </div>
  )
}
