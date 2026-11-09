"use client"

// AsciiArt — "Perpective", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ba6f7850-b985-4866-9ac2-da6a3c166f4c
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Hp1HSRJOXDZ6hUrjw9rmynYidR/b5fb1ba0-8f9e-46f7-a6f7-62748b1f7fb5.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Hp1HSRJOXDZ6hUrjw9rmynYidR/feba6770-afd7-4d67-b773-23ccf7cd97b8.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Perpective — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
