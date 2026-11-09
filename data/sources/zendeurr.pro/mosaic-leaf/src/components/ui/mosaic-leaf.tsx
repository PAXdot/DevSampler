"use client"

// AsciiArt — "MOSAIC leaf", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=121c1be4-a78d-4e4b-9749-0d716ce0af98
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GObjJe4MtmTZs0SSVfVnBc4ULD/8b6667a3-6b0f-4188-bcd8-fd14a3391248.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GObjJe4MtmTZs0SSVfVnBc4ULD/7f9bed03-1da8-499c-85b4-0ddf0d9a5c50.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"MOSAIC leaf — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
