"use client"

// AsciiArt — "hi", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ff168469-d44e-4363-8295-a6f409f406eb
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GgXFvpTnErwNBVeKsshVdP6M3D/b9c880a0-8f05-43c7-8268-84146c305f22.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GgXFvpTnErwNBVeKsshVdP6M3D/f8546dcd-4d95-4b49-ae66-8470ffc6e271.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"hi — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
