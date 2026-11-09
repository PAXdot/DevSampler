"use client"

// AsciiArt — "n ASCII", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=04303476-5fa2-408a-912b-f51d1935dc7e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_30XIKFZ370uhAIEjYnAUVACE5e3/2d0ccf06-0983-4d4a-9a47-f4000345b9f2.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_30XIKFZ370uhAIEjYnAUVACE5e3/b1bc717b-9e46-449a-976e-b635d29acb8b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"n ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
