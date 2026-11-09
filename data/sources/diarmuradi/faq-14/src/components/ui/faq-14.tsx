"use client";

import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/faq-14-utils/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FancyButton } from "@/components/ui/faq-14-utils/fancy-button";
import {
  CreditCardIcon,
  MailIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  UserIcon,
} from "lucide-react";

type Category = "account" | "billing" | "support";

const items = {
  account: [
    {
      id: "a1",
      trigger: "How do I create an account?",
      content:
        "Click the 'Sign Up' button, enter your email, create a password, and verify your email address.",
    },
    {
      id: "a2",
      trigger: "Can I change my email address?",
      content: "Yes, you can update your email in account settings.",
    },
    {
      id: "a3",
      trigger: "How do I reset my password?",
      content:
        "Click 'Forgot Password' on the login page and follow the emailed instructions.",
    },
    {
      id: "a4",
      trigger: "Can I delete my account?",
      content:
        "Yes, you can request account deletion through the privacy dashboard.",
    },
    {
      id: "a5",
      trigger: "Can I have multiple accounts?",
      content:
        "Our terms allow one personal account per user, but you can manage multiple organizations.",
    },
  ],
  billing: [
    {
      id: "b1",
      trigger: "What payment methods do you accept?",
      content: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      id: "b2",
      trigger: "Do you offer refunds?",
      content: "We offer a 30-day money-back guarantee for new subscriptions.",
    },
    {
      id: "b3",
      trigger: "Can I change my plan anytime?",
      content:
        "Yes, you can upgrade or downgrade in settings; changes are prorated.",
    },
  ],
  support: [
    {
      id: "s1",
      trigger: "How do I contact support?",
      content:
        "Our support team is available 24/7 via live chat, email, and phone.",
    },
    {
      id: "s2",
      trigger: "How long does response take?",
      content: "We typically respond within 1-2 hours during business hours.",
    },
    {
      id: "s3",
      trigger: "Do you have a knowledge base?",
      content:
        "Yes, our comprehensive help center is available at help.example.com.",
    },
  ],
};

const TABS: {
  label: string;
  value: Category;
  icon: ReactNode;
}[] = [
  {
    label: "Account",
    value: "account",
    icon: <UserIcon className="size-4" />,
  },
  {
    label: "Billing",
    value: "billing",
    icon: <CreditCardIcon className="size-4" />,
  },
  {
    label: "Support",
    value: "support",
    icon: <MailIcon className="size-4" />,
  },
];

export function Faq() {
  const defaultTab = TABS[0]?.value as string;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">Help by team</p>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Account, billing, or support
          </h1>
          <p className="text-muted-foreground">
            Choose a team on the left, then open the matching questions.
          </p>
        </div>
      </header>

      <Tabs
        defaultValue={defaultTab}
        orientation="vertical"
        className="flex w-full flex-col gap-6 md:flex-row md:gap-10"
      >
        <TabsList className="flex h-auto w-full flex-row gap-1 bg-transparent p-0 md:w-44 md:flex-col">
          {TABS.map(({ value, label, icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="h-auto w-full justify-start gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground shadow-none after:hidden data-active:bg-muted! data-active:font-medium data-active:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-none!"
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map(({ value }) => (
          <TabsContent key={value} value={value} className="min-w-0 flex-1">
            <Accordion className="gap-1" defaultValue={[items[value][0]?.id]}>
              {items[value].map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-none transition-all duration-200 data-open:rounded-2xl data-open:bg-card data-open:shadow-elevated-sm"
                >
                  <AccordionTrigger className="px-4 py-3.5 text-left hover:no-underline">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 px-4 pb-4 text-muted-foreground">
                    <p className="text-sm leading-relaxed">{item.content}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ThumbsUpIcon className="size-3.5" />
                        Helpful
                      </Button>
                      <Button variant="outline" size="sm">
                        <ThumbsDownIcon className="size-3.5" />
                        Not helpful
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      <FancyButton size="lg" className="w-fit">
        Reach support
      </FancyButton>
    </div>
  );
}
export default Faq;
