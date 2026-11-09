"use client"

// AsciiArt — "Agents Odyssey", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=d0928d41-b32a-42b3-b6ab-f90bc55b0d3a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3E58J0dlpBNJOiOFx1s2HhsiRfy/7afe3c32-5f0f-49d1-8408-62934084a069.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3E58J0dlpBNJOiOFx1s2HhsiRfy/da3d0b23-59ea-4644-916a-85b185b77407.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Agents Odyssey — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
