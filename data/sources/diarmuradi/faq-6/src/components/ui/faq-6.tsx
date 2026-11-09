"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Account",
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
    title: "Support",
    items: [
      {
        value: "item-4",
        trigger: "How can I contact customer support?",
        content:
          "You can reach our support team via live chat, email, or phone. We're available 24/7 to help.",
      },
      {
        value: "item-5",
        trigger: "Do you provide weekend assistance?",
        content:
          "Yes, our support team is available 7 days a week, including weekends and holidays.",
      },
      {
        value: "item-6",
        trigger: "Is live chat support available?",
        content:
          "Yes, live chat support is available during business hours. For after-hours issues, please email us.",
      },
    ],
  },
  {
    title: "Security",
    items: [
      {
        value: "item-9",
        trigger: "How secure is my data?",
        content:
          "We use bank-level encryption and comply with industry standards. All data is encrypted at rest and in transit.",
      },
      {
        value: "item-10",
        trigger: "Do you have two-factor authentication?",
        content:
          "Yes, we offer two-factor authentication for enhanced account security. You can enable it in your security settings.",
      },
      {
        value: "item-11",
        trigger: "How often do you conduct security audits?",
        content:
          "We conduct comprehensive security audits quarterly and perform continuous monitoring to detect and prevent threats.",
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        value: "item-7",
        trigger: "How long does it take to process a payment?",
        content:
          "Most payments are processed within 1-2 business days depending on your payment method.",
      },
      {
        value: "item-8",
        trigger: "Are refunds handled automatically?",
        content:
          "Yes, refunds are processed automatically and typically appear in your account within 3-5 business days.",
      },
    ],
  },
];

export function Faq() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-3 md:items-center md:text-center">
        <p className="w-fit rounded-lg bg-muted px-3 py-2 text-sm text-foreground">
          Two columns
        </p>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A compact knowledge base
          </h1>
          <p className="max-w-xl text-muted-foreground md:text-center">
            Account, payments, security, and support sit side by side so you can
            compare topics.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="flex flex-col gap-2">
            <h2 className="ml-1 text-sm font-medium text-muted-foreground">
              {category.title}
            </h2>
            <Accordion
              defaultValue={[category.items[0]?.value]}
              className="gap-2"
            >
              {category.items.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="overflow-hidden rounded-lg border-none bg-muted"
                >
                  <AccordionTrigger className="px-4 text-sm text-muted-foreground hover:no-underline aria-expanded:text-foreground">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 px-4 pb-2 text-balance text-foreground">
                    <p className="text-sm">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-0.5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-center">
        <span>Still have questions? Email us at</span>
        <Button
          variant="link"
          className="h-auto p-0 text-foreground"
          render={<a href="mailto:user@example.com" />}
          nativeButton={false}
        >
          user@example.com
        </Button>
      </div>
    </div>
  );
}
export default Faq;
