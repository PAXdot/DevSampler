"use client"

// AsciiArt — "vivy", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=81512407-ea0b-4617-8d9e-bfb12ef3c68f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GQrwUDKpsyNq0SMmXL8amwbOL7/5735109e-ac3d-42cc-b998-4e95618bee98.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GQrwUDKpsyNq0SMmXL8amwbOL7/ab2cfce6-168c-4197-9601-5b12bb83f8dd.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"vivy — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
