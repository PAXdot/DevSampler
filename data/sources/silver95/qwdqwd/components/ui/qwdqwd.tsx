"use client"

// AsciiArt — "qwdqwd", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=cffdd374-1dd9-4ce4-8846-1f1589b0ec60
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3LbkAVcMmNNOBdf8nO2qbSpvDkO/9e321e4e-c88b-4218-908f-96bbc225f217.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3LbkAVcMmNNOBdf8nO2qbSpvDkO/a415e7d3-840e-48d4-9ff5-5de7b5a7a53b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"qwdqwd — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
