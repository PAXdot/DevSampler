"use client"

// AsciiArt — "Gradient pixelated", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=948de54d-89aa-46e5-8e14-26e5e8e4eb20
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3J2n8Du05CxVGLZ3limKVrWfgCf/4c5e7aa7-116f-4c01-8121-d7f5986eff8a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3J2n8Du05CxVGLZ3limKVrWfgCf/0f20698d-101f-4820-9779-a194b9df3d8b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Gradient pixelated — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
