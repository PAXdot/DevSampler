"use client"

// AsciiArt — "Portrait art", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=83b9d6b4-744a-40e0-b910-476e0a39c010
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3JMmumEavjmhEdbf09SqCAjMkRs/a7f58d86-c12e-451a-ad0a-9aa71013d2b1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3JMmumEavjmhEdbf09SqCAjMkRs/67c9dc7d-6f5c-42c3-b787-eb827ec39b8e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Portrait art — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
