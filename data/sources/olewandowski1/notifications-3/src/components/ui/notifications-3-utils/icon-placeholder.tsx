import * as React from "react"
import * as LucideIcons from "lucide-react"
import type { LucideProps } from "lucide-react"

/**
 * Faithful minimal reconstruction of 7ovr's icon-library abstraction.
 * The source registry lets a project pick an icon library (lucide, tabler,
 * hugeicons, phosphor, remixicon) via a Customize panel; the served file is
 * generated per-project to import from that library. That generated file
 * isn't published anywhere fetchable, so this wrapper keeps the same prop
 * contract and renders the `lucide` name against lucide-react, the default
 * shadcn icon set.
 */
type IconPlaceholderProps = LucideProps & {
  lucide?: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucide
    ? (LucideIcons[lucide] as React.ComponentType<LucideProps> | undefined)
    : undefined

  if (!Icon) return null

  return <Icon {...props} />
}

export default IconPlaceholder
