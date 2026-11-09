"use client";

import { useId, useState } from "react";
import Link from "next/link";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/sign-in-3-utils/avatar";
import { Button } from "@/components/ui/sign-in-3-utils/button";
import { Checkbox } from "@/components/ui/sign-in-3-utils/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/sign-in-3-utils/field";
import { Input } from "@/components/ui/sign-in-3-utils/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/sign-in-3-utils/input-group";
import { FancyButton } from "@/components/ui/fancy-button";
import { Icons } from "@/components/ui/sign-in-3-utils/icons";
import { EyeIcon, EyeOffIcon, StarIcon, UserIcon } from "lucide-react";

type SocialProvider = {
  label: string;
  icon: React.ComponentType<React.HTMLAttributes<SVGElement>>;
};

const providers: SocialProvider[] = [
  { label: "Google", icon: Icons.Google },
  { label: "Apple", icon: Icons.Apple },
  { label: "GitHub", icon: Icons.GitHub },
];

export function SignIn() {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      aria-label="Sign in"
      className="style-nova grid min-h-svh w-full grid-cols-1 bg-background text-foreground motion-reduce:**:animate-none motion-reduce:**:transition-none lg:grid-cols-2 lg:p-2"
    >
      <section className="flex flex-col items-center justify-center">
        <div className="flex max-w-sm flex-col items-center gap-4">
          <div className="relative flex size-14 items-center justify-center">
            <div className="absolute inset-0 scale-125 rounded-full bg-primary/10 mask-b-from-20% mask-b-to-100%" />
            <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-card ring ring-primary/10 ring-inset">
              <UserIcon aria-hidden="true" className="size-6 text-primary" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
              Sign in to your account
            </h1>
            <p className="text-base text-muted-foreground">
              Enter your details to sign in.
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-6">
          <FieldGroup className="gap-3">
            <Field className="gap-1">
              <FieldLabel htmlFor={`${id}-email`}>Email</FieldLabel>
              <Input
                id={`${id}-email`}
                type="email"
                placeholder="contact@diarmuradi.com"
                className="h-10 bg-transparent"
              />
            </Field>

            <Field className="gap-1">
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor={`${id}-password`}>Password</FieldLabel>
                <Button
                  variant="link"
                  className="h-auto p-0"
                  nativeButton={false}
                  role="link"
                  render={<Link href="/reset-password" />}
                >
                  Forgot password?
                </Button>
              </div>
              <InputGroup className="h-10 bg-transparent">
                <InputGroupInput
                  id={`${id}-password`}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className="h-10 bg-transparent"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    type="button"
                    onClick={() => setShowPassword((show) => !show)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOffIcon aria-hidden="true" />
                    ) : (
                      <EyeIcon aria-hidden="true" />
                    )}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <div className="flex items-center gap-1.5">
              <Checkbox id={`${id}-remember`} />
              <FieldLabel htmlFor={`${id}-remember`} className="text-sm">
                Keep me logged in
              </FieldLabel>
            </div>

            <FancyButton type="button" size="lg" className="w-full">
              Sign in
            </FancyButton>
          </FieldGroup>

          <div className="relative text-center text-xs text-muted-foreground uppercase before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-border/50 before:content-['']">
            <span className="relative bg-background px-2">
              or continue with
            </span>
          </div>

          <div className="flex flex-col gap-3 *:w-full *:[&>svg]:size-5">
            {providers.map(({ icon: Icon, label }) => (
              <Button key={label} type="button" variant="outline" size="lg">
                <Icon aria-hidden="true" />
                Continue with {label}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 text-sm text-muted-foreground">
            <span>Not a member yet?</span>
            <Button
              variant="link"
              className="h-auto p-0"
              nativeButton={false}
              role="link"
              render={<Link href="/sign-up" />}
            >
              Join now
            </Button>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col justify-end overflow-hidden rounded-4xl bg-muted p-12 max-lg:hidden">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/25 via-primary/10 to-transparent" />
        <div className="relative flex flex-col gap-6">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((rating) => (
              <StarIcon
                aria-hidden="true"
                key={rating}
                className="size-4 fill-primary text-primary"
              />
            ))}
          </div>
          <p className="text-lg leading-relaxed">
            &ldquo;Switching to this platform was the{" "}
            <span className="font-medium text-primary">best decision</span> we
            made this year. Onboarding took minutes, not days.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage
                src="https://cdn.21st.dev/assets/localized/b881fc6e5d91d95f912abd2f45508332c7a398d9dd53c136c6c0a2d500c8fc7e.png"
                alt="Lee Robinson"
              />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Lee Robinson</p>
              <p className="text-xs text-muted-foreground">VP of Product</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
