"use client";

import type * as React from "react";
import { ChevronRight, Image as ImageIcon, Layers, Play } from "lucide-react";

import { cn } from "@/lib/utils";

/* Item media family: 5 list rows that rotate the leading image or thumbnail slot. There are NO remote image URLs - every media slot is drawn as a token-coloured surface plus an inline lucide glyph, which keeps the component entirely self-contained and lets it render without a network on the consumer's side. Colour comes ONLY from tokens; alpha via color-mix. No animation. Every export renders without props too. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const box: Record<StyledSize, string> = {
  sm: "gap-2.5 rounded-lg p-2 text-sm",
  md: "gap-3 rounded-lg p-3 text-sm",
  lg: "gap-3.5 rounded-xl p-4 text-base",
  xl: "gap-4 rounded-xl p-5 text-base",
};

/* Kare kucuk resim (1:1). */
const thumbBox: Record<StyledSize, string> = {
  sm: "size-9 rounded-md [&_svg]:size-4 [&_i]:text-base",
  md: "size-10 rounded-md [&_svg]:size-4 [&_i]:text-base",
  lg: "size-12 rounded-lg [&_svg]:size-5 [&_i]:text-lg",
  xl: "size-14 rounded-lg [&_svg]:size-6 [&_i]:text-xl",
};

/* Dikey kapak (3:4). */
const coverBox: Record<StyledSize, string> = {
  sm: "h-10 w-8 rounded-md [&_svg]:size-3.5 [&_i]:text-sm",
  md: "h-12 w-9 rounded-md [&_svg]:size-4 [&_i]:text-base",
  lg: "h-14 w-11 rounded-lg [&_svg]:size-4 [&_i]:text-base",
  xl: "h-16 w-12 rounded-lg [&_svg]:size-5 [&_i]:text-lg",
};

/* Yatay video karesi (16:9). */
const videoBox: Record<StyledSize, string> = {
  sm: "h-8 w-14 rounded-md [&_svg]:size-3.5 [&_i]:text-sm",
  md: "h-9 w-16 rounded-md [&_svg]:size-4 [&_i]:text-base",
  lg: "h-11 w-[4.75rem] rounded-lg [&_svg]:size-4 [&_i]:text-base",
  xl: "h-12 w-[5.5rem] rounded-lg [&_svg]:size-5 [&_i]:text-lg",
};

const base =
  "flex w-full items-center [&_svg]:shrink-0 [&_i]:not-italic [&_i]:leading-none";

const titleCls = "truncate font-medium text-foreground";
const descCls = "truncate text-muted-foreground text-[0.85em]";

/* The shared media surface: a token muted background + a brand-toned diagonal
   gradient over it. */
const surface =
  "relative shrink-0 overflow-hidden bg-muted text-muted-foreground";

const surfaceWash =
  "pointer-events-none absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklab,var(--color-brand)_20%,transparent)] to-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)]";

type Props = React.ComponentProps<"div"> & {
  size?: StyledSize;
  title?: React.ReactNode;
  description?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
};

/* The text block is the same in every variant. */
function Body({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <span className={titleCls}>{title}</span>
      {description ? <span className={descCls}>{description}</span> : null}
    </div>
  );
}

/* Thumb: kare token kucuk resim yuzeyi + baslik/aciklama + chevron. */
export function ThumbItem({
  className,
  size = "md",
  title = "Brand guidelines",
  description = "PDF - 2.4 MB",
  leading = <ImageIcon />,
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(base, box[size], className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          surface,
          thumbBox[size],
          "inline-flex items-center justify-center",
        )}
      >
        <span className={surfaceWash} />
        <span className="relative inline-flex">{leading}</span>
      </span>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

/* Cover: a vertical (3:4) cover surface - for book and album rows. */
export function CoverItem({
  className,
  size = "md",
  title = "Design of Everyday Things",
  description = "Don Norman",
  leading = <Layers />,
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(base, box[size], className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          surface,
          coverBox[size],
          "inline-flex items-center justify-center shadow-sm ring-1 ring-border",
        )}
      >
        <span className={surfaceWash} />
        {/* Kapak sirti: sol kenarda ince koyu serit. */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[color-mix(in_oklab,var(--color-foreground)_18%,transparent)]" />
        <span className="relative inline-flex">{leading}</span>
      </span>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

/* Video: 16:9 kare + ortada play diski + kosede sure pili. */
export function VideoItem({
  className,
  size = "md",
  title = "Getting started",
  description = "Chapter 1 of 6",
  leading,
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(base, box[size], className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          surface,
          videoBox[size],
          "inline-flex items-center justify-center",
        )}
      >
        <span className={surfaceWash} />
        <span className="relative inline-flex size-6 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--color-background)_80%,transparent)] text-foreground [&_svg]:size-3 [&_i]:text-xs">
          {leading ?? <Play />}
        </span>
        <span className="absolute bottom-0.5 right-0.5 rounded-sm bg-[color-mix(in_oklab,var(--color-foreground)_72%,transparent)] px-1 text-[10px] font-medium leading-4 text-background">
          4:12
        </span>
      </span>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

/* Badge: kucuk resmin sag ust kosesinde sayac rozeti. */
export function BadgeItem({
  className,
  size = "md",
  title = "Product shots",
  description = "Updated yesterday",
  leading = <ImageIcon />,
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(base, box[size], className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("relative shrink-0", thumbBox[size])}
      >
        <span
          className={cn(
            surface,
            "inline-flex size-full items-center justify-center rounded-[inherit]",
          )}
        >
          <span className={surfaceWash} />
          <span className="relative inline-flex">{leading}</span>
        </span>
        <span className="absolute -right-1.5 -top-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-medium leading-none text-brand-foreground ring-2 ring-background">
          12
        </span>
      </span>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

/* Stack: ust uste binmis 3 kucuk resim - albüm/koleksiyon satiri. */
export function StackItem({
  className,
  size = "md",
  title = "Q3 campaign",
  description = "24 assets",
  leading = <Layers />,
  trailing,
  ...props
}: Props) {
  return (
    <div
      data-slot="styled-item"
      className={cn(base, box[size], className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("relative shrink-0", thumbBox[size])}
      >
        {/* The two layers behind: they only hint at an edge. */}
        <span className="absolute inset-0 -translate-y-1.5 translate-x-1.5 rounded-[inherit] border border-border bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)]" />
        <span className="absolute inset-0 -translate-y-0.5 translate-x-0.5 rounded-[inherit] border border-border bg-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)]" />
        <span
          className={cn(
            surface,
            "inline-flex size-full items-center justify-center rounded-[inherit] ring-1 ring-border",
          )}
        >
          <span className={surfaceWash} />
          <span className="relative inline-flex">{leading}</span>
        </span>
      </span>
      <Body title={title} description={description} />
      {trailing ?? <ChevronRight className="size-4 text-muted-foreground" />}
    </div>
  );
}

export default ThumbItem;
