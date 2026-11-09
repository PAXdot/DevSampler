"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, CreditCard, Heart, Keyboard, MessageSquare, User } from "lucide-react"
import type { ComponentType, ReactNode } from "react"

/** Preferences Card — a settings register: an icon tile, a title over a
 *  one-line action hint, and a chevron that only walks in on hover. Rows that
 *  carry a detail push an iOS-style panel in from the right while the menu
 *  slides out left; a back button at the top of the panel returns to the full
 *  list. Rows stay quiet — the hover surface is a soft lift, never a border.
 *  The shell's min-height is pinned to the menu, so the card never resizes
 *  between views. Light and dark via shadcn theme tokens; respects reduced
 *  motion (the slide collapses to an instant swap). */

const EASE = [0.16, 1, 0.3, 1] as const

const TEXT = "var(--foreground)"
const TEXT_MUTED = "var(--muted-foreground)"
const HAIRLINE = "var(--border)"
const ACCENT = "#4790e4"
const accent = (a: number) => `color-mix(in srgb, ${ACCENT} ${Math.round(a * 100)}%, transparent)`

const ROW_H = 60 // 36px icon tile + 2 × 12px padding

export type PreferenceRow = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  /** one-line, action-first hint sitting under the title */
  hint: string
  /** optional detail panel — rows without one are plain (non-navigating) */
  detail?: ReactNode
}

export default function PreferencesCard({
  rows = DEFAULT_ROWS,
  width = 340,
  className = "",
}: {
  rows?: PreferenceRow[]
  width?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  const [active, setActive] = useState<string | null>(null)
  const introDone = useRef(false)
  /* the shell is pinned to the menu's measured height, so a shorter panel never shrinks the card */
  const shellRef = useRef<HTMLDivElement>(null)
  const [menuH, setMenuH] = useState(0)
  useLayoutEffect(() => {
    if (shellRef.current) setMenuH(shellRef.current.offsetHeight)
  }, [])
  const activeRow = rows.find((r) => r.title === active)

  const slide = reduced ? { duration: 0 } : { duration: 0.4, ease: EASE }
  const dx = reduced ? 0 : 28

  return (
    <div
      ref={shellRef}
      className={`relative -mx-2 overflow-hidden px-2 ${className}`}
      style={{ width: width + 16, maxWidth: "100%", minHeight: Math.max(rows.length * ROW_H, menuH) }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {activeRow ? (
          <motion.div
            key={activeRow.title}
            className="flex w-full flex-col"
            initial={{ x: dx, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dx, opacity: 0 }}
            transition={slide}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="group flex items-center gap-1.5 self-start rounded-md py-2 pl-1 pr-2 transition-colors duration-200 hover:bg-foreground/[0.035]"
            >
              <ChevronLeft className="h-3.5 w-3.5 text-foreground/35 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span className="text-[13px] font-semibold tracking-[-0.01em]" style={{ color: TEXT }}>
                {activeRow.title}
              </span>
            </button>
            <div className="mt-1 px-1">{activeRow.detail}</div>
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            className="flex w-full flex-col"
            initial={{ x: -dx, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -dx, opacity: 0 }}
            transition={slide}
            onAnimationComplete={() => {
              introDone.current = true
            }}
          >
            {rows.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.button
                  key={r.title}
                  type="button"
                  onClick={r.detail ? () => setActive(r.title) : undefined}
                  className="group flex items-center gap-3.5 rounded-lg px-3 py-3 text-left transition-colors duration-200 hover:bg-foreground/[0.035]"
                  initial={introDone.current || reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduced ? { duration: 0 } : { duration: 0.45, ease: EASE, delay: i * 0.06 }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-foreground/[0.03]"
                    style={{ borderColor: HAIRLINE }}
                  >
                    <Icon className="h-[15px] w-[15px] text-muted-foreground" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold tracking-[-0.01em]" style={{ color: TEXT }}>
                      {r.title}
                    </span>
                    <span className="mt-0.5 block truncate text-[12px] leading-snug" style={{ color: TEXT_MUTED }}>
                      {r.hint}
                    </span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-foreground/0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-foreground/35" />
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------- detail panels (generic, wireframe-grade demo content) ---------- */

function FieldRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div
      className="flex items-center justify-between gap-3 border-b px-3 py-3"
      style={{ borderColor: last ? "transparent" : HAIRLINE }}
    >
      <span className="text-[12px]" style={{ color: TEXT_MUTED }}>
        {label}
      </span>
      <span className="text-[12px] font-medium" style={{ color: TEXT }}>
        {value}
      </span>
    </div>
  )
}

function ProfileDetail() {
  return (
    <div>
      <div className="flex items-center gap-3 px-3 py-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold"
          style={{ borderColor: HAIRLINE, background: accent(0.08), color: TEXT }}
        >
          AC
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] font-semibold tracking-[-0.01em]" style={{ color: TEXT }}>
            Alex Carter
          </span>
          <span className="mt-0.5 block text-[12px]" style={{ color: TEXT_MUTED }}>
            Member since 2024
          </span>
        </span>
      </div>
      <FieldRow label="Display name" value="Alex Carter" />
      <FieldRow label="Login email" value="alex@example.com" />
      <FieldRow label="Handle" value="@alexc" last />
    </div>
  )
}

function PaymentDetail() {
  return (
    <div>
      <div
        className="flex items-center gap-3.5 rounded-lg border px-3 py-3"
        style={{ borderColor: HAIRLINE, background: "var(--card)" }}
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-foreground/[0.03]"
          style={{ borderColor: HAIRLINE }}
        >
          <CreditCard className="h-[15px] w-[15px] text-muted-foreground" strokeWidth={1.75} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[13px] font-semibold tracking-[-0.01em]" style={{ color: TEXT }}>
            Visa ···· 4242
          </span>
          <span className="mt-0.5 block text-[12px]" style={{ color: TEXT_MUTED }}>
            Expires 04 / 28
          </span>
        </span>
        <span
          className="shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
          style={{ borderColor: HAIRLINE, color: TEXT_MUTED }}
        >
          Default
        </span>
      </div>
      <FieldRow label="Billing address" value="12 Harbor St, Riga" />
      <FieldRow label="Invoices" value="alex@example.com" last />
    </div>
  )
}

function ToggleRow({ label, hint, defaultOn, last }: { label: string; hint: string; defaultOn?: boolean; last?: boolean }) {
  const reduced = useReducedMotion()
  const [on, setOn] = useState(!!defaultOn)
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      className="flex w-full items-center justify-between gap-3 border-b px-3 py-3 text-left transition-colors duration-200 hover:bg-foreground/[0.035]"
      style={{ borderColor: last ? "transparent" : HAIRLINE }}
    >
      <span className="min-w-0">
        <span className="block text-[12px] font-medium" style={{ color: TEXT }}>
          {label}
        </span>
        <span className="mt-0.5 block text-[11px]" style={{ color: TEXT_MUTED }}>
          {hint}
        </span>
      </span>
      <span
        className="relative h-[18px] w-8 shrink-0 rounded-full transition-colors duration-200"
        style={{ background: on ? accent(0.85) : "var(--border)" }}
      >
        <span
          className="absolute left-[2px] top-[2px] h-3.5 w-3.5 rounded-full"
          style={{
            background: "var(--background)",
            transform: on ? "translateX(14px)" : "translateX(0)",
            transition: reduced ? "none" : "transform 0.2s",
          }}
        />
      </span>
    </button>
  )
}

function CommunicationDetail() {
  return (
    <div>
      <ToggleRow label="Product updates" hint="New features and releases." defaultOn />
      <ToggleRow label="Weekly digest" hint="A summary every Monday morning." defaultOn />
      <ToggleRow label="Tips and offers" hint="Occasional marketing emails." last />
    </div>
  )
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-md border bg-foreground/[0.03] px-1.5 py-0.5 text-[11px] font-medium"
      style={{ borderColor: HAIRLINE, color: TEXT_MUTED }}
    >
      {children}
    </span>
  )
}

function ShortcutRow({ label, keys, last }: { label: string; keys: string[]; last?: boolean }) {
  return (
    <div
      className="flex items-center justify-between gap-3 border-b px-3 py-3"
      style={{ borderColor: last ? "transparent" : HAIRLINE }}
    >
      <span className="text-[12px]" style={{ color: TEXT_MUTED }}>
        {label}
      </span>
      <span className="flex items-center gap-1">
        {keys.map((k) => (
          <Kbd key={k}>{k}</Kbd>
        ))}
      </span>
    </div>
  )
}

function ShortcutsDetail() {
  return (
    <div>
      <ShortcutRow label="Command menu" keys={["⌘", "K"]} />
      <ShortcutRow label="Search" keys={["⌘", "F"]} />
      <ShortcutRow label="New item" keys={["⌘", "N"]} />
      <ShortcutRow label="Toggle theme" keys={["⌘", "⇧", "L"]} last />
    </div>
  )
}

const DEFAULT_ROWS: PreferenceRow[] = [
  { icon: User, title: "Profile", hint: "Update your name, avatar and login email.", detail: <ProfileDetail /> },
  { icon: CreditCard, title: "Payment method", hint: "Manage cards, billing address and invoices.", detail: <PaymentDetail /> },
  { icon: MessageSquare, title: "Communication", hint: "Choose which emails and alerts you receive.", detail: <CommunicationDetail /> },
  { icon: Keyboard, title: "Shortcuts", hint: "Browse and customize keyboard shortcuts.", detail: <ShortcutsDetail /> },
  { icon: Heart, title: "Share feedback", hint: "Tell us what to build or fix next." },
]

export function Demo() {
  return (
    <div className="flex min-h-[260px] w-full items-center justify-center p-6">
      <PreferencesCard />
    </div>
  )
}
