"use client";

import { useState } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/new-password-1-utils/avatar";
import { Button } from "@/components/ui/new-password-1-utils/button";
import { Field, FieldLabel } from "@/components/ui/new-password-1-utils/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/new-password-1-utils/input-group";
import { FancyButton } from "@/components/ui/new-password-1-utils/fancy-button";
import { Icons } from "@/components/ui/new-password-1-utils/icons";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="w-full max-w-xl rounded-4xl lg:max-w-4xl lg:bg-muted lg:p-1">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-elevated-lg">
          <div className="flex flex-col items-center gap-4">
            <FancyButton
              type="button"
              size="icon-lg"
              className="size-14 rounded-xl"
              aria-label="Home"
            >
              <Icons.Logo className="size-10" />
            </FancyButton>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Set New Password</h1>
              <p className="text-md text-muted-foreground">
                Create a strong password for your account.
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-3">
            <Field className="gap-1">
              <FieldLabel htmlFor="password" className="gap-0">
                New Password <span className="text-primary">*</span>
              </FieldLabel>
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
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="confirm-password" className="gap-0">
                Confirm Password <span className="text-primary">*</span>
              </FieldLabel>
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

          <p className="text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Button type="button" variant="link" className="h-auto p-0">
              Back to login
            </Button>
          </p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-end lg:p-12">
          <div className="mt-auto flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              &ldquo;Updating my password was{" "}
              <span className="font-medium text-primary">effortless</span>.
              Clear instructions, no confusion — done in seconds.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://cdn.21st.dev/assets/localized/6608456435176a64af4bfba8948e6f18b0d01ce74b6165ecfe55086f91a6d8d8.jpg"
                  alt="Tim Neutkens"
                />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Tim Neutkens</p>
                <p className="text-xs text-muted-foreground">Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default NewPassword;
