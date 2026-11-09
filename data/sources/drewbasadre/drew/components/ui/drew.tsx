"use client"

// AsciiArt — "DREW", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=86889966-dff2-4c3a-9a76-eaa5772f28ef
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IzVGsR1xhTvq2dg2XAWWRN83b4/ee28d0c2-dc6d-4cf4-bbcd-04f7f3c77339.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IzVGsR1xhTvq2dg2XAWWRN83b4/b74823a1-158f-4d40-80da-72452c45aac0.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"DREW — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
