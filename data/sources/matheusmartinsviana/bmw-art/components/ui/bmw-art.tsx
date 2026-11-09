"use client"

// AsciiArt — "bmw-art", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f99c43be-fa3c-431c-b131-17aba6531d0b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3AMtxAFlBJHwJFz6TtJ49qTpHV7/0fbc675f-48d1-4d2f-933e-59a99a68fa25.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3AMtxAFlBJHwJFz6TtJ49qTpHV7/3cf5ca29-cb92-4fd2-85bf-5cb513751506.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"bmw-art — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
