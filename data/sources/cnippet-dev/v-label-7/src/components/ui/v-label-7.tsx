import { Badge } from "@/components/ui/v-label-7-utils/badge";
import { Field } from "@/components/ui/v-label-7-utils/field";
import { Input } from "@/components/ui/v-label-7-utils/input";
import { Label } from "@/components/ui/v-label-7-utils/label";

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label className="gap-2" htmlFor="label-badge">
        Webhook URL
        <Badge size="sm" variant="success">
          Active
        </Badge>
      </Label>
      <Input
        className="font-mono text-xs"
        defaultValue="https://api.example.com/webhooks"
        id="label-badge"
        type="url"
      />
    </Field>
  );
}

export default Pattern;
