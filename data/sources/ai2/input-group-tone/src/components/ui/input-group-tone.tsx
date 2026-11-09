"use client";

import * as React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  CircleSlash,
  Info,
  OctagonAlert,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* Tone input group family: 5 semantically toned fields. The anatomy is the same (a state icon plus a real <input> plus a helper-text chip), and the difference is ONLY the semantic colour: info, success, warning, danger, muted. Every root carries data-tone. The danger variant uses the ai2 standard aria-invalid appearance (NOT destructive). Colour comes ONLY from tokens; alpha via color-mix. No motion. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const height: Record<StyledSize, string> = {
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-base",
  xl: "h-12 text-base",
};

const rootBase =
  "group inline-flex w-64 max-w-full items-center overflow-hidden rounded-lg border bg-transparent transition-colors duration-(--motion-base) focus-within:ring-[3px] [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const fieldBase =
  "h-full w-full min-w-0 bg-transparent px-2 text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50";

type Props = Omit<React.ComponentProps<"input">, "size"> & {
  size?: StyledSize;
};

/* Shared shell: toneClassName carries the border, ring and ground tone, the icon carries the state. */
function ToneShell({
  className,
  size = "md",
  tone,
  toneClassName,
  iconClassName,
  icon,
  label,
  hint,
  invalid,
  ...props
}: Props & {
  tone: string;
  toneClassName: string;
  iconClassName: string;
  icon: React.ReactNode;
  label: string;
  hint: string;
  invalid?: boolean;
}) {
  const id = React.useId();
  return (
    <div
      data-slot="styled-input-group"
      data-tone={tone}
      className={cn(rootBase, height[size], toneClassName, className)}
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <span className={cn("ml-3 shrink-0", iconClassName)}>{icon}</span>
      <input
        id={id}
        aria-invalid={invalid ? true : undefined}
        {...props}
        className={fieldBase}
      />
      <span className="mr-3 shrink-0 select-none text-xs text-muted-foreground">
        {hint}
      </span>
    </div>
  );
}

/* Info: an informational tone, an info edge over a neutral field. */
export function InfoGroup(props: Props) {
  return (
    <ToneShell
      {...props}
      tone="info"
      label="Info field"
      hint="Info"
      icon={<Info />}
      iconClassName="text-info"
      toneClassName="border-info bg-[color-mix(in_oklab,var(--color-info)_6%,transparent)] focus-within:border-info focus-within:ring-info/20 dark:focus-within:ring-info/40"
    />
  );
}

/* Success: dogrulanmis alan gorunumu. */
export function SuccessGroup(props: Props) {
  return (
    <ToneShell
      {...props}
      tone="success"
      label="Success field"
      hint="Valid"
      icon={<CheckCircle2 />}
      iconClassName="text-success"
      toneClassName="border-success bg-[color-mix(in_oklab,var(--color-success)_6%,transparent)] focus-within:border-success focus-within:ring-success/20 dark:focus-within:ring-success/40"
    />
  );
}

/* Warning: dikkat isteyen ama bloklamayan alan. */
export function WarningGroup(props: Props) {
  return (
    <ToneShell
      {...props}
      tone="warning"
      label="Warning field"
      hint="Check"
      icon={<AlertTriangle />}
      iconClassName="text-warning"
      toneClassName="border-warning bg-[color-mix(in_oklab,var(--color-warning)_6%,transparent)] focus-within:border-warning focus-within:ring-warning/20 dark:focus-within:ring-warning/40"
    />
  );
}

/* Danger: the ai2 invalid standard (danger tokens, not destructive). */
export function DangerGroup(props: Props) {
  return (
    <ToneShell
      {...props}
      tone="danger"
      label="Danger field"
      hint="Error"
      invalid
      icon={<OctagonAlert />}
      iconClassName="text-danger"
      toneClassName="border-danger bg-[color-mix(in_oklab,var(--color-danger)_6%,transparent)] focus-within:border-danger focus-within:ring-danger/20 dark:focus-within:ring-danger/40 has-[[aria-invalid=true]]:border-danger has-[[aria-invalid=true]]:ring-danger/20 dark:has-[[aria-invalid=true]]:ring-danger/40"
    />
  );
}

/* Muted: sessiz/pasif ton, dikkat cekmeyen alan. */
export function MutedGroup(props: Props) {
  return (
    <ToneShell
      {...props}
      tone="neutral"
      label="Muted field"
      hint="Optional"
      icon={<CircleSlash />}
      iconClassName="text-muted-foreground"
      toneClassName="border-field-border bg-surface-2 focus-within:border-primary focus-within:ring-ring/50"
    />
  );
}

export default InfoGroup;
