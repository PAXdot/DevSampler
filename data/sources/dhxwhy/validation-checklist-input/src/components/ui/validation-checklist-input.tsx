"use client";

import * as React from "react";

type InputProps = React.ComponentProps<"input">;

export type ValidationRule = {
  id: string;
  label: React.ReactNode;
  test: (value: string) => boolean;
};

export type ValidationChecklistInputProps = {
  rules: ValidationRule[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onAllPassed?: (value: string) => void;
  onValidityChange?: (allPassed: boolean, passed: string[]) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  type?: "text" | "password" | "email" | "url";
  name?: string;
  id?: string;
  autoComplete?: string;
  showChips?: boolean;
  successRing?: boolean;
  successLabel?: React.ReactNode;
  disabled?: boolean;
  /** Rendered inside the field on the right, e.g. a show/hide password toggle. */
  trailing?: React.ReactNode;
  className?: string;
  ref?: InputProps["ref"];
};

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(true);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function Chip({ rule, passed, reduced }: { rule: ValidationRule; passed: boolean; reduced: boolean }) {
  const chipRef = React.useRef(null as HTMLLIElement | null);
  const pathRef = React.useRef(null as SVGPathElement | null);
  const wasPassed = React.useRef(passed);
  React.useLayoutEffect(() => {
    const chip = chipRef.current;
    const path = pathRef.current;
    const became = passed && !wasPassed.current;
    wasPassed.current = passed;
    if (!chip || !path) return;
    if (!became || reduced || typeof chip.animate !== "function") { path.style.strokeDashoffset = passed ? "0" : "1"; return; }
    chip.animate([{ transform: "scale(1)" }, { transform: "scale(1.12)", offset: 0.4 }, { transform: "scale(1)" }], { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
    path.style.strokeDashoffset = "0";
    path.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 260, easing: "ease-out" });
  }, [passed]);
  return (
    <li
      ref={chipRef}
      data-rule={rule.id}
      data-passed={passed ? "true" : "false"}
      className={`inline-flex h-6 items-center gap-1 rounded-full border px-2 text-[11px] font-medium leading-none transition-colors duration-300 motion-reduce:transition-none ${passed ? "border-chart-2/50 bg-chart-2/15 text-foreground" : "border-border text-muted-foreground"}`}
    >
      <svg viewBox="0 0 12 12" className="size-3 shrink-0" aria-hidden="true">
        <circle cx="6" cy="6" r="5" className={`transition-colors duration-300 motion-reduce:transition-none ${passed ? "fill-chart-2/30" : "fill-muted-foreground/15"}`} />
        <path ref={pathRef} d="M3.3 6.3 5.2 8.1 8.8 4.2" pathLength={1} fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 1, strokeDashoffset: passed ? 0 : 1 }} className="stroke-foreground" />
      </svg>
      <span>{rule.label}</span>
      <span className="sr-only">{passed ? " met" : " not met"}</span>
    </li>
  );
}

export function ValidationChecklistInput({
  rules,
  value,
  defaultValue = "",
  onChange,
  onAllPassed,
  onValidityChange,
  label,
  description,
  placeholder,
  type = "text",
  name,
  id,
  autoComplete,
  showChips = true,
  successRing = true,
  successLabel = "All requirements met",
  disabled,
  trailing,
  className = "",
  ref,
}: ValidationChecklistInputProps) {
  const reduced = useReducedMotion();
  const generated = React.useId();
  const inputId = id ?? `${generated}-input`;
  const chipsId = `${generated}-rules`;
  const [localValue, setLocalValue] = React.useState(defaultValue);
  const current = value ?? localValue;
  const passed = rules.filter((rule) => rule.test(current)).map((rule) => rule.id);
  const allPassed = rules.length > 0 && passed.length === rules.length;
  const ringRef = React.useRef(null as HTMLSpanElement | null);
  const sweep = React.useRef(0);
  const wasAll = React.useRef(allPassed);
  const lastReported = React.useRef(null as string | null);

  React.useLayoutEffect(() => {
    const ring = ringRef.current;
    const became = allPassed && !wasAll.current;
    wasAll.current = allPassed;
    if (!ring) return;
    cancelAnimationFrame(sweep.current);
    if (!allPassed) return;
    ring.dataset.state = became ? "sweeping" : "complete";
    if (!became || reduced) { ring.style.setProperty("--sweep", "100%"); ring.dataset.state = "complete"; return; }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 520);
      const eased = 1 - (1 - t) ** 3;
      ring.style.setProperty("--sweep", t < 1 ? `${(eased * 100).toFixed(2)}%` : "100%");
      if (t < 1) sweep.current = requestAnimationFrame(tick);
      else ring.dataset.state = "complete";
    };
    sweep.current = requestAnimationFrame(tick);
  }, [allPassed]);

  React.useEffect(() => {
    const key = `${allPassed}:${passed.join(",")}`;
    if (lastReported.current === key) return;
    lastReported.current = key;
    onValidityChange?.(allPassed, passed);
    if (allPassed) onAllPassed?.(current);
  });

  React.useEffect(() => () => cancelAnimationFrame(sweep.current), []);

  const update = (next: string) => {
    if (value === undefined) setLocalValue(next);
    onChange?.(next);
  };

  return (
    <div data-slot="validation-checklist-input" data-valid={allPassed ? "true" : "false"} data-passed={passed.length} className={`w-full ${className}`}>
      {label && <label htmlFor={inputId} className="mb-1.5 block text-xs font-medium">{label}</label>}
      <div className="relative">
        <span
          ref={ringRef}
          data-ring
          data-state={allPassed ? "complete" : "idle"}
          aria-hidden="true"
          style={{ "--sweep": allPassed ? "100%" : "0%", background: "conic-gradient(from -90deg, var(--color-chart-2) 0 var(--sweep), transparent var(--sweep) 100%)", WebkitMask: "linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)", mask: "linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: 2 } as React.CSSProperties}
          className={`pointer-events-none absolute -inset-0.5 rounded-[14px] ${successRing ? "" : "hidden"}`}
        />
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={current}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-describedby={showChips ? chipsId : undefined}
          aria-invalid={current.length > 0 && !allPassed ? true : undefined}
          data-input
          onChange={(event) => update(event.target.value)}
          className={`relative h-11 w-full rounded-xl border bg-background px-3 text-sm ${trailing ? "pr-11" : ""} outline-none transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${allPassed ? "border-chart-2/60" : "border-border"}`}
        />
        {trailing && <span data-trailing className="absolute inset-y-0 right-1.5 flex items-center">{trailing}</span>}
      </div>
      {description && !allPassed && <p className="mt-1.5 text-xs text-muted-foreground">{description}</p>}
      {allPassed && <p data-success className="mt-1.5 text-xs font-medium text-chart-2">{successLabel}</p>}
      {showChips && (
        <ul id={chipsId} data-rules aria-label="Requirements" className="mt-2 flex flex-wrap gap-1.5">
          {rules.map((rule) => <Chip key={rule.id} rule={rule} passed={passed.includes(rule.id)} reduced={reduced} />)}
        </ul>
      )}
      <span className="sr-only" aria-live="polite">{allPassed ? "All requirements met" : `${passed.length} of ${rules.length} requirements met`}</span>
    </div>
  );
}

export default ValidationChecklistInput;
