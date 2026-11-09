"use client"

// AsciiArt — "Night shift", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=329fad92-92ce-4706-aaf6-5ad21e4f301c
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3JKCv1vRA9zO605V1lvyfebZwhq/fd213834-0a35-443e-b24d-efa555d2091f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3JKCv1vRA9zO605V1lvyfebZwhq/26268be9-e300-4f65-b700-5ddce74e0628.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Night shift — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
