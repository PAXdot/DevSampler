"use client"

// AsciiArt — "Asher Ascii", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=a56a9c25-6f58-4951-ba16-15e46995a526
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_30Z4TAnxZmHEKqc0zKYuo9vexqg/412ff887-7fe9-4f07-b942-6d2956bddd0d.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_30Z4TAnxZmHEKqc0zKYuo9vexqg/337ec0ab-bfdb-4bdf-8104-f410c69706d3.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Asher Ascii — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
