"use client"

// AsciiArt — "Mint ASCII Dot Field Light Background", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=36f337ce-9e7c-47df-a8da-7b108ecca7a6
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_35e5ygDqQuDYzujLgyG9331zPPO/72fbeaab-fa28-4c2f-b4ae-8cf7c4fbe234.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_35e5ygDqQuDYzujLgyG9331zPPO/875c0728-6fd9-4794-8bd9-b655dd463206.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Mint ASCII Dot Field Light Background — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
