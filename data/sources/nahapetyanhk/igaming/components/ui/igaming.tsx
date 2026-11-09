"use client"

// AsciiArt — "Igaming", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e635cd2e-f85f-4310-b10d-0454abbeb656
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GAroirCEU7zMUanuQUMQET2Bkj/2d53c970-6433-460f-8841-08710a004aa4.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GAroirCEU7zMUanuQUMQET2Bkj/8ba8b356-6cdf-4f59-a9a4-fd9d53ccc8a2.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Igaming — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
