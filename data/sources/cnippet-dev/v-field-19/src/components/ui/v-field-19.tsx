import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/v-field-19-utils/field";
import { Input } from "@/components/ui/v-field-19-utils/input";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Date of birth</FieldLabel>
      <Input type="date" />
      <FieldDescription>Used to verify your age and identity.</FieldDescription>
      <FieldError>Please enter a valid date.</FieldError>
    </Field>
  );
}
