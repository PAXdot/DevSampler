"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Working with them transformed our entire brand identity. The attention to detail was exceptional.",
    name: "Sarah Chen",
    role: "CEO at Stripe",
    image: "https://cdn.21st.dev/assets/mirror/35/35fdcc7cf8871b8df04c1e545285bf0c93adbc412fae645f24764424bd4b52e6.jpg",
  },
  {
    quote: "A rare talent who combines strategic thinking with flawless execution. Highly recommended.",
    name: "Marcus Johnson",
    role: "Design Lead at Linear",
    image: "https://cdn.21st.dev/assets/mirror/f4/f47db08b6a3f20c4ed49c9ffb0de2b92b2b7075492a2469f7cbd433fb8f2cf11.jpg",
  },
  {
    quote: "The most seamless collaboration I've experienced. They truly understand modern design.",
    name: "Elena Voss",
    role: "Founder at Notion",
    image: "https://cdn.21st.dev/assets/mirror/c2/c22a0186c2852a27849f7dce836af61b261f395252b9501bd3d3f44a6d6ec691.jpg",
  },
]

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-16">
      {/* Quote */}
      <div className="relative min-h-[80px] mb-12">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-foreground
              transition-all duration-500 ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm pointer-events-none"
              }
            `}
          >
            "{t.quote}"
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-6">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-background
                transition-all duration-300 ease-out
                ${active === i ? "z-10 scale-110" : "grayscale hover:grayscale-0 hover:scale-105"}
              `}
            >
              <Image src={t.image || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-border" />

        {/* Active Author Info */}
        <div className="relative flex-1 min-h-[44px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center
                transition-all duration-400 ease-out
                ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
              `}
            >
              <span className="text-sm font-medium text-foreground">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
