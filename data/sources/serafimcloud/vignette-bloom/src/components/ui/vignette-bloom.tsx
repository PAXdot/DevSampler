"use client"

// AsciiArt — "Vignette Bloom", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e05cb032-35be-4bcd-999b-cbf5b1588bac
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2nElBLvklOKlAURm6W1PTu6yYFh/ce2c1d6e-d203-4519-8bd5-8fabf950352b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2nElBLvklOKlAURm6W1PTu6yYFh/0920f00b-2ec1-4cb9-87ec-5ba0d33c1d32.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Vignette Bloom — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
