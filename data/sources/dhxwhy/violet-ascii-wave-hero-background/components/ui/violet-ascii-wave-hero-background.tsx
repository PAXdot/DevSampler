"use client"

// AsciiArt — "Violet ASCII Wave Hero Background", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9c594509-0c0d-41dd-a3d5-7bba8bd9c5ae
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_35e5ygDqQuDYzujLgyG9331zPPO/37c397e7-fbdb-439a-9af9-fdf1048fd8e8.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_35e5ygDqQuDYzujLgyG9331zPPO/ee93c8b2-e9f0-4a33-b7f9-ec826a04fd1a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Violet ASCII Wave Hero Background — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
