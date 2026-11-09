import { Field, FieldDescription } from "@/components/ui/v-label-9-utils/field";
import { Input } from "@/components/ui/v-label-9-utils/input";
import { Label } from "@/components/ui/v-label-9-utils/label";

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <div className="flex flex-col gap-1">
        <Label htmlFor="label-helper">API Key</Label>
        <FieldDescription>
          Your secret key for API authentication
        </FieldDescription>
      </div>
      <Input
        className="font-mono"
        id="label-helper"
        placeholder="sk_live_..."
      />
    </Field>
  );
}

export default Pattern;
