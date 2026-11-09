"use client"

// AsciiArt — "11", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=99d1251e-d453-47ab-80df-464a73d0da20
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3DrMKEDK99JLlQBJdGcDDzTziSU/11343539-2bdc-475c-8d06-a1d3acfa9ca1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3DrMKEDK99JLlQBJdGcDDzTziSU/743786d5-4a87-4faa-b1e9-edb3431504a5.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"11 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
