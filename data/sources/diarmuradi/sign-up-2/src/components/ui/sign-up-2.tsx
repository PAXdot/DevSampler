"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/sign-up-2-utils/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/sign-up-2-utils/input-group";
import { FancyButton } from "@/components/ui/sign-up-2-utils/fancy-button";
import { Icons } from "@/components/ui/sign-up-2-utils/icons";
import { EyeIcon, EyeOffIcon, PlusIcon } from "lucide-react";

const socials = [
  { icon: Icons.Google, name: "Google" },
  { icon: Icons.Facebook, name: "Facebook" },
];

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex w-full max-w-md flex-col gap-6 rounded-3xl bg-card p-6 shadow-elevated-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex size-14 items-center justify-center">
          <div className="absolute inset-0 scale-125 rounded-full bg-primary/10 mask-t-from-20% mask-t-to-100%" />
          <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-card ring ring-primary/10 ring-inset">
            <PlusIcon className="size-6 text-primary" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">Create a new account</h1>
          <p className="text-md text-muted-foreground">
            Enter your details to register.
          </p>
        </div>
      </div>

      <div className="flex gap-3 *:h-10 *:flex-1 *:[&>svg]:size-5">
        {socials.map(({ icon: Icon, name }) => (
          <Button key={name} type="button" variant="outline">
            <Icon />
            {name}
          </Button>
        ))}
      </div>

      <div className="relative text-center text-xs text-muted-foreground uppercase before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-border/50 before:content-['']">
        <span className="relative bg-card px-2">OR</span>
      </div>

      <form className="flex flex-col gap-3">
        <Field className="gap-1">
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Diar Muradi"
            className="h-10"
          />
        </Field>

        <Field className="gap-1">
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="contact@diarmuradi.com"
            className="h-10"
          />
        </Field>

        <Field className="gap-1">
          <FieldLabel htmlFor="password">Password</FieldLabel>
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

        <FancyButton type="submit" className="h-10">
          Register
        </FancyButton>
      </form>

      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
        <span>Returning user?</span>
        <Button type="button" variant="link" className="h-auto p-0">
          Log in
        </Button>
      </div>
    </main>
  );
}
export default SignUp;
