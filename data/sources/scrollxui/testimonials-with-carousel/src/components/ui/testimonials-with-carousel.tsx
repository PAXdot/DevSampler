"use client";

import { motion } from "motion/react";
import TestimonialCarousel from "@/components/ui/testimonials-with-carousel-utils/testimonial-carousel";

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
    name: "Michael Torres",
    handle: "Lead Developer",
    description:
      "Implementation was seamless from start to finish. The code quality is exceptional and everything just works out of the box.",
    image:
      "https://cdn.21st.dev/assets/mirror/5e/5e2959ec60419c0dd90c7c1d6fe2b50a6334b5495d180131742fef8c8cb7643a.jpg",
  },
  {
    name: "Jessica Park",
    handle: "Design Systems Lead",
    description:
      "The component architecture is brilliant. It's flexible enough for complex use cases yet simple enough for quick prototypes.",
    image:
      "https://cdn.21st.dev/assets/mirror/cf/cf87875707a408c5a445fb287cb40c8121b468996f931f864892253eeebcc4e6.jpg",
  },
  {
    name: "Robert Kim",
    handle: "Senior Engineer",
    description:
      "Finally, a library that doesn't sacrifice performance for aesthetics. Everything runs smoothly even on lower-end devices.",
    image:
      "https://cdn.21st.dev/assets/mirror/6c/6c800a5869718c11e3e0ffd4465b52c996b0e96e9dbfcb8c379fa1f34fa5d9d2.jpg",
  },
];

export default function TestimonialsCarousel() {
  const title = "Built for teams who ship fast";
  const titleWords = title.split(" ");

  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight">
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
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            Join thousands of professionals building better products
            <br className="hidden sm:block" />
            with components that just work.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="w-full"
        >
          <TestimonialCarousel data={testimonials} borderType="solid" />
        </motion.div>
      </div>
    </section>
  );
}
