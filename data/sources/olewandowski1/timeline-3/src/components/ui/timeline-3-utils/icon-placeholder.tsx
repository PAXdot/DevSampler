import * as React from "react"
import * as LucideIcons from "lucide-react"

type IconPlaceholderProps = {
  lucide?: keyof typeof LucideIcons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  className?: string
  size?: number | string
} & React.SVGAttributes<SVGSVGElement>

/**
 * Renders whichever icon library the caller has configured. Only the
 * `lucide` icon name is resolved here (the other props name the same icon
 * in alternative libraries a 7ovr project may swap in at generation time).
 */
function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  className,
  size,
  ...rest
}: IconPlaceholderProps) {
  const Icon = lucide
    ? (LucideIcons[lucide] as React.ComponentType<React.SVGAttributes<SVGSVGElement>> | undefined)
    : undefined

  if (!Icon) return null

  return <Icon className={className} size={size} {...rest} />
}

export { IconPlaceholder }
export default IconPlaceholder
