"use client"

// AsciiArt — "random", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f7cd7a74-62cb-466f-aa93-97d60a4909eb
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_39cJU9MlvZ7lFFhLnpeSXY2H9Fc/843767e1-bb68-4b40-9a91-f4a646027cbd.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_39cJU9MlvZ7lFFhLnpeSXY2H9Fc/41868373-c34d-4fee-a20c-0c71b9613a4d.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"random — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
