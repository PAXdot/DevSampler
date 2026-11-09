// This is file of your component
// You can use any dependencies from npm; we import them automatically in package.json

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is hari7261?",
    answer: "hari7261 is a comprehensive digital identity and workflow platform designed to streamline your operations. It centralizes your tools and automates repetitive tasks so you can focus on high-impact work.",
  },
  {
    question: "Do I need technical skills to use hari7261?",
    answer: "No. hari7261 is built with a no-code interface. You can simply connect your apps, choose a workflow, and let the platform do the rest. Our support team is also available to help you set everything up.",
  },
  {
    question: "Which apps can I connect to hari7261?",
    answer: "We support integration with over 5000+ popular apps including Slack, Salesforce, HubSpot, Gmail, Notion, and many more. If it has an API, hari7261 can likely connect to it.",
  },
  {
    question: "How long does setup take?",
    answer: "Most basic workflows can be set up in under 15 minutes. More complex enterprise integrations with hari7261 typically take a few days with the help of our dedicated onboarding team.",
  },
  {
    question: "Is my data safe with hari7261?",
    answer: "Absolutely. hari7261 uses enterprise-grade encryption (AES-256) and is fully SOC 2 Type II compliant. Your data is never used to train public AI models and remains strictly yours.",
  },
  {
    question: "Can I change or cancel my hari7261 plan?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your billing dashboard. No hidden fees or long-term lock-ins.",
  },
];

const noiseBg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

export const Component = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Hardcoded dark mode by applying the 'dark' class directly
    <div className="dark min-h-screen w-full flex flex-col items-center py-16 sm:py-24 px-4 sm:px-6 relative font-sans bg-background text-foreground transition-colors duration-500">
      
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: noiseBg }}
      />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 mt-2 sm:mt-8 w-full">
          <p className="text-[10px] sm:text-xs font-medium tracking-widest text-gray-400 uppercase mb-3 sm:mb-4 transition-colors">
            FAQ
          </p>
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl text-gray-100 leading-[1.15] sm:leading-tight transition-colors px-2"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Got questions?
            <br />
            we've got answers
          </h1>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[oklch(0.205_0_0)] rounded-xl sm:rounded-2xl border border-white/[0.05] overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start sm:items-center justify-between p-5 sm:p-7 text-left focus:outline-none group cursor-pointer"
                >
                  <span 
                    className="text-[16px] sm:text-[19px] text-gray-200 pr-4 leading-snug transition-colors"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Icon container */}
                  <div className={cn(
                    "relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 shrink-0 mt-0.5 sm:mt-0",
                    isOpen && "bg-white/10" 
                  )}>
                    <Plus 
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                        isOpen && "rotate-45"
                      )} 
                      strokeWidth={1.5} 
                    />
                  </div>
                </button>

                {/* 
                  The Fix: Specific transition property instead of 'transition-all'.
                  We only transition grid-template-rows and opacity. This prevents the browser 
                  from trying to animate layout properties, completely eliminating desktop lag.
                */}
                <div 
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0 text-gray-400 text-[14px] sm:text-[15px] leading-relaxed transition-colors">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};