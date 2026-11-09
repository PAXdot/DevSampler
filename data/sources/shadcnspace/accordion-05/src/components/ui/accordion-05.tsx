import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-05-utils/accordion";
import { MonitorIcon, PaletteIcon, RocketIcon } from "lucide-react";

const items = [
  {
    icon: RocketIcon,
    title: "How do you support early-stage startups?",
    content:
      "We guide your team through setup, so you can focus on what matters most — from tooling to workflows, we handle the groundwork.",
    media:
      "https://cdn.21st.dev/assets/localized/9f5df5e945f52c174c43fbd18d412b31463bf252521f7fc5564b2ea18f037462.webp",
  },
  {
    icon: MonitorIcon,
    title: "What does your web design process look like?",
    content:
      "We design and develop high-performing websites focused on user experience, from wireframes to a fully production-ready build.",
    media:
      "https://cdn.21st.dev/assets/localized/dca11de75e078b0716692f8dd88e74ab1e4a57929370429860f48d661a8c651a.webp",
  },
  {
    icon: PaletteIcon,
    title: "Can you help define our brand identity?",
    content:
      "We create distinctive visual identities and design systems that make your brand stand out and stay consistent across every touchpoint.",
    media:
      "https://cdn.21st.dev/assets/localized/6a55a44b2cd082fc2827ae061f9212f67cf1913ac3ecba26a67e0067f95a74ae.webp",
  },
];

const AccordionMediaDemo = () => (
  <div className="flex items-center justify-center w-full max-w-lg">
    <Accordion defaultValue={["item-0"]} className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="px-4 py-3 cursor-pointer hover:no-underline items-center">
            <span className="flex items-center gap-4">
              <item.icon className="size-4 shrink-0 text-muted-foreground" />
              <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <p className="text-muted-foreground">{item.content}</p>
            <img
              src={item.media}
              alt={item.title}
              width={520}
              height={200}
              className="w-full h-40 rounded-lg object-cover"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default AccordionMediaDemo;
