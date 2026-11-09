import { useId } from "react";
import { Field } from "@/components/ui/v-label-11-utils/field";
import { Input } from "@/components/ui/v-label-11-utils/input";
import { Kbd } from "@/components/ui/v-label-11-utils/kbd";
import { Label } from "@/components/ui/v-label-11-utils/label";

export function Pattern() {
  const id = useId();
  return (
    <Field className="w-full max-w-xs">
      <Label className="justify-between" htmlFor={id}>
        Quick search
        <Kbd className="font-normal text-muted-foreground">⌘K</Kbd>
      </Label>
      <Input id={id} placeholder="Type to search…" type="search" />
    </Field>
  );
}

export default Pattern;
