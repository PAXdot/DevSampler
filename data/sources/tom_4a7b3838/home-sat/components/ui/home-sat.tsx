"use client"

// AsciiArt — "home sat", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ce2c8afc-0b5f-4654-a13d-ccbc9b6521f1
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_33Cfp7ZLk6wpJXcIY5m0pA2w8wx/3ea7b94f-db6e-4648-994c-3e9d313c96b1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_33Cfp7ZLk6wpJXcIY5m0pA2w8wx/f747886a-c0cf-4973-8403-bb49340e3652.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"home sat — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
