"use client"

// AsciiArt — "jesus post", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fc33c888-2a99-45ab-8976-b3713d5a93b2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IxmIg8YxRrgo3ncioPxBYV01Jh/b9315de0-910e-4bc9-a5db-10918b8a2ace.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IxmIg8YxRrgo3ncioPxBYV01Jh/9282fdfc-1fee-4ce0-a12b-85af45cc77ff.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"jesus post — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
