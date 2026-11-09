"use client"

// AsciiArt — "dd", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1a07348a-22fd-410c-b953-bd4decd98a67
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HaYozvagbqmJ9f5mWuSZVV8x7d/4376ea89-254e-4b1c-8f41-1e1e7ab601d5.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HaYozvagbqmJ9f5mWuSZVV8x7d/27e9a2a3-a591-4938-be5a-25dbd4cb1e80.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"dd — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
