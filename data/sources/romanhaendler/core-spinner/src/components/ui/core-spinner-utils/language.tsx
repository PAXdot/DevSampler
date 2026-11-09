import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { DEFAULT_FORMATS } from "./formats";
import type { Formats } from "./formats";
import { DEFAULT_WORDING } from "./wording";
import type { Wording } from "./wording";

export { DEFAULT_FORMATS } from "./formats";
export type { Formats } from "./formats";
export { DEFAULT_WORDING } from "./wording";
export type { Wording } from "./wording";

/** What an application can pass in for formatting and wording. */
export interface LanguageOptions {
  formats?: Partial<Formats>;
  wording?: Partial<Omit<Wording, "presets">> & { presets?: Partial<Wording["presets"]> };
}

/** A complete language: the formats for numbers and dates, and the wording. */
export interface Language {
  formats: Formats;
  wording: Wording;
}

/** English formats and English wording - what every component uses without a
    `LanguageProvider`. */
export const DEFAULT_LANGUAGE: Language = {
  formats: DEFAULT_FORMATS,
  wording: DEFAULT_WORDING,
};

const LanguageContext = createContext<Language | null>(null);

/** Builds a complete instance from the default and a partial value. */
export function mergeLanguage(optionen: LanguageOptions | undefined): Language {
  if (!optionen) return DEFAULT_LANGUAGE;
  const { presets, ...wortlautRest } = optionen.wording ?? {};
  return {
    formats: optionen.formats ? { ...DEFAULT_FORMATS, ...optionen.formats } : DEFAULT_FORMATS,
    wording: optionen.wording
      ? {
          ...DEFAULT_WORDING,
          ...wortlautRest,
          presets: presets ? { ...DEFAULT_WORDING.presets, ...presets } : DEFAULT_WORDING.presets,
        }
      : DEFAULT_WORDING,
  };
}

/** The props of `LanguageProvider`: the parts of the formats and the wording
    that differ from the default. */
export interface LanguageProviderProps extends LanguageOptions {
  children: ReactNode;
}

/**
 * Sets formatting and wording for the subtree below. Used by the root provider,
 * and usable directly for a section as well.
 */
export function LanguageProvider({ formats, wording, children }: LanguageProviderProps) {
  const value = useMemo(() => mergeLanguage({ formats, wording }), [formats, wording]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Formatting and wording together; without a provider, the defaults. */
export const useLanguage = (): Language => useContext(LanguageContext) ?? DEFAULT_LANGUAGE;

/** Only the formatting. */
export const useFormats = (): Formats => useLanguage().formats;

/** Only the wording. */
export const useWording = (): Wording => useLanguage().wording;

export { separatorsOf, DEFAULT_SEPARATORS } from "./formats";
export type { Separators } from "./formats";
