"use client";

import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/testimonials-with-marquee-utils/animated-testimonials";

const testimonials = [
  {
    name: "Sarah Mitchell",
    handle: "Product Designer",
    description:
      "The attention to detail is incredible. Every interaction feels polished and intentional. My clients are always impressed with the final results.",
    image:
      "https://cdn.21st.dev/assets/mirror/ab/abfd988df99ad1cd0699bfaa882a628cb8424f5f7b98fb9970cee590a7753de2.jpg",
  },
  {
    name: "David Chen",
    handle: "Frontend Developer",
    description:
      "Best component library I've used. Clean code, great performance, and the documentation actually makes sense. Saved me weeks of development time.",
    image:
      "https://cdn.21st.dev/assets/mirror/5e/5e2959ec60419c0dd90c7c1d6fe2b50a6334b5495d180131742fef8c8cb7643a.jpg",
  },
  {
    name: "Maria Santos",
    handle: "Creative Director",
    description:
      "Finally found a tool that bridges the gap between design and development. The animations are smooth and the customization options are endless.",
    image:
      "https://cdn.21st.dev/assets/mirror/cf/cf87875707a408c5a445fb287cb40c8121b468996f931f864892253eeebcc4e6.jpg",
  },
  {
    name: "James Anderson",
    handle: "Full Stack Engineer",
    description:
      "Integration was seamless. No bloat, no unnecessary dependencies. Just clean, performant components that work exactly as expected.",
    image:
      "https://cdn.21st.dev/assets/mirror/6c/6c800a5869718c11e3e0ffd4465b52c996b0e96e9dbfcb8c379fa1f34fa5d9d2.jpg",
  },
  {
    name: "Priya Sharma",
    handle: "UI/UX Designer",
    description:
      "The design system is thoughtfully crafted. Every component feels cohesive and the accessibility features are built-in from the start.",
    image:
      "https://cdn.21st.dev/assets/mirror/95/95c08556a36889c260285b5b464643aa0f5ee6e77b741834d4202d823213b6b2.jpg",
  },
  {
    name: "Alex Turner",
    handle: "Tech Lead",
    description:
      "Our team productivity doubled after switching. The components are reliable, well-tested, and the support has been exceptional.",
    image:
      "https://cdn.21st.dev/assets/mirror/0a/0a4f9dc6307f3ff1e1e77f5d08e5194239e64f808c54ec8c406b53cf9833cbaa.jpg",
  },
  {
    name: "Emma Williams",
    handle: "Startup Founder",
    description:
      "Helped us launch our MVP in record time. The quality is top-notch and it scales beautifully as our product grows.",
    image:
      "https://cdn.21st.dev/assets/mirror/e1/e1dd5aa9669d0b229fc3827746852fb3c9c765d3ef5f7e9b432aec4d4f454cb2.jpg",
  },
  {
    name: "Ryan Martinez",
    handle: "Software Architect",
    description:
      "Impressed by the architecture. The components are modular, maintainable, and integrate perfectly with our existing tech stack.",
    image:
      "https://cdn.21st.dev/assets/mirror/5b/5b76c36638841a20cf6880b7183962127f909bd6d612a682f8b11e4049b68add.jpg",
  },
];

export default function TestimonialsMarquee() {
  const titleWords = "Trusted by developers worldwide".split(" ");

  return (
    <section className="relative w-full bg-background">
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex flex-col items-center gap-4 text-center py-12 md:py-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${word}-${index}`}
                initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl px-4"
          >
            See what developers and designers are saying about their experience
            building with our components.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="w-full"
        >
          <AnimatedTestimonials data={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
