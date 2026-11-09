"use client"

// AsciiArt — "neuroserver1", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=244d083c-02d2-46ed-a93d-b7ed19a0abdc
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3K9kvniV7pOepKoTlNZWsKrAP4L/74c72202-e8de-4511-ac82-edc1afe8d3cf.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3K9kvniV7pOepKoTlNZWsKrAP4L/28c75ef4-d6ae-435c-8ffc-2c1fc70310f3.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"neuroserver1 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
