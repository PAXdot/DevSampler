"use client";

import { Button } from "@/components/ui/recovery-code-2-utils/button";
import { Field, FieldLabel } from "@/components/ui/recovery-code-2-utils/field";
import { Input } from "@/components/ui/recovery-code-2-utils/input";
import { FancyButton } from "@/components/ui/recovery-code-2-utils/fancy-button";
import { ShieldIcon } from "lucide-react";

export function RecoveryCode() {
  return (
    <main className="flex w-full max-w-md flex-col gap-6 rounded-3xl bg-card p-6 shadow-elevated-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex size-14 items-center justify-center">
          <div className="absolute inset-0 scale-125 rounded-full bg-primary/10 mask-t-from-20% mask-t-to-100%" />
          <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-card ring ring-primary/10 ring-inset">
            <ShieldIcon className="size-6 text-primary" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">Recovery Code</h1>
          <p className="text-md text-muted-foreground">
            Enter the recovery code you saved when setting up your account.
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-3">
        <Field className="gap-1">
          <FieldLabel htmlFor="recovery-code">Recovery Code</FieldLabel>
          <Input
            id="recovery-code"
            type="text"
            placeholder="ABCD-EFGH-IJKL-MNOP"
            spellCheck={false}
            autoComplete="off"
            className="h-10"
          />
        </Field>

        <FancyButton type="submit" className="h-10">
          Verify Code
        </FancyButton>
      </form>

      <Button type="button" variant="link" className="h-auto p-0 text-sm">
        Back to login
      </Button>
    </main>
  );
}
export default RecoveryCode;
