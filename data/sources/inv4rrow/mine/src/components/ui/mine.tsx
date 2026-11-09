"use client"

// AsciiArt — "mine", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=159dbc65-b7a2-4b3f-9b15-a30be451a30f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GUBCXV06fu3rRHNyGC2652vX0C/2661fb00-a685-438b-89eb-cea614c392d0.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GUBCXV06fu3rRHNyGC2652vX0C/b53adfc8-9d18-4f96-9bd3-71a222aec9ca.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"mine — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
