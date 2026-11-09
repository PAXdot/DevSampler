"use client"

// AsciiArt — "USS", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fda8ff9f-a8f6-439d-8557-f1490c2306e6
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FUPLeY5ayOz7rm8Knytc8YH56C/74a5d2d5-14c2-4c31-a052-9a27a4390b5a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FUPLeY5ayOz7rm8Knytc8YH56C/bf895924-5aa6-4493-99b0-55aa77278048.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"USS — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
