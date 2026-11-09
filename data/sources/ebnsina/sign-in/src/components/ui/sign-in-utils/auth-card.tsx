"use client";

import { useId } from "react";
import type { ReactNode } from "react";
import Button from "./button";
import Icon from "./icon";
import Separator from "./separator";
import { cn } from "@/lib/utils";

/** "Continue with …" sign-in, e.g. { id: 'google', label: 'Google', icon: GoogleIcon }. */
export type Provider = { id: string; label: string; icon?: Parameters<typeof Icon>[0]["icon"] };

interface AuthCardProps {
  title: string;
  description?: ReactNode;
  providers?: Provider[];
  onprovider?: (id: string) => void;
  /** While a provider or the form is working, the provider buttons wait. */
  busy?: boolean;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

// The card every auth block sits in: heading, optional provider buttons, the form, a footer line.
export default function AuthCard({
  title,
  description,
  providers = [],
  onprovider,
  busy = false,
  children,
  footer,
  className,
}: AuthCardProps) {
  const id = useId();
  return (
    <section className={cn("ac-auth", className)} aria-labelledby={`${id}-title`}>
      <header>
        <h2 id={`${id}-title`}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </header>

      {providers.length ? (
        <>
          <div className="ac-providers">
            {providers.map((p) => (
              <Button key={p.id} variant="secondary" disabled={busy} onClick={() => onprovider?.(p.id)}>
                {p.icon ? <Icon icon={p.icon} size={18} /> : null}
                Continue with {p.label}
              </Button>
            ))}
          </div>
          <Separator>or</Separator>
        </>
      ) : null}

      {children}

      {footer ? <p className="ac-footer">{footer}</p> : null}
    </section>
  );
}
