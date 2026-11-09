"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

/**
 * Faithful stand-in for 7ovr's IconPlaceholder macro.
 * At install time, 7ovr's CLI rewrites <IconPlaceholder lucide="X" tabler="..." .../>
 * into a direct import from whichever icon library the project already uses,
 * defaulting to lucide-react (the shadcn/ui default). This resolves the same
 * way here: it renders the icon named by the `lucide` prop via lucide-react.
 */
type IconPlaceholderProps = {
  lucide: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  className?: string
  size?: number | string
  [key: string]: unknown
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = LucideIcons[lucide] as React.ComponentType<Record<string, unknown>> | undefined
  if (!Icon) return null
  return <Icon {...props} />
}

export default IconPlaceholder
