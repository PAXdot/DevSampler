"use client"

// AsciiArt — "ascidev", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=cc66b353-b652-4dfe-b76b-ab63c426faf2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HKG5dNzqPPhLG3h4mVCIcdU230/f62d8f1d-58fb-4426-8697-febd21bf35dd.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HKG5dNzqPPhLG3h4mVCIcdU230/c2bd8d16-20a1-4a6c-b703-91f1b1a636f4.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ascidev — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
