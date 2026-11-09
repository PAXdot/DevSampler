"use client"

// AsciiArt — "is1s", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fbc3e167-d04f-4bc9-8c99-a5a4568ee7c7
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HdhXqtaGNK6PDvN2DFY8vAT2Sr/30dd9942-021a-4262-9ad7-20b0bc1d8cdb.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HdhXqtaGNK6PDvN2DFY8vAT2Sr/7ba15b21-ac91-44e0-a191-c43a1096cb7e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"is1s — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
