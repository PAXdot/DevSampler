import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register16() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwMCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE1MDAgMTQ5OS45OTk5MzMiIGhlaWdodD0iMjAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Y2xpcFBhdGggaWQ9IjJiNTYyM2E4MDIiPjxwYXRoIGQ9Ik0gMCAxNTAwIEMgMCAxMTA0Ljk1NzAzMSAxNjAuMDAzOTA2IDcxOC42NzU3ODEgNDM5LjMzOTg0NCA0MzkuMzM5ODQ0IEMgNzE4LjY3NTc4MSAxNjAuMDAzOTA2IDExMDQuOTU3MDMxIDAgMTUwMCAwIEwgMTUwMCAxNTAwIFogTSAwIDE1MDAgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYjI1NjYzNjQwMiI+PHBhdGggZD0iTSAwIDAgTCAxNTAwIDAgTCAxNTAwIDE1MDAgTCAwIDE1MDAgWiBNIDAgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJiNjY1OWMzNjkxIj48cGF0aCBkPSJNIDAgMTUwMCBDIDAgMTEwNC45NTcwMzEgMTYwLjAwMzkwNiA3MTguNjc1NzgxIDQzOS4zMzk4NDQgNDM5LjMzOTg0NCBDIDcxOC42NzU3ODEgMTYwLjAwMzkwNiAxMTA0Ljk1NzAzMSAwIDE1MDAgMCBMIDE1MDAgMTUwMCBaIE0gMCAxNTAwICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImRjMzNmYjgyMjQiPjxyZWN0IHg9IjAiIHdpZHRoPSIxNTAwIiB5PSIwIiBoZWlnaHQ9IjE1MDAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMmI1NjIzYTgwMikiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDAuMDAwMDAwMDAwMDAwMTEyODYxKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2RjMzNmYjgyMjQpIj48ZyBjbGlwLXBhdGg9InVybCgjYjI1NjYzNjQwMikiPjxnIGNsaXAtcGF0aD0idXJsKCNiNjY1OWMzNjkxKSI+PHJlY3QgeD0iLTMzMCIgd2lkdGg9IjIxNjAiIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iMjE1OS45OTk5MDQiIHk9Ii0zMjkuOTk5OTg1IiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
            alt="blockus"
            className="size-8 dark:invert"
          />
          <span className="text-base font-medium tracking-tight">blockus</span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-black/10">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Get started in under a minute.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="r16-name"
                className="text-sm font-medium text-foreground"
              >
                Full name
              </label>
              <Input
                id="r16-name"
                type="text"
                placeholder="Ada Lovelace"
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="r16-email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <Input
                id="r16-email"
                type="email"
                placeholder="ada@example.com"
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="r16-password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </label>
              <Input
                id="r16-password"
                type="password"
                placeholder="Min. 8 characters"
                autoComplete="new-password"
              />
            </div>

            <Button type="submit" className="mt-2 w-full rounded-full">
              Create account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          By creating an account you agree to our{" "}
          <a href="/license" className="underline underline-offset-4">
            Terms
          </a>{" "}
          and{" "}
          <a href="/license" className="underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
