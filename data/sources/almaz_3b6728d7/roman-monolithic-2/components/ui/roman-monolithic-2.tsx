"use client"

// AsciiArt — "Roman Monolithic", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9f964b74-1481-4f4d-9669-f9c0eacce9d4
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Huc0lifNrRRTlCXGouaMYtBnCN/fde36904-e79b-4067-b909-434d19566d76.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Huc0lifNrRRTlCXGouaMYtBnCN/72cc4c90-1d14-4107-b144-e76f1d721f05.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Roman Monolithic — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
