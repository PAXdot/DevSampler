"use client"

// AsciiArt — "thread paint", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=0996d3f6-3cb5-4f4e-8828-398c5d47c98e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GfOHB2dxQI7kZ41USLqxbqthoO/e066e2fd-d43b-4508-a073-e4bd3c475074.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GfOHB2dxQI7kZ41USLqxbqthoO/62e70811-e1f9-4691-b4a1-92140338364f.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"thread paint — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
