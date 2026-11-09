"use client"

// AsciiArt — "c-block-art", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=870e2d39-90c8-46c0-a1b2-b582450a0a4a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KuFwj08VJcvyOOv6Lzth0dXcFG/e2e23139-707d-43c3-8926-263e2d18dcc9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KuFwj08VJcvyOOv6Lzth0dXcFG/a214aa3d-fdbc-417f-be30-0d4ab1002d31.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"c-block-art — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
