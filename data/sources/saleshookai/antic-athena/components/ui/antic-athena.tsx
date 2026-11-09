"use client"

// AsciiArt — "antic athena", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4f181888-20f1-4120-9b1f-1e37222cecdc
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IDeKmRXeR3wRaMfn2TI1zIYRRy/ade49d6b-87c5-405c-ae12-159044c70398.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IDeKmRXeR3wRaMfn2TI1zIYRRy/493ccc74-36fc-4995-afaa-61f8e0092ca9.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"antic athena — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
