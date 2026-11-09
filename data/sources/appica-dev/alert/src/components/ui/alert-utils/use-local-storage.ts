'use client'

import { useCallback, useRef, useSyncExternalStore } from 'react'

export type StorageBackend = 'local' | 'session'

export interface UseStorageOptions<T> {
  /** Serialize a value to its stored string form. Defaults to `JSON.stringify`. */
  serializer?: (value: T) => string
  /** Parse the stored string back into a value. Defaults to `JSON.parse`. */
  deserializer?: (raw: string) => T
}

export type UseStorageReturn<T> = readonly [T, (value: T | ((prev: T) => T)) => void, () => void]

const registries: Record<StorageBackend, Map<string, Set<() => void>>> = {
  local: new Map(),
  session: new Map(),
}

function subscribers(backend: StorageBackend, key: string) {
  const reg = registries[backend]
  let set = reg.get(key)
  if (!set) {
    set = new Set()
    reg.set(key, set)
  }
  return set
}

function notify(backend: StorageBackend, key: string) {
  registries[backend].get(key)?.forEach((cb) => cb())
}

function getStore(backend: StorageBackend): Storage | null {
  try {
    return backend === 'session' ? window.sessionStorage : window.localStorage
  } catch {
    return null
  }
}

let globalListenerCount = 0

function handleGlobalStorage(e: StorageEvent) {
  for (const backend of ['local', 'session'] as StorageBackend[]) {
    const store = getStore(backend)
    if (e.storageArea && store && e.storageArea !== store) continue
    if (e.key === null) {
      registries[backend].forEach((set) => set.forEach((cb) => cb()))
    } else {
      registries[backend].get(e.key)?.forEach((cb) => cb())
    }
  }
}

function addGlobalStorageListener() {
  if (globalListenerCount === 0 && typeof window !== 'undefined') {
    window.addEventListener('storage', handleGlobalStorage)
  }
  globalListenerCount++
}

function removeGlobalStorageListener() {
  globalListenerCount--
  if (globalListenerCount === 0 && typeof window !== 'undefined') {
    window.removeEventListener('storage', handleGlobalStorage)
  }
}

const parseCache = new Map<string, { raw: string; value: unknown }>()

/**
 * SSR-safe `localStorage`/`sessionStorage` hook.
 */
export function useStorage<T>(
  backend: StorageBackend,
  key: string,
  defaultValue: T,
  options: UseStorageOptions<T> = {},
): UseStorageReturn<T> {
  const defaultRef = useRef(defaultValue)
  const serializeRef = useRef(options.serializer)
  const deserializeRef = useRef(options.deserializer)
  serializeRef.current = options.serializer
  deserializeRef.current = options.deserializer

  const read = useCallback((): T => {
    if (!key) return defaultRef.current
    const store = getStore(backend)
    let raw: string | null = null
    try {
      raw = store?.getItem(key) ?? null
    } catch {
      raw = null
    }
    if (raw === null) return defaultRef.current

    const id = backend + ':' + key
    const cached = parseCache.get(id)
    if (cached && cached.raw === raw) return cached.value as T

    let value: T
    try {
      value = deserializeRef.current ? deserializeRef.current(raw) : (JSON.parse(raw) as T)
    } catch {
      value = defaultRef.current
    }
    parseCache.set(id, { raw, value })
    return value
  }, [backend, key])

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!key) return () => {}
      const set = subscribers(backend, key)
      set.add(onChange)
      addGlobalStorageListener()
      return () => {
        set.delete(onChange)
        removeGlobalStorageListener()
      }
    },
    [backend, key],
  )

  const getServerSnapshot = useCallback(() => defaultRef.current, [])

  const value = useSyncExternalStore(subscribe, read, getServerSnapshot)

  const setValue = useCallback(
    (update: T | ((prev: T) => T)) => {
      if (!key) return
      const next = typeof update === 'function' ? (update as (prev: T) => T)(read()) : update
      try {
        const raw = serializeRef.current ? serializeRef.current(next) : JSON.stringify(next)
        getStore(backend)?.setItem(key, raw)
      } catch {
        // ignore write failures (quota, privacy mode, SSR)
      }
      notify(backend, key)
    },
    [backend, key, read],
  )

  const remove = useCallback(() => {
    if (!key) return
    try {
      getStore(backend)?.removeItem(key)
    } catch {
      // ignore
    }
    notify(backend, key)
  }, [backend, key])

  return [value, setValue, remove] as const
}

export function useLocalStorage<T>(key: string, defaultValue: T, options?: UseStorageOptions<T>): UseStorageReturn<T> {
  return useStorage('local', key, defaultValue, options)
}

export function useSessionStorage<T>(
  key: string,
  defaultValue: T,
  options?: UseStorageOptions<T>,
): UseStorageReturn<T> {
  return useStorage('session', key, defaultValue, options)
}
