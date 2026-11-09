"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FancyButton } from "@/components/ui/two-factor-1-utils/fancy-button";
import { Icons } from "@/components/ui/two-factor-1-utils/icons";
import { CopyIcon } from "lucide-react";

export function TwoFactor() {
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
              <h1 className="text-xl font-semibold">
                Two-factor authentication
              </h1>
              <p className="text-md text-muted-foreground">
                Add an extra layer of security to your account.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="relative shrink-0 p-1">
              <div className="size-28 overflow-hidden rounded-xl bg-white p-1.5 shadow-elevated-sm sm:size-32">
                <Icons.QrCode className="size-full" />
              </div>
              <span className="pointer-events-none absolute top-0 left-0 size-4 border-t border-l border-border/50" />
              <span className="pointer-events-none absolute top-0 right-0 size-4 border-t border-r border-border/50" />
              <span className="pointer-events-none absolute bottom-0 left-0 size-4 border-b border-l border-border/50" />
              <span className="pointer-events-none absolute right-0 bottom-0 size-4 border-r border-b border-border/50" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <p className="text-sm leading-snug text-muted-foreground">
                Can&apos;t scan? Enter code manually:
              </p>
              <InputGroup className="h-10">
                <InputGroupInput
                  readOnly
                  defaultValue="JBSWY3DPEHPK3PXP"
                  className="font-mono text-xs"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    type="button"
                    size="icon-xs"
                    aria-label="Copy code"
                  >
                    <CopyIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          <form className="flex flex-col gap-3">
            <InputOTP
              maxLength={5}
              pattern={REGEXP_ONLY_DIGITS}
              containerClassName="w-full"
            >
              <InputOTPGroup className="flex w-full gap-2 *:aspect-square *:h-auto *:min-h-0 *:flex-1 *:rounded-lg *:border-l *:text-lg md:*:rounded-xl md:*:text-2xl *:[&_.cn-input-otp-caret-line]:h-[1em] md:*:[&_.cn-input-otp-caret-line]:h-[1.25em]">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
              </InputOTPGroup>
            </InputOTP>

            <FancyButton type="submit" className="h-10">
              Enable 2FA
            </FancyButton>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Lost your device?{" "}
            <Button type="button" variant="link" className="h-auto p-0">
              Use a recovery code
            </Button>
          </p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-end lg:p-12">
          <div className="mt-auto flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              &ldquo;Two-factor auth felt like a feature,{" "}
              <span className="font-medium text-primary">not friction</span>. My
              whole team onboarded in an afternoon.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://cdn.21st.dev/assets/localized/ef407ec862dd072b8624fad7a331df80f56694e98bc1d89b0feb0ea0185e8954.png"
                  alt="Evil Rabbit"
                />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Evil Rabbit</p>
                <p className="text-xs text-muted-foreground">Design engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default TwoFactor;
