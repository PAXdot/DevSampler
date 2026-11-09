import { useMediaQuery } from "@/components/ui/tilt-card-utils/use-media-query";

/** True when the primary input can hover (a mouse or trackpad). */
export function useHoverCapable() {
  return useMediaQuery("(hover: hover) and (pointer: fine)", true);
}
