"use client"

// AsciiArt — "FLACOROQUE", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4d2f555b-348f-4cdc-b4e7-ae8e787daca1
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HQahdVdEJuG9L9afn8wGBlEevR/5dfc036d-bd4f-4eaf-8b14-6b02da4f5d6e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HQahdVdEJuG9L9afn8wGBlEevR/a008703d-217b-4dd8-8943-4b16a84ca63a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"FLACOROQUE — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
