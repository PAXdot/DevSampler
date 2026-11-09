"use client";

import { useId, useRef, useState } from "react";
import type { FocusEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import { Cancel01Icon, Tick02Icon, ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons";
import Icon from "./icon";
import Input from "./input";
import InputButton from "./input-button";
import { cn } from "@/lib/utils";

interface PasswordRule {
  label: string;
  test: (value: string) => boolean;
}

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "type" | "children"> {
  label: string;
  value?: string;
  defaultValue?: string;
  /** Choosing a new password: asks password managers to suggest one, and shows its strength. */
  isNew?: boolean;
  hint?: string;
  error?: string;
  /** Requirements shown as a checklist that ticks off as they're met. */
  rules?: PasswordRule[];
  onValueChange?: (value: string) => void;
}

export default function PasswordInput({
  label,
  value: controlledValue,
  defaultValue = "",
  isNew = false,
  hint,
  error,
  rules,
  onValueChange,
  onChange,
  onKeyDown,
  onKeyUp,
  onBlur,
  ...rest
}: PasswordInputProps) {
  const id = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;
  const inputRef = useRef<HTMLInputElement>(null);
  const [shown, setShown] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  const met = rules?.map((r) => r.test(value)) ?? [];
  const allMet = !!rules?.length && met.every(Boolean);

  // Shows or hides the password, keeping the caret where it was.
  function toggle() {
    const from = inputRef.current?.selectionStart ?? null;
    const to = inputRef.current?.selectionEnd ?? null;
    setShown((s) => !s);
    requestAnimationFrame(() => {
      if (inputRef.current && from != null && to != null) inputRef.current.setSelectionRange(from, to);
    });
  }

  // A length-and-variety guess, not a crack-time estimate.
  const strength = (() => {
    if (value.length < 8) return 0;
    const kinds = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((r) => r.test(value)).length;
    return Math.min(
      4,
      1 + (value.length >= 12 ? 1 : 0) + (kinds >= 3 ? 1 : 0) + (kinds === 4 ? 1 : 0)
    );
  })();
  const words = ["Too short", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="pw-wrap">
      <Input
        label={label}
        value={value}
        ref={inputRef}
        type={shown ? "text" : "password"}
        autoComplete={isNew ? "new-password" : "current-password"}
        autoCapitalize="off"
        spellCheck={false}
        hint={hint}
        error={error}
        aria-describedby={rules ? `${id}-rules` : undefined}
        onChange={(e) => {
          setUncontrolledValue(e.target.value);
          onValueChange?.(e.target.value);
          onChange?.(e);
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          setCapsLock(e.getModifierState?.("CapsLock") ?? false);
          onKeyDown?.(e);
        }}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
          setCapsLock(e.getModifierState?.("CapsLock") ?? false);
          onKeyUp?.(e);
        }}
        onBlur={(e: FocusEvent<HTMLInputElement>) => {
          setCapsLock(false);
          onBlur?.(e);
        }}
        end={
          <InputButton
            icon={shown ? ViewOffSlashIcon : ViewIcon}
            aria-label="Show password"
            aria-pressed={shown}
            onClick={toggle}
          />
        }
        {...rest}
      />
      {/* Said once when it turns on; typing a password blind with Caps Lock on is a classic lockout. */}
      <p className="pw-caps" role="status">
        {capsLock ? "Caps Lock is on" : ""}
      </p>
      {rules ? (
        <>
          <ul id={`${id}-rules`} className="pw-rules" aria-label="Password requirements">
            {rules.map((rule, i) => (
              <li key={rule.label} className={met[i] ? "pw-met" : undefined}>
                <span className="pw-mark" aria-hidden="true">
                  {met[i] ? (
                    <span className="pw-tick">
                      <Icon icon={Tick02Icon} size={14} strokeWidth={2.5} />
                    </span>
                  ) : (
                    <Icon icon={Cancel01Icon} size={12} />
                  )}
                </span>
                {rule.label}
                <span className="pw-sr">{met[i] ? ", met" : ", not yet met"}</span>
              </li>
            ))}
          </ul>
          <p className="pw-sr" role="status">
            {allMet ? "All requirements met." : ""}
          </p>
        </>
      ) : null}
      {isNew && value ? (
        <div className="pw-strength" data-level={strength}>
          <span className="pw-bars" aria-hidden="true">
            {[1, 2, 3, 4].map((n) => (
              <span key={n} className={cn("pw-bar", strength >= n && "pw-on")} />
            ))}
          </span>
          <span className="pw-word" role="status">
            Strength: {words[strength]}
          </span>
        </div>
      ) : null}
    </div>
  );
}
