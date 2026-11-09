"use client"

// AsciiArt — "aircraft cabin", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9373e012-fc02-4707-b8b3-11ee84449359
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FiWvlvyf1NFbcyefLxuzu1GsyU/b32adfcd-6f06-4ec4-8b04-e3c0dc068671.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FiWvlvyf1NFbcyefLxuzu1GsyU/0850bb48-a789-48b8-8e93-d6b55dcc59a0.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"aircraft cabin — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
