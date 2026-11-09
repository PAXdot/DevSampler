"use client"

// AsciiArt — "nsutx", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=99558e1b-3ca6-4477-818a-577041d9816a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HmpR0LBYGKO2VSnaguqHOwEcog/25e9c75c-5637-483a-be08-aa85bc6c8388.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HmpR0LBYGKO2VSnaguqHOwEcog/b4a16422-815e-4bd7-938a-7983f8abe610.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"nsutx — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
