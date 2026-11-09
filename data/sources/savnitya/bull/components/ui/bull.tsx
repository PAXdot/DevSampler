"use client"

// AsciiArt — "bull", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3d7f66cc-d435-41f4-a836-e4b1f40a2392
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_33plgKAPWvgH1cptLSFAUXCFisX/0614b9e3-45d7-4341-9086-5f8e4c708c13.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_33plgKAPWvgH1cptLSFAUXCFisX/d63eba1e-269c-4704-b3f9-5b4190e08fcb.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"bull — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
