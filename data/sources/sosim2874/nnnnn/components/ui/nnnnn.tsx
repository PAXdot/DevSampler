"use client"

// AsciiArt — "nnnnn", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=6c21b46c-9b8f-4f27-ad7c-6492021cc00f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KUa19m74DEABXBWfjfc0Yh6gP0/8cd881e2-9a42-46b0-85e7-5542f4da79a3.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KUa19m74DEABXBWfjfc0Yh6gP0/8d8a6e05-42c6-4a4e-b32e-759fde2d3d07.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"nnnnn — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
