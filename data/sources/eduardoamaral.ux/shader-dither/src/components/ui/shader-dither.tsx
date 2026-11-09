"use client"

// AsciiArt — "shader-dither", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=969bed9f-1f18-4ac5-bf63-1a979f3c1c4b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_31mZqQPdNteKeKMn1g1Rtu19xhE/3c4c8e4b-538d-4b45-9bbe-16440f266e36.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_31mZqQPdNteKeKMn1g1Rtu19xhE/174039d6-9c34-41ca-b988-1b530a820725.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"shader-dither — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
