"use client"

// AsciiArt — "house cyber", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3c42dfae-f847-42d6-8589-384d9339d379
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_33Cfp7ZLk6wpJXcIY5m0pA2w8wx/f7a0ec5d-478c-4882-8e6d-d067e3010315.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_33Cfp7ZLk6wpJXcIY5m0pA2w8wx/38445f03-84bc-4303-9cf0-3beae6cd4c58.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"house cyber — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
