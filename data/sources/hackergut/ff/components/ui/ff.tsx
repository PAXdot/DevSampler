"use client"

// AsciiArt — "Ff", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=27ca1849-d6bd-4dad-b78d-a6091ea01ffe
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3D5npwPsyCLwGrYO0CGTZIicoJZ/517c2937-44f6-4886-99e8-18e0dd785afb.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3D5npwPsyCLwGrYO0CGTZIicoJZ/de048d91-7cfa-47ae-9ce3-8e47dd88cd76.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Ff — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
