"use client"

// AsciiArt — "malinois", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=dd1b68ae-0143-467e-a716-b346d0086e02
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GsIGtcrqsI0GqBHCSINFZdte2n/f79236c1-1409-4dbb-86d5-8d3d4634fcf1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GsIGtcrqsI0GqBHCSINFZdte2n/3dbf9a1e-d49a-43f3-8d51-711f41cdb4c7.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"malinois — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
