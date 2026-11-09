import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const isShadowToken = (value: string) => /^\[var\(--shadow-[\w-]+\)\]$/.test(value)

const merge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [{ shadow: [isShadowToken] }],
    },
  },
})

/** Merge conditional class names, letting later Tailwind utilities win. */
export function cn(...inputs: ClassValue[]): string {
  return merge(clsx(inputs))
}
