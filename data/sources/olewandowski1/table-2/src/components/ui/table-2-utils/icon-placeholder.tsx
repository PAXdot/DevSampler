"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

export type IconPlaceholderProps = React.ComponentProps<"svg"> & {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

type IconComponent = React.ComponentType<React.ComponentProps<"svg">>

/**
 * Renders an icon from the project's configured icon library. This mirrors the
 * shadcn `create` icon resolver; the default library is lucide-react, so the
 * `lucide` prop name is resolved against lucide-react (supporting both the base
 * and the `*Icon` aliased export names).
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const registry = LucideIcons as unknown as Record<string, IconComponent>
  const name = lucide ?? ""
  const Icon: IconComponent =
    registry[name] ||
    registry[`${name}Icon`] ||
    registry[name.replace(/Icon$/, "")] ||
    (LucideIcons.Square as IconComponent)
  return <Icon aria-hidden="true" {...props} />
}

export default IconPlaceholder
