"use client"

// AsciiArt — "Maestro", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ca59acb3-aca9-443b-b60a-59270081c02f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GipwIJrMw3ZdAWF5gPrHE3Xeds/6c92176d-6567-49bc-8361-9c6e90ac90e2.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GipwIJrMw3ZdAWF5gPrHE3Xeds/c403ad5c-cbc6-4b41-b376-3af3ae381821.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Maestro — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
