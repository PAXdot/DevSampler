"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"
import { HelpCircle } from "lucide-react"

// Faithful re-implementation of Extend UI's docs-only <IconPlaceholder />.
// The original renders a per-icon-library glyph and is swapped by the Extend
// CLI for the consumer's configured icon library at install time. Since this
// draft ships against the default lucide-react icon set, we resolve the
// `lucide` prop (the export name Extend's own registry already encodes for
// every icon it uses) directly against lucide-react's exports.
export type IconPlaceholderProps = {
  lucide: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & React.ComponentProps<"svg">

export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...rest
}: IconPlaceholderProps) {
  const Icon =
    (LucideIcons as unknown as Record<string, React.ComponentType<React.ComponentProps<"svg">>>)[
      lucide
    ] ?? HelpCircle

  return <Icon {...rest} />
}
