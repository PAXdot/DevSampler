"use client";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FancyButton } from "@/components/ui/sign-up-1-utils/fancy-button";
import { Icons } from "@/components/ui/sign-up-1-utils/icons";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const socials = [
  { icon: Icons.Google, name: "google" },
  { icon: Icons.Apple, name: "apple" },
  { icon: Icons.GitHub, name: "github" },
];

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

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
              <h1 className="text-xl font-semibold">Create your account</h1>
              <p className="text-md text-muted-foreground">
                Get started in just a few steps.
              </p>
            </div>
          </div>

          <div className="flex gap-3 *:h-10 *:flex-1 *:[&>svg]:size-5">
            {socials.map(({ icon: Icon, name }) => (
              <Button key={name} type="button" variant="secondary">
                <Icon />
              </Button>
            ))}
          </div>

          <div className="relative text-center text-xs text-muted-foreground uppercase before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-border/50 before:content-['']">
            <span className="relative bg-card px-2">or with</span>
          </div>

          <form className="flex flex-col gap-3">
            <Field className="gap-1">
              <FieldLabel htmlFor="name" className="gap-0">
                Full Name <span className="text-primary">*</span>
              </FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Diar Muradi"
                className="h-10"
              />
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="email" className="gap-0">
                Email <span className="text-primary">*</span>
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="contact@diarmuradi.com"
                className="h-10"
              />
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="password" className="gap-0">
                Password <span className="text-primary">*</span>
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

            <FancyButton type="submit" className="h-10">
              Create Account
            </FancyButton>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button type="button" variant="link" className="h-auto p-0">
              Sign in
            </Button>
          </p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-end lg:p-12">
          <div className="mt-auto flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              &ldquo;Signing up took less than 30 seconds. I was{" "}
              <span className="font-medium text-primary">in my dashboard</span>{" "}
              before my coffee even cooled down.&rdquo;
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
                <p className="text-xs text-muted-foreground">VP of DevRel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
