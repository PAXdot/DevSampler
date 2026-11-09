/**
 * e-ink-ui-lib (MIT License) — https://github.com/AlexisRoe/e-ink-ui-lib
 *
 * Trimmed to the single icon the Checkbox component uses. The full library
 * registers the 50 most common Tabler icons under the same `iconRegistry`
 * shape; see src/components/icons/icons.ts upstream for the complete set.
 */
import { IconCheck } from "@tabler/icons-react";
import type { ComponentProps } from "react";

export const iconRegistry = {
  check: IconCheck,
} as const;

/** Names of every icon available in {@link iconRegistry}. */
export type IconName = keyof typeof iconRegistry;

/** Component type shared by every icon in {@link iconRegistry}. */
export type TablerIconComponent = (typeof iconRegistry)[IconName];

/** Props accepted by any Tabler icon component in {@link iconRegistry}. */
export type TablerIconProps = ComponentProps<TablerIconComponent>;
