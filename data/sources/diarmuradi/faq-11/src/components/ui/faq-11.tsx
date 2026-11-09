"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/faq-11-utils/accordion";
import { FancyButton } from "@/components/ui/fancy-button";

const categories = [
  {
    title: "Account",
    description: "Manage profile & settings.",
    items: [
      {
        value: "item-1",
        trigger: "How do I change my email address?",
        content:
          "You can update your email address in your account settings. We'll send a verification link to confirm the change.",
      },
      {
        value: "item-2",
        trigger: "Can I update my payment details online?",
        content:
          "Yes, you can update your payment information anytime in the billing section of your account settings.",
      },
      {
        value: "item-3",
        trigger: "What should I do if I forget my password?",
        content:
          "Click 'Forgot Password' on the login page and follow the reset instructions sent to your email.",
      },
    ],
  },
  {
    title: "Payments",
    description: "All about transactions.",
    items: [
      {
        value: "item-4",
        trigger: "How long does it take to process a payment?",
        content:
          "Most payments are processed within 1-2 business days depending on your payment method.",
      },
      {
        value: "item-5",
        trigger: "Are refunds handled automatically?",
        content:
          "Yes, refunds are processed automatically and typically appear in your account within 3-5 business days.",
      },
    ],
  },
  {
    title: "Support",
    description: "Get help when needed.",
    items: [
      {
        value: "item-6",
        trigger: "How can I contact customer support?",
        content:
          "You can reach our support team via live chat, email, or phone. We're available 24/7 to help.",
      },
      {
        value: "item-7",
        trigger: "Do you provide weekend assistance?",
        content:
          "Yes, our support team is available 7 days a week, including weekends and holidays.",
      },
      {
        value: "item-8",
        trigger: "Is live chat support available?",
        content:
          "Yes, live chat support is available during business hours. For after-hours issues, please email us.",
      },
      {
        value: "item-9",
        trigger: "Where can I find detailed guides?",
        content:
          "Our comprehensive knowledge base with guides and tutorials is available in the help section.",
      },
    ],
  },
];

export function Faq() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="w-fit rounded-md bg-muted p-2 text-sm text-foreground">
            Three columns
          </p>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Account, payments & support
            </h1>
            <p className="text-muted-foreground">
              Pick a column, then open the question that matches what you need.
            </p>
          </div>
        </div>
        <FancyButton size="lg" className="w-fit shrink-0">
          Email the team
        </FancyButton>
      </header>

      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        {categories.map((category) => (
          <div key={category.title} className="flex flex-1 flex-col gap-8">
            <div className="flex min-w-fit flex-col gap-1">
              <h2 className="text-lg font-semibold">{category.title}</h2>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
            <Accordion
              defaultValue={[category.items[0]?.value]}
              className="gap-2"
            >
              {category.items.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="rounded-xl border-none bg-card shadow-elevated-sm"
                >
                  <AccordionTrigger className="px-4 py-3.5 text-sm text-muted-foreground hover:no-underline aria-expanded:text-foreground">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 px-4 pb-3 text-balance text-foreground">
                    <p className="text-sm">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Faq;
