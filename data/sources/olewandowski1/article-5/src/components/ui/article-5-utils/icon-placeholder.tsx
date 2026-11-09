"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"
import type { LucideProps } from "lucide-react"

interface IconPlaceholderProps extends Omit<LucideProps, "ref"> {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

// Minimal functional stand-in for shadcn's internal design-system
// "icon library switcher" dev tool. That tool swaps the rendered icon
// based on a project's configured icon library (lucide/tabler/hugeicons/
// phosphor/remixicon); it ships no standalone runtime implementation.
// Here we resolve the `lucide` icon name against lucide-react, the
// sandbox's default icon library, keeping the same call-site API.
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  if (!lucide) return null

  const Icon = (
    LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[lucide]

  if (!Icon) return null

  return <Icon {...props} />
}
