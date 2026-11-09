"use client"

// AsciiArt — "Green Nature", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=0b151047-db2f-41f5-97aa-186ad61773a8
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3JduwPFUxnRcyWntxnIQCggO9Pd/7c9855fa-b49d-439b-b2f8-89b1e6fa8e9f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3JduwPFUxnRcyWntxnIQCggO9Pd/89a94325-8cb4-4f52-9d52-cbd4c2c5fc72.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Green Nature — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
