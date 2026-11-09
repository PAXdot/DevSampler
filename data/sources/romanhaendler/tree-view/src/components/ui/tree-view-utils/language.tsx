import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { DEFAULT_WORDING } from "./wording";
import type { Wording } from "./wording";

export { DEFAULT_WORDING } from "./wording";
export type { Wording } from "./wording";

export interface LanguageOptions {
  wording?: Partial<Wording>;
}

export interface Language {
  wording: Wording;
}

export const DEFAULT_LANGUAGE: Language = {
  wording: DEFAULT_WORDING,
};

const LanguageContext = createContext<Language | null>(null);

export function mergeLanguage(options: LanguageOptions | undefined): Language {
  if (!options) return DEFAULT_LANGUAGE;
  return {
    wording: options.wording ? { ...DEFAULT_WORDING, ...options.wording } : DEFAULT_WORDING,
  };
}

export interface LanguageProviderProps extends LanguageOptions {
  children: ReactNode;
}

export function LanguageProvider({ wording, children }: LanguageProviderProps) {
  const value = useMemo(() => mergeLanguage({ wording }), [wording]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = (): Language => useContext(LanguageContext) ?? DEFAULT_LANGUAGE;
export const useWording = (): Wording => useLanguage().wording;
