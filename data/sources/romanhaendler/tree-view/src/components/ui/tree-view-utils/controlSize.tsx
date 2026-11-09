import { createContext, useContext } from "react";
import type { ReactNode } from "react";

export type ControlSize = "sm" | "md";

const ControlSizeContext = createContext<ControlSize | null>(null);

export interface ControlSizeProviderProps {
  size: ControlSize;
  children: ReactNode;
}

export function ControlSizeProvider({ size, children }: ControlSizeProviderProps) {
  return <ControlSizeContext.Provider value={size}>{children}</ControlSizeContext.Provider>;
}

export function SurfaceSizeReset({ children }: { children: ReactNode }) {
  return <ControlSizeContext.Provider value={null}>{children}</ControlSizeContext.Provider>;
}

export function useControlSize(own: ControlSize | undefined): ControlSize {
  const around = useContext(ControlSizeContext);
  return own ?? around ?? "md";
}
