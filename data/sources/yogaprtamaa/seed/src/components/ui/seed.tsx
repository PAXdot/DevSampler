"use client"

// AsciiArt — "seed", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=cd259084-3acd-4023-afb7-eba4a922e32e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3AW1sqZEzZdEq77JgHt3sgdaFvv/b2c86cc6-1775-4a9f-ba6b-09ff673d3735.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3AW1sqZEzZdEq77JgHt3sgdaFvv/46af2156-f726-44a6-ab1c-8cc5098df036.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"seed — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
