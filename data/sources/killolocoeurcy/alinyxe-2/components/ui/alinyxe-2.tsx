"use client"

// AsciiArt — "Alinyxe", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ea932b38-1f33-42a2-9141-385999ea1dc9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3BRg6PyisstXC1zlxhG66cyXdXC/04345830-0e38-4879-b25a-984eb0c8b9ff.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3BRg6PyisstXC1zlxhG66cyXdXC/9f5d9f38-d914-49c9-87c2-149027b5e507.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Alinyxe — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
