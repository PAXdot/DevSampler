"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

type IconPlaceholderProps = React.ComponentProps<"svg"> & {
  lucide: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

/**
 * Resolves to a real icon from whichever icon library a consumer has
 * configured for their project. This build defaults to lucide-react,
 * matching the `lucide` name each call site already provides.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = LucideIcons[lucide] as unknown as React.ComponentType<
    React.ComponentProps<"svg">
  >
  if (!Icon) return null
  return <Icon {...props} />
}

export default IconPlaceholder
