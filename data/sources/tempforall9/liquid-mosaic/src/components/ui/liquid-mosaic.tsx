"use client"

// AsciiArt — "liquid Mosaic", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=a04a984a-fbb9-4a43-b832-89967a9e58dc
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GfOHB2dxQI7kZ41USLqxbqthoO/901ba98b-5354-446d-bf23-938fb4e4a983.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GfOHB2dxQI7kZ41USLqxbqthoO/358558cd-41ea-4b1d-9484-2332b71ff086.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"liquid Mosaic — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
