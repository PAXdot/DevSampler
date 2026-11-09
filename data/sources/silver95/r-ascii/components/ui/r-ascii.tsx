"use client"

// AsciiArt — "r ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f429d4d5-22d7-4291-bb72-5162fb60858f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3LbkAVcMmNNOBdf8nO2qbSpvDkO/a3e0780b-ef9b-410c-9e57-f9726d585823.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3LbkAVcMmNNOBdf8nO2qbSpvDkO/8b82f63f-8825-4a94-a03d-a2287e2e630c.webp"}
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
