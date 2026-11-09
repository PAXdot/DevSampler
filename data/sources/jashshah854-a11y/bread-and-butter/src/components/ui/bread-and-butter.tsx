"use client"

// AsciiArt — "Bread and Butter", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=015c6cbd-d837-4672-9aa7-1e20d373c40a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_35dXCb8T858HYP5Y3RlDAYfeaum/2f99638f-fd89-4266-9de5-09a6aa52f955.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_35dXCb8T858HYP5Y3RlDAYfeaum/8c6162ac-7882-442f-8a89-fc9e04e0ae6e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Bread and Butter — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
