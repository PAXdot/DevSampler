import * as React from "react";
import { ChevronRight } from "lucide-react";

export interface MListItemProps {
  href?: string;
  interactive?: boolean;
  chevron?: boolean;
  disabled?: boolean;
  leading?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function MListItem({
  href,
  interactive = false,
  chevron = false,
  disabled = false,
  leading,
  description,
  trailing,
  children,
  onClick,
  ...rest
}: MListItemProps) {
  const tag: "a" | "button" | "div" =
    href && !disabled ? "a" : interactive ? "button" : "div";

  const rowClassName = [
    "m-list-item__row",
    tag !== "div" && "m-list-item__row--interactive",
    disabled && "m-list-item__row--disabled",
  ]
    .filter(Boolean)
    .join(" ");

  const sharedProps: Record<string, unknown> = {
    className: rowClassName,
    onClick,
    ...rest,
  };

  if (tag === "a") {
    sharedProps.href = href;
  }

  if (tag === "button") {
    sharedProps.type = "button";
    sharedProps.disabled = disabled;
  }

  if (tag !== "button" && disabled && interactive) {
    sharedProps["aria-disabled"] = "true";
  }

  const Tag = tag as React.ElementType;

  return (
    <li className="m-list-item">
      <Tag {...sharedProps}>
        {leading ? (
          <span className="m-list-item__leading">{leading}</span>
        ) : null}
        <span className="m-list-item__content">
          <span className="m-list-item__title">{children}</span>
          {description ? (
            <span className="m-list-item__description">{description}</span>
          ) : null}
        </span>
        {trailing ? (
          <span className="m-list-item__trailing">{trailing}</span>
        ) : null}
        {chevron ? (
          <ChevronRight
            aria-hidden="true"
            size={16}
            className="m-list-item__chevron"
          />
        ) : null}
      </Tag>
    </li>
  );
}
