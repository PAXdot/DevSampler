"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SpinnerProps } from "./spinner-types";

/** App-wide defaults for Spinner. An explicit prop always wins over these,
 *  and these win over the built-in defaults. Scoped to the Spinner's own
 *  config section (the original library's config also covers sibling
 *  components such as Skeleton/ProgressBar, which are outside this port). */
export interface LoadingKitConfig {
  spinner?: Pick<SpinnerProps, "variant" | "color" | "size" | "speed" | "thickness" | "track">;
}

const LoadingConfigContext = createContext<LoadingKitConfig>({});

/** The config in effect for the calling component ({} when none is set). */
export function useLoadingConfig(): LoadingKitConfig {
  return useContext(LoadingConfigContext);
}

/**
 * Overrides the config for this subtree, on top of whatever an outer
 * provider set. Equivalent to the original's `provideLoadingConfig`.
 */
export function LoadingConfigProvider({
  value,
  children,
}: {
  value: LoadingKitConfig;
  children: ReactNode;
}) {
  const parent = useLoadingConfig();
  const merged: LoadingKitConfig = { spinner: { ...parent.spinner, ...value.spinner } };
  return <LoadingConfigContext.Provider value={merged}>{children}</LoadingConfigContext.Provider>;
}
