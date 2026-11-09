"use client"

// AsciiArt — "ocean-perk", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=83906fcf-c32d-45fc-bcbd-221daf8672ad
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HK6KYaDR69q1pGCGjqg12XEqUK/67f11ad1-8c39-43cd-aac7-9cd86a40da0b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HK6KYaDR69q1pGCGjqg12XEqUK/ced5ff18-d765-456e-b025-f036dd57594b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ocean-perk — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
