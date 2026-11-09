/**
 * e-ink-ui-lib (MIT License) — https://github.com/AlexisRoe/e-ink-ui-lib
 */
import { createContext, useContext } from "react";

/** Plain record of field name to field value, as stored by `Form`. */
export type FormValues = Record<string, unknown>;

/** Value exposed by `Form` through context to its descendants. */
export interface FormContextValue<TValues extends FormValues = FormValues> {
  values: TValues;
  initialValues: TValues;
  errors: Record<string, string>;
  isDirty: boolean;
  hasErrors: boolean;
  setValue: (name: string, value: unknown) => void;
  getValue: (name: string) => unknown;
  setError: (name: string, error: string | undefined) => void;
  getError: (name: string) => string | undefined;
  reset: () => void;
}

export const FormContext = createContext<FormContextValue | null>(null);

/**
 * Reads the enclosing `Form`'s state and update methods. Throws if used
 * outside a `<Form>`.
 */
export function useFormContext<
  TValues extends FormValues = FormValues,
>(): FormContextValue<TValues> {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a <Form>");
  }
  return context as FormContextValue<TValues>;
}

/** Value returned by `useFormField`. */
export interface FormFieldState {
  value: unknown;
  error: string | undefined;
  setValue: (value: unknown) => void;
  setError: (error: string | undefined) => void;
}

/**
 * Convenience hook for a single named field, built on `useFormContext`.
 * Throws if used outside a `<Form>`.
 */
export function useFormField(name: string): FormFieldState {
  const { getValue, setValue, getError, setError } = useFormContext();

  return {
    value: getValue(name),
    error: getError(name),
    setValue: (value: unknown) => setValue(name, value),
    setError: (error: string | undefined) => setError(name, error),
  };
}
