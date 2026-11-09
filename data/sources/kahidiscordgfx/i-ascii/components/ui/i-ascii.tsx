"use client"

// AsciiArt — "i ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=437659e1-1ab3-4d9c-bf43-4abf80f37f2a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IW6HlntCji0XlisdUV6Clh71Lz/ced8351b-7a50-4a7d-b6b0-386dac854e31.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IW6HlntCji0XlisdUV6Clh71Lz/f3d56771-6902-4972-afce-3a4de6eb19e3.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"i ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
