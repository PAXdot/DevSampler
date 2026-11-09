import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register02() {
  return (
    <section className="flex min-h-dvh items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md text-center">
        <h1
          className="text-balance font-semibold tracking-tight"
          style={{
            fontSize: "clamp(1.85rem, 4.5vw, 2.75rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Start free, no card needed
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          One field, magic link in your inbox, instant access to the free
          catalog.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col items-center gap-2 rounded-full border border-border bg-card p-1.5 sm:flex-row">
          <Mail className="ml-3 size-4 shrink-0 text-muted-foreground" />
          <Input
            type="email"
            placeholder="you@company.com"
            className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none"
          />
          <Button size="lg" className="w-full rounded-full sm:w-auto">
            Get started
            <ArrowRight />
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          By signing up, you agree to the Terms and Privacy.
        </p>
      </div>
    </section>
  );
}
