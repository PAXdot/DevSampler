"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function LogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="30"
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.5903 6.20648L24 30H19.8524C18.0377 29.9988 16.2846 29.371 14.9167 28.2326C13.5488 27.0941 12.6584 25.5218 12.4097 23.8057L9 0H13.1476C14.9642 0.00164463 16.7188 0.631113 18.087 1.77203C19.4552 2.91295 20.3444 4.48817 20.5903 6.20648Z"
        fill="currentColor"
      />
      <path
        d="M32.5874 6.20648L36 30H31.8616C30.0432 30.0017 28.2856 29.3753 26.9138 28.2365C25.5421 27.0978 24.6491 25.5238 24.3998 23.8057L21 0H25.1384C26.9566 0.00164463 28.7126 0.631113 30.082 1.77203C31.4513 2.91295 32.3413 4.48817 32.5874 6.20648Z"
        fill="currentColor"
      />
      <path
        d="M44.5903 6.20648L48 30H43.8524C42.0377 29.9988 40.2846 29.371 38.9167 28.2326C37.5488 27.0941 36.6584 25.5218 36.4097 23.8057L33 0H37.1476C38.9642 0.00164463 40.7188 0.631113 42.087 1.77203C43.4552 2.91295 44.3444 4.48817 44.5903 6.20648Z"
        fill="currentColor"
      />
      <path
        d="M9.82557 15.0026L10.35 18.6428L10.6314 20.5114L11.3605 25.5469L12 30H6.62788C5.15436 29.9456 3.74595 29.4097 2.64109 28.4833C1.53624 27.5568 0.802842 26.2965 0.565068 24.9159L0.0790189 21.5064C-0.0631028 20.6911 -0.0130671 19.8562 0.225529 19.0615C0.464125 18.2668 0.885357 17.5321 1.45894 16.9102C2.03253 16.2884 2.74422 15.7948 3.54286 15.4649C4.3415 15.1351 5.20725 14.9772 6.07788 15.0026H9.82557Z"
        fill="currentColor"
      />
    </svg>
  );
}

const fancyButtonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition duration-200 ease-out outline-none select-none focus-visible:outline-none",
    "bg-primary text-primary-foreground ring-1 ring-primary",
    "dark:bg-foreground dark:text-background dark:ring-foreground",
    "disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground disabled:ring-0 disabled:before:hidden disabled:after:hidden",
    "enabled:aria-invalid:bg-destructive enabled:aria-invalid:text-white enabled:aria-invalid:ring-destructive",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "**:relative **:z-10 [&_svg]:relative [&_svg]:z-10",
    "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-linear-to-b before:from-white/12 before:to-transparent before:mask-[linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] before:mask-exclude before:[mask-clip:content-box,border-box] before:p-px before:content-[''] before:[-webkit-mask-composite:xor]",
    "dark:before:from-muted-foreground/30 dark:before:to-transparent",
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-linear-to-b after:from-white after:to-transparent after:opacity-[.16] after:transition after:duration-200 after:ease-out after:content-['']",
    "hover:after:opacity-[.24] focus-visible:after:opacity-[.24] active:after:opacity-[.24]",
  ],
  {
    variants: {
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type FancyButtonProps = React.ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof fancyButtonVariants>;

const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
  function FancyButton(
    { className, size = "default", render, nativeButton, children, ...props },
    ref,
  ) {
    const usesCustomRender = Boolean(render);
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="fancy-button"
        nativeButton={usesCustomRender ? false : nativeButton}
        render={render}
        className={cn(fancyButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);
FancyButton.displayName = "FancyButton";

function Verification() {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

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
              <LogoMark className="size-10" />
            </FancyButton>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Verify Your Email</h1>
              <p className="text-md text-muted-foreground">
                We&apos;ve sent a code to{" "}
                <span className="font-medium text-foreground">
                  contact@diarmuradi.com
                </span>
              </p>
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
              Verify
            </FancyButton>
          </form>

          <div className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground lg:flex-row">
            {countdown > 0 ? (
              <span>Resend code in {countdown}s</span>
            ) : (
              <>
                <span>Experiencing issues receiving the code?</span>
                <Button
                  type="button"
                  variant="link"
                  className="h-auto p-0"
                  onClick={() => setCountdown(60)}
                >
                  Resend code
                </Button>
              </>
            )}
          </div>
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
                  src="https://cdn.21st.dev/assets/localized/7466a4679ca3345a730165ecead99f2128c7662637bc70a93890db0d9a9abaf0.jpg"
                  alt="Rauno Freiberg"
                />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Rauno Freiberg</p>
                <p className="text-xs text-muted-foreground">Design engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Verification;
