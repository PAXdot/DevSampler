"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldLabel,
} from "@/components/ui/reset-password-icon-card-utils/field";
import { Input } from "@/components/ui/input";
import { FancyButton } from "@/components/ui/fancy-button";
import { LockKeyholeIcon } from "lucide-react";

export function ResetPassword() {
  return (
    <main className="flex w-full max-w-md flex-col gap-6 rounded-3xl bg-card p-6 shadow-elevated-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex size-14 items-center justify-center">
          <div className="absolute inset-0 scale-125 rounded-full bg-primary/10 mask-t-from-20% mask-t-to-100%" />
          <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-card ring ring-primary/10 ring-inset">
            <LockKeyholeIcon className="size-6 text-primary" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">Reset Password</h1>
          <p className="text-md text-muted-foreground">
            Enter your email to reset your password.
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-3">
        <Field className="gap-1">
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="contact@diarmuradi.com"
            className="h-10"
          />
        </Field>

        <FancyButton type="submit" className="h-10">
          Reset Password
        </FancyButton>
      </form>

      <div className="flex flex-col items-center gap-1 text-center text-sm text-muted-foreground sm:flex-row sm:justify-center">
        <span>Wrong email?</span>
        <Button type="button" variant="link" className="h-auto p-0">
          Use a different one
        </Button>
      </div>
    </main>
  );
}
export default ResetPassword;
