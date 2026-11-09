"use client"

// AsciiArt — "artezonafoda", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=12202d44-d1a4-4ab1-a817-783cd5980425
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3JpZtySPiZq2XA75VOODBfgK8kw/9d3597fb-af03-4f6d-9f44-d25c2d4678c2.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3JpZtySPiZq2XA75VOODBfgK8kw/5ba2f958-723e-42ef-b1c3-d27d7427dd24.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"artezonafoda — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
