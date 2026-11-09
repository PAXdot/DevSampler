"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { glassDepth } from "@/components/ui/input-otp-glass-utils/glass";

/* Glass OTP family: 5 one-time-code inputs with frosted-glass cells (frost, tint,
   smoke, crystal, depth). The difference is ONLY on the cell surface. The glass
   surface comes from the glassDepth scale in @ai2/glass (NO hand-made
   backdrop-blur, AGENTS.md 4.5): the step gives the surface (blur + translucency +
   the ai2 inset signature) and the variant gives the character (tint, border,
   corner radius).

   STRUCTURAL NOTE: unlike the other glass form files in this family there is no
   wrapper here - the cell ITSELF is the input, so the glass sits directly on the
   control. That means the signature and the focus ring meet on the same element;
   since both are box-shadows, it was verified by measurement that the ring stays
   visible on focus.

   Every cell is a real <input maxLength=1 inputMode=numeric>; typing a digit moves
   focus forward, Backspace clears and moves back, and pasting fills every cell.
   Color comes ONLY from tokens, via alpha color-mix. No animation. Self-sufficient:
   NO input-otp package and NO radix.

   TRAP: cn() is tailwind-merge; any shadow-* coming after the signature silently
   deletes it. That is why the `filled` state expresses its weight with a border
   rather than a shadow. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type OtpProps = {
  className?: string;
  size?: StyledSize;
  length?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
};

const cellSize: Record<StyledSize, string> = {
  sm: "size-8 text-sm",
  md: "size-10 text-base",
  lg: "size-12 text-lg",
  xl: "size-14 text-xl",
};

/* Focus uses OUTLINE, NOT a ring. In this file the glass sits directly on the cell
   (the input), so the conflict is at its sharpest here: the glassDepth signature
   writes box-shadow directly as the arbitrary property `[box-shadow:...]` and was
   overriding Tailwind's --tw-ring-shadow chain entirely; ring-[3px] was drawing
   nothing at all on a glass cell (measured, 2026-07-15). Since outline is a
   separate CSS property it does not collide with the signature, and it follows the
   rounded corner radius. */
const cellBase =
  "bg-transparent text-center font-medium tabular-nums text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-ring/50 disabled:cursor-not-allowed disabled:opacity-50";

const rootBase = "inline-flex items-center gap-2";

/* Kontrollu/kontrolsuz OTP durumu + ileri/geri odak, yapistirma. */
function useOtpCode(
  length: number,
  {
    value,
    defaultValue,
    onValueChange,
  }: Pick<OtpProps, "value" | "defaultValue" | "onValueChange">,
) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<string>(() =>
    (defaultValue ?? "").slice(0, length),
  );
  const current = (isControlled ? value : internal) ?? "";

  const chars = React.useMemo(() => {
    const arr: string[] = Array(length).fill("");
    for (let i = 0; i < length; i++) arr[i] = current[i] ?? "";
    return arr;
  }, [current, length]);

  const refs = React.useRef<Array<HTMLInputElement | null>>([]);

  const commit = (next: string) => {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  const setAt = (i: number, raw: string) => {
    const ch = raw.slice(-1);
    const arr = [...chars];
    arr[i] = ch;
    commit(arr.join(""));
    if (ch && i < length - 1) refs.current[i + 1]?.focus();
  };

  const onKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      const arr = [...chars];
      if (chars[i]) {
        arr[i] = "";
        commit(arr.join(""));
      } else if (i > 0) {
        arr[i - 1] = "";
        commit(arr.join(""));
        refs.current[i - 1]?.focus();
      }
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < length - 1) {
      refs.current[i + 1]?.focus();
    }
  };

  const onPaste = (i: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\s+/g, "");
    if (!text) return;
    const arr = [...chars];
    for (let k = 0; k < text.length && i + k < length; k++)
      arr[i + k] = text[k];
    commit(arr.join(""));
    const last = Math.min(i + text.length, length - 1);
    refs.current[last]?.focus();
  };

  return { chars, refs, setAt, onKey, onPaste };
}

type Controller = ReturnType<typeof useOtpCode>;

function cellHandlers(ctl: Controller, i: number) {
  return {
    ref: (el: HTMLInputElement | null) => {
      ctl.refs.current[i] = el;
    },
    value: ctl.chars[i],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      ctl.setAt(i, e.target.value),
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => ctl.onKey(i, e),
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => ctl.onPaste(i, e),
    inputMode: "numeric" as const,
    autoComplete: i === 0 ? ("one-time-code" as const) : ("off" as const),
    maxLength: 1,
    "aria-label": `Digit ${i + 1}`,
  };
}

/* Shared shell: the only difference is the glass surface classes. */
function GlassOtp({
  surface,
  filled,
  className,
  size = "md",
  length = 6,
  value,
  defaultValue,
  onValueChange,
}: OtpProps & { surface: string; filled: string }) {
  const ctl = useOtpCode(length, { value, defaultValue, onValueChange });
  return (
    <div
      data-slot="styled-input-otp"
      role="group"
      aria-label="Verification code"
      className={cn(rootBase, className)}
    >
      {ctl.chars.map((ch, i) => (
        <input
          key={i}
          {...cellHandlers(ctl, i)}
          className={cn(cellBase, cellSize[size], surface, ch ? filled : null)}
        />
      ))}
    </div>
  );
}

/* Frost: classic frosted glass. sm (4px) -> the shallowest step in the family; because the cell is small the lightest blur is the baseline here too. Character: a neutral border. */
export function FrostOtp(props: OtpProps) {
  return (
    <GlassOtp
      surface={cn(
        glassDepth.sm,
        "rounded-md border border-[color-mix(in_oklab,var(--color-foreground)_12%,transparent)] focus-visible:border-ring",
      )}
      filled="border-[color-mix(in_oklab,var(--color-foreground)_28%,transparent)]"
      {...props}
    />
  );
}

/* Tint: info-toned translucent glass. md (8px) -> the default step; the hue carries the character. The tint fill takes over the step's bg (the supports-[] variant is overridden too). In the focus and filled states primary is CORRECT: primary is a state role, not a decorative tint (the decorative hue comes from info). */
export function TintOtp(props: OtpProps) {
  return (
    <GlassOtp
      surface={cn(
        glassDepth.md,
        "rounded-md border border-[color-mix(in_oklab,var(--color-info)_22%,transparent)] bg-[color-mix(in_oklab,var(--color-info)_10%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-info)_10%,transparent)] focus-visible:border-primary focus-visible:outline-primary/50",
      )}
      filled="border-primary bg-[color-mix(in_oklab,var(--color-info)_18%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-info)_18%,transparent)]"
      {...props}
    />
  );
}

/* Smoke: dark, smoky glass. lg (16px) -> the strong foreground scrim's intent of "what is behind becomes texture" is exactly the description of the lg step. */
export function SmokeOtp(props: OtpProps) {
  return (
    <GlassOtp
      surface={cn(
        glassDepth.lg,
        "rounded-md border border-[color-mix(in_oklab,var(--color-foreground)_18%,transparent)] bg-[color-mix(in_oklab,var(--color-foreground)_14%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-foreground)_14%,transparent)] focus-visible:border-ring",
      )}
      filled="border-[color-mix(in_oklab,var(--color-foreground)_38%,transparent)] bg-[color-mix(in_oklab,var(--color-foreground)_22%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-foreground)_22%,transparent)]"
      {...props}
    />
  );
}

/* Crystal: clear glass with a sharp edge. md (8px) -> the same step as Tint with a different character: a colourless, very low background fill plus a pronounced border. The hand-written bright-edge inset shadow was REMOVED - the glassDepth signature's top inset highlight is exactly for that job, and a second [box-shadow:] would erase it. */
export function CrystalOtp(props: OtpProps) {
  return (
    <GlassOtp
      surface={cn(
        glassDepth.md,
        "rounded-lg border border-[color-mix(in_oklab,var(--color-foreground)_20%,transparent)] bg-[color-mix(in_oklab,var(--color-background)_25%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-background)_25%,transparent)] focus-visible:border-ring",
      )}
      filled="border-[color-mix(in_oklab,var(--color-foreground)_40%,transparent)]"
      {...props}
    />
  );
}

/* Depth: layered glass. xl (24px) -> the "separation from the surface" that the old
   shadow-lg + blur-xl was after now comes from the maximum diffusion step. The
   shadow-lg and the shadow-xl on filled were REMOVED: both would have deleted the
   signature. The filled cell takes its weight from a primary border instead
   (primary = the role of the active state). */
export function DepthOtp(props: OtpProps) {
  return (
    <GlassOtp
      surface={cn(
        glassDepth.xl,
        "rounded-xl border border-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)] focus-visible:border-ring",
      )}
      filled="border-primary"
      {...props}
    />
  );
}

export default FrostOtp;
