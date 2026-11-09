"use client"

// AsciiArt — "page 2", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=af85970c-e392-423a-a81b-20003dfc4600
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Jt70bkBzdoRrCLrsxk1Je3d4ty/de587477-5d97-41e6-8334-ae54a106f851.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Jt70bkBzdoRrCLrsxk1Je3d4ty/b2ba5b83-b27d-4e71-8440-64ce72289b00.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"page 2 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
