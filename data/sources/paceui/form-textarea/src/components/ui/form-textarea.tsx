import { type AnyFormApi, type DeepKeys, useField } from "@tanstack/react-form";
import type { ComponentProps, ReactNode } from "react";

import { Field, FieldLabel } from "@/components/ui/field";
import { FormError } from "@/components/ui/form-textarea-utils/form-error";
import { type GetFormData } from "@/components/ui/form-textarea-utils/helpers";
import { Textarea } from "@/components/ui/textarea";

export type FormTextareaProps<TForm extends AnyFormApi> = Omit<
  ComponentProps<"textarea">,
  "name" | "form" | "prefix"
> & {
  label?: ReactNode;
  form: TForm;
  name: DeepKeys<GetFormData<TForm>>;
};

export const FormTextarea = <TForm extends AnyFormApi>({
  label,
  form,
  name,
  ...rest
}: FormTextareaProps<TForm>) => {
  const field = useField({
    form,
    name,
  });

  const errors = field.state.meta.errors[0];

  const error = typeof errors === "object" ? errors.message : errors;

  return (
    <Field data-invalid={error != undefined} className="gap-1.5">
      {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
      <Textarea
        id={field.name}
        name={field.name}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={error != undefined}
        {...rest}
      />
      <FormError form={form} name={name} className="mt-0.5" />
    </Field>
  );
};

export default FormTextarea;
