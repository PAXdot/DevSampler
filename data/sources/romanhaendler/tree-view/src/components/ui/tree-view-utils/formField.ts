import { createContext, useContext } from "react";

/** Partial, verbatim extraction of FormField.tsx: only the context value shape
    and the useFormField() hook that Checkbox.tsx reads. The FormField
    component itself and its CSS module are not used by this component tree. */
interface FormFieldContextValue {
  id: string;
  labelId: string;
  describedBy?: string;
  invalid: boolean;
  required: boolean;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormField(): FormFieldContextValue | null {
  return useContext(FormFieldContext);
}
