"use client"

// AsciiArt — "фыв", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=641821f9-075e-46a5-9771-0f2df8b8fc4f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3D2g6FYeqAqSi3o8hTcoqOW07p3/6af8fb8e-43b8-4984-abb4-a535f786f08c.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3D2g6FYeqAqSi3o8hTcoqOW07p3/68e59bb2-d4a7-44ed-95aa-4ba48a5f95dd.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"фыв — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
