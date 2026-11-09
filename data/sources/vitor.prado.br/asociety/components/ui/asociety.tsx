"use client"

// AsciiArt — "asociety", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e3c678bc-d9df-4498-a2b0-0dae603651fc
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HYcX6MlpA9VpWjEodke2X1wfv2/71676349-1cb3-42a9-a2e6-58a62b9a1999.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HYcX6MlpA9VpWjEodke2X1wfv2/14f2ec74-6ddb-425d-813f-d47f3c817790.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"asociety — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
