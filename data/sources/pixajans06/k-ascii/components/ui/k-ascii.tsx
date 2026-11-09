"use client"

// AsciiArt — "k ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f2f5b946-a02b-402a-9449-ce2f70a7d206
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IqcrzbWYl02cSVl55gOEC9prEa/08df8d2d-2bfe-4335-82ea-ac93ad3a7be9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IqcrzbWYl02cSVl55gOEC9prEa/5e915177-2c3c-4fda-931f-9450953bf66d.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"k ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
