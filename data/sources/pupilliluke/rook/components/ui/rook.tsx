"use client"

// AsciiArt — "Rook", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=844ebd16-eadd-4a80-a948-def3973db1c5
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CacQpPcoob7HUmZ61NEDPm61eS/ba5af74e-ebdd-4a77-af19-68572476dc3f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CacQpPcoob7HUmZ61NEDPm61eS/8aa8e05d-118a-4705-bd7a-b8b71ca28c2e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Rook — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
