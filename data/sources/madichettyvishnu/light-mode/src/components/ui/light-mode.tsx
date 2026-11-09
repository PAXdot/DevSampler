"use client"

// AsciiArt — "light mode", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7db84f5b-edf1-489c-9f4e-8e83530dc789
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3BDsysVu3WGuohsPQWdLSbzDhLY/1413971c-9d3b-42b0-b8b2-ec4b93db9589.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3BDsysVu3WGuohsPQWdLSbzDhLY/bb06ddd7-8890-4310-8cc5-2ffdb9f5db51.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"light mode — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
