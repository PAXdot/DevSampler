"use client";

import { useState } from "react";
import Alert from "@/components/ui/sign-in-utils/alert";
import Button from "@/components/ui/sign-in-utils/button";
import Checkbox from "@/components/ui/sign-in-utils/checkbox";
import Input from "@/components/ui/sign-in-utils/input";
import PasswordInput from "@/components/ui/sign-in-utils/password-input";
import AuthCard, {
  type Provider,
} from "@/components/ui/sign-in-utils/auth-card";
import { useForm } from "@/components/ui/sign-in-utils/use-form";
import { toErrors } from "@/components/ui/sign-in-utils/errors";

export interface SignInCredentials {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignInProps {
  /** Check the details. Throw an Error with a code (e.g. "invalid_credentials") to say why not. */
  onsubmit: (credentials: SignInCredentials) => Promise<unknown> | unknown;
  providers?: Provider[];
  onprovider?: (id: string) => void;
  forgotHref?: string;
  signUpHref?: string;
  title?: string;
  description?: string;
}

export default function SignIn({
  onsubmit,
  providers,
  onprovider,
  forgotHref,
  signUpHref,
  title = "Sign in",
  description = "Welcome back.",
}: SignInProps) {
  const [done, setDone] = useState(false);

  const form = useForm({
    messages: {
      email: {
        valueMissing: "Enter your email address.",
        typeMismatch: "Enter an email address like name@example.com.",
      },
      password: { valueMissing: "Enter your password." },
    },
    async onsubmit(data) {
      setDone(false);
      try {
        await onsubmit({
          email: String(data.get("email")),
          password: String(data.get("password")),
          remember: data.has("remember"),
        });
        setDone(true);
      } catch (e) {
        return toErrors(e);
      }
    },
  });

  return (
    <AuthCard
      title={title}
      description={description}
      providers={providers}
      onprovider={onprovider}
      busy={form.submitting}
      footer={
        signUpHref ? (
          <>
            New here? <a href={signUpHref}>Create an account</a>
          </>
        ) : undefined
      }
    >
      <form className="si-fields" ref={form.formRef}>
        {form.errors.form ? (
          <Alert tone="danger" title="Couldn’t sign you in" live>
            {form.errors.form}
          </Alert>
        ) : null}
        {done ? <Alert tone="success" title="You’re signed in" live /> : null}
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="username"
          required
          error={form.errors.email}
        />
        <div className="si-password">
          <PasswordInput
            label="Password"
            name="password"
            required
            error={form.errors.password}
          />
          {forgotHref ? (
            <a className="si-forgot" href={forgotHref}>
              Forgot password?
            </a>
          ) : null}
        </div>
        <Checkbox name="remember">Keep me signed in</Checkbox>
        <Button type="submit" loading={form.submitting}>
          Sign in
        </Button>
      </form>
    </AuthCard>
  );
}
