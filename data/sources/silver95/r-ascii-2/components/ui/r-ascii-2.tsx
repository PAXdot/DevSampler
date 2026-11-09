"use client"

// AsciiArt — "r ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=faa57ea4-bdf7-44bd-a507-41df2366ae9a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3LbkAVcMmNNOBdf8nO2qbSpvDkO/3b5c7aa0-8a93-49c6-8781-9a3ff0db75f1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3LbkAVcMmNNOBdf8nO2qbSpvDkO/cd4ddd0e-295b-4e85-b169-c1d32ce8f065.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"r ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
