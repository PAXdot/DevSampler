"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FancyButton } from "@/components/ui/new-password-2-utils/fancy-button";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";

export function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="flex w-full max-w-md flex-col gap-6 rounded-3xl bg-card p-6 shadow-elevated-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex size-14 items-center justify-center">
          <div className="absolute inset-0 scale-125 rounded-full bg-primary/10 mask-t-from-20% mask-t-to-100%" />
          <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-card ring ring-primary/10 ring-inset">
            <LockIcon className="size-6 text-primary" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">Set New Password</h1>
          <p className="text-md text-muted-foreground">
            Create a new password for your account.
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-3">
        <Field className="gap-1">
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <InputGroup className="h-10">
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="h-10"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field className="gap-1">
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <InputGroup className="h-10">
            <InputGroupInput
              id="confirm-password"
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••••"
              className="h-10"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <FancyButton type="submit" className="h-10">
          Update Password
        </FancyButton>
      </form>

      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
        <span>Know your old password?</span>
        <Button type="button" variant="link" className="h-auto p-0">
          Sign in
        </Button>
      </div>
    </main>
  );
}
export default NewPassword;
