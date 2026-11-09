"use client"

// AsciiArt — "ı ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=9689532d-9c66-408e-9f6b-ba749fec77cb
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_38dTPmnvxt4Ud6smxMnoCiSlKN5/c74eb4a0-254f-4e0e-9ecb-bafbbf58cf63.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_38dTPmnvxt4Ud6smxMnoCiSlKN5/788bc0a2-f980-49bb-a158-81301c7db9ca.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ı ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
