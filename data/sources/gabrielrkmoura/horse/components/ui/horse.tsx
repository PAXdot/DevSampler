"use client"

// AsciiArt — "horse", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7b91cb61-9f6f-4d7f-8709-d1b24678116a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IYfaLoQPa1Jf5j0m69TKDDfEwa/4a17c0fb-a39a-4e81-8911-f74650195b75.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IYfaLoQPa1Jf5j0m69TKDDfEwa/8729175b-91b7-405d-8862-e291bfbd2d8e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"horse — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
