"use client";

import * as React from "react";

/* ---------- motion helpers (ported from sinaui's src/lib/ui/motion.ts) ---------- */

const EASE_STANDARD = "cubic-bezier(0.22, 1, 0.36, 1)";

function reducedMotion() {
  return (
    typeof matchMedia !== "undefined" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* ---------- context (ported from sinaui's src/lib/ui/radio/context.ts) ---------- */

interface RadioGroupContextValue {
  name: string;
  value: string | undefined;
  disabled: boolean;
  required: boolean;
  /** Set when the group shows an error; the message itself is tied to the group, where ARIA reads it. */
  invalid: boolean;
  select: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null,
);

function useRadioGroupContext(component: string) {
  const ctx = React.useContext(RadioGroupContext);
  if (!ctx)
    throw new Error(`<${component}> must be rendered inside a <RadioGroup>.`);
  return ctx;
}

/* ---------- RadioGroupItem (ported from src/lib/ui/radio/Radio.svelte) ---------- */

export interface RadioGroupItemProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "name" | "checked" | "children"
> {
  value: string;
  children: React.ReactNode;
  hint?: string;
  id?: string;
}

export function RadioGroupItem({
  value,
  children,
  hint,
  id,
  className,
  disabled,
  onPointerDown,
  onChange,
  ...rest
}: RadioGroupItemProps) {
  const group = useRadioGroupContext("RadioGroupItem");
  const uid = React.useId();
  const resolvedId = id ?? uid;
  const haloRef = React.useRef<HTMLSpanElement>(null);

  // Press feedback: a soft halo swells behind the ring and fades. Pointer only, never keyboard.
  function press() {
    if (group.disabled || disabled) return;
    if (reducedMotion()) return;
    haloRef.current?.animate(
      [
        { opacity: 0, transform: "scale(0.5)" },
        { opacity: 1, transform: "scale(1)", offset: 0.35 },
        { opacity: 0, transform: "scale(1.08)" },
      ],
      { duration: 600, easing: EASE_STANDARD },
    );
  }

  return (
    <div className={["radio", className].filter(Boolean).join(" ")}>
      <span className="control">
        <span className="halo" aria-hidden="true" ref={haloRef} />
        <input
          type="radio"
          id={resolvedId}
          name={group.name}
          value={value}
          checked={group.value === value}
          disabled={group.disabled || disabled}
          required={group.required}
          data-invalid={group.invalid || undefined}
          aria-describedby={hint ? `${resolvedId}-hint` : undefined}
          {...rest}
          onPointerDown={(e) => {
            press();
            onPointerDown?.(e);
          }}
          onChange={(e) => {
            group.select(value);
            onChange?.(e);
          }}
        />
        {/* Not named "ring": Tailwind generates a .ring utility for any file mentioning it. */}
        <span className="circle" aria-hidden="true">
          <span className="well">
            <span className="dot" />
          </span>
        </span>
      </span>
      <span className="text">
        <label htmlFor={resolvedId}>{children}</label>
        {hint && (
          <span id={`${resolvedId}-hint`} className="hint">
            {hint}
          </span>
        )}
      </span>
    </div>
  );
}

/* ---------- RadioGroup (ported from src/lib/ui/radio/RadioGroup.svelte) ---------- */

export interface RadioGroupProps extends Omit<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  "children" | "onChange"
> {
  /** The question the options answer; every radio group needs one. */
  legend: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Form field name. Defaults to a unique id so separate groups never merge. */
  name?: string;
  disabled?: boolean;
  /** One choice must be made before the form sends. */
  required?: boolean;
  /** Help for the whole group, read out with the question. */
  hint?: string;
  /** Error for the whole group ("Choose a reading room"). */
  error?: string;
  orientation?: "vertical" | "horizontal";
  children: React.ReactNode;
}

export default function RadioGroup({
  legend,
  value: valueProp,
  defaultValue,
  onValueChange,
  name,
  disabled = false,
  required = false,
  hint,
  error,
  orientation = "vertical",
  children,
  className,
  onKeyDownCapture,
  onPointerDownCapture,
  ...rest
}: RadioGroupProps) {
  const uid = React.useId();
  const resolvedName = name ?? uid;

  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue,
  );
  const value = valueProp !== undefined ? valueProp : internalValue;

  const fieldsetRef = React.useRef<HTMLFieldSetElement>(null);
  const dropRef = React.useRef<HTMLSpanElement>(null);
  const pouringRef = React.useRef<Animation[]>([]);

  // Last input inside the group; label clicks count as pointer, arrow keys and Space as keyboard.
  const viaKeyboardRef = React.useRef(false);

  /**
   * The dot moves like a drop of liquid, from a small physics simulation run once per choice: the head
   * is a spring pulled to the new ring and carries its momentum; each trailing droplet is a spring
   * pulled to the one ahead (surface tension), so the tail lingers, peels away and catches up. A gooey
   * filter (blur, then a sharp alpha cut) melts the droplets into one body, which thins as it stretches
   * and squashes on impact in proportion to its speed. The frames play back as transforms only.
   */
  function pour(from: string, to: string) {
    const fieldset = fieldsetRef.current;
    const drop = dropRef.current;
    if (!fieldset || !drop) return;
    const dotOf = (x: string) =>
      fieldset
        .querySelector(`input[type="radio"][value="${CSS.escape(x)}"]`)
        ?.parentElement?.querySelector<HTMLElement>(".dot");
    const a = dotOf(from);
    const b = dotOf(to);
    if (!a || !b) return;
    for (const an of pouringRef.current) an.cancel();
    for (const d of fieldset.querySelectorAll<HTMLElement>(".dot"))
      d.style.opacity = "";

    const box = drop.getBoundingClientRect();
    const center = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - box.left,
        y: r.top + r.height / 2 - box.top,
      };
    };
    const p = center(a);
    const q = center(b);
    const d = b.offsetWidth;
    const length = Math.hypot(q.x - p.x, q.y - p.y) || 1;
    const [ux, uy] = [(q.x - p.x) / length, (q.y - p.y) / length];

    // 1D along the path: position in px from the old ring, and velocity, per droplet.
    const sizes = [1, 0.94, 0.88, 0.82, 0.76, 0.7];
    const pos = sizes.map(() => 0);
    const vel = sizes.map(() => 0);
    const maxGap = 0.45 * d; // further apart than this and the liquid would break into beads
    const step = 1 / 240;
    const frames = sizes.map((): Keyframe[] => []);
    const body: Keyframe[] = [];
    let impact = -1; // seconds, when the head first reaches the new ring
    let impactSpeed = 0;
    for (let t = 0, n = 0; t < 0.9; t += step, n++) {
      // Head: underdamped spring to the target (a touch of overshoot). Tail: stiffer springs to the
      // droplet ahead, so it follows closely once it has peeled away.
      for (let i = 0; i < sizes.length; i++) {
        const [goal, k, c] =
          i === 0 ? [length, 1100, 54] : [pos[i - 1], 3600, 100];
        vel[i] += (k * (goal - pos[i]) - c * vel[i]) * step;
        pos[i] += vel[i] * step;
        if (i > 0) pos[i] = Math.max(pos[i], pos[i - 1] - maxGap);
      }
      if (impact < 0 && pos[0] >= length) [impact, impactSpeed] = [t, vel[0]];
      if (n % 4) continue; // keep every 4th step: 60 frames a second

      // Stretch thins the body (the liquid keeps its volume); impact squashes it across the path
      // and it wobbles back, harder after a faster fall.
      const stretch = (pos[0] - pos[sizes.length - 1]) / d;
      const thin = 1 - 0.14 * Math.min(1, stretch / 2);
      const since = impact < 0 ? -1 : t - impact;
      const squash =
        since < 0
          ? 0
          : Math.min(0.22, impactSpeed / 4200) *
            Math.exp(-since / 0.06) *
            Math.cos((2 * Math.PI * since) / 0.12);
      sizes.forEach((size, i) => {
        frames[i].push({
          transform: `translate(${p.x + ux * pos[i] - d / 2}px, ${p.y + uy * pos[i] - d / 2}px) scale(${size * thin})`,
          opacity: 1,
        });
      });
      // Squash along the path, bulge across it, around the landing point.
      const [along, across] = [1 - squash, 1 + squash * 0.8];
      const [sx, sy] =
        Math.abs(ux) > Math.abs(uy) ? [along, across] : [across, along];
      body.push({ transform: `scale(${sx}, ${sy})` });
      const settled =
        t > 0.12 &&
        vel.every((v) => Math.abs(v) < 4) &&
        pos.every((x) => Math.abs(x - length) < 0.3);
      if (settled) break;
    }

    drop.style.setProperty("--d", `${d}px`);
    drop.style.transformOrigin = `${q.x}px ${q.y}px`;
    b.style.opacity = "0";
    const timing = {
      duration: (frames[0].length - 1) * (1000 / 60),
      easing: "linear",
    };
    pouringRef.current = [
      drop.animate(body, timing),
      ...[...drop.children].map((el, n) =>
        (el as HTMLElement).animate(frames[n], timing),
      ),
    ];
    pouringRef.current[0].finished.then(
      () => (b.style.opacity = ""),
      () => {},
    );
  }

  function select(v: string) {
    // Pointer choices pour the dot across; keyboard ones snap, as the tabs do.
    const from = value;
    if (
      !viaKeyboardRef.current &&
      from !== undefined &&
      from !== v &&
      !reducedMotion()
    )
      pour(from, v);
    if (valueProp === undefined) setInternalValue(v);
    onValueChange?.(v);
  }

  const contextValue: RadioGroupContextValue = {
    name: resolvedName,
    value,
    disabled,
    required,
    invalid: !!error,
    select,
  };

  return (
    // fieldset + legend: the group is announced with its question, and native radios supply arrow keys.
    <fieldset
      ref={fieldsetRef}
      className={["group", orientation, className].filter(Boolean).join(" ")}
      disabled={disabled}
      aria-describedby={
        [hint && `${uid}-hint`, error && `${uid}-error`]
          .filter(Boolean)
          .join(" ") || undefined
      }
      {...rest}
      onKeyDownCapture={(e) => {
        viaKeyboardRef.current = true;
        onKeyDownCapture?.(e);
      }}
      onPointerDownCapture={(e) => {
        viaKeyboardRef.current = false;
        onPointerDownCapture?.(e);
      }}
    >
      <legend>{legend}</legend>
      {hint && <p className="hint">{hint}</p>}
      <div className="options">
        <RadioGroupContext.Provider value={contextValue}>
          {children}
        </RadioGroupContext.Provider>
        {/* Gooey filter: the blur melts the droplets together, the alpha cut gives the blob a crisp edge. */}
        <span
          className="drop"
          aria-hidden="true"
          style={{ filter: `url(#${uid}-goo)` }}
          ref={dropRef}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <svg className="goo" aria-hidden="true">
          <filter id={`${uid}-goo`}>
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" />
          </filter>
        </svg>
      </div>
      {error && <p className="error">{error}</p>}
    </fieldset>
  );
}
