/**
 * ai2 glass - floating surface treatments.
 *
 * Structure and shadow geometry modeled on the Delphi glass system
 * (build.delphi.ai/system/glass): translucent glass, solid overlay, and
 * standalone shadow tokens with inset highlight + layered depth. Colors are
 * wired to ai2 semantic tokens (cool neutral, not Delphi's warm sand) so glass
 * follows any theme in both modes.
 *
 * Compose with cn(): cn(glass.overlay, "rounded-lg px-6 py-4").
 * Pick by intent - not all elevated UI wants the same look.
 */

/** Translucent surfaces with a real backdrop blur. Reach for glass when an
 *  overlay floats over VARIED content and the content beneath should read as a
 *  hint, not a distraction. Do not stack glass on glass - it turns to mud. */
export const glass = {
  /** Default glass: light translucency (60%) + subtle inset highlight.
   *  Tooltips, dropdowns, light command bars. */
  overlay:
    "bg-background/60 supports-[backdrop-filter]:bg-background/60 backdrop-blur-[8px] " +
    "[box-shadow:0_-1px_1px_0_rgba(255,255,255,0.5)_inset,0_1px_1px_0_rgba(255,255,255,1)_inset,0_2px_4px_0_rgba(0,0,0,0.1)] " +
    "dark:[box-shadow:0_-1px_1px_0_rgba(255,255,255,0.1)_inset,0_1px_1px_0_rgba(255,255,255,0.15)_inset,0_2px_4px_0_rgba(0,0,0,0.5)]",

  /** Heavier translucency (70% light / 80% dark) + deep layered shadow.
   *  Emphasized overlays that need to feel present - dialogs, modal panels. */
  frosted:
    "bg-background/70 dark:bg-surface-2/80 backdrop-blur-[8px] " +
    "[box-shadow:0_-1px_1px_0_rgba(255,255,255,0.5)_inset,0_1px_1px_0_rgba(255,255,255,1)_inset,0_24.348px_24.348px_0_rgba(0,0,0,0.05),0_6.493px_6.493px_-3.246px_rgba(0,0,0,0.05),0_3.246px_3.246px_-1.623px_rgba(0,0,0,0.05),0_0.812px_0.812px_-0.406px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.05)] " +
    "dark:[box-shadow:0_-1px_1px_0_rgba(255,255,255,0.1)_inset,0_1px_1px_0_rgba(255,255,255,0.15)_inset,0_24.348px_24.348px_0_rgba(0,0,0,0.05),0_6.493px_6.493px_-3.246px_rgba(0,0,0,0.05),0_3.246px_3.246px_-1.623px_rgba(0,0,0,0.05),0_0.812px_0.812px_-0.406px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.05)]",

  /** Opaque surface - no glass, no blur. Use when glass would impair
   *  legibility (dense menus, long lists), the content beneath is neutral, or
   *  you need maximum performance. Pair with a real shadow. */
  solid: "bg-popover shadow-md",
} as const

/** The ai2 glass signature: a top inset highlight (light catches the upper edge)
 *  over a soft ambient drop. This is what makes a surface read as OUR glass
 *  rather than a generic backdrop-blur. Every glassDepth step carries it. */
const signature =
  "[box-shadow:0_-1px_1px_0_rgba(255,255,255,0.5)_inset,0_1px_1px_0_rgba(255,255,255,1)_inset,0_2px_4px_0_rgba(0,0,0,0.1)] " +
  "dark:[box-shadow:0_-1px_1px_0_rgba(255,255,255,0.1)_inset,0_1px_1px_0_rgba(255,255,255,0.15)_inset,0_2px_4px_0_rgba(0,0,0,0.5)]"

/**
 * DEPTH scale for decorative glass (the styled layer).
 *
 * `glass` above is INTENT-based: pick by what the surface is for (a tooltip vs a
 * modal). This is DEPTH-based: pick how far the surface floats. Both carry the
 * same signature, so a styled theme and a base overlay read as one language.
 *
 * Why this exists (2026-07-15): 22 styled glass files had each hand-rolled their
 * own blur, landing on SIX different values (4/12/16/24/40/64px) and skipping the
 * inset highlight in 8 of them. None used the canonical 8px. The variation was
 * accidental, not designed, so /docs/glass taught one language while the
 * components spoke another. AGENTS.md §4.5 already banned hand-rolled blur; this
 * scale is what it should have been derived from.
 *
 * Compose a tint on top; the step supplies the surface, the caller supplies the
 * character:
 *   cn(glassDepth.lg, "bg-[color-mix(in_oklab,var(--color-info)_12%,transparent)]")
 *
 * `md` is the same 8px as `glass.overlay` on purpose: the intent recipe and the
 * depth scale meet at the default. Do not stack glass on glass.
 *
 * MERGE CONTRACT (why there is no `supports-[backdrop-filter]:bg-*` here):
 * a step ships exactly ONE background class, so `cn(glassDepth.lg, "bg-[...]")`
 * cleanly replaces it and the caller's tint wins. The first draft mirrored
 * `glass.overlay`'s `bg-background/60 supports-[backdrop-filter]:bg-background/60`
 * pair, which is a no-op there (identical values) but became a real footgun here:
 * tailwind-merge treats the `supports-` variant as a DIFFERENT group, so it
 * survived a caller's tint and then won the cascade, silently reverting every
 * tinted surface to neutral. Found by measurement, 2026-07-15. If a
 * no-backdrop-filter fallback is ever wanted it must use a DIFFERENT, more opaque
 * value to be worth the hazard.
 *
 * The `signature` is a `[box-shadow:...]`. A caller that adds `shadow-lg` or its
 * own `[box-shadow:...]` DROPS it (same merge group) and silently ships a generic
 * blur. Express extra depth inside one combined box-shadow that keeps the inset
 * parts, or use a border. `ring-*` is NOT an escape hatch: Tailwind composes
 * rings through box-shadow too, so it collides identically.
 */
export const glassDepth = {
  /** 4px. Barely-there frost. Chips, inline badges, dense chrome. */
  sm: `bg-background/50 backdrop-blur-[4px] ${signature}`,
  /** 8px. The default, matching glass.overlay. Dropdowns, popovers, tooltips. */
  md: `bg-background/60 backdrop-blur-[8px] ${signature}`,
  /** 16px. Content beneath becomes texture, not text. Panels, sheets. */
  lg: `bg-background/70 backdrop-blur-[16px] ${signature}`,
  /** 24px. Maximum diffusion. Full-bleed overlays over busy imagery. */
  xl: `bg-background/80 backdrop-blur-[24px] ${signature}`,
} as const

export type GlassDepth = keyof typeof glassDepth

/** Elevation WITHOUT translucency - a lifted surface that keeps its solid
 *  background. Cards, sticky bars, prompt inputs. */
export const shadow = {
  /** Subtle inset highlight + light layered depth. The default for cards. */
  default:
    "bg-card " +
    "[box-shadow:0_2px_2px_0_rgba(255,255,255,1)_inset,0_10.213px_10.213px_-5.107px_rgba(0,0,0,0.03),0_5.107px_5.107px_-2.553px_rgba(0,0,0,0.03),0_2.553px_2.553px_-2px_rgba(0,0,0,0.03),0_0.638px_0.638px_-0.319px_rgba(0,0,0,0.03)] " +
    "dark:[box-shadow:0_2px_2px_0_rgba(255,255,255,0.08)_inset,0_10.213px_10.213px_-5.107px_rgba(0,0,0,0.2),0_5.107px_5.107px_-2.553px_rgba(0,0,0,0.15),0_2.553px_2.553px_-2px_rgba(0,0,0,0.1),0_0.638px_0.638px_-0.319px_rgba(0,0,0,0.05)]",

  /** Deeper layered shadow + stronger inset highlights. Reserve for the ONE
   *  primary prompt input or sticky action bar - its weight loses meaning if
   *  applied to multiple surfaces on the same page. */
  max:
    "bg-card border border-border " +
    "[box-shadow:0_12px_12px_0_rgba(0,0,0,0.09),0_17.2px_17.2px_-8.6px_rgba(0,0,0,0.03),0_8.6px_8.6px_-4.3px_rgba(0,0,0,0.03),0_4.3px_4.3px_-2.15px_rgba(0,0,0,0.03),0_1.075px_1.075px_-0.538px_rgba(0,0,0,0.03),0_-2.15px_2.15px_0_rgba(255,255,255,1)_inset,0_2.15px_2.15px_0_rgba(255,255,255,1)_inset] " +
    "dark:[box-shadow:0_31px_31px_0_rgba(0,0,0,0.06),0_17px_17px_-8px_rgba(0,0,0,0.03),0_8px_8px_-4px_rgba(0,0,0,0.03),0_4px_4px_-2px_rgba(0,0,0,0.03),0_1px_1px_-0.5px_rgba(0,0,0,0.03),0_0_0_1px_rgba(0,0,0,0.04),0_-2px_2px_0_rgba(255,255,255,0.04)_inset,0_2px_2px_0_rgba(255,255,255,0.08)_inset]",
} as const
