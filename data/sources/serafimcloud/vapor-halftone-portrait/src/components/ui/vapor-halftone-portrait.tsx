"use client"

// AsciiArt — "Vapor Halftone Portrait", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=dfafeb46-1557-4084-a562-1a7519c9d70e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2nElBLvklOKlAURm6W1PTu6yYFh/c49f880f-aee3-49ce-b565-29a0deea2c58.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2nElBLvklOKlAURm6W1PTu6yYFh/a210f50a-f035-4c56-9ec7-c3be7942fd4f.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Vapor Halftone Portrait — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
