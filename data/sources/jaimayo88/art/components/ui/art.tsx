"use client"

// AsciiArt — "art", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=6cc75507-1e60-4624-8a2d-af79a9cf28fa
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Iisow6W9Q3uZaewApO9g3i5mas/ab528c6c-1d79-4727-9183-c337b5a2a453.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Iisow6W9Q3uZaewApO9g3i5mas/73f9dfb0-4261-4157-b58a-55156f18b0cc.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"art — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
