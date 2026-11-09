"use client";

import { useCallback, useRef, useState } from "react";

/** One message per field name. `form` is for the whole form, shown above the button. */
export type Errors = Record<string, string | undefined>;

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type Check = Exclude<keyof ValidityState, "valid">;

interface UseFormOptions {
  /** Your wording for the browser's own checks, per field. */
  messages?: Record<string, Partial<Record<Check, string>>>;
  /** Checks the browser can't do (across fields, custom controls). Return a message per failing field. */
  validate?: (data: FormData) => Errors;
  /** Runs once every check passes. Return errors to show them; a throw shows a generic message. */
  onsubmit: (data: FormData) => Promise<Errors | void> | Errors | void;
  /** Shown when onsubmit throws (network down, server error). */
  failed?: string;
}

/**
 * Forms with the browser's own constraint validation (required, type, min, pattern...) and no
 * library. Errors appear when a field is left or the form is sent, and clear as soon as they're
 * fixed. Ported from Sina UI's createForm (Svelte 5 runes) to a React hook with the same behaviour.
 */
export function useForm(options: UseFormOptions) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const [errors, setErrorsState] = useState<Errors>({});
  const errorsRef = useRef<Errors>({});
  const [submitting, setSubmittingState] = useState(false);
  const submittingRef = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const changedRef = useRef<Set<string>>(new Set());
  const cleanupRef = useRef<(() => void) | null>(null);

  const setErrors = useCallback((next: Errors) => {
    errorsRef.current = next;
    setErrorsState(next);
  }, []);

  const setSubmitting = useCallback((next: boolean) => {
    submittingRef.current = next;
    setSubmittingState(next);
  }, []);

  const fields = useCallback((): Field[] => {
    const form = formRef.current;
    if (!form) return [];
    return [...form.elements].filter(
      (e): e is Field => "validity" in e && !!(e as Field).name && !(e as Field).disabled
    );
  }, []);

  const messageFor = useCallback((field: Field, custom: Errors): string | undefined => {
    const opts = optionsRef.current;
    if (custom[field.name]) return custom[field.name];
    if (field.validity.valid) return undefined;
    const failed = (Object.keys(opts.messages?.[field.name] ?? {}) as Check[]).find(
      (k) => field.validity[k]
    );
    return (failed && opts.messages?.[field.name]?.[failed]) || field.validationMessage;
  }, []);

  /** Checks the named fields (all when omitted) and returns true when they pass. */
  const check = useCallback(
    (names?: string[]): boolean => {
      const form = formRef.current;
      const opts = optionsRef.current;
      const custom = form ? opts.validate?.(new FormData(form)) ?? {} : {};
      const next: Errors = { ...errorsRef.current, form: undefined };
      let ok = true;
      for (const f of fields()) {
        if (names && !names.includes(f.name)) continue;
        next[f.name] = messageFor(f, custom);
        if (next[f.name]) ok = false;
      }
      for (const [name, msg] of Object.entries(custom)) {
        if (!names || names.includes(name)) {
          if (!fields().some((f) => f.name === name)) next[name] = msg;
          if (msg) ok = false;
        }
      }
      setErrors(next);
      return ok;
    },
    [fields, messageFor, setErrors]
  );

  const focusFirstError = useCallback(() => {
    const first = fields().find((f) => errorsRef.current[f.name]);
    first?.focus();
  }, [fields]);

  const submit = useCallback(
    async (e: Event) => {
      e.preventDefault();
      if (submittingRef.current) return;
      if (!check()) {
        focusFirstError();
        return;
      }
      setSubmitting(true);
      try {
        const form = formRef.current;
        const result = form ? await optionsRef.current.onsubmit(new FormData(form)) : undefined;
        if (result) {
          setErrors(result);
          focusFirstError();
        }
      } catch {
        setErrors({
          form:
            optionsRef.current.failed ?? "Couldn't send the form. Check your connection and try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [check, focusFirstError, setErrors, setSubmitting]
  );

  const formRefCallback = useCallback(
    (el: HTMLFormElement | null) => {
      cleanupRef.current?.();
      cleanupRef.current = null;
      formRef.current = el;
      if (!el) return;
      // We show the messages; the browser's own bubbles would cover them.
      el.noValidate = true;
      // Checked when left after a change, not while typing, and not when merely tabbed past.
      const left = (e: Event) => {
        const name = (e.target as Field).name;
        if (name && changedRef.current.has(name)) check([name]);
      };
      // Once a field shows an error, it clears the moment it's fixed.
      const typed = (e: Event) => {
        const name = (e.target as Field).name;
        if (!name) return;
        changedRef.current.add(name);
        if (errorsRef.current[name]) check([name]);
      };
      // A reset button clears the messages along with the values.
      const reset = () => {
        setErrors({});
        changedRef.current.clear();
      };
      el.addEventListener("focusout", left);
      el.addEventListener("input", typed);
      el.addEventListener("change", typed);
      el.addEventListener("submit", submit);
      el.addEventListener("reset", reset);
      cleanupRef.current = () => {
        el.removeEventListener("focusout", left);
        el.removeEventListener("input", typed);
        el.removeEventListener("change", typed);
        el.removeEventListener("submit", submit);
        el.removeEventListener("reset", reset);
      };
    },
    [check, setErrors, submit]
  );

  return {
    formRef: formRefCallback,
    errors,
    submitting,
  };
}
