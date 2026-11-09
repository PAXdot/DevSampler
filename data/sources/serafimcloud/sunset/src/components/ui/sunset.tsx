"use client"

// AsciiArt — "Sunset", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=005d1754-9a88-415c-a8c2-cc339d36e569
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2nA0HITg0H7hvozIDNdxvzinpei/1783619454083-44r1ma.webm"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2nA0HITg0H7hvozIDNdxvzinpei/1783619454766-p6wk5k.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Sunset — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
