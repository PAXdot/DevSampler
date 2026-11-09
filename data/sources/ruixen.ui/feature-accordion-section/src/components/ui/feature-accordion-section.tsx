"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function FeatureAccordionSection() {
  const features = [
    {
      id: "item-1",
      title: "AI-Powered Automation",
      count: 24,
      image: "https://cdn.21st.dev/assets/mirror/60/60f1fc317cc965fa57d1bb420b79a441aaebc281f64fceda8b7bff238686177d.png",
      description: "Streamline workflows with cutting-edge AI solutions."
    },
    {
      id: "item-2",
      title: "Real-Time Analytics",
      count: 12,
      image: "https://cdn.21st.dev/assets/mirror/5b/5be809c811b5c484f4f36c477a13b0af7da32fdd20512c7f6c2c38e681e32afa.png",
      description: "Monitor metrics live and make instant decisions."
    },
    {
      id: "item-3",
      title: "Seamless Integrations",
      count: 18,
      image: "https://cdn.21st.dev/assets/mirror/6c/6c1a829d1b4c7e47d0916ff1ab901e414b6943ca338094e2bbbdba35da4e5446.png",
      description: "Connect with tools you already use effortlessly."
    },
    {
      id: "item-4",
      title: "Scalable Infrastructure",
      count: 30,
      image: "https://cdn.21st.dev/assets/mirror/ff/ff0d274d6f15232322c8938fc0c067cb4a70ef4e568b8b61256f8254749f9374.png",
      description: "Grow without limits with enterprise-grade scalability."
    },
    {
      id: "item-5",
      title: "Advanced Security",
      count: 15,
      image: "https://cdn.21st.dev/assets/mirror/20/2031f6bb254c24c8b8a09849f20bcc0069e804d1a827a301634fbc03a7965247.png",
      description: "Protect your data with next-gen encryption & compliance."
    },
    {
      id: "item-6",
      title: "Collaboration Tools",
      count: 22,
      image: "https://cdn.21st.dev/assets/mirror/60/60f1fc317cc965fa57d1bb420b79a441aaebc281f64fceda8b7bff238686177d.png",
      description: "Empower teams with seamless communication & sharing."
    }
  ];
  


  return (
    <div className="flex flex-col w-full max-w-xl mx-auto border rounded-xl shadow-sm bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 p-4">
      <Accordion type="single" collapsible className="w-full">
        {features.map((feature) => (
          <AccordionItem
            key={feature.id}
            value={feature.id}
            className="border-b border-gray-200 dark:border-neutral-700"
          >
            <AccordionTrigger className="flex items-center gap-3 py-3 text-left">
              <Image
                src={feature.image}
                alt={feature.title}
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="flex-1 font-medium">{feature.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({feature.count})
              </span>
            </AccordionTrigger>

            <AccordionContent className="px-2 pb-4 pt-2 space-y-3">
              {/* Big Image when expanded */}
              <div className="w-full flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              {/* Text below the image */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {feature.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
