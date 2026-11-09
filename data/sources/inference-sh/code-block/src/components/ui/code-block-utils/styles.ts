import type { TokenType } from '@/components/ui/code-block-utils/types'

/**
 * Tailwind classes for each token type
 * Light mode uses *-600/*-700 for contrast, dark mode uses *-400
 */
export const tokenStyles: Record<TokenType, string> = {
  comment: 'text-zinc-400 dark:text-zinc-500 italic',

  string: 'text-amber-700 dark:text-amber-400',

  'keyword-import': 'text-pink-600 dark:text-pink-400 font-medium',
  'keyword-declaration': 'text-violet-600 dark:text-violet-400 font-medium',
  'keyword-control': 'text-blue-600 dark:text-blue-400 font-medium',
  'keyword-value': 'text-cyan-600 dark:text-cyan-400',
  'keyword-other': 'text-violet-600 dark:text-violet-400',

  type: 'text-cyan-600 dark:text-cyan-400',

  number: 'text-emerald-600 dark:text-emerald-400',

  function: 'text-green-600 dark:text-green-400',

  property: 'text-blue-600 dark:text-blue-400',

  operator: 'text-zinc-500 dark:text-zinc-400',
  punctuation: 'text-zinc-500 dark:text-zinc-400',

  tag: 'text-red-600 dark:text-red-400',
  attribute: 'text-orange-600 dark:text-orange-300',
}

/**
 * Get the CSS class for a token type
 */
export function getTokenStyle(type: TokenType | null): string | null {
  if (!type) return null
  return tokenStyles[type] ?? null
}
