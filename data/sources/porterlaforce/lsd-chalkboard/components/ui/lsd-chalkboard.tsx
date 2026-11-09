"use client"

// AsciiArt — "LSD Chalkboard", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=eda6ecc7-0727-4634-ac8f-e00f145e7a71
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3ASkgxd9kEFesZUlxhVMsWYdK14/4e20ee39-27f7-471d-962d-1709c657e3fc.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3ASkgxd9kEFesZUlxhVMsWYdK14/4687fad4-2aaf-459d-b31b-5d87990d008b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"LSD Chalkboard — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
