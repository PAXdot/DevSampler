"use client"

// AsciiArt — "Tree Massivo Corp", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4640f621-ddf1-49d7-87d4-1a4b3401b54b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HndcNed68bInJp2c1LKM23BqGO/eb7da572-229e-46d8-b573-536f3cb428a5.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HndcNed68bInJp2c1LKM23BqGO/415145a7-ca82-4611-95a1-093c5c08b7a5.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Tree Massivo Corp — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
