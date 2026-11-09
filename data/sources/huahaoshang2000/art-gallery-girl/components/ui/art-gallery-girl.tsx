"use client"

// AsciiArt — "art gallery girl", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=c4a35453-228b-4a88-9b2a-3d64bbd56d12
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3ItvGfzzxzK23S0i9ptl83odeMQ/5cdee0e3-7f77-4876-a447-a252a25223e8.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3ItvGfzzxzK23S0i9ptl83odeMQ/ed3c601b-ba96-45db-8e25-610955d4aa91.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"art gallery girl — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
