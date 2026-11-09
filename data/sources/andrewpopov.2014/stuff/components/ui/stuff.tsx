"use client"

// AsciiArt — "stuff", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f08f45fa-7479-401c-80e0-16321a5a5d91
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GVKF6y0w3Dbr9Gd1ktsDGNdgg5/1eadb469-18c4-4040-8e9c-2499a1357674.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GVKF6y0w3Dbr9Gd1ktsDGNdgg5/3de0e84b-34da-42bc-86f4-596318d95891.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"stuff — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
