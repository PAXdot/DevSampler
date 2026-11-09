"use client"

// AsciiArt — "Hands&Robots", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=2d6d36e5-362a-4f13-ab5d-fe4d47ac5a58
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_39fTAsFSOAdJca54oHwUmSEkUSJ/61ab41fd-bd47-4f0c-bd22-3a5ba777864f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_39fTAsFSOAdJca54oHwUmSEkUSJ/4c5c2c9c-41e3-4fad-b951-636ba59f5a7f.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Hands&Robots — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
