"use client"

// AsciiArt — "ORAN G", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fa2e2d36-c488-4035-b02b-642e4d2cca81
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Jh8kdrLNnkNtZhxSrvmktIc7Vd/2668790f-6996-4321-9342-74708500d05f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Jh8kdrLNnkNtZhxSrvmktIc7Vd/525bffa9-c614-4ff7-84b9-f83e094ebf2d.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ORAN G — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
