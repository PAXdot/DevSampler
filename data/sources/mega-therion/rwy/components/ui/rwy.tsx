"use client"

// AsciiArt — "rwy", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=99a349e1-c9dc-4a8b-afab-f7c5977760ca
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CpsqMwSgeCNfy8G4Dke8Mb2ZXo/ba62905a-5255-488d-b9e4-0ecc0cbb2534.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CpsqMwSgeCNfy8G4Dke8Mb2ZXo/6a19ff14-eb23-4423-99b1-9ab761307d1a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"rwy — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
