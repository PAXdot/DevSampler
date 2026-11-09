"use client"

// AsciiArt — "barber", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=74bbd566-6dbc-427b-808d-5457d18156b0
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H0cFXNmjKTZIPXU6tldfFwZPRB/a145b142-ed53-4499-a48c-45d40dad3c48.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H0cFXNmjKTZIPXU6tldfFwZPRB/71b08e54-51e5-4bf1-9c06-fc8716d15ed8.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"barber — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
