"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Edit02Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import Button from "./inline-edit-utils/button";
import Spinner from "./inline-edit-utils/spinner";
import { announce } from "./inline-edit-utils/announce";

export interface InlineEditProps {
  /** What the text is, e.g. "Title". Names the field for screen readers; shown unless hideLabel. */
  label: string;
  hideLabel?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  /** Shown, muted, when there's no value yet. */
  placeholder?: string;
  type?: "text" | "email" | "url";
  required?: boolean;
  maxLength?: number;
  /** Return a message to keep the field open with it, or nothing when it's fine. */
  validate?: (value: string) => string | undefined;
  /** Save the new value. If it throws, the field stays open and says so. */
  onSave?: (value: string) => Promise<unknown> | unknown;
  className?: string;
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function InlineEdit({
  label,
  hideLabel = false,
  value: valueProp,
  onValueChange,
  placeholder = "Empty",
  type = "text",
  required = false,
  maxLength,
  validate,
  onSave,
  className,
}: InlineEditProps) {
  const id = useId();
  const [value, setValue] = useState(valueProp ?? "");
  useEffect(() => {
    if (valueProp !== undefined) setValue(valueProp);
  }, [valueProp]);

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const inputRef = useRef<HTMLInputElement>(null);
  const viewRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const savedTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(savedTimer.current), []);

  function edit() {
    setDraft(value);
    setError(undefined);
    setEditing(true);
  }

  // Focus + select once the field has mounted (mirrors the Svelte version's `await tick()`).
  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  /** focusBack: false when focus already moved on (a click elsewhere), so it isn't pulled back. */
  function close(focusBack = true) {
    setEditing(false);
    setError(undefined);
    if (focusBack) setTimeout(() => viewRef.current?.focus(), 0);
  }

  async function save(focusBack = true) {
    if (saving) return;
    const next = draft.trim();
    if (next === value) return close(focusBack);
    const nextError =
      required && !next
        ? `Enter a ${label.toLowerCase()}.`
        : next
          ? validate?.(next)
          : undefined;
    if (nextError) {
      setError(nextError);
      if (focusBack) inputRef.current?.focus();
      return;
    }
    setSaving(true);
    try {
      await onSave?.(next);
      setValue(next);
      onValueChange?.(next);
      setSaving(false);
      setSaved(true);
      clearTimeout(savedTimer.current);
      savedTimer.current = setTimeout(() => setSaved(false), 1400);
      announce("Saved");
      close(focusBack);
    } catch {
      setSaving(false);
      setError("Couldn’t save. Try again.");
      if (focusBack) inputRef.current?.focus();
    }
  }

  return (
    <div className={cx("inline-edit", className)}>
      {!hideLabel && (
        <span className="label" id={`${id}-label`}>
          {label}
        </span>
      )}

      {editing ? (
        <>
          {/* Enter saves, Escape puts it back; moving focus out saves too, unless it went to Cancel. */}
          <form
            ref={formRef}
            className="edit"
            noValidate
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              save();
            }}
            onBlur={(e) => {
              const to = e.relatedTarget as Node | null;
              // Closing removes the field too: only a real move away while editing saves.
              if (editing && !saving && !formRef.current?.contains(to))
                save(false);
            }}
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              type={type}
              maxLength={maxLength}
              aria-label={label}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${id}-error` : undefined}
              readOnly={saving}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  e.stopPropagation();
                  close();
                }
              }}
            />
            <span className="actions">
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                square
                aria-label="Save"
              >
                {saving ? (
                  <Spinner size={16} />
                ) : (
                  <HugeiconsIcon icon={Tick02Icon} size={16} />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                square
                aria-label="Cancel"
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => close()}
              >
                <HugeiconsIcon icon={Cancel01Icon} size={16} />
              </Button>
            </span>
          </form>
          {error && (
            <p id={`${id}-error`} className="error">
              {error}
            </p>
          )}
        </>
      ) : (
        <button
          ref={viewRef}
          type="button"
          className={cx("view", !value && "empty")}
          title={value || undefined}
          aria-labelledby={
            hideLabel ? undefined : `${id}-label ${id}-text ${id}-hint`
          }
          aria-label={
            hideLabel ? `${label}: ${value || placeholder}, edit` : undefined
          }
          onClick={edit}
        >
          <span className="text" id={`${id}-text`}>
            {value || placeholder}
          </span>
          <span className="sr" id={`${id}-hint`}>
            , edit
          </span>
          <span className="pencil" aria-hidden="true">
            {saved ? (
              <span className="tick">
                <HugeiconsIcon icon={Tick02Icon} size={16} />
              </span>
            ) : (
              <HugeiconsIcon icon={Edit02Icon} size={16} />
            )}
          </span>
        </button>
      )}
    </div>
  );
}
