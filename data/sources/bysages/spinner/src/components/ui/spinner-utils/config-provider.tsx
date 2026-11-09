import type { ComponentMessagesOverride, ThemeScene } from "@bysages/core";
import type { HTMLAttributes, ReactNode } from "react";
import { createContext, useContext } from "react";

export type ConfigDensity = "compact" | "default" | "comfortable" | "spacious";

export type ConfigScene = Exclude<ThemeScene, "auto">;

export interface ConfigContext {
  density?: ConfigDensity;
  scene?: ConfigScene;
  accent?: string;
  dir?: "ltr" | "rtl";
  locale?: string;
  messages?: ComponentMessagesOverride;
}

const ConfigContextImpl = createContext<ConfigContext>({});

/** The nearest provider's snapshot, or an empty one when no provider
 * wraps the caller. */
export function useConfig(): ConfigContext {
  return useContext(ConfigContextImpl);
}

export interface ConfigProviderProps extends HTMLAttributes<HTMLDivElement> {
  density?: ConfigDensity;
  scene?: ConfigScene;
  accent?: string;
  dir?: "ltr" | "rtl";
  locale?: string;
  messages?: ComponentMessagesOverride;
  children?: ReactNode;
}

export function ConfigProvider({
  density,
  scene,
  accent,
  dir,
  locale,
  messages,
  children,
  ...rest
}: ConfigProviderProps) {
  return (
    <ConfigContextImpl.Provider value={{ density, scene, accent, dir, locale, messages }}>
      <div
        {...rest}
        data-scope="config-provider"
        data-part="root"
        {...(density != null ? { "data-density": density } : {})}
        {...(scene != null ? { "data-scene": scene } : {})}
        {...(accent != null ? { "data-accent": accent } : {})}
        {...(dir != null ? { dir } : {})}
        {...(locale != null ? { lang: locale } : {})}
      >
        {children}
      </div>
    </ConfigContextImpl.Provider>
  );
}
