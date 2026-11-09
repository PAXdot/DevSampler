"use client"

// AsciiArt — "Star Pixel", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1dbb2a63-3252-4484-b369-69a2396d9405
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2tq52u8PbE3so9K0NqiNxb4ASkm/6d27154c-49b6-4905-af19-cb517c53d44f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2tq52u8PbE3so9K0NqiNxb4ASkm/07a6ae82-919b-4ea1-9dea-71787be391ba.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Star Pixel — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
