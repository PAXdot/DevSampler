import { ArrowRight, Clock, Mail, MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "What's included in Pro?",
    a: "All 135+ blocks, every category, lifetime updates and registry access from /account/registry-token.",
  },
  {
    q: "Can my team share one license?",
    a: "Pro is per-seat. Team plans include up to 10 seats with a per-user token each.",
  },
  {
    q: "What stack is required?",
    a: "Next.js (App Router) with React 19, Tailwind v4 and shadcn/ui. Older versions might work but aren't officially supported.",
  },
  {
    q: "Are blocks responsive?",
    a: "Every block reads from ~380px to full desktop. Mobile drawers and stacked layouts ship with each section.",
  },
  {
    q: "Do you handle dark mode?",
    a: "Yes — every block uses shadcn CSS variables so it adapts to either theme out of the box.",
  },
];

export default function Faqs02() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-24 flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm shadow-black/5">
              FAQs
            </span>
            <h2
              className="text-balance font-semibold tracking-tight"
              style={{
                fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              Your questions answered
            </h2>
            <p className="text-sm text-muted-foreground">
              Quick answers from the team. Still stuck? Write to{" "}
              <a
                href="#"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                hey@blockus.dev
              </a>{" "}
              and a real person replies.
            </p>

            <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background">
                  <MessageCircle className="size-4" />
                </span>
                <div className="flex flex-col leading-tight">
                  <p className="text-sm font-medium text-foreground">
                    Talk to a human
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <Clock className="mr-1.5 inline size-3" />
                    Replies in &lt; 4h
                  </p>
                </div>
              </div>
              <Button size="sm" className="mt-2 w-full rounded-full">
                Open a ticket
                <ArrowRight />
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">
                <Mail className="mr-1 inline size-3" />
                Or email{" "}
                <a
                  href="mailto:hey@blockus.dev"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  hey@blockus.dev
                </a>
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
