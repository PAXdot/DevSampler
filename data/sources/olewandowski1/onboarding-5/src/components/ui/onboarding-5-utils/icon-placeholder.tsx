"use client"

import type { ComponentProps } from "react"
import * as LucideIcons from "lucide-react"

type IconPlaceholderProps = {
  lucide: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & Omit<ComponentProps<"svg">, "ref">

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = LucideIcons[lucide] as unknown as React.ComponentType<
    ComponentProps<"svg">
  >
  if (!Icon) return null
  return <Icon {...props} />
}

export default IconPlaceholder
