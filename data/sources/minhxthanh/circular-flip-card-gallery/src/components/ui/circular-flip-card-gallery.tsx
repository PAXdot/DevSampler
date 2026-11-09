"use client"

import { useState, useEffect, useRef } from "react"

// A simple utility for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(" ")

// --- Card Data ---
// Using more diverse and high-quality images for a better visual experience.
const cardData = [
  {
    image: "https://cdn.21st.dev/assets/mirror/b4/b48cd6d1662acc58a514c6655d8df9462d1bde6870c863eb1dc9cbaffafefd15.jpg",
    title: "Golden Hour",
    description: "Capturing the perfect moment when day meets night",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/d8/d8e03b0a34b16f4cce8b9011a9ad0f9f18862eaef24d08d7f0bbe7a9ede703e8.jpg",
    title: "Paradise Found",
    description: "Escape to pristine beaches and crystal waters",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/e2/e2e7fc4d30ed0337a1a7273ba576c742c6ed6677d98c435bed2db1d38db80dac.jpg",
    title: "Vintage Memories",
    description: "Preserving moments with timeless elegance",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/e3/e34c823ec4fa485797892276fdca7616d93fa2ef6f3926e04b81672a5d9d690d.jpg",
    title: "Natural Beauty",
    description: "Finding art in nature's simplest forms",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/56/569269c7c4de17ecdaadc88f7aec799e21c820bd5214e1b2d43b6de228702128.jpg",
    title: "Creative Expression",
    description: "Where imagination meets artistic vision",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/a4/a4da7a1ce1203c3d97a29a4eae3a77d1bec90995a99ba7a40710f0254810f7c9.jpg",
    title: "Mountain Majesty",
    description: "Standing tall among nature's giants",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/eb/eba8370996e14eb2f69178b3857a4a98f708fc8c10a8fabb3cfc8ce25ef699d6.jpg",
    title: "Urban Lines",
    description: "Geometry and light in modern spaces",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/d4/d4b8f001b66f5fae8a83120b4e0fbe52f0bfbb640c9aa457dcdedd9d60245b02.jpg",
    title: "Warm Moments",
    description: "Finding comfort in life's simple pleasures",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/d4/d469e605872a697525fdb2482388e0bcfddecbc6b610578edff61b90af24f1ed.jpg",
    title: "Cosmic Wonder",
    description: "Exploring the infinite beauty above us",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/79/79842801c3900f8da1b262dd8fcf300b7ddef4194ce2a396faaafbeee3b1dd0d.jpg",
    title: "Nature's Path",
    description: "Following trails through seasonal beauty",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/da/da39decf78c3303999ff62cc842ab2f53fd6945f24d334c79d31311c59825362.jpg",
    title: "Pure Design",
    description: "Elegance through thoughtful simplicity",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/d9/d96332609c9c9c31758bc75b763acf09a22de6494f8e624434aa1ec2d89280ef.jpg",
    title: "Ocean Power",
    description: "Witnessing nature's raw energy and grace",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/0c/0cf03dd0af62455060f5c4816fe2c3342e26b5aacb1de3f84e099744593f5263.jpg",
    title: "Knowledge Keeper",
    description: "Stories waiting to be discovered",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/63/63c172bf64fd7eb5ce2e0cb3217d0fa237b16ab20cd161ac1f648da83010b84d.jpg",
    title: "Night Lights",
    description: "When the city comes alive with energy",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/36/368a93444188175016494efc38a5dfc4fe4df16a6154cbfaa5df4507db7e1767.jpg",
    title: "Desert Dreams",
    description: "Finding beauty in vast, open spaces",
  },
  {
    image: "https://cdn.21st.dev/assets/mirror/d3/d34278f1870e3f607335be259caeead4199f5fed7a739489ff8d424261bd7659.jpg",
    title: "Weathered Journey",
    description: "Stories carved by time and tide",
  },
]

// --- FlipCard Component ---
// Converted custom CSS to Tailwind classes for a unified styling approach.
function FlipCard({ image, title, description, className, style }) {
  return (
    <div
      className={cn(
        "group w-24 h-32 md:w-28 md:h-36 rounded-xl [perspective:1000px] transition-transform duration-300 ease-in-out hover:scale-110",
        className,
      )}
      style={style}
    >
      <div className="relative w-full h-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side - Image */}
        <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover rounded-xl border border-neutral-700"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "https://cdn.21st.dev/assets/mirror/ba/badf6456f451245d991aebbb4a109059d375bc9b9019a3203048a4b3ededc39b.svg"
            }}
          />
        </div>
        {/* Back side - Title and Description */}
        <div className="absolute inset-0 rounded-xl bg-neutral-900 border border-neutral-700 flex flex-col items-center justify-center p-3 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="font-bold text-xs md:text-sm text-neutral-100 mb-1 text-balance">{title}</h3>
          <p className="text-[10px] md:text-xs text-neutral-400 text-pretty leading-snug">{description}</p>
        </div>
      </div>
    </div>
  )
}

// --- Main App Component (Circular Gallery) ---
export default function CircularGallery() {
  const galleryRef = useRef(null)
  const [size, setSize] = useState(0)
  const [rotation, setRotation] = useState(0)

  // Effect for responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (galleryRef.current) {
        const gallerySize = galleryRef.current.offsetWidth
        setSize(gallerySize)
      }
    }

    updateSize() // Initial size

    // Use ResizeObserver for better performance than window resize listener
    const resizeObserver = new ResizeObserver(updateSize)
    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  // Effect for animation loop
  useEffect(() => {
    let animationFrameId
    // Slowed down the animation for a more subtle effect
    const animate = () => {
      setRotation((prevRotation) => prevRotation + 0.00005)
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const radius = size * 0.4 // 40% of the container size
  const centerX = size / 2
  const centerY = size / 2

  return (
    // Main container with dark background and Inter font
    <main className="font-sans bg-[#0A0A0A] text-[#F5F5F5] min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div
        ref={galleryRef}
        className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[650px] aspect-square flex items-center justify-center"
      >
        {/* Central text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center text-balance mb-3 leading-tight [text-shadow:0_4px_10px_rgba(0,0,0,0.5)]">
            The Future is Built on Artificial Intelligence
          </h1>
          <p className="text-sm md:text-base text-neutral-400 uppercase tracking-widest font-medium">
            Hover to Explore
          </p>
        </div>

        {/* Circular arrangement of cards */}
        {size > 0 &&
          cardData.map((card, index) => {
            // Calculation to position cards in a circle
            const angle = (index / cardData.length) * 2 * Math.PI - Math.PI / 2 + rotation
            const x = centerX + radius * Math.cos(angle)
            const y = centerY + radius * Math.sin(angle)

            return (
              <FlipCard
                key={index}
                {...card}
                className="absolute hover:z-20"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${(angle + Math.PI / 2) * (180 / Math.PI)}deg)`,
                }}
              />
            )
          })}
      </div>
    </main>
  )
}
