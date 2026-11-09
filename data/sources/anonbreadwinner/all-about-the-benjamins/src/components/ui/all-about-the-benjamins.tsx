"use client"

// AsciiArt — "All about the Benjamins", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=b1fb93e5-0750-45f9-9d2e-e50334a4f4bd
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_39EaRfg2w8uEmTqnT3x185d0oOr/1de89c57-edf2-4bd5-9649-02f69b1b2974.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_39EaRfg2w8uEmTqnT3x185d0oOr/039443d3-dc1c-495f-9418-9f0474c93bf9.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"All about the Benjamins — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
