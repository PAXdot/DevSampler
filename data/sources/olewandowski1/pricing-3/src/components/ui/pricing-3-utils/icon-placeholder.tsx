"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

type IconPlaceholderProps = React.ComponentProps<"svg"> & {
  lucide?: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  size?: number | string
}

/**
 * Minimal standalone stand-in for the source registry's multi-icon-library
 * switcher (which dynamically swaps between Lucide/Tabler/Hugeicons/Phosphor/
 * Remixicon based on a user-selected icon library at install time). This
 * version always renders the Lucide icon named by the `lucide` prop, since
 * Lucide is the default icon set for shadcn/ui projects.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  size,
  ...props
}: IconPlaceholderProps) {
  if (!lucide) return null

  const Icon = LucideIcons[lucide] as
    | React.ComponentType<React.ComponentProps<"svg">>
    | undefined

  if (!Icon) return null

  return <Icon size={size} {...props} />
}

export default IconPlaceholder
