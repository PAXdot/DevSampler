import Link from "next/link";
import { useId } from "react";
import { Field } from "@/components/ui/v-label-12-utils/field";
import { Input } from "@/components/ui/v-label-12-utils/input";
import { Label } from "@/components/ui/v-label-12-utils/label";

export function Pattern() {
  const id = useId();
  return (
    <Field className="w-full max-w-xs">
      <Label className="justify-between" htmlFor={id}>
        Password
        <Link
          className="font-normal text-muted-foreground text-xs underline-offset-4 hover:underline"
          href="/forgot-password"
        >
          Forgot password?
        </Link>
      </Label>
      <Input id={id} placeholder="••••••••" type="password" />
    </Field>
  );
}

export default Pattern;
