import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Beverley",
    role: "Co-Founder NYZ",
    image: "https://cdn.21st.dev/assets/mirror/de/de09c41554565177d6ebe1f4103ef8036cf560c6f882196448520790acd0fb71.jpg",
    quote:
      "Joining the program dramatically improved my writing skills and thought leadership, resulting in a notable increase in inbound leads. It's a life-changing experience.",
    rating: 5,
    videoThumbnail: "https://cdn.21st.dev/assets/mirror/02/021f2fc7a68802db3d47dc966c6f08bd613cfd02b8d1bc6731ccaedfc8613183.jpg",
  },
  {
    name: "Marcus Aurelius",
    role: "Founder Stoic Mind",
    image: "https://cdn.21st.dev/assets/mirror/1c/1c8384a1a82aa7fe0b841c36925eec91ecdbe6ff93bb322dd39b0b82914939f7.jpg",
    quote:
      "Lara's frameworks for personal branding are unparalleled. In six months, we've seen engagement rates triple across our primary social channels.",
    rating: 5,
    videoThumbnail: "https://cdn.21st.dev/assets/mirror/d8/d8e0f6baac0b2c79a65cfb299e700d1d77c9e7ad126f92f453ee68de548f72f7.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO GrowthLab",
    image: "https://cdn.21st.dev/assets/mirror/ee/ee78c67847ba27922257d1dfb6683a5ef5fcc8351d48285033b9f54f729e31c2.jpg",
    quote:
      "The clarity and depth of the mentorship provided exceeded all expectations. It's not just about numbers; it's about building a sustainable legacy.",
    rating: 5,
    videoThumbnail: "https://cdn.21st.dev/assets/mirror/bc/bcc6098e7e2b6f036c65e98f9ae3b8c0ddfd5e70df465d39162d5058fa2d51b9.jpg",
  },
];

export const TestimonialBasic = () => {
  return (
    <section className="bg-background text-foreground font-dmSans py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto border-x border-border">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground font-semibold uppercase tracking-widest">
            « Testimonials »
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase">
            Social Proof.
          </h2>
        </div>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-12  border-y border-border",
              i % 2 === 1 && "lg:direction-rtl",
            )}
          >
            <div className="lg:col-span-7 p-6 bg-muted overflow-hidden aspect-video relative group cursor-pointer">
              <div className="absolute pointer-events-none bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,var(--border)_0px_1px,transparent_1px_8px)] "></div>

              <img
                src={t.videoThumbnail}
                className="w-full h-full relative z-10 object-cover transition-transform duration-300 rounded-2xl"
                alt={`Testimonial Video ${i}`}
              />
              <div className="absolute bottom-8 left-8 z-10 bg-black/50 backdrop-blur px-6 py-3 rounded-2xl border border-white/20">
                <span className="text-white font-mono text-sm tracking-tighter">
                  04:32 // HD_PLAYBACK
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 border-l border-border">
              <div className="flex gap-2 items-center border-b p-2 bg-muted/50 border-border relative">
                <div className="absolute pointer-events-none  bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,var(--border)_0px_1px,transparent_1px_8px)] "></div>
                <div className="relative z-10 size-16 rounded-3xl overflow-hidden bg-muted border-4 border-background">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black uppercase tracking-tight text-foreground">
                    {t.name}
                  </h4>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-3xl font-medium text-foreground/90 font-manrope">
                  "{t.quote}"
                </p>

                <div className="flex gap-2 mt-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-lg">
                      <Star className="fill-yellow-400 stroke-yellow-400 size-6" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialBasic;
