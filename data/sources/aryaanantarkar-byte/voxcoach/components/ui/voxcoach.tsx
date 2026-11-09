"use client"

// AsciiArt — "voxcoach", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=77893b71-4fa7-468d-9330-ba6298fdbec5
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IV3EEx1KZYSIrYJJNibZ1qbaXF/22dcd30f-5986-403c-9792-ebea534fc9b7.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IV3EEx1KZYSIrYJJNibZ1qbaXF/ec9f2d26-d732-451c-bae0-c3961ad1b3d6.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"voxcoach — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
