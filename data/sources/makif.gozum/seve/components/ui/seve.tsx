"use client"

// AsciiArt — "seve", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=8ee70cfc-aab6-41c0-90d8-f6bf6b3d5c9f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IYMXN5a1CTrHtSuea741NTrlOC/67c47291-8e9a-4493-a10a-529c52052f3b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IYMXN5a1CTrHtSuea741NTrlOC/07ed1f64-931a-447b-ada3-283bddb24ca9.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"seve — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
