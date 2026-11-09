"use client"

// AsciiArt — "demon", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4c2993a6-159a-4e95-978c-81ae0acad758
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HAzfMfK5vE7FQhY6d9VMy3VNVt/2ca3636d-db79-40e1-aaeb-23ec0d11bb12.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HAzfMfK5vE7FQhY6d9VMy3VNVt/12f4a548-f1e1-4bdc-8cca-f709af674f1a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"demon — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
