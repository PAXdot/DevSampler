"use client"

// AsciiArt — "Surf BG 2", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1a8c8fb8-562d-473e-b360-c98c94606421
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GJ8AqrnJWOdmBggnZwjxRlnhmy/e99e47f8-0bcc-44a3-a45e-8f99bd16e2ca.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GJ8AqrnJWOdmBggnZwjxRlnhmy/cc796f53-f2f0-482e-b866-adc0788c2c3c.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Surf BG 2 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
