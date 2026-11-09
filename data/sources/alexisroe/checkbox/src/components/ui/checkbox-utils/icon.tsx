/**
 * e-ink-ui-lib (MIT License) — https://github.com/AlexisRoe/e-ink-ui-lib
 */
import { type IconName, iconRegistry, type TablerIconProps } from "./icons";

/** Props accepted by {@link Icon}. */
export interface IconProps extends Omit<TablerIconProps, "ref"> {
  /** Name of the icon to render, from {@link iconRegistry}. */
  name: IconName;
}

/**
 * Renders a Tabler icon looked up by name from {@link iconRegistry}.
 *
 * @example
 * ```tsx
 * <Icon name="check" size={16} />
 * ```
 */
export function Icon({ name, ...rest }: IconProps) {
  const IconComponent = iconRegistry[name];

  return <IconComponent {...rest} />;
}
