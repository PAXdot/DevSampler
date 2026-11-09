"use client"

// AsciiArt — "VKTRED", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=74092686-f73e-445e-aca6-5bae6b5dac48
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Jt70bkBzdoRrCLrsxk1Je3d4ty/0279c83d-a4b3-4a3c-89b4-7fce72d27fcb.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Jt70bkBzdoRrCLrsxk1Je3d4ty/348d1241-e5bd-4c32-b7ea-01aae2bef561.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"VKTRED — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
