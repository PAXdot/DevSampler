"use client"

// AsciiArt — "MRX Brain 2", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=138a7c62-3330-43fa-9846-429b142c1977
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_32TAi07xdNkdI5Ranggnq6Ofdht/537b7aba-5521-49e6-aad6-6022dc35b8a2.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_32TAi07xdNkdI5Ranggnq6Ofdht/669cf3be-c6af-438b-860e-eab7f325ceb9.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"MRX Brain 2 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
