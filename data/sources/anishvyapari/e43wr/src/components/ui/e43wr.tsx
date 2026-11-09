"use client"

// AsciiArt — "e43wr", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=b8874cef-a342-48a0-acb4-895d9e37ddb2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3E2E1aDt396bqtuPMbJwCpklsdB/40667e7b-3da8-4af1-be68-1374672018c1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3E2E1aDt396bqtuPMbJwCpklsdB/df6e8f09-1b3e-43ab-8024-e9b64815c4ec.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"e43wr — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
