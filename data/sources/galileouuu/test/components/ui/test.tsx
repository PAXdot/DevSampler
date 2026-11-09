"use client"

// AsciiArt — "Test", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=192385b1-fa47-4360-9f82-a08b76aa24aa
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HFdVTD9diwPmr9RNePcj28skGj/f02748c0-db16-415a-8421-180fcf0cdcfd.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HFdVTD9diwPmr9RNePcj28skGj/a82ea67e-6f06-41f0-bc7a-39bdc8fca81a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Test — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
