"use client";

import * as React from "react";
import { AtSign, Globe, Hash, Lock, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { glassDepth } from "@/components/ui/input-group-glass-utils/glass";

/* Glass input group family: 5 frosted-glass fields. Every variant shares the same
   anatomy (an icon addon + a real <input>); the difference is ONLY on the surface.
   The glass surface comes from the glassDepth scale in @ai2/glass (NO hand-made
   backdrop-blur, AGENTS.md 4.5): the step gives the surface (blur + translucency +
   the ai2 inset signature) and the variant gives the character - frost (neutral),
   tint (info toned), smoke (a foreground scrim), crystal (clear + a bright edge),
   depth (a gradient layer). The glass sits on the ROOT and the <input> stays
   transparent. Color comes ONLY from tokens; alpha via color-mix. No motion, the
   transitions ride on the token CSS transitions. Every field has an accessible
   label.

   TRAP: glassDepth carries a [box-shadow:...]; because cn() is tailwind-merge, a
   second shadow-* silently deletes the signature. Extra depth comes from the
   border/gradient. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const height: Record<StyledSize, string> = {
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-base",
  xl: "h-12 text-base",
};

/* Focus through OUTLINE, NOT ring: because the glass sits on the ROOT, the glassDepth signature (the arbitrary property `[box-shadow:...]`) was overriding Tailwind's ring chain and the ring was never drawn (measured, 2026-07-15). outline is a separate property and does not collide. */
const rootBase =
  "group inline-flex w-64 max-w-full items-center overflow-hidden rounded-lg border transition-colors duration-(--motion-base) focus-within:border-primary focus-within:outline-[3px] focus-within:outline-offset-0 focus-within:outline-ring/50 [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const fieldBase =
  "h-full w-full min-w-0 bg-transparent px-2 text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40";

const iconBase =
  "ml-3 shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary";

type Props = Omit<React.ComponentProps<"input">, "size"> & {
  size?: StyledSize;
};

/* Shared shell: surfaceClassName carries each variant's glass technique. */
function GlassShell({
  className,
  size = "md",
  surfaceClassName,
  icon,
  label,
  trailing,
  ...props
}: Props & {
  surfaceClassName: string;
  icon: React.ReactNode;
  label: string;
  trailing?: React.ReactNode;
}) {
  const id = React.useId();
  return (
    <div
      data-slot="styled-input-group"
      className={cn(rootBase, height[size], surfaceClassName, className)}
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <span className={iconBase}>{icon}</span>
      <input id={id} {...props} className={fieldBase} />
      {trailing ? (
        <span className="mr-3 shrink-0 text-muted-foreground">{trailing}</span>
      ) : null}
    </div>
  );
}

/* Frost: classic frosted glass. sm (4px) -> it was already looking for the lightest blur (blur-sm); the shallowest step on the scale is the exact equivalent. Character: a neutral border. */
export function FrostGroup(props: Props) {
  return (
    <GlassShell
      {...props}
      label="Frosted field"
      icon={<Globe />}
      surfaceClassName={cn(
        glassDepth.sm,
        "border-[color-mix(in_oklab,var(--color-foreground)_12%,transparent)]",
      )}
    />
  );
}

/* Tint: info-toned translucent glass. md (8px) -> the default step; the hue carries the character. The tint fill takes over the step's bg (the supports-[] variant is overridden too), so it owns the translucency itself. */
export function TintGroup(props: Props) {
  return (
    <GlassShell
      {...props}
      label="Tinted field"
      icon={<Sparkles />}
      surfaceClassName={cn(
        glassDepth.md,
        "border-[color-mix(in_oklab,var(--color-info)_28%,transparent)] bg-[color-mix(in_oklab,var(--color-info)_10%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-info)_10%,transparent)]",
      )}
    />
  );
}

/* Smoke: dark foreground glass. lg (16px) -> "what is behind becomes texture, not text". Character: a foreground scrim. */
export function SmokeGroup(props: Props) {
  return (
    <GlassShell
      {...props}
      label="Smoked field"
      icon={<Lock />}
      surfaceClassName={cn(
        glassDepth.lg,
        "border-[color-mix(in_oklab,var(--color-foreground)_18%,transparent)] bg-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)]",
      )}
    />
  );
}

/* Crystal: clear glass plus a bright edge. md (8px) -> the same step as Tint with a different character: a colourless low background fill plus a bright border. The hand-written bright-edge inset shadow was REMOVED - the glassDepth signature's top inset highlight is exactly for that job, and a second [box-shadow:] would erase the signature. */
export function CrystalGroup(props: Props) {
  return (
    <GlassShell
      {...props}
      label="Crystal field"
      icon={<AtSign />}
      trailing={<Sparkles />}
      surfaceClassName={cn(
        glassDepth.md,
        "border-[color-mix(in_oklab,var(--color-background)_60%,transparent)] bg-[color-mix(in_oklab,var(--color-background)_40%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-background)_40%,transparent)]",
      )}
    />
  );
}

/* Depth: gradient glass where the area lifts off the page. xl (24px) -> the "detached layer" feel the old shadow-lg plus blur-md was after now comes from the maximum diffusion step; shadow-lg was REMOVED because it would erase the signature. Because the gradient carries the character, the step's bg fill is deliberately zeroed - the translucency is the gradient's responsibility. */
export function DepthGroup(props: Props) {
  return (
    <GlassShell
      {...props}
      label="Depth field"
      icon={<Hash />}
      surfaceClassName={cn(
        glassDepth.xl,
        "border-[color-mix(in_oklab,var(--color-foreground)_14%,transparent)] bg-transparent supports-[backdrop-filter]:bg-transparent bg-gradient-to-b from-[color-mix(in_oklab,var(--color-background)_70%,transparent)] to-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)]",
      )}
    />
  );
}

export default FrostGroup;
