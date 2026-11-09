"use client"

// AsciiArt — "hi", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4fa7179b-a435-4d95-98dd-16f0b8de27cd
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KXSbJwjiG4w3svZMt5uhaBeNpl/2dbde7c8-8e70-48d9-8392-ab8673c757ef.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KXSbJwjiG4w3svZMt5uhaBeNpl/6afe79ad-713a-4c6d-8d1a-f00892d27b97.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"hi — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
