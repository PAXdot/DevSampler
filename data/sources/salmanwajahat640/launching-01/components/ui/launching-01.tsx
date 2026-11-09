"use client"

// AsciiArt — "Launching 01", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=dfe3d791-f0d7-499d-8418-b78120711983
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Iv7n5RHw816CC0u0vuO02vDpCH/1c8b392c-27c1-43c4-8bfd-04338f9e102a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Iv7n5RHw816CC0u0vuO02vDpCH/05199cd2-c79d-4ccf-9e6b-bfdf475040e8.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Launching 01 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
