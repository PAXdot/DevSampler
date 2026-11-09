"use client"

import * as React from "react"
import { icons as lucideIcons } from "lucide-react"

type IconPlaceholderProps = {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & React.ComponentProps<"svg">

/**
 * Minimal, self-contained stand-in for shadcn/ui studio's internal
 * IconPlaceholder (which dynamically switches between five icon libraries
 * based on studio-only state). This renders the icon named by the `lucide`
 * prop using lucide-react's icon map, since lucide is the ecosystem default.
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
    ? lucideIcons[lucide as keyof typeof lucideIcons]
    : undefined

  if (!Icon) {
    return null
  }

  return <Icon {...props} />
}

export default IconPlaceholder
