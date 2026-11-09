"use client"

// AsciiArt — "Neon", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=97a1bb0c-f163-4ed1-ae5b-21cc6f8077ad
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IYfaLoQPa1Jf5j0m69TKDDfEwa/ce99bcc3-ee61-4456-9669-c9d4998f57ad.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IYfaLoQPa1Jf5j0m69TKDDfEwa/8b392b60-15f3-4fa7-ac32-560456799523.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Neon — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
