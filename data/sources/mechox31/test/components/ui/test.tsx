"use client"

// AsciiArt — "test", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=8f0535eb-cfad-4b33-a89a-39176cda1ec3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3AUK929ru4GQKFksE4EIl1PBMKg/a2ef95fd-a298-41e5-8ac0-ed51c6688dad.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3AUK929ru4GQKFksE4EIl1PBMKg/8cacb152-83c0-4d85-b238-9afa3a9f55f7.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"test — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
