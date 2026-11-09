"use client"

// AsciiArt — "image", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3267549b-67c8-4dbf-992c-eda61a71a63e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IpdLD1ZWUHnoGS8joq93KWue02/89986ebe-e2ed-4e1f-a3f7-f149dee0e9fc.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IpdLD1ZWUHnoGS8joq93KWue02/2f7f424d-bc97-4970-a24f-b555b90b2f3d.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"image — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
