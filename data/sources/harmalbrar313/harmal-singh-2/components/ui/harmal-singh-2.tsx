"use client"

// AsciiArt — "Harmal Singh", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=288cdec4-ccbf-4b43-bc59-370bb1735544
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3J7kgPTg8DjpYxJQPLZhUpuMVIn/249f34c5-9b09-40fb-93c2-94210887c13a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3J7kgPTg8DjpYxJQPLZhUpuMVIn/24250bfe-d271-45dd-8817-fe8bbfd2667a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Harmal Singh — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
