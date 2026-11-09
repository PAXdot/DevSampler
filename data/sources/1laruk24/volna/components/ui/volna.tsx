"use client"

// AsciiArt — "volna", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7d39e061-a490-4554-82e7-d2a214412611
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KKCySIu1YzRxxbLey8Hihazo1c/98cf7614-09cf-4f83-b99d-9cf4ddfb7c64.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KKCySIu1YzRxxbLey8Hihazo1c/7fdcfa37-cb43-4daa-9c87-76fd9ff51a24.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"volna — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
