"use client";

import type * as React from "react";
import { FileX, FolderOpen, Inbox, Plus, Search } from "lucide-react";

import { cn } from "@/lib/utils";

/* Styled empty family: 5 opt-in empty-state placeholders. Each is a centred column: an icon or illustration plus title plus description plus an optional action. Colour comes ONLY from semantic tokens (transparency via color-mix), size = the padding plus icon and text scale. Renders without props too: the title, description and a default token icon come filled in. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type Scale = {
  root: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
};

const scales: Record<StyledSize, Scale> = {
  sm: {
    root: "gap-2 p-6",
    icon: "size-6",
    badge: "size-12",
    title: "text-sm",
    description: "text-xs",
  },
  md: {
    root: "gap-3 p-8",
    icon: "size-8",
    badge: "size-16",
    title: "text-base",
    description: "text-sm",
  },
  lg: {
    root: "gap-3.5 p-10",
    icon: "size-10",
    badge: "size-20",
    title: "text-lg",
    description: "text-sm",
  },
  xl: {
    root: "gap-4 p-12",
    icon: "size-12",
    badge: "size-24",
    title: "text-xl",
    description: "text-base",
  },
};

type EmptyProps = {
  className?: string;
  size?: StyledSize;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

/* SimpleEmpty: a plain token icon + title + description, with no frame at all. */
export function SimpleEmpty({
  className,
  size = "md",
  icon,
  title = "No results found",
  description = "Try adjusting your search or filters to find what you are looking for.",
  action,
}: EmptyProps) {
  const s = scales[size];
  return (
    <div
      data-slot="styled-empty"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        s.root,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "text-muted-foreground [&_i]:leading-none [&_svg]:size-full",
          s.icon,
        )}
      >
        {icon ?? <Search />}
      </span>
      <p className={cn("font-semibold text-foreground", s.title)}>{title}</p>
      {description ? (
        <p className={cn("max-w-prose text-muted-foreground", s.description)}>
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}

/* IconEmpty: token ikon, metnin ustunde yumusak token daire rozet icinde. */
export function IconEmpty({
  className,
  size = "md",
  icon,
  title = "Your inbox is empty",
  description = "New messages will show up here as soon as they arrive.",
  action,
}: EmptyProps) {
  const s = scales[size];
  return (
    <div
      data-slot="styled-empty"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        s.root,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-full border border-border text-muted-foreground [background:color-mix(in_oklab,var(--color-foreground)_6%,transparent)]",
          s.badge,
        )}
      >
        <span className={cn("[&_i]:leading-none [&_svg]:size-full", s.icon)}>
          {icon ?? <Inbox />}
        </span>
      </span>
      <p className={cn("font-semibold text-foreground", s.title)}>{title}</p>
      {description ? (
        <p className={cn("max-w-prose text-muted-foreground", s.description)}>
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}

/* IllustrationEmpty: a geometric blob illustration built from token divs and SVG shapes above the text. When an icon prop is given it sits in the centre of the blob. */
export function IllustrationEmpty({
  className,
  size = "md",
  icon,
  title = "Nothing here yet",
  description = "This space is ready for your first item. Create one to get started.",
  action,
}: EmptyProps) {
  const s = scales[size];
  return (
    <div
      data-slot="styled-empty"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        s.root,
        className,
      )}
    >
      <div aria-hidden="true" className={cn("relative", s.badge)}>
        <div className="absolute inset-0 rounded-[42%_58%_58%_42%/48%_42%_58%_52%] [background:color-mix(in_oklab,var(--color-primary)_16%,transparent)]" />
        <div className="absolute inset-[18%] rounded-[58%_42%_45%_55%/52%_55%_45%_48%] [background:color-mix(in_oklab,var(--color-foreground)_8%,transparent)]" />
        <div className="absolute inset-0 grid place-items-center">
          <span
            className={cn(
              "text-foreground/70 [&_i]:leading-none [&_svg]:size-full",
              s.icon,
            )}
          >
            {icon ?? <FolderOpen />}
          </span>
        </div>
      </div>
      <p className={cn("font-semibold text-foreground", s.title)}>{title}</p>
      {description ? (
        <p className={cn("max-w-prose text-muted-foreground", s.description)}>
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}

/* ActionEmpty: title plus description plus a token primary action button ("Create new"). When no action prop is given the default button renders. */
export function ActionEmpty({
  className,
  size = "md",
  icon,
  title = "No projects yet",
  description = "Get started by creating your first project.",
  action,
}: EmptyProps) {
  const s = scales[size];
  return (
    <div
      data-slot="styled-empty"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        s.root,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "text-muted-foreground [&_i]:leading-none [&_svg]:size-full",
          s.icon,
        )}
      >
        {icon ?? <FileX />}
      </span>
      <p className={cn("font-semibold text-foreground", s.title)}>{title}</p>
      {description ? (
        <p className={cn("max-w-prose text-muted-foreground", s.description)}>
          {description}
        </p>
      ) : null}
      <div className="mt-2">
        {action ?? (
          <button
            type="button"
            data-slot="styled-empty-action"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-(--motion-base) ease-(--motion-ease) hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 motion-reduce:transition-none [&_i]:text-base [&_i]:leading-none [&_svg]:size-4"
          >
            <Plus />
            Create new
          </button>
        )}
      </div>
    </div>
  );
}

/* CardEmpty: the empty state sits inside a card surface with a dashed token
   border. */
export function CardEmpty({
  className,
  size = "md",
  icon,
  title = "No files uploaded",
  description = "Drag and drop files here, or use the button to add your first one.",
  action,
}: EmptyProps) {
  const s = scales[size];
  return (
    <div
      data-slot="styled-empty"
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card text-center text-card-foreground [background:color-mix(in_oklab,var(--color-foreground)_3%,var(--color-card))]",
        s.root,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "text-muted-foreground [&_i]:leading-none [&_svg]:size-full",
          s.icon,
        )}
      >
        {icon ?? <Inbox />}
      </span>
      <p className={cn("font-semibold text-foreground", s.title)}>{title}</p>
      {description ? (
        <p className={cn("max-w-prose text-muted-foreground", s.description)}>
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}

export default SimpleEmpty;
