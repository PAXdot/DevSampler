"use client"

// AsciiArt — "Hero - Personal Website", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f3db4ab4-a60e-42c4-8da3-8aa27b59514c
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3DGegI7DSMBe4TOO9tgylJbWneq/375a2230-64b1-4100-8581-e364f782bbe7.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3DGegI7DSMBe4TOO9tgylJbWneq/fc8eb20d-1b76-4d65-b19f-feff221dc91f.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Hero - Personal Website — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
