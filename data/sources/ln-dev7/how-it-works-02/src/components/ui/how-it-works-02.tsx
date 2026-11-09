import { Boxes, Code2, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Boxes,
    title: "Browse the catalog",
    body: "135 production sections across nine categories. Search, filter, preview — pick the block that matches the page you're writing.",
  },
  {
    icon: Code2,
    title: "Install via shadcn",
    body: "One command pulls the source into your project. Theme tokens, shadcn primitives and Tailwind utilities — nothing exotic.",
  },
  {
    icon: ShieldCheck,
    title: "Customize without fear",
    body: "Every block is a single .tsx file you own. Rename, restyle, refactor — the registry won't fight you on the next pull.",
  },
  {
    icon: Rocket,
    title: "Ship",
    body: "Drop your copy, your logo and your CTAs in. Light + dark are already wired. Push to production.",
  },
];

export default function HowItWorks02() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            How it works
          </span>
          <h2
            className="text-balance font-semibold tracking-tight"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            A four-step path from blank page to launched site
          </h2>
        </div>

        <ol className="relative mt-14 flex flex-col gap-6 border-l border-dashed border-border pl-10 sm:pl-12">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[3.65rem] top-1 grid size-9 place-items-center rounded-full border border-border bg-card font-mono text-xs font-semibold text-foreground shadow-sm shadow-black/5 sm:-left-[4.15rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-foreground/5 text-foreground">
                  <s.icon className="size-4" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
