"use client"

// AsciiArt — "Amber ASCII Code Rain Background", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=d84dcde3-2cbf-4230-a2f7-fd2f8ccf2ef3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_35e5ygDqQuDYzujLgyG9331zPPO/17d7aff0-7b31-4341-851a-cab3eebb932e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_35e5ygDqQuDYzujLgyG9331zPPO/47ffac05-bed0-40cc-97d4-126941d30c00.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Amber ASCII Code Rain Background — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
