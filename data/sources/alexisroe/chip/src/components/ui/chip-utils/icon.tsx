import { type IconName, iconRegistry, type TablerIconProps } from "@/components/ui/chip-utils/icons";

/** Props accepted by Icon. */
export interface IconProps extends Omit<TablerIconProps, "ref"> {
  /** Name of the icon to render, from iconRegistry. */
  name: IconName;
}

/**
 * Renders a Tabler icon looked up by name from iconRegistry.
 *
 * @example
 * ```tsx
 * <Icon name="search" size={16} />
 * ```
 */
export function Icon({ name, ...rest }: IconProps) {
  const IconComponent = iconRegistry[name];

  return <IconComponent {...rest} />;
}
