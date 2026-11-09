"use client"

import * as React from "react"
import { icons } from "lucide-react"

type IconPlaceholderProps = React.ComponentPropsWithoutRef<"svg"> & {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

/**
 * IconPlaceholder resolves to a real icon from the configured icon library.
 * On 7Ovr the shadcn CLI rewrites this placeholder to the chosen library at
 * install time; here it renders the lucide-react icon named by the `lucide` prop.
 */
export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon =
    (lucide && (icons as Record<string, React.ComponentType<React.ComponentPropsWithoutRef<"svg">>>)[lucide]) ||
    icons.Square
  return <Icon {...props} />
}

export default IconPlaceholder
