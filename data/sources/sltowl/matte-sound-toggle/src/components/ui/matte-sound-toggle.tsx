"use client";

import { useId, useRef, useState, useEffect } from "react";

export interface MatteSoundToggleProps {
  /** Initial checked (sound on) state. */
  defaultChecked?: boolean;
  /** Called with the new checked state whenever the toggle changes. */
  onChange?: (checked: boolean) => void;
  /** Title copy shown next to the switch. */
  title?: string;
  /** Status copy shown when sound is on. */
  onLabel?: string;
  /** Status copy shown when sound is off. */
  offLabel?: string;
  disabled?: boolean;
  className?: string;
}

export default function MatteSoundToggle({
  defaultChecked = true,
  onChange,
  title = "Interface sounds",
  onLabel = "Playing",
  offLabel = "Muted",
  disabled = false,
  className = "",
}: MatteSoundToggleProps) {
  const id = useId();
  const [checked, setChecked] = useState(defaultChecked);
  const emblemRef = useRef<HTMLSpanElement>(null);
  const motionRef = useRef<MediaQueryList | null>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    motionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)");
  }, []);

  function playFeedback() {
    if (motionRef.current?.matches) return;
    animationRef.current?.cancel();
    const target = emblemRef.current;
    if (!target?.animate) return;
    animationRef.current = target.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(.96)", offset: 0.36 },
        { transform: "scale(1)" },
      ],
      { duration: 420, easing: "cubic-bezier(.4,0,.2,1)" },
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.checked;
    setChecked(next);
    playFeedback();
    onChange?.(next);
  }

  const inputId = `sound-toggle-${id}`;

  return (
    <div
      className={`sl-toggle sl-toggle--sound ${className}`}
      data-checked={String(checked)}
    >
      <span className="sl-toggle__emblem" aria-hidden="true" ref={emblemRef}>
        <svg viewBox="0 0 32 32" fill="none">
          <path className="sl-sound__speaker" d="M6 13h5l6-5v16l-6-5H6v-6Z" />
          <path
            className="sl-sound__wave sl-sound__wave--one"
            d="M21 12.5a5 5 0 0 1 0 7"
          />
          <path
            className="sl-sound__wave sl-sound__wave--two"
            d="M24 9a10 10 0 0 1 0 14"
          />
          <path className="sl-sound__mute" d="m21 13 6 6M27 13l-6 6" />
        </svg>
      </span>
      <label className="sl-toggle__label" htmlFor={inputId}>
        <span className="sl-toggle__copy">
          <span className="sl-toggle__title">{title}</span>
          <span className="sl-toggle__status" aria-live="polite">
            {checked ? onLabel : offLabel}
          </span>
        </span>
      </label>
      <span className="sl-toggle__switch">
        <input
          className="sl-toggle__input"
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span className="sl-toggle__track" aria-hidden="true">
          <span className="sl-toggle__thumb"></span>
        </span>
      </span>
    </div>
  );
}
