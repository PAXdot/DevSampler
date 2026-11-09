"use client"

// AsciiArt — "nm", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=499319c3-231d-4444-87de-7c9981970913
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_30XIKFZ370uhAIEjYnAUVACE5e3/8bb18be3-c64f-4b68-9f09-73e66c6d2602.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_30XIKFZ370uhAIEjYnAUVACE5e3/e0e7cd29-ec3d-4f34-a90f-0cc3f15dc33e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"nm — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
