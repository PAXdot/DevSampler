"use client";

import type { HTMLAttributes, ReactNode } from "react";
import {
  Alert02Icon,
  AlertCircleIcon,
  Cancel01Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import Icon from "./icon";
import { cn } from "@/lib/utils";

type Tone = "info" | "success" | "warning" | "danger";

interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: Tone;
  title: string;
  /** Announce it when it appears (a result the person is waiting on). */
  live?: boolean;
  /** Shows a close button; called when it's pressed. */
  ondismiss?: () => void;
  dismissLabel?: string;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

const icons = {
  info: InformationCircleIcon,
  success: CheckmarkCircle02Icon,
  warning: Alert02Icon,
  danger: AlertCircleIcon,
};

export default function Alert({
  tone = "info",
  title,
  live = false,
  ondismiss,
  dismissLabel = "Dismiss",
  children,
  actions,
  className,
  ...rest
}: AlertProps) {
  return (
    <div
      className={cn("al-alert", `al-${tone}`, className)}
      role={live ? (tone === "danger" ? "alert" : "status") : undefined}
      {...rest}
    >
      <span className="al-icon">
        <Icon icon={icons[tone]} />
      </span>
      <div className="al-body">
        <p className="al-title">{title}</p>
        {children ? <div className="al-text">{children}</div> : null}
        {actions ? <div className="al-actions">{actions}</div> : null}
      </div>
      {ondismiss ? (
        <button type="button" className="al-close" aria-label={dismissLabel} onClick={ondismiss}>
          <Icon icon={Cancel01Icon} size={16} />
        </button>
      ) : null}
    </div>
  );
}
