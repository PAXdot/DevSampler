"use client"

// AsciiArt — "sdasdsad", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e8a735d6-deb3-47b1-b75a-0e87d90378d3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IjG6ElKYBlyMcXeBN4EcWoCs7M/9c7c46be-4fe1-401a-94e5-c8b1c7bb1f8e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IjG6ElKYBlyMcXeBN4EcWoCs7M/6ce10490-8fcf-44b0-87c3-b1c7e821fc43.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"sdasdsad — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
