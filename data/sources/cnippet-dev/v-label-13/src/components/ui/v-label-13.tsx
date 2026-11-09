import { MailIcon } from "lucide-react";
import { useId } from "react";
import { Field } from "@/components/ui/v-label-13-utils/field";
import { Input } from "@/components/ui/v-label-13-utils/input";
import { Label } from "@/components/ui/v-label-13-utils/label";

export default function Pattern() {
  const id = useId();
  return (
    <Field className="w-full max-w-xs">
      <Label className="gap-1.5" htmlFor={id}>
        <MailIcon aria-hidden="true" className="size-3.5" />
        Email address
      </Label>
      <Input id={id} placeholder="you@example.com" type="email" />
    </Field>
  );
}
