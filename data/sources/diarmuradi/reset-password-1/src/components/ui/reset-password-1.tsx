"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FancyButton } from "@/components/ui/reset-password-1-utils/fancy-button";
import { Icons } from "@/components/ui/reset-password-1-utils/icons";

export function ResetPassword() {
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
              <h1 className="text-xl font-semibold">Reset Password</h1>
              <p className="text-md text-muted-foreground">
                Enter your email to reset your password.
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-3">
            <Field className="gap-1">
              <FieldLabel htmlFor="email" className="gap-0">
                Email Address <span className="text-primary">*</span>
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="contact@diarmuradi.com"
                className="h-10"
              />
              <p className="text-xs text-muted-foreground">
                Enter the email with which you&apos;ve registered.
              </p>
            </Field>

            <FancyButton type="submit" className="h-10">
              Reset Password
            </FancyButton>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            {"Don't have access anymore?"}{" "}
            <Button type="button" variant="link" className="h-auto p-0">
              Try another method
            </Button>
          </p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-end lg:p-12">
          <div className="mt-auto flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              &ldquo;Forgot my password once. The reset flow was{" "}
              <span className="font-medium text-primary">so painless</span> I
              almost did it again just to see.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://cdn.21st.dev/assets/localized/fa600e6e3f008d0a54390646f123fcd1c952304522185e7b85837595eacb74db.jpg"
                  alt="Guillermo Rauch"
                />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Guillermo Rauch</p>
                <p className="text-xs text-muted-foreground">CEO, Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ResetPassword;
