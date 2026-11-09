import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "What is blockus?",
    a: "blockus is a paid catalog of production-ready React sections — heroes, pricing, footers and more — built on shadcn/ui and Tailwind v4.",
  },
  {
    q: "How do I install a block?",
    a: "Wire @blockus in your components.json then run pnpm dlx shadcn@latest add @blockus/<block-id>. The block lands as a single .tsx file with its dependencies.",
  },
  {
    q: "Do I need a Pro account?",
    a: "Free blocks are public. Pro blocks require a token tied to a Solo or Team purchase — generate one from /account/registry-token.",
  },
  {
    q: "Can I use blocks in client work?",
    a: "Yes. The license covers personal, side-hustle and client projects for as long as the URLs resolve.",
  },
  {
    q: "What about refunds?",
    a: "All sales are final. No refunds, no chargebacks, no surprises.",
  },
];

export default function Faqs01({ defaultValue }: { defaultValue?: string }) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm shadow-black/5">
            <Sparkles className="size-3 text-amber-500" />
            FAQ
          </span>
          <h2
            className="text-balance font-semibold tracking-tight"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            Frequently asked questions
          </h2>
          <p className="max-w-xl text-balance text-muted-foreground">
            Quick answers to the questions we get the most. Can&apos;t find
            yours? Write to{" "}
            <a
              href="#"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              hey@blockus.dev
            </a>
            .
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12"
          defaultValue={defaultValue}
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-dashed border-border bg-muted/30 p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background">
              <MessageCircle className="size-4" />
            </span>
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-medium text-foreground">
                Still have a question?
              </p>
              <p className="text-xs text-muted-foreground">
                We reply within four business hours.
              </p>
            </div>
          </div>
          <Button size="sm" className="rounded-full">
            Ask us anything
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
