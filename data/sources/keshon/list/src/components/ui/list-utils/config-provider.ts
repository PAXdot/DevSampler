import { createContext, useContext } from 'react'

/**
 * TRIMMED stand-in for @ggary/core/config-provider's KitConfig/KitWords.
 * The real KitWords interface imports a `words` sub-type from ~40 other kit
 * components (approval, budget, calendar, ...), which only makes sense when
 * the whole kit ships together. This extraction keeps only the List
 * component, so `words` is kept generic here instead of that kit-wide union.
 * The runtime logic below (`configWords`, `applyConfig`, `useConfigured`) is
 * copied verbatim from packages/core/src/components/config-provider/config-provider.connect.ts.
 */
export interface KitConfig {
  locale?: string
  dir?: 'ltr' | 'rtl'
  size?: 'sm' | 'md' | 'lg'
  mode?: 'light' | 'dark'
  words?: Record<string, object | undefined>
}

/** Which settings a component takes: its locale, its size (controls only), and its words under this name. */
export interface ConfigPick {
  locale?: boolean
  size?: boolean
  words?: string
}

const ConfigContext = createContext<KitConfig>({})

/** A component's words: the provider's for it, with the component's own laid over them, key by key. */
function configWords<W extends object>(config: KitConfig, name: string, own: W | undefined): W | undefined {
  const given = (config.words as Record<string, object> | undefined)?.[name] as W | undefined
  if (!given) return own
  return own ? { ...given, ...own } : given
}

/**
 * A component's props with the provider's settings filled in where the
 * component left them out. Only what the component takes is touched, and the
 * component's own words are laid over the provider's, key by key.
 */
function applyConfig<P extends object>(props: P, config: KitConfig, pick: ConfigPick): P {
  const own = props as P & { locale?: string; size?: string; words?: object }
  const next = { ...props } as Record<string, unknown>
  let changed = false
  const set = (key: string, value: unknown) => {
    next[key] = value
    changed = true
  }
  if (pick.locale && own.locale === undefined && config.locale !== undefined) set('locale', config.locale)
  if (pick.size && own.size === undefined && config.size !== undefined) set('size', config.size)
  if (pick.words && config.words?.[pick.words]) set('words', configWords(config, pick.words, own.words))
  return changed ? (next as unknown as P) : props
}

/** A component's props with the settings in force filled in where it left them out. */
export function useConfigured<P extends object>(props: P, pick: ConfigPick): P {
  return applyConfig(props, useContext(ConfigContext), pick)
}
