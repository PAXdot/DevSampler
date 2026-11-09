"use client"

// AsciiArt — "پ ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=6ae3e902-638f-42bf-b210-87e7e1afdff3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Dew31pXLxAaHJJEzIGjdgV1L7Z/8e4d2b9d-5ee1-4abc-8693-f83f5d317b0c.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Dew31pXLxAaHJJEzIGjdgV1L7Z/8591a147-c489-499c-a137-b22e3988196e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"پ ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
