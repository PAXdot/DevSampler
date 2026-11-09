"use client"

// AsciiArt — "Neon mosaic", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=164f4470-6b13-4880-a126-a02eba1ac352
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FiWvlvyf1NFbcyefLxuzu1GsyU/a1e56566-d7b2-4a56-8da3-9ab7d6e0d8a0.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FiWvlvyf1NFbcyefLxuzu1GsyU/dfdd5b98-3f26-43d3-b840-06a936c63db5.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Neon mosaic — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
