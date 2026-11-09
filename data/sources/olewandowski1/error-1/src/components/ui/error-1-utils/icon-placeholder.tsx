import type { ComponentProps, ComponentType } from "react"
import * as LucideIcons from "lucide-react"

// 7ovr/shadcn ship `IconPlaceholder` as a compile-time marker: the shadcn CLI
// substitutes it for the project's configured `iconLibrary` (lucide, tabler,
// hugeicons, phosphor, remixicon) when it writes the file. There is no
// shipped runtime component for it, so this renders the `lucide` variant
// directly, matching the CLI's default `iconLibrary: "lucide"`.
export interface IconPlaceholderProps extends ComponentProps<"svg"> {
  lucide: keyof typeof LucideIcons
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
  const Icon = LucideIcons[lucide] as ComponentType<ComponentProps<"svg">>

  if (!Icon) {
    return null
  }

  return <Icon {...props} />
}

export default IconPlaceholder
