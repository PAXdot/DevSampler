import { ArrowRight, Clock, Mail, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact01() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="grid size-10 place-items-center rounded-full bg-foreground/5 text-foreground">
            <Mail className="size-5" />
          </span>
          <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
            Get in touch
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            Drop us a note and we&apos;ll get back within one business day.
          </p>
        </div>

        <form className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" id="c1-name" placeholder="Ada Lovelace" />
            <Field
              label="Email"
              id="c1-email"
              placeholder="you@company.com"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="c1-msg"
              className="text-sm font-medium text-foreground"
            >
              How can we help?
            </label>
            <textarea
              id="c1-msg"
              rows={5}
              placeholder="Tell us a bit about your project."
              className="flex w-full rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
            />
          </div>
          <Button type="submit" size="lg" className="h-11 w-full rounded-lg">
            Send message
            <ArrowRight />
          </Button>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3" />
              Replies in &lt; 24h, business days
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3 text-emerald-500" />
              We never share your message
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <Input id={id} type={type} placeholder={placeholder} className="h-11" />
    </div>
  );
}
