import { Lock, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorBlock() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <span
          className="flex size-14 items-center justify-center rounded-lg border border-border bg-muted/40"
          aria-hidden="true"
        >
          <Lock className="size-6" />
        </span>
        <p className="mt-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Error 403
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Access denied
        </h1>
        <p className="mt-3 text-sm text-pretty text-muted-foreground">
          You don&apos;t have permission to view this page. If you think this is
          a mistake, ask a workspace admin to grant you access.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button render={<a href="#" />} nativeButton={false}>
            <ArrowLeft data-icon="inline-start" aria-hidden="true" />
            Back to dashboard
          </Button>
          <Button
            render={<a href="#" />}
            nativeButton={false}
            variant="outline"
          >
            Request access
          </Button>
        </div>
      </div>
    </section>
  );
}
