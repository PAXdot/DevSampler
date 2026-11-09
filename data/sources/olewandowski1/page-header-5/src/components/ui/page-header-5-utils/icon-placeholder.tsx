"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

type LucideIconName = keyof typeof LucideIcons

type IconPlaceholderProps = {
  /** Icon name from the lucide-react set, used as the default rendered icon. */
  lucide?: LucideIconName
  /** Icon name from @tabler/icons-react, if that icon library is configured. */
  tabler?: string
  /** Icon name from hugeicons-react, if that icon library is configured. */
  hugeicons?: string
  /** Icon name from @phosphor-icons/react, if that icon library is configured. */
  phosphor?: string
  /** Icon name from @remixicon/react, if that icon library is configured. */
  remixicon?: string
  className?: string
  size?: number | string
} & Omit<React.SVGProps<SVGSVGElement>, "size">

/**
 * Resolves to whichever icon library a project is configured to use,
 * accepting the icon name for every supported set (lucide, tabler,
 * hugeicons, phosphor, remixicon). This build renders the lucide-react
 * icon, which every 7Ovr block ships a name for, so blocks always render
 * a sensible icon out of the box regardless of which set is installed.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  className,
  size = 16,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucide
    ? (LucideIcons[lucide] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined)
    : undefined

  if (!Icon) return null

  return <Icon className={className} size={size} {...props} />
}

export default IconPlaceholder
