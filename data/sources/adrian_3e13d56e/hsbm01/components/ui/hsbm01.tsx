"use client"

// AsciiArt — "HSBM01", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=b8b9d979-f9bf-4d40-bf1e-52a3011694d0
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IG2Io0rsXtUuIzS2n9dzDJkvYo/24308d29-0eb6-440f-8ad6-8d7f39f2eba8.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IG2Io0rsXtUuIzS2n9dzDJkvYo/48c59314-9171-477d-a089-3ed4526eb124.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"HSBM01 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
