import * as React from "react"
import * as LucideIcons from "lucide-react"

/**
 * 7Ovr blocks render icons through this placeholder so the CLI can swap in
 * whichever icon library a project already has (lucide, tabler, hugeicons,
 * phosphor, remixicon) at install time. That per-install substitution is
 * done server-side on 7ovr.com and isn't exposed as static source, so this
 * shim resolves the `lucide` prop against lucide-react directly (the
 * shadcn/ui default icon set) to keep the block fully self-contained.
 */
type IconPlaceholderProps = {
  lucide?: keyof typeof LucideIcons
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
  const Icon = lucide
    ? (LucideIcons[lucide] as React.ComponentType<Record<string, unknown>>)
    : undefined

  if (!Icon) return null

  return <Icon {...props} />
}

export default IconPlaceholder
