"use client"

// AsciiArt — "codeflower", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=0ed8ba77-85f6-4ffc-8c55-ba3eb1f8b1c4
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Fl1Ez6hxsmGQpWy3qtxwiFabJ4/11152ac7-e716-4aed-b18a-e341d757ad95.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Fl1Ez6hxsmGQpWy3qtxwiFabJ4/0e51d3a7-4ab7-43d9-aed8-01efc22e13b2.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"codeflower — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
