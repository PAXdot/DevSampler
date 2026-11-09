"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react"
import { AnimatePresence, motion } from "motion/react"
import { frame } from "motion"
import "./motion-context-menu-utils/index.css"

const MENU = {
  spring: { type: "spring" as const, stiffness: 500, damping: 30 },
  initial: { opacity: 0, scale: 0.88 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
  width: 220,
  height: 400,
}

const SUBMENU = {
  spring: { type: "spring" as const, stiffness: 500, damping: 30 },
  offsetX: -4,
}

const HIGHLIGHT = {
  highlightSpring: { type: "spring" as const, stiffness: 500, damping: 35 },
}

type MenuItem = {
  label: string
  shortcut?: string
  disabled?: boolean
  separator?: boolean
  toggle?: boolean
  danger?: boolean
  children?: MenuItem[]
}

const items: MenuItem[] = [
  { label: "Undo", shortcut: "⌘Z" },
  { label: "Redo", shortcut: "⇧⌘Z", disabled: true },
  { separator: true, label: "" },
  { label: "Cut", shortcut: "⌘X" },
  { label: "Copy", shortcut: "⌘C" },
  { label: "Paste", shortcut: "⌘V" },
  { label: "Duplicate", shortcut: "⌘D" },
  { separator: true, label: "" },
  {
    label: "Arrange",
    children: [
      { label: "Bring to Front", shortcut: "⌘]" },
      { label: "Bring Forward", shortcut: "⌘⇧]" },
      { separator: true, label: "" },
      { label: "Send to Back", shortcut: "⌘[" },
      { label: "Send Backward", shortcut: "⌘⇧[" },
    ],
  },
  {
    label: "Transform",
    children: [
      { label: "Flip Horizontal" },
      { label: "Flip Vertical" },
      { separator: true, label: "" },
      { label: "Rotate 90°" },
      { label: "Rotate 180°" },
    ],
  },
  { separator: true, label: "" },
  { label: "Visualise Safe Cone", toggle: true },
  { separator: true, label: "" },
  { label: "Delete", shortcut: "⌫", danger: true },
]

const hasChildren = (item: MenuItem) => Boolean(item.children?.length)

const inTriangle = (
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number,
) => {
  const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by)
  const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy)
  const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay)
  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0
  return !(hasNeg && hasPos)
}

function SubItem({ item, onSelect }: { item: MenuItem; onSelect: () => void }) {
  const [highlighted, setHighlighted] = useState(false)
  return (
    <div
      className={`item${item.disabled ? " disabled" : ""}`}
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
      onClick={() => {
        if (!item.disabled) onSelect()
      }}
    >
      <motion.div
        className="item-highlight"
        initial={false}
        animate={{ opacity: highlighted ? 1 : 0 }}
        transition={HIGHLIGHT.highlightSpring}
      />
      <span className="item-label">{item.label}</span>
      {item.shortcut && (
        <span className={`shortcut${highlighted ? " shortcut-active" : ""}`}>
          {item.shortcut}
        </span>
      )}
    </div>
  )
}

function Item({
  item,
  highlighted,
  isSubmenuOpen,
  isToggleActive,
  onEnter,
  onLeave,
  onClick,
  onSelect,
}: {
  item: MenuItem
  highlighted: boolean
  isSubmenuOpen: boolean
  isToggleActive: boolean
  onEnter: (event: ReactMouseEvent) => void
  onLeave: () => void
  onClick: () => void
  onSelect: () => void
}) {
  const active = highlighted || isSubmenuOpen
  return (
    <div
      className="item-wrapper"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div
        className={`item${item.disabled ? " disabled" : ""}${item.danger ? " danger" : ""}`}
      >
        <motion.div
          className={`item-highlight${item.danger ? " item-highlight-danger" : ""}`}
          initial={false}
          animate={{ opacity: active ? 1 : 0 }}
          transition={HIGHLIGHT.highlightSpring}
        />
        {item.toggle && (
          <span className={`toggle-check${isToggleActive ? " toggle-active" : ""}`}>
            ✓
          </span>
        )}
        <span className="item-label">{item.label}</span>
        {item.shortcut && (
          <span className={`shortcut${active ? " shortcut-active" : ""}`}>
            {item.shortcut}
          </span>
        )}
        {hasChildren(item) && (
          <span className={`chevron${active ? " chevron-active" : ""}`}>›</span>
        )}
      </div>
      <AnimatePresence>
        {hasChildren(item) && isSubmenuOpen && (
          <motion.div
            className="submenu"
            initial={{ opacity: 0, x: SUBMENU.offsetX }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: SUBMENU.offsetX, transition: { duration: 0.1 } }}
            transition={SUBMENU.spring}
            style={{ willChange: "transform, opacity" }}
          >
            {item.children!.map((child, index) =>
              child.separator ? (
                <div className="separator" key={`sub-sep-${index}`} />
              ) : (
                <SubItem key={child.label} item={child} onSelect={onSelect} />
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ContextMenu() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [highlighted, setHighlighted] = useState(-1)
  const [safeCone, setSafeCone] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const coneRef = useRef<SVGPolygonElement>(null)
  const cone = useRef<{ px: number; py: number; rx: number; ty: number; by: number } | null>(null)
  const bounds = useRef<DOMRect | null>(null)
  const pending = useRef<(() => void) | null>(null)

  const close = useCallback(() => {
    setPosition(null)
    setOpenSubmenu(null)
    setHighlighted(-1)
    cone.current = null
    bounds.current = null
  }, [])

  const onContextMenu = useCallback((event: ReactMouseEvent) => {
    event.preventDefault()
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    bounds.current = rect
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    if (x + MENU.width > rect.width - 8) x = rect.width - MENU.width - 8
    if (y + MENU.height > rect.height - 8) y = rect.height - MENU.height - 8
    setPosition({ x: Math.max(8, x), y: Math.max(8, y) })
    setOpenSubmenu(null)
    setHighlighted(-1)
  }, [])

  const onEnter = useCallback(
    (event: ReactMouseEvent, index: number, item: MenuItem) => {
      if (item.disabled) return
      const open = () => {
        setHighlighted(index)
        cone.current = null
        coneRef.current?.setAttribute("points", "0,0 0,0 0,0")
        setOpenSubmenu(hasChildren(item) ? item.label : null)
      }
      if (openSubmenu && openSubmenu !== item.label) {
        const current = cone.current
        if (current && bounds.current) {
          const px = event.clientX - bounds.current.left
          const py = event.clientY - bounds.current.top
          if (
            inTriangle(
              px,
              py,
              current.px,
              current.py,
              current.rx,
              current.ty,
              current.rx,
              current.by,
            )
          ) {
            pending.current = open
            return
          }
        }
      }
      pending.current = null
      open()
    },
    [openSubmenu],
  )

  const onLeave = useCallback((item: MenuItem) => {
    if (!hasChildren(item)) setHighlighted(-1)
  }, [])

  const onClick = useCallback(
    (item: MenuItem) => {
      if (item.disabled) return
      if (item.toggle) {
        setSafeCone((value) => !value)
        return
      }
      if (!hasChildren(item)) close()
    },
    [close],
  )

  const onMouseMove = useCallback(
    (event: ReactMouseEvent) => {
      pointer.current.x = event.clientX
      pointer.current.y = event.clientY
      if (!openSubmenu || !menuRef.current) return
      const target = event.target as HTMLElement
      if (target.closest?.(".submenu")) return
      const read = typeof frame?.read === "function" ? frame.read.bind(frame) : (cb: () => void) => requestAnimationFrame(cb)
      const render = typeof frame?.render === "function" ? frame.render.bind(frame) : (cb: () => void) => requestAnimationFrame(cb)
      read(() => {
        const rect = bounds.current
        if (!rect) return
        const ox = pointer.current.x - rect.left
        const oy = pointer.current.y - rect.top
        const current = cone.current
        if (
          current &&
          inTriangle(ox, oy, current.px, current.py, current.rx, current.ty, current.rx, current.by)
        ) {
          return
        }
        if (pending.current) {
          const next = pending.current
          pending.current = null
          next()
          return
        }
        const submenu = menuRef.current?.querySelector(".submenu")
        if (!submenu) return
        const box = submenu.getBoundingClientRect()
        const rx = box.left - rect.left
        const ty = box.top - rect.top
        const by = box.bottom - rect.top
        if (ox >= rx) return
        cone.current = { px: ox, py: oy, rx, ty, by }
        if (coneRef.current && safeCone) {
          render(() => {
            coneRef.current?.setAttribute("points", `${ox},${oy} ${rx},${ty} ${rx},${by}`)
          })
        }
      })
    },
    [openSubmenu, safeCone],
  )

  useEffect(() => {
    if (!position) return
    const onDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) close()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [position, close])

  return (
    <div ref={containerRef} className="container" onContextMenu={onContextMenu}>
      <div className="canvas">
        <div className="canvas-grid" />
        <span className="canvas-hint">Right-click anywhere</span>
      </div>
      {safeCone && openSubmenu && position && (
        <svg className="safe-cone-svg">
          <polygon ref={coneRef} className="safe-cone" points="0,0 0,0 0,0" />
        </svg>
      )}
      <AnimatePresence>
        {position && (
          <motion.div
            ref={menuRef}
            className="menu"
            initial={MENU.initial}
            animate={MENU.animate}
            exit={MENU.exit}
            transition={MENU.spring}
            onMouseMove={onMouseMove}
            style={{
              left: position.x,
              top: position.y,
              originX: 0,
              originY: 0,
              willChange: "transform, opacity",
            }}
          >
            {items.map((item, index) =>
              item.separator ? (
                <div className="separator" key={`sep-${index}`} />
              ) : (
                <Item
                  key={item.label}
                  item={item}
                  highlighted={highlighted === index}
                  isSubmenuOpen={openSubmenu === item.label}
                  isToggleActive={item.toggle ? safeCone : false}
                  onEnter={(event) => onEnter(event, index, item)}
                  onLeave={() => onLeave(item)}
                  onClick={() => onClick(item)}
                  onSelect={close}
                />
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContextMenu
