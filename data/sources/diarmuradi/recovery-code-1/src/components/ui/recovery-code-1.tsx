"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/recovery-code-1-utils/avatar";
import { Button } from "@/components/ui/recovery-code-1-utils/button";
import { Field, FieldLabel } from "@/components/ui/recovery-code-1-utils/field";
import { Input } from "@/components/ui/recovery-code-1-utils/input";
import { FancyButton } from "@/components/ui/recovery-code-1-utils/fancy-button";
import { Icons } from "@/components/ui/recovery-code-1-utils/icons";

export function RecoveryCode() {
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
              <h1 className="text-xl font-semibold">Recovery Code</h1>
              <p className="text-md text-muted-foreground">
                Enter your backup code to verify your identity.
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-3">
            <Field className="gap-1">
              <FieldLabel htmlFor="recovery-code" className="gap-0">
                Recovery Code <span className="text-primary">*</span>
              </FieldLabel>
              <Input
                id="recovery-code"
                type="text"
                placeholder="1234-5678-9012-3456"
                spellCheck={false}
                autoComplete="off"
                className="h-10"
              />
            </Field>

            <FancyButton type="submit" className="h-10">
              Verify Code
            </FancyButton>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            <Button type="button" variant="link" className="h-auto p-0">
              Try another method
            </Button>
            {" · "}
            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-foreground"
            >
              Back to login
            </Button>
          </p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-end lg:p-12">
          <div className="mt-auto flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              &ldquo;Had to use a recovery code while traveling. The process was{" "}
              <span className="font-medium text-primary">straightforward</span>{" "}
              — back in my account in under a minute.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://cdn.21st.dev/assets/localized/fd9f493ff6fa8d695bb11cd24b46af68b3ec38ca1258de568706c98a2220e80a.jpg"
                  alt="Paco Coursey"
                />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Paco Coursey</p>
                <p className="text-xs text-muted-foreground">Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default RecoveryCode;
