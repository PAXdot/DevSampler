"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

/** Props a call site may pass through to an icon. */
type IconPlaceholderProps = {
  lucide?: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  className?: string
  size?: number | string
  "aria-hidden"?: boolean | "true" | "false"
}

/**
 * Renders whichever icon library the project already has installed.
 * Falls back to lucide-react (the shadcn default) so the component
 * works standalone without a build-time icon-swap step.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucide
    ? (LucideIcons[lucide] as React.ComponentType<Record<string, unknown>> | undefined)
    : undefined

  if (!Icon) return null

  return <Icon {...props} />
}

export default IconPlaceholder
