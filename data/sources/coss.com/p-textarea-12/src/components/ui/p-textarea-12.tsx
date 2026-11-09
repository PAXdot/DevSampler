import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/p-textarea-12-utils/field";
import { Textarea } from "@/components/ui/p-textarea-12-utils/textarea";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>
        Message <span className="text-destructive-foreground">*</span>
      </FieldLabel>
      <Textarea placeholder="Type your message here" required />
      <FieldError>Please fill out this field.</FieldError>
    </Field>
  );
}
