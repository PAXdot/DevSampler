import type { AriaAttributes, CSSProperties } from "react";

export interface InteractiveStateProps {
  disabled?: boolean;
  loading?: boolean;
}

export interface InteractiveStateResult {
  isDisabled: boolean;
  isLoading: boolean;
  style: CSSProperties;
  aria: Pick<AriaAttributes, "aria-disabled" | "aria-busy">;
}

export function resolveInteractiveState(
  props: InteractiveStateProps,
): InteractiveStateResult {
  const isLoading = Boolean(props.loading);
  const isDisabled = Boolean(props.disabled) || isLoading;

  return {
    isDisabled,
    isLoading,
    style: {
      opacity: isDisabled ? 0.5 : undefined,
      cursor: isDisabled ? "not-allowed" : undefined,
      pointerEvents: isDisabled ? "none" : undefined,
    },
    aria: {
      "aria-disabled": isDisabled ? true : undefined,
      "aria-busy": isLoading ? true : undefined,
    },
  };
}

export const DISABLED_ROUGHNESS_FACTOR = 0.7;
