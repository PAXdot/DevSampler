import { ArrowRight, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Bento02() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Wide top tile */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:col-span-2">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(99,102,241,0.15), transparent)",
              }}
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  What you get
                </span>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Components that ship with production intent — not playground
                  polish.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">
                  Every block is responsive, accessible, and wired to your
                  shadcn token set. Drop them in. Swap the copy. Ship.
                </p>
              </div>
              <Button className="w-fit shrink-0 gap-2">
                Browse catalog <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Bottom-left tile */}
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-muted/40 p-7">
            <div className="grid size-10 place-items-center rounded-xl border border-border bg-background">
              <Code2 className="size-5 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                One-file blocks
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground text-pretty leading-relaxed">
                Each section lives in a single{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">
                  .tsx
                </code>{" "}
                file — no internal dependencies to untangle.
              </p>
            </div>
          </div>

          {/* Bottom-right tile */}
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-muted/40 p-7">
            <div className="grid size-10 place-items-center rounded-xl border border-border bg-background">
              <Layers className="size-5 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                shadcn registry
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground text-pretty leading-relaxed">
                Install any block with a single{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">
                  pnpm dlx shadcn add
                </code>{" "}
                command straight from the registry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
