"use client"

// AsciiArt — "Dither Effect", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ff65e9f2-c2ec-443a-a146-45a4b460d8a7
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FtGtt8tPJzeStRvUhBVTUY2i6o/b9370f4d-c39e-4b6c-94b8-ec33269590b1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FtGtt8tPJzeStRvUhBVTUY2i6o/9a960ef5-85a1-4aff-826e-8fc8319bd173.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Dither Effect — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
