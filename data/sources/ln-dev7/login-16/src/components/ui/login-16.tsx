import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const socialProviders = [
  {
    id: "google",
    label: "Continue with Google",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjYyIj48cGF0aCBmaWxsPSIjNDI4NWY0IiBkPSJNMjU1Ljg3OCAxMzMuNDUxYzAtMTAuNzM0LS44NzEtMTguNTY3LTIuNzU2LTI2LjY5SDEzMC41NXY0OC40NDhoNzEuOTQ3Yy0xLjQ1IDEyLjA0LTkuMjgzIDMwLjE3Mi0yNi42OSA0Mi4zNTZsLS4yNDQgMS42MjJsMzguNzU1IDMwLjAyM2wyLjY4NS4yNjhjMjQuNjU5LTIyLjc3NCAzOC44NzUtNTYuMjgyIDM4Ljg3NS05Ni4wMjciLz48cGF0aCBmaWxsPSIjMzRhODUzIiBkPSJNMTMwLjU1IDI2MS4xYzM1LjI0OCAwIDY0LjgzOS0xMS42MDUgODYuNDUzLTMxLjYyMmwtNDEuMTk2LTMxLjkxM2MtMTEuMDI0IDcuNjg4LTI1LjgyIDEzLjA1NS00NS4yNTcgMTMuMDU1Yy0zNC41MjMgMC02My44MjQtMjIuNzczLTc0LjI2OS01NC4yNWwtMS41MzEuMTNsLTQwLjI5OCAzMS4xODdsLS41MjcgMS40NjVDMzUuMzkzIDIzMS43OTggNzkuNDkgMjYxLjEgMTMwLjU1IDI2MS4xIi8+PHBhdGggZmlsbD0iI2ZiYmMwNSIgZD0iTTU2LjI4MSAxNTYuMzdjLTIuNzU2LTguMTIzLTQuMzUxLTE2LjgyNy00LjM1MS0yNS44MmMwLTguOTk0IDEuNTk1LTE3LjY5NyA0LjIwNi0yNS44MmwtLjA3My0xLjczTDE1LjI2IDcxLjMxMmwtMS4zMzUuNjM1QzUuMDc3IDg5LjY0NCAwIDEwOS41MTcgMCAxMzAuNTVzNS4wNzcgNDAuOTA1IDEzLjkyNSA1OC42MDJ6Ii8+PHBhdGggZmlsbD0iI2ViNDMzNSIgZD0iTTEzMC41NSA1MC40NzljMjQuNTE0IDAgNDEuMDUgMTAuNTg5IDUwLjQ3OSAxOS40MzhsMzYuODQ0LTM1Ljk3NEMxOTUuMjQ1IDEyLjkxIDE2NS43OTggMCAxMzAuNTUgMEM3OS40OSAwIDM1LjM5MyAyOS4zMDEgMTMuOTI1IDcxLjk0N2w0Mi4yMTEgMzIuNzgzYzEwLjU5LTMxLjQ3NyAzOS44OTEtNTQuMjUxIDc0LjQxNC01NC4yNTEiLz48L3N2Zz4=",
    darkInvert: false,
  },
  {
    id: "apple",
    label: "Continue with Apple",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMzE1Ij48cGF0aCBkPSJNMjEzLjgwMyAxNjcuMDNjLjQ0MiA0Ny41OCA0MS43NCA2My40MTMgNDIuMTk3IDYzLjYxNWMtLjM1IDEuMTE2LTYuNTk5IDIyLjU2My0yMS43NTcgNDQuNzE2Yy0xMy4xMDQgMTkuMTUzLTI2LjcwNSAzOC4yMzUtNDguMTMgMzguNjNjLTIxLjA1LjM4OC0yNy44Mi0xMi40ODMtNTEuODg4LTEyLjQ4M2MtMjQuMDYxIDAtMzEuNTgyIDEyLjA4OC01MS41MSAxMi44NzFjLTIwLjY4Ljc4My0zNi40MjgtMjAuNzEtNDkuNjQtMzkuNzkzYy0yNy0zOS4wMzMtNDcuNjMzLTExMC4zLTE5LjkyOC0xNTguNDA2YzEzLjc2My0yMy44OSAzOC4zNi0zOS4wMTcgNjUuMDU2LTM5LjQwNWMyMC4zMDctLjM4NyAzOS40NzUgMTMuNjYyIDUxLjg4OSAxMy42NjJjMTIuNDA2IDAgMzUuNjk5LTE2Ljg5NSA2MC4xODYtMTQuNDE0YzEwLjI1LjQyNyAzOS4wMjYgNC4xNCA1Ny41MDMgMzEuMTg2Yy0xLjQ5LjkyMy0zNC4zMzUgMjAuMDQ0LTMzLjk3OCA1OS44MjJNMTc0LjI0IDUwLjE5OWMxMC45OC0xMy4yOSAxOC4zNjktMzEuNzkgMTYuMzUzLTUwLjE5OWMtMTUuODI2LjYzNi0zNC45NjIgMTAuNTQ2LTQ2LjMxNCAyMy44MjhjLTEwLjE3MyAxMS43NjMtMTkuMDgyIDMwLjU4OS0xNi42NzggNDguNjMzYzE3LjY0IDEuMzY1IDM1LjY2LTguOTY0IDQ2LjY0LTIyLjI2MiIvPjwvc3ZnPg==",
    darkInvert: true,
  },
];

export default function Login16() {
  return (
    <section className="flex min-h-dvh items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-3 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwMCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE1MDAgMTQ5OS45OTk5MzMiIGhlaWdodD0iMjAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Y2xpcFBhdGggaWQ9IjJiNTYyM2E4MDIiPjxwYXRoIGQ9Ik0gMCAxNTAwIEMgMCAxMTA0Ljk1NzAzMSAxNjAuMDAzOTA2IDcxOC42NzU3ODEgNDM5LjMzOTg0NCA0MzkuMzM5ODQ0IEMgNzE4LjY3NTc4MSAxNjAuMDAzOTA2IDExMDQuOTU3MDMxIDAgMTUwMCAwIEwgMTUwMCAxNTAwIFogTSAwIDE1MDAgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYjI1NjYzNjQwMiI+PHBhdGggZD0iTSAwIDAgTCAxNTAwIDAgTCAxNTAwIDE1MDAgTCAwIDE1MDAgWiBNIDAgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJiNjY1OWMzNjkxIj48cGF0aCBkPSJNIDAgMTUwMCBDIDAgMTEwNC45NTcwMzEgMTYwLjAwMzkwNiA3MTguNjc1NzgxIDQzOS4zMzk4NDQgNDM5LjMzOTg0NCBDIDcxOC42NzU3ODEgMTYwLjAwMzkwNiAxMTA0Ljk1NzAzMSAwIDE1MDAgMCBMIDE1MDAgMTUwMCBaIE0gMCAxNTAwICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImRjMzNmYjgyMjQiPjxyZWN0IHg9IjAiIHdpZHRoPSIxNTAwIiB5PSIwIiBoZWlnaHQ9IjE1MDAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMmI1NjIzYTgwMikiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDAuMDAwMDAwMDAwMDAwMTEyODYxKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2RjMzNmYjgyMjQpIj48ZyBjbGlwLXBhdGg9InVybCgjYjI1NjYzNjQwMikiPjxnIGNsaXAtcGF0aD0idXJsKCNiNjY1OWMzNjkxKSI+PHJlY3QgeD0iLTMzMCIgd2lkdGg9IjIxNjAiIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iMjE1OS45OTk5MDQiIHk9Ii0zMjkuOTk5OTg1IiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
            alt="blockus"
            className="size-8 dark:invert"
          />
          <h1 className="font-semibold text-2xl tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your blockus account
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {socialProviders.map((p) => (
            <button
              key={p.id}
              type="button"
              className="inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.id}
                className={p.darkInvert ? "size-4 dark:invert" : "size-4"}
              />
              {p.label}
            </button>
          ))}
        </div>

        <div className="my-6 flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            or
          </span>
          <Separator className="flex-1" />
        </div>

        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="l16-email"
              className="text-xs font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="l16-email"
              type="email"
              placeholder="you@company.com"
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="l16-pw"
                className="text-xs font-medium text-foreground"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Forgot?
              </a>
            </div>
            <Input
              id="l16-pw"
              type="password"
              placeholder="••••••••"
              className="h-11"
            />
          </div>
          <Button size="lg" className="mt-1 h-11 w-full rounded-xl">
            Sign in
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          New here?{" "}
          <a
            href="#"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </section>
  );
}
