"use client"

// AsciiArt — "Launching", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9b0f9825-da34-4405-a771-29cb9e6e4d87
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Iv7n5RHw816CC0u0vuO02vDpCH/bb3baa0c-77e2-427a-88f2-4083c6eb9735.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Iv7n5RHw816CC0u0vuO02vDpCH/45dc514e-0d23-4918-88a2-95270c2cd9e2.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Launching — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
