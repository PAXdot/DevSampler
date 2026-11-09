"use client"

// AsciiArt — "Book", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=684a1a7e-4542-41aa-9555-93e385237526
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3JTeOvJL3zBJJeWEyIJlQwm9hMN/4441d279-181c-4d84-973b-c76e2a149ded.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3JTeOvJL3zBJJeWEyIJlQwm9hMN/d688c899-d2aa-4194-aaa9-433ca26006db.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Book — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
