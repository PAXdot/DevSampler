import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/v-field-18-utils/field";
import { Switch } from "@/components/ui/v-field-18-utils/switch";

export default function Particle() {
  return (
    <Field className="flex-row items-center justify-between rounded-lg border p-4">
      <div className="flex flex-col gap-1">
        <FieldLabel className="cursor-pointer">Marketing emails</FieldLabel>
        <FieldDescription>
          Receive emails about new products, features, and updates.
        </FieldDescription>
      </div>
      <Switch />
    </Field>
  );
}
