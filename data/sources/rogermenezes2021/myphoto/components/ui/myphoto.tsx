"use client"

// AsciiArt — "myphoto", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=2e0dd402-bfdb-471f-b59d-0e27532b96c9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H5EFdbMDxJHEyMLGmhtjHXiEVc/83ebd913-43a4-4074-b872-3fe689ee9648.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H5EFdbMDxJHEyMLGmhtjHXiEVc/e0769f52-93de-4558-9487-5783ec0ec9ec.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"myphoto — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
