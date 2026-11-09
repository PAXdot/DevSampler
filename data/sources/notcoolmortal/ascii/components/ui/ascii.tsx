"use client"

// AsciiArt — "Ascii", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e2cdbe79-14ab-461c-aa5f-23538e443e9f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Hx4OOe3A5PiN981taQjqkaCN7s/88530d23-3061-45bf-8843-81f07763bdc0.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Hx4OOe3A5PiN981taQjqkaCN7s/93b123cb-79bc-4953-b60a-7aa30a34e588.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Ascii — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
